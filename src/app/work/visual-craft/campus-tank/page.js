"use client";
import Link from "next/link";

export default function CampusTankPage() {
  return (
    <main className="relative flex flex-col bg-white overflow-x-hidden w-full max-w-[100vw]">
      {/* Navigation */}
      <nav className="fixed top-8 left-0 right-0 z-50 w-full px-5 md:px-12">
        <div className="w-full max-w-6xl mx-auto">
          <Link
            href="/work/visual-craft"
            className="inline-flex items-center gap-3 text-gray-600 hover:text-[#1C1C1C] transition-colors group w-fit"
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </span>
            <span className="font-medium text-sm md:text-base">Back to Visual Craft</span>
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-4 px-5 md:px-12 flex flex-col items-center">
        <div className="w-full max-w-6xl mx-auto">
          <h1
            className="text-3xl font-normal text-gray-900 md:text-4xl lg:text-5xl"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Campus Tank Branding
          </h1>
        </div>
      </section>

      {/* Mockup Stack */}
      <section className="flex flex-col items-center px-5 md:px-12 pb-24">
        <div className="flex flex-col gap-12 w-full max-w-6xl mx-auto mt-12">
          {/* Mockup 1 — Replace with 1920x1080 image */}
          <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
            {/* <img src="/images/campus-tank-1.webp" alt="Campus Tank mockup 1" className="w-full h-full object-cover" /> */}
          </div>

          {/* Mockup 2 — Replace with 1920x1080 image */}
          <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
            {/* <img src="/images/campus-tank-2.webp" alt="Campus Tank mockup 2" className="w-full h-full object-cover" /> */}
          </div>

          {/* Mockup 3 — Replace with 1920x1080 image */}
          <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
            {/* <img src="/images/campus-tank-3.webp" alt="Campus Tank mockup 3" className="w-full h-full object-cover" /> */}
          </div>
        </div>
      </section>
    </main>
  );
}
