import Image from "next/image";
import { clientLogos } from "@/data/site";
import { cn } from "@/lib/cn";

/** Endless row of client logos. `invert` renders them white for dark backgrounds. */
export function LogoMarquee({ className, invert = false }: { className?: string; invert?: boolean }) {
  const row = [...clientLogos, ...clientLogos];
  return (
    <div
      className={cn(
        "relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
        className,
      )}
    >
      <ul className="flex w-max animate-marquee gap-14 [--marquee-duration:35s] hover:[animation-play-state:paused]">
        {row.map((logo, i) => (
          <li
            key={`${logo.name}-${i}`}
            aria-hidden={i >= clientLogos.length}
            className={cn(
              "flex shrink-0 items-center gap-2 font-alexandria text-lg tracking-tight",
              invert ? "text-white" : "text-[#4d4d4d]",
            )}
          >
            <Image
              src={logo.src}
              alt=""
              width={28}
              height={32}
              className={cn("h-8 w-auto", invert && "brightness-0 invert")}
            />
            {logo.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
