import Image from "next/image";
import { Send, Star } from "@/components/icons";
import { Eyebrow, Script } from "@/components/ui/Bits";
import { CopyEmail } from "@/components/ui/CopyEmail";
import { PillButton } from "@/components/ui/PillButton";
import { Reveal } from "@/components/ui/Reveal";
import { SpotsBadge } from "@/components/sections/ContactSection";
import { pricingIncluded, testimonial, testimonialAvatars } from "@/data/home";
import { site } from "@/data/site";

/** Dark band holding the pricing plan, discovery-call card and testimonial. */
export function PricingSection() {
  const half = Math.ceil(pricingIncluded.length / 2);
  return (
    <section className="bg-navy py-20 text-white md:py-28">
      <div className="container-page">
        <Reveal className="text-center">
          <Eyebrow>No hidden fees</Eyebrow>
          <h2 className="mx-auto mt-6 max-w-xl text-5xl leading-[1.15] font-bold italic md:text-[64px]">
            Clear <Script className="font-normal">Pricing,</Script> clear results
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-2.5 lg:grid-cols-[1.55fr_1fr]">
          <Reveal className="flex flex-col rounded-2xl bg-[#14152b] p-2.5">
            <div className="flex-1 p-6 md:p-8">
              <h3 className="text-2xl font-medium">Design &amp; Dev support plan</h3>
              <p className="mt-2 max-w-sm text-sm text-white/75">
                Ideal for brands needing ongoing design and dev support.
              </p>
              <div className="my-7 h-px bg-white/10" />
              <p className="text-base text-white/75">What’s included</p>
              <div className="mt-4 grid gap-x-10 gap-y-2 sm:grid-cols-2">
                {[pricingIncluded.slice(0, half), pricingIncluded.slice(half)].map((col, i) => (
                  <ul key={i} className="space-y-2">
                    {col.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-lg text-white/90">
                        <span className="size-1.5 shrink-0 rounded-full bg-white/70" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-5 rounded-xl bg-[#05050f] px-6 py-6 md:px-8">
              <p className="flex items-baseline gap-2">
                <Script className="text-3xl">$</Script>
                <span className="text-4xl font-medium">1200</span>
                <span className="text-lg text-white/75">/Per project</span>
              </p>
              <PillButton href="/contact-us" variant="light">
                Start your retainer
              </PillButton>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col rounded-2xl bg-[#14152b] p-2.5">
            <div className="flex-1 p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-4">
                  <Image
                    src="/images/team/shakib-avatar.png"
                    alt="Shakib H."
                    width={50}
                    height={50}
                    className="size-[50px] rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm">Shakib H.</p>
                    <p className="text-xs text-white/70">Product Designer</p>
                  </div>
                </div>
                <SpotsBadge className="text-base text-white/80" />
              </div>
              <h3 className="mt-8 text-[28px] font-medium tracking-tight">
                Schedule a discovery call
              </h3>
              <p className="mt-2 text-lg text-white/75">
                Let’s connect and see how we can bring your vision to life.
              </p>
              <PillButton href={site.calendly} variant="light" className="mt-7">
                Book a call
              </PillButton>
            </div>
            <div className="flex items-center gap-4 rounded-xl bg-[#05050f] p-6 md:p-7">
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-white/10">
                <Send className="size-5" />
              </span>
              <div>
                <p className="text-base text-white/80">Do you prefer email?</p>
                <p className="text-lg font-medium">
                  <CopyEmail email={site.email} />
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-20 grid gap-10 md:mt-24 md:grid-cols-[1fr_1.6fr]">
          <div>
            <Eyebrow>The proof is in their words</Eyebrow>
            <ul className="mt-6 grid w-max grid-cols-3 gap-2.5" aria-hidden>
              {testimonialAvatars.map((src, i) => (
                <li key={src}>
                  <Image
                    src={src}
                    alt=""
                    width={60}
                    height={60}
                    className={
                      i === 0
                        ? "size-[60px] rounded-lg border-2 border-white object-cover"
                        : "size-[60px] rounded-lg object-cover opacity-25 grayscale"
                    }
                  />
                </li>
              ))}
            </ul>
          </div>
          <figure>
            <div className="flex gap-1.5" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="size-5" />
              ))}
            </div>
            <blockquote className="mt-6 text-2xl leading-snug font-medium tracking-tight">
              {testimonial.quote}
            </blockquote>
            <figcaption className="mt-8">
              <p className="text-xl">{testimonial.name}</p>
              <p className="mt-1 text-base text-white/60">{testimonial.role}</p>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
