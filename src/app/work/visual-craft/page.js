"use client";
import Link from "next/link";

export default function VisualCraftPage() {
  return (
    <main className="relative flex flex-col bg-white overflow-x-hidden w-full max-w-[100vw]">
      {/* Navigation */}
      <nav className="fixed top-8 left-0 right-0 z-50 w-full px-5 md:px-12">
        <div className="w-full max-w-7xl mx-auto">
          <Link
            href="/work"
            className="inline-flex items-center gap-1 text-sm md:text-base font-normal text-[#71717a] hover:text-black transition-colors"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <span>←</span>
            <span>Back to Work</span>
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-12 px-4 flex flex-col items-center">
        <div className="w-full max-w-7xl mx-auto">
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
      <section className="relative z-10 flex w-full flex-col items-center px-4 pb-24">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Campus Tank Branding */}
            <Link href="/work/visual-craft/campus-tank" className="block group">
              <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden relative">
                <div className="w-full h-full group-hover:opacity-90 transition-opacity">
                  {/* Replace with actual image */}
                </div>
              </div>
              <h3
                className="mt-4 text-lg font-normal text-gray-900"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Campus Tank Branding
              </h3>
            </Link>

            {/* Event Standees */}
            <Link href="/work/visual-craft/event-standees" className="block group">
              <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden relative">
                <div className="w-full h-full group-hover:opacity-90 transition-opacity">
                  {/* Replace with actual image */}
                </div>
              </div>
              <h3
                className="mt-4 text-lg font-normal text-gray-900"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Event Standees
              </h3>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
