"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Search } from "@/components/icons";
import type { Job } from "@/data/careers";

type JobSummary = Pick<Job, "slug" | "title" | "badge" | "badgeColor" | "type" | "location" | "department">;

export function JobBoard({ jobs }: { jobs: JobSummary[] }) {
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return jobs;
    return jobs.filter((j) =>
      [j.title, j.department, j.type, j.location].some((f) => f.toLowerCase().includes(q)),
    );
  }, [jobs, query]);

  return (
    <div>
      <label className="relative mt-14 block">
        <span className="sr-only">Search open positions</span>
        <Search className="pointer-events-none absolute top-1/2 left-5 size-4 -translate-y-1/2 text-[#9aa3b2]" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Try searching like UI/UX Designer"
          className="w-full rounded-xl border border-[#e2e6ee] bg-white py-4 pr-5 pl-12 text-[15px] text-ink shadow-[0_6px_20px_rgb(15_23_42/0.05)] placeholder:text-[#9aa3b2] focus:border-[#1e4a8f] focus:outline-none"
        />
      </label>

      <h2 className="mt-12 text-xl font-semibold text-[#111827]">
        Open Positions <span className="font-normal text-[#6b7280]">({visible.length})</span>
      </h2>

      <ul className="mt-4 space-y-4">
        {visible.map((job) => (
          <li key={job.slug}>
            <Link
              href={`/careers/${job.slug}`}
              className="flex items-center gap-4 rounded-xl border border-[#e2e6ee] bg-white px-6 py-5 transition-all hover:-translate-y-0.5 hover:border-[#1e4a8f]/40 hover:shadow-md"
            >
              <span
                className="grid size-11 shrink-0 place-items-center rounded-lg text-sm font-bold text-white"
                style={{ backgroundColor: job.badgeColor }}
              >
                {job.badge}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[13px] text-[#6b7280]">TechFynite</span>
                <span className="block font-semibold text-[#111827]">{job.title}</span>
              </span>
              <span className="text-right text-sm">
                <span className="block text-[#111827]">
                  {job.type} <span className="text-[#cbd2dc]">/</span> {job.location}
                </span>
                <span className="block text-[13px] text-[#9aa3b2]">Posted this week</span>
              </span>
            </Link>
          </li>
        ))}
        {visible.length === 0 && (
          <li className="rounded-xl border border-dashed border-[#d5dbe5] px-6 py-8 text-center text-sm text-[#6b7280]">
            No open positions match “{query}”. Try another search or{" "}
            <Link href="/contact-us" className="font-medium text-[#1e4a8f] underline">
              get in touch
            </Link>
            .
          </li>
        )}
      </ul>
    </div>
  );
}
