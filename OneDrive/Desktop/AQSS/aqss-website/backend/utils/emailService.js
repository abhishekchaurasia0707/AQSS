import nodemailer from "nodemailer";

const validateEmailConfig = () => {
  if (process.env.EMAIL_HOST === "smtp.ethereal.email") {
    return;
  }

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error(
      "Email configuration incomplete: EMAIL_USER and EMAIL_PASS are required."
    );
  }
};

// Create transporter
const createTransporter = async () => {
  validateEmailConfig();

  // Ethereal for testing
  if (process.env.EMAIL_HOST === "smtp.ethereal.email") {
    const testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
      host: testAccount.smtp.host,
      port: testAccount.smtp.port,
      secure: testAccount.smtp.secure,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    await transporter.verify();
    console.log("✅ Ethereal SMTP Connected");

    return transporter;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || "smtp.gmail.com",
    port: Number(process.env.EMAIL_PORT) || 587,
    secure: process.env.EMAIL_SECURE === "true",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },

    // Better timeout settings
    connectionTimeout: 60000,
    greetingTimeout: 60000,
    socketTimeout: 60000,
  });

  // Verify SMTP connection
  await transporter.verify();

  console.log("✅ SMTP Connected Successfully");

  return transporter;
};

// Send email

export const sendEmail = async ({ to, subject, html, text }) => {
  console.log("🔥 NEW EMAIL SERVICE VERSION LOADED");
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

    console.log("✅ Email sent:", info.messageId);

    if (process.env.EMAIL_HOST === "smtp.ethereal.email") {
      console.log(
        "📧 Preview URL:",
        nodemailer.getTestMessageUrl(info)
      );
    }

    return info;
  } catch (error) {
    console.error("❌ Email Error:");
    console.error(error);

    throw error;
  }
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
