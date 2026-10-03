"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function Newsletter() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = new FormData(form).get("email");
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json()) as { message?: string; error?: string };
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      setStatus("success");
      setMessage(data.message ?? "Thanks for subscribing!");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#1062c8] to-[#1236a8] py-14 text-white md:py-16">
      <Image
        src="/images/common/newsletter-bg.png"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover opacity-15 mix-blend-overlay"
      />
      <div className="container-page relative flex flex-col items-center text-center">
        <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
          Get the Latest from TechFynite
        </h2>
        <p className="mt-3 max-w-xl text-lg text-white/85">
          Fresh design inspiration, industry news, and exclusive updates every month.
        </p>
        <form
          onSubmit={onSubmit}
          className="mt-7 flex w-full max-w-[534px] gap-2 rounded-md bg-white p-2.5"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="min-w-0 flex-1 rounded-md border border-black/10 bg-[#f3f3f3] px-3 text-sm text-ink placeholder:text-[#999] focus:outline-2 focus:outline-brand"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-md bg-[#1062c8] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0d4fa3] disabled:opacity-60 sm:px-8"
          >
            {status === "loading" ? "Subscribing…" : "Subscribe Now"}
          </button>
        </form>
        <p
          role="status"
          className={status === "error" ? "mt-3 text-sm text-red-200" : "mt-3 text-sm text-white/90"}
        >
          {status === "success" || status === "error" ? message : ""}
        </p>
      </div>
    </section>
  );
}
