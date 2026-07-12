import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Send email function using Resend
export const sendEmail = async ({ to, subject, html, text }) => {
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
};

// Send contact confirmation email
export const sendContactConfirmation = async (contact) => {
  const html = `
    <!DOCTYPE html>
    <html>
      <body style="font-family: Arial, sans-serif;">
        <h2>Thank You for Contacting AQSS</h2>

        <p>Dear <b>${contact.name}</b>,</p>

        <p>
          Thank you for contacting AQSS.
          We have received your inquiry and will contact you shortly.
        </p>

        <hr>

        <p><b>Service:</b> ${contact.service}</p>
        <p><b>Message:</b> ${contact.message}</p>

        <br>

        <p>
          Regards,<br>
          AQSS Team
        </p>
      </body>
    </html>
  `;

  return sendEmail({
    to: contact.email,
    subject: "Thank you for contacting AQSS",
    html,
  });
};
