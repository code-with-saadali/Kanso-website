"use client";
import React from "react";
import Image from "next/image";

const blogs = [
  {
    id: 1,
    type: "featured",
    date: "May 30, 2025",
    title: "The Power of Restraint in Design",
    desc: "A look at how simplicity can sharpen communication, increase impact, and build longer-lasting brands.",
    category: "Insights",
    img: "https://ik.imagekit.io/msmrd69gi/knos%20website/nFFMNvNEwawVJslX5P3JgXi3X14.avif",
  },
  {
    id: 2,
    type: "small",
    date: "May 23, 2025",
    title: "Designing for Calm: UX Beyond the Screen",
    desc: "An exploration of how subtle interaction, whitespace, and visual pacing shape user emotion.",
    category: "Digital Design",
    img: "https://ik.imagekit.io/msmrd69gi/knos%20website/7NCgExUfktOfpVeWQDFDsDJXcM.avif",
  },
  {
    id: 3,
    type: "small",
    date: "May 16, 2025",
    title: "Building a Timeless Identity",
    desc: "A guide to creating brands that transcend trends, focusing on core values instead.",
    category: "Strategy",
    img: "https://ik.imagekit.io/msmrd69gi/knos%20website/wzvqfJrBym57z3jVoVkRodw.avif",
  },
];

export default function Blog() {
  return (
    <section className="py-10 lg:py-14">

      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-black font-medium tracking-tighter mb-3">/ Blog</p>
        <span className="text-sm text-gray-400">(09)</span>
      </div>

      <h1 className="text-[32px] sm:text-[40px] lg:text-[55px] font-medium leading-tighter tracking-tighter text-black">
        Latest insights from our blog.
      </h1>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-[#757575] font-medium mt-4 tracking-tighter">
          Thoughts, ideas, and perspectives on{" "}
          <br className="hidden sm:block" />
          design, simplicity, and creative process.
        </p>

        <button className="text-sm w-fit bg-gray-100 hover:bg-gray-200 transition border border-gray-200 text-gray-600 px-5 py-2.5 rounded-full">
          View all articles +
        </button>
      </div>

      {/* Blog Layout */}
      <div className="flex flex-col lg:flex-row gap-6 mt-10 lg:mt-14">

        {/* Featured */}
        {blogs
          .filter((item) => item.type === "featured")
          .map((item) => (
            <div key={item.id} className="w-full lg:w-[50%] group cursor-pointer">
              <div className="bg-[#EBEBEB] group-hover:bg-black p-2 rounded-[20px] transition-colors duration-600">
                <div className="relative rounded-[18px] overflow-hidden h-75 sm:h-100 lg:h-125">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-600 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/30 via-black/15 to-transparent" />

                  <div className="absolute bottom-5 left-4 right-4 text-white">
                    <p className="text-sm tracking-tighter font-medium text-white/60 mb-2">
                      {item.date}
                    </p>
                    <h2 className="text-lg tracking-tighter font-semibold">
                      {item.title}
                    </h2>
                    <p className="text-sm text-white/90 mt-2 max-w-sm">
                      {item.desc}
                    </p>
                  </div>

                  <span className="absolute top-4 right-4 text-sm bg-[#EBEBEB] text-black px-4 py-1.5 tracking-tight rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}

        {/* Small Cards */}
        <div className="w-full lg:w-[50%] grid sm:grid-cols-2 gap-6">
          {blogs
            .filter((item) => item.type === "small")
            .map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="bg-[#EBEBEB] group-hover:bg-black p-2 rounded-[20px] transition-colors duration-600">
                  <div className="relative w-full h-48 sm:h-56 rounded-[18px] overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-600 group-hover:scale-105"
                    />
                     <span className="absolute top-4 right-4 text-sm bg-[#EBEBEB] text-black px-4 py-1.5 tracking-tight rounded-full">
                    {item.category}
                  </span>
                  </div>
                </div>

                <div className="pl-1 pt-4">
                  <p className="text-sm tracking-tighter font-medium text-gray-500 mb-2">
                      {item.date}
                    </p>
                  <h3 className="text-lg tracking-tighter font-semibold text-black">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 tracking-tighter">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
        </div>

      </div>
    </section>
  );
}
