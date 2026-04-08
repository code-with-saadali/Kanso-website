'use client';
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Emma V.",
    role: "Founder",
    text: "Working with Kanso felt effortless. They have a rare ability to take complex ideas and distill them into something beautifully simple. The entire process was smooth, collaborative, and exceeded our expectations.",
    rating: "4.5/5",
    img: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Julian M.",
    role: "Creative Director",
    text: "Kanso doesn’t just design — they listen, interpret, and then create with precision. Their attention to detail and ability to understand brand vision is honestly on another level.",
    rating: "4.8/5",
    img: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Sofia L.",
    role: "Founder",
    text: "Minimal, timeless, and sharp. That’s how I’d describe both their process and their output. Every deliverable felt intentional and perfectly aligned with our brand identity.",
    rating: "5/5",
    img: "https://i.pravatar.cc/100?img=3",
  },
  {
    name: "Daniel R.",
    role: "Product Manager",
    text: "Their attention to detail and user experience is unmatched. They helped us rethink our product design in a way that significantly improved usability and engagement.",
    rating: "4.7/5",
    img: "https://i.pravatar.cc/100?img=4",
  },
  {
    name: "Ayesha K.",
    role: "Startup Owner",
    text: "They turned our vision into reality with elegance and precision. The team was responsive, creative, and deeply invested in delivering the best possible outcome.",
    rating: "4.9/5",
    img: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "Michael B.",
    role: "CEO",
    text: "Professional, creative, and incredibly reliable. Working with them felt like having an in-house design team that truly understands business goals.",
    rating: "5/5",
    img: "https://i.pravatar.cc/100?img=6",
  },
  {
    name: "Hassan A.",
    role: "Marketing Lead",
    text: "From concept to execution, everything was handled flawlessly. Our brand now looks more premium and consistent across all platforms.",
    rating: "4.6/5",
    img: "https://i.pravatar.cc/100?img=7",
  },
  {
    name: "Sara N.",
    role: "UI/UX Designer",
    text: "As a designer myself, I was genuinely impressed by their process. Clean, structured, and highly creative work that stands out.",
    rating: "4.9/5",
    img: "https://i.pravatar.cc/100?img=8",
  },
];

export default function Testimonials() {
  const [cardsPerView, setCardsPerView] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width < 768) setCardsPerView(1);
      else if (width < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const totalPages = Math.ceil(testimonials.length / cardsPerView);

  const scrollToPage = (page: number) => {
    if (!sliderRef.current) return;
    const cardWidth = sliderRef.current.children[0]?.clientWidth || 0;
    const gap = 16; // gap-4 = 16px
    const scrollAmount = page * (cardWidth + gap);
    sliderRef.current.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
    setCurrentPage(page);
  };

  const nextSlide = () => {
    if (currentPage < totalPages - 1) {
      scrollToPage(currentPage + 1);
    }
  };

  const prevSlide = () => {
    if (currentPage > 0) {
      scrollToPage(currentPage - 1);
    }
  };

  // Update current page based on scroll position
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const cardWidth = slider.children[0]?.clientWidth || 0;
      const gap = 16;
      const scrollLeft = slider.scrollLeft;
      const newPage = Math.round(scrollLeft / (cardWidth + gap));
      if (newPage !== currentPage) setCurrentPage(newPage);
    };

    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, [currentPage, cardsPerView]);

  return (
    <section className="bg-[#141414] text-white px-5 md:px-20 pt-20 md:pt-28 pb-10 rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-start md:items-center mb-8 md:mb-12">
        <div>
          <p className="mb-3 md:mb-5 text-sm md:text-base font-medium tracking-tighter">
            /Testimonials
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-[55px] tracking-tighter font-semibold leading-tight">
            Success stories from our clients.
          </h2>
        </div>
        <span className="text-gray-500 text-sm md:text-base">(08)</span>
      </div>

      {/* Scroll‑snap slider */}
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {testimonials.map((item, i) => (
          <div
            key={i}
            className={`snap-start shrink-0 ${
              cardsPerView === 1
                ? "w-full"
                : cardsPerView === 2
                ? "w-[calc((100%-16px)/2)]"
                : "w-[calc((100%-32px)/3)]"
            } bg-[#111] p-6 rounded-xl flex flex-col justify-between min-h-70 md:min-h-75`}
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <div className="text-yellow-400 text-lg">★★★★★</div>
                <span className="text-gray-400 text-sm">{item.rating}</span>
              </div>
              <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                &quot;{item.text}&quot;
              </p>
            </div>
            <div className="flex items-center gap-3 mt-8 pt-4 ">
              <Image
                src={item.img}
                alt={item.name}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div>
                <h4 className="text-sm font-semibold">{item.name}</h4>
                <p className="text-gray-400 text-xs">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows + Pagination */}
      <div className="flex justify-between items-center mt-8">
        <div className="text-gray-500 text-sm">
          {currentPage + 1} / {totalPages}
        </div>
        <div className="flex gap-3">
          <button
            onClick={prevSlide}
            disabled={currentPage === 0}
            className="w-10 h-10 rounded-full cursor-pointer bg-[#1a1a1a] hover:bg-[#2a2a2a] disabled:opacity-30 disabled:cursor-not-allowed transition flex items-center justify-center text-2xl"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            disabled={currentPage >= totalPages - 1}
            className="w-10 h-10 rounded-full cursor-pointer bg-[#1a1a1a] hover:bg-[#2a2a2a] disabled:opacity-30 disabled:cursor-not-allowed transition flex items-center justify-center text-2xl"
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}