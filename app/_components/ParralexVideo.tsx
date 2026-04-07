"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export default function ParallaxVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !videoRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = 1 - (windowHeight - rect.top) / (windowHeight + rect.height);
      const clampedProgress = Math.min(Math.max(progress, 0), 1);
      const scale = 1 + clampedProgress * 0.3;
      videoRef.current.style.transform = `scale(${scale})`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePlay = () => {
    if (!videoRef.current || isPlaying || isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      videoRef.current?.play();
      setIsPlaying(true);
      setIsAnimating(false);
    }, 700);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <div className="w-full py-10">
      <div
        ref={containerRef}
        className="w-full rounded-2xl overflow-hidden relative h-[50vh] md:h-screen"
        onMouseEnter={() => !isPlaying && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Thumbnail */}
        {!isPlaying && (
          <div className="absolute inset-0 z-20">
            {/* Image wrapper — zoom & blur yahan lagta hai */}
            <div
              className="absolute inset-0"
              style={{
                transform: isHovered ? "scale(1.08)" : "scale(1)",
                filter: isHovered ? "blur(4px)" : "blur(0px)",
                transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), filter 0.6s ease",
                willChange: "transform, filter",
              }}
            >
              <Image
                fill
                src="https://ik.imagekit.io/msmrd69gi/knos%20website/odKNp3OTJYMqGyFEXtwVCKxMt90.avif"
                alt="thumbnail"
                className="object-cover"
                priority
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />
          </div>
        )}

        {/* Play / Close Button */}
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none">
          <div
            onClick={isPlaying ? handleClose : handlePlay}
            className="pointer-events-auto cursor-pointer flex flex-col items-center gap-3"
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center relative overflow-hidden">
              {/* Play Icon */}
              <div
                style={{
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transform: isAnimating || isPlaying ? "translateY(-120%)" : "translateY(0%)",
                  opacity: isAnimating || isPlaying ? 0 : 1,
                  transition: "transform 0.65s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#111">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </div>

              {/* Close Icon */}
              <div
                style={{
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transform: isPlaying ? "translateY(0%)" : "translateY(120%)",
                  opacity: isPlaying ? 1 : 0,
                  transition: "transform 0.65s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease",
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#111"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
            </div>

            {/* Label */}
            <p
              className="text-white font-bold tracking-tighter text-2xl"
              style={{
                opacity: isAnimating || isPlaying ? 0 : 1,
                transform: isAnimating || isPlaying ? "translateY(-10px)" : "translateY(0px)",
                transition: "opacity 0.4s ease, transform 0.4s ease",
              }}
            >
              Play Showreel
            </p>
          </div>
        </div>

        {/* Video */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          loop
          playsInline
        >
          <source
            src="https://ik.imagekit.io/msmrd69gi/knos%20website/WTlkXKzdamz9CHg4Zff3i7XC48.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}