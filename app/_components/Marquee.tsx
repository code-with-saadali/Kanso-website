'use client';

import Image from "next/image";
import { useRef, useEffect } from "react";

const logos = [
  { id: 1, src: "https://ik.imagekit.io/msmrd69gi/knos%20website/lBk7MKclfzJRlatPc13MvYtptk.svg", alt: "logo 1" },
  { id: 2, src: "https://ik.imagekit.io/msmrd69gi/knos%20website/8wpt2H14XHcb4yoW182iK0MGxs.svg", alt: "logo 2" },
  { id: 4, src: "https://ik.imagekit.io/msmrd69gi/knos%20website/C8vnHs7e8IbLZooep0gNip6eylU.svg", alt: "logo 3" },
  { id: 5, src: "https://ik.imagekit.io/msmrd69gi/knos%20website/OHfziRjK2HdoOgrAXlPXc55VYQ.svg", alt: "logo 4" },
  { id: 6, src: "https://ik.imagekit.io/msmrd69gi/knos%20website/KNj9BRJvdrtCaYx5m7um7EmT8.svg", alt: "logo 5" },
  { id: 7, src: "https://ik.imagekit.io/msmrd69gi/knos%20website/jqmWIOA4WlrHoWQKgzTtrOgybg.svg", alt: "logo 6" },
];

export default function Marquee() {
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

  const items = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="w-full py-5 md:flex items-center justify-between mt-10">

      <div className="md:w-[80%] overflow-hidden relative">

        {/* Left fade */}
        <div
          className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, white 0%, transparent 100%)" }}
        />

        {/* Right fade */}
        <div
          className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, white 0%, transparent 100%)" }}
        />

        <div
          ref={trackRef}
          className="flex items-center gap-16 w-max will-change-transform"
        >
          {items.map((logo, i) => (
            <Image
              key={i}
              src={logo.src}
              alt={logo.alt}
              width={50}
                height={50}
              className="h-7 w-auto object-contain grayscale hover:opacity-90 hover:grayscale-0 transition-all duration-300 shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Rating - right side */}
      <div className="flex flex-col items-end text-sm text-gray-600 whitespace-nowrap shrink-0 mt-10 md:mt-0">
        <div className="flex items-center gap-0.5 text-gray-500 text-sm">
          {"★★★★★"}
          <span className="ml-1 text-gray-500 font-medium">4.9/5</span>
        </div>
        <span className="text-gray-600">
          Trusted by <span className="font-bold text-gray-500">100+</span> businesses
        </span>
      </div>

    </div>
  );
}