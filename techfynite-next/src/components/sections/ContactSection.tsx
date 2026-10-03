import Image from "next/image";
import { ArrowUpRight, Send } from "@/components/icons";
import { CopyEmail } from "@/components/ui/CopyEmail";
import { PillButton } from "@/components/ui/PillButton";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";
import { site } from "@/data/site";

export function SpotsBadge({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="relative flex size-2.5">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-60" />
        <span className="relative inline-flex size-2.5 rounded-full bg-[#16dd47]" />
      </span>
      10 Spots Available
    </span>
  );
}

export function ContactSection({ id = "contact" }: { id?: string }) {
  return (
    <section id={id} className="container-page py-20 md:py-28">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-10">
        <Reveal>
          <span className="inline-block rounded-full border border-ink-blue px-6 py-2 font-poppins text-lg font-medium text-ink-blue">
            Contact Us
          </span>
          <h2 className="mt-6 flex flex-wrap items-center gap-x-3 font-poppins text-3xl text-ink md:text-[40px]">
            Have an Idea?{" "}
            <em className="font-medium text-ink-blue">Let’s Build It.</em>
            <ArrowUpRight className="size-8 text-[#9a9a9a]" />
          </h2>
          <p className="mt-3 font-poppins text-xl text-[#4a4a4a]">
            Let’s Transform Your Idea Into Impact
          </p>

          <div className="mt-4 rounded-2xl bg-[#efefef] p-1.5">
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/team/shakib-avatar.png"
                    alt="Shakib H."
                    width={70}
                    height={70}
                    className="size-[70px] rounded-full object-cover"
                  />
                  <div className="text-sm">
                    <p className="font-semibold text-ink">Shakib H.</p>
                    <p className="text-ink">Product Designer</p>
                  </div>
                </div>
                <SpotsBadge className="text-base text-[#9a9a9a]" />
              </div>
              <h3 className="mt-4 text-[28px] font-medium tracking-tight text-ink">
                Schedule a discovery call
              </h3>
              <p className="mt-1 text-lg text-[#333]">
                Let’s connect and see how we can bring your vision to life.
              </p>
              <PillButton href={site.calendly} className="mt-7">
                Book a Call
              </PillButton>
            </div>
            <div className="flex items-center gap-4 rounded-xl bg-brand p-6 text-white md:p-7">
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-white/15">
                <Send className="size-5" />
              </span>
              <div>
                <p className="text-base">Do you prefer email?</p>
                <p className="text-lg font-medium">
                  <CopyEmail email={site.email} />
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:pt-4">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
