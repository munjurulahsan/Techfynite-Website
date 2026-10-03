import Link from "next/link";
import type { ReactNode } from "react";
import { Burst, ChevronRight, Sparkle } from "@/components/icons";
import { cn } from "@/lib/cn";

export function Breadcrumb({ current }: { current: string }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="inline-flex items-center gap-2 rounded-full border border-[#dfe3f5] bg-white/70 px-5 py-1.5 text-sm backdrop-blur"
    >
      <Link href="/" className="text-muted transition-colors hover:text-ink">
        Home
      </Link>
      <ChevronRight className="size-4 text-muted" />
      <span aria-current="page" className="font-medium text-ink">
        {current}
      </span>
    </nav>
  );
}

/** Large section heading with the eight-point burst ("✷ Our Services"). */
export function BurstHeading({
  children,
  className,
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <Tag
      className={cn(
        "flex items-center gap-4 text-4xl font-semibold tracking-tight text-[#3a3a3a] md:text-6xl",
        className,
      )}
    >
      <Burst className="size-9 shrink-0 text-[#04172f] md:size-12" />
      <span>{children}</span>
    </Tag>
  );
}

/** Small label with a four-point sparkle ("✦ Why brands trust us"). */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("inline-flex items-center gap-2 font-medium", className)}>
      <Sparkle className="size-4" />
      {children}
    </p>
  );
}

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center border border-line bg-white px-2.5 py-1 text-base text-ink",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Words set in the cursive accent font ("Deserves", "Pricing", "Creative"). */
export function Script({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("font-script font-normal not-italic tracking-normal", className)}>
      {children}
    </span>
  );
}
