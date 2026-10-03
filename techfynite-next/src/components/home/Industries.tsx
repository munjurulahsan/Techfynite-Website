import Image from "next/image";
import { BurstHeading } from "@/components/ui/Bits";
import { Reveal } from "@/components/ui/Reveal";
import { industries } from "@/data/home";
import { cn } from "@/lib/cn";

/** Coloured cards that stack on top of each other while scrolling. */
export function Industries() {
  return (
    <section className="container-page py-16 md:py-20">
      <Reveal>
        <BurstHeading>Industries We Serve</BurstHeading>
      </Reveal>

      <ol className="mt-12 flex flex-col gap-8 md:gap-12">
        {industries.map((item, i) => (
          <li
            key={item.title}
            className="sticky"
            style={{ top: `calc(110px + ${i * 18}px)` }}
          >
            <article
              className={cn(
                "relative grid overflow-hidden rounded-[22px] p-6 md:grid-cols-2 md:gap-10 md:p-10 md:pl-20",
                item.dark ? "text-white" : "text-ink",
              )}
              style={{ backgroundColor: item.color }}
            >
              {/* Fluted-glass stripes from the original design. */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-25"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(90deg, rgb(255 255 255 / 0.35) 0 2px, transparent 2px 22px, rgb(0 0 0 / 0.08) 22px 24px, transparent 24px 34px)",
                }}
              />
              <div className="relative flex min-h-56 flex-col justify-between gap-10 md:min-h-0">
                <p className="font-display text-xl font-semibold italic md:text-[22px]">
                  {item.eyebrow}
                </p>
                <div>
                  <h3 className="text-2xl uppercase md:text-[26px]">{item.title}</h3>
                  <p className="mt-3 max-w-lg text-base leading-relaxed opacity-90 md:text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="relative mt-8 rounded-3xl bg-white/85 p-4 md:mt-0 md:p-8">
                <div className="relative aspect-[475/305] overflow-hidden rounded-md shadow-lg">
                  <Image
                    src={item.image}
                    alt={`${item.eyebrow} example`}
                    fill
                    sizes="(min-width: 768px) 40vw, 90vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
