"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/app/_components/Blogdata";

export default function Blog() {
  return (
    <section className="py-20 lg:py-34">

      {/* Header */}
      <div className="md:flex items-center justify-between mb-10 md:mb-20">
        <h1 className="text-[80px] md:text-[120px] lg:text-[190px] font-semibold leading-none tracking-tighter text-black">
          Blog.
        </h1>
        <p className="text-lg text-[#888] tracking-tighter text-right pt-20 font-medium leading-tight">
          Thoughts, ideas, and perspectives on<br />
          design, simplicity, and creative process.
        </p>
      </div>

      {/* Grid Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5 mb-4">
        {blogs.slice(0, 3).map((item) => (
          <BlogCard key={item.id} item={item} />
        ))}
      </div>

      {/* Grid Row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.slice(3, 6).map((item) => (
          <BlogCard key={item.id} item={item} />
        ))}
      </div>

    </section>
  );
}

type BlogItem = {
  id: number;
  slug: string;
  date: string;
  title: string;
  desc: string;
  category: string;
  writer: string;
  img: string;
};

function BlogCard({ item }: { item: BlogItem }) {
  return (
    <Link href={`/blog/${item.slug}`} className="group cursor-pointer block">
      {/* Hover wrapper — grey to black */}
      <div className="bg-[#EBEBEB] group-hover:bg-black p-1.5 rounded-2xl transition-colors duration-600">
        {/* Image */}
        <div className="relative h-87.5 rounded-xl overflow-hidden">
          <Image
            src={item.img}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Badge */}
          <span className="absolute top-3 right-3 bg-[#EBEBEB] text-black text-xs px-3.5 py-1.5 rounded-full">
            {item.category}
          </span>
        </div>
      </div>

      {/* Meta */}
      <div className="pt-3.5 px-0.5">
        <p className="text-gray-500 text-sm font-medium mb-1.5 tracking-tight">{item.date}</p>
        <h2 className="text-lg font-semibold tracking-tighter text-black leading-snug mb-1.5">
          {item.title}
        </h2>
        <p className="text-sm text-[#777] tracking-tighter max-w-sm font-medium">
          {item.desc}
        </p>
      </div>
    </Link>
  );
}