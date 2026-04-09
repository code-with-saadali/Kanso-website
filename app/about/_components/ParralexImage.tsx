'use client';

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

export default function ParralexImage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !imgRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // ✅ Better progress calculation
      const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
      const clamped = Math.min(Math.max(progress, 0), 1);

      // ✅ Smooth subtle scale
      const scale = 1 + clamped * 0.15;

      // ✅ Apply transform
      imgRef.current.style.transform = `scale(${scale})`;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full pb-10">
      <div
        ref={containerRef}
        className="w-full rounded-2xl overflow-hidden relative h-[50vh] md:h-[110vh]"
      >
        <div
          ref={imgRef}
          className="absolute inset-0 w-full h-full will-change-transform"
        >
          <Image
            src="https://ik.imagekit.io/msmrd69gi/knos%20website/TMqCbFVuCQWlKzmUxU1awaFe2c.avif"
            alt="Parallax Image"
            fill
            priority
            className="object-cover object-[center_30%]"
          />
        </div>
      </div>
    </div>
  );
}
