import Image from "next/image";
import { Eyebrow, Script } from "@/components/ui/Bits";
import { PillButton } from "@/components/ui/PillButton";
import { Reveal } from "@/components/ui/Reveal";

export function TeamTeaser() {
  return (
    <section className="relative overflow-hidden bg-[#05060b] text-white">
      <Image
        src="/images/home/team-bg.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      <div className="container-page relative py-24 md:py-40">
        <Reveal className="flex flex-wrap items-start justify-between gap-6">
          <h2 className="text-5xl font-bold italic md:text-[64px]">
            We’re your <Script className="font-normal">Creative</Script> partners
          </h2>
          <Eyebrow className="mt-3">Talent with purpose</Eyebrow>
        </Reveal>

        <div className="mt-24 grid items-end gap-12 md:mt-56 md:grid-cols-2">
          <Reveal>
            <p className="max-w-md text-2xl leading-snug font-medium indent-28">
              We’re a creative team that values purposeful design, open collaboration, and work
              that truly makes an impact.
            </p>
            <PillButton href="/about-us#team" variant="light" className="mt-8">
              Know more about us
            </PillButton>
          </Reveal>

          <Reveal delay={0.1} className="w-full max-w-[490px] md:justify-self-end">
            <div className="relative aspect-[490/400] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/team/shakib-lead.png"
                alt="Shakib H., UI/UX Design & Web Development Lead"
                fill
                sizes="(min-width: 768px) 490px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-7 pt-16">
                <p className="text-2xl">Shakib H.</p>
                <p className="mt-1 text-base text-white/75">
                  UI/UX Design &amp; Web Development Lead
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
