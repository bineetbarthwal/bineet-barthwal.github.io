"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// ─── GALLERY DATA ────────────────────────────────────────────────────────────
// slides entries can be:
//   • string  → static slide image path
//   • { type: "loop", frames: [...], interval: 550 } → hard-cut frame animation
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
      {
        type: "loop",
        interval: 550,
        frames: [
          "/studio/isbacon2026/1x/Slide 4-1.webp",
          "/studio/isbacon2026/1x/Slide 4-2.webp",
          "/studio/isbacon2026/1x/Slide 4-3.webp",
          "/studio/isbacon2026/1x/Slide 4-4.webp",
          "/studio/isbacon2026/1x/Slide 4-5.webp",
          "/studio/isbacon2026/1x/Slide 4-6.webp",
          "/studio/isbacon2026/1x/Slide 4-7.webp",
          "/studio/isbacon2026/1x/Slide 4-8.webp",
        ],
      },
      "/studio/isbacon2026/1x/Slide 5.webp",
      "/studio/isbacon2026/1x/Slide 6.webp",
    ],
    brief:
      "End-to-end visual identity system for the 18th Annual ISBACON 2026 National Conference, blending regional cultural motifs (Open Hand monument, Phulkari geometry, Golden Temple, wheat and state icons) into a modular grid across 40+ print, badge, and stage deliverables.",
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
    src: "/studio/incept-brand.jpg",
    pdf: "/studio/incept-guidelines.pdf",
  },
  {
    id: "item-3",
    title: "CUBE · Ecosystem Identity System",
    subtitle: "Brand mark, grid construction & merchandise system",
    category: "Brand Identity",
    span: "col-span-12 sm:col-span-6",
    height: "h-[220px]",
    src: "/studio/cube-brand.jpg",
    pdf: "/studio/cube-guidelines.pdf",
  },
  {
    id: "item-4",
    title: "ISBACON 2026 · Delegate Passes & Lanyards",
    subtitle: "Print production & access control badge system",
    category: "Event Systems",
    span: "col-span-12 sm:col-span-5",
    height: "h-[230px]",
    src: "/studio/isbacon-passes.jpg",
    pdf: null,
  },
  {
    id: "item-5",
    title: "IEDC · Official Brand Guidelines",
    subtitle: "Innovation cell identity mark, color palette & stationery",
    category: "Brand Identity",
    span: "col-span-12 sm:col-span-7",
    height: "h-[230px]",
    src: "/studio/iedc-identity.jpg",
    pdf: "/studio/iedc-guidelines.pdf",
  },
  {
    id: "item-6",
    title: "Republic For Startups · Summit Campaign",
    subtitle: "Key visuals, stage backdrops & promotional suite",
    category: "Print & Campaigns",
    span: "col-span-12 sm:col-span-7",
    height: "h-[225px]",
    src: "/studio/republic-startups.jpg",
    pdf: null,
  },
  {
    id: "item-7",
    title: "Geebi · Brand & Visual Identity",
    subtitle: "Startup brand identity & digital visual system",
    category: "Brand Identity",
    span: "col-span-12 sm:col-span-5",
    height: "h-[225px]",
    src: "/studio/geebi-brand.jpg",
    pdf: "/studio/geebi-guidelines.pdf",
  },
  {
    id: "item-8",
    title: "High-Volume Print & Campaign Collateral",
    subtitle: "Editorial layouts, standees & automated InDesign production",
    category: "Print & Campaigns",
    span: "col-span-12",
    height: "h-[250px]",
    src: "/studio/campaign-spread.jpg",
    pdf: null,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// FRAME LOOP SLIDE
// Hard-cut stop-motion cycle — all frames preloaded on mount to avoid flicker.
// ─────────────────────────────────────────────────────────────────────────────
function FrameLoopSlide({ frames, interval = 550, alt = "Animated slide" }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Preload every frame image on mount
  useEffect(() => {
    frames.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [frames]);

  // Cycle at the requested interval
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % frames.length);
    }, interval);
    return () => clearInterval(id);
  }, [frames, interval]);

  return (
    <img
      src={frames[currentIndex]}
      alt={alt}
      className="w-full h-auto block select-none"
      draggable={false}
    />
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TOOLS POPOVER  (right action rail)
// ─────────────────────────────────────────────────────────────────────────────
function ToolsPopover({ tools, brief }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        title="Tools & Brief"
        className="w-11 h-11 rounded-full bg-white text-[#141417] shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow cursor-pointer"
      >
        <span className="font-bold text-[13px] leading-none tracking-tighter select-none">
          Ai
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 8 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.92, x: 8 }}
            transition={{ duration: 0.14 }}
            className="absolute right-full top-1/2 -translate-y-1/2 mr-3 w-[260px] bg-[#141417] border border-white/10 rounded-xl p-4 shadow-2xl text-white z-50"
          >
            {tools && tools.length > 0 && (
              <div className="mb-3">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400 block mb-2">
                  Tools
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {tools.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 bg-white/10 rounded-md text-[12px] font-medium text-zinc-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {brief && (
              <div className="border-t border-white/10 pt-3">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400 block mb-1.5">
                  Brief
                </span>
                <p className="text-[12.5px] text-zinc-300 leading-relaxed">{brief}</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// BEHANCE SHOWCASE MODAL
// Full Behance-style: wide white canvas, slides stacked from pixel 0,
// sticky dark header, floating right rail, Lenis-bypass wheel handling.
// ─────────────────────────────────────────────────────────────────────────────
function ShowcaseModal({ item, onClose }) {
  const [briefOpen, setBriefOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);
  const briefRef = useRef(null);

  const slideCount = item.slides ? item.slides.length : 0;

  // Lock body scroll + pause Lenis
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // Pause Lenis if it exposes a global handle
    const lenis = window.__lenis__;
    if (lenis && typeof lenis.stop === "function") lenis.stop();
    return () => {
      document.body.style.overflow = prev || "";
      if (lenis && typeof lenis.start === "function") lenis.start();
    };
  }, []);

  // Escape to close
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Close brief popover on outside click
  useEffect(() => {
    if (!briefOpen) return;
    const handler = (e) => {
      if (briefRef.current && !briefRef.current.contains(e.target)) setBriefOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [briefOpen]);

  const handleWheel = useCallback((e) => { e.stopPropagation(); }, []);

  const handleCopyPermalink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2000);
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      // data-lenis-prevent tells Lenis to hand wheel control back to native scroll
      data-lenis-prevent="true"
      onWheel={handleWheel}
      className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-[2px] overflow-y-auto overscroll-contain"
    >
      {/* ── STICKY HEADER ──────────────────────────────────────────── */}
      <div className="sticky top-0 z-[10001] bg-[#111113]/92 backdrop-blur-md border-b border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 pt-4 pb-3 flex items-center justify-between text-white">
          {/* Left: avatar + title + byline */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-full bg-[#3B5BFF] text-white font-bold flex items-center justify-center text-sm shrink-0 select-none">
              BB
            </div>
            <div className="min-w-0">
              <h3
                style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
                className="font-display font-bold text-[15px] text-white truncate leading-snug"
              >
                {item.title}
              </h3>
              <p className="text-[12px] text-zinc-400 font-normal leading-tight truncate">
                Bineet Barthwal &middot; Brand &amp; Visual Identity &middot; Available for work
              </p>
            </div>
          </div>

          {/* Right: circular close */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close showcase"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer transition-colors ml-4 shrink-0"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── WIDE WHITE PRESENTATION CANVAS ─────────────────────────── */}
      <div className="relative max-w-[1120px] w-full mx-auto mb-16 bg-white shadow-2xl overflow-hidden group/canvas mt-6 sm:mt-8">

        {/* Hover pills — top-left of canvas, Behance style */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2 opacity-0 group-hover/canvas:opacity-100 transition-opacity duration-200 pointer-events-none group-hover/canvas:pointer-events-auto">
          {/* Brief pill */}
          <div className="relative" ref={briefRef}>
            <button
              type="button"
              onClick={() => setBriefOpen((v) => !v)}
              className="px-3.5 py-1.5 rounded-full bg-black/65 hover:bg-black/80 backdrop-blur-md text-white text-[12.5px] font-medium flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
              Brief
            </button>
            <AnimatePresence>
              {briefOpen && item.brief && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.96 }}
                  transition={{ duration: 0.14 }}
                  className="absolute top-full left-0 mt-2 w-[300px] bg-[#141417]/96 backdrop-blur-sm border border-white/10 rounded-xl p-4 shadow-2xl text-white z-30"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400 block mb-2">
                    Project Brief
                  </span>
                  <p className="text-[13px] text-zinc-200 leading-relaxed">{item.brief}</p>
                  {item.tools && item.tools.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-white/10 flex flex-wrap gap-1.5">
                      {item.tools.map((t) => (
                        <span key={t} className="px-2 py-0.5 bg-white/10 rounded text-[11px] text-zinc-300 font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Permalink pill */}
          <button
            type="button"
            onClick={handleCopyPermalink}
            className="px-3.5 py-1.5 rounded-full bg-black/65 hover:bg-black/80 backdrop-blur-md text-white text-[12.5px] font-medium flex items-center gap-1.5 cursor-pointer transition-colors"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
            {copied ? "Copied!" : "Permalink"}
          </button>
        </div>

        {/* Seamless vertical slide stack — starts at pixel 0 (no padding/gap) */}
        <div className="flex flex-col gap-0">
          {item.slides && item.slides.map((slide, idx) => {
            if (typeof slide === "string") {
              return (
                <div key={idx} className="w-full leading-[0]">
                  <img
                    src={slide}
                    alt={`${item.title} — Artboard ${idx + 1}`}
                    className="w-full h-auto block select-none"
                    loading={idx < 2 ? "eager" : "lazy"}
                    draggable={false}
                  />
                </div>
              );
            }
            if (slide.type === "loop") {
              return (
                <div key={idx} className="w-full leading-[0]">
                  <FrameLoopSlide
                    frames={slide.frames}
                    interval={slide.interval ?? 550}
                    alt={`${item.title} — Regional motif loop`}
                  />
                </div>
              );
            }
            return null;
          })}

          {/* Fallback if no slides defined */}
          {(!item.slides || item.slides.length === 0) && (
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-auto block select-none"
              draggable={false}
            />
          )}
        </div>
      </div>

      {/* ── END-OF-SHOWCASE FOOTER ──────────────────────────────────── */}
      <div className="text-center pb-16 flex flex-col items-center gap-4 px-4">
        <span className="text-[11px] text-zinc-500 uppercase tracking-[0.12em] font-mono">
          End of showcase &middot; {slideCount} artboards
        </span>
        <button
          type="button"
          onClick={onClose}
          className="btn-secondary-pill !bg-white !text-[#141417] !px-6 !py-2 !text-[13px] font-medium"
        >
          Close Showcase &#x2715;
        </button>
      </div>

      {/* ── FLOATING RIGHT ACTION RAIL (lg+ only) ──────────────────── */}
      <div className="fixed right-5 top-1/2 -translate-y-1/2 z-[10000] hidden lg:flex flex-col items-center gap-4">
        {/* Hire / Message */}
        <a
          href="mailto:hello@bineet.in"
          title="Message"
          className="w-11 h-11 rounded-full bg-white text-[#141417] shadow-lg flex flex-col items-center justify-center hover:shadow-xl transition-shadow cursor-pointer gap-0.5"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <span className="text-[8px] font-semibold uppercase tracking-wide leading-none">Hire</span>
        </a>

        {/* Tools / Brief popover */}
        <ToolsPopover tools={item.tools} brief={item.brief} />

        {/* Share */}
        <button
          type="button"
          onClick={handleShare}
          title={shareCopied ? "Link copied!" : "Share"}
          className="w-11 h-11 rounded-full bg-white text-[#141417] shadow-lg flex flex-col items-center justify-center hover:shadow-xl transition-shadow cursor-pointer gap-0.5"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
          <span className="text-[8px] font-semibold uppercase tracking-wide leading-none">
            {shareCopied ? "Copied" : "Share"}
          </span>
        </button>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SINGLE IMAGE FULLSCREEN MODAL
// ─────────────────────────────────────────────────────────────────────────────
function FullscreenModal({ item, onClose }) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev || ""; };
  }, []);

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      onClick={onClose}
      data-lenis-prevent="true"
      onWheel={(e) => e.stopPropagation()}
      className="fixed inset-0 z-[9999] bg-black/92 backdrop-blur-sm flex flex-col items-center justify-center p-4 sm:p-8 cursor-zoom-out"
    >
      <div
        className="w-full max-w-5xl flex items-center justify-between pb-3 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
            {item.category}
          </span>
          <h3
            style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
            className="font-display font-bold text-[17px] text-white"
          >
            {item.title}
          </h3>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white text-[13px] font-medium transition-colors cursor-pointer rounded-md"
        >
          Close ✕
        </button>
      </div>

      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0 }}
        transition={{ duration: 0.18 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full max-h-[82vh] bg-[#141417] border border-white/15 flex items-center justify-center overflow-hidden cursor-default"
      >
        <img
          src={item.src}
          alt={item.title}
          className="w-full h-auto max-h-[82vh] object-contain"
        />
      </motion.div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function BrandBentoPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxItem, setLightboxItem] = useState(null);

  const filters = ["All", "Brand Identity", "Event Systems", "Print & Campaigns"];

  const filteredItems =
    activeFilter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const handleTileClick = (item) => {
    if (item.pdf) {
      window.open(item.pdf, "_blank", "noopener,noreferrer");
    } else {
      setLightboxItem(item);
    }
  };

  const closeModal = useCallback(() => setLightboxItem(null), []);

  const hasSlides = lightboxItem && lightboxItem.slides && lightboxItem.slides.length > 0;

  return (
    <main className="min-h-screen bg-white text-[#141417]">
      {/* ── 590px LOCKED CONTAINER ─────────────────────────────────── */}
      <div className="max-w-[590px] mx-auto px-6 pt-10">

        {/* Top Bar */}
        <div className="flex items-center justify-between mb-9">
          <Link className="btn-secondary-pill" href="/">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
            <span>Resume</span>
          </a>
        </div>

        {/* Header */}
        <h1
          style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
          className="font-display font-extrabold text-[38px] sm:text-[44px] text-[#141417] tracking-[-0.04em] leading-[1.02]"
        >
          Brand &amp; Visuals
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

        {/* Bento Grid */}
        <motion.div layout className="grid grid-cols-12 gap-2.5 mt-7">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const isPdf = Boolean(item.pdf);
              const hasShowcase = Boolean(item.slides && item.slides.length > 0);
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

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-4 flex flex-col justify-between">
                    {/* Top-Right Badge */}
                    <div className="flex justify-end">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white text-[#141417] text-[11px] font-semibold tracking-tight shadow-sm">
                        {isPdf ? (
                          <>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                              <polyline points="14 2 14 8 20 8" />
                            </svg>
                            <span>Open Brand PDF &#x2197;</span>
                          </>
                        ) : hasShowcase ? (
                          <>
                            <span>Full Showcase</span>
                            <span className="text-[12px]">&#x2193;</span>
                          </>
                        ) : (
                          <>
                            <span>Full View</span>
                            <span>&#x2922;</span>
                          </>
                        )}
                      </span>
                    </div>

                    {/* Bottom-Left Info */}
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

      {/* ── MODALS ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightboxItem && hasSlides && (
          <ShowcaseModal key="showcase" item={lightboxItem} onClose={closeModal} />
        )}
        {lightboxItem && !hasSlides && (
          <FullscreenModal key="fullscreen" item={lightboxItem} onClose={closeModal} />
        )}
      </AnimatePresence>

      {/* ── FOOTER ─────────────────────────────────────────────────── */}
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
            <a href="mailto:hello@bineet.in" className="hover:text-[#111113] transition-colors">
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
