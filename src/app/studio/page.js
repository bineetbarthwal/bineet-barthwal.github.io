'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Zap, LayoutDashboard, Rocket } from 'lucide-react';

const logos = [
  { name: 'WILL' },
  { name: 'Fundbridge' },
  { name: 'INCEPT' },
  { name: 'CU-TBI' },
  { name: 'MakerSpace' },
  { name: 'IEDC' }
];

function LogoSet() {
  return (
    <div className="flex items-center gap-16 md:gap-24 px-8 md:px-12">
      {logos.map((logo, index) => (
        <div 
          key={index} 
          className="flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300"
        >
          {/* Placeholder SVG for client logos */}
          <svg 
            viewBox="0 0 160 40" 
            className="h-7 md:h-9 lg:h-10 w-auto fill-current text-white" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <text 
              x="50%" 
              y="50%" 
              dominantBaseline="middle" 
              textAnchor="middle" 
              fontSize="24" 
              fontWeight="900" 
              fontFamily="sans-serif"
              letterSpacing="0.02em"
            >
              {logo.name}
            </text>
          </svg>
        </div>
      ))}
    </div>
  );
}

export default function StudioPage() {
  // Fast text-reveal animation variants
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        staggerChildren: 0.03,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 14,
        stiffness: 200,
      },
    },
  };

  const textToAnimate = "THE EXECUTION PARTNER YOU'VE BEEN SEARCHING FOR.";

  return (
    <div className="min-h-screen bg-[#102028] text-white selection:bg-white selection:text-[#102028] font-sans overflow-x-hidden">
      
      {/* Hero Billboard */}
      <section className="relative min-h-[70vh] flex flex-col justify-center items-center px-6 pt-24 pb-16 w-full max-w-7xl mx-auto">
        
        {/* Status Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-12 shadow-lg backdrop-blur-sm"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs md:text-sm font-semibold tracking-wide text-gray-300 uppercase">
            Taking on 2 new startups this month
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          className="text-center text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] max-w-5xl mb-8"
          variants={sentence}
          initial="hidden"
          animate="visible"
          aria-label={textToAnimate}
        >
          {textToAnimate.split(" ").map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]" aria-hidden="true">
              {word.split("").map((char, charIndex) => (
                <motion.span 
                  key={charIndex} 
                  className="inline-block" 
                  variants={letter}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center text-gray-400 text-lg md:text-xl lg:text-2xl max-w-3xl font-medium leading-relaxed mb-16"
        >
          Premium UI/UX, Brand Identity, and full-stack Next.js Engineering. All in one place. One dedicated team.
        </motion.p>
        
      </section>

      {/* Logo Marquee Section */}
      <section className="w-full relative pb-24">
        <div className="w-full mx-auto relative">
          
          {/* CSS Gradient Masks for smooth fade out edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-56 bg-gradient-to-r from-[#102028] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-56 bg-gradient-to-l from-[#102028] to-transparent z-10 pointer-events-none"></div>

          {/* Marquee Container */}
          <div className="flex overflow-hidden relative w-full items-center">
            <motion.div
              className="flex whitespace-nowrap items-center w-max"
              animate={{
                x: ['0%', '-50%'],
              }}
              transition={{
                ease: 'linear',
                duration: 30,
                repeat: Infinity,
              }}
            >
              {/* Render 4 sets for a seamless infinite loop across all screen sizes */}
              <LogoSet />
              <LogoSet />
              <LogoSet />
              <LogoSet />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Wall of Proof (Masonry Grid) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {/* 6 placeholder items with varying heights for the masonry effect */}
          {[
            { title: "WILL - Mobile App UX", height: "h-[400px]" },
            { title: "Fundbridge - Pitch Deck", height: "h-[250px]" },
            { title: "INCEPT - Brand Identity", height: "h-[350px]" },
            { title: "CU-TBI - Web Platform", height: "h-[450px]" },
            { title: "MakerSpace - Dashboard", height: "h-[300px]" },
            { title: "IEDC - Marketing Site", height: "h-[350px]" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: (i % 3) * 0.1 }}
              className={`relative w-full ${item.height} rounded-2xl border border-gray-800 bg-[#1C1C1C] overflow-hidden group break-inside-avoid mb-6`}
            >
              {/* Fallback pattern / gradient for placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1C1C1C] to-[#2A2A2A] group-hover:scale-105 transition-transform duration-700"></div>
              
              {/* Next/Image placeholder (commented out until you have the actual image assets) */}
              {/* <Image 
                src={`/portfolio-${i+1}.webp`} 
                alt={item.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              /> */}
              
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-gray-500/50 font-mono text-xs uppercase tracking-widest px-4 text-center">
                  Image Placeholder
                </span>
              </div>
              
              {/* Hover Label */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-semibold tracking-wide text-lg">{item.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works (Frictionless Onboarding) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">How we operate.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#1C1C1C] rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-colors">
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 text-emerald-400">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">1. Subscribe & Sprint</h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Pick a flat-rate sprint package. No proposals, no lengthy scoping calls. Secure your slot instantly.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1C1C1C] rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-colors">
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 text-blue-400">
              <LayoutDashboard size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">2. Async Execution</h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              We manage the entire project via a shared Notion board. Drop in your requests, requirements, and feedback asynchronously.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#1C1C1C] rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-colors">
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 text-purple-400">
              <Rocket size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">3. Rapid Delivery</h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Receive high-fidelity Figma designs in days, and fully deployed Next.js MVPs in weeks. Pause or cancel anytime.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
