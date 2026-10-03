import { TickerStar } from "@/components/icons";
import { tickerRows } from "@/data/home";
import { cn } from "@/lib/cn";

function Band({
  words,
  className,
  reverse,
}: {
  words: string[];
  className: string;
  reverse?: boolean;
}) {
  // Repeat enough times to cover wide screens, then duplicate for a seamless loop.
  const run = Array.from({ length: 4 }, () => words).flat();
  return (
    <div className={cn("absolute left-1/2 w-[130%] -translate-x-1/2 py-4 md:py-5", className)}>
      <div
        className={cn(
          "flex w-max animate-marquee items-center [--marquee-duration:40s]",
          reverse && "[animation-direction:reverse]",
        )}
      >
        {[...run, ...run].map((w, i) => (
          <span key={i} className="flex items-center" aria-hidden={i >= run.length}>
            <span className="px-8 font-display text-2xl font-bold whitespace-nowrap md:text-[32px]">
              {w}
            </span>
            <TickerStar className="size-6 opacity-90" />
          </span>
        ))}
      </div>
    </div>
  );
}

/** Two crossing marquee bands listing what the studio does. */
export function Tickers() {
  return (
    <section aria-label="What we do" className="relative h-[220px] overflow-hidden md:h-[300px]">
      <Band
        words={tickerRows[1]}
        className="top-1/2 -translate-y-1/2 -rotate-[4deg] bg-[#111] text-white"
        reverse
      />
      <Band
        words={tickerRows[0]}
        className="top-1/2 -translate-y-1/2 rotate-[4deg] bg-[#1e5fd1] text-white shadow-lg"
      />
    </section>
  );
}
