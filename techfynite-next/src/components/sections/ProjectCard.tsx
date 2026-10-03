import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/cn";

/**
 * Two-panel project card: a cream info panel and a dark screenshot panel.
 * `flip` swaps the panels so a grid of cards alternates like the original.
 */
export function ProjectCard({ project, flip = false }: { project: Project; flip?: boolean }) {
  return (
    <Reveal as="article">
      <Link
        href={`/projects/${project.slug}`}
        className="group grid gap-4 md:grid-cols-2 md:gap-6"
        aria-label={`${project.title} — view case study`}
      >
        <div
          className={cn(
            "flex min-h-[360px] min-w-0 flex-col items-center justify-between gap-8 rounded-2xl bg-cream px-6 py-10 text-center lg:aspect-square lg:px-16",
            flip && "md:order-2",
          )}
        >
          <span className="text-sm text-ink">{project.year}</span>
          <div>
            <h3 className="text-3xl leading-tight font-normal tracking-tight text-ink lg:text-[42px]">
              {project.title}
            </h3>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-[#3a3a3a] md:text-lg">
              {project.summary}
            </p>
          </div>
          <span className="text-sm text-ink uppercase">{project.category}</span>
        </div>
        <div
          className={cn(
            "relative aspect-square min-w-0 overflow-hidden rounded-2xl",
            project.cardTone === "navy" ? "bg-[#02052b]" : "bg-[#111]",
          )}
        >
          <Image
            src={project.cardImage}
            alt={`${project.name} preview`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
      </Link>
    </Reveal>
  );
}

export function ProjectGrid({ items }: { items: Project[] }) {
  return (
    <div className="flex flex-col gap-6 md:gap-9">
      {items.map((p, i) => (
        <ProjectCard key={p.slug} project={p} flip={i % 2 === 1} />
      ))}
    </div>
  );
}
