"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState("UX");

  return (
    <main className="relative flex flex-col bg-white overflow-x-hidden w-full max-w-[100vw]">
      <section className="pt-32 pb-12 px-5 md:px-12 flex flex-col items-center w-full">
        <div className="w-full max-w-6xl">
          
          {/* Top Bar: Standardized Container Alignment */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full mb-16 gap-6">
            
            {/* 1. Left: Back Button */}
            <Link href="/" className="inline-flex items-center gap-3 text-gray-600 hover:text-[#1C1C1C] transition-colors group w-[140px]">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
              </span>
              <span className="font-medium text-sm md:text-base">Back to Home</span>
            </Link>

            {/* 2. Center: Toggle Switch */}
            <div className="flex items-center justify-center">
              <div className="flex items-center rounded-[16px] border border-gray-300 bg-white/95 p-1">
                <button
                  onClick={() => setActiveTab("UX")}
                  className={`px-3 md:px-6 py-2 text-sm md:text-base font-normal rounded-full transition-colors ${activeTab === "UX"
                    ? "bg-black text-white"
                    : "bg-transparent text-[#71717a] hover:text-black"
                    }`}
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Product &amp; UX
                </button>
                <button
                  onClick={() => setActiveTab("Creative")}
                  className={`px-3 md:px-6 py-2 text-sm md:text-base font-normal rounded-full transition-colors ${activeTab === "Creative"
                    ? "bg-black text-white"
                    : "bg-transparent text-[#71717a] hover:text-black"
                    }`}
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Creative Design
                </button>
              </div>
            </div>
            
            {/* 3. Right: Spacer (Matches back button width to keep toggle perfectly centered) */}
            <div className="hidden md:block w-[140px]"></div>
          </div>

          {/* Page Title */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-sans)' }}>
              My Work
            </h1>
            <p
              className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base max-w-2xl"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              A collection of case studies and projects I've worked on.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative z-10 flex w-full flex-col items-center px-5 md:px-12 pb-24">
        <div className="w-full max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            {activeTab === "UX" ? (
              <>
                {/* Will Project */}
                <Link href="/will?from=work" className="block">
                  <article className="flex flex-col hover:opacity-90 transition-opacity">
                    <div className="relative mb-6 w-full aspect-video overflow-hidden rounded-2xl bg-[#F4F4F4]">
                      <img src="/images/will-thumbnail-1.jpg" alt="Will thumbnail" className="w-full h-full object-cover object-top" />
                    </div>
                    <h3
                      className="text-xl font-normal text-gray-900 md:text-2xl"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      Will
                    </h3>
                    <p
                      className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      How do you design an app connecting India's busiest users to its least literate workforce?
                    </p>
                  </article>
                </Link>

                {/* Fundbridge Project */}
                <article className="flex flex-col hover:opacity-90 transition-opacity">
                  <div className="relative mb-6 w-full aspect-video overflow-hidden rounded-2xl bg-[#F4F4F4]">
                    <img src="/images/fundbridge-thumbnail-1.png" alt="Fundbridge thumbnail" className="w-full h-full object-cover object-top" />
                  </div>
                  <h3
                    className="text-xl font-normal text-gray-900 md:text-2xl"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Fundbridge
                  </h3>
                  <p
                    className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    A unified platform connecting founders and VCs.
                  </p>
                </article>

                {/* MiH Interiors Project */}
                <Link href="/mih?from=work" className="block">
                  <article className="flex flex-col hover:opacity-90 transition-opacity">
                    <div className="relative mb-6 w-full aspect-video overflow-hidden rounded-2xl bg-[#F4F4F4]">
                      <Image
                        src="/images/mih-interiors.png"
                        alt="MIH Interiors Case Study"
                        width={800}
                        height={600}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <h3
                      className="text-xl font-normal text-gray-900 md:text-2xl"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      MiH Interiors
                    </h3>
                    <p
                      className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      Designing a website for a premium interior design studio that actually converts.
                    </p>
                  </article>
                </Link>

                {/* Rkade Project */}
                <article className="flex flex-col hover:opacity-90 transition-opacity">
                  <div className="relative mb-6 w-full aspect-video overflow-hidden rounded-2xl bg-[#F4F4F4]">
                    <img src="/images/rkade-thumbnail.png" alt="Rkade thumbnail" className="w-full h-full object-cover object-top" />
                  </div>
                  <h3
                    className="text-xl font-normal text-gray-900 md:text-2xl"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Rkade
                  </h3>
                  <p
                    className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    A campus-focused platform where students can discover and participate in college events, hackathons, fests, and gaming/community activities.
                  </p>
                </article>
              </>
            ) : (
              <>
                {/* Visual Craft */}
                <Link href="/work/visual-craft" className="block">
                  <article className="flex flex-col hover:opacity-90 transition-opacity">
                    <div className="relative mb-6 w-full aspect-video overflow-hidden rounded-2xl bg-[#F4F4F4]">
                      {/* Placeholder image */}
                    </div>
                    <h3
                      className="text-xl font-normal text-gray-900 md:text-2xl"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      Visual Craft
                    </h3>
                    <p
                      className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      Editorial layouts, brand identity, and marketing design.
                    </p>
                  </article>
                </Link>

                {/* Logo Design */}
                <article className="flex flex-col hover:opacity-90 transition-opacity">
                  <div className="relative mb-6 w-full aspect-video overflow-hidden rounded-2xl bg-[#F4F4F4]">
                    {/* Placeholder image */}
                  </div>
                  <h3
                    className="text-xl font-normal text-gray-900 md:text-2xl"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Logo Design
                  </h3>
                  <p
                    className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Crafting memorable brand identities through thoughtful logo design.
                  </p>
                </article>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
