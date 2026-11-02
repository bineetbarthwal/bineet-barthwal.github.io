"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Map existing image paths and PDF links from the project into this flat array.
// Set `pdf: "/path-to-guidelines.pdf"` for Brand Identity / Logo items so clicking opens the PDF.
// Set `slides: [...]` for multi-artboard case studies to open the vertical Behance-style showcase stack.
// Leave `pdf: null` and omit `slides` for single images to open the full-screen zoom modal.
export const GALLERY_ITEMS = [
  {
    id: "item-1",
    title: "ISBACON 2026 · National Summit Identity",
    subtitle:
      "Complete brand identity, cultural motif system, print collateral & event signage",
    category: "Brand Identity",
    span: "col-span-12",
    height: "h-[270px] sm:h-[310px]",
    src: "/studio/isbacon2026/1x/Slide 1.webp",
    slides: [
      "/studio/isbacon2026/1x/Slide 1.webp",
      "/studio/isbacon2026/1x/Slide 2.webp",
      "/studio/isbacon2026/1x/Slide 3.webp",
      "/studio/isbacon2026/1x/Slide 4-1.webp",
      "/studio/isbacon2026/1x/Slide 4-2.webp",
      "/studio/isbacon2026/1x/Slide 4-3.webp",
      "/studio/isbacon2026/1x/Slide 4-4.webp",
      "/studio/isbacon2026/1x/Slide 4-5.webp",
      "/studio/isbacon2026/1x/Slide 4-6.webp",
      "/studio/isbacon2026/1x/Slide 4-7.webp",
      "/studio/isbacon2026/1x/Slide 4-8.webp",
      "/studio/isbacon2026/1x/Slide 5.webp",
      "/studio/isbacon2026/1x/Slide 6.webp",
    ],
    brief:
      "End-to-end visual identity system for the 18th Annual ISBACON 2026 National Conference—blending regional cultural motifs (Open Hand monument, Phulkari geometry, Golden Temple, wheat & state icons) into a modular grid across 40+ print, badge, and stage deliverables.",
    tools: ["Adobe Illustrator", "Adobe InDesign", "Adobe Photoshop"],
    pdf: null,
  },
  {
    id: "item-2",
    title: "INCEPT · Brand Identity Guidelines",
    subtitle: "Logo architecture, typography & visual identity book",
    category: "Brand Identity",
    span: "col-span-12 sm:col-span-6",
    height: "h-[220px]",
    src: "/studio/incept-brand.jpg", // Keep existing working image path
    pdf: "/studio/incept-guidelines.pdf", // Keep existing PDF path if present in /public
  },
  {
    id: "item-3",
    title: "CUBE · Ecosystem Identity System",
    subtitle: "Brand mark, grid construction & merchandise system",
    category: "Brand Identity",
    span: "col-span-12 sm:col-span-6",
    height: "h-[220px]",
    src: "/studio/cube-brand.jpg", // Keep existing working image path
    pdf: "/studio/cube-guidelines.pdf",
  },
  {
    id: "item-4",
    title: "ISBACON 2026 · Delegate Passes & Lanyards",
    subtitle: "Print production & access control badge system",
    category: "Event Systems",
    span: "col-span-12 sm:col-span-5",
    height: "h-[230px]",
    src: "/studio/isbacon-passes.jpg", // Keep existing working image path
    pdf: null,
  },
  {
    id: "item-5",
    title: "IEDC · Official Brand Guidelines",
    subtitle: "Innovation cell identity mark, color palette & stationery",
    category: "Brand Identity",
    span: "col-span-12 sm:col-span-7",
    height: "h-[230px]",
    src: "/studio/iedc-identity.jpg", // Keep existing working image path
    pdf: "/studio/iedc-guidelines.pdf",
  },
  {
    id: "item-6",
    title: "Republic For Startups · Summit Campaign",
    subtitle: "Key visuals, stage backdrops & promotional suite",
    category: "Print & Campaigns",
    span: "col-span-12 sm:col-span-7",
    height: "h-[225px]",
    src: "/studio/republic-startups.jpg", // Keep existing working image path
    pdf: null,
  },
  {
    id: "item-7",
    title: "Geebi · Brand & Visual Identity",
    subtitle: "Startup brand identity & digital visual system",
    category: "Brand Identity",
    span: "col-span-12 sm:col-span-5",
    height: "h-[225px]",
    src: "/studio/geebi-brand.jpg", // Keep existing working image path
    pdf: "/studio/geebi-guidelines.pdf",
  },
  {
    id: "item-8",
    title: "High-Volume Print & Campaign Collateral",
    subtitle: "Editorial layouts, standees & automated InDesign production",
    category: "Print & Campaigns",
    span: "col-span-12",
    height: "h-[250px]",
    src: "/studio/campaign-spread.jpg", // Keep existing working image path
    pdf: null,
  },
];

export default function BrandBentoPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxItem, setLightboxItem] = useState(null);

  const filters = ["All", "Brand Identity", "Event Systems", "Print & Campaigns"];

  const filteredItems =
    activeFilter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  // Close lightbox on Escape key
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setLightboxItem(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxItem]);

  const handleTileClick = (item) => {
    if (item.pdf) {
      window.open(item.pdf, "_blank", "noopener,noreferrer");
    } else {
      setLightboxItem(item);
    }
  };

  return (
    <main className="min-h-screen bg-white text-[#141417]">
      {/* Locked 590px Container Matching Homepage */}
      <div className="max-w-[590px] mx-auto px-6 pt-10">
        {/* Top Bar */}
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

        {/* Compact Header (No wasted vertical space) */}
        <h1
          style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
          className="font-display font-extrabold text-[38px] sm:text-[44px] text-[#141417] tracking-[-0.04em] leading-[1.02]"
        >
          Brand & Visuals
        </h1>

        <p className="font-sans-custom font-normal text-[15px] text-[#52525B] mt-2.5 leading-[1.6]">
          Identity systems, national summit branding, and campaign collateral.
          Hover for details—click logos to open brand PDFs or event visuals to
          expand full screen.
        </p>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 mt-5">
          {filters.map((tab) => {
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

        {/* Sharp-Cornered Bento Grid (No text headers between tiles) */}
        <motion.div layout className="grid grid-cols-12 gap-2.5 mt-7">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const isPdf = Boolean(item.pdf);
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  onClick={() => handleTileClick(item)}
                  data-cursor="hand"
                  className={`${item.span} ${item.height} group relative rounded-none overflow-hidden bg-[#F4F4F6] border border-zinc-200/90 cursor-pointer select-none`}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />

                  {/* Full-Tile Hover Overlay (All info strictly inside the image) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-4 flex flex-col justify-between">
                    {/* Top-Right Action Badge (PDF vs Showcase vs Fullscreen Zoom) */}
                    <div className="flex justify-end">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white text-[#141417] text-[11px] font-semibold tracking-tight shadow-sm">
                        {isPdf ? (
                          <>
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                              <polyline points="14 2 14 8 20 8" />
                            </svg>
                            <span>Open Brand PDF ↗</span>
                          </>
                        ) : item.slides && item.slides.length > 0 ? (
                          <>
                            <span>Full Showcase ({item.slides.length} Slides)</span>
                            <span className="text-[12px]">↓</span>
                          </>
                        ) : (
                          <>
                            <span>Full View</span>
                            <span>⤢</span>
                          </>
                        )}
                      </span>
                    </div>

                    {/* Bottom-Left Project Info Inside Image */}
                    <div className="translate-y-1 group-hover:translate-y-0 transition-transform duration-200">
                      <span className="block text-[10.5px] font-semibold uppercase tracking-[0.08em] text-zinc-300">
                        {item.category}
                      </span>
                      <h2
                        style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
                        className="font-display font-bold text-[15.5px] text-white leading-snug mt-0.5"
                      >
                        {item.title}
                      </h2>
                      {item.subtitle && (
                        <p className="text-[12.5px] text-zinc-300 mt-0.5 line-clamp-1">
                          {item.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Sharp Full-Screen Zoom & Behance Showcase Modal */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[9999] bg-[#0A0A0C]/96 backdrop-blur-md overflow-y-auto"
          >
            {/* Sticky Top Bar */}
            <div className="sticky top-0 z-50 bg-[#0E0E11]/92 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-3.5 flex items-center justify-between text-white">
              <div className="flex items-center gap-3 min-w-0 pr-4">
                <div>
                  <span className="text-[10.5px] font-semibold uppercase tracking-[0.08em] text-zinc-400 block leading-tight">
                    {lightboxItem.category}
                  </span>
                  <h3
                    style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
                    className="font-display font-bold text-[16px] sm:text-[18px] text-white truncate leading-tight mt-0.5"
                  >
                    {lightboxItem.title}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setLightboxItem(null)}
                className="px-3.5 py-1.5 bg-white/10 hover:bg-white/20 text-white text-[13px] font-medium transition-colors cursor-pointer shrink-0"
              >
                Close ✕
              </button>
            </div>

            {/* Modal Body: Behance Stack vs Single Fullscreen Image */}
            {lightboxItem.slides && lightboxItem.slides.length > 0 ? (
              <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
                {/* Project Briefing Card */}
                {(lightboxItem.brief || lightboxItem.tools) && (
                  <div className="bg-[#141417] border border-white/10 p-5 sm:p-7 mb-6 text-white">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                        {lightboxItem.category}
                      </span>
                      <span className="text-zinc-600">·</span>
                      <span className="text-[12px] text-zinc-400 font-medium">
                        {lightboxItem.slides.length} Deliverable Artboards
                      </span>
                    </div>
                    <h2
                      style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
                      className="font-display font-extrabold text-[22px] sm:text-[28px] text-white tracking-[-0.03em] leading-tight"
                    >
                      {lightboxItem.title}
                    </h2>
                    {lightboxItem.subtitle && (
                      <p className="text-[14px] text-zinc-300 font-medium mt-1">
                        {lightboxItem.subtitle}
                      </p>
                    )}
                    {lightboxItem.brief && (
                      <p className="text-[14px] sm:text-[15px] text-zinc-300 mt-4 leading-relaxed border-t border-white/10 pt-4 font-normal">
                        {lightboxItem.brief}
                      </p>
                    )}
                    {lightboxItem.tools && lightboxItem.tools.length > 0 && (
                      <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-white/10">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 mr-1">
                          Deliverable Tools:
                        </span>
                        {lightboxItem.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-2.5 py-1 bg-white/10 text-zinc-200 text-[12px] font-medium"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Vertical Stack of Slides (Behance Style) */}
                <div className="flex flex-col gap-3 sm:gap-4">
                  {lightboxItem.slides.map((slideSrc, idx) => (
                    <div
                      key={idx}
                      className="w-full bg-[#121215] border border-white/10 overflow-hidden shadow-2xl"
                    >
                      <img
                        src={slideSrc}
                        alt={`${lightboxItem.title} - Slide ${idx + 1}`}
                        className="w-full h-auto block select-none"
                        loading={idx < 2 ? "eager" : "lazy"}
                      />
                    </div>
                  ))}
                </div>

                {/* End of Showcase Footer */}
                <div className="text-center py-12 flex flex-col items-center gap-4">
                  <span className="text-[12px] text-zinc-500 uppercase tracking-widest font-mono">
                    End of Case Study · {lightboxItem.slides.length} Deliverable Slides
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setLightboxItem(null);
                    }}
                    className="btn-secondary-pill !bg-white !text-black !py-2 !px-6 text-[13px] font-medium"
                  >
                    Close Showcase ✕
                  </button>
                </div>
              </div>
            ) : (
              <div
                onClick={() => setLightboxItem(null)}
                className="min-h-[calc(100vh-65px)] flex flex-col items-center justify-center p-4 sm:p-8 cursor-zoom-out"
              >
                <motion.div
                  initial={{ scale: 0.96, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.96, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative max-w-5xl w-full max-h-[82vh] bg-[#141417] border border-white/15 flex items-center justify-center overflow-hidden cursor-default"
                >
                  <img
                    src={lightboxItem.src}
                    alt={lightboxItem.title}
                    className="w-full h-auto max-h-[82vh] object-contain"
                  />
                </motion.div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Same White Editorial Footer */}
      <footer className="w-full bg-white pt-20 pb-16">
        <div className="max-w-[590px] mx-auto px-6">
          <div className="inline-flex items-center gap-2 text-[14px] font-normal text-[#52525B] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
            <span>Open to work · India</span>
          </div>

          <h2
            style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
            className="font-display font-extrabold text-[44px] sm:text-[56px] text-[#111113] tracking-[-0.04em] leading-[1.02]"
          >
            Have a product or <br className="hidden sm:block" />
            brand in mind?
          </h2>

          <div className="flex flex-wrap items-center gap-6 mt-7 text-[15px] font-medium text-[#3F3F46]">
            <a
              href="mailto:hello@bineet.in"
              className="hover:text-[#111113] transition-colors"
            >
              hello@bineet.in
            </a>
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
