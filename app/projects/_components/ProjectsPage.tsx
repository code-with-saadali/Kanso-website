"use client";

import { projects } from "@/app/_components/Projectsdata";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


const filters = [
  "All projects",
  "Art Direction",
  "Strategy",
  "Digital Design",
  "Brand Identity",
  "Web design",
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All projects");

  const filtered =
    activeFilter === "All projects"
      ? projects
      : projects.filter((p) => p.tag === activeFilter);

  return (
    <div className="py-20">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-10">
        <h1 className="text-6xl sm:text-7xl md:text-[11rem] font-semibold tracking-tighter">
          Projects.
        </h1>
        <p className="text-gray-500 max-w-md text-right font-medium tracking-tighter self-end md:self-start md:mt-32">
          A curated selection of projects that reflect our commitment to
          simplicity and purposeful design.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-x-4 gap-y-2 mb-8 border-b border-gray-200 pb-4">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`tracking-tighter transition-colors duration-200 cursor-pointer ${
              activeFilter === filter
                ? "text-black font-semibold"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            / {filter}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {filtered.map((item) => (
          <Link
            key={item.id}
            href={`/projects/${item.slug}`}
            className="bg-[#EBEBEB] rounded-2xl p-2 cursor-pointer group transition-all duration-600 hover:bg-black will-change-transform block"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-xl">
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={600}
                className="w-full h-80 sm:h-95 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="flex justify-between items-center mt-4 px-1 pb-1">
              {/* Left */}
              <div>
                {/* Title */}
                <div className="relative overflow-hidden h-6">
                  <span className="block font-semibold tracking-tighter text-black transition-transform duration-400 group-hover:-translate-y-full">
                    {item.title}
                  </span>
                  <span className="absolute top-full left-0 block font-semibold tracking-tighter text-white transition-transform duration-400 group-hover:-translate-y-full">
                    {item.title}
                  </span>
                </div>
                {/* Category */}
                <div className="relative overflow-hidden h-5 mt-1">
                  <span className="block text-sm text-gray-500 tracking-tighter transition-transform duration-400 group-hover:-translate-y-full">
                    {item.category}
                  </span>
                  <span className="absolute top-full left-0 block text-sm tracking-tighter text-gray-300 transition-transform duration-400 group-hover:-translate-y-full">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Year */}
              <div className="relative overflow-hidden h-5">
                <span className="block text-sm text-gray-500 tracking-tighter transition-transform duration-400 group-hover:-translate-y-full">
                  {item.year}
                </span>
                <span className="absolute top-full left-0 block text-sm tracking-tighter text-gray-300 transition-transform duration-400 group-hover:-translate-y-full">
                  {item.year}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}