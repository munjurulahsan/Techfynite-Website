export const tickerRows = [
  ["Website Design", "Framer", "Product Design"],
  ["Figma", "Web Development", "UI/UX Design"],
];

export const meetChips = [
  "UI/UX Design",
  "Web Design & Development",
  "Mobile & Web App Design",
  "Framer Development",
  "WordPress Development",
];

export const featuredStats = [
  { value: 76, suffix: "+", label: "Finalized Projects" },
  { value: 92, suffix: "%", label: "Client satisfaction rate" },
  { value: 4, suffix: "M", label: "Gross Revenue" },
];

export const featuredSlides = [
  "/images/home/featured-1.jpg",
  "/images/home/featured-2.png",
  "/images/home/featured-3.png",
];

export const industries = [
  {
    eyebrow: "E-commerce Product Design",
    title: "Online Store Experience",
    description:
      "From product showcases to checkout flows, we design intuitive e-commerce experiences that turn visitors into loyal customers.",
    image: "/images/industries/ecommerce.jpg",
    color: "var(--color-industry-yellow)",
    dark: false,
  },
  {
    eyebrow: "Scalable SaaS Solutions",
    title: "Modern SaaS Experiences",
    description:
      "We design powerful SaaS products with intuitive dashboards, seamless workflows, and user-centric interfaces built for scale.",
    image: "/images/industries/saas.png",
    color: "var(--color-industry-blue)",
    dark: true,
  },
  {
    eyebrow: "AI-Powered Solutions",
    title: "Intelligent Digital Experiences",
    description:
      "We build AI applications and automation tools that streamline workflows and accelerate business growth.",
    image: "/images/industries/ai.jpg",
    color: "var(--color-industry-green)",
    dark: false,
  },
  {
    eyebrow: "Future-Ready XR Solutions",
    title: "Immersive XR Platforms",
    description:
      "We create immersive AR and VR experiences that engage users, enhance interactions, and bring ideas to life.",
    image: "/images/industries/xr.jpg",
    color: "var(--color-industry-purple)",
    dark: true,
  },
  {
    eyebrow: "FinTech Platforms",
    title: "Trusted Financial Experiences",
    description:
      "We build secure fintech platforms and blockchain solutions that simplify payments, investments, and digital asset management.",
    image: "/images/industries/fintech.jpg",
    color: "var(--color-industry-indigo)",
    dark: true,
  },
];

export const strategicPoints = [
  "Tailored strategy",
  "High-Quality output",
  "Timely delivery",
  "Transparent process",
  "Post-Launch support",
];

export const pricingIncluded = [
  "Ongoing design support",
  "Framer or custom development",
  "Clear timelines & milestones",
  "Flexible monthly scope",
  "Weekly updates from the project manager",
  "Fast turnaround on key tasks",
];

export const testimonial = {
  quote:
    "Techfynite transformed our vision into a modern, high-performing website. The design quality and attention to detail exceeded our expectations",
  name: "Emily Carter",
  role: "Founder, Nova Commerce",
  avatar: "/images/avatars/client-8.jpg",
};

/** Decorative avatar grid next to the testimonial; the first one is the quoted client. */
export const testimonialAvatars = [8, 10, 7, 1, 6, 5].map((n) => `/images/avatars/client-${n}.jpg`);

/** Tool logos with the circle colour each one sits on (white glyphs need a dark circle). */
export const tools = [
  { src: "/images/tools/tool-1.svg", dark: true },
  { src: "/images/tools/tool-2.svg", dark: false },
  { src: "/images/tools/tool-3.svg", dark: true },
  { src: "/images/tools/tool-4.svg", dark: true },
  { src: "/images/tools/tool-5.svg", dark: false },
  { src: "/images/tools/tool-6.svg", dark: true },
  { src: "/images/tools/tool-7.svg", dark: false },
];
