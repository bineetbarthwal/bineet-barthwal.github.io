"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function LogosPage() {
  const [selectedLogo, setSelectedLogo] = useState(null);

  const logos = [
    { 
      name: 'AI Fest', 
      thumbnail: '/images/aifestlogo.svg', 
      images: [
        '/images/aifest1.jpg',
        '/images/aifest2.jpg',
        '/images/aifest3.jpg',
        '/images/aifest4.jpg',
        '/images/aifest5.jpg',
        '/images/aifest6.jpg',
        '/images/aifest7.jpg'
      ] 
    },
    { 
      name: 'Sandbox', 
      thumbnail: '/images/sandboxlogo.svg', 
      images: [] 
    },
    { 
      name: 'IEDC', 
      thumbnail: '/images/iedclogo.svg', 
      images: [
        '/images/iedc1.jpg',
        '/images/iedc2.jpg',
        '/images/iedc3.jpg',
        '/images/iedc4.jpg',
        '/images/iedc5.jpg',
        '/images/iedc6.jpg',
        '/images/iedc7.jpg',
        '/images/iedc8.jpg'
      ] 
    },
    { name: 'CUBE', thumbnail: '/images/cubelogo.svg', images: [] },
    { name: 'Nari', thumbnail: '/images/narilogo.svg', images: [] },
    { name: 'AI Convergence', thumbnail: '/images/AIconvergencelogo.svg', images: [] }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-32 pb-12 px-5 md:px-12 flex flex-col items-center w-full animate-in fade-in duration-500">
      <div className="w-full max-w-6xl">
        {/* Top Bar */}
        <div className="flex w-full mb-16">
          <Link href="/work?tab=Creative" className="inline-flex items-center gap-3 text-gray-600 hover:text-[#1C1C1C] transition-colors group w-fit whitespace-nowrap">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </span>
            <span className="font-medium text-sm md:text-base">Back to Work</span>
          </Link>
        </div>

        {/* Title */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-sans)' }}>Logo Design</h1>
          <p className="text-gray-500 text-lg">Crafting memorable brand identities.</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {logos.map((logo) => (
            <div 
              key={logo.name} 
              onClick={() => logo.images.length > 0 && setSelectedLogo(logo)}
              className={`group relative rounded-[20px] bg-white aspect-square border border-gray-200 flex items-center justify-center overflow-hidden p-4 md:p-6 transition-all duration-300 ${logo.images.length > 0 ? 'cursor-pointer hover:border-gray-300 hover:shadow-md' : 'cursor-default'}`}
            >
              <img 
                src={logo.thumbnail} 
                alt={logo.name}
                className={`w-full h-full object-contain ${logo.images.length > 0 ? 'group-hover:scale-105 transition-transform duration-500' : ''}`}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="hidden font-medium text-gray-400 z-10 text-center">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL OVERLAY */}
      {selectedLogo && (
        <div 
          className="fixed inset-0 z-50 flex justify-center bg-black/90 backdrop-blur-md overflow-y-auto animate-in fade-in duration-300"
          onClick={() => setSelectedLogo(null)}
        >
          <button 
            onClick={() => setSelectedLogo(null)}
            className="fixed top-6 right-6 md:top-10 md:right-10 z-[60] bg-white/10 hover:bg-white/20 p-3 rounded-full text-white backdrop-blur-lg transition-colors cursor-pointer"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>

          <div 
            className="relative w-full max-w-5xl my-12 md:my-24 mx-4 md:mx-auto flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedLogo.images.map((imgSrc, index) => (
              <img 
                key={index} 
                src={imgSrc} 
                alt={`${selectedLogo.name} showcase ${index + 1}`}
                className="w-full h-auto block"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
