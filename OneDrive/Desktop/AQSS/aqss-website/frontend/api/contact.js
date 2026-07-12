import mongoose from 'mongoose';
import nodemailer from 'nodemailer';
import Joi from 'joi';

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 100 },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    company: { type: String, trim: true, maxlength: 100 },
    service: {
      type: String,
      enum: [
        'ISO Certification',
        'Quality Documentation',
        'Training Programs',
        'Internal Audits',
        'Other',
      ],
      default: 'Other',
    },
    message: { type: String, required: true, trim: true, maxlength: 1000 },
    status: {
      type: String,
      enum: ['pending', 'contacted', 'closed'],
      default: 'pending',
    },
    priority: {
      type: String,
      enum: ['low', 'medium', 'high'],
      default: 'medium',
    },
    notes: { type: String, trim: true, maxlength: 500 },
  },
  { timestamps: true }
);

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

const contactValidationSchema = Joi.object({
  name: Joi.string().required().max(100),
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(/^[\+]?[1-9][\d]{0,15}$/).required(),
  company: Joi.string().max(100).allow('', null),
  service: Joi.string()
    .valid('ISO Certification', 'Quality Documentation', 'Training Programs', 'Internal Audits', 'Other')
    .default('Other'),
  message: Joi.string().required().max(1000),
});

let cached = global._mongoose;
if (!cached) {
  cached = global._mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error('MONGODB_URI is not defined');
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

function createTransporter() {
  if (process.env.EMAIL_HOST === 'smtp.ethereal.email') {
    return nodemailer.createTestAccount().then(testAccount =>
      nodemailer.createTransport({
        host: testAccount.smtp.host,
        port: testAccount.smtp.port,
        secure: testAccount.smtp.secure,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      })
    );
  }

  return Promise.resolve(
    nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: Number(process.env.EMAIL_PORT || 587),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })
  );
}

async function sendEmail({ to, subject, html, text }) {
  const transporter = await createTransporter();
  const mailOptions = {
    from: `AQSS <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
    text,
  };
  const info = await transporter.sendMail(mailOptions);

  if (process.env.EMAIL_HOST === 'smtp.ethereal.email') {
    console.log('📧 Preview URL:', nodemailer.getTestMessageUrl(info));
  }

  return info;
}

function generateEmailTemplate(contact) {
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><title>New Contact Form Submission</title></head><body><h1>New Contact Form Submission</h1><p><strong>Name:</strong> ${contact.name}</p><p><strong>Email:</strong> ${contact.email}</p><p><strong>Phone:</strong> ${contact.phone}</p><p><strong>Company:</strong> ${contact.company || 'N/A'}</p><p><strong>Service:</strong> ${contact.service}</p><p><strong>Message:</strong> ${contact.message}</p></body></html>`;
}

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json({ status: 'OK', message: 'AQSS API is running' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};
    const { error, value } = contactValidationSchema.validate(body, { abortEarly: false, stripUnknown: true });

    if (error) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: error.details.map(detail => ({ field: detail.path.join('.'), message: detail.message })),
      });
    }

    await connectToDatabase();
    const contact = await Contact.create(value);

    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        await sendEmail({
          to: process.env.EMAIL_TO || 'aqssolution11@gmail.com',
          subject: `New Contact Form Submission - ${contact.name}`,
          html: generateEmailTemplate(contact),
        });
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
      }
    }

    return res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: { id: contact._id, name: contact.name, email: contact.email, service: contact.service },
    });
  } catch (err) {
    console.error('Contact submission failed:', err);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
}
