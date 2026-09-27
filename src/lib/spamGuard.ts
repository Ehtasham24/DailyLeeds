// Lightweight, client-side spam protection for the contact form. EmailJS's
// free plan has no domain allowlist or rate limiting, so these checks are
// what stand between bots and the email quota (and the lead autoresponse,
// which would otherwise email any address a bot typed in).

/** Name of the hidden field humans never see — bots that auto-fill every
 *  input fill this one too. */
export const HONEYPOT_FIELD = "website";

/** Real people take a few seconds to fill six fields; scripts don't. */
const MIN_FILL_MS = 3000;

const COOLDOWN_MS = 60_000;
const COOLDOWN_KEY = "dl-contact-last-sent";

/** True when the submission looks automated. Callers should fake success
 *  rather than show an error, so bots get no signal to adapt to. */
export function looksLikeBot(form: HTMLFormElement, renderedAt: number) {
  const honeypot = new FormData(form).get(HONEYPOT_FIELD);
  return Boolean(honeypot) || Date.now() - renderedAt < MIN_FILL_MS;
}

/** Seconds left before this browser may send again (0 when it can). */
export function cooldownRemaining() {
  try {
    const last = Number(localStorage.getItem(COOLDOWN_KEY));
    const left = COOLDOWN_MS - (Date.now() - last);
    return last && left > 0 ? Math.ceil(left / 1000) : 0;
  } catch {
    return 0;
  }
}

export function startCooldown() {
  try {
    localStorage.setItem(COOLDOWN_KEY, String(Date.now()));
  } catch {
    // Storage blocked (private mode etc.) — the other checks still apply.
  }
}
