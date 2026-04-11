import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/app/_components/Projectsdata";


type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <main className="px-3 md:px-10 min-[1920px]:max-w-7xl mx-auto py-14 lg:py-32">

      {/* ── Header ── */}
      <div className="flex items-start justify-between mb-4">
        <h1 className="text-[64px] sm:text-[80px] lg:text-[96px] font-semibold tracking-tighter leading-none text-black">
          {project.title}.
        </h1>
        <p className="text-lg text-[#888] tracking-tighter font-medium leading-tight text-right max-w-md hidden md:block pt-4">
          {project.overview}
        </p>
      </div>

      {/* ── Meta Row ── */}
      <div className="flex items-center gap-2 text-base font-medium text-[#888] mb-6 flex-wrap">
        <span>
          Studio{" "}
          <span className="font-semibold text-black">{project.tag}</span>
        </span>
        <span className="text-[#ddd]">/</span>
        <span>
          Client{" "}
          <span className="font-semibold text-black">{project.details.client}</span>
        </span>
        <span className="text-[#ddd]">/</span>
        <span>
          Duration{" "}
          <span className="font-semibold text-black">3 months</span>
        </span>
        <span className="text-[#ddd]">/</span>
        <span>
          Year{" "}
          <span className="font-semibold text-black">{project.details.year}</span>
        </span>
        <div className="ml-auto">
          <Link
            href="#"
            className="text-xs bg-gray-100 hover:bg-gray-200 transition border border-gray-200 text-gray-600 px-4 py-1.5 rounded-full"
          >
            Live preview
          </Link>
        </div>
      </div>

      {/* ── Hero Image ── */}
      <div className="relative w-full h-105 sm:h-185 rounded-xl overflow-hidden mb-16">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* ── Sections ── */}
      <div className="space-y-20">
        {project.sections.map((section, i) => (
          <div key={i}>

            {/* Section label + number */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-black tracking-tighter font-medium">/ {section.heading}</span>
              <span className="text-[#aaa] tracking-tighter text-lg">0{i + 1}</span>
            </div>

            {/* Big heading */}
            <h2 className="text-[24px] sm:text-[32px] lg:text-[38px] font-semibold tracking-tighter leading-tight text-black mb-4 max-w-4xl">
              {section.paragraphs[0]}
            </h2>

            {/* Sub paragraphs */}
            {section.paragraphs.slice(1).map((para, j) => (
              <p key={j} className="text-lg text-[#888] leading-[1.2] tracking-tighter max-w-lg mb-3">
                {para}
              </p>
            ))}

            {/* Section Images */}
            {i === 0 && (
              <div className="grid grid-cols-2 gap-3 mt-8">
                <div className="relative h-85 sm:h-130 rounded-xl overflow-hidden bg-[#EBEBEB]">
                  <Image src={project.gallery[0]} alt="" fill className="object-cover" />
                </div>
                <div className="relative h-85 sm:h-130 rounded-xl overflow-hidden bg-[#EBEBEB]">
                  <Image src={project.gallery[1]} alt="" fill className="object-cover" />
                </div>
              </div>
            )}

            {i === 1 && (
              <div className="flex flex-col gap-3 mt-8">
                <div className="relative w-full h-100 sm:h-180 rounded-xl overflow-hidden bg-[#EBEBEB]">
                  <Image src={project.gallery[1]} alt="" fill className="object-cover" />
                </div>
                <div className="relative w-full h-100 sm:h-180 rounded-xl overflow-hidden bg-[#EBEBEB]">
                  <Image src={project.gallery[2]} alt="" fill className="object-cover" />
                </div>
              </div>
            )}

          </div>
        ))}
      </div>

      {/* ── Outcome Quote ── */}
      <div className="my-24">
        <p className="text-[28px] sm:text-[36px] lg:text-[44px] font-semibold tracking-tighter leading-tight text-[#CBCBCB] max-w-2xl">
          {project.sections[project.sections.length - 1].paragraphs[0]}
        </p>
      </div>

      {/* ── Full width closing image ── */}
      <div className="relative w-full h-90 sm:h-130 rounded-[20px] overflow-hidden mb-24">
        <Image
          src={project.gallery[0]}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      {/* ── More Projects ── */}
      <div>
        <div className="md:flex items-end justify-between mb-10">
          <div>
            <p className="text-base text-[#aaa] tracking-tighter mb-2">
              A curated selection of projects that reflect our<br />
              commitment to simplicity and purposeful design.
            </p>
            <h2 className="text-[48px] mb-5 md:mb-0 sm:text-[64px] font-semibold tracking-tighter leading-none text-black">
              More Projects.
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-sm bg-gray-100 hover:bg-gray-200 transition border border-gray-200 text-gray-600 px-5 py-2.5 rounded-full whitespace-nowrap mb-1"
          >
            View all projects +
          </Link>
        </div>

        {/* Related Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {related.map((item) => (
            <Link
              key={item.id}
              href={`/projects/${item.slug}`}
              className="bg-[#EBEBEB] rounded-2xl p-2 cursor-pointer group transition-all duration-600 hover:bg-black block"
            >
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-130 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>

              <div className="flex justify-between items-center mt-4 px-1 pb-1">
                <div>
                  <div className="relative overflow-hidden h-6">
                    <span className="block font-semibold tracking-tighter text-black transition-transform duration-400 group-hover:-translate-y-full">
                      {item.title}
                    </span>
                    <span className="absolute top-full left-0 block font-semibold tracking-tighter text-white transition-transform duration-400 group-hover:-translate-y-full">
                      {item.title}
                    </span>
                  </div>
                  <div className="relative overflow-hidden h-5 mt-1">
                    <span className="block text-sm text-gray-500 tracking-tighter transition-transform duration-400 group-hover:-translate-y-full">
                      {item.category}
                    </span>
                    <span className="absolute top-full left-0 block text-sm tracking-tighter text-gray-300 transition-transform duration-400 group-hover:-translate-y-full">
                      {item.category}
                    </span>
                  </div>
                </div>
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

    </main>
  );
}