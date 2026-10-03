import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

/** Pale-yellow call-to-action panel used at the bottom of the project pages. */
export function YellowCta({
  title,
  body,
  visual,
  layout = "split",
}: {
  title: string;
  body: string;
  visual: ReactNode;
  layout?: "split" | "stacked";
}) {
  const stacked = layout === "stacked";
  return (
    <Reveal
      className={
        stacked
          ? "overflow-hidden rounded-2xl bg-[#fff4a3] px-6 pt-14 text-center"
          : "grid items-center gap-8 overflow-hidden rounded-2xl bg-[#fff4a3] px-6 pt-14 md:grid-cols-2 md:px-14 md:pt-0"
      }
    >
      <div className={stacked ? "mx-auto max-w-md" : "text-center md:py-24"}>
        <h2 className="text-4xl leading-tight tracking-tight text-ink md:text-[44px]">{title}</h2>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-ink">{body}</p>
        <Link
          href="/contact-us"
          className="mt-6 inline-block rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand"
        >
          Start your project
        </Link>
      </div>
      {visual}
    </Reveal>
  );
}
