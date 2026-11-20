"use client";
import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import EmailLink from "@/components/EmailLink";

const PRODUCT_PROJECTS = [
  {
    id: "will",
    title: "Will: Blue-Collar Service Marketplace",
    category: "Mobile Apps",
    tag: "Mobile App · 2024",
    summary:
      "Designing a low-friction service booking platform connecting India's busiest urban households with daily-wage skilled trades through dual OTP verification and voice guidance.",
    image: "/images/will-thumbnail-1.jpg",
    href: "/will",
    cta: "Read Case Study ↗",
    type: "case-study",
  },
  {
    id: "mih",
    title: "MiH Interiors: Studio Website Built to Convert",
    category: "B2B & SaaS",
    tag: "UX & Conversion · 2024",
    summary:
      "Replacing high-friction inquiry forms with an interactive, value-first estimation engine that delivers transparent pricing and qualified leads for a luxury studio.",
    image: "/images/mih-interiors.png",
    href: "/mih",
    cta: "Read Case Study ↗",
    type: "case-study",
  },
  {
    id: "fundbridge",
    title: "Fundbridge: Founder & VC Diligence Platform",
    category: "B2B & SaaS",
    tag: "B2B & SaaS · 2024",
    summary:
      "A unified dealflow and investor relationship platform designed to streamline startup pitch submissions, evaluation matrices, and diligence workflows.",
    image: "/images/fundbridge-thumbnail-1.png",
    href: null,
    cta: "View Preview ↗",
    type: "modal",
    brief:
      "Fundbridge bridges early-stage venture capital firms with startup founders through an organized submission pipeline, live cap table modeling, and streamlined due diligence workflows.",
    tools: ["Figma", "Design Systems", "Prototyping"],
  },
  {
    id: "rkade",
    title: "Rkade: Campus Gaming & Events Platform",
    category: "Design Systems",
    tag: "Design Systems · 2023",
    summary:
      "A campus platform and modular design system where students discover and participate in hackathons, gaming tournaments, fests, and student communities.",
    image: "/images/rkade-thumbnail.png",
    href: null,
    cta: "View Preview ↗",
    type: "modal",
    brief:
      "An end-to-end design system and mobile interface for collegiate event organizers, enabling tournament bracket generation, ticketing, and live campus leaderboards.",
    tools: ["Figma", "UI Systems", "Mobile Design"],
  },
];

const FILTERS = ["All", "Mobile Apps", "B2B & SaaS", "Design Systems"];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [modalItem, setModalItem] = useState(null);

  const filteredProjects =
    activeFilter === "All"
      ? PRODUCT_PROJECTS
      : PRODUCT_PROJECTS.filter((p) => p.category === activeFilter);

  const closeModal = useCallback(() => setModalItem(null), []);

  useEffect(() => {
    if (!modalItem) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalItem, closeModal]);

  return (
    <main className="min-h-screen bg-white text-[#141417]">
      {/* ── 590px LOCKED CONTAINER ─────────────────────────────────── */}
      <div className="max-w-[590px] mx-auto px-6 pt-10 pb-20">
        {/* Top Bar: matches /studio 1:1 */}
        <div className="flex items-center justify-between mb-9">
          <Link className="btn-secondary-pill" href="/">
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
            <span>All work</span>
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

        {/* Page Header */}
        <h1
          style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
          className="font-display font-extrabold text-[32px] sm:text-[36px] text-[#141417] tracking-[-0.03em] leading-[1.05] mt-10"
        >
          Product &amp; UX Design
        </h1>

        <p className="font-sans-custom font-normal text-[15px] text-[#52525B] mt-2.5 leading-[1.6]">
          End-to-end product architecture, design systems, and high-craft interfaces. Select a case study to read the full breakdown.
        </p>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 mt-5">
          {FILTERS.map((tab) => {
            const active = activeFilter === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveFilter(tab)}
                className={
                  active
                    ? "btn-dark-pill !py-1.5 !px-3.5 !text-[12.5px]"
                    : "btn-secondary-pill !py-1.5 !px-3.5 !text-[12.5px]"
                }
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Case Study Feed */}
        <div className="flex flex-col gap-8 mt-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const cardContent = (
                <div className="flex flex-col">
                  {/* Thumbnail Container */}
                  <div className="w-full aspect-video bg-[#F4F4F6] border border-zinc-200/90 rounded-[4px] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] relative group">
                    <img
                      src={project.image}
                      alt={project.title}
                      draggable={false}
                      className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                    />

                    {/* Top-Right Hover Pill */}
                    <div className="absolute top-3.5 right-3.5 z-10">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/95 backdrop-blur-xs text-[#141417] text-[11.5px] font-semibold tracking-tight shadow-sm opacity-90 group-hover:opacity-100 transition-opacity">
                        <span>{project.cta}</span>
                      </span>
                    </div>

                    {/* Gradient Vignette on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>

                  {/* Editorial Meta Row Below Thumbnail */}
                  <div className="mt-3.5">
                    <div className="flex items-baseline justify-between gap-3">
                      <h2
                        style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
                        className="font-display font-bold text-[18px] text-[#141417] group-hover:text-[#3B5BFF] transition-colors leading-snug"
                      >
                        {project.title}
                      </h2>
                      <span className="text-[12.5px] font-medium text-[#71717A] shrink-0">
                        {project.tag}
                      </span>
                    </div>
                    <p className="text-[14px] text-[#52525B] leading-relaxed mt-1">
                      {project.summary}
                    </p>
                  </div>
                </div>
              );

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.2 }}
                  className="w-full"
                >
                  {project.href ? (
                    <Link href={project.href} className="block group">
                      {cardContent}
                    </Link>
                  ) : (
                    <div
                      onClick={() => setModalItem(project)}
                      className="block group cursor-pointer"
                    >
                      {cardContent}
                    </div>
                  )}
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* ── PREVIEW MODAL FOR SLIDE / PREVIEW PROJECTS ──────────────── */}
      <AnimatePresence>
        {modalItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/88 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              data-lenis-prevent="true"
              onWheel={(e) => e.stopPropagation()}
              className="bg-white rounded-lg max-w-[680px] w-full max-h-[90vh] overflow-y-auto border border-zinc-200/80 shadow-2xl relative flex flex-col"
            >
              {/* Header */}
              <div className="sticky top-0 bg-white/95 backdrop-blur-xs border-b border-zinc-200/80 px-5 py-4 flex items-center justify-between z-10">
                <div>
                  <span className="text-[11.5px] font-semibold uppercase tracking-wider text-[#71717A]">
                    {modalItem.tag}
                  </span>
                  <h3
                    style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
                    className="font-display font-bold text-[18px] text-[#141417]"
                  >
                    {modalItem.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={closeModal}
                  className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 flex items-center justify-center text-sm font-semibold transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col gap-4">
                <div className="w-full aspect-video rounded-md overflow-hidden bg-[#F4F4F6] border border-zinc-200/80">
                  <img
                    src={modalItem.image}
                    alt={modalItem.title}
                    draggable={false}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="mt-2">
                  <h4 className="text-[13px] font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                    Project Brief
                  </h4>
                  <p className="text-[14.5px] text-[#52525B] leading-relaxed">
                    {modalItem.brief || modalItem.summary}
                  </p>
                </div>

                {modalItem.tools && (
                  <div>
                    <h4 className="text-[13px] font-semibold uppercase tracking-wider text-zinc-500 mb-1.5">
                      Tools &amp; Competencies
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {modalItem.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2.5 py-1 rounded bg-zinc-100 text-zinc-700 text-[12px] font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── FOOTER ─────────────────────────────────────────────────── */}
      <footer className="w-full bg-white pt-10 pb-16">
        <div className="max-w-[590px] mx-auto px-6">
          <div className="inline-flex items-center gap-2 text-[14px] font-normal text-[#52525B] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
            <span>Open to work · India</span>
          </div>

          <h2
            style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
            className="font-display font-extrabold text-[40px] sm:text-[52px] text-[#111113] tracking-[-0.04em] leading-[1.02]"
          >
            Have a product or <br className="hidden sm:block" />
            brand in mind?
          </h2>

          <div className="flex flex-wrap items-center gap-6 mt-7 text-[15px] font-medium text-[#3F3F46]">
            <EmailLink className="hover:text-[#111113] transition-colors" />
            <a
              href="https://www.linkedin.com/in/bineet-barthwal/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#111113] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#111113] transition-colors"
            >
              Resume
            </a>
            <Link className="text-[#71717A] hover:text-[#111113] transition-colors" href="/privacy">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
