const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Sends a contact form email to Sayan.
 */
async function sendContactEmail({ name, email, message }) {
    const toOwner = await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: [process.env.CONTACT_RECEIVER_EMAIL],
        replyTo: email,
        subject: `📬 New Message from ${name} — Portfolio`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2>New Portfolio Contact</h2>

                <p><strong>Name:</strong> ${name}</p>

                <p>
                    <strong>Email:</strong>
                    <a href="mailto:${email}">${email}</a>
                </p>

                <p><strong>Message:</strong></p>

                <p style="white-space: pre-wrap;">
                    ${message}
                </p>
            </div>
        `
    });

    if (toOwner.error) {
        console.error("[Contact] Owner email failed:", toOwner.error);
        throw new Error(toOwner.error.message);
    }

    return {
        success: true,
        ownerEmail: toOwner.data
    };
}

module.exports = { sendContactEmail };
