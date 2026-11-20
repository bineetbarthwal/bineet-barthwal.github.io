"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import EmailLink from "@/components/EmailLink";

export default function MIHCaseStudy() {
  const [zoomImage, setZoomImage] = useState(null);

  const closeZoom = useCallback(() => setZoomImage(null), []);

  useEffect(() => {
    if (!zoomImage) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeZoom();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [zoomImage, closeZoom]);

  return (
    <main className="min-h-screen bg-white text-[#141417]">
      {/* ── 590px LOCKED CONTAINER ─────────────────────────────────── */}
      <article className="max-w-[590px] mx-auto px-6 pt-10 pb-20">
        {/* Top Navigation Bar: matches /studio and /work 1:1 */}
        <div className="flex items-center justify-between mb-9">
          <Link className="btn-secondary-pill" href="/work">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            <span>Product Design</span>
          </Link>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-pill"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
            <span>Resume</span>
          </a>
        </div>

        {/* Case Study Header */}
        <header className="mt-8 mb-6">
          <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#3B5BFF] block mb-2">
            UX Case Study · Conversion &amp; Web
          </span>
          <h1
            style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
            className="font-display font-extrabold text-[32px] sm:text-[38px] text-[#141417] tracking-[-0.035em] leading-[1.08]"
          >
            MiH Interiors: Studio Website Built to Convert
          </h1>
          <p className="font-sans-custom font-normal text-[17px] text-[#52525B] mt-3 leading-[1.5] tracking-[-0.015em]">
            Replacing high-friction inquiry forms with an interactive, value-first estimation engine that delivers transparent pricing and qualified leads.
          </p>
        </header>

        {/* Hero Image Framing */}
        <div
          onClick={() =>
            setZoomImage({
              src: "/images/mih-interiors.png",
              alt: "MiH Interiors Web Architecture & Conversion Showcase",
            })
          }
          className="w-full border border-zinc-200/90 rounded-[4px] overflow-hidden bg-[#F8F8F9] my-6 cursor-zoom-in relative group"
        >
          <img
            src="/images/mih-interiors.png"
            alt="MiH Interiors Web Architecture & Conversion Showcase"
            draggable={false}
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
          />
          <div className="absolute bottom-2.5 right-2.5 px-2 py-1 bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Click to zoom
          </div>
        </div>

        {/* Project Meta Grid */}
        <div className="grid grid-cols-3 gap-3 p-4 my-8 bg-[#F8F8F9] border border-zinc-200/80 rounded-[4px] text-[13px]">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#71717A] block">
              Domain
            </span>
            <span className="font-medium text-[#141417] mt-0.5 block">Interior Architecture</span>
          </div>
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#71717A] block">
              Focus
            </span>
            <span className="font-medium text-[#141417] mt-0.5 block">CRO &amp; Experience</span>
          </div>
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#71717A] block">
              Live Link
            </span>
            <a
              href="https://www.mihinteriors.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#3B5BFF] hover:underline mt-0.5 block truncate"
            >
              mihinteriors.in ↗
            </a>
          </div>
        </div>

        {/* Section: The Friction of Lead Generation */}
        <section className="my-10">
          <h2
            style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
            className="font-display font-bold text-[22px] text-[#141417] mb-3"
          >
            The Friction of Lead Generation
          </h2>
          <div className="space-y-4 text-[15px] text-[#52525B] leading-[1.65]">
            <p>
              In the luxury interior industry, traditional studio websites rely on high-friction &apos;Contact Us&apos; forms. Prospective clients are often intimidated by unknown costs, lack of pricing clarity, and fear of high-pressure sales calls.
            </p>
            <p>
              Demanding high-effort personal data upfront while offering zero immediate reciprocal value leads to severe bounce rates: especially among high-intent homeowners who simply want to understand project scope and ballpark budgets.
            </p>
          </div>
        </section>

        {/* Section: A Value-First Quoting Flow */}
        <section className="my-10">
          <h2
            style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
            className="font-display font-bold text-[22px] text-[#141417] mb-3"
          >
            A Value-First Quoting Flow
          </h2>
          <div className="space-y-4 text-[15px] text-[#52525B] leading-[1.65]">
            <p>
              We reframed the user experience from a &apos;data capture&apos; gatekeeper into a &apos;value delivery&apos; service. By introducing an interactive, room-by-room cost estimation flow, prospective clients receive instant budget calculations tailored to their specific floor plan.
            </p>
            <p>
              Breaking down complex renovation costs into digestible steps explicitly lowers the cognitive commitment threshold. The client receives transparent financial clarity, and the studio receives enriched, pre-qualified project parameters.
            </p>
          </div>
        </section>

        {/* Section: Driving Conversion */}
        <section className="my-10">
          <h2
            style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
            className="font-display font-bold text-[22px] text-[#141417] mb-3"
          >
            Driving Conversion &amp; Trust
          </h2>
          <div className="space-y-4 text-[15px] text-[#52525B] leading-[1.65]">
            <p>
              By replacing blind contact forms with an informative estimation tool, the site successfully dismantled user anxiety. The immediate feedback loop keeps prospective clients actively engaged, significantly lowering bounce rates and seamlessly converting casual visitors into warm, qualified inquiries.
            </p>
          </div>

          {/* Key Principles Box */}
          <div className="p-5 my-6 bg-[#F8F8F9] border border-zinc-200/80 rounded-[4px]">
            <h3 className="font-display font-bold text-[15px] text-[#141417] mb-3">
              Core UX Principles Applied:
            </h3>
            <ul className="space-y-2 text-[14px] text-[#52525B] leading-relaxed list-disc pl-5">
              <li>
                <strong className="text-[#141417]">Transparent Pricing:</strong> Immediate cost estimates beat arbitrary inquiry forms.
              </li>
              <li>
                <strong className="text-[#141417]">Progressive Disclosure:</strong> Multi-step room selectors minimize cognitive load compared to monolithic text fields.
              </li>
              <li>
                <strong className="text-[#141417]">Architectural Framing:</strong> Clean editorial typography and negative space reinforce the studio&apos;s premium market positioning.
              </li>
            </ul>
          </div>
        </section>

        {/* ── EDITORIAL FOOTER DIVIDER ──────────────────────────────── */}
        <footer className="border-t border-zinc-200/80 pt-8 mt-16 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/will" className="btn-secondary-pill w-full sm:w-auto">
            <span>Next Case Study: Will Marketplace</span>
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>

          <EmailLink className="btn-primary-pill w-full sm:w-auto">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span>Get in touch</span>
          </EmailLink>
        </footer>
      </article>

      {/* ── FULLSCREEN ZOOM LIGHTBOX ─────────────────────────────────── */}
      <AnimatePresence>
        {zoomImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeZoom}
            data-lenis-prevent="true"
            onWheel={(e) => e.stopPropagation()}
            className="fixed inset-0 z-[9999] bg-black/92 backdrop-blur-xs flex flex-col items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <button
              type="button"
              onClick={closeZoom}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm font-semibold transition-colors cursor-pointer z-10"
              aria-label="Close zoom"
            >
              ✕
            </button>

            <motion.div
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.96 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-[95vw] max-h-[85vh] flex flex-col items-center"
            >
              <img
                src={zoomImage.src}
                alt={zoomImage.alt}
                draggable={false}
                className="max-w-full max-h-[82vh] object-contain rounded-[4px] border border-white/10 shadow-2xl"
              />
              {zoomImage.alt && (
                <p className="text-[12.5px] text-zinc-400 mt-3 text-center">
                  {zoomImage.alt}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
