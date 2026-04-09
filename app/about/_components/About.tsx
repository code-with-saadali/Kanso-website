"use client";

import { useRef, useEffect } from "react";

const stats = [
  "100+ Customer satisfaction rate",
  "97% Customer satisfaction rate",
  "6 Industry awards",
  "15+ Years of Experience",
  "140+ Projects completed",
  "100+ Customer satisfaction rate",
];

export default function About() {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const speed = 0.5;

    const animate = () => {
      posRef.current -= speed;

      const width = track.scrollWidth / 2;
      if (Math.abs(posRef.current) >= width) {
        posRef.current = 0;
      }

      track.style.transform = `translateX(${posRef.current}px)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const items = [...stats, ...stats];

  return (
    <section className="text-black pt-28 pb-5">

      {/* 🔥 TOP */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">

        {/* HUGE TITLE */}
        <h1 className="text-[18vw] md:text-[12vw] font-semibold tracking-tighter leading-[0.9]">
          About us.
        </h1>

        {/* RIGHT TEXT */}
        <p className="max-w-md text-gray-500 text-sm md:text-lg tracking-tighter md:mt-24">
          We&apos;re a design studio rooted in the belief that simplicity
          creates the strongest impact.
        </p>
      </div>

      {/* 🔥 BOTTOM */}
      <div className="mt-20 flex flex-col md:flex-row md:items-end md:justify-between gap-10">

        {/* MARQUEE */}
        <div className="relative w-full md:w-[85%] overflow-hidden">

          {/* Fade left */}
          <div className="absolute left-0 top-0 h-full w-16 bg-linear-to-r from-[#f5f5f5] to-transparent z-10" />

          {/* Fade right */}
          <div className="absolute right-0 top-0 h-full w-16 bg-linear-to-l from-[#f5f5f5] to-transparent z-10" />

          <div
            ref={trackRef}
            className="flex w-max items-center"
          >
            {items.map((item, i) => (
              <div key={i} className="flex items-center shrink-0">
                <p className="px-6 text-sm md:text-base text-gray-600 whitespace-nowrap">
                  {item}
                </p>
                <span className="text-gray-400">/</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT BOTTOM */}
        <div className="text-right text-[16px] text-gray-600 shrink-0 tracking-tighter font-medium">
          <p>2010–2025</p>
          <p className="font-medium text-black">© Kanso Studio</p>
        </div>

      </div>
    </section>
  );
}
