"use client";
import Link from "next/link";

export default function VisualCraftPage() {
  return (
    <main className="relative flex flex-col bg-white overflow-x-hidden w-full max-w-[100vw]">
      {/* Navigation */}
      <nav className="fixed top-8 left-0 right-0 z-50 w-full px-5 md:px-12">
        <div className="w-full max-w-6xl mx-auto">
          <Link
            href="/work?tab=Creative"
            className="inline-flex items-center gap-3 text-gray-600 hover:text-[#1C1C1C] transition-colors group w-fit"
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </span>
            <span className="font-medium text-sm md:text-base">Back to Work</span>
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-12 px-5 md:px-12 flex flex-col items-center">
        <div className="w-full max-w-6xl">
          <h1
            className="text-3xl font-normal text-gray-900 md:text-4xl lg:text-5xl"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Visual Craft
          </h1>
          <p
            className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base max-w-2xl"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Editorial layouts, brand identity, and marketing design.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative z-10 flex w-full flex-col items-center px-5 md:px-12 pb-24">
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Campus Tank */}
            <Link href="/work/visual-craft/campus-tank" className="block group">
              <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden relative">
                <div className="w-full h-full group-hover:opacity-90 transition-opacity">
                  <img src="/images/campustank.jpg" alt="Campus Tank" className="w-full h-full object-cover" />
                </div>
              </div>
              <h3
                className="mt-4 text-lg font-normal text-gray-900"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Campus Tank
              </h3>
            </Link>

            {/* AI Convergence */}
            <Link href="/work/visual-craft/ai-convergence" className="block group">
              <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden relative">
                <div className="w-full h-full group-hover:opacity-90 transition-opacity">
                  <img src="/images/aiconvergence.jpg" alt="AI Convergence" className="w-full h-full object-cover" />
                </div>
              </div>
              <h3
                className="mt-4 text-lg font-normal text-gray-900"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                AI Convergence
              </h3>
            </Link>

            {/* AI Fest */}
            <Link href="/work/visual-craft/ai-fest" className="block group">
              <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden relative">
                <div className="w-full h-full group-hover:opacity-90 transition-opacity">
                  <img src="/images/aifest.jpg" alt="AI Fest" className="w-full h-full object-cover" />
                </div>
              </div>
              <h3
                className="mt-4 text-lg font-normal text-gray-900"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                AI Fest
              </h3>
            </Link>

            {/* Hack With Uttarpradesh */}
            <Link href="/work/visual-craft/hack-with-uttarpradesh" className="block group">
              <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden relative">
                <div className="w-full h-full group-hover:opacity-90 transition-opacity">
                  <img src="/images/havkwithup.jpg" alt="Hack With Uttarpradesh" className="w-full h-full object-cover" />
                </div>
              </div>
              <h3
                className="mt-4 text-lg font-normal text-gray-900"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Hack With Uttarpradesh
              </h3>
            </Link>

            {/* Sandbox */}
            <Link href="/work/visual-craft/sandbox" className="block group">
              <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden relative">
                <div className="w-full h-full group-hover:opacity-90 transition-opacity">
                  <img src="/images/sandbox.png" alt="Sandbox" className="w-full h-full object-cover" />
                </div>
              </div>
              <h3
                className="mt-4 text-lg font-normal text-gray-900"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Sandbox
              </h3>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
