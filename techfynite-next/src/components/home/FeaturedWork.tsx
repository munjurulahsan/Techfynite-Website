"use client";

import Image from "next/image";
import { AnimatePresence, animate, motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "@/components/icons";
import { Reveal } from "@/components/ui/Reveal";
import { featuredSlides, featuredStats } from "@/data/home";

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, to]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export function FeaturedWork() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = featuredSlides.length;

  function go(step: number) {
    setDirection(step);
    setIndex((i) => (i + step + total) % total);
  }

  return (
    <section className="container-page py-16 md:py-24">
      <Reveal>
        <h2 className="font-display text-5xl font-bold tracking-wide text-[#3a3a3a] uppercase md:text-6xl">
          Featured <span className="text-[#8a8a8a]">Work</span>
        </h2>
      </Reveal>

      <div className="mt-8 grid gap-5 md:grid-cols-[minmax(0,0.95fr)_minmax(0,2fr)]">
        <Reveal className="relative overflow-hidden rounded-3xl bg-[#0b3a8f] text-white">
          <Image
            src="/images/home/stats-bg.png"
            alt=""
            fill
            sizes="(min-width: 768px) 30vw, 100vw"
            className="object-cover"
          />
          <video
            className="absolute inset-0 size-full object-cover opacity-70"
            src="/videos/stats-bg.mp4"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden
          />
          <dl className="relative flex h-full flex-col justify-between gap-8 p-8 md:p-10">
            {featuredStats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse">
                <dt className="mt-2 text-sm text-white/90">{s.label}</dt>
                <dd className="font-display text-6xl leading-none font-medium md:text-7xl">
                  <CountUp to={s.value} suffix={s.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal
          delay={0.1}
          className="relative aspect-[628/337] overflow-hidden rounded-3xl bg-black"
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              className="absolute inset-0"
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={featuredSlides[index]}
                alt={`Featured project ${index + 1} of ${total}`}
                fill
                sizes="(min-width: 768px) 65vw, 100vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute top-8 left-8 border-b border-white/30 pb-3 text-sm text-white">
            {String(index + 1).padStart(2, "0")}{" "}
            <span className="text-white/60">/ {String(total).padStart(2, "0")}</span>
          </div>
          <div className="absolute right-8 bottom-8 flex gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous slide"
              className="grid size-9 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition-colors hover:bg-white/30"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next slide"
              className="grid size-9 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition-colors hover:bg-white/30"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
