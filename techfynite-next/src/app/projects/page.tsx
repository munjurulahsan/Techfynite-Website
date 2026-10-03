import type { Metadata } from "next";
import Image from "next/image";
import { Faq } from "@/components/sections/Faq";
import { ProjectGrid } from "@/components/sections/ProjectCard";
import { YellowCta } from "@/components/sections/YellowCta";
import { Breadcrumb } from "@/components/ui/Bits";
import { PillButton } from "@/components/ui/PillButton";
import { Reveal } from "@/components/ui/Reveal";
import { projectFaqs, projects } from "@/data/projects";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore TechFynite's portfolio of UI/UX, e-commerce, SaaS, XR and FinTech website design projects.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="grid-bg absolute inset-0" aria-hidden />
        <div className="container-page relative flex flex-col items-center py-12 text-center md:py-14">
          <Reveal>
            <Breadcrumb current="Projects" />
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-display text-5xl leading-[1.3] font-medium tracking-tight text-ink md:text-[64px]">
              Transforming Ideas <span className="text-ink-blue">Into Results</span>
              <br />
              <span className="text-ink-blue">Explore Our</span>{" "}
              <span className="relative inline-block h-[0.8em] w-[1.3em] translate-y-[0.08em] overflow-hidden rounded-full">
                <Image
                  src="/images/projects/hero-pill-1.jpg"
                  alt=""
                  fill
                  sizes="100px"
                  className="object-cover"
                />
              </span>{" "}
              Portfolio
            </h1>
          </Reveal>
          <Reveal delay={0.1} className="mt-4">
            <PillButton href={site.calendly}>Book a Call</PillButton>
          </Reveal>
        </div>
      </section>

      <div className="bg-black">
        <video
          className="aspect-video max-h-[860px] w-full object-cover"
          src="/videos/projects-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
        />
      </div>

      <section className="mx-auto max-w-[1440px] px-4 py-10 md:px-8 md:py-10">
        <ProjectGrid items={projects} />
      </section>

      <section className="bg-white py-20 md:py-32">
        <div className="mx-auto grid max-w-[1136px] gap-12 px-4 md:grid-cols-[1fr_1.5fr] md:px-0">
          <Reveal>
            <h2 className="text-4xl leading-tight text-ink">
              Questions?
              <br />
              Let&apos;s Clear
              <br />
              Things Up
            </h2>
            <p className="mt-8 max-w-xs font-display text-base text-[#444]">
              Every great design project starts with the right questions.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <Faq items={projectFaqs} />
          </Reveal>
        </div>

        <div className="mx-auto mt-24 max-w-[1136px] px-4 md:px-0">
          <YellowCta
            title="Ready To Work Together? Tell Us More."
            body="Whether you need a website redesign, mobile app design, or complete UX overhaul, I'm here to help."
            visual={
              <div className="relative mx-auto flex h-[300px] w-full max-w-[420px] items-end justify-center md:h-[420px]">
                <Image
                  src="/images/projects/cta-phone-1.png"
                  alt=""
                  width={260}
                  height={420}
                  className="absolute bottom-0 left-0 w-[45%]"
                />
                <Image
                  src="/images/projects/cta-phone-2.png"
                  alt="FinFynite mobile design"
                  width={300}
                  height={480}
                  className="relative w-[65%] translate-x-[18%]"
                />
              </div>
            }
          />
        </div>
      </section>
    </>
  );
}
