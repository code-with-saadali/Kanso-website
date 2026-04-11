'use client';
import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";


const faqs = [
  {
    question: "What kind of clients do you work with?",
    answer:
      "We collaborate with a wide range of clients including startups, growing businesses, and established enterprises. Whether you're launching a new product or refining an existing brand, we adapt our approach to match your goals, industry, and stage of growth.",
  },
  {
    question: "What services do you offer?",
    answer:
      "Our services include branding, UI/UX design, web design, and full-stack development. We focus on creating visually compelling and user-centered digital experiences that not only look great but also perform effectively across platforms.",
  },
  {
    question: "How do you price your projects?",
    answer:
      "Our pricing is flexible and depends on the scope, complexity, and timeline of the project. After understanding your requirements, we provide a tailored quote that ensures transparency and aligns with your budget and expectations.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines usually range from 2 to 6 weeks depending on the size and requirements. Smaller tasks may be completed faster, while more complex projects involving multiple phases may take additional time to ensure quality and precision.",
  },
  {
    question: "Can we collaborate remotely?",
    answer:
      "Yes, we work with clients from all over the world and are fully equipped for remote collaboration. We use modern tools for communication, project management, and feedback to ensure a smooth and efficient workflow regardless of location.",
  },
  {
    question: "Do you accept one-off design tasks or only full projects?",
    answer:
      "We’re flexible and can take on both one-off design tasks as well as full-scale projects. Whether you need a quick design update or a complete product overhaul, we’re happy to support based on your specific needs.",
  },
  {
    question: "How many concepts or revisions are included?",
    answer:
      "We typically provide 2–3 initial concepts along with multiple revision rounds. Our goal is to refine the work collaboratively until it meets your expectations while maintaining high design quality and consistency.",
  },
];

export default function FaqSection() {
  const [active, setActive] = useState<number | null>(null);

  const toggle = (i: number) => {
    setActive(active === i ? null : i);
  };

  return (
    <section className="py-16">
      

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* LEFT SIDE */}
        <div className="mb-8 lg:mb-0">
          <h2 className="text-3xl md:text-4xl lg:text-[50px] font-medium tracking-tight mb-4 md:mb-6">
            Wondering How We Work?
          </h2>

          <p className="text-gray-600 tracking-tight font-medium max-w-md mb-6 md:mb-8 text-sm md:text-base">
            Answers to common questions about <br /> our process, services, and how we
            work.
          </p>

          <button className="flex items-center gap-2 bg-[#e5e5e5] px-4 md:px-5 py-1 md:py-1.5 rounded-full text-sm md:text-base hover:bg-[#dcdcdc] transition">
            Contact us <span className="text-lg md:text-xl">+</span>
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-[#EBEBEB] p-1.5 rounded-2xl space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden">
              {/* Question */}
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center px-4 py-3 md:px-6 md:py-4 text-left cursor-pointer"
              >
                <span className="text-sm md:text-base lg:text-lg tracking-tight font-medium text-black">
                  {i + 1}. {faq.question}
                </span>

                {/* Icon */}
                <div className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-400 text-sm md:text-base">
                  {active === i ? <FiMinus size={14} /> : <FiPlus size={14} />}
                </div>
              </button>

              {/* Answer */}
              <div
                className={`transition-all duration-300 px-4 md:px-6 overflow-hidden ease-in-out ${
                  active === i ? "max-h-52 pb-4 md:pb-5" : "max-h-0"
                }`}
              >
                <p className="text-[#757575] tracking-tight text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}