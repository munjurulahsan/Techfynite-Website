"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { ArrowLink, PillButton } from "@/components/ui/PillButton";
import { LogoMarquee } from "@/components/home/LogoMarquee";

const ease = [0.22, 1, 0.36, 1] as const;

function Word({ children, i, className }: { children: ReactNode; i: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      className={`inline-block ${className ?? ""}`}
      initial={reduce ? false : { opacity: 0, y: 30, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, delay: 0.1 + i * 0.07, ease }}
    >
      {children}
    </motion.span>
  );
}

function Pill({ src, i }: { src: string; i: number }) {
  return (
    <Word i={i}>
      <span className="relative inline-block h-[0.72em] w-[1.55em] translate-y-[0.06em] overflow-hidden rounded-full align-baseline">
        <Image src={src} alt="" fill sizes="120px" className="object-cover" priority />
      </span>
    </Word>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid-bg absolute inset-0" aria-hidden />
      <video
        className="pointer-events-none absolute inset-0 size-full object-cover opacity-[0.12] mix-blend-multiply"
        src="/videos/hero-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
      />

      <div className="container-page relative flex flex-col items-center pt-14 pb-16 text-center md:pt-20 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-2"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3].map((n) => (
              <Image
                key={n}
                src={`/images/home/founder-${n}.png`}
                alt=""
                width={30}
                height={30}
                className="size-[30px] rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>
          <p className="text-sm text-ink">50+ Trusted by founders.</p>
        </motion.div>

        <h1 className="mt-6 font-display text-[40px] leading-[1.25] font-medium tracking-[-0.01em] text-ink sm:text-6xl md:text-[72px]">
          <span className="block">
            <Word i={0}>Designing</Word>{" "}
            <Word i={1} className="text-ink-blue">
              User-Centric
            </Word>{" "}
            <Pill src="/images/home/hero-pill-1.png" i={2} />{" "}
            <Word i={3} className="text-ink-blue">
              Digital
            </Word>
          </span>
          <span className="block">
            <Word i={4}>Experiences</Word> <Word i={5}>Built</Word> <Word i={6}>For</Word>{" "}
            <Word i={7}>The</Word>
          </span>
          <span className="block">
            <Pill src="/images/home/hero-pill-2.png" i={8} /> <Word i={9}>Future.</Word>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-[#2d2d2d] md:text-xl"
        >
          We help startups and enterprises craft intuitive interfaces and scalable web
          solutions—strategically designed to drive results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85, ease }}
          className="mt-10 flex flex-wrap items-center justify-center gap-5"
        >
          <PillButton href="/contact-us">Get started</PillButton>
          <ArrowLink href="/projects">See Our Projects</ArrowLink>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.5, ease }}
        className="relative mx-2 aspect-[1424/700] overflow-hidden rounded-[24px] shadow-[0_6px_10px_rgb(0_0_0/0.18)] md:mx-2"
      >
        <Image
          src="/images/home/banner.png"
          alt="TechFynite brand showcase"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <LogoMarquee className="py-10 md:py-12" />
    </section>
  );
}
