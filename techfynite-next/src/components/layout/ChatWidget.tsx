import Script from "next/script";
import { site } from "@/data/site";

const CHAT_CDN = "https://cdn.jsdelivr.net/gh/Shakib-H-201/techfynite-chatbot@main";

const config = {
  apiUrl: "https://techfynite-chatbot.onrender.com",
  assistantName: "Maya",
  assistantRole: "Product Consultant at Techfynite",
  avatarUrl: `${CHAT_CDN}/assets/maya.png`,
  logoUrl: `${CHAT_CDN}/assets/logo.png`,
  primaryColor: "#2563EB",
  primaryColorDark: "#1D4ED8",
  darkColor: "#0F172A",
  darkColor2: "#0B1220",
  position: "bottom-right",
  bookCallUrl: site.calendly,
  contactUrl: `${site.url}/contact-us`,
};

/** The "Maya" AI chat widget that the original site loads on every page. */
export function ChatWidget() {
  return (
    <>
      <Script id="tf-chat-config" strategy="afterInteractive">
        {`window.TechFyniteChatConfig = ${JSON.stringify(config)};`}
      </Script>
      <Script src={`${CHAT_CDN}/techfynite-chat-widget.js?v=2`} strategy="lazyOnload" />
    </>
  );
}
