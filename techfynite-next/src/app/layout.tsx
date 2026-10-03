import type { Metadata } from "next";
import { Alexandria, DM_Sans, Geist, Great_Vibes, Inter, Poppins } from "next/font/google";
import { ChatWidget } from "@/components/layout/ChatWidget";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Newsletter } from "@/components/layout/Newsletter";
import { site, socials } from "@/data/site";
import "./globals.css";

const inter = Inter({ variable: "--nf-inter", subsets: ["latin"] });
const dmSans = DM_Sans({ variable: "--nf-dm-sans", subsets: ["latin"] });
const geist = Geist({ variable: "--nf-geist", subsets: ["latin"] });
const greatVibes = Great_Vibes({ variable: "--nf-great-vibes", subsets: ["latin"], weight: "400" });
const poppins = Poppins({
  variable: "--nf-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
const alexandria = Alexandria({ variable: "--nf-alexandria", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Techfynite - Leading Global UI/UX & Web Design Agency",
    template: "%s | TechFynite",
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: "TechFynite",
    images: ["/og.png"],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: "Techfynite",
  url: site.url,
  logo: `${site.url}/brand/logo.svg`,
  description: site.description,
  founder: "Shakib H.",
  foundingDate: "2023",
  email: site.email,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: site.phone,
    contactType: "customer support",
    areaServed: "Worldwide",
  },
  address: [
    { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "Bangladesh" },
    {
      "@type": "PostalAddress",
      addressLocality: "Leipzig",
      addressRegion: "Saxony",
      addressCountry: "Germany",
    },
  ],
  sameAs: [
    ...socials.map((s) => s.href),
    "https://x.com/TechFynite",
    "https://www.behance.net/techfynite",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmSans.variable} ${geist.variable} ${greatVibes.variable} ${poppins.variable} ${alexandria.variable}`}
    >
      <body className="flex min-h-dvh flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Newsletter />
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
