"use client";
import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    let lenisInstance = null;
    let rafId = null;

    const initLenis = () => {
      if (window.Lenis) {
        lenisInstance = new window.Lenis({
          duration: 1.15,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          wheelMultiplier: 0.95,
          touchMultiplier: 1.5,
        });

        const raf = (time) => {
          lenisInstance.raf(time);
          rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);
      }
    };

    if (window.Lenis) {
      initLenis();
    } else {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/lenis@1.1.20/dist/lenis.min.js";
      script.async = true;
      script.onload = initLenis;
      document.head.appendChild(script);
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenisInstance) lenisInstance.destroy();
    };
  }, []);

  return null;
}
