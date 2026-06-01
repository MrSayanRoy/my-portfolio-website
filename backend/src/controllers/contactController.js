const { validationResult } = require("express-validator");
const { sendContactEmail } = require("../config/mailer");

async function handleContact(req, res) {
  // Validate input
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      success: false,
      message: "Validation failed.",
      errors: errors.array().map((e) => ({ field: e.path, message: e.msg })),
    });
  }

  const { name, email, message } = req.body;

  try {
    await sendContactEmail({ name, email, message });

    console.log(`[Contact] New message from ${name} <${email}>`);

    return res.status(200).json({
      success: true,
      message: "Message sent! Sayan will get back to you soon.",
    });
  } catch (err) {
    console.error("[Contact] Email send failed:", err.message);

    // Don't reveal internal errors to the client
    return res.status(500).json({
      success: false,
      message: "Failed to send your message. Please try emailing directly at mr.sayan14@gmail.com.",
    });
  }
}

module.exports = { handleContact };
