"use client";

import Image from "next/image";
import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Star } from "@/components/icons";
import { Reveal } from "@/components/ui/Reveal";

function Count({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [v, setV] = useState(reduce ? to : 0);
  useEffect(() => {
    if (!inView || reduce) return;
    const c = animate(0, to, { duration: 1.5, ease: "easeOut", onUpdate: (n) => setV(Math.round(n)) });
    return () => c.stop();
  }, [inView, reduce, to]);
  return (
    <span ref={ref} className="font-display text-7xl leading-none font-light tracking-tight">
      {v}
      <span className="font-script text-5xl">{suffix}</span>
    </span>
  );
}

const cards = [
  { label: "Years of experience", to: 8, suffix: "+", note: "Expertise that drives meaningful results." },
  { label: "Projects delivered", to: 100, suffix: "+", note: "Creative solutions built with purpose." },
  { label: "Brands transformed", to: 86, suffix: "+", note: "From strategy to standout visuals." },
];

export function Counters() {
  const [years, ...rest] = cards;
  return (
    <section className="bg-[#f4f4f4] py-20 md:py-24">
      <div className="mx-auto grid max-w-[1400px] gap-2.5 px-4 sm:grid-cols-2 md:px-8 lg:grid-cols-4">
        <StatCard {...years} />

        <Reveal
          delay={0.05}
          className="flex min-h-[320px] flex-col justify-between rounded-2xl bg-brand p-7 text-white"
        >
          <div>
            <div className="flex items-center">
              <div className="flex -space-x-2.5">
                {[9, 2, 3, 4].map((n) => (
                  <Image
                    key={n}
                    src={`/images/avatars/client-${n}.jpg`}
                    alt=""
                    width={36}
                    height={44}
                    className="h-11 w-9 rounded-md border-2 border-white/80 object-cover"
                  />
                ))}
              </div>
              <span className="-ml-1 grid h-11 place-items-center rounded-md border-2 border-white/80 bg-white px-1.5 text-sm font-medium text-ink">
                72+
              </span>
            </div>
            <div className="mt-4 flex gap-1" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="size-4" />
              ))}
            </div>
            <p className="mt-1 text-base">Happy clients worldwide</p>
          </div>
          <div className="flex items-end justify-between gap-4">
            <Count to={98} suffix="%" />
            <p className="max-w-[9rem] text-right text-lg leading-snug">
              Clients stay for our quality and results.
            </p>
          </div>
        </Reveal>

        {rest.map((c, i) => (
          <StatCard key={c.label} {...c} delay={0.1 + i * 0.05} />
        ))}
      </div>
    </section>
  );
}

function StatCard({
  label,
  to,
  suffix,
  note,
  delay = 0,
}: (typeof cards)[number] & { delay?: number }) {
  return (
    <Reveal
      delay={delay}
      className="flex min-h-[320px] flex-col justify-between rounded-2xl bg-white p-7 text-ink"
    >
      <p className="text-base">{label}</p>
      <div className="flex items-end justify-between gap-4">
        <Count to={to} suffix={suffix} />
        <p className="max-w-[8rem] text-right text-lg leading-snug text-[#555]">{note}</p>
      </div>
    </Reveal>
  );
}
