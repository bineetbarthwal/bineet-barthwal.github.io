"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import EmailLink from "@/components/EmailLink";

export default function WillCaseStudy() {
  const [zoomImage, setZoomImage] = useState(null);

  const closeZoom = useCallback(() => setZoomImage(null), []);

  useEffect(() => {
    if (!zoomImage) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeZoom();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [zoomImage, closeZoom]);

  return (
    <main className="min-h-screen bg-white text-[#141417]">
      {/* ── 590px LOCKED CONTAINER ─────────────────────────────────── */}
      <article className="max-w-[590px] mx-auto px-6 pt-10 pb-20">
        {/* Top Navigation Bar: matches /studio and /work 1:1 */}
        <div className="flex items-center justify-between mb-9">
          <Link className="btn-secondary-pill" href="/work">
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
            <span>Product Design</span>
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

        {/* Case Study Header */}
        <header className="mt-8 mb-6">
          <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#3B5BFF] block mb-2">
            UX Case Study · Mobile App
          </span>
          <h1
            style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
            className="font-display font-extrabold text-[32px] sm:text-[38px] text-[#141417] tracking-[-0.035em] leading-[1.08]"
          >
            Will: Blue-Collar Service Marketplace
          </h1>
          <p className="font-sans-custom font-normal text-[17px] text-[#52525B] mt-3 leading-[1.5] tracking-[-0.015em]">
            How do you design an app connecting India&apos;s busiest users to its least literate workforce?
          </p>
        </header>

        {/* Hero Image Framing */}
        <div
          onClick={() =>
            setZoomImage({
              src: "/images/will-image-1.png",
              alt: "WILL Mobile App Mockup Overview",
            })
          }
          className="w-full border border-zinc-200/90 rounded-[4px] overflow-hidden bg-[#F8F8F9] my-6 cursor-zoom-in relative group"
        >
          <img
            src="/images/will-image-1.png"
            alt="WILL Mobile App Mockup Overview"
            draggable={false}
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
          />
          <div className="absolute bottom-2.5 right-2.5 px-2 py-1 bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Click to zoom
          </div>
        </div>

        {/* Project Meta Grid */}
        <div className="grid grid-cols-3 gap-3 p-4 my-8 bg-[#F8F8F9] border border-zinc-200/80 rounded-[4px] text-[13px]">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#71717A] block">
              Timeline
            </span>
            <span className="font-medium text-[#141417] mt-0.5 block">2 Weeks</span>
          </div>
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#71717A] block">
              Role
            </span>
            <span className="font-medium text-[#141417] mt-0.5 block">Product &amp; UX</span>
          </div>
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#71717A] block">
              Deliverables
            </span>
            <span className="font-medium text-[#141417] mt-0.5 block">IA, Flows, Prototype</span>
          </div>
        </div>

        {/* Section: What is WILL? */}
        <section className="my-10">
          <div className="flex items-center justify-between mb-4">
            <h2
              style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
              className="font-display font-bold text-[22px] text-[#141417]"
            >
              What is WILL?
            </h2>
            <a
              href="https://www.figma.com/proto/lfwa1QNC1O9rpavVkhf7vk/Will----Define?node-id=188-1005&p=f&viewport=-24%2C-434%2C0.1&t=nomB2KN7WcgZfLoY-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=216%3A669&page-id=134%3A1295"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-pill !py-1 !px-3 !text-[12px]"
            >
              <span>Figma Prototype ↗</span>
            </a>
          </div>

          <div className="space-y-4 text-[15px] text-[#52525B] leading-[1.65]">
            <p>
              WILL is a two-sided service marketplace connecting urban Indian professionals with daily wage workers like masonry workers and labourers.
            </p>
            <p>
              The platform required two separate apps designed simultaneously: one for the customer booking a service, one for the worker receiving the job.
            </p>
            <p>
              The challenge wasn&apos;t just designing an app. It was designing trust: for a customer who has never let a stranger into his home, and a worker who has been underpaid his entire life.
            </p>
          </div>
        </section>

        {/* Section: The Problem */}
        <section className="my-10">
          <h2
            style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
            className="font-display font-bold text-[22px] text-[#141417] mb-3"
          >
            The Problem
          </h2>
          <p className="text-[15px] text-[#52525B] leading-[1.65] mb-5">
            Every morning, skilled workers in Indian cities walk to a chowk and wait. They wait hoping someone has a job for them. Meanwhile, across the city, a software engineer discovers his roof has cracks and is leaking. He searches online, calls numbers off walls. After three days of no progress, he takes a leave from work, and goes to the same chowk to find someone who can fix it.
          </p>

          <div
            onClick={() =>
              setZoomImage({
                src: "/images/chowk.png",
                alt: "The Chowk: Daily Wage Labour Market",
              })
            }
            className="w-full border border-zinc-200/90 rounded-[4px] overflow-hidden bg-[#F8F8F9] my-4 cursor-zoom-in relative group"
          >
            <img
              src="/images/chowk.png"
              alt="The Chowk: Daily Wage Labour Market"
              draggable={false}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
            />
            <div className="absolute bottom-2.5 right-2.5 px-2 py-1 bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Click to zoom
            </div>
          </div>
        </section>

        {/* Section: Problem Statement & Personas */}
        <section className="my-10">
          <h2
            style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
            className="font-display font-bold text-[22px] text-[#141417] mb-4"
          >
            Problem Statement &amp; User Personas
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
            <div className="p-4 bg-[#F8F8F9] border border-zinc-200/80 rounded-[4px]">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#3B5BFF]">
                Customer Profile
              </span>
              <h3 className="font-display font-bold text-[16px] text-[#141417] mt-1 mb-1.5">
                Sanjay Mehta (29)
              </h3>
              <p className="text-[13.5px] text-[#52525B] leading-relaxed">
                Software engineer in Bangalore. Needs immediate repairs without disruptions or unverified visitors in his home.
              </p>
            </div>

            <div className="p-4 bg-[#F8F8F9] border border-zinc-200/80 rounded-[4px]">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#3B5BFF]">
                Worker Profile
              </span>
              <h3 className="font-display font-bold text-[16px] text-[#141417] mt-1 mb-1.5">
                Vinod Kumar (34)
              </h3>
              <p className="text-[13.5px] text-[#52525B] leading-relaxed">
                Skilled electrician in Mumbai. Relies on daily chowk stands; frequently subjected to arbitrary payment cuts and no-shows.
              </p>
            </div>
          </div>

          {/* How Might We */}
          <div className="p-5 bg-[#F8F8F9] border border-zinc-200/80 rounded-[4px]">
            <h3 className="font-display font-bold text-[15px] text-[#141417] mb-3">
              How Might We:
            </h3>
            <ul className="space-y-2 text-[14px] text-[#52525B] leading-relaxed list-disc pl-5">
              <li>Help Sanjay trust a worker he has never met before letting them inside his home?</li>
              <li>Ensure Vinod gets paid exactly what was agreed: every single time?</li>
              <li>Make the booking interface functional for workers who cannot read English?</li>
              <li>Reduce the risk of last-minute cancellations on both sides?</li>
              <li>Design two distinct user flows that seamlessly converge into one trustworthy transaction?</li>
            </ul>
          </div>
        </section>

        {/* Section: Information Architecture */}
        <section className="my-10">
          <h2
            style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
            className="font-display font-bold text-[22px] text-[#141417] mb-3"
          >
            Information Architecture
          </h2>
          <p className="text-[15px] text-[#52525B] leading-[1.65] mb-4">
            WILL required two synchronized architectures: one for the customer and one for the worker. Designing one without the other would break the transaction.
          </p>

          <div
            data-lenis-prevent="true"
            className="w-full bg-[#111113] text-zinc-300 p-5 rounded-[4px] border border-zinc-800 overflow-x-auto overflow-y-auto max-h-[380px] text-[12.5px] leading-relaxed font-mono whitespace-pre"
          >
{`WILL (Customer App)
├── 1. Onboarding (OTP Verification, Role Selection)
├── 2. Home (Location, Search, Active Booking, Trust Banner)
├── 3. Service Detail (Pricing, Ratings, Process Diagram)
├── 4. Booking Flow
│   ├── Task Description (Photos, Voice Note, Worker Count)
│   ├── Timing & Location (Hourly/Daily, Duration Slider)
│   ├── ₹20 Booking Fee (100% Refundable Guarantee)
│   └── Searching State (30-min Proximity Matcher)
├── 5. Active Booking
│   ├── Worker Assigned (Verified Profile, Call/Message)
│   ├── Track Status (Arrival OTP Gate)
│   └── Completion & Payment (Completion OTP Gate)
└── 6. Booking Summary & Rating

WILL (Worker App)
├── 1. Onboarding (Document Upload, Skill Selection)
├── 2. Home / होम (Online Toggle, Incoming Job Alert)
├── 3. Job Flow
│   ├── Job Detail (Address, Expected Pay, Voice Direction)
│   ├── Arrival Confirmation (Arrival OTP Input)
│   └── Job Completion (Completion OTP Verification)
└── 4. Transactions / पैसा हिसाब (Daily Earnings & Settlement)`}
          </div>
        </section>

        {/* Section: Key Decisions */}
        <section className="my-10">
          <h2
            style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
            className="font-display font-bold text-[24px] text-[#141417] mb-2"
          >
            Key Design Decisions
          </h2>
          <p className="text-[15px] text-[#52525B] leading-[1.65] mb-6">
            Six architectural trade-offs that resolved the core trust deficit between customers and tradespeople:
          </p>

          <div className="space-y-8">
            {/* Decision 01 */}
            <div className="border border-zinc-200/80 rounded-[4px] p-4 bg-[#FFFFFF]">
              <div
                onClick={() =>
                  setZoomImage({
                    src: "/images/decision-1.png",
                    alt: "Decision 01: Two Separate Apps",
                  })
                }
                className="w-full border border-zinc-200/80 rounded-[4px] overflow-hidden bg-[#F8F8F9] mb-4 cursor-zoom-in relative group"
              >
                <img
                  src="/images/decision-1.png"
                  alt="Decision 01: Two Separate Apps"
                  draggable={false}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </div>
              <span className="text-[11.5px] font-bold text-[#3B5BFF] uppercase tracking-wider">
                Decision 01
              </span>
              <h3
                style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
                className="font-display font-bold text-[17px] text-[#141417] mt-0.5 mb-1.5"
              >
                Two Separate Dedicated Applications
              </h3>
              <p className="text-[14px] text-[#52525B] leading-relaxed">
                <strong className="text-[#141417]">Decision:</strong> Build separate customer and worker apps instead of a unified role switcher.
                <br />
                <strong className="text-[#141417]">Why:</strong> Eliminates cognitive overload and allows localized language, voice triggers, and distinct interaction paradigms suited for low-literacy tradespeople.
              </p>
            </div>

            {/* Decision 02 */}
            <div className="border border-zinc-200/80 rounded-[4px] p-4 bg-[#FFFFFF]">
              <div
                onClick={() =>
                  setZoomImage({
                    src: "/images/decision-2.png",
                    alt: "Decision 02: Hindi and Voice Navigation",
                  })
                }
                className="w-full border border-zinc-200/80 rounded-[4px] overflow-hidden bg-[#F8F8F9] mb-4 cursor-zoom-in relative group"
              >
                <img
                  src="/images/decision-2.png"
                  alt="Decision 02: Hindi and Voice Navigation"
                  draggable={false}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </div>
              <span className="text-[11.5px] font-bold text-[#3B5BFF] uppercase tracking-wider">
                Decision 02
              </span>
              <h3
                style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
                className="font-display font-bold text-[17px] text-[#141417] mt-0.5 mb-1.5"
              >
                Hindi Defaults &amp; Voice Guidance
              </h3>
              <p className="text-[14px] text-[#52525B] leading-relaxed">
                <strong className="text-[#141417]">Decision:</strong> Worker app defaults to Hindi audio readouts for incoming requests and task confirmations.
                <br />
                <strong className="text-[#141417]">Why:</strong> Text-heavy interfaces fail with non-literate workers. Audio prompts and bold iconography allow independent navigation without third-party assistance.
              </p>
            </div>

            {/* Decision 03 */}
            <div className="border border-zinc-200/80 rounded-[4px] p-4 bg-[#FFFFFF]">
              <div
                onClick={() =>
                  setZoomImage({
                    src: "/images/decision-3.png",
                    alt: "Decision 03: Refundable Booking Fee",
                  })
                }
                className="w-full border border-zinc-200/80 rounded-[4px] overflow-hidden bg-[#F8F8F9] mb-4 cursor-zoom-in relative group"
              >
                <img
                  src="/images/decision-3.png"
                  alt="Decision 03: Refundable Booking Fee"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </div>
              <span className="text-[11.5px] font-bold text-[#3B5BFF] uppercase tracking-wider">
                Decision 03
              </span>
              <h3
                style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
                className="font-display font-bold text-[17px] text-[#141417] mt-0.5 mb-1.5"
              >
                Refundable ₹20 Commitment Fee
              </h3>
              <p className="text-[14px] text-[#52525B] leading-relaxed">
                <strong className="text-[#141417]">Decision:</strong> Charge a nominal, 100% refundable booking fee at request submission.
                <br />
                <strong className="text-[#141417]">Why:</strong> Prevents casual cancellations that waste a worker&apos;s travel costs, while the full-refund badge reassures the homeowner.
              </p>
            </div>

            {/* Decision 04 */}
            <div className="border border-zinc-200/80 rounded-[4px] p-4 bg-[#FFFFFF]">
              <div
                onClick={() =>
                  setZoomImage({
                    src: "/images/decision-4.png",
                    alt: "Decision 04: Dual OTP Verification",
                  })
                }
                className="w-full border border-zinc-200/80 rounded-[4px] overflow-hidden bg-[#F8F8F9] mb-4 cursor-zoom-in relative group"
              >
                <img
                  src="/images/decision-4.png"
                  alt="Decision 04: Dual OTP Verification"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </div>
              <span className="text-[11.5px] font-bold text-[#3B5BFF] uppercase tracking-wider">
                Decision 04
              </span>
              <h3
                style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
                className="font-display font-bold text-[17px] text-[#141417] mt-0.5 mb-1.5"
              >
                Dual OTP Verification Architecture
              </h3>
              <p className="text-[14px] text-[#52525B] leading-relaxed">
                <strong className="text-[#141417]">Decision:</strong> Require an Arrival OTP before home entry and a Completion OTP to release settlement.
                <br />
                <strong className="text-[#141417]">Why:</strong> Provides concrete safety for the household and guarantees that the worker is credited immediately once work is authorized.
              </p>
            </div>

            {/* Decision 05 */}
            <div className="border border-zinc-200/80 rounded-[4px] p-4 bg-[#FFFFFF]">
              <div
                onClick={() =>
                  setZoomImage({
                    src: "/images/decision-5.png",
                    alt: "Decision 05: Automated Assignment",
                  })
                }
                className="w-full border border-zinc-200/80 rounded-[4px] overflow-hidden bg-[#F8F8F9] mb-4 cursor-zoom-in relative group"
              >
                <img
                  src="/images/decision-5.png"
                  alt="Decision 05: Automated Assignment"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </div>
              <span className="text-[11.5px] font-bold text-[#3B5BFF] uppercase tracking-wider">
                Decision 05
              </span>
              <h3
                style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
                className="font-display font-bold text-[17px] text-[#141417] mt-0.5 mb-1.5"
              >
                Algorithmic Proximity Assignment
              </h3>
              <p className="text-[14px] text-[#52525B] leading-relaxed">
                <strong className="text-[#141417]">Decision:</strong> Automatically pair verified tradespeople based on skill ratings and distance rather than visual directory browsing.
                <br />
                <strong className="text-[#141417]">Why:</strong> Prevents socio-economic bias, guarantees equal work distribution among verified workers, and shortens booking confirmation to minutes.
              </p>
            </div>

            {/* Decision 06 */}
            <div className="border border-zinc-200/80 rounded-[4px] p-4 bg-[#FFFFFF]">
              <div
                onClick={() =>
                  setZoomImage({
                    src: "/images/decision-6.png",
                    alt: "Decision 06: Visual Process Diagrams",
                  })
                }
                className="w-full border border-zinc-200/80 rounded-[4px] overflow-hidden bg-[#F8F8F9] mb-4 cursor-zoom-in relative group"
              >
                <img
                  src="/images/decision-6.png"
                  alt="Decision 06: Visual Process Diagrams"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </div>
              <span className="text-[11.5px] font-bold text-[#3B5BFF] uppercase tracking-wider">
                Decision 06
              </span>
              <h3
                style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
                className="font-display font-bold text-[17px] text-[#141417] mt-0.5 mb-1.5"
              >
                Explicit Process Transparency Diagrams
              </h3>
              <p className="text-[14px] text-[#52525B] leading-relaxed">
                <strong className="text-[#141417]">Decision:</strong> Show a visual step-by-step roadmap prior to booking commitment.
                <br />
                <strong className="text-[#141417]">Why:</strong> Demystifies the post-booking steps, eliminates customer anxiety regarding stranger visits, and establishes firm service boundaries.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Synthesis Quote */}
        <div className="p-6 my-10 border border-zinc-200/80 bg-[#F8F8F9] rounded-[4px] text-center">
          <p
            style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
            className="font-display font-bold text-[19px] sm:text-[21px] text-[#141417] leading-snug"
          >
            &ldquo;WILL is a system that connects Sanjay the homeowner and Vinod the worker, protecting both simultaneously.&rdquo;
          </p>
        </div>

        {/* ── EDITORIAL FOOTER DIVIDER ──────────────────────────────── */}
        <footer className="border-t border-zinc-200/80 pt-8 mt-16 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/mih" className="btn-secondary-pill w-full sm:w-auto">
            <span>Next Case Study: MiH Interiors</span>
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>

          <EmailLink className="btn-primary-pill w-full sm:w-auto">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span>Get in touch</span>
          </EmailLink>
        </footer>
      </article>

      {/* ── FULLSCREEN ZOOM LIGHTBOX ─────────────────────────────────── */}
      <AnimatePresence>
        {zoomImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeZoom}
            data-lenis-prevent="true"
            onWheel={(e) => e.stopPropagation()}
            className="fixed inset-0 z-[9999] bg-black/92 backdrop-blur-xs flex flex-col items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <button
              type="button"
              onClick={closeZoom}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm font-semibold transition-colors cursor-pointer z-10"
              aria-label="Close zoom"
            >
              ✕
            </button>

            <motion.div
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.96 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-[95vw] max-h-[85vh] flex flex-col items-center"
            >
              <img
                src={zoomImage.src}
                alt={zoomImage.alt}
                className="max-w-full max-h-[82vh] object-contain rounded-[4px] border border-white/10 shadow-2xl"
              />
              {zoomImage.alt && (
                <p className="text-[12.5px] text-zinc-400 mt-3 text-center">
                  {zoomImage.alt}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
