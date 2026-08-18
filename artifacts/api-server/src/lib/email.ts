import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
  throw new Error("RESEND_API_KEY is not configured");

}

const fromEmail =
  process.env.FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

export const resend = new Resend(apiKey);

export async function sendContactEmails({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string | null;
  message: string;
}) {
  // Email to you
  const adminEmail = await resend.emails.send({
    from: fromEmail,
    to: ["shubhamkumaragarwal2@gmail.com"],
    subject: `New Contact Form Submission${subject ? ` - ${subject}` : ""}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>New Contact Form Submission</h2>

        <p>You received a new message through your portfolio.</p>

        <hr />

        <p>
          <strong>Name:</strong> ${escapeHtml(name)}
        </p>

        <p>
          <strong>Email:</strong> ${escapeHtml(email)}
        </p>

        <p>
          <strong>Subject:</strong> ${escapeHtml(subject || "No subject")}
        </p>

        <p>
          <strong>Message:</strong>
        </p>

        <div
          style="
            background: #f5f5f5;
            padding: 16px;
            border-radius: 8px;
            white-space: pre-wrap;
          "
        >
          ${escapeHtml(message)}
        </div>

        <hr />

        <p>
          You can reply directly to:
          <strong>${escapeHtml(email)}</strong>
        </p>
      </div>
    `,
    replyTo: email,
  });

  if (adminEmail.error) {
    throw new Error(
      `Failed to send admin email: ${adminEmail.error.message}`,
    );
  }

  // Confirmation email to visitor
  const visitorEmail = await resend.emails.send({
    from: fromEmail,
    to: [email],
    subject: "Thanks for reaching out!",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">

        <h2>Thank you for reaching out!</h2>

        <p>Hi ${escapeHtml(name)},</p>

        <p>
          Thanks for contacting me through my portfolio.
          I've received your message successfully.
        </p>

        <p>
          I'll review your message and get back to you soon.
        </p>

        <br />

        <p>
          Best regards,<br />
          <strong>Shubham Kumar Agarwal</strong>
        </p>

      </div>
    `,
  });

  if (visitorEmail.error) {
    throw new Error(
      `Failed to send confirmation email: ${visitorEmail.error.message}`,
    );
  }

  return {
    adminEmailId: adminEmail.data?.id,
    visitorEmailId: visitorEmail.data?.id,
  };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}