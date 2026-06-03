"use client";
import Link from "next/link";

export default function VisualCraftPage() {
  return (
    <main className="relative flex flex-col bg-white overflow-x-hidden w-full max-w-[100vw]">
      {/* Navigation */}
      <nav className="fixed top-8 left-0 right-0 z-50 w-full px-5 md:px-12">
        <div className="w-full max-w-6xl mx-auto">
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

      {/* Masonry Gallery */}
      <section className="relative z-10 flex w-full flex-col items-center px-5 md:px-12 pb-24">
        <div className="w-full max-w-6xl">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {/* Image 1 — Replace src with your .webp file */}
            <div className="break-inside-avoid">
              <img
                src=""
                alt="Visual Craft work 1"
                className="w-full rounded-2xl bg-[#F4F4F4] object-cover"
                style={{ minHeight: '200px' }}
              />
            </div>

            {/* Image 2 — Replace src with your .webp file */}
            <div className="break-inside-avoid">
              <img
                src=""
                alt="Visual Craft work 2"
                className="w-full rounded-2xl bg-[#F4F4F4] object-cover"
                style={{ minHeight: '260px' }}
              />
            </div>

            {/* Image 3 — Replace src with your .webp file */}
            <div className="break-inside-avoid">
              <img
                src=""
                alt="Visual Craft work 3"
                className="w-full rounded-2xl bg-[#F4F4F4] object-cover"
                style={{ minHeight: '220px' }}
              />
            </div>

            {/* Image 4 — Replace src with your .webp file */}
            <div className="break-inside-avoid">
              <img
                src=""
                alt="Visual Craft work 4"
                className="w-full rounded-2xl bg-[#F4F4F4] object-cover"
                style={{ minHeight: '240px' }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
