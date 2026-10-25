"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function GlassFolder({
  variant = "product",
  title = "Product & UI/UX",
  description = "B2B SaaS workflows, mobile apps, and conversion web interfaces.",
  href = "#projects",
  cards = [],
}) {
  const isProduct = variant === "product";

  const sheetStyles = [
    {
      initial: { rotate: -6, x: -32, y: 14, scale: 0.94 },
      hover: { rotate: -10, x: -44, y: -4, scale: 0.97 },
      z: 1,
    },
    {
      initial: { rotate: 5, x: 30, y: 12, scale: 0.95 },
      hover: { rotate: 9, x: 42, y: -6, scale: 0.98 },
      z: 2,
    },
    {
      initial: { rotate: -1, x: 0, y: 4, scale: 1 },
      hover: { rotate: 0, x: 0, y: -12, scale: 1.03 },
      z: 3,
    },
  ];

  return (
    <Link className="block group select-none w-full" data-cursor="hand" href={href}>
      <motion.div
        initial="initial"
        whileHover="hover"
        className="relative w-full max-w-[300px] mx-auto pt-[56px]"
      >
        {/* LAYER 1: 3 Fanned Preview Sheets Behind the Folder Top */}
        <div className="absolute inset-x-0 top-0 h-[125px] flex justify-center items-start pointer-events-none z-10">
          {cards.slice(0, 3).map((src, i) => {
            const cfg = sheetStyles[i] || sheetStyles[0];
            return (
              <motion.div
                key={i}
                variants={{
                  initial: cfg.initial,
                  hover: cfg.hover,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                style={{ zIndex: cfg.z }}
                className="absolute top-1 w-[205px] h-[128px] rounded-[12px] p-[3px] bg-white border border-black/[0.08] shadow-[0_8px_24px_rgba(0,0,0,0.09)] overflow-hidden"
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-full rounded-[9px] object-cover object-top"
                />
              </motion.div>
            );
          })}
        </div>

        {/* LAYER 2: Clean Off-White Folder Card matching reference */}
        <div className="relative z-20 transition-transform duration-300 group-hover:translate-y-[2px]">
          {/* Top-Left Folder Tab Zone with 2 Squircle Chips */}
          <div className="relative flex items-end">
            <div className="flex items-center gap-2 px-3.5 pt-3 pb-1.5 bg-[#F5F5F7] rounded-t-[20px] border-t border-l border-r border-black/[0.04]">
              {isProduct ? (
                <>
                  <span className="w-[36px] h-[36px] rounded-[10px] bg-white shadow-[0_2px_5px_rgba(0,0,0,0.05)] border border-black/[0.04] flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" fill="#F24E1E"/>
                      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" fill="#FF7262"/>
                      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" fill="#1ABCFE"/>
                      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" fill="#0ACF83"/>
                      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" fill="#A259FF"/>
                    </svg>
                  </span>
                  <span className="w-[36px] h-[36px] rounded-[10px] bg-white shadow-[0_2px_5px_rgba(0,0,0,0.05)] border border-black/[0.04] flex items-center justify-center">
                    <span className="w-[22px] h-[22px] rounded-full bg-[#18181B] text-white flex items-center justify-center text-[11px] font-bold">
                      ✦
                    </span>
                  </span>
                </>
              ) : (
                <>
                  <span className="w-[36px] h-[36px] rounded-[10px] bg-white shadow-[0_2px_5px_rgba(0,0,0,0.05)] border border-black/[0.04] flex items-center justify-center">
                    <span className="w-[22px] h-[22px] rounded-[6px] bg-[#3B5BFF] text-white flex items-center justify-center text-[10px] font-bold tracking-tight font-sans-custom">
                      Ai
                    </span>
                  </span>
                  <span className="w-[36px] h-[36px] rounded-[10px] bg-white shadow-[0_2px_5px_rgba(0,0,0,0.05)] border border-black/[0.04] flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="3" width="7" height="7" rx="1.5" fill="#F59E0B"/>
                      <rect x="14" y="3" width="7" height="7" rx="1.5" fill="#3B5BFF"/>
                      <rect x="14" y="14" width="7" height="7" rx="1.5" fill="#10B981"/>
                      <rect x="3" y="14" width="7" height="7" rx="1.5" fill="#18181B"/>
                    </svg>
                  </span>
                </>
              )}
            </div>

            {/* Smooth Concave Fillet */}
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="-ml-[1px] mb-0">
              <path d="M0 0C0 9.94113 8.05887 18 18 18H0V0Z" fill="#F5F5F7" />
            </svg>
          </div>

          {/* Main Folder Front Body */}
          <div className="bg-[#F5F5F7] rounded-b-[22px] rounded-tr-[22px] px-5 pt-4 pb-5 border-b border-l border-r border-black/[0.04] shadow-[0_10px_28px_rgba(0,0,0,0.05)] text-left">
            <h3
              style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
              className="font-display font-bold text-[18px] text-[#141417] tracking-[-0.02em] leading-snug whitespace-nowrap"
            >
              {title}
            </h3>
            <p
              style={{ fontFamily: "var(--font-hanken), sans-serif" }}
              className="font-sans-custom text-[13.5px] text-[#6e6e77] mt-1.5 leading-[1.45] line-clamp-2 min-h-[39px]"
            >
              {description}
            </p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
