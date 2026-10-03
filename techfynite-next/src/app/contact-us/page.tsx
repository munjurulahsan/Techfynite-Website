import type { Metadata } from "next";
import Image from "next/image";
import { ContactSection } from "@/components/sections/ContactSection";
import { Breadcrumb } from "@/components/ui/Bits";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: { absolute: "Contact TechFynite – Let’s Build Your Idea" },
  description:
    "Got a digital project? Contact TechFynite today to schedule a discovery call, share your vision and get started on crafting your next digital product.",
  alternates: { canonical: "/contact-us" },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="grid-bg absolute inset-0" aria-hidden />
        <div className="container-page relative flex flex-col items-center pt-14 pb-6 text-center md:pt-16">
          <Reveal>
            <Breadcrumb current="Contact Us" />
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-8 font-display text-5xl leading-[1.3] font-medium tracking-tight text-ink md:text-[72px]">
              Lets Talk About{" "}
              <span className="relative inline-block size-[0.95em] translate-y-[0.12em] overflow-hidden rounded-full">
                <Image
                  src="/images/contact/hero-pill.jpg"
                  alt=""
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </span>
              <br />
              Your Next Project
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-xl leading-relaxed text-[#555]">
              Get in touch with our team today.
              <br />
              We’re ready to assist you with your next project.
            </p>
          </Reveal>
        </div>
      </section>
      <ContactSection id="form" />
    </>
  );
}
