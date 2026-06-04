"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
export default function MIHCaseStudy() {
  const backHref = '/work';
  const backText = 'Back to Work';

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("hello@bineet.in");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="bg-white min-h-screen font-sans">
      <div className="w-full flex flex-col">
        
        {/* Navigation */}
        <section className="max-w-[1100px] mx-auto px-5 w-full">
          <div className="w-full mb-16 mt-12">
            <Link href={backHref} className="inline-flex items-center gap-3 text-gray-600 hover:text-[#1C1C1C] transition-colors group w-fit">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
              </span>
              <span className="font-medium text-sm md:text-base">{backText}</span>
            </Link>
          </div>
        </section>

        {/* Hero Image */}
        <div className="max-w-[1100px] mx-auto px-5 w-full mb-16 md:mb-24">
          <div className="w-full h-[250px] sm:h-[350px] md:h-[460px] rounded-[24px] md:rounded-[32px] overflow-hidden">
            <Image 
              src="/images/mih-interiors.png" 
              alt="MIH Interiors Case Study Thumbnail" 
              width={1100} 
              height={460} 
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* The Case Study Content */}
        <section className="w-full bg-white">
          <div className="max-w-[1100px] mx-auto px-5 w-full flex flex-col md:flex-row gap-16 md:gap-24 pb-32">
            
            {/* Left Column (Context & Link) */}
            <div className="w-full md:w-1/3 flex flex-col">
              <h3 className="text-[16px] font-medium text-zinc-500 mb-4 uppercase tracking-widest" style={{ fontFamily: 'var(--font-sans)' }}>Mini Case Study</h3>
              <h4 className="text-[40px] leading-tight text-black mb-6" style={{ fontFamily: 'var(--font-sans)' }}>MIH Interiors</h4>
              <p className="text-[16px] text-zinc-800 mb-8 font-medium" style={{ fontFamily: 'var(--font-sans)' }}>Focus: Conversion Rate Optimization & UX</p>
              <a 
                href="https://www.mihinteriors.in/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center border border-zinc-300 rounded-full px-6 py-3 text-[16px] text-black hover:bg-zinc-50 transition-colors w-fit"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Visit Live Site ↗
              </a>
            </div>

            {/* Right Column (The UX Breakdown) */}
            <div className="w-full md:w-2/3 flex flex-col gap-12">
              
              {/* Block 1 (The Problem) */}
              <div>
                <h4 className="text-[24px] text-black mb-4" style={{ fontFamily: 'var(--font-sans)' }}>The Friction of Lead Generation</h4>
                <p className="text-[16px] text-zinc-600 leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
                  In the luxury interior industry, traditional websites rely on high-friction 'Contact Us' forms. Users are often intimidated by potential costs and fear aggressive sales tactics. Asking for high-effort data while offering zero immediate value causes massive user drop-off.
                </p>
              </div>

              {/* Block 2 (The Solution) */}
              <div>
                <h4 className="text-[24px] text-black mb-4" style={{ fontFamily: 'var(--font-sans)' }}>A Value-First Quoting Flow</h4>
                <p className="text-[16px] text-zinc-600 leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
                  We reframed the architecture from a 'data capture' model to a 'value delivery' model. By introducing an interactive, room-by-room AI Estimate tool, we provided immediate pricing transparency. This broke down intimidating costs into digestible chunks and explicitly lowered the commitment barrier for the user.
                </p>
              </div>

              {/* Block 3 (The Outcome) */}
              <div>
                <h4 className="text-[24px] text-black mb-4" style={{ fontFamily: 'var(--font-sans)' }}>Driving Conversion</h4>
                <p className="text-[16px] text-zinc-600 leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
                  By replacing a blind form with a transparent pricing tool, the system successfully reduced user anxiety. The instant feedback loop keeps users engaged, significantly lowering bounce rates and seamlessly converting passive browsers into warm, qualified leads.
                </p>
              </div>

            </div>
          </div>
        </section>

      </div>
      
      {/* Footer */}
      <footer className="relative z-10 w-full bg-zinc-950 overflow-hidden py-32 md:py-40">
        <div className="mx-auto max-w-6xl px-5 md:px-12">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
            {/* Left Column - CTA */}
            <div>
              <h3 
                className="text-2xl font-normal text-white md:text-3xl lg:text-4xl"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                I'm available for new opportunities.
              </h3>
              
              {/* Email Input */}
              <div>
                <a
                  href="mailto:hello@bineet.in"
                  className="inline-flex md:hidden items-center justify-center w-fit px-8 py-4 mt-8 bg-black border border-zinc-600 rounded-2xl text-zinc-100 text-lg hover:bg-zinc-900 hover:border-zinc-400 transition-all cursor-pointer"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  hello@bineet.in
                </a>
                <button
                  onClick={handleCopy}
                  className="hidden md:inline-flex items-center justify-center w-fit px-8 py-4 mt-8 bg-black border border-zinc-600 rounded-2xl text-zinc-100 text-lg hover:bg-zinc-900 hover:border-zinc-400 transition-all cursor-pointer"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {copied ? "Email copied!" : "hello@bineet.in"}
                </button>
              </div>
            </div>

            {/* Right Column - Links */}
            <div className="grid grid-cols-2 gap-8 md:gap-12">
              {/* Links Column 1 */}
              <nav className="flex flex-col gap-4 items-start">
                <a
                  href="mailto:hello@bineet.in"
                  className="block md:hidden text-sm text-zinc-400 transition-colors hover:text-white md:text-base text-left"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Email
                </a>
                <button
                  onClick={handleCopy}
                  className="hidden md:block text-sm text-zinc-400 transition-colors hover:text-white md:text-base text-left"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {copied ? "Copied!" : "Email"}
                </button>
                <a
                  href="https://www.linkedin.com/in/bineet-barthwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-400 transition-colors hover:text-white md:text-base"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  LinkedIn
                </a>
                <a
                  href="/bineet-resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-400 transition-colors hover:text-white md:text-base"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Resume
                </a>
              </nav>

              {/* Links Column 2 */}
              <nav className="flex flex-col gap-4">
                <Link
                  href="/#home"
                  className="text-sm text-zinc-400 transition-colors hover:text-white md:text-base"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Home
                </Link>
                <Link
                  href="/#projects"
                  className="text-sm text-zinc-400 transition-colors hover:text-white md:text-base"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Projects
                </Link>
                <Link
                  href="/#about"
                  className="text-sm text-zinc-400 transition-colors hover:text-white md:text-base"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  About
                </Link>
                <Link
                  href="/#skills"
                  className="text-sm text-zinc-400 transition-colors hover:text-white md:text-base"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Skills
                </Link>
                <Link
                  href="/privacy"
                  className="text-sm text-zinc-400 transition-colors hover:text-white md:text-base"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Privacy Policy
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
