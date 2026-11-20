"use client";
import { useState, useEffect } from "react";

/**
 * Renders a mailto link built client-side to prevent static scraping.
 * Usage: <EmailLink className="...">hello@bineet.in</EmailLink>
 */
export default function EmailLink({ className = "", label, children, ...props }) {
  const [href, setHref] = useState("#");

  useEffect(() => {
    const user = "hello";
    const domain = "bineet.in";
    setHref(`mailto:${user}@${domain}`);
  }, []);

  const handleClick = () => {
    const user = "hello";
    const domain = "bineet.in";
    const mailto = `mailto:${user}@${domain}`;
    if (href !== mailto) {
      setHref(mailto);
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className} {...props}>
      {children || label || "hello@bineet.in"}
    </a>
  );
}
