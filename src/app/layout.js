import Script from "next/script";
import DirectionalCursor from "@/components/DirectionalCursor";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

export const metadata = {
  title: "Bineet Barthwal · Product & Brand Designer",
  description: "Product & Brand Designer specializing in UI/UX, B2B SaaS, and visual identity systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=Hanken+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-white text-[#141417] selection:bg-[#3b5bff]/15 selection:text-[#3b5bff]">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KWVJF2Z0VX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KWVJF2Z0VX');
          `}
        </Script>
        <SmoothScroll />
        <DirectionalCursor />
        {children}
      </body>
    </html>
  );
}
