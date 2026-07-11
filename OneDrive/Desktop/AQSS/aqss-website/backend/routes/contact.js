import express from 'express';
import Joi from 'joi';
import { sendEmail } from '../utils/emailService.js';

const router = express.Router();

// Validation schema
const contactSchema = Joi.object({
  name: Joi.string().required().max(100).messages({
    'string.empty': 'Name is required',
    'string.max': 'Name cannot exceed 100 characters',
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'Please enter a valid email address',
    'string.empty': 'Email is required',
  }),
  phone: Joi.string().pattern(/^[\+]?[1-9][\d]{0,15}$/).required().messages({
    'string.pattern.base': 'Please enter a valid phone number',
    'string.empty': 'Phone number is required',
  }),
  company: Joi.string().max(100).optional(),
  service: Joi.string().valid(
    'ISO Certification',
    'Quality Documentation',
    'Training Programs',
    'Internal Audits',
    'Other'
  ).default('Other'),
  message: Joi.string().required().max(1000).messages({
    'string.empty': 'Message is required',
    'string.max': 'Message cannot exceed 1000 characters',
  }),
});

// POST /api/contact - Submit contact form
router.post('/', async (req, res) => {
  try {
    // Validate request body
    console.log("Incoming Body:", req.body);

const { error, value } = contactSchema.validate(req.body, {
  abortEarly: false,
});

if (error) {
  console.log("Joi Error:", error.details);

  return res.status(400).json({
    success: false,
    message: "Validation error",
    errors: error.details,
  });
}
    // Send email notification
    try {
      await sendEmail({
        to: process.env.EMAIL_TO || 'rohitkumarhjp9097@gmail.com',
        subject: `New Contact Form Submission - ${value.name}`,
        html: generateEmailTemplate(value),
      });
    } catch (emailError) {
      console.error('Failed to send email:', emailError);
      return res.status(500).json({
        success: false,
        message: emailError.message || 'Failed to send email notification',
        details: emailError.stack,
      });
    }

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: {
        name: value.name,
        email: value.email,
        phone: value.phone,
        service: value.service,
      },
    });
  } catch (error) {
    console.error('Contact form submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
});

// Email template generator
function generateEmailTemplate(contact) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Contact Form Submission</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #3b82f6; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9fafb; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #1f2937; }
        .value { margin-top: 5px; padding: 10px; background: white; border-radius: 5px; }
        .footer { padding: 20px; text-align: center; color: #6b7280; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Contact Form Submission</h1>
          <p>Advance Quality Service and Solution (AQSS)</p>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Name:</div>
            <div class="value">${contact.name}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${contact.email}</div>
          </div>
          <div class="field">
            <div class="label">Phone:</div>
            <div class="value">${contact.phone}</div>
          </div>
          ${contact.company ? `
          <div class="field">
            <div class="label">Company:</div>
            <div class="value">${contact.company}</div>
          </div>
          ` : ''}
          <div class="field">
            <div class="label">Service Interest:</div>
            <div class="value">${contact.service}</div>
          </div>
          <div class="field">
            <div class="label">Message:</div>
            <div class="value">${contact.message}</div>
          </div>
          <div class="field">
            <div class="label">Submitted:</div>
            <div class="value">${new Date().toLocaleString()}</div>
          </div>
        </div>
        <div class="footer">
          <p>This email was sent from the AQSS website contact form.</p>
          <p>Please respond to the inquiry as soon as possible.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

export default router;
