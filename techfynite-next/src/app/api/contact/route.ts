import { forwardSubmission, isEmail, text } from "@/lib/forward";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot field: real visitors never see it, so a value means a bot.
  if (text(body.company, 200)) {
    return Response.json({ message: "Thanks! We'll get back to you shortly." });
  }

  const name = text(body.name, 120);
  const email = text(body.email, 254);
  const details = text(body.details, 5000);

  if (!name || !details) {
    return Response.json({ error: "Please fill in your name and message." }, { status: 400 });
  }
  if (!isEmail(email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const result = await forwardSubmission("CONTACT_WEBHOOK_URL", "contact", {
    name,
    email,
    website: text(body.website, 300),
    budget: text(body.budget, 60),
    service: text(body.service, 80),
    details,
  });

  if (!result.ok) {
    return Response.json({ error: result.error }, { status: result.status });
  }
  return Response.json({ message: "Thanks! We'll get back to you shortly." });
}
