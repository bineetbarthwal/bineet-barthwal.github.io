import "./globals.css";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://bineet.in"),
  title: {
    default: "Bineet Barthwal · Product & Brand Designer",
    template: "%s · Bineet Barthwal",
  },
  description:
    "Product & Brand Designer specialising in UI/UX, B2B SaaS workflows, and visual identity systems. Based in India, open to work.",
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    siteName: "Bineet Barthwal",
    locale: "en_US",
    url: "https://bineet.in",
    title: "Bineet Barthwal · Product & Brand Designer",
    description:
      "Product & Brand Designer specialising in UI/UX, B2B SaaS workflows, and visual identity systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bineet Barthwal · Product & Brand Designer",
    description:
      "Product & Brand Designer specialising in UI/UX, B2B SaaS workflows, and visual identity systems.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${hanken.variable}`}>
      <body
        style={{ fontFamily: "var(--font-hanken), sans-serif" }}
        className="antialiased bg-white text-[#141417] selection:bg-[#3b5bff]/15 selection:text-[#3b5bff]"
      >
        <SmoothScroll/>
        {children}
      </body>
    </html>
  );
}
