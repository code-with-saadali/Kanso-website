import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogs } from "@/app/_components/Blogdata";


type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return notFound();

  const related = blogs.filter((b) => b.slug !== blog.slug).slice(0, 2);

  return (
    <main className="md:max-w-5xl mx-auto px-3 py-14 lg:py-20">

      {/* ── Title & Desc ── */}
      <h1 className="text-[40px] sm:text-[62px] font-medium tracking-tighter text-black mb-5 leading-[1.05]">
        {blog.title}
      </h1>
      <p className="text-gray-600 text-lg tracking-tighter leading-[1.05] mb-10 max-w-md">
        {blog.desc}
      </p>

      {/* ── Meta ── */}
      <div className="flex items-center gap-3 text-[#888] mb-6 flex-wrap">
        <span>
          Date{" "}
          <span className="font-semibold text-black">{blog.date}</span>
        </span>
        <span className="text-[#ccc]">/</span>
        <span>
          Category{" "}
          <span className="font-semibold text-black">{blog.category}</span>
        </span>
        <span className="text-[#ccc]">/</span>
        <span>
          Writer{" "}
          <span className="font-semibold text-black">{blog.writer}</span>
        </span>
      </div>

      {/* ── Hero Image ── */}
      <div className="relative w-full h-85 sm:h-105 rounded-[18px] overflow-hidden mb-16">
        <Image
          src={blog.img}
          alt={blog.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* ── Intro Quote ── */}
      <p className="text-[22px] sm:text-3xl font-bold tracking-tighter leading-snug text-black mb-6">
        {blog.content.intro}
      </p>

      {/* ── Sections ── */}
      <div className="mt-10 space-y-10">
        {blog.content.sections.map((section, i) => (
          <div key={i}>
            <h2 className="text-2xl font-semibold tracking-tighter text-black mb-3">
              {section.heading}
            </h2>
            <div className="space-y-4">
              {section.paragraphs.map((para, j) => (
                <p key={j} className="text-lg text-[#555] tracking-tighter leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── Divider ── */}
      <div className="border-t border-[#eee] my-20" />

      {/* ── Latest Articles ── */}
      <div>
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-[52px] sm:text-[64px] font-bold tracking-tighter leading-none text-black">
              Latest Articles.
            </h2>
            <p className="text-lg text-[#888] tracking-tighter mt-3 leading-sung">
              Thoughts, ideas, and perspectives on<br />
              design, simplicity, and creative process.
            </p>
          </div>
          <div className="flex flex-col items-end justify-between gap-4 pt-1">
            <span className="text-xs text-[#aaa]">© Kanso Studio</span>
            <Link
              href="/blog"
              className="text-sm bg-gray-100 hover:bg-gray-200 transition border border-gray-200 text-gray-600 px-5 py-2.5 rounded-full whitespace-nowrap"
            >
              View all articles +
            </Link>
          </div>
        </div>

        {/* Related Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
          {related.map((item) => (
            <Link
              key={item.id}
              href={`/blog/${item.slug}`}
              className="group cursor-pointer block"
            >
              <div className="bg-[#EBEBEB] group-hover:bg-black p-1.5 rounded-2xl transition-colors duration-600">
                <div className="relative h-87.5 rounded-xl overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                  <span className="absolute top-3 right-3 bg-[#EBEBEB] text-black text-xs px-3.5 py-1.5 rounded-full">
                    {item.category}
                  </span>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-[11px] text-white/60 mb-1">{item.date}</p>
                    <h3 className="text-[14px] font-semibold tracking-tight leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[12px] text-white/80 mt-1 line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </main>
  );
}