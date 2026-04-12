import Link from "next/link";
import React from "react";
import { FiPlus } from "react-icons/fi";

export default function Approach() {
  return (
    <section className="py-16 md:py-24">
      {/* TOP */}
      <div className="flex justify-between items-center mb-10 md:mb-16">
        <p className="text-black font-medium tracking-tighter text-sm md:text-base">
          / Approach
        </p>
        <span className="text-xs md:text-sm text-[#4D4D4D] font-medium tracking-tighter">
          (05)
        </span>
      </div>

      {/* HEADING */}
      <h1 className="text-2xl sm:text-3xl md:text-[55px] leading-[1.1] font-medium text-black tracking-tighter mb-6">
        Design with Clarity.
        <span className="text-[#757575]">Built with Purpose.</span>
      </h1>

      {/* CONTENT */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        {/* TEXT */}
        <p className="text-[#767676] tracking-tighter text-base md:text-lg font-medium max-w-2xl">
          Every project begins with understanding. We take the time to listen,
          question, and uncover what truly matters. From there, we design with
          focus and intent, removing anything that doesn’t serve the goal.
        </p>

        {/* BUTTON */}
        <Link href="/projects">
          <button className="group w-fit px-5 py-2.5 rounded-full bg-[#EBEBEB] hover:bg-gray-200 transition font-medium tracking-tighter flex items-center gap-2 text-sm cursor-pointer">
          <span className="relative overflow-hidden h-5 flex items-center">
            <span className="block transition-transform duration-300 group-hover:-translate-y-full">
              Our work
            </span>
            <span className="absolute top-full transition-transform duration-300 group-hover:-translate-y-full">
              Our work
            </span>
          </span>

          <FiPlus className="transition-transform duration-300 group-hover:rotate-90" />
        </button>
        </Link>
      </div>
    </section>
  );
}
