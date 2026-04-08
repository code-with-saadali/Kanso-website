'use client';
import { useState } from "react";
import Image from "next/image";
import { FiPlus, FiX } from "react-icons/fi";

const services = [
  {
    id: "01",
    title: "Brand Identity",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800",
    description:
      "We craft cohesive brand systems that clearly express your identity, aligning visuals, voice, and strategy to create a strong and memorable presence.",
    tags: [
      "Logo Design",
      "Visual Identity",
      "Brand Guidelines",
      "Typography",
      "Brand Strategy",
      "Color Systems",
    ],
  },
  {
    id: "02",
    title: "Digital Design",
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=800",
    description:
      "We design modern digital experiences that are visually engaging and user-friendly, helping brands connect effectively across web and mobile platforms.",
    tags: [
      "UI Design",
      "UX Strategy",
      "Web Design",
      "Mobile Design",
      "Prototyping",
      "Interaction Design",
    ],
  },
  {
    id: "03",
    title: "Art Direction",
    img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=800",
    description:
      "We guide creative direction to ensure consistent and impactful visuals, shaping campaigns and storytelling that align perfectly with your brand vision.",
    tags: [
      "Creative Direction",
      "Campaign Design",
      "Photography",
      "Visual Storytelling",
      "Concept Development",
    ],
  },
  {
    id: "04",
    title: "Strategy & Consulting",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800",
    description:
      "We provide strategic insights and consulting to help brands grow, focusing on positioning, planning, and decision-making for long-term success.",
    tags: [
      "Business Strategy",
      "Brand Positioning",
      "Market Research",
      "Growth Planning",
      "Consulting",
      "Data Insights",
    ],
  },
];

export default function Services() {
  const [active, setActive] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="bg-[#121212] text-white rounded-2xl py-12 md:py-20">
      <div className="w-full px-6 md:px-12 lg:px-20">
        <p className="text-gray-400 mb-8 md:mb-16">/Services</p>

        {services.map((item, index) => {
          const isActive = active === index;
          const isHovered = hovered === index;
          const showImage = isHovered || isActive;

          return (
            <div key={index}>
              {/* TOP ROW - now flex-row on all screens */}
              <div
                onClick={() => toggle(index)}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className="flex flex-row items-center justify-between cursor-pointer py-4"
              >
                {/* LEFT SIDE: Title + Image (image only desktop) */}
                <div className="relative flex-1">
                  {/* Desktop-only image */}
                  <div
                    className={`absolute left-0 top-1/2 -translate-y-1/2 overflow-hidden rounded-xl shadow-2xl
                      transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]
                      hidden md:block
                      ${
                        showImage
                          ? "w-30 opacity-100 translate-x-0"
                          : "w-0 opacity-0 -translate-x-6"
                      }`}
                  >
                    <Image
                      src={item.img}
                      alt=""
                      width={120}
                      height={80}
                      className="w-30 h-16 object-cover"
                    />
                  </div>

                  {/* Title */}
                  <h2
                    className={`text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-semibold tracking-tighter transition-all duration-700
                      ${showImage ? "md:pl-35" : "pl-0"}`}
                  >
                    {item.title}
                  </h2>
                </div>

                {/* RIGHT SIDE: ID / Icon - fixed width for alignment */}
                <div className="relative w-12 md:w-20 h-10 md:h-14 flex items-center justify-end overflow-hidden ml-4">
                  {/* ID number */}
                  <span
                    className={`absolute text-2xl sm:text-3xl md:text-5xl transition-all duration-500
                      ${
                        isHovered || isActive
                          ? "translate-x-10 opacity-0"
                          : "translate-x-0 opacity-100"
                      }`}
                  >
                    {item.id}
                  </span>

                  {/* Icon (Plus/X) */}
                  <span
                    className={`absolute text-2xl sm:text-3xl md:text-5xl transition-all duration-500
                      ${
                        isHovered || isActive
                          ? "translate-x-0 opacity-100"
                          : "translate-x-10 opacity-0"
                      }`}
                  >
                    {isActive ? <FiX /> : <FiPlus />}
                  </span>
                </div>
              </div>

              {/* EXPANDED CONTENT */}
              <div
                className={`transition-all duration-500 overflow-hidden ${
                  isActive ? "max-h-125 md:max-h-100 mt-4 md:mt-8 pb-4 md:pb-6" : "max-h-0"
                }`}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 md:gap-8">
                  <div className="max-w-2xl">
                    <p className="text-gray-400 text-sm md:text-base">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 md:gap-3 max-w-md">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-gray-200 text-black px-3 py-1 rounded-full text-xs md:text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <div className="mt-8 md:mt-12">
          <button className="bg-white text-black px-6 py-3 rounded-full text-sm md:text-base hover:bg-gray-200 transition">
            See pricing +
          </button>
        </div>
      </div>
    </section>
  );
}