"use client";
import Link from "next/link";
import Image from "next/image";

export default function WorkPage() {
  return (
    <main className="relative flex flex-col bg-white overflow-x-hidden w-full max-w-[100vw]">
      {/* Navigation */}
      <nav className="fixed top-8 left-1/2 z-50 -translate-x-1/2 w-full max-w-[95vw] mx-auto overflow-x-auto scrollbar-hide md:max-w-fit">
        <div className="flex items-center gap-2 md:gap-0 mx-auto rounded-[16px] border border-gray-300 bg-white/95 p-1 shadow-sm backdrop-blur-md relative w-max md:w-auto">
          <Link
            href="/"
            className="relative px-3 md:px-6 py-2 text-sm md:text-base font-normal rounded-full text-[#71717a] hover:text-black transition-colors"
          >
            Home
          </Link>
          <span
            className="relative px-3 md:px-6 py-2 text-sm md:text-base font-normal rounded-full bg-black text-white"
          >
            Work
          </span>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-12 px-5 md:px-12 flex flex-col items-center">
        <div className="w-full max-w-6xl">
          <h1
            className="text-3xl font-normal text-gray-900 md:text-4xl lg:text-5xl"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            My Work
          </h1>
          <p
            className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base max-w-2xl"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            A collection of case studies and projects I've worked on.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative z-10 flex w-full flex-col items-center px-5 md:px-12 pb-24">
        <div className="w-full max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Will Project */}
            <Link href="/will" className="block">
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
            <Link href="/mih" className="block">
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
          </div>
        </div>
      </section>
    </main>
  );
}
