import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckSquare, Compass, Crosshair, Layers } from "@/components/icons";
import { ServiceList } from "@/components/sections/ServiceList";
import { Tag } from "@/components/ui/Bits";
import { Reveal } from "@/components/ui/Reveal";
import { getService, services } from "@/data/services";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/services/${slug}` },
  };
}

const stepIcons = [Compass, Crosshair, Layers, CheckSquare];

export default async function ServiceDetailPage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const index = services.findIndex((s) => s.slug === slug);
  const related = [1, 2].map((n) => services[(index + n) % services.length]);

  return (
    <>
      <section className="mx-auto max-w-[1360px] px-4 pt-10 md:px-10 md:pt-12">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-lg">
            <h1 className="font-geist text-5xl font-semibold tracking-[-0.05em] text-ink md:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-[#3f3f3f]">{service.summary}</p>
          </div>
          <ul className="flex flex-wrap gap-2" aria-label="Focus areas">
            {service.tags.map((t) => (
              <li key={t}>
                <Tag>{t}</Tag>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.05} className="relative mt-14 aspect-[1360/500] overflow-hidden rounded-2xl">
          <Image
            src={service.heroImage}
            alt={`${service.title} process overview`}
            fill
            priority
            sizes="(min-width: 1400px) 1360px, 100vw"
            className="object-cover"
          />
        </Reveal>

        <Reveal>
          <h2 className="mt-16 font-geist text-4xl font-semibold tracking-[-0.05em] text-ink md:text-5xl">
            How We Bring Ideas to Life
          </h2>
        </Reveal>
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {service.process.map((step, i) => {
            const Icon = stepIcons[i % stepIcons.length];
            return (
              <Reveal
                as="li"
                key={step.title}
                delay={i * 0.05}
                className="flex min-h-[300px] flex-col rounded-xl border border-[#bdbdbd] p-5"
              >
                <Icon className="size-8 text-brand" />
                <h3 className="mt-auto font-geist text-2xl font-semibold tracking-[-0.04em] text-ink">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[#3f3f3f]">{step.description}</p>
              </Reveal>
            );
          })}
        </ol>

        <div className="mt-14 grid gap-6 md:grid-cols-[1.55fr_1fr]">
          {service.detailImages.map((src, i) => (
            <Reveal
              key={src}
              delay={i * 0.05}
              className="relative aspect-[808/406] overflow-hidden rounded-2xl md:aspect-auto md:h-[406px]"
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="(min-width: 768px) 60vw, 100vw"
                className="object-cover"
              />
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal as="article" className="mx-auto max-w-[1200px] px-4 py-16 text-lg leading-relaxed text-ink md:px-10">
        <p>
          <strong>About The Service:</strong> {service.about}
        </p>
        <p className="mt-5">
          <strong>What&apos;s Included:</strong> {service.included.intro}
        </p>
        <ul className="mt-4 list-disc space-y-1 pl-6">
          {service.included.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <p className="mt-5">
          <strong>Our Approach:</strong> {service.approach}
        </p>
        <p className="mt-5">
          <strong>The Results:</strong> {service.results.intro}
        </p>
        <ul className="mt-4 list-disc space-y-1 pl-6">
          {service.results.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </Reveal>

      <section className="mx-auto max-w-[1360px] px-4 pb-20 md:px-10">
        <Reveal className="text-center">
          <p className="text-lg text-brand uppercase">{"//Related Service"}</p>
          <h2 className="mt-4 font-geist text-5xl font-semibold tracking-[-0.05em] text-ink md:text-6xl">
            Explore more service
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base text-[#3f3f3f]">
            Our talented team combines creativity, strategy, and passion to deliver innovative
            solutions that inspire and drive results.
          </p>
        </Reveal>
        <div className="mt-12">
          <ServiceList items={related} />
        </div>
      </section>
    </>
  );
}
