import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { ArrowRight } from "@/components/icons";
import { services } from "@/data/services";
import { site, socials } from "@/data/site";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact-us", label: "Contact Us" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy pt-14 text-white md:pt-16">
      <div className="container-page relative">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_1.2fr_0.9fr]">
          <div className="max-w-sm">
            <Logo className="h-9 w-auto text-white" />
            <p className="mt-5 text-base leading-relaxed text-white/85">
              We craft user-centric UI/UX and web solutions that empower brands to scale into the
              future.
            </p>
            <Link
              href="/contact-us"
              className="mt-6 block rounded-md bg-gradient-to-r from-[#1062c8] to-[#1236a8] py-3 text-center text-sm font-medium transition-opacity hover:opacity-90"
            >
              Let’s work together
            </Link>
            <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/85">
              <span>for Fast response</span>
              <a
                href={site.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white"
              >
                <Image src="/images/social/telegram.png" alt="" width={16} height={16} className="size-4" />
                Telegram
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white"
              >
                <Image
                  src="/images/social/whatsapp.jpg"
                  alt=""
                  width={16}
                  height={16}
                  className="size-4 rounded-full object-cover"
                />
                WhatsApp
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-lg text-white/85 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium">Our Services</h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-lg text-white/85 hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <ul className="lg:-mt-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border-b border-white/10 py-4 text-xl text-white/70 transition-colors hover:text-white"
                >
                  <span className="flex items-center gap-3">
                    <Image src={`/images/social/${s.icon}.svg`} alt="" width={20} height={20} />
                    {s.label}
                  </span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 border-t border-white/25 py-8 text-center text-sm text-white/80">
          © {new Date().getFullYear()} TechFynite. All rights reserved
        </div>
      </div>
      <div className="relative h-32 md:h-48">
        <Image
          src="/images/common/footer-glow.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>
    </footer>
  );
}
