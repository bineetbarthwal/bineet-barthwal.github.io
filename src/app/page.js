"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const artImages = ['/images/myart-1.png', '/images/myart-2.png', '/images/myart-3.png'];
  const [artIndex, setArtIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setArtIndex((prevIndex) => (prevIndex + 1) % artImages.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);
  const reviews = [
    { quote: "Bineet brings exceptional product understanding and customer empathy.", author: "Reviewer One" },
    { quote: "A thoughtful designer who balances craft with user needs.", author: "Reviewer Two" },
    { quote: "Delivers clear, elegant interfaces and strong product instincts.", author: "Reviewer Three" }
  ];
  
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative flex flex-col bg-white overflow-x-hidden w-full max-w-[100vw]" style={{ scrollBehavior: "smooth" }}>
      
      {/* Clean Sliding Pill Navigation */}
      <nav className="fixed top-8 left-1/2 z-50 -translate-x-1/2 w-full max-w-[95vw] mx-auto overflow-x-auto scrollbar-hide md:max-w-fit">
        <div className="flex items-center gap-2 md:gap-0 mx-auto rounded-[16px] border border-gray-300 bg-white/95 p-1 shadow-sm backdrop-blur-md relative w-max md:w-auto">
          {/* Mapped Navigation Buttons */}
          {['home', 'projects', 'about', 'skills'].map((item) => (
            <motion.button
              key={item}
              onClick={() => handleNavClick(item)}
              className="relative px-3 md:px-6 py-2 text-sm md:text-base font-normal rounded-full"
              style={{ zIndex: 10 }}
              whileHover={{ scale: 1.05 }}
            >
              {activeSection === item && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-black rounded-full"
                  style={{ zIndex: 0 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30, mass: 0.8 }}
                />
              )}

              <motion.span layout className="relative z-10" style={{ color: activeSection === item ? 'white' : '#71717a' }}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.span>
            </motion.button>
          ))}
        </div>
      </nav>

      {/* Hero Section - Full Height */}
      <section id="home" className="relative flex min-h-screen flex-col items-center justify-center px-5 md:px-12 overflow-hidden">
        {/* Hero Content */}
        <div className="relative z-10 flex max-w-3xl flex-col items-center text-center">
        <motion.h1 
          {...fadeInUp}
          className="text-4xl font-normal tracking-tight text-black md:text-5xl lg:text-6xl leading-tight"
        >
          Hello,<br />
          I am Bineet Barthwal,<br />
          a UI/UX Designer
        </motion.h1>

        <motion.p 
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
          className="mt-8 max-w-2xl text-sm leading-relaxed text-gray-700 md:text-base"
        >
          I like solving problems. It’s my favourite part of the UX process. 
          My strength is versatility, from static visual design to complex, 
          low-friction product screens.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.4 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a href="mailto:hello@bineet.in" className="flex items-center justify-center rounded-2xl border border-gray-300 bg-[#F4F4F4] px-6 py-2.5 text-sm font-normal text-black transition-all hover:bg-[#F4F4F4] active:scale-95">
            Email me
          </a>
          <a href="/bineet-resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-2xl border border-gray-300 bg-white px-6 py-2.5 text-sm font-normal text-black transition-all hover:bg-gray-50 active:scale-95">
            Resume
          </a>
        </motion.div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section id="projects" className="relative z-10 flex w-full flex-col items-center px-5 md:px-12">
        <div className="w-full max-w-6xl">
          <h2 
            className="mb-12 text-2xl font-normal text-gray-900 md:text-3xl lg:text-4xl"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Selected Work
          </h2>

          {/* Projects Grid */}
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
          <article className="flex flex-col">
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
              How do you design an app connecting India's busiest users to its least literate workforce, smoothly?
            </p>
          </article>

          {/* MiH Interiors Project */}
          <article className="flex flex-col">
            <div className="relative mb-6 w-full aspect-video overflow-hidden rounded-2xl bg-[#F4F4F4]">
              {/* Placeholder for MiH Interiors */}
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

          {/* Some Other Work Project */}
          <article className="flex flex-col">
            <div className="relative mb-6 w-full aspect-video overflow-hidden rounded-2xl bg-[#F4F4F4]">
              {/* Placeholder for other work */}
            </div>
            <h3 
              className="text-xl font-normal text-gray-900 md:text-2xl"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Some other work
            </h3>
            <p 
              className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Upcoming work for showcase
            </p>
          </article>
        </div>

        {/* See More Work Button */}
        <div className="mt-12 flex justify-center md:mt-16">
          <a
            href="/work"
            className="rounded-full border border-gray-300 px-8 py-3 text-center text-sm font-medium text-gray-700 transition-all hover:bg-gray-50 active:scale-95 md:px-10 md:py-4 md:text-base"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            See more work
          </a>
        </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="relative z-10 flex w-full flex-col items-center px-5 md:px-12 py-16 md:py-24 lg:py-32">
        <div className="w-full max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            {/* Image Placeholder - 16:9 aspect ratio */}
            <div className="relative w-full max-w-full md:max-w-[480px] aspect-video rounded-2xl overflow-hidden shrink-0 bg-[#F4F4F4]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={artIndex}
                  src={artImages[artIndex]}
                  alt="About me art"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover absolute inset-0"
                />
              </AnimatePresence>
            </div>

            {/* About Content */}
            <div className="max-w-2xl">
              <h2 
                className="text-2xl font-normal text-gray-900 md:text-3xl lg:text-4xl"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                About me
              </h2>
              <p 
                className="mt-6 text-base leading-relaxed text-gray-700 md:text-lg"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                I'm Bineet Barthwal, originally from Dehradun. I came into UX through graphic design, which means structure & craft have always been the same thing for me. I'm drawn to complex problems & the process of untangling them. Outside of work, nature & music keep me sane.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section id="experiences" className="relative z-10 flex w-full flex-col items-center px-5 md:px-12 py-16 md:py-24 lg:py-32">
        <div className="w-full max-w-6xl">
          <h2 
            className="mb-12 text-2xl font-normal text-gray-900 md:text-3xl lg:text-4xl"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Experiences
          </h2>

          {/* Experiences List */}
          <div className="space-y-10">
          {/* Experience 1: Chandigarh University */}
          <article className="flex items-start gap-6 md:gap-8">
            <div className="mt-1 h-16 w-16 flex-shrink-0 overflow-hidden rounded bg-[#F4F4F4] md:h-20 md:w-20">
              {/* Placeholder for company logo */}
            </div>
            <div className="flex-grow">
              <h3 
                className="text-lg font-normal text-gray-900 md:text-xl"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Chandigarh University
              </h3>
              <p 
                className="mt-1 text-sm text-gray-600 md:text-base"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Graphics & UI/UX Designer
              </p>
              <p 
                className="mt-1 text-sm text-gray-500 md:text-base"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                April 2025 – Present
              </p>
            </div>
          </article>

          {/* Experience 2: Tree Multisoft Services */}
          <article className="flex items-start gap-6 md:gap-8">
            <div className="mt-1 h-16 w-16 flex-shrink-0 overflow-hidden rounded bg-[#F4F4F4] md:h-20 md:w-20">
              {/* Placeholder for company logo */}
            </div>
            <div className="flex-grow">
              <h3 
                className="text-lg font-normal text-gray-900 md:text-xl"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Tree Multisoft Services
              </h3>
              <p 
                className="mt-1 text-sm text-gray-600 md:text-base"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Graphics & UI/UX Designer
              </p>
              <p 
                className="mt-1 text-sm text-gray-500 md:text-base"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                May 2024 – April 2025
              </p>
            </div>
          </article>

          {/* Experience 3: Kanishk Hospital */}
          <article className="flex items-start gap-6 md:gap-8">
            <div className="mt-1 h-16 w-16 flex-shrink-0 overflow-hidden rounded bg-[#F4F4F4] md:h-20 md:w-20">
              {/* Placeholder for company logo */}
            </div>
            <div className="flex-grow">
              <h3 
                className="text-lg font-normal text-gray-900 md:text-xl"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Kanishk Surgical & Super Speciality Hospital
              </h3>
              <p 
                className="mt-1 text-sm text-gray-600 md:text-base"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Graphic Designer
              </p>
              <p 
                className="mt-1 text-sm text-gray-500 md:text-base"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                June 2023 – May 2024
              </p>
            </div>
          </article>
          </div>
        </div>
      </section>

      {/* Tools & Skills Section */}
      <section id="skills" className="relative z-10 flex w-full flex-col items-center px-5 md:px-12 py-16 md:py-24 lg:py-32">
        <div className="w-full max-w-6xl rounded-2xl bg-[#F4F4F4] px-8 py-10 md:px-12 md:py-14">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="flex-grow">
          <h2 
            className="text-2xl font-normal text-gray-900 md:text-3xl"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Tools & Skills
          </h2>

              {/* Tools */}
              <div className="mt-6">
                <p 
                  className="font-medium text-gray-900"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Tools:{" "}
                  <span className="font-normal text-gray-600">
                    Figma, FigJam, Adobe Creative Cloud
                  </span>
                </p>
              </div>

              {/* Skills */}
              <div className="mt-4">
                <p 
                  className="font-medium text-gray-900"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Skills:{" "}
                  <span className="font-normal text-gray-600">
                    UX Research, Information Architecture, Wireframing, Prototyping, Visual Design, Typography, Graphic Design, HTML, CSS.
                  </span>
                </p>
              </div>
            </div>

            {/* View Skills Button */}
            <a
              href="/skills"
              className="mt-6 flex-shrink-0 rounded-2xl border border-gray-400 px-6 py-2.5 text-center text-sm font-normal text-gray-700 transition-all hover:bg-[#F4F4F4] active:scale-95 md:mt-0"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              View Skills
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 flex w-full flex-col items-center px-5 md:px-12 py-16 md:py-24 lg:py-32">
        <div className="w-full max-w-6xl">
          <h2 
            className="mb-12 text-2xl font-normal text-gray-900 md:text-3xl lg:text-4xl"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Hear from the people I have worked with
          </h2>

          {/* Testimonials Accordion Grid */}
          <div className="flex flex-col md:flex-row gap-4">
            {reviews.map((r, idx) => {
              const flexClass = hoveredIndex === null ? 'flex-1' : hoveredIndex === idx ? 'flex-[3]' : 'flex-[1]';
              return (
                <motion.div
                  key={idx}
                  layout
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`${flexClass} overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 md:p-8 transition-all`}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                >
                  <p className="text-sm leading-relaxed text-gray-700 md:text-base" style={{ fontFamily: 'var(--font-sans)' }}>
                    {r.quote}
                  </p>
                  <p className="mt-6 font-medium text-gray-900" style={{ fontFamily: 'var(--font-sans)' }}>
                    {r.author}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

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
                  className="inline-flex items-center justify-center w-fit px-8 py-4 mt-8 bg-black border border-zinc-600 rounded-2xl text-zinc-100 text-lg hover:bg-zinc-900 hover:border-zinc-400 transition-all cursor-pointer"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  hello@bineet.in
                </a>
              </div>
            </div>

            {/* Right Column - Links */}
            <div className="grid grid-cols-2 gap-8 md:gap-12">
              {/* Links Column 1 */}
              <nav className="flex flex-col gap-4">
                <a
                  href="mailto:hello@bineet.in"
                  className="text-sm text-zinc-400 transition-colors hover:text-white md:text-base"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Email
                </a>
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
                <a
                  href="#home"
                  className="text-sm text-zinc-400 transition-colors hover:text-white md:text-base"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Home
                </a>
                <a
                  href="#projects"
                  className="text-sm text-zinc-400 transition-colors hover:text-white md:text-base"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Projects
                </a>
                <a
                  href="#about"
                  className="text-sm text-zinc-400 transition-colors hover:text-white md:text-base"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  About
                </a>
                <a
                  href="#skills"
                  className="text-sm text-zinc-400 transition-colors hover:text-white md:text-base"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Skills
                </a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}     