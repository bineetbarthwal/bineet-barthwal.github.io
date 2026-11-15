"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// ─── GALLERY DATA ────────────────────────────────────────────────────────────
// Consolidated to 7 high-impact flagship projects.
// Bento rhythm: ISBACON(full) → SANDBOX+IEDC(half/half) → CUBE(full) → CampusTank+LogoFolio(half/half) → Republic(full)
export const GALLERY_ITEMS = [
  {
    id: "isbacon-2026",
    title: "ISBACON 2026 · National Summit Identity",
    subtitle:
      "Complete brand identity, cultural motif system, print collateral & event signage",
    category: "Brand Identity",
    span: "col-span-12",
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
      "/studio/isbacon-passes.jpg",
    ],
    brief:
      "End-to-end visual identity system for the 18th Annual ISBACON 2026 National Conference, blending regional cultural motifs (Open Hand monument, Phulkari geometry, Golden Temple, wheat and state icons) into a modular grid across 40+ print, badge, and stage deliverables.",
    tools: ["Adobe Illustrator", "Adobe InDesign", "Adobe Photoshop"],
    pdf: null,
  },
  {
    id: "sandbox",
    title: "SANDBOX · Brand & Outdoor Campaign",
    subtitle:
      "Brand identity system, highway billboard campaign & outdoor launch kits",
    category: "Brand Identity",
    span: "col-span-12 sm:col-span-6",
    src: "/designs/sandbox.png",
    slides: [
      "/designs/sandbox.png",
      "/designs/sandbox1.jpg",
      "/designs/sandbox2.jpg",
      "/designs/sandbox3.jpg",
      "/designs/sandbox4.jpg",
      "/designs/sandbox5.jpg",
      "/designs/sandbox6.jpg",
      "/designs/sandbox7.jpg",
      "/designs/sandbox8.jpg",
      "/designs/sandbox9.jpg",
    ],
    brief:
      "Visual identity, outdoor highway billboard campaign, pitch decks, and large-format environmental graphics designed for Sandbox startup accelerator.",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
    pdf: null,
  },
  {
    id: "iedc",
    title: "IEDC · Innovation Cell Brand Identity",
    subtitle:
      "Official brand guidelines, particle globe mark & institutional collateral",
    category: "Brand Identity",
    span: "col-span-12 sm:col-span-6",
    src: "/studio/iedc-identity.jpg",
    slides: [
      "/studio/iedc-identity.jpg",
      "/designs/iedc1.jpg",
      "/designs/iedc2.jpg",
      "/designs/iedc3.jpg",
      "/designs/iedc4.jpg",
      "/designs/iedc5.jpg",
      "/designs/iedc6.jpg",
      "/designs/iedc7.jpg",
      "/designs/iedc8.jpg",
    ],
    pdf: "/studio/iedc-guidelines.pdf",
    brief:
      "Official brand identity manual, core emblem geometric construction, and institutional collateral suite designed for the Innovation and Entrepreneurship Development Centre.",
    tools: ["Adobe Illustrator", "Adobe InDesign", "Adobe Photoshop"],
  },
  {
    id: "cube",
    title: "CUBE · Incubator Identity System",
    subtitle:
      "Brand mark architecture, isometric grid system & incubation strategy",
    category: "Brand Identity",
    span: "col-span-12",
    src: "/designs/cube3.jpg",
    slides: [
      "/designs/cube3.jpg",
      "/designs/cube1.jpg",
      "/designs/cube2.jpg",
    ],
    pdf: "/studio/cube-guidelines.pdf",
    brief:
      "Brand mark architecture, geometric isometric grid construction, and modular merchandise ecosystem for CUBE tech community.",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
  },
  {
    id: "campus-tank",
    title: "Campus Tank · National Startup Launchpad",
    subtitle:
      "Key stage visual, pitch arena graphics & national promotional campaign",
    category: "Event Systems",
    span: "col-span-12 sm:col-span-6",
    src: "/designs/campustank.jpg",
    slides: [
      "/designs/campustank.jpg",
    ],
    brief:
      "High-impact visual identity, keynote stage backdrop, and promotional campaign materials for Campus Tank flagship venture pitching summit.",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    pdf: null,
  },
  {
    id: "logo-folio",
    title: "Logo Folio · Selected Marks & Symbols",
    subtitle:
      "Curated brand marks across tech, education, finance & healthcare",
    category: "Brand Identity",
    span: "col-span-12 sm:col-span-6",
    src: "/designs/logodesigns.png",
    slides: [
      "/designs/logodesigns.png",
      "/designs/cube3.jpg",
      "/designs/sandbox1.jpg",
      "/designs/iedc1.jpg",
      "/designs/AIconvergencelogo.svg",
      "/designs/aifestlogo.svg",
    ],
    brief:
      "A curated collection of minimalist logos, wordmarks, and geometric emblems designed for tech startups, educational ventures, and commercial products.",
    tools: ["Adobe Illustrator", "Figma"],
    pdf: null,
  },
  {
    id: "republic-startups",
    title: "Republic For Startups · Summit Campaign",
    subtitle:
      "Key visuals, stage backdrops & high-volume print production suite",
    category: "Print & Campaigns",
    span: "col-span-12",
    src: "/studio/republic-startups.jpg",
    slides: [
      "/studio/republic-startups.jpg",
      "/studio/campaign-spread.jpg",
    ],
    brief:
      "Key visual identity, stage backdrop systems, and promotional collateral suite for the Republic For Startups national entrepreneurship summit.",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign"],
    pdf: null,
  },
];

// ─── FRAME LOOP SLIDE ────────────────────────────────────────────────────────
// Hard-cut stop-motion cycle with all frames preloaded on mount.
function FrameLoopSlide({ frames, interval = 550, alt = "Animated slide" }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    frames.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [frames]);

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

// ─── BEHANCE SHOWCASE MODAL ───────────────────────────────────────────────────
// Layer A = Fixed UI (top bar, 52px right rail, bottom prev/next buttons)
// Layer B = Native scrollable viewport with max-w-[920px] unobstructed canvas
function ShowcaseModal({ item, allItems, onClose, onNavigate }) {
  const [shareCopied, setShareCopied] = useState(false);

  const currentIndex = allItems.findIndex((it) => it.id === item.id);
  const prevItem = allItems[(currentIndex - 1 + allItems.length) % allItems.length];
  const nextItem = allItems[(currentIndex + 1) % allItems.length];

  const slideCount = item.slides ? item.slides.length : item.pdf ? 1 : 1;

  // Lock body scroll + pause Lenis
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const lenis = window.__lenis__;
    if (lenis && typeof lenis.stop === "function") lenis.stop();
    return () => {
      document.body.style.overflow = prev || "";
      if (lenis && typeof lenis.start === "function") lenis.start();
    };
  }, []);

  // Keyboard navigation: Escape to close, Left/Right arrows to cycle
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate(nextItem);
      if (e.key === "ArrowLeft") onNavigate(prevItem);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onNavigate, nextItem, prevItem]);

  const handleShare = (e) => {
    e.stopPropagation();
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
      className="fixed inset-0 z-[9999] bg-black/88 backdrop-blur-xs select-none"
    >
      {/* ── LAYER A: FIXED UI (NEVER SCROLLS) ──────────────────────── */}

      {/* Top Header Bar */}
      <div className="fixed top-0 inset-x-0 z-30 h-14 px-6 bg-[#0e0e11]/90 backdrop-blur-md border-b border-white/[0.07] flex items-center justify-between">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-7 h-7 rounded-full bg-[#3B5BFF] text-white text-[11px] font-bold flex items-center justify-center shrink-0 select-none">
            BB
          </div>
          <div className="min-w-0 flex items-baseline gap-2">
            <span
              style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
              className="text-[13.5px] font-semibold text-white truncate leading-none"
            >
              {item.title}
            </span>
            <span className="text-[12px] text-zinc-400 hidden sm:inline shrink-0">
              Bineet Barthwal · Brand &amp; Visual Identity · Available for work
            </span>
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close showcase"
          className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xs cursor-pointer transition-colors ml-4 shrink-0"
        >
          ✕
        </button>
      </div>

      {/* Right Floating Action Rail (52px circles, hover-triggered popovers) */}
      <div className="fixed right-7 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-5">
        {/* Button 1: Info (Hover Triggered) */}
        <div className="relative group/info flex flex-col items-center gap-1.5">
          <div
            className="w-[52px] h-[52px] rounded-full bg-white text-[#141417] shadow-[0_6px_20px_rgba(0,0,0,0.35)] flex items-center justify-center transition-transform duration-200 group-hover/info:scale-105 cursor-pointer"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
          </div>
          <span className="text-[12px] font-medium text-zinc-300 tracking-tight">Info</span>

          {/* Hover Popover */}
          <div
            className="absolute right-[68px] top-1/2 -translate-y-1/2 w-[310px] p-4 rounded-xl bg-[#18181B]/95 backdrop-blur-md border border-white/10 text-left shadow-2xl opacity-0 pointer-events-none group-hover/info:opacity-100 group-hover/info:pointer-events-auto transition-all duration-200 z-50 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400 block mb-1">
              {item.category}
            </span>
            <h4
              style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
              className="text-[15px] font-bold text-white leading-snug"
            >
              {item.title}
            </h4>
            {item.subtitle && (
              <p className="text-[12px] text-zinc-400 font-medium mt-0.5 leading-normal">
                {item.subtitle}
              </p>
            )}
            {item.brief && (
              <p className="text-[12.5px] text-zinc-300 mt-2.5 leading-relaxed pt-2.5 border-t border-white/10">
                {item.brief}
              </p>
            )}
            {item.pdf && (
              <div className="mt-3 pt-2.5 border-t border-white/10">
                <a
                  href={item.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#3B5BFF] hover:text-[#657eff] transition-colors"
                >
                  <span>Open original PDF</span>
                  <span>↗</span>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Button 2: Tools (Hover Triggered with authentic Adobe Illustrator Ai icon) */}
        <div className="relative group/tools flex flex-col items-center gap-1.5">
          <div
            className="w-[52px] h-[52px] rounded-full bg-white shadow-[0_6px_20px_rgba(0,0,0,0.35)] flex items-center justify-center transition-transform duration-200 group-hover/tools:scale-105 cursor-pointer"
          >
            <div className="w-7 h-7 rounded-[6px] bg-[#330000] text-[#FF9A00] font-bold text-[13px] flex items-center justify-center tracking-tight select-none">
              Ai
            </div>
          </div>
          <span className="text-[12px] font-medium text-zinc-300 tracking-tight">Tools</span>

          {/* Hover Popover */}
          <div
            className="absolute right-[68px] top-1/2 -translate-y-1/2 w-[240px] p-3.5 rounded-xl bg-[#18181B]/95 backdrop-blur-md border border-white/10 shadow-2xl opacity-0 pointer-events-none group-hover/tools:opacity-100 transition-all duration-200 z-50 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400 block mb-2">
              Software &amp; Tools
            </span>
            <div className="flex flex-wrap gap-1.5">
              {(item.tools || ["Adobe Illustrator", "Adobe Photoshop"]).map((t) => {
                let badgeStyle = "bg-white/10 text-zinc-200 border-white/10";
                if (t.includes("Illustrator"))
                  badgeStyle = "bg-[#330000] text-[#FF9A00] border-[#FF9A00]/25";
                else if (t.includes("Photoshop"))
                  badgeStyle = "bg-[#001E36] text-[#31A8FF] border-[#31A8FF]/25";
                else if (t.includes("InDesign"))
                  badgeStyle = "bg-[#49021F] text-[#FF3366] border-[#FF3366]/25";
                else if (t.includes("Figma"))
                  badgeStyle = "bg-[#1E1E1E] text-[#A259FF] border-[#A259FF]/25";
                return (
                  <span
                    key={t}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-medium border ${badgeStyle}`}
                  >
                    {t}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        {/* Button 3: Share (Click to copy) */}
        <div className="flex flex-col items-center gap-1.5">
          <button
            type="button"
            onClick={handleShare}
            title={shareCopied ? "Link copied!" : "Share"}
            className="w-[52px] h-[52px] rounded-full bg-white hover:bg-zinc-100 text-[#141417] shadow-[0_6px_20px_rgba(0,0,0,0.35)] flex items-center justify-center transition-transform duration-200 hover:scale-105 cursor-pointer"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
              <polyline points="16 6 12 2 8 6" />
              <line x1="12" y1="2" x2="12" y2="15" />
            </svg>
          </button>
          <span className="text-[12px] font-medium text-zinc-300 tracking-tight">
            {shareCopied ? "Copied!" : "Share"}
          </span>
        </div>

        {/* Button 4: Next (Bottom of rail) */}
        <div className="flex flex-col items-center gap-1.5">
          <button
            type="button"
            onClick={() => onNavigate(nextItem)}
            title="Next project"
            className="w-[52px] h-[52px] rounded-full bg-zinc-800/80 hover:bg-zinc-700/90 border border-white/10 text-white shadow-lg flex items-center justify-center transition-transform duration-200 hover:scale-105 cursor-pointer"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
          <span className="text-[12px] font-medium text-zinc-300 tracking-tight">Next</span>
        </div>
      </div>

      {/* Prev Project Arrow (Fixed Bottom-Left) */}
      <div className="fixed bottom-6 left-7 z-40 hidden md:flex flex-col items-center gap-1.5">
        <button
          type="button"
          onClick={() => onNavigate(prevItem)}
          title="Previous project"
          className="w-[52px] h-[52px] rounded-full bg-zinc-800/80 hover:bg-zinc-700/90 border border-white/10 text-white shadow-lg flex items-center justify-center transition-transform duration-200 hover:scale-105 cursor-pointer"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <span className="text-[12px] font-medium text-zinc-300 tracking-tight">Prev</span>
      </div>

      {/* ── LAYER B: SCROLLABLE SLIDE VIEWPORT ─────────────────────── */}
      <div
        data-lenis-prevent="true"
        onWheel={(e) => e.stopPropagation()}
        onClick={onClose}
        className="absolute inset-0 overflow-y-auto overscroll-contain pt-20 pb-16 px-4"
      >
        {/* Presentation canvas (max-w-[920px], no top-left pills, starts at pixel 0) */}
        <div
          className="max-w-[920px] w-full mx-auto bg-white rounded-[4px] shadow-[0_25px_70px_rgba(0,0,0,0.65)] overflow-hidden relative group/canvas select-none"
          onClick={(e) => e.stopPropagation()}
        >
          {item.slides && item.slides.length > 0 ? (
            <div className="flex flex-col gap-0">
              {item.slides.map((slide, idx) => {
                if (typeof slide === "string") {
                  return (
                    <div key={idx} className="w-full leading-[0]">
                      <img
                        src={slide}
                        alt={`${item.title} Artboard ${idx + 1}`}
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
                        alt={`${item.title} Motif loop`}
                      />
                    </div>
                  );
                }
                return null;
              })}
            </div>
          ) : item.pdf ? (
            <iframe
              src={`${item.pdf}#toolbar=0&navpanes=0&view=FitH`}
              title={item.title}
              className="w-full h-[82vh] border-0 bg-white block"
            />
          ) : (
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-auto block select-none"
              draggable={false}
            />
          )}
        </div>

        {/* End-of-showcase footer */}
        <div className="text-center mt-10 mb-4 flex flex-col items-center gap-4 px-4">
          <span className="text-[11px] text-zinc-500 uppercase tracking-[0.12em] font-mono">
            End of presentation · {slideCount} {slideCount === 1 ? "deliverable" : "artboards"}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="btn-secondary-pill !bg-white !text-[#141417] !px-6 !py-2 !text-[13px] font-medium"
          >
            Close Showcase &#x2715;
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// ─── MAIN PAGE ───────────────────────────────────────────────────────────────
export default function BrandBentoPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxItem, setLightboxItem] = useState(null);

  const filters = ["All", "Brand Identity", "Event Systems", "Print & Campaigns"];

  const filteredItems =
    activeFilter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  // Every tile opens the unified Behance showcase modal
  const handleTileClick = (item) => {
    setLightboxItem(item);
  };

  const closeModal = useCallback(() => setLightboxItem(null), []);
  const handleNavigate = useCallback((newItem) => setLightboxItem(newItem), []);

  return (
    <main className="min-h-screen bg-white text-[#141417]">
      {/* ── 590px LOCKED CONTAINER ─────────────────────────────────── */}
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

        {/* Header */}
        <h1
          style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
          className="font-display font-extrabold text-[38px] sm:text-[44px] text-[#141417] tracking-[-0.04em] leading-[1.02]"
        >
          Brand &amp; Visuals
        </h1>

        <p className="font-sans-custom font-normal text-[15px] text-[#52525B] mt-2.5 leading-[1.6]">
          Identity systems, national summit branding, and campaign collateral. Click any project to inspect the full presentation.
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

      </div>

      {/* ── 780px BENTO GRID ─────────────────────────────────────── */}
      <div className="max-w-[780px] mx-auto px-6">

        {/* Bento Grid — alternating 1→2→1→2 rhythm with aspect-video */}
        <motion.div layout className="grid grid-cols-12 gap-4 mt-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
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
                  className={`${item.span} aspect-video group relative rounded-none overflow-hidden bg-[#F4F4F6] border border-zinc-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.04)] cursor-pointer select-none`}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />

                  {/* Full-Tile Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-5 flex flex-col justify-between">
                    {/* Top-Right Badge */}
                    <div className="flex justify-end">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-[#141417] text-[11px] font-semibold tracking-tight shadow-sm">
                        {item.slides && item.slides.length > 0 ? (
                          <>
                            <span>Full Showcase</span>
                            <span className="text-[12px]">↓</span>
                          </>
                        ) : item.pdf ? (
                          <>
                            <span>Brand Guidelines PDF</span>
                            <span className="text-[12px]">↗</span>
                          </>
                        ) : (
                          <>
                            <span>Inspect Project</span>
                            <span>⤢</span>
                          </>
                        )}
                      </span>
                    </div>

                    {/* Bottom-Left Info */}
                    <div className="translate-y-1 group-hover:translate-y-0 transition-transform duration-200">
                      <span className="block text-[11px] font-semibold uppercase tracking-[0.08em] text-zinc-300">
                        {item.category}
                      </span>
                      <h2
                        style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
                        className="font-display font-bold text-[18px] sm:text-[20px] text-white leading-snug mt-0.5"
                      >
                        {item.title}
                      </h2>
                      {item.subtitle && (
                        <p className="text-[13px] text-zinc-300 mt-0.5 line-clamp-1">
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

      {/* ── UNIFIED SHOWCASE MODAL ──────────────────────────────────── */}
      <AnimatePresence>
        {lightboxItem && (
          <ShowcaseModal
            key="showcase"
            item={lightboxItem}
            allItems={filteredItems}
            onClose={closeModal}
            onNavigate={handleNavigate}
          />
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
