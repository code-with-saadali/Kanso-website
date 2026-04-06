'use client';

import { useRef, useEffect } from "react";

const stats = [
  { value: "97%", label: "Customer satisfaction rate" },
  { value: "6", label: "Industry awards" },
  { value: "15+", label: "Years of Experience" },
  { value: "140+", label: "Projects completed" },
  { value: "100%", label: "Client retention rate" },
  { value: "50+", label: "Global clients" },
];

export default function AboutMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const rafRef = useRef<number>(0);
  const speed = 0.5;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animate = () => {
      posRef.current -= speed;
      const halfWidth = track.scrollWidth / 3;
      if (Math.abs(posRef.current) >= halfWidth) {
        posRef.current = 0;
      }
      track.style.transform = `translateX(${posRef.current}px)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const items = [...stats, ...stats, ...stats];

  return (
    <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-10 md:pb-20">

      {/* Marquee */}
      <div className="w-full md:w-[70%] overflow-hidden relative">

        {/* Left fade */}
        <div
          className="absolute left-0 top-0 h-full w-12 md:w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, white 0%, transparent 100%)" }}
        />

        {/* Right fade */}
        <div
          className="absolute right-0 top-0 h-full w-12 md:w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, white 0%, transparent 100%)" }}
        />

        <div
          ref={trackRef}
          className="flex items-center w-max will-change-transform"
        >
          {items.map((stat, i) => (
            <div key={i} className="flex items-center shrink-0">
              <div className="flex items-center gap-2 px-4 md:px-6 whitespace-nowrap">
                <span className="text-xs md:text-sm font-bold text-black">{stat.value}</span>
                <span className="text-xs md:text-sm text-gray-500">{stat.label}</span>
              </div>
              <span className="text-gray-300 text-xs md:text-sm">/</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right side text */}
      <div className="w-full md:max-w-fit md:text-right shrink-0">
        <p className="text-base md:text-lg tracking-tighter font-medium text-gray-500">
          Our studio is dedicated to crafting clean,
          <span className="hidden md:inline"><br /></span>
          purposeful solutions that cut through the noise.
        </p>
      </div>

    </div>
  );
}