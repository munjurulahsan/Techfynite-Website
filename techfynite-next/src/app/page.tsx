import Link from "next/link";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { Hero } from "@/components/home/Hero";
import { Industries } from "@/components/home/Industries";
import { MeetSection } from "@/components/home/MeetSection";
import { PricingSection } from "@/components/home/PricingSection";
import { TeamTeaser } from "@/components/home/TeamTeaser";
import { Tickers } from "@/components/home/Tickers";
import { WhyChoose } from "@/components/home/WhyChoose";
import { ContactSection } from "@/components/sections/ContactSection";
import { ProjectGrid } from "@/components/sections/ProjectCard";
import { ServiceList } from "@/components/sections/ServiceList";
import { BurstHeading } from "@/components/ui/Bits";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Tickers />
      <MeetSection />

      <section className="container-page py-12 md:py-16">
        <Reveal>
          <BurstHeading>Our Services</BurstHeading>
        </Reveal>
        <div className="mt-10">
          <ServiceList items={services} />
        </div>
      </section>

      <FeaturedWork />
      <Industries />
      <WhyChoose />
      <PricingSection />
      <TeamTeaser />

      <section className="container-page py-20 md:py-24">
        <Reveal>
          <h2 className="text-center text-3xl font-semibold tracking-[0.12em] text-ink uppercase md:text-[40px]">
            Our Recent Projects
          </h2>
        </Reveal>
        <div className="mt-12">
          <ProjectGrid items={projects.slice(0, 2)} />
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-block rounded-full border border-ink px-4 py-2.5 text-sm font-medium transition-colors hover:bg-ink hover:text-white"
          >
            View all projects
          </Link>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
