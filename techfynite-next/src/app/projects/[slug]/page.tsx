import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectGrid } from "@/components/sections/ProjectCard";
import { YellowCta } from "@/components/sections/YellowCta";
import { ArrowLink } from "@/components/ui/PillButton";
import { Reveal } from "@/components/ui/Reveal";
import { sizeOf } from "@/data/imageSizes";
import { getProject, projects } from "@/data/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: { images: [project.cardImage] },
  };
}

export default async function ProjectDetailPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const more = projects.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <div className="mx-auto max-w-[1440px] px-4 pt-8 md:px-8">
        <Reveal className="relative aspect-[1376/664] overflow-hidden rounded-2xl bg-[#fff4a3]">
          <Image
            src={project.heroImage}
            alt={`${project.name} hero`}
            fill
            priority
            sizes="(min-width: 1440px) 1376px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </div>

      <div className="mx-auto max-w-[1136px] px-4 md:px-0">
        <section className="grid gap-10 py-16 md:grid-cols-[1.4fr_1fr] md:gap-36 md:py-20">
          <Reveal>
            <h1 className="text-lg font-medium text-[#333] uppercase">Intro</h1>
            <p className="mt-10 text-lg leading-relaxed text-ink">
              <strong className="font-semibold">{project.name}</strong> {project.intro}
            </p>
          </Reveal>
          <Reveal delay={0.05} className="rounded-2xl bg-black px-10 py-12 text-white md:px-14 md:py-14">
            <dl className="grid grid-cols-2 gap-y-6 text-sm uppercase">
              <dt>Business :</dt>
              <dd>{project.category}</dd>
              <dt>Year :</dt>
              <dd>{project.year}</dd>
            </dl>
            <ArrowLink href="/about-us" className="mt-8 text-white underline underline-offset-4">
              About Us
            </ArrowLink>
          </Reveal>
        </section>

        <div className="grid gap-6 md:grid-cols-2">
          {project.introImages.map((src, i) => (
            <Reveal
              key={src}
              delay={i * 0.05}
              className="relative aspect-square overflow-hidden rounded-2xl bg-[#111]"
            >
              <Image src={src} alt="" fill sizes="(min-width: 768px) 556px, 100vw" className="object-cover" />
            </Reveal>
          ))}
        </div>

        <Reveal as="section" className="py-16 md:py-24">
          <h2 className="text-lg font-medium text-[#333] uppercase">Process</h2>
          <p className="mt-10 text-base leading-relaxed text-ink md:text-lg">{project.processIntro}</p>
          <ul className="mt-10 list-disc space-y-1 pl-6 text-lg text-ink">
            {project.process.map((step) => (
              <li key={step.title}>
                <strong className="font-semibold">{step.title}</strong>
                {step.description && <> – {step.description}</>}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="flex flex-col gap-6">
          {project.gallery.map((src) => (
            <Reveal key={src} className="overflow-hidden rounded-2xl bg-[#ececec]">
              <Image
                src={src}
                alt={`${project.name} screen`}
                {...sizeOf(src)}
                sizes="(min-width: 1136px) 1136px, 100vw"
                className="h-auto w-full"
              />
            </Reveal>
          ))}
        </div>

        <section className="py-20">
          <Reveal className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-4xl tracking-tight text-ink">More Projects</h2>
            <Link
              href="/projects"
              className="rounded-full border border-ink px-4 py-2.5 text-sm font-medium transition-colors hover:bg-ink hover:text-white"
            >
              View all projects
            </Link>
          </Reveal>
          <div className="mt-10">
            <ProjectGrid items={more} />
          </div>
        </section>
      </div>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-[1136px] px-4 md:px-0">
          <YellowCta
            layout="stacked"
            title="Let's Build Something Great Together!"
            body="Ready to create designs that your users will love and your business will benefit from? Contact me today."
            visual={
              <Image
                src="/images/projects/detail-cta.png"
                alt=""
                {...sizeOf("/images/projects/detail-cta.png")}
                className="mx-auto mt-24 w-full max-w-[630px]"
              />
            }
          />
        </div>
      </section>
    </>
  );
}
