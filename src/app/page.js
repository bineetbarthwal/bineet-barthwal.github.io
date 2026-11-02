"use client";
import Link from "next/link";
import GlassFolder from "@/components/GlassFolder";

/* ─── Main Homepage ─── */
export default function Home() {

  /* Thumbnail images for folder cards */
  const productCards = [
    "/images/will-thumbnail-1.jpg",
    "/images/fundbridge-thumbnail-1.png",
    "/images/mih-interiors.png",
  ];
  const brandCards = [
    "/images/logodesigns.png",
    "/images/visualcraft.png",
    "/designs/sandbox.png",
  ];

  return (
    <main className="relative flex flex-col bg-white overflow-x-hidden w-full max-w-[100vw]" style={{ scrollBehavior: "smooth" }}>
      
      {/* ═══════════════════════════════════════════ */}
      {/* HERO SECTION — Single aligned editorial column */}
      {/* ═══════════════════════════════════════════ */}
      <section id="home" className="relative flex flex-col justify-center overflow-hidden">
        <div className="relative z-10 max-w-[590px] mx-auto w-full px-6 pt-10">

          {/* Top Header Row */}
          <div className="flex items-center justify-between mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4F4F6] text-[13px] font-medium text-[#3F3F46]">
              <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
              <span>Available for work</span>
            </div>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-pill"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
              <span>Resume</span>
            </a>
          </div>

          {/* Role (Clean sans-serif, subtle grey) */}
          <div className="text-[14px] text-[#6E6E77] leading-[1.45] mb-5 font-normal">
            <p>Product &amp; Brand Designer</p>
          </div>

          {/* Name Display Heading (Bricolage Grotesque 800) */}
          <h1
            style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
            className="font-display font-extrabold text-[54px] sm:text-[68px] text-black tracking-[-0.045em] leading-[0.98]"
          >
            Bineet Barthwal
          </h1>

          {/* Tagline (Clean medium/semibold weight like reference) */}
          <p className="font-sans-custom font-medium text-[20px] sm:text-[22px] text-[#141417] mt-5 tracking-[-0.02em] leading-[1.35]">
            I design products that convert and brands that scale.
          </p>

          {/* Hero Bio (Zero em-dashes, no React mention, clean keyword hovers) */}
          <p className="font-sans-custom font-normal text-[15.5px] text-[#52525B] mt-3.5 leading-[1.65] max-w-[530px]">
            I combine analytical thinking with visual craft to turn complex workflows into
            intuitive digital products and build cohesive brand identities from the ground
            up. From B2B SaaS platforms and conversion-focused web experiences to
            large-scale campaign systems, I design and ship across{" "}
            <span className="kw kw-figma">
              Figma
              <span className="kw-figma-handle -top-[3px] -left-[3px]" />
              <span className="kw-figma-handle -top-[3px] -right-[3px]" />
              <span className="kw-figma-handle -bottom-[3px] -left-[3px]" />
              <span className="kw-figma-handle -bottom-[3px] -right-[3px]" />
              <span className="kw-pop px-2 py-0.5 rounded bg-[#8B5CF6] text-white text-[11px] font-medium shadow-md">
                ✦ Auto Layout
              </span>
            </span>{" "}
            and{" "}
            <span className="kw">
              Adobe Creative Cloud
              <span className="kw-pop flex items-center gap-1 px-2 py-1 rounded-full bg-white border border-zinc-200 shadow-lg">
                <span className="w-5 h-5 rounded-[5px] bg-[#330000] text-[#FF9A00] text-[10px] font-bold flex items-center justify-center">
                  Ai
                </span>
                <span className="w-5 h-5 rounded-[5px] bg-[#49021F] text-[#FF3366] text-[10px] font-bold flex items-center justify-center">
                  Id
                </span>
                <span className="w-5 h-5 rounded-[5px] bg-[#001E36] text-[#31A8FF] text-[10px] font-bold flex items-center justify-center">
                  Ps
                </span>
              </span>
            </span>
            .
          </p>

          {/* Get in Touch Button */}
          <div className="mt-7 mb-2 flex items-center gap-3">
            <a href="mailto:hello@bineet.in" className="btn-dark-pill">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>Get in touch</span>
            </a>
          </div>

          {/* Bento Folders Row */}
          <div className="mt-24 sm:mt-28 grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
            <GlassFolder
              variant="product"
              title="Product & UI/UX"
              description="B2B SaaS workflows, mobile apps, and conversion web interfaces."
              href="#projects"
              cards={productCards}
            />
            <GlassFolder
              variant="brand"
              title="Brand & Visuals"
              description="Visual identities, national summit branding, and campaign systems."
              href="/studio"
              cards={brandCards}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* SELECTED WORK                               */}
      {/* ═══════════════════════════════════════════ */}
      <section id="product-work" className="relative z-10 w-full">
        <div id="projects" className="absolute -top-16" />
        <div className="max-w-[590px] mx-auto w-full px-6 pt-24 sm:pt-28 pb-4">
          <h2 className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#71717A] mb-6">
            Selected Work
          </h2>

          {/* Case Study Row: Will */}
          <div className="group flex flex-col sm:flex-row gap-5 py-6 border-t border-zinc-200/80 transition-colors hover:bg-zinc-50/50 -mx-3 px-3 rounded-lg">
            <Link href="/will" className="w-full sm:w-[135px] h-[95px] flex-shrink-0 rounded-[10px] border border-zinc-200/80 overflow-hidden bg-zinc-100 block">
              <img
                src="/images/will-thumbnail-1.jpg"
                alt="Will — service marketplace app"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </Link>
            <div className="flex flex-col justify-center min-w-0 items-start">
              <span className="text-[12px] font-medium text-[#3B5BFF]">
                Product Design · Mobile App
              </span>
              <h3 className="font-display font-bold text-[18px] text-[#141417] mt-0.5">
                Will: Connecting urban users to blue-collar services
              </h3>
              <p className="text-[15px] text-[#52525B] leading-[1.6] mt-1.5 mb-3.5">
                Designing a low-friction service booking app that bridges India&apos;s busiest urban households with a low-literacy workforce.
              </p>
              <Link className="btn-secondary-pill" href="/will">
                <span>Read case study</span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Case Study Row: MiH Interiors */}
          <div className="group flex flex-col sm:flex-row gap-5 py-6 border-t border-b border-zinc-200/80 transition-colors hover:bg-zinc-50/50 -mx-3 px-3 rounded-lg">
            <Link href="/mih" className="w-full sm:w-[135px] h-[95px] flex-shrink-0 rounded-[10px] border border-zinc-200/80 overflow-hidden bg-zinc-100 block">
              <img
                src="/images/mih-interiors.png"
                alt="MIH Interiors — conversion-focused website"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </Link>
            <div className="flex flex-col justify-center min-w-0 items-start">
              <span className="text-[12px] font-medium text-[#3B5BFF]">
                UX &amp; Conversion Design
              </span>
              <h3 className="font-display font-bold text-[18px] text-[#141417] mt-0.5">
                MiH Interiors: A studio website built to convert
              </h3>
              <p className="text-[15px] text-[#52525B] leading-[1.6] mt-1.5 mb-3.5">
                Replacing high-friction contact forms with a guided, value-first estimation flow for a premium interior design studio.
              </p>
              <Link className="btn-secondary-pill" href="/mih">
                <span>Read case study</span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* See all work + Share Row */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Link className="btn-secondary-pill" href="/work">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="7" height="7" x="3" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="14" rx="1" />
                <rect width="7" height="7" x="3" y="14" rx="1" />
              </svg>
              <span>See all work</span>
            </Link>

            <button
              type="button"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: "Bineet Barthwal · Product & Brand Designer", url: window.location.origin });
                } else {
                  navigator.clipboard.writeText(window.location.origin);
                }
              }}
              className="btn-outline-pill"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
              </svg>
              <span>Share</span>
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* ABOUT & EXPERIENCE                          */}
      {/* ═══════════════════════════════════════════ */}
      <section id="about" className="relative z-10 w-full">
        <div className="max-w-[590px] mx-auto w-full px-6 pt-24 pb-4">

          {/* About */}
          <h2 className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#71717A] mb-6">
            About
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-7 items-start mb-20">
            <div className="w-[80px] h-[80px] shrink-0 rounded-2xl overflow-hidden border border-zinc-200/80 bg-[#f4f4f4] shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
              <img
                src="/images/bineet-illustration.jpg"
                alt="Bineet Barthwal"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="text-[15.5px] text-[#52525B] leading-[1.65] space-y-4">
              <p>
                I&apos;m a designer with a{" "}
                <span className="kw">
                  B.Sc. in Statistics and an MBA in Business Analytics
                  <span className="kw-pop flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-white border border-zinc-200/90 shadow-xl">
                    <svg width="42" height="24" viewBox="0 0 44 30" fill="none">
                      <path
                        d="M3 25 L11 20 L19 22 L27 13 L34 16 L41 5"
                        stroke="#10B981"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="41" cy="5" r="3" fill="#10B981" />
                    </svg>
                    <span className="text-left leading-tight">
                      <span className="block text-[11.5px] font-bold text-[#141417]">
                        Data-Driven UX
                      </span>
                      <span className="block text-[10px] font-medium text-emerald-600">
                        Metrics → Decisions
                      </span>
                    </span>
                  </span>
                </span>
                . I came into UX through graphic design, so structure, data, and visual
                craft have always felt naturally connected.
              </p>
              <p>
                That analytical foundation shapes how I approach every project. Whether
                I&apos;m mapping a multi-role SaaS workflow, designing a conversion-focused
                web experience, or rolling out a 40+ asset national summit identity, I
                focus on clarity, usability, and visual consistency.
              </p>
            </div>
          </div>

          {/* Experience */}
          <h2 className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#71717A] mb-6">
            Experience
          </h2>

          {/* Experience 1: CU-TBI */}
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-8 py-6 border-t border-zinc-200/80">
            <div className="sm:w-[130px] flex-shrink-0">
              <span className="text-[13.5px] font-medium text-[#71717A]">
                2025 – Present
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-display font-bold text-[16px] text-[#141417] tracking-[-0.015em] leading-snug">
                Graphic &amp; UX Designer · CU-TBI
              </h3>
              <p className="text-[13.5px] text-[#6e6e77] mt-0.5 mb-2.5">
                Chandigarh University Technology Business Incubator
              </p>
              <ul className="text-[13.5px] text-[#52525b] leading-[1.6] space-y-1.5 list-none">
                <li className="flex gap-2">
                  <span className="text-zinc-400 select-none">·</span>
                  <span>Designing internal incubator management workflows, startup web interfaces, and product pitch systems across web and mobile.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-400 select-none">·</span>
                  <span>Leading end-to-end brand identity, environmental graphics, and 40+ asset campaign systems for flagship national summits (ISBACON, INCEPT, CUBE).</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Experience 2: Tree Multisoft */}
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-8 py-6 border-t border-b border-zinc-200/80">
            <div className="sm:w-[130px] flex-shrink-0">
              <span className="text-[13.5px] font-medium text-[#71717A]">
                2024 – 2025
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-display font-bold text-[16px] text-[#141417] tracking-[-0.015em] leading-snug">
                Graphics &amp; UI/UX Designer · Tree Multisoft Services
              </h3>
              <ul className="text-[13.5px] text-[#52525b] leading-[1.6] space-y-1.5 list-none mt-2.5">
                <li className="flex gap-2">
                  <span className="text-zinc-400 select-none">·</span>
                  <span>Designed B2B web dashboards, conversion landing pages, and brand collateral for commercial clients from wireframe to handoff.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* SKILLS                                      */}
      {/* ═══════════════════════════════════════════ */}
      <section id="skills" className="relative z-10 w-full">
        <div className="max-w-[590px] mx-auto w-full px-6 pt-24 pb-4">
          <h2 className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#71717A] mb-6">
            Skills
          </h2>

          <div className="divide-y divide-zinc-200/70 border-t border-b border-zinc-200/70">
            <div className="py-5 grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-3 items-start">
              <span className="text-[13.5px] font-medium text-[#71717A] pt-1">Product &amp; UX</span>
              <div className="flex flex-wrap gap-2">
                {["UI/UX Design", "Figma", "Design Systems", "Wireframing", "Information Architecture", "Prototyping", "User Flows", "Conversion UI"].map((skill) => (
                  <span key={skill} className="skill-chip">{skill}</span>
                ))}
              </div>
            </div>

            <div className="py-5 grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-3 items-start">
              <span className="text-[13.5px] font-medium text-[#71717A] pt-1">Brand &amp; Visual</span>
              <div className="flex flex-wrap gap-2">
                {["Brand Identity", "Visual Systems", "Art Direction", "Brand Guidelines", "Event & Print Systems", "Campaign Collateral", "Typography"].map((skill) => (
                  <span key={skill} className="skill-chip">{skill}</span>
                ))}
              </div>
            </div>

            <div className="py-5 grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-3 items-start">
              <span className="text-[13.5px] font-medium text-[#71717A] pt-1">Tools &amp; Strategy</span>
              <div className="flex flex-wrap gap-2">
                {["Adobe Illustrator", "Adobe InDesign", "Adobe Photoshop", "Business Analytics", "Heuristic Review", "Data Merge Automation"].map((skill) => (
                  <span key={skill} className="skill-chip">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* FOOTER                                      */}
      {/* ═══════════════════════════════════════════ */}
      <footer className="w-full bg-white pt-20 pb-16">
        <div className="max-w-[590px] mx-auto px-6">
          {/* Status Line in Clean Hanken Grotesk (Matches reference "● Open to work · India") */}
          <div className="inline-flex items-center gap-2 text-[14px] font-normal text-[#52525B] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
            <span>Open to work · India</span>
          </div>

          {/* Oversized 2-Line Display Heading (Matches reference scale & weight) */}
          <h2
            style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
            className="font-display font-extrabold text-[44px] sm:text-[56px] text-[#111113] tracking-[-0.04em] leading-[1.02]"
          >
            Have a product or <br className="hidden sm:block" />
            brand in mind?
          </h2>

          {/* Clean Horizontal Links Row (Matches reference "Email  LinkedIn  X  Dribbble" style) */}
          <div className="flex flex-wrap items-center gap-6 mt-7 text-[15px] font-medium text-[#3F3F46]">
            <a
              href="mailto:hello@bineet.in"
              className="hover:text-[#111113] transition-colors"
            >
              hello@bineet.in
            </a>
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
            <button
              type="button"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: "Bineet Barthwal · Product & Brand Designer",
                    url: window.location.origin,
                  });
                } else {
                  navigator.clipboard.writeText(window.location.origin);
                }
              }}
              className="hover:text-[#111113] transition-colors cursor-pointer"
            >
              Share
            </button>
            <Link className="text-[#71717A] hover:text-[#111113] transition-colors" href="/privacy">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}