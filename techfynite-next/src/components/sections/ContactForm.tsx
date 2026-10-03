"use client";

import { useState, type FormEvent } from "react";
import { budgetOptions, serviceOptions } from "@/data/site";
import { cn } from "@/lib/cn";

type Status = "idle" | "loading" | "success" | "error";

const field =
  "w-full rounded-md border border-[#c9c9c9] bg-white px-3 py-3 text-base text-ink placeholder:text-[#9a9a9a] focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";
const label = "mb-2 block text-sm text-ink";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { message?: string; error?: string };
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      setStatus("success");
      setMessage(data.message ?? "Thanks! We'll get back to you shortly.");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-[#d9d9d9] p-2.5"
      aria-describedby="contact-status"
    >
      <div className="grid gap-5 rounded-xl bg-[#f1f1f1] p-5 md:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="cf-name" className={label}>
              Full Name
            </label>
            <input
              id="cf-name"
              name="name"
              required
              autoComplete="name"
              placeholder="Enter your full name"
              className={field}
            />
          </div>
          <div>
            <label htmlFor="cf-email" className={label}>
              Email Address
            </label>
            <input
              id="cf-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              className={field}
            />
          </div>
        </div>
        <div>
          <label htmlFor="cf-website" className={label}>
            Website (optional)
          </label>
          <input
            id="cf-website"
            name="website"
            inputMode="url"
            autoComplete="url"
            placeholder="Company Website"
            className={field}
          />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="cf-budget" className={label}>
              Select Budget
            </label>
            <select id="cf-budget" name="budget" defaultValue="" className={field}>
              <option value="">Select…</option>
              {budgetOptions.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="cf-service" className={label}>
              Select Service
            </label>
            <select id="cf-service" name="service" defaultValue="" className={field}>
              <option value="">Select…</option>
              {serviceOptions.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="cf-details" className={label}>
            How may we assist you?
          </label>
          <textarea
            id="cf-details"
            name="details"
            required
            rows={4}
            placeholder="Give us more info.."
            className={cn(field, "resize-y")}
          />
        </div>
        {/* Honeypot: hidden from people, often filled in by bots. */}
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-md bg-brand py-3 text-sm font-medium text-white transition-colors hover:bg-brand-dark disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : "Send Your Message"}
        </button>
        <p
          id="contact-status"
          role="status"
          className={cn(
            "text-sm",
            status === "error" ? "text-red-600" : "text-green-700",
            status !== "success" && status !== "error" && "sr-only",
          )}
        >
          {message}
        </p>
      </div>
    </form>
  );
}
