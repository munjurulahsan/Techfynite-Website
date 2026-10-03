import { forwardSubmission, isEmail, text } from "@/lib/forward";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = text(body.email, 254);
  if (!isEmail(email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const result = await forwardSubmission("NEWSLETTER_WEBHOOK_URL", "newsletter", { email });
  if (!result.ok) {
    return Response.json({ error: result.error }, { status: result.status });
  }
  return Response.json({ message: "Thanks for subscribing!" });
}
