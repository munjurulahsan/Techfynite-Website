import type { Metadata } from "next";
import Image from "next/image";
import { ServiceList } from "@/components/sections/ServiceList";
import { ArrowLink } from "@/components/ui/PillButton";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: { absolute: "Our Services - UI/UX, Web Development & Framer Experts" },
  description:
    "Explore Techfynite's services: UI/UX design, website & app development, SaaS product design, and Framer/WordPress builds for startups.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-[1360px] items-center gap-10 px-4 py-12 md:px-10 md:py-14 lg:grid-cols-2">
          <Reveal className="flex h-full flex-col">
            <p className="max-w-lg text-base leading-relaxed text-[#333] uppercase">
              TechFynite is a creative agency crafting impactful brands, designs, and experiences
              that inspire growth.
            </p>
            <ArrowLink href="/contact-us" className="mt-8">
              Get In Touch
            </ArrowLink>
            <h1 className="mt-16 font-geist text-5xl leading-[1.1] font-semibold tracking-[-0.05em] text-ink md:mt-auto md:pt-20 md:text-7xl">
              Crafting solutions that inspire growth
            </h1>
          </Reveal>
          <Reveal delay={0.1} className="relative aspect-[502/377] w-full max-w-[502px] justify-self-center">
            <Image
              src="/images/services/hero.png"
              alt="TechFynite — crafting the future of digital products"
              fill
              priority
              sizes="(min-width: 1024px) 502px, 100vw"
              className="object-contain"
            />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1360px] px-4 py-14 md:px-10 md:py-20">
        <ServiceList items={services} />
      </section>
    </>
  );
}
