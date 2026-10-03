import type { Metadata } from "next";
import Image from "next/image";
import { Counters } from "@/components/about/Counters";
import { Gallery } from "@/components/about/Gallery";
import { LogoMarquee } from "@/components/home/LogoMarquee";
import { ContactSection } from "@/components/sections/ContactSection";
import { Burst } from "@/components/icons";
import { Breadcrumb, Eyebrow, Script } from "@/components/ui/Bits";
import { ArrowLink, PillButton } from "@/components/ui/PillButton";
import { Reveal } from "@/components/ui/Reveal";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: { absolute: "About TechFynite – Our Story & Team" },
  description:
    "Learn how TechFynite was founded to help fast-moving teams launch sharper brands, intuitive interfaces and future-ready websites. Meet our people and mission.",
  alternates: { canonical: "/about-us" },
};

const aboutParagraphs = [
  "At TechFynite, we design with purpose, build smart, and create user-centric digital solutions that drive real impact. With a focus on innovation and scalability, we help businesses transform ideas into engaging experiences through cutting-edge UI/UX design, web solutions, and technology-driven strategies.",
  "Our team of passionate designers and developers works collaboratively to deliver products that not only look stunning but also perform seamlessly. From startups to enterprises, we aim to empower every client with solutions tailored for growth, efficiency, and success.",
  "At TechFynite, your vision meets our expertise shaping the future of digital experiences, one design at a time.",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="grid-bg absolute inset-0" aria-hidden />
        <div className="container-page relative flex flex-col items-center py-16 text-center md:py-24">
          <Reveal>
            <Breadcrumb current="About Us" />
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-8 max-w-4xl font-display text-5xl leading-[1.2] font-medium tracking-tight text-ink md:text-[72px]">
              Turning Ideas Into <span className="text-ink-blue">Powerful Digital</span>{" "}
              <span className="relative inline-block h-[0.72em] w-[1.55em] translate-y-[0.06em] overflow-hidden rounded-full">
                <Image
                  src="/images/home/hero-pill-2.png"
                  alt=""
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </span>{" "}
              Realities
            </h1>
          </Reveal>
          <Reveal delay={0.1} className="mt-10 flex flex-wrap items-center justify-center gap-5">
            <PillButton href="/contact-us">Contact Us</PillButton>
            <ArrowLink href="/projects">See Our Projects</ArrowLink>
          </Reveal>
        </div>
      </section>

      <Gallery />

      {/* Mission */}
      <section className="bg-[#f4f4f4] py-16 md:py-24">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-[1fr_2fr] md:gap-24">
            <Reveal>
              <Eyebrow className="text-sm text-ink">Not just another agency</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-5xl font-semibold tracking-tight text-[#333] md:text-6xl">
                Turning <Script className="text-ink-blue">Vision</Script> into reality
              </h2>
            </Reveal>
          </div>

          <div className="mt-14 grid items-start gap-10 md:grid-cols-[1fr_2fr] md:gap-24">
            <Reveal className="relative overflow-hidden bg-[#020611] text-white">
              <Image
                src="/images/about/mission-bg.png"
                alt=""
                width={2122}
                height={1221}
                className="absolute inset-0 size-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
              <figure className="relative flex min-h-[440px] flex-col justify-end p-8">
                <blockquote className="text-xl leading-snug">
                  Every great project begins with a simple conversation — let’s start yours.
                </blockquote>
                <figcaption className="mt-4 text-base">
                  Shakib H. <span className="text-white/70">Product Designer</span>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={0.05}>
              <h3 className="text-2xl text-ink">Our mission</h3>
              <p className="mt-4 text-lg leading-relaxed text-[#333]">
                Our mission is to craft exceptional digital experiences that inspire, engage, and
                empower. Through innovative UI/UX design, seamless web and app development, and
                cutting-edge Framer and WordPress solutions, we help brands turn ideas into
                impactful digital realities. We strive to blend creativity with technology to
                deliver products that are not only beautiful and user-friendly but also drive real
                growth and success for our clients.
              </p>
              <PillButton href="#team" className="mt-8">
                Meet our team
              </PillButton>
            </Reveal>
          </div>
        </div>
      </section>

      {/* About us */}
      <section className="rounded-t-3xl bg-navy-2 pt-20 pb-16 text-white md:pt-24">
        <div className="container-page">
          <Reveal>
            <h2 className="flex items-center gap-4 text-5xl font-bold italic md:text-6xl">
              <Burst className="size-8" />
              About Us
            </h2>
          </Reveal>
          <div className="mt-5 space-y-8">
            {aboutParagraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="max-w-6xl text-xl leading-relaxed text-white/60 md:text-2xl">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <LogoMarquee invert className="mt-16" />
      </section>

      <Counters />

      {/* Team */}
      <section id="team" className="scroll-mt-24 bg-black py-20 text-white md:py-28">
        <div className="mx-auto max-w-[1400px] px-4 md:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.slice(0, 2).map((m, i) => (
              <TeamCard key={m.name} member={m} delay={i * 0.05} />
            ))}
            <Reveal className="order-first text-right sm:col-span-2 lg:order-none">
              <p className="text-sm font-semibold tracking-wide text-white/60 uppercase">
                {"// Talent behind the vision //"}
              </p>
              <h2 className="mt-3 text-6xl leading-[0.95] font-bold tracking-tight uppercase md:text-[120px]">
                Our experts
              </h2>
            </Reveal>
            {team.slice(2).map((m, i) => (
              <TeamCard key={m.name} member={m} delay={i * 0.05} />
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}

function TeamCard({ member: m, delay }: { member: (typeof team)[number]; delay: number }) {
  return (
    <Reveal delay={delay} className="border border-white/10 bg-[#0b0b0b] p-5">
      <article>
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={m.image}
            alt={m.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
        <div className="mt-5 flex items-start justify-between gap-3">
          <div>
            <h3 className="text-2xl">{m.name}</h3>
            <p className="mt-1 text-sm text-white/70">{m.role}</p>
          </div>
          {m.linkedin && (
            <a
              href={m.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${m.name} on LinkedIn`}
              className="grid size-9 shrink-0 place-items-center rounded-full border border-white/20 text-sm font-semibold transition-colors hover:bg-white hover:text-black"
            >
              in
            </a>
          )}
        </div>
      </article>
    </Reveal>
  );
}
