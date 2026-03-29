"use client";

import { useEffect, useRef } from "react";

export default function CursorSpotlight() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = spotlightRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
      el.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      el.style.opacity = "0";
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="pointer-events-none fixed z-30 opacity-0 transition-opacity duration-300"
      style={{
        width: "600px",
        height: "600px",
        transform: "translate(-50%, -50%)",
        background:
          "radial-gradient(circle at center, rgba(6,182,212,0.07) 0%, rgba(168,85,247,0.04) 35%, transparent 70%)",
        borderRadius: "50%",
      }}
    />
  );
}
