export type Job = {
  slug: string;
  title: string;
  badge: string;
  badgeColor: string;
  department: string;
  type: string;
  location: string;
  experience: string;
  salary: string;
  /** Overview text around the bolded job title. */
  overview: [string, string];
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  perks: string[];
  applyNote: string;
};

const overviewLead =
  "TechFynite is a Germany-led, fully remote UI/UX and web design agency working with startups and SaaS companies worldwide. We're looking for a";

export const careersPerks = [
  "100% remote — work from anywhere",
  "Direct mentorship from senior designers",
  "Real client projects from day one",
  "Clear path to full-time growth",
];

export const jobs: Job[] = [
  {
    slug: "ui-ux-designer",
    title: "UI/UX Designer",
    badge: "UX",
    badgeColor: "#1e4a8f",
    department: "Design Team",
    type: "Full-Time",
    location: "Remote",
    experience: "1–2 Years",
    salary: "Competitive, based on experience",
    overview: [
      overviewLead,
      "to join our small, fast-moving team and help us design clean, conversion-focused digital products for our growing client base.",
    ],
    responsibilities: [
      "Design intuitive, user-centered interfaces for web and mobile products across multiple client projects",
      "Translate wireframes and user flows into polished, high-fidelity UI designs in Figma",
      "Conduct light user research and competitor analysis to inform design decisions",
      "Build and maintain reusable design systems and component libraries",
      "Collaborate closely with developers to ensure pixel-accurate implementation",
      "Present design concepts clearly to clients and incorporate feedback quickly",
    ],
    requirements: [
      "1+ years of experience designing UI/UX for web or mobile products",
      "Strong portfolio demonstrating real product or client work (not just concept projects)",
      "Proficiency in Figma, including auto-layout, components, and prototyping",
      "Solid understanding of responsive design and design systems",
      "Comfortable working independently in a fully remote, async-friendly environment",
      "Clear written and verbal communication in English",
    ],
    niceToHave: [
      "Experience designing for SaaS dashboards or admin panels",
      "Basic familiarity with WordPress, Elementor, or Framer",
      "Prior experience working with international/remote clients",
    ],
    perks: [...careersPerks, "Flexible working hours"],
    applyNote:
      "Send us your portfolio and a short note about yourself — we review every application personally and respond within a few days.",
  },
  {
    slug: "wordpress-developer",
    title: "WordPress Developer",
    badge: "WP",
    badgeColor: "#2f7d5b",
    department: "Development Team",
    type: "Full-Time",
    location: "Remote",
    experience: "1–2 Years",
    salary: "Competitive, based on experience",
    overview: [
      overviewLead,
      "to join our small, fast-moving team and help us build fast, reliable WordPress websites for our growing client base.",
    ],
    responsibilities: [
      "Build and customize WordPress websites for clients using custom themes, Elementor, and page builders",
      "Develop and maintain custom plugins and theme functionality as project requirements demand",
      "Convert Figma/design files into pixel-accurate, responsive WordPress websites",
      "Set up and configure WooCommerce stores, including products, payments, and shipping",
      "Optimize websites for speed, SEO structure, and Core Web Vitals",
      "Troubleshoot bugs, security issues, and hosting/server-related problems",
    ],
    requirements: [
      "1+ years of hands-on WordPress development experience",
      "Strong command of HTML, CSS, JavaScript, and PHP",
      "Experience with Elementor, WooCommerce, and popular WordPress plugins",
      "Understanding of responsive design and cross-browser compatibility",
      "Comfortable working independently in a fully remote, async-friendly environment",
      "Clear written and verbal communication in English",
    ],
    niceToHave: [
      "Experience with custom theme development from scratch",
      "Familiarity with Figma for translating designs into code",
      "Basic understanding of hosting, DNS, and server management (cPanel, etc.)",
    ],
    perks: [
      "100% remote — work from anywhere",
      "Direct mentorship from senior developers",
      "Real client projects from day one",
      "Clear path to full-time growth",
      "Flexible working hours",
    ],
    applyNote:
      "Send us your portfolio/past project links and a short note about yourself — we review every application personally and respond within a few days.",
  },
];

export function getJob(slug: string) {
  return jobs.find((j) => j.slug === slug);
}
