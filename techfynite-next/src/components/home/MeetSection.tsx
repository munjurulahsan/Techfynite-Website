import { Reveal } from "@/components/ui/Reveal";
import { meetChips } from "@/data/home";

export function MeetSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="container-page relative flex flex-col items-center text-center">
        <Reveal>
          <p className="relative inline-block pb-2 text-xl text-ink">
            Meet TechFynite 👋
            <svg
              viewBox="0 0 160 8"
              className="absolute -bottom-1 left-1/2 w-[110%] -translate-x-1/2 text-[#555]"
              aria-hidden
            >
              <path
                d="M2 5c40-3 110-3 156-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 max-w-4xl font-display text-4xl leading-[1.2] font-semibold tracking-tight text-ink md:text-[52px]">
            We help fast-moving <span className="text-ink-blue">digital startups</span> launch
            sharper brands and websites
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <ul className="mt-8 flex max-w-2xl flex-wrap justify-center gap-3">
            {meetChips.map((c) => (
              <li
                key={c}
                className="rounded-full border border-[#555] bg-white/60 px-3 py-1.5 font-poppins text-base text-[#333] transition-colors hover:border-brand hover:text-brand"
              >
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
