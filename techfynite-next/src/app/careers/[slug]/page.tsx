import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckList } from "@/components/careers/PerkList";
import { ArrowLeft, ArrowRight } from "@/components/icons";
import { Reveal } from "@/components/ui/Reveal";
import { getJob, jobs, type Job } from "@/data/careers";
import { site } from "@/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return jobs.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/careers/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) return {};
  return {
    title: { absolute: `${job.title} Job - Careers at Techfynite` },
    description: `We're hiring a ${job.title} (${job.type}, ${job.location}). Join Techfynite's global team.`,
    alternates: { canonical: `/careers/${slug}` },
  };
}

function applyHref(job: Job) {
  const subject = encodeURIComponent(`Application: ${job.title}`);
  return `mailto:${site.email}?subject=${subject}`;
}

function ApplyButton({ job, className = "" }: { job: Job; className?: string }) {
  return (
    <a
      href={applyHref(job)}
      className={`inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#1062c8] px-6 py-3.5 text-base font-semibold text-white shadow-[0_8px_20px_rgb(16_98_200/0.3)] transition-colors hover:bg-[#0d4fa3] ${className}`}
    >
      Apply Now <ArrowRight className="size-4" />
    </a>
  );
}

export default async function JobPage({ params }: PageProps<"/careers/[slug]">) {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) notFound();

  const summary = [
    ["Department", job.department],
    ["Employment Type", job.type],
    ["Location", job.location],
    ["Experience Level", job.experience],
    ["Salary Range", job.salary],
  ];

  return (
    <div className="mx-auto max-w-[1120px] bg-white">
      <header className="border-b border-[#e5e7eb] px-6 pt-8 pb-12">
        <Link
          href="/careers"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1062c8] hover:underline"
        >
          <ArrowLeft className="size-4" /> Back to all openings
        </Link>
        <p className="mt-8 text-sm font-bold tracking-[0.06em] text-[#1062c8] uppercase">
          {job.department}
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-[#111827] md:text-5xl">
          {job.title}
        </h1>
        <ul className="mt-6 flex flex-wrap gap-2.5">
          {[job.type, job.location, job.experience].map((chip) => (
            <li
              key={chip}
              className="rounded-full border border-[#cfdcf3] bg-[#eef3fc] px-4 py-1.5 text-sm font-semibold text-[#1e4a8f]"
            >
              {chip}
            </li>
          ))}
        </ul>
      </header>

      <div className="grid gap-12 px-6 py-10 lg:grid-cols-[1fr_320px]">
        <div className="space-y-12">
          <Reveal as="section">
            <h2 className="text-xl font-semibold text-[#111827]">Overview</h2>
            <p className="mt-4 text-[15px] leading-7 text-[#6b7280]">
              {job.overview[0]} <strong className="font-semibold text-[#111827]">{job.title}</strong>{" "}
              {job.overview[1]}
            </p>
          </Reveal>
          <Reveal as="section">
            <h2 className="text-xl font-semibold text-[#111827]">What You&apos;ll Do</h2>
            <CheckList items={job.responsibilities} tone="soft" className="mt-5" />
          </Reveal>
          <Reveal as="section">
            <h2 className="text-xl font-semibold text-[#111827]">What We&apos;re Looking For</h2>
            <CheckList items={job.requirements} tone="soft" className="mt-5" />
          </Reveal>
          <Reveal as="section">
            <h2 className="text-xl font-semibold text-[#111827]">Nice to Have</h2>
            <CheckList items={job.niceToHave} tone="muted" className="mt-5" />
          </Reveal>
          <Reveal as="section">
            <h2 className="text-xl font-semibold text-[#111827]">Why Join TechFynite</h2>
            <CheckList items={job.perks} className="mt-5" />
          </Reveal>
          <Reveal as="section" className="rounded-xl border border-[#e2e6ee] bg-[#f6f8fc] p-8">
            <h2 className="text-xl font-semibold text-[#111827]">Ready to apply?</h2>
            <p className="mt-3 text-[15px] leading-7 text-[#6b7280]">{job.applyNote}</p>
            <ApplyButton job={job} className="mt-6" />
          </Reveal>
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-xl border border-[#e2e6ee] bg-[#f8f9fb] p-6">
            <h2 className="font-semibold text-[#111827]">Job Summary</h2>
            <dl className="mt-5 divide-y divide-[#e5e7eb] text-sm">
              {summary.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-6 py-3">
                  <dt className="text-[#6b7280]">{k}</dt>
                  <dd className="text-right font-semibold text-[#111827]">{v}</dd>
                </div>
              ))}
            </dl>
            <ApplyButton job={job} className="mt-6 w-full" />
          </div>
        </aside>
      </div>
    </div>
  );
}
