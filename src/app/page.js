"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { LayoutTemplate, Search, PenTool, Layers, Terminal, Smartphone, Palette } from "lucide-react";
import { SiFigma, SiReact, SiTailwindcss } from "react-icons/si";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("hello@bineet.in");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const artImages = ['/images/myart-1.png', '/images/myart-2.png', '/images/myart-3.png'];
  const [artIndex, setArtIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setArtIndex((prevIndex) => (prevIndex + 1) % artImages.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sectionIds = ['home', 'projects', 'about', 'skills'];
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);
  const reviews = [
    { quote: "Very diligent and calm. I thoroughly enjoyed working with him.", author: "Aryan Rajput" },
    { quote: "I appreciate how instantly Bineet grasps the vibe and the client's desired aesthetic. I never had to explain what I wanted twice.", author: "Dr. D.P. Purohit" },
    { quote: "We truly appreciated his altruistic nature and collaborative spirit. Wishing him the absolute best.", author: "Shreya Bhatt" }
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
          {/* Mobile Email Button */}
          <a href="mailto:hello@bineet.in" className="flex md:hidden items-center justify-center rounded-2xl border border-gray-300 bg-[#F4F4F4] px-6 py-2.5 text-sm font-normal text-black transition-all hover:bg-[#F4F4F4] active:scale-95">
            Email me
          </a>
          {/* Desktop Email Button */}
          <button onClick={handleCopy} className="hidden md:flex items-center justify-center rounded-2xl border border-gray-300 bg-[#F4F4F4] px-6 py-2.5 text-sm font-normal text-black transition-all hover:bg-[#F4F4F4] active:scale-95">
            {copied ? "Email copied!" : "Email me"}
          </button>
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
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
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

          {/* Some Other Work Project */}
          <article className="flex flex-col">
            <div className="relative mb-6 w-full aspect-video overflow-hidden rounded-2xl bg-[#F4F4F4]">
              {/* Placeholder for other work */}
            </div>
            <h3 
              className="text-xl font-normal text-gray-900 md:text-2xl"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Coming Soon
            </h3>
            <p 
              className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Currently crafting new UX case studies and product explorations.
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
            {/* Editorial Portrait */}
            <div className="w-full md:w-1/2 aspect-video rounded-[24px] overflow-hidden bg-zinc-100">
              <Image 
                src="/images/profile-bw-v1.png"
                alt="Bineet Barthwal Portrait"
                width={800}
                height={1000}
                className="object-cover w-full h-full"
              />
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
          <div className="flex flex-col w-full">
            {/* Experience 1: Chandigarh University */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-t border-b border-zinc-200 group">
              <div className="flex flex-col gap-1">
                <h3 className="text-[20px] font-medium text-black" style={{ fontFamily: 'var(--font-sans)' }}>Graphics & UI/UX Designer</h3>
                <p className="text-[16px] text-zinc-500" style={{ fontFamily: 'var(--font-sans)' }}>Chandigarh University</p>
              </div>
              <div className="text-[14px] text-zinc-400 mt-2 md:mt-0 tracking-wide" style={{ fontFamily: 'var(--font-sans)' }}>
                April 2025 – Present
              </div>
            </div>

            {/* Experience 2: Tree Multisoft Services */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-b border-zinc-200 group">
              <div className="flex flex-col gap-1">
                <h3 className="text-[20px] font-medium text-black" style={{ fontFamily: 'var(--font-sans)' }}>Graphics & UI/UX Designer</h3>
                <p className="text-[16px] text-zinc-500" style={{ fontFamily: 'var(--font-sans)' }}>Tree Multisoft Services</p>
              </div>
              <div className="text-[14px] text-zinc-400 mt-2 md:mt-0 tracking-wide" style={{ fontFamily: 'var(--font-sans)' }}>
                May 2024 – April 2025
              </div>
            </div>

            {/* Experience 3: Kanishk Hospital */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-b border-zinc-200 group">
              <div className="flex flex-col gap-1">
                <h3 className="text-[20px] font-medium text-black" style={{ fontFamily: 'var(--font-sans)' }}>Graphic Designer</h3>
                <p className="text-[16px] text-zinc-500" style={{ fontFamily: 'var(--font-sans)' }}>Kanishk Surgical & Super Speciality Hospital</p>
              </div>
              <div className="text-[14px] text-zinc-400 mt-2 md:mt-0 tracking-wide" style={{ fontFamily: 'var(--font-sans)' }}>
                June 2023 – May 2024
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Capabilities Section */}
      <section id="skills" className="w-full bg-[#F4F4F4] py-32">
        <div className="max-w-[1100px] mx-auto px-5 w-full">
          <h2 className="text-[48px] font-normal text-black mb-20" style={{ fontFamily: 'var(--font-sans)' }}>
            Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            {/* Column 1: Systems & UX */}
            <div>
              <h3 className="text-[24px] mb-8 text-black border-b border-zinc-300 pb-4" style={{ fontFamily: 'var(--font-sans)' }}>Systems & UX</h3>
              <ul className="flex flex-col gap-6">
                <li className="flex flex-row items-center gap-4">
                  <Search size={24} className="text-zinc-800" />
                  <span className="text-[16px] text-zinc-600" style={{ fontFamily: 'var(--font-sans)' }}>UX Research & Discovery</span>
                </li>
                <li className="flex flex-row items-center gap-4">
                  <LayoutTemplate size={24} className="text-zinc-800" />
                  <span className="text-[16px] text-zinc-600" style={{ fontFamily: 'var(--font-sans)' }}>Information Architecture</span>
                </li>
                <li className="flex flex-row items-center gap-4">
                  <Layers size={24} className="text-zinc-800" />
                  <span className="text-[16px] text-zinc-600" style={{ fontFamily: 'var(--font-sans)' }}>Wireframing & User Flows</span>
                </li>
                <li className="flex flex-row items-center gap-4">
                  <Smartphone size={24} className="text-zinc-800" />
                  <span className="text-[16px] text-zinc-600" style={{ fontFamily: 'var(--font-sans)' }}>Mobile-First Prototyping</span>
                </li>
              </ul>
            </div>

            {/* Column 2: Visual Craft */}
            <div>
              <h3 className="text-[24px] mb-8 text-black border-b border-zinc-300 pb-4" style={{ fontFamily: 'var(--font-sans)' }}>Visual Craft</h3>
              <ul className="flex flex-col gap-6">
                <li className="flex flex-row items-center gap-4">
                  <PenTool size={24} className="text-zinc-800" />
                  <span className="text-[16px] text-zinc-600" style={{ fontFamily: 'var(--font-sans)' }}>UI & Interaction Design</span>
                </li>
                <li className="flex flex-row items-center gap-4">
                  <SiFigma size={24} className="text-zinc-800" />
                  <span className="text-[16px] text-zinc-600" style={{ fontFamily: 'var(--font-sans)' }}>Figma & FigJam</span>
                </li>
                <li className="flex flex-row items-center gap-4">
                  <Palette size={24} className="text-zinc-800" />
                  <span className="text-[16px] text-zinc-600" style={{ fontFamily: 'var(--font-sans)' }}>Adobe Creative Suite</span>
                </li>
                <li className="flex flex-row items-center gap-4">
                  <LayoutTemplate size={24} className="text-zinc-800" />
                  <span className="text-[16px] text-zinc-600" style={{ fontFamily: 'var(--font-sans)' }}>Design Systems</span>
                </li>
              </ul>
            </div>

            {/* Column 3: Execution & Tooling */}
            <div>
              <h3 className="text-[24px] mb-8 text-black border-b border-zinc-300 pb-4" style={{ fontFamily: 'var(--font-sans)' }}>Execution & Tooling</h3>
              <ul className="flex flex-col gap-6">
                <li className="flex flex-row items-center gap-4">
                  <Terminal size={24} className="text-zinc-800" />
                  <span className="text-[16px] text-zinc-600" style={{ fontFamily: 'var(--font-sans)' }}>HTML & CSS Fundamentals</span>
                </li>
                <li className="flex flex-row items-center gap-4">
                  <SiTailwindcss size={24} className="text-zinc-800" />
                  <span className="text-[16px] text-zinc-600" style={{ fontFamily: 'var(--font-sans)' }}>Tailwind CSS</span>
                </li>
                <li className="flex flex-row items-center gap-4">
                  <PenTool size={24} className="text-zinc-800" />
                  <span className="text-[16px] text-zinc-600" style={{ fontFamily: 'var(--font-sans)' }}>AI-Assisted Workflows</span>
                </li>
              </ul>
            </div>
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