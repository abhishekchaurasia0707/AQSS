import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Send email function using Resend
export const sendEmail = async ({ to, subject, html, text }) => {
  try {
    console.log('Sending email via Resend to:', to);
    
    const data = await resend.emails.send({
      from: 'AQSS <onboarding@resend.dev>',
      to: [to],
      subject,
      html,
      text,
    });
    
    console.log('Email sent successfully via Resend:', data);
    return data;
  } catch (error) {
    console.error('Email sending failed via Resend:', error);
    throw new Error(`Failed to send email via Resend: ${error.message}`);
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
