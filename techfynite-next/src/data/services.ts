export type ProcessStep = { title: string; description: string };

export type Service = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  cardImages: [string, string];
  heroImage: string;
  detailImages: [string, string];
  process: ProcessStep[];
  about: string;
  included: { intro: string; points: string[] };
  approach: string;
  results: { intro: string; points: string[] };
};

// The original site reused these brand-design steps on every service except UI/UX.
const genericProcess: ProcessStep[] = [
  {
    title: "Discovery & Research",
    description: "We understand your goals, and market to shape a clear brand direction and strategy.",
  },
  {
    title: "Brand Strategy",
    description: "We define your brand direction, message, and creative focus for clear growth.",
  },
  {
    title: "Design & Execution",
    description:
      "Creating visual identity, logos, typography, color palettes, and supporting brand assets.",
  },
  {
    title: "Review & Delivery",
    description:
      "Refining designs based on feedback and providing final assets with brand guidelines.",
  },
];

const img = (slug: string) => ({
  cardImages: [`/images/services/${slug}-1.png`, `/images/services/${slug}-2.png`] as [string, string],
  detailImages: [
    `/images/services/${slug}-detail-1.jpg`,
    `/images/services/${slug}-detail-2.jpg`,
  ] as [string, string],
});

export const services: Service[] = [
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    summary:
      "Design intuitive, user-centered interfaces that improve usability, enhance engagement, and guide users toward meaningful actions across web and digital products.",
    tags: ["Wireframes", "Prototyping", "Design System"],
    ...img("ui-ux-design"),
    heroImage: "/images/services/ui-ux-design-hero.png",
    process: [
      {
        title: "Discovery & Research",
        description: "We study your users, goals, and market to shape a clear design direction.",
      },
      {
        title: "UX Strategy",
        description:
          "We map user flows and information architecture before any visual work begins.",
      },
      {
        title: "Design & Prototyping",
        description:
          "Creating wireframes, high-fidelity UI, and interactive prototypes for testing.",
      },
      {
        title: "Review & Handoff",
        description:
          "Refining based on feedback and delivering dev-ready files with a full design system.",
      },
    ],
    about:
      "Our UI/UX Design service helps businesses create digital products that are intuitive, engaging, and built around real user behavior. We combine research, strategy, and visual design to craft interfaces that reduce friction, increase conversion, and give users a reason to stay.",
    included: {
      intro:
        "Our service covers everything needed to take a product from concept to a polished, testable interface — research, structure, visuals, and a system your team can build from and extend.",
      points: [
        "User research and journey mapping to ground every design decision in real behavior.",
        "Wireframes and interactive prototypes to validate flows before development begins.",
        "A complete UI kit with typography, color, and component styles applied consistently.",
        "A reusable design system so future screens stay consistent without starting from scratch.",
      ],
    },
    approach:
      "We combine user research, strategic thinking, and detailed craft to design interfaces that are both usable and distinctive. Every project starts with understanding your users and business goals, then moves through structure and visual design with testing built in at each stage.",
    results: {
      intro:
        "Our service delivers measurable improvements in usability, engagement, and conversion — along with a design system that speeds up every future release.",
      points: [
        "Reduced user drop-off through clearer flows and fewer points of friction.",
        "Higher engagement as interfaces become easier and more satisfying to use.",
        "Faster future development thanks to a consistent, reusable design system.",
        "Stronger brand perception through a more polished, professional product experience.",
      ],
    },
  },
  {
    slug: "saas-product-design",
    title: "SaaS & Product Design",
    summary:
      "Design powerful SaaS products and dashboards with intuitive workflows, scalable design systems, and interfaces built to support fast-growing platforms.",
    tags: ["MVP", "Dashboards", "Design System"],
    ...img("saas-product-design"),
    heroImage: "/images/services/saas-product-design-hero.jpg",
    process: genericProcess,
    about:
      "Our SaaS & Product Design service helps founders and product teams turn an idea or roadmap into a design that users understand immediately and engineers can build without guesswork. We combine product strategy with detailed UI design across every stage of a SaaS product's life.",
    included: {
      intro:
        "Our service covers everything from early MVP scoping through to a full, extensible design system — built for teams that are moving fast and need design to keep up.",
      points: [
        "MVP feature scoping to identify what's essential for a first release.",
        "Core product flows and onboarding designed to reduce time-to-value for new users.",
        "Dashboard and data visualization design that makes complex information easy to read.",
        "A reusable design system so new features stay visually and structurally consistent.",
      ],
    },
    approach:
      "We work closely with founders and product teams, treating design as part of product strategy rather than a final layer applied at the end. Weekly reviews keep design and engineering aligned so nothing gets built twice.",
    results: {
      intro:
        "Our service delivers a product experience that's easier to onboard into, easier to use daily, and easier to keep building on as your roadmap grows.",
      points: [
        "Faster user onboarding and lower time-to-first-value.",
        "Higher daily engagement through clearer, less cluttered interfaces.",
        "Reduced design debt as new features slot into an existing system.",
        "A stronger product story for investors and prospective customers alike.",
      ],
    },
  },
  {
    slug: "fullstack-website-development",
    title: "Fullstack Website Development",
    summary:
      "Build fast, scalable, and conversion-focused websites using modern technologies to deliver seamless user experiences, strong performance, and long-term business growth.",
    tags: ["Front-End", "Back-End", "API Integration"],
    ...img("fullstack-website-development"),
    heroImage: "/images/services/fullstack-website-development-hero.jpg",
    process: genericProcess,
    about:
      "Our Fullstack Website Development service covers the entire technical build — from the interface your users interact with to the database and server logic running behind it. We combine clean engineering with strong design implementation to deliver websites and web apps that perform as well as they look.",
    included: {
      intro:
        "Our service includes everything needed to launch a fully functioning website or web app — front-end build, back-end logic, database setup, and the integrations that connect it all.",
      points: [
        "A responsive front-end built precisely to your design specifications.",
        "Back-end architecture and API development to power dynamic functionality.",
        "Database design suited to your data structure and expected scale.",
        "Third-party integrations for payments, CMS, analytics, and other essential tools.",
      ],
    },
    approach:
      "We approach every build with both engineering rigor and design fidelity — planning the architecture up front, then building in a way that's maintainable and easy to extend. We stay closely aligned with your team throughout, not just at kickoff and handoff.",
    results: {
      intro:
        "Our service delivers fast, reliable websites and web apps that hold up under real-world use and are built to grow with your business.",
      points: [
        "Faster load times and stronger performance across devices.",
        "A stable technical foundation that scales as traffic and features grow.",
        "Fewer bugs and technical debt thanks to clean, well-planned architecture.",
        "A site your team can maintain and extend without starting over.",
      ],
    },
  },
  {
    slug: "ai-development",
    title: "AI Development",
    summary:
      "Build AI-powered chatbots, automations, and intelligent tools that integrate seamlessly with your existing systems to streamline workflows and save time.",
    tags: ["Chatbots", "Automation", "API Integration"],
    cardImages: ["/images/services/ai-development-1.png", "/images/services/ai-development-2.jpg"],
    detailImages: [
      "/images/services/ai-development-detail-1.jpg",
      "/images/services/ai-development-detail-2.jpg",
    ],
    heroImage: "/images/services/ai-development-hero.jpg",
    process: genericProcess,
    about:
      "Our AI Development service brings practical, working AI features into your product — grounded in our own experience building and shipping an AI chatbot and agent in-house. We focus on AI that solves a real problem for your users, not novelty for its own sake.",
    included: {
      intro:
        "Our service covers everything needed to add a working AI feature to your product — from initial use-case scoping through to a tested, integrated feature.",
      points: [
        "AI chatbot or agent development scoped to your specific use case.",
        "Workflow automation to remove repetitive manual work from your team's process.",
        "Integration of third-party AI APIs (OpenAI, Anthropic, and others) into your existing product.",
        "Custom internal AI tooling built around your team's specific workflows.",
      ],
    },
    approach:
      "We approach AI development the same way we approach any product feature — starting with the real problem, not the technology. Because we've built and shipped our own AI agent, we know firsthand where these features tend to break down in practice, and we design around that from the start.",
    results: {
      intro:
        "Our service delivers AI features that hold up under real usage — reducing manual work, improving response times, and adding genuine value rather than a gimmick.",
      points: [
        "Reduced manual workload through automated, AI-handled workflows.",
        "Faster response times for customer-facing chat and support features.",
        "A working AI feature validated against real usage, not just a demo.",
        "A foundation your team can keep building AI capability on top of.",
      ],
    },
  },
  {
    slug: "framer-wordpress-development",
    title: "Framer & WordPress Development",
    summary:
      "Build and launch fast, flexible websites on Framer or WordPress — from custom templates to CMS setup and smooth platform migrations.",
    tags: ["CMS", "Templates", "Migration"],
    ...img("framer-wordpress-development"),
    heroImage: "/images/services/framer-wordpress-development-hero.jpg",
    process: genericProcess,
    about:
      "Our Framer & WordPress Development service delivers fast, well-structured websites on whichever platform actually fits your needs — Framer for design-led, interactive sites, or WordPress for content-heavy sites needing deep plugin support. Either way, your team ends up able to manage it themselves.",
    included: {
      intro:
        "Our service includes everything needed to launch and maintain a site on Framer or WordPress — build, CMS structure, integrations, and training so your team isn't dependent on a developer for every change.",
      points: [
        "A fully designed and built site on Framer or WordPress, matched to your needs.",
        "CMS collections and content structure set up for easy, ongoing updates.",
        "Plugin and third-party integration setup for forms, analytics, and other tools.",
        "Editor training so your team can update content confidently after launch.",
      ],
    },
    approach:
      "We start by understanding your content volume, team's technical comfort, and growth plans before recommending a platform — rather than defaulting to one. From there, we build with maintainability in mind, so the site stays easy to manage long after launch.",
    results: {
      intro:
        "Our service delivers a site your team can actually run day-to-day, without being locked out of their own content.",
      points: [
        "Faster content updates without needing a developer for routine changes.",
        "Cleaner CMS structure that stays organized as content grows.",
        "Reduced ongoing maintenance costs through well-structured builds.",
        "A platform choice that fits your team's actual workflow, not a default.",
      ],
    },
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
