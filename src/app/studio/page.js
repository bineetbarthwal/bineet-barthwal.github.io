"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import EmailLink from "@/components/EmailLink";

// ─── GALLERY DATA ─────────────────────────────────────────────────────────────
// 11 projects. Bento rhythm: ISBACON(full) → SANDBOX+IEDC(half) →
// CUBE(full) → CampusTank+INCEPT(half) → AI Fest(full) →
// AI Convergence+Geebi(half) → Republic(full) → LogoFolio(full)
export const GALLERY_ITEMS = [
  {
    id: "isbacon-2026",
    title: "ISBACON 2026 · National Summit Identity",
    subtitle:
      "Complete brand identity, cultural motif system, print collateral and event signage",
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
    ],
    brief:
      "End-to-end visual identity system for the 18th Annual ISBACON 2026 National Conference, blending regional cultural motifs (Open Hand monument, Phulkari geometry, Golden Temple, wheat and state icons) into a modular grid across 40+ print, badge, and stage deliverables.",
    tools: ["Adobe Illustrator", "Adobe InDesign", "Adobe Photoshop"],
    pdf: null,
  },
  {
    id: "sandbox",
    title: "SANDBOX · Brand and Outdoor Campaign",
    subtitle:
      "Brand identity system, highway billboard campaign and outdoor launch kits",
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
      "Official brand guidelines, particle globe mark and institutional collateral",
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
      "Brand mark architecture, isometric grid system and incubation strategy",
    category: "Brand Identity",
    span: "col-span-12",
    src: "/studio/cube-brand.jpg",
    slides: [
      "/studio/cube-brand.jpg",
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
      "Key stage visual, pitch arena graphics and national promotional campaign",
    category: "Event Systems",
    span: "col-span-12 sm:col-span-6",
    src: "/designs/campustank.jpg",
    slides: ["/designs/campustank.jpg"],
    brief:
      "High-impact visual identity, keynote stage backdrop, and promotional campaign materials for Campus Tank flagship venture pitching summit.",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    pdf: null,
  },
  {
    id: "incept",
    title: "INCEPT · Brand Identity Guidelines",
    subtitle:
      "Logo architecture, typography system and visual identity standards",
    category: "Brand Identity",
    span: "col-span-12 sm:col-span-6",
    src: "/studio/incept-brand.jpg",
    slides: null,
    pdf: "/studio/incept-guidelines.pdf",
    brief:
      "Comprehensive logo architecture, typography rules, color specifications, and visual identity standards manual for the INCEPT incubation network.",
    tools: ["Adobe Illustrator", "Adobe InDesign"],
  },
  {
    id: "aifest",
    title: "AI Fest · National AI Student Summit",
    subtitle:
      "Complete event identity, stage visuals and national campaign collateral",
    category: "Event Systems",
    span: "col-span-12",
    src: "/designs/aifest.jpg",
    slides: [
      "/designs/aifest.jpg",
      "/designs/aifest2.jpg",
      "/designs/aifest3.jpg",
      "/designs/aifest4.jpg",
      "/designs/aifest5.jpg",
      "/designs/aifest6.jpg",
      "/designs/aifest7.jpg",
    ],
    brief:
      "End-to-end visual identity, keynote stage backdrops, digital campaigns, and large-format print production for AI Fest national student summit.",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign"],
    pdf: null,
  },
  {
    id: "ai-convergence",
    title: "AI Convergence 2026 · Summit Brand System",
    subtitle:
      "Pre-event identity system, official print collateral and digital campaign",
    category: "Print & Campaigns",
    span: "col-span-12 sm:col-span-6",
    src: "/designs/aiconvergence.jpg",
    slides: [
      "/designs/aiconvergence.jpg",
      "/designs/aiconvergence1.jpg",
      "/designs/aiconvergence2.jpg",
      "/designs/aiconvergence3.jpg",
    ],
    pdf: "/designs/India AI Convergence 2026 - Official Pre Event - India AI Impact Summit 2026.pdf",
    brief:
      "Official pre-event visual identity, digital campaign materials, and print collateral for the India AI Convergence 2026 national summit.",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign"],
  },
  {
    id: "geebi",
    title: "Geebi · Brand and Visual Identity",
    subtitle:
      "Startup brand identity and digital visual system",
    category: "Brand Identity",
    span: "col-span-12 sm:col-span-6",
    src: "/studio/geebi-brand.jpg",
    slides: null,
    pdf: "/studio/geebi-guidelines.pdf",
    brief:
      "Visual identity design, modern typographic system, and digital brand collateral for Geebi startup ecosystem.",
    tools: ["Adobe Illustrator", "Figma"],
  },
  {
    id: "republic-startups",
    title: "Republic For Startups · Summit Campaign",
    subtitle:
      "Key visuals, stage backdrops and high-volume print production suite",
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
  {
    id: "logo-folio",
    title: "Logo Folio · Selected Marks and Symbols",
    subtitle:
      "Curated brand marks across tech, education, finance and healthcare",
    category: "Brand Identity",
    span: "col-span-12",
    src: "/designs/logodesigns.png",
    slides: [
      "/designs/logodesigns.png",
      "/designs/cubelogo.svg",
      "/designs/sandboxlogo.svg",
      "/designs/iedclogo.svg",
      "/designs/AIconvergencelogo.svg",
      "/designs/aifestlogo.svg",
      "/designs/narilogo.svg",
    ],
    brief:
      "A curated collection of minimalist logos, wordmarks, and geometric emblems designed for tech startups, educational ventures, and commercial products.",
    tools: ["Adobe Illustrator", "Figma"],
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
// Layer A = Fixed UI (top bar, 52px right rail, bottom prev/next buttons, mobile floating bottom bar)
// Layer B = Native scrollable viewport with responsive unobstructed canvas
function ShowcaseModal({ item, allItems, onClose, onNavigate }) {
  const [shareCopied, setShareCopied] = useState(false);
  const [activePopover, setActivePopover] = useState(null); // 'info' | 'tools' | null

  // Reset active popover when switching projects
  useEffect(() => {
    setActivePopover(null);
  }, [item?.id]);

  const currentIndex = allItems.findIndex((it) => it.id === item.id);
  const prevItem = allItems[(currentIndex - 1 + allItems.length) % allItems.length];
  const nextItem = allItems[(currentIndex + 1) % allItems.length];

  const slideCount =
    item.slides && item.slides.length > 0
      ? item.slides.length
      : item.pdf
      ? 1
      : 1;

  const handleNavigateWithReset = (targetItem) => {
    setActivePopover(null);
    onNavigate(targetItem);
  };

  const handleCloseWithReset = () => {
    setActivePopover(null);
    onClose();
  };

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
      if (e.key === "Escape") handleCloseWithReset();
      if (e.key === "ArrowRight") handleNavigateWithReset(nextItem);
      if (e.key === "ArrowLeft") handleNavigateWithReset(prevItem);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [nextItem, prevItem]);

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
      <div className="fixed top-0 inset-x-0 z-30 h-14 px-4 sm:px-6 bg-[#0e0e11]/90 backdrop-blur-md border-b border-white/[0.07] flex items-center justify-between">
        <div className="flex items-center gap-2.5 min-w-0 pr-2">
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
          onClick={handleCloseWithReset}
          aria-label="Close showcase"
          className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xs cursor-pointer transition-colors shrink-0"
        >
          ✕
        </button>
      </div>

      {/* Right Floating Action Rail (Desktop & Tablet: hidden on mobile) */}
      <div className="fixed right-7 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-5">
        {/* Button 1: Info (Hover on desktop, Click/Tap toggle on tablet & mobile) */}
        <div className="relative group/info flex flex-col items-center gap-1.5">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActivePopover((prev) => (prev === "info" ? null : "info"));
            }}
            aria-label="Toggle project info"
            className={`w-[52px] h-[52px] rounded-full shadow-[0_6px_20px_rgba(0,0,0,0.35)] flex items-center justify-center transition-all duration-200 cursor-pointer ${
              activePopover === "info"
                ? "bg-[#3B5BFF] text-white scale-105"
                : "bg-white text-[#141417] group-hover/info:scale-105"
            }`}
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
          </button>
          <span className="text-[12px] font-medium text-zinc-300 tracking-tight">Info</span>

          {/* Info Popover (Desktop hover + Click/Tap activePopover) */}
          <div
            className={`absolute right-[68px] top-1/2 -translate-y-1/2 w-[310px] p-4 rounded-xl bg-[#18181B]/95 backdrop-blur-md border border-white/10 text-left shadow-2xl transition-all duration-200 z-50 text-white ${
              activePopover === "info"
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none group-hover/info:opacity-100 group-hover/info:pointer-events-auto"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-2 mb-1">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-[#3B5BFF] block">
                {item.category}
              </span>
              <button
                type="button"
                onClick={() => setActivePopover(null)}
                aria-label="Close info"
                className="w-5 h-5 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-[10px] cursor-pointer transition-colors shrink-0"
              >
                ✕
              </button>
            </div>
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
                  <span>Open PDF in full view ↗</span>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Button 2: Tools (Hover on desktop, Click/Tap toggle on tablet & mobile) */}
        <div className="relative group/tools flex flex-col items-center gap-1.5">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActivePopover((prev) => (prev === "tools" ? null : "tools"));
            }}
            aria-label="Toggle software and tools"
            className={`w-[52px] h-[52px] rounded-full shadow-[0_6px_20px_rgba(0,0,0,0.35)] flex items-center justify-center transition-all duration-200 cursor-pointer ${
              activePopover === "tools"
                ? "bg-[#3B5BFF] text-white scale-105"
                : "bg-white group-hover/tools:scale-105"
            }`}
          >
            <div className="w-7 h-7 rounded-[6px] bg-[#330000] text-[#FF9A00] font-bold text-[13px] flex items-center justify-center tracking-tight select-none">
              Ai
            </div>
          </button>
          <span className="text-[12px] font-medium text-zinc-300 tracking-tight">Tools</span>

          {/* Tools Popover (Desktop hover + Click/Tap activePopover) */}
          <div
            className={`absolute right-[68px] top-1/2 -translate-y-1/2 w-[240px] p-3.5 rounded-xl bg-[#18181B]/95 backdrop-blur-md border border-white/10 shadow-2xl transition-all duration-200 z-50 text-white ${
              activePopover === "tools"
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none group-hover/tools:opacity-100 group-hover/tools:pointer-events-auto"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400 block">
                Software &amp; Tools
              </span>
              <button
                type="button"
                onClick={() => setActivePopover(null)}
                aria-label="Close tools"
                className="w-5 h-5 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-[10px] cursor-pointer transition-colors shrink-0"
              >
                ✕
              </button>
            </div>
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
            aria-label="Share project"
            className="w-[52px] h-[52px] rounded-full bg-white hover:bg-zinc-100 text-[#141417] shadow-[0_6px_20px_rgba(0,0,0,0.35)] flex items-center justify-center transition-transform duration-200 hover:scale-105 cursor-pointer"
          >
            {shareCopied ? (
              <span className="text-[12px] font-bold text-[#22C55E]">✓</span>
            ) : (
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
            )}
          </button>
          <span className="text-[12px] font-medium text-zinc-300 tracking-tight">
            {shareCopied ? "Copied!" : "Share"}
          </span>
        </div>

        {/* Button 4: Next (Bottom of rail) */}
        <div className="flex flex-col items-center gap-1.5">
          <button
            type="button"
            onClick={() => handleNavigateWithReset(nextItem)}
            title="Next project"
            aria-label="Next project"
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

      {/* Prev Project Arrow (Fixed Bottom-Left Desktop & Tablet) */}
      <div className="fixed bottom-6 left-7 z-40 hidden md:flex flex-col items-center gap-1.5">
        <button
          type="button"
          onClick={() => handleNavigateWithReset(prevItem)}
          title="Previous project"
          aria-label="Previous project"
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

      {/* ── MOBILE BOTTOM FLOATING ACTION BAR (< 768px) ─────────────── */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 flex md:hidden items-center gap-2 px-3 py-2 rounded-full bg-[#18181B]/95 backdrop-blur-md border border-white/10 shadow-2xl">
        {/* Prev */}
        <button
          type="button"
          onClick={() => handleNavigateWithReset(prevItem)}
          aria-label="Previous project"
          title="Prev"
          className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center cursor-pointer transition-all shrink-0"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        {/* Info */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setActivePopover((prev) => (prev === "info" ? null : "info"));
          }}
          aria-label="Project info"
          className={`px-3 py-1.5 rounded-full text-[12px] font-medium transition-all active:scale-95 flex items-center gap-1 shrink-0 ${
            activePopover === "info" ? "bg-[#3B5BFF] text-white" : "bg-white/10 text-zinc-200"
          }`}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4M12 8h.01" />
          </svg>
          <span>Info</span>
        </button>

        {/* Tools */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setActivePopover((prev) => (prev === "tools" ? null : "tools"));
          }}
          aria-label="Software and tools"
          className={`px-3 py-1.5 rounded-full text-[12px] font-medium transition-all active:scale-95 flex items-center gap-1 shrink-0 ${
            activePopover === "tools" ? "bg-[#3B5BFF] text-white" : "bg-white/10 text-zinc-200"
          }`}
        >
          <span className="w-3.5 h-3.5 rounded-[3px] bg-[#330000] text-[#FF9A00] font-bold text-[9px] flex items-center justify-center">Ai</span>
          <span>Tools</span>
        </button>

        {/* Share */}
        <button
          type="button"
          onClick={handleShare}
          aria-label="Share project"
          title={shareCopied ? "Link copied!" : "Share"}
          className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center cursor-pointer transition-all shrink-0"
        >
          {shareCopied ? (
            <span className="text-[11px] font-bold text-[#22C55E]">✓</span>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
              <polyline points="16 6 12 2 8 6" />
              <line x1="12" y1="2" x2="12" y2="15" />
            </svg>
          )}
        </button>

        {/* Next */}
        <button
          type="button"
          onClick={() => handleNavigateWithReset(nextItem)}
          aria-label="Next project"
          title="Next"
          className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center cursor-pointer transition-all shrink-0"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Mobile Popover Sheet (< 768px) */}
      {activePopover && (
        <div
          className="fixed bottom-20 left-4 right-4 z-50 md:hidden p-4 rounded-2xl bg-[#18181B]/98 backdrop-blur-md border border-white/15 text-left shadow-2xl text-white max-h-[60vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
              {activePopover === "info" ? "Project Info" : "Software & Tools"}
            </span>
            <button
              type="button"
              onClick={() => setActivePopover(null)}
              aria-label="Close popover"
              className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xs cursor-pointer transition-colors"
            >
              ✕
            </button>
          </div>
          {activePopover === "info" && (
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-[#3B5BFF] block mb-1">
                {item.category}
              </span>
              <h4
                style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
                className="text-[16px] font-bold text-white leading-snug"
              >
                {item.title}
              </h4>
              {item.subtitle && <p className="text-[12.5px] text-zinc-400 mt-1">{item.subtitle}</p>}
              {item.brief && (
                <p className="text-[12.5px] text-zinc-300 mt-2.5 pt-2.5 border-t border-white/10 leading-relaxed">
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
                    <span>Open PDF in full view ↗</span>
                  </a>
                </div>
              )}
            </div>
          )}
          {activePopover === "tools" && (
            <div className="flex flex-wrap gap-2 pt-1">
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
                    className={`px-2.5 py-1 rounded-md text-[12px] font-medium border ${badgeStyle}`}
                  >
                    {t}
                  </span>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ── LAYER B: SCROLLABLE SLIDE VIEWPORT ─────────────────────── */}
      <div
        data-lenis-prevent="true"
        onWheel={(e) => e.stopPropagation()}
        onClick={() => {
          if (activePopover) {
            setActivePopover(null);
          } else {
            handleCloseWithReset();
          }
        }}
        className="absolute inset-0 overflow-y-auto overscroll-contain pt-20 pb-24 md:pb-16 px-3 sm:px-4"
      >
        {/* Presentation canvas (w-full md:max-w-[calc(100%-160px)] lg:max-w-[920px] mx-auto) */}
        <div
          className="w-full md:max-w-[calc(100%-160px)] lg:max-w-[920px] mx-auto bg-white rounded-[4px] shadow-[0_25px_70px_rgba(0,0,0,0.65)] overflow-hidden relative group/canvas select-none"
          onClick={(e) => {
            e.stopPropagation();
            setActivePopover(null);
          }}
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
            <div className="flex flex-col w-full bg-white">
              <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 bg-[#F4F4F6] border-b border-zinc-200">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="w-2 h-2 rounded-full bg-[#22C55E] shrink-0" />
                  <span className="text-[12px] font-medium text-zinc-700 truncate">Official Brand Guidelines</span>
                </div>
                <a
                  href={item.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#3B5BFF] hover:bg-[#2F4CE5] text-white text-[12px] font-medium shadow-sm transition-colors shrink-0"
                >
                  <span>Open PDF in full view ↗</span>
                </a>
              </div>
              <iframe
                src={`${item.pdf}#toolbar=0&navpanes=0&view=FitH`}
                title={item.title}
                className="w-full h-[70vh] sm:h-[82vh] border-0 bg-white block"
              />
              <div className="px-4 py-2.5 bg-zinc-50 border-t border-zinc-200 flex flex-wrap items-center justify-between gap-2 text-[11px] text-zinc-500">
                <span>iOS Safari user? If pages don&apos;t scroll, open full view.</span>
                <a
                  href={item.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3B5BFF] hover:underline font-medium inline-flex items-center gap-1 shrink-0"
                >
                  <span>Open PDF in full view ↗</span>
                </a>
              </div>
            </div>
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
            onClick={handleCloseWithReset}
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
      <div className="max-w-[590px] mx-auto px-4 sm:px-6 pt-10">
        {/* Top Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-9">
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

        {/* Bento Grid — 1→2→1→2 rhythm inside 590px; full-width=aspect-video, half-width=aspect-[4/3] */}
        <motion.div layout className="grid grid-cols-12 gap-3.5 mt-7">
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
                    draggable={false}
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
