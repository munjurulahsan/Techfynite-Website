import Image from "next/image";
import { Sparkle, Star } from "@/components/icons";
import { Eyebrow, Script } from "@/components/ui/Bits";
import { PillButton } from "@/components/ui/PillButton";
import { Reveal } from "@/components/ui/Reveal";
import { strategicPoints, tools } from "@/data/home";

const orbitAvatars = [
  { n: 1, pos: "left-[18%] top-[22%]" },
  { n: 2, pos: "left-[50%] top-[8%]" },
  { n: 3, pos: "right-[4%] top-[34%]" },
  { n: 4, pos: "left-[1%] top-[64%]" },
];

const card = "relative overflow-hidden rounded-xl border border-black/5 bg-[#f4f4f4]";

export function WhyChoose() {
  return (
    <section className="container-page py-16 md:py-24">
      <Reveal className="text-center">
        <Eyebrow className="text-ink">Why brands trust us</Eyebrow>
        <h2 className="mt-6 text-5xl font-semibold tracking-tight text-[#3a3a3a] md:text-7xl">
          Your brand <Script className="text-ink">Deserves</Script> better
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-2.5 lg:grid-cols-3">
        {/* Cost-effective plans */}
        <Reveal className={`${card} min-h-[300px] p-7`}>
          <h3 className="text-2xl font-medium text-ink">Cost-Effective plans</h3>
          <p className="mt-1 text-base text-[#555]">
            Get premium services without premium pricing.
          </p>
          <Image
            src="/images/why/wave.png"
            alt=""
            width={736}
            height={330}
            className="absolute inset-x-0 bottom-0 w-full grayscale"
          />
          <div className="relative mx-auto mt-6 h-[210px] w-[290px] rounded-md bg-gradient-to-br from-[#2f3fc9] to-[#1b1f8f] p-5 shadow-xl">
            <Image src="/images/why/chip.png" alt="" width={45} height={31} />
            <Image
              src="/images/why/dollar.png"
              alt=""
              width={44}
              height={74}
              className="absolute top-12 left-1/2 -translate-x-1/2"
            />
            <p className="absolute right-5 bottom-5 flex items-center gap-1.5 text-base text-white/85">
              <Sparkle className="size-4" />
              Pause &amp; cancel anytime
            </p>
          </div>
        </Reveal>

        {/* Happy clients */}
        <Reveal delay={0.05} className={`${card} min-h-[300px] p-7`}>
          <div className="flex items-start justify-between">
            <div>
              <div className="flex gap-1 text-ink">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="size-4" />
                ))}
              </div>
              <p className="mt-1 text-base text-[#333]">
                <span className="font-medium text-ink">90+</span> Happy clients worldwide
              </p>
            </div>
            <p className="text-2xl text-ink">
              4.9<span className="text-sm text-[#666]">/5.0</span>
            </p>
          </div>
          <div className="relative mt-4 h-[200px]">
            <div className="absolute inset-x-6 -bottom-24 aspect-square rounded-full border border-black/5" />
            <div className="absolute inset-x-16 -bottom-14 aspect-square rounded-full border border-black/5" />
            {orbitAvatars.map((a) => (
              <Image
                key={a.n}
                src={`/images/avatars/client-${a.n}.jpg`}
                alt=""
                width={60}
                height={60}
                className={`absolute size-[60px] rounded-full border-2 border-white object-cover shadow ${a.pos}`}
              />
            ))}
            <Image
              src="/images/why/brand-logo.png"
              alt="TechFynite"
              width={213}
              height={40}
              className="absolute top-[58%] left-1/2 w-[200px] -translate-x-1/2"
            />
          </div>
        </Reveal>

        {/* Strategic solutions (tall, dark) */}
        <Reveal
          delay={0.1}
          className="relative flex min-h-[420px] flex-col overflow-hidden rounded-xl bg-gradient-to-b from-[#1a1a1a] to-[#060606] p-8 text-white lg:row-span-2"
        >
          <Image
            src="/images/why/chain.png"
            alt=""
            width={668}
            height={791}
            className="absolute -right-10 bottom-0 w-[85%] opacity-90"
          />
          <h3 className="relative text-3xl font-medium">Strategic solutions for lasting impact</h3>
          <ul className="relative mt-5 space-y-1.5 text-lg text-white/85">
            {strategicPoints.map((p) => (
              <li key={p} className="flex items-center gap-2.5">
                <span className="size-1.5 rounded-full bg-white/70" />
                {p}
              </li>
            ))}
          </ul>
          <PillButton href="/contact-us" variant="light" className="relative mt-7 self-start">
            Get started
          </PillButton>
          <p className="relative mt-auto pt-16 text-lg">© 2026 TechFynite creative agency</p>
        </Reveal>

        {/* Bottom row of three small cards */}
        <div className="grid gap-2.5 sm:grid-cols-3 lg:col-span-2">
          <Reveal className="rounded-xl border border-black/10 bg-white p-7">
            <h3 className="text-2xl font-medium text-ink">Built with the best</h3>
            <p className="mt-1 text-base text-[#555]">
              Access the latest tools, fully integrated and ready to go.
            </p>
            <ul className="mx-auto mt-6 flex max-w-[230px] flex-wrap justify-center gap-2.5">
              {tools.map((t) => (
                <li
                  key={t.src}
                  className={`grid size-11 place-items-center rounded-full ${t.dark ? "bg-[#05080c]" : "bg-[#e9e9e9]"}`}
                >
                  <Image src={t.src} alt="" width={22} height={22} className="h-[22px] w-auto" />
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={0.05}
            className="relative grid min-h-[250px] place-items-center overflow-hidden rounded-xl bg-[#222]"
          >
            <Image
              src="/images/why/reliable-bg.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 22vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/35" aria-hidden />
            <p className="relative text-center text-3xl leading-tight text-white">
              Reliable &amp;
              <br />
              <Script className="text-4xl">Future-ready</Script>
            </p>
          </Reveal>

          <Reveal
            delay={0.1}
            className="relative min-h-[250px] overflow-hidden rounded-xl border border-black/10 bg-white p-7"
          >
            <p className="text-3xl text-ink">24/7</p>
            <p className="mt-1 text-base text-[#555]">Always-On support</p>
            <Image
              src="/images/why/hands.png"
              alt=""
              width={190}
              height={284}
              className="absolute right-0 bottom-0 w-[95px] opacity-80"
            />
            <div className="relative mt-10 flex flex-col items-end gap-2 pr-4 text-sm text-white">
              <span className="flex items-center gap-2 self-start">
                <Image
                  src="/images/avatars/client-5.jpg"
                  alt=""
                  width={32}
                  height={32}
                  className="size-8 rounded-full object-cover"
                />
                <span className="rounded-full bg-brand px-3.5 py-2">Hey there!</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="rounded-full bg-brand px-3.5 py-2">How can i help you?</span>
                <Image
                  src="/images/why/chat-badge.png"
                  alt=""
                  width={32}
                  height={32}
                  className="size-8 rounded-full bg-ink p-1.5"
                />
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
