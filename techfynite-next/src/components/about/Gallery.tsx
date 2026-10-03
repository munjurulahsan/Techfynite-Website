"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const images = Array.from({ length: 8 }, (_, i) => `/images/about/gallery-${i + 1}.png`);

/** Two rows of studio work that drift in opposite directions as the page scrolls. */
export function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const left = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const right = useTransform(scrollYProgress, [0, 1], ["-25%", "0%"]);

  const rows = [
    { items: images.slice(0, 4), x: left },
    { items: images.slice(4), x: right },
  ];

  return (
    <section
      ref={ref}
      aria-label="Studio gallery"
      className="overflow-hidden bg-[#05080c] py-14 md:py-20"
    >
      <div className="flex flex-col gap-4 md:gap-6">
        {rows.map((row, r) => (
          <motion.ul
            key={r}
            style={reduce ? undefined : { x: row.x }}
            className="flex w-max gap-4 md:gap-6"
          >
            {[...row.items, ...row.items].map((src, i) => (
              <li
                key={`${src}-${i}`}
                className="relative aspect-[3/2] w-[280px] shrink-0 overflow-hidden rounded-2xl border border-white/10 md:w-[480px]"
              >
                <Image src={src} alt="" fill sizes="480px" className="object-cover" />
              </li>
            ))}
          </motion.ul>
        ))}
      </div>
    </section>
  );
}
