"use client";
import Link from "next/link";

export default function AIConvergencePage() {
  const images = [
    '/designs/aiconvergence001.jpg',
    '/designs/aiconvergence002.jpg',
  ];

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
        <div className="w-full max-w-6xl">
          <h1
            className="text-3xl font-normal text-gray-900 md:text-4xl lg:text-5xl"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            AI Convergence Branding
          </h1>
          <p
            className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base max-w-2xl"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Brand identity and marketing design for AI Convergence.
          </p>
        </div>
      </section>

      {/* Canvas Wrapper Showcase */}
      <section className="flex flex-col items-center px-5 md:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-6xl mt-12">
          {images.map((src, index) => (
            <div
              key={index}
              className="aspect-video bg-[#F9F9F9] rounded-2xl overflow-hidden flex items-center justify-center p-8 md:p-12"
            >
              <img
                src={src}
                alt={`AI Convergence branding asset ${index + 1}`}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
