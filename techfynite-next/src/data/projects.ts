export type ProcessItem = { title: string; description?: string };

export type Project = {
  slug: string;
  name: string;
  title: string;
  summary: string;
  category: string;
  year: string;
  cardImage: string;
  /** Background behind the card screenshot. */
  cardTone: "black" | "navy";
  heroImage: string;
  intro: string;
  introImages: [string, string];
  processIntro: string;
  process: ProcessItem[];
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "fynite-echo",
    name: "Fynite Echo",
    title: "Premium Headphone E-commerce UI/UX Design",
    summary:
      "A modern e-commerce landing page concept for a premium headphone brand, designed to showcase product features, build trust, and increase conversions through clean UI and immersive visuals.",
    category: "Web Design",
    year: "2026",
    cardImage: "/images/projects/fynite-echo-card.jpg",
    cardTone: "black",
    heroImage: "/images/projects/fynite-echo-hero.png",
    intro:
      "is a premium e-commerce landing page concept designed for a next-generation wireless headphone brand. The goal was to create a visually striking shopping experience that highlights product quality, builds customer trust, and drives higher conversions.",
    introImages: ["/images/projects/fynite-echo-1.png", "/images/projects/fynite-echo-card.jpg"],
    processIntro:
      "Every successful product starts with a clear process. From research and planning to final refinement, we focused on creating a premium user experience that balances aesthetics, usability, and conversion.",
    process: [
      { title: "Research", description: "Analyzed users, competitors, and market trends." },
      { title: "Wireframing", description: "Planned the layout and user journey." },
      { title: "UI Design", description: "Crafted a clean, premium visual interface." },
      { title: "Product Showcase", description: "Highlighted features with immersive visuals." },
      { title: "Responsive Design", description: "Optimized for all screen sizes." },
      {
        title: "Prototype & Refinement",
        description: "Tested, refined, and polished the final experience.",
      },
    ],
    gallery: [
      "/images/projects/fynite-echo-2.jpg",
      "/images/projects/fynite-echo-3.png",
      "/images/projects/fynite-echo-4.png",
    ],
  },
  {
    slug: "fynitevr",
    name: "FyniteVR",
    title: "Immersive VR & XR Platform Website Design",
    summary:
      "A premium VR/XR website concept designed to showcase immersive technology with a modern, high-converting user experience.",
    category: "Web Design",
    year: "2026",
    cardImage: "/images/projects/fynitevr-card.jpg",
    cardTone: "navy",
    heroImage: "/images/projects/fynitevr-hero.png",
    intro:
      "is a futuristic landing page concept designed for a Virtual Reality and Extended Reality company. The project focuses on creating an immersive digital experience that showcases VR solutions through bold visuals, engaging interactions, and a modern user interface.",
    introImages: ["/images/projects/fynitevr-1.jpg", "/images/projects/fynitevr-card.jpg"],
    processIntro:
      "This project blends immersive storytelling with modern UI/UX principles to highlight VR, AR, and XR services. Using vibrant gradients, futuristic visuals, and intuitive layouts, the design creates an engaging experience that communicates innovation while encouraging user interaction and business inquiries.",
    process: [
      { title: "Discovery & Industry Research" },
      { title: "Wireframing & User Flow" },
      { title: "Visual Identity & UI Design" },
      { title: "Interactive Prototyping" },
      { title: "Responsive Design" },
      { title: "Design System & Final Refinement" },
    ],
    gallery: [
      "/images/projects/fynitevr-2.jpg",
      "/images/projects/fynitevr-3.png",
      "/images/projects/fynitevr-4.jpg",
    ],
  },
  {
    slug: "fynite-sprint",
    name: "Fynite Sprint",
    title: "Sports & Fitness Training Website UI/UX Design",
    summary:
      "A high-performance sports website designed to motivate athletes, showcase training programs, and deliver an engaging user experience.",
    category: "Web Design",
    year: "2026",
    cardImage: "/images/projects/fynite-sprint-card.jpg",
    cardTone: "black",
    heroImage: "/images/projects/fynite-sprint-hero.png",
    intro:
      "is a modern sports and fitness website concept designed for athletes, coaches, and performance-focused training programs. The experience combines bold visuals, dynamic layouts, and clear user journeys to inspire athletes while making it easy to discover coaching services and training programs.",
    introImages: ["/images/projects/fynite-sprint-1.jpg", "/images/projects/fynite-sprint-card.jpg"],
    processIntro:
      "Every successful digital experience begins with a strategic process. We combined user research, performance-focused UX, and modern visual design to create a sports platform that motivates athletes and drives engagement.",
    process: [
      {
        title: "Research",
        description: "Studied athletes, fitness platforms, and competitor experiences.",
      },
      { title: "Wireframing", description: "Planned the user journey and content hierarchy." },
      {
        title: "UI Design",
        description: "Crafted a bold, modern interface inspired by speed and performance.",
      },
      {
        title: "Content Structure",
        description:
          "Organized training programs, coaching, and key information for easy navigation.",
      },
      {
        title: "Responsive Design",
        description: "Optimized the experience across desktop, tablet, and mobile devices.",
      },
      {
        title: "Prototype & Refinement",
        description: "Polished interactions and refined the overall user experience.",
      },
    ],
    gallery: [
      "/images/projects/fynite-sprint-2.jpg",
      "/images/projects/fynite-sprint-3.png",
      "/images/projects/fynite-sprint-4.jpg",
      "/images/projects/fynite-sprint-5.jpg",
    ],
  },
  {
    slug: "finfynite",
    name: "FinFynite",
    title: "Modern FinTech & Digital Finance Platform",
    summary:
      "A modern FinTech website concept crafted to deliver a secure, intuitive, and premium digital finance experience.",
    category: "Web Design",
    year: "2026",
    cardImage: "/images/projects/finfynite-card.jpg",
    cardTone: "navy",
    heroImage: "/images/projects/finfynite-hero.png",
    intro:
      "is a modern FinTech platform concept designed to simplify digital asset management through a clean, trustworthy, and user-focused experience. The website combines premium visuals, intuitive navigation, and blockchain-inspired design elements to communicate security, transparency, and financial innovation.",
    introImages: ["/images/projects/finfynite-1.jpg", "/images/projects/finfynite-card.jpg"],
    processIntro:
      "The platform was designed to simplify complex financial services into an intuitive and visually engaging experience that builds trust and encourages user adoption.",
    process: [
      { title: "FinTech & User Research" },
      { title: "Information Architecture" },
      { title: "Wireframing & User Flow" },
      { title: "UI Design & Visual Identity" },
      { title: "Interactive Prototyping" },
      { title: "Responsive Design & Final Refinement" },
    ],
    gallery: [
      "/images/projects/finfynite-2.png",
      "/images/projects/finfynite-3.jpg",
      "/images/projects/finfynite-4.jpg",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const projectFaqs = [
  {
    q: "How long does a design project take?",
    a: "Most UX design projects take 4-8 weeks from start to finish. Simple website redesigns can be done in 2-3 weeks, while complex app designs may take 10-12 weeks. I'll give you an exact timeline after understanding your project needs.",
  },
  {
    q: "Do you design mobile apps or just websites?",
    a: "We design both! Whether you need a responsive website, mobile app, or web application, I create user experiences that work beautifully across all devices and screen sizes.",
  },
  {
    q: "What's included in your UX design service?",
    a: "Every project includes user research, wireframes, high-fidelity mockups, interactive prototypes, and a style guide. we also provide design handoff files for developers and ongoing support during implementation.",
  },
  {
    q: "Can you work with my existing brand and website?",
    a: "Absolutely! We can redesign your current website while keeping your brand identity, or help evolve your brand as part of a complete UX overhaul. We'll discuss what works and what needs improvement.",
  },
  {
    q: "Do you provide the final design files to clients?",
    a: "Yes, you own all the design files! You'll receive organized Figma files, exported assets, style guides, and everything your developer needs to bring the designs to life perfectly.",
  },
];
