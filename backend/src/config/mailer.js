const nodemailer = require("nodemailer");

let transporter = null;

function getTransporter() {
  if (transporter) return transporter;

  transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // Gmail App Password
    },
  });

  return transporter;
}

/**
 * Sends a contact form email to Sayan and an auto-reply to the sender.
 */
async function sendContactEmail({ name, email, message }) {
  const transport = getTransporter();

  // 1. Email to Sayan with the visitor's message
  const toOwner = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.CONTACT_RECEIVER_EMAIL || process.env.EMAIL_USER,
    replyTo: email,
    subject: `📬 New Message from ${name} — Portfolio`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
        <div style="background: #111827; color: #fff; padding: 24px;">
          <h2 style="margin: 0; font-size: 20px;">New Portfolio Contact</h2>
          <p style="margin: 4px 0 0; color: #9ca3af; font-size: 14px;">Submitted on ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</p>
        </div>
        <div style="padding: 24px; background: #fff;">
          <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
            <tr>
              <td style="padding: 8px 0; color: #6b7280; width: 80px; vertical-align: top;"><strong>Name</strong></td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; vertical-align: top;"><strong>Email</strong></td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 12px 0 0; color: #6b7280; vertical-align: top;"><strong>Message</strong></td>
              <td style="padding: 8px 0; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
        </div>
        <div style="background: #f9fafb; padding: 16px 24px; border-top: 1px solid #e5e7eb; font-size: 13px; color: #6b7280;">
          Reply directly to this email to respond to ${name}.
        </div>
      </div>
    `,
  };

  // 2. Auto-reply to the visitor
  const toVisitor = {
    from: `"Sayan Roy" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: `Thanks for reaching out, ${name}!`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
        <div style="background: #111827; color: #fff; padding: 24px;">
          <h2 style="margin: 0; font-size: 20px;">Hey ${name}, thanks for reaching out!</h2>
        </div>
        <div style="padding: 24px; background: #fff; font-size: 15px; line-height: 1.7; color: #374151;">
          <p>I've received your message and will get back to you as soon as possible — usually within 24 hours.</p>
          <p>Here's what you sent:</p>
          <blockquote style="border-left: 4px solid #e5e7eb; margin: 16px 0; padding: 12px 16px; background: #f9fafb; color: #6b7280; font-style: italic; border-radius: 0 4px 4px 0;">
            ${message}
          </blockquote>
          <p>In the meantime, feel free to check out my work on 
            <a href="https://github.com/MrSayanRoy" style="color: #2563eb;">GitHub</a> or connect on 
            <a href="https://www.linkedin.com/in/sayan-roy-25b59333a/" style="color: #2563eb;">LinkedIn</a>.
          </p>
          <p style="margin-top: 24px;">Best,<br/><strong>Sayan Roy</strong><br/>Full Stack Developer</p>
        </div>
        <div style="background: #f9fafb; padding: 16px 24px; border-top: 1px solid #e5e7eb; font-size: 13px; color: #6b7280;">
          This is an automated reply. You can also reach me at 
          <a href="https://api.whatsapp.com/send?phone=919474883375" style="color: #2563eb;">WhatsApp</a>.
        </div>
      </div>
    `,
  };

  await Promise.all([
    transport.sendMail(toOwner),
    transport.sendMail(toVisitor),
  ]);
}

module.exports = { sendContactEmail };
