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

      const progress = 1 - (windowHeight - rect.top) / (windowHeight + rect.height);
      const clampedProgress = Math.min(Math.max(progress, 0), 1);

      const scale = 1 + clampedProgress * 0.3;
      imgRef.current.style.transform = `scale(${scale})`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='w-full py-10'>
      <div
        ref={containerRef}
        className='w-full rounded-2xl overflow-hidden relative h-[50vh] md:h-[150vh]'
      >
        <div
          ref={imgRef}
          className='absolute inset-0 w-full h-full will-change-transform origin-center'
          style={{ transition: 'transform 0.05s linear' }}
        >
          <Image
            src="https://ik.imagekit.io/msmrd69gi/knos%20website/yZoMvO0TESoI9cPhJlOtjaAmD4.avif"
            alt="Girl standing facing left"
            fill
            className='object-cover object-center h-full'
            unoptimized
            
          />
        </div>
      </div>
    </div>
  );
}