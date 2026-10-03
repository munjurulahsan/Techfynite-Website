import type { Metadata } from "next";
import { JobBoard } from "@/components/careers/JobBoard";
import { CheckList } from "@/components/careers/PerkList";
import { Reveal } from "@/components/ui/Reveal";
import { careersPerks, jobs } from "@/data/careers";

export const metadata: Metadata = {
  title: { absolute: "Careers at Techfynite - Join Our UI/UX & Web Design Team" },
  description:
    "Explore careers at Techfynite. Join a global UI/UX and web design agency building websites, apps, and SaaS platforms for ambitious startups.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  const summaries = jobs.map(({ slug, title, badge, badgeColor, type, location, department }) => ({
    slug,
    title,
    badge,
    badgeColor,
    type,
    location,
    department,
  }));

  return (
    <div className="mx-auto max-w-[720px] bg-white px-6 pt-20 pb-20">
      <Reveal className="text-center">
        <p className="text-sm font-semibold tracking-[0.08em] text-[#1e4a8f] uppercase">
          Careers at TechFynite
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-[#111827] md:text-[40px]">
          Build the Future With TechFynite
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-[#6b7280]">
          We&apos;re a fully remote design &amp; development team helping startups launch
          beautiful, high-converting digital products. Come build with us.
        </p>
      </Reveal>

      <JobBoard jobs={summaries} />

      <Reveal className="mt-12 rounded-xl border border-[#e2e6ee] bg-gradient-to-br from-[#f3f6fc] to-white p-6">
        <h2 className="text-lg font-semibold text-[#111827]">Why Join TechFynite</h2>
        <CheckList items={careersPerks} className="mt-4" />
      </Reveal>
    </div>
  );
}
