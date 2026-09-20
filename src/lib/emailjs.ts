import emailjs from "@emailjs/browser";

// Set in .env.local for dev, and as repo secrets injected at build time
// for the GitHub Pages deploy — see README "Contact form setup".
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const NOTIFY_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_NOTIFY_ID;
const CONFIRM_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CONFIRM_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export const isEmailjsConfigured = Boolean(
  SERVICE_ID && NOTIFY_TEMPLATE_ID && CONFIRM_TEMPLATE_ID && PUBLIC_KEY
);

/** Sends the lead notification (to the site owner) and, best-effort,
 *  the confirmation autoresponse (to the lead) — both straight from
 *  the browser via EmailJS, using the form's own field names as
 *  template variables. The notify email is the one that must succeed;
 *  a failed confirmation email doesn't fail the whole submission. */
export async function sendLeadEmails(form: HTMLFormElement) {
  if (!SERVICE_ID || !NOTIFY_TEMPLATE_ID || !CONFIRM_TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error("EmailJS is not configured");
  }

  await emailjs.sendForm(SERVICE_ID, NOTIFY_TEMPLATE_ID, form, {
    publicKey: PUBLIC_KEY,
  });

  try {
    await emailjs.sendForm(SERVICE_ID, CONFIRM_TEMPLATE_ID, form, {
      publicKey: PUBLIC_KEY,
    });
  } catch (err) {
    console.warn("Lead confirmation email failed to send:", err);
  }
}
