"use client";
import { useEffect, useRef } from "react";

export default function DirectionalCursor() {
  const cursorRef = useRef(null);
  const arrowRef = useRef(null);
  const handRef = useRef(null);

  useEffect(() => {
    let rafId;
    let initialized = false;
    let isHand = false;
    let isVisible = false;

    const mouse = { x: -100, y: -100 };
    const pos = { x: -100, y: -100 };
    const prev = { x: -100, y: -100 };
    let angle = 0;
    let targetAngle = 0;

    const hideCursor = () => {
      isVisible = false;
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "0";
      }
    };

    const showCursor = (x, y) => {
      mouse.x = x;
      mouse.y = y;
      if (!isVisible) {
        pos.x = x;
        pos.y = y;
        prev.x = x;
        prev.y = y;
        isVisible = true;
      }
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "1";
      }
    };

    const onMouseMove = (e) => {
      // Snap position immediately on first move or whenever returning to the viewport
      if (!initialized || !isVisible) {
        pos.x = e.clientX;
        pos.y = e.clientY;
        prev.x = e.clientX;
        prev.y = e.clientY;
        initialized = true;
        isVisible = true;
        if (cursorRef.current) {
          cursorRef.current.style.opacity = "1";
          cursorRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%) rotate(${angle}deg)`;
        }
      }

      mouse.x = e.clientX;
      mouse.y = e.clientY;

      const target = e.target;
      const clickable = Boolean(
        target &&
          target.closest &&
          target.closest('a, button, [role="button"], input, textarea, select, [data-cursor="hand"]')
      );

      if (clickable !== isHand) {
        isHand = clickable;
        if (arrowRef.current && handRef.current) {
          arrowRef.current.style.opacity = isHand ? "0" : "1";
          arrowRef.current.style.transform = isHand ? "scale(0.5)" : "scale(1)";
          handRef.current.style.opacity = isHand ? "1" : "0";
          handRef.current.style.transform = isHand ? "scale(1)" : "scale(0.5)";
        }
      }
    };

    const onMouseEnter = (e) => {
      showCursor(e.clientX, e.clientY);
    };

    const onMouseLeave = () => {
      hideCursor();
    };

    const onMouseOut = (e) => {
      // If mouse leaves the document/window entirely
      if (!e.relatedTarget && !e.toElement) {
        hideCursor();
      }
    };

    const onWindowBlur = () => {
      hideCursor();
    };

    const onVisibilityChange = () => {
      if (document.hidden) {
        hideCursor();
      }
    };

    const animate = () => {
      if (initialized && isVisible) {
        pos.x += (mouse.x - pos.x) * 0.35;
        pos.y += (mouse.y - pos.y) * 0.35;

        const dx = pos.x - prev.x;
        const dy = pos.y - prev.y;
        const speed = Math.hypot(dx, dy);

        if (speed > 0.6) {
          const rawAngle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
          let diff = rawAngle - targetAngle;
          diff = ((diff + 540) % 360) - 180;
          targetAngle += diff;
        }

        prev.x = pos.x;
        prev.y = pos.y;

        // Smoothly return upright (0deg) when showing pointer hand on hover
        const desiredAngle = isHand ? 0 : targetAngle;
        let angleDiff = desiredAngle - angle;
        angleDiff = ((angleDiff + 540) % 360) - 180;
        angle += angleDiff * 0.22;

        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%) rotate(${angle}deg)`;
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseout", onMouseOut);
    window.addEventListener("blur", onWindowBlur);
    document.addEventListener("visibilitychange", onVisibilityChange);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("blur", onWindowBlur);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      cancelAnimationFrame(rafId);
    };
  }, []); // Empty dependency array so it NEVER resets to top-left on hover!

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      style={{ opacity: 0 }}
      className="fixed top-0 left-0 pointer-events-none z-[99999] hidden md:block w-[27px] h-[27px] will-change-transform transition-opacity duration-100 ease-out"
    >
      {/* Arrow Cursor SVG from creativeatishay.in */}
      <svg
        ref={arrowRef}
        width="25"
        height="27"
        viewBox="0 0 50 54"
        fill="none"
        className="absolute inset-0 transition-all duration-150 ease-out"
        style={{ opacity: 1, transform: "scale(1)" }}
      >
        <path
          d="M42.6817 41.1495L27.5103 6.79925C26.7269 5.02557 24.2082 5.02558 23.3927 6.79925L7.59814 41.1495C6.75833 42.9759 8.52712 44.8902 10.4125 44.1954L24.3757 39.0496C24.8829 38.8627 25.4385 38.8627 25.9422 39.0496L39.8121 44.1954C41.6849 44.8902 43.4884 42.9759 42.6817 41.1495Z"
          fill="#FFFFFF"
          stroke="#18181B"
          strokeWidth="4.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>

      {/* Hand Cursor SVG from creativeatishay.in */}
      <svg
        ref={handRef}
        width="27"
        height="27"
        viewBox="0 0 54 54"
        fill="none"
        className="absolute inset-0 transition-all duration-150 ease-out"
        style={{ opacity: 0, transform: "scale(0.5)" }}
      >
        <path
          d="M20.5 31V10.5C20.5 6.5 23 4 26 4C29 4 31.5 6.5 31.5 10.5V22V15C31.5 11.5 34 9.5 37 9.5C40 9.5 42 12 42 15.5V24V18C42 14.5 44.5 12.5 47.5 12.5C50.5 12.5 51.5 15 51.5 18.5V33C51.5 45 43 52 32 52H28C21.5 52 17 48.5 13 44L4.5 34.5C1.5 31 2 27.5 4.5 25C7 22.5 10.5 23 13 25.5L20.5 33Z"
          fill="#FFFFFF"
          stroke="#18181B"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
