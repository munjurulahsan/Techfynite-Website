import type { Metadata } from "next";
import { PillButton } from "@/components/ui/PillButton";

export const metadata: Metadata = {
  title: { absolute: "Page Not Found – TechFynite" },
  description:
    "The page you’re looking for doesn’t exist or may have moved. Go back home and explore TechFynite’s design, development, and digital innovation services.",
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid-bg absolute inset-0" aria-hidden />
      <div className="container-page relative flex flex-col items-center py-24 text-center md:py-32">
        <p className="font-display text-[140px] leading-none font-bold tracking-tighter text-ink-blue md:text-[220px]">
          404
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          Take a U-Turn, Captain!
        </h1>
        <p className="mt-5 max-w-lg text-lg leading-relaxed text-[#555]">
          The page you’re looking for might have been removed, renamed, or never existed. You can
          get back to home.
        </p>
        <PillButton href="/" className="mt-10">
          Back to home
        </PillButton>
      </div>
    </section>
  );
}
