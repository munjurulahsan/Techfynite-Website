import { Plus } from "@/components/icons";

/** Accordion built on <details>, so it works without JavaScript. */
export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-ink border-b border-ink">
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7 text-lg text-ink [&::-webkit-details-marker]:hidden">
            {item.q}
            <Plus className="size-5 shrink-0 transition-transform duration-300 group-open:rotate-45" />
          </summary>
          <p className="-mt-2 pb-7 text-base leading-relaxed text-[#444]">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
