import type { MetadataRoute } from "next";
import { jobs } from "@/data/careers";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/about-us",
    "/services",
    ...services.map((s) => `/services/${s.slug}`),
    "/projects",
    ...projects.map((p) => `/projects/${p.slug}`),
    "/careers",
    ...jobs.map((j) => `/careers/${j.slug}`),
    "/contact-us",
  ];
  return paths.map((p) => ({
    url: `${site.url}${p}`,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.7,
  }));
}
