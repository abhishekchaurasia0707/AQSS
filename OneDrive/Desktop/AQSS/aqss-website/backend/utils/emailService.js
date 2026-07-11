import nodemailer from 'nodemailer';

const validateEmailConfig = () => {
  if (process.env.EMAIL_HOST === 'smtp.ethereal.email') {
    return;
  }

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error('Email configuration incomplete: EMAIL_USER and EMAIL_PASS are required.');
  }
};

// Create transporter
const createTransporter = async () => {
  validateEmailConfig();

  // Use Ethereal for testing
  if (process.env.EMAIL_HOST === 'smtp.ethereal.email') {
    const testAccount = await nodemailer.createTestAccount();
    return nodemailer.createTransport({
      host: testAccount.smtp.host,
      port: testAccount.smtp.port,
      secure: testAccount.smtp.secure,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
  }
  
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: process.env.EMAIL_PORT || 587,
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// Send email function
export const sendEmail = async ({ to, subject, html, text }) => {
  try {
    const transporter = await createTransporter();

    const mailOptions = {
      from: `"AQSS" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
      text,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    
    // For Ethereal testing, log the preview URL
    if (process.env.EMAIL_HOST === 'smtp.ethereal.email') {
      console.log('📧 Preview URL:', nodemailer.getTestMessageUrl(info));
    }
    
    return info;
  } catch (error) {
    console.error('Email sending failed:', error);
    throw new Error('Failed to send email');
  }
};

// Send contact confirmation email
export const sendContactConfirmation = async (contact) => {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Thank you for contacting AQSS</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #3b82f6; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9fafb; }
        .footer { padding: 20px; text-align: center; color: #6b7280; font-size: 12px; }
        .btn { display: inline-block; padding: 12px 24px; background: #3b82f6; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Thank You for Contacting AQSS</h1>
          <p>Advance Quality Service and Solution</p>
        </div>
        <div class="content">
          <p>Dear ${contact.name},</p>
          <p>Thank you for reaching out to us. We have received your inquiry and will get back to you within 24 hours.</p>
          
          <h3>Your Inquiry Details:</h3>
          <ul>
            <li><strong>Service Interest:</strong> ${contact.service}</li>
            <li><strong>Message:</strong> ${contact.message}</li>
          </ul>
          
          <p>For urgent matters, please call us at +91 87969 05471</p>
          
          <a href="tel:+918796905471" class="btn">Call Us Now</a>
          
          <p>Best regards,<br/>Team AQSS</p>
        </div>
        <div class="footer">
          <p>Advance Quality Service and Solution (AQSS)</p>
          <p>Email: aqssolution11@gmail.com | Phone: +91 87969 05471</p>
          <p>Pune, Maharashtra, India</p>
        </div>
      </div>
    </body>
    </html>
  `;

  await sendEmail({
    to: contact.email,
    subject: 'Thank you for contacting AQSS',
    html,
  });
};
