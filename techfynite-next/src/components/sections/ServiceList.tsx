import Image from "next/image";
import Link from "next/link";
import { ArrowLink } from "@/components/ui/PillButton";
import { Tag } from "@/components/ui/Bits";
import { Reveal } from "@/components/ui/Reveal";
import type { Service } from "@/data/services";

export function ServiceList({ items }: { items: Service[] }) {
  return (
    <ul className="divide-y divide-line border-b border-line">
      {items.map((service) => {
        const href = `/services/${service.slug}`;
        return (
          <Reveal
            as="li"
            key={service.slug}
            className="grid gap-8 py-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.45fr)] md:gap-12 md:py-10"
          >
            <div className="flex flex-col">
              <h3 className="font-geist text-4xl font-semibold tracking-[-0.04em] text-ink md:text-[44px] md:leading-[1.1]">
                <Link href={href} className="hover:text-brand">
                  {service.title}
                </Link>
              </h3>
              <p className="mt-6 max-w-md text-base leading-relaxed text-[#3f3f3f]">
                {service.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {service.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              <ArrowLink href={href} className="mt-8 md:mt-auto md:pt-8">
                Learn More
              </ArrowLink>
            </div>
            <Link href={href} className="grid grid-cols-2 gap-4" tabIndex={-1} aria-hidden>
              {service.cardImages.map((src, i) => (
                <div
                  key={src}
                  className={
                    i === 1
                      ? "relative hidden aspect-[357/262] overflow-hidden rounded-xl sm:block"
                      : "relative col-span-2 aspect-[357/262] overflow-hidden rounded-xl sm:col-span-1"
                  }
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              ))}
            </Link>
          </Reveal>
        );
      })}
    </ul>
  );
}
