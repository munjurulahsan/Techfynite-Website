import { Check } from "@/components/icons";
import { cn } from "@/lib/cn";

export function CheckList({
  items,
  tone = "solid",
  className,
}: {
  items: string[];
  tone?: "solid" | "soft" | "muted";
  className?: string;
}) {
  const badge = {
    solid: "bg-[#1e4a8f] text-white",
    soft: "bg-[#e8eefb] text-[#1e4a8f]",
    muted: "bg-[#eceef2] text-[#6b7280]",
  }[tone];
  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-[#1f2937]">
          <span className={cn("mt-0.5 grid size-5 shrink-0 place-items-center rounded-full", badge)}>
            <Check className="size-3" />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
