import React from "react";
import { FiPlus } from "react-icons/fi";

const steps = [
  {
    title: "Discover",
    desc: "We begin by listening, gaining a deep understanding of your goals, audience, and challenges through research and conversation.",
  },
  {
    title: "Define",
    desc: "We distill insights into a clear direction. Strategy, structure, and creative foundations are established to guide the work forward.",
  },
  {
    title: "Design",
    desc: "Ideas take shape through thoughtful design. We explore, refine, and iterate with intention, always rooted in purpose and simplicity.",
  },
  {
    title: "Deliver",
    desc: "We finalize and hand off with care. Every element is prepared for implementation with clarity, consistency, and attention to detail.",
  },
];

export default function Process() {
  return (
    <section className="w-full py-28">
      
      {/* TOP BAR */}
      <div className="flex justify-between items-center mb-12">
        <p className="text-sm text-black">/Process</p>
        <span className="text-sm text-[#4D4D4D]">(05)</span>
      </div>

      {/* MAIN GRID */}
      <div className="grid md:grid-cols-2 gap-16 items-start">
        
        {/* LEFT SIDE */}
        <div>
          <h1 className="text-3xl md:text-[55px] leading-[1.10] font-medium text-black tracking-tighter mb-6">
            Our process is simple,
            <br />
            purposeful, and adaptable.
          </h1>

          <p className="text-[#767676] mb-4 tracking-tighter font-medium">
            We believe great design is a result of clarity, collaboration, and craft.
          </p>

          <button className="px-6 py-2 rounded-full bg-[#EBEBEB] hover:bg-gray-200 cursor-pointer transition font-medium tracking-tighter flex items-center gap-1 text-sm">
            Let’s talk <FiPlus/>
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-[#EBEBEB] rounded-2xl p-1.5 space-y-1.5">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 flex justify-between items-start"
            >
              <div>
                <h3 className="text-2xl font-semibold tracking-tighter text-black mb-2">
                  {step.title}
                </h3>
                <p className="text-[#4D4D4D] font-medium tracking-tighter">
                  {step.desc}
                </p>
              </div>

              <span className="text-gray-500 text-sm">
                {index + 1}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}