import "server-only";

type ForwardResult = { ok: true } | { ok: false; status: number; error: string };

/**
 * Sends a form submission to the webhook named by `envVar` (Formspree, Make, Zapier,
 * Slack, n8n, ...). Without a webhook, development logs the payload and succeeds,
 * while production refuses so that submissions are never silently dropped.
 */
export async function forwardSubmission(
  envVar: string,
  kind: string,
  payload: Record<string, unknown>,
): Promise<ForwardResult> {
  const url = process.env[envVar];

  if (!url) {
    if (process.env.NODE_ENV !== "production") {
      console.info(`[${kind}] ${envVar} is not set; submission logged only:`, payload);
      return { ok: true };
    }
    console.error(`[${kind}] ${envVar} is not set; submission rejected.`);
    return {
      ok: false,
      status: 503,
      error: "This form isn't available right now. Please email official@techfynite.com.",
    };
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ type: kind, submittedAt: new Date().toISOString(), ...payload }),
    });
    if (!res.ok) {
      console.error(`[${kind}] webhook responded ${res.status}`);
      return { ok: false, status: 502, error: "We couldn't send that. Please try again." };
    }
    return { ok: true };
  } catch (err) {
    console.error(`[${kind}] webhook request failed`, err);
    return { ok: false, status: 502, error: "We couldn't send that. Please try again." };
  }
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isEmail(value: unknown): value is string {
  return typeof value === "string" && value.length <= 254 && EMAIL_RE.test(value);
}

export function text(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}
