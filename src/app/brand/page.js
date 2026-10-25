'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

/* ─── Brand project data ─── */
const brandProjects = [
  {
    title: "AI Convergence Summit",
    category: "National Event Branding",
    description: "Full visual identity system — 40+ assets spanning venue signage, social kits, lanyards, and stage backdrops for India's premier AI summit.",
    thumbnail: "/designs/aiconvergence.jpg",
    images: ["/designs/aiconvergence1.jpg", "/designs/aiconvergence2.jpg", "/designs/aiconvergence3.jpg"],
  },
  {
    title: "AI Fest",
    category: "Campus Event Identity",
    description: "End-to-end branding for a large-scale campus AI festival, including logo, collateral, social media templates, and environmental graphics.",
    thumbnail: "/images/aifest.jpg",
    images: ["/images/aifest2.jpg", "/images/aifest3.jpg", "/images/aifest5.jpg"],
  },
  {
    title: "Sandbox Startup Incubator",
    category: "Brand Identity",
    description: "Visual identity and marketing materials for a university startup incubator program — logo, pitch decks, social templates, and print collateral.",
    thumbnail: "/images/sandbox.png",
    images: ["/designs/sandbox1.jpg", "/designs/sandbox2.jpg", "/designs/sandbox3.jpg"],
  },
  {
    title: "IEDC Innovation Hub",
    category: "Institutional Branding",
    description: "Comprehensive brand refresh for Chandigarh University's IEDC chapter, spanning logo redesign, event collateral, and digital presence.",
    thumbnail: "/images/iedc1.jpg",
    images: ["/images/iedc2.jpg", "/images/iedc3.jpg", "/images/iedc4.jpg"],
  },
  {
    title: "Logo Portfolio",
    category: "Visual Identity Design",
    description: "A curated collection of logo and identity marks designed across industries — tech, education, healthcare, and culture.",
    thumbnail: "/images/logodesigns.png",
    images: [],
  },
  {
    title: "Visual Craft",
    category: "Graphic Design Collection",
    description: "Selected graphic design work including poster designs, social media creatives, and print materials across multiple clients.",
    thumbnail: "/images/visualcraft.png",
    images: [],
  },
];

/* ─── Stagger animation variants ─── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

/* ─── Brand Project Card ─── */
function BrandCard({ project, index }) {
  return (
    <motion.article
      variants={itemVariants}
      className="group flex flex-col"
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-100 mb-5">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          draggable={false}
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      {/* Meta */}
      <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-1">
        {project.category}
      </span>
      <h3 className="text-xl font-semibold text-zinc-900 tracking-tight" style={{ fontFamily: 'var(--font-sans)' }}>
        {project.title}
      </h3>
      <p className="mt-2 text-sm text-zinc-500 leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
        {project.description}
      </p>

      {/* Detail images row */}
      {project.images.length > 0 && (
        <div className="mt-4 flex gap-2 overflow-x-auto scrollbar-hide">
          {project.images.map((img, i) => (
            <div key={i} className="flex-shrink-0 w-28 h-20 rounded-lg overflow-hidden bg-zinc-100">
              <img src={img} alt={`${project.title} detail ${i + 1}`} className="w-full h-full object-cover" draggable={false} />
            </div>
          ))}
        </div>
      )}
    </motion.article>
  );
}

/* ─── Brand Page ─── */
export default function BrandPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-blue-600 selection:text-white overflow-x-hidden">
      
      {/* Back nav */}
      <nav className="fixed top-8 left-8 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/95 backdrop-blur-md px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition-all hover:bg-zinc-50 hover:border-zinc-400 active:scale-95"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Home
        </Link>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center rounded-full border border-zinc-300 bg-zinc-50 px-4 py-1.5 text-xs font-mono text-zinc-600 tracking-wide mb-6">
            Brand &amp; Visual Systems
          </span>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            style={{ color: "#2563EB", fontFamily: 'var(--font-sans)' }}
          >
            Brand Work
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-500 leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
            Visual identities, national event branding, print systems, and campaign assets. All designed and systematized by me — from brief to final delivery.
          </p>
        </motion.div>
      </section>

      {/* Projects grid */}
      <section className="max-w-5xl mx-auto px-6 pb-32">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {brandProjects.map((project, i) => (
            <BrandCard key={i} project={project} index={i} />
          ))}
        </motion.div>
      </section>

      {/* CTA Footer */}
      <section className="bg-zinc-950 py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-normal text-white mb-6" style={{ fontFamily: 'var(--font-sans)' }}>
            Want to work together on brand systems?
          </h2>
          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href="mailto:hello@bineet.in"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition-all hover:bg-zinc-100 active:scale-95"
            >
              Get in touch ↗
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-zinc-600 px-6 py-3 text-sm font-medium text-zinc-300 transition-all hover:bg-zinc-800 hover:border-zinc-500 active:scale-95"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
