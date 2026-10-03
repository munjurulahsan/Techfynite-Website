import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "@/components/icons";
import { cn } from "@/lib/cn";

type Variant = "brand" | "light";
type Size = "sm" | "md";

const variants: Record<Variant, { root: string; circle: string }> = {
  brand: {
    root: "bg-brand text-white hover:bg-brand-dark",
    circle: "bg-white text-ink",
  },
  light: {
    root: "bg-white text-ink hover:bg-white/90",
    circle: "bg-brand text-white",
  },
};

const sizes: Record<Size, { root: string; circle: string }> = {
  sm: { root: "h-8 pl-4 pr-0.5 text-sm gap-3", circle: "size-7" },
  md: { root: "h-11 pl-6 pr-1 text-base gap-4", circle: "size-9" },
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

/** The pill button with a round arrow badge used across the original site. */
export function PillButton({ href, children, variant = "brand", size = "md", className }: Props) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  const v = variants[variant];
  const s = sizes[size];
  const classes = cn(
    "group inline-flex items-center rounded-full font-medium transition-colors",
    v.root,
    s.root,
    className,
  );
  const inner = (
    <>
      <span>{children}</span>
      <span
        className={cn(
          "grid place-items-center overflow-hidden rounded-full border border-brand/20",
          v.circle,
          s.circle,
        )}
      >
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      </span>
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}

/** Plain text link followed by an arrow ("Learn More →"). */
export function ArrowLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn("group inline-flex items-center gap-2 font-medium", className)}
    >
      {children}
      <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}
