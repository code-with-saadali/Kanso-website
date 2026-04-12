"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Pricing() {
  const [active, setActive] = useState("monthly");

  // Features Data
  const features: Record<string, string[]> = {
    monthly: [
      "Unlimited design requests",
      "One active task at a time",
      "Weekly progress calls",
      "Fast turnaround times",
      "Brand consistency across all deliverables",
      "Priority support",
      "Pause or cancel anytime",
    ],
    project: [
      "Fixed scope and timeline",
      "One-off brand or digital projects",
      "Strategic kickoff session",
      "2–3 design directions + revisions",
      "Final deliverables in all required formats",
    ],
  };

  return (
    <section className="w-full py-20">
      {/* TOP HEADER */}
      <div className="flex justify-between items-start mb-12">
        <div>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tighter text-black mb-4">
            Pricing Plans.
          </h1>
          <p className="text-[#767676] tracking-tighter font-medium">
            A curated selection of projects that reflect our <br /> commitment
            to simplicity and purposeful design.
          </p>
        </div>

        <span className="text-sm text-[#767676]">(06)</span>
      </div>

      {/* TOGGLE */}
      <div className="flex justify-end mb-8">
        <div className="bg-[#EBEBEB] rounded-full p-1.5 flex gap-1">
          <button
            onClick={() => setActive("monthly")}
            className={`px-4 py-1 rounded-full cursor-pointer text-sm transition-all ${
              active === "monthly" ? "bg-black text-white" : "text-[#767676]"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setActive("project")}
            className={`px-4 py-1 rounded-full cursor-pointer text-sm transition-all ${
              active === "project" ? "bg-black text-white" : "text-[#767676]"
            }`}
          >
            Project based
          </button>
        </div>
      </div>

      {/* PLAN CARD */}
      <motion.div
        layout
        transition={{ duration: 0.45, ease: "easeInOut" }}
        className="rounded-2xl overflow-hidden bg-black p-1.5 flex flex-col md:flex-row"
      >
        {/* LEFT SIDE */}
        <motion.div
          layout
          className="w-full md:w-1/2 p-8 bg-[#FBFBFB] rounded-xl flex flex-col"
        >
          {/* TOP CONTENT */}
          <div>
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold mb-4">
                {active === "monthly" ? "Subscription" : "Classic"}
              </p>
              <h1 className="text-gray-500 text-sm">Kanso®</h1>
            </div>

            <h2 className="text-2xl font-semibold mb-4 tracking-tighter">
              {active === "monthly" ? "$2500" : "$3000"}
              <span className="text-gray-500 font-medium tracking-tighter text-lg ml-2">
                {active === "monthly" ? "/month" : "starting price"}
              </span>
            </h2>

            <p className="text-gray-500 max-w-lg tracking-tighter font-medium">
              {active === "monthly"
                ? "For ongoing support and flexible design needs. Ideal for startups, growing brands, and marketing teams needing consistent creative support."
                : "For focused, one-time design work. Ideal for rebrands, website design, campaign assets, or other standalone projects."}
            </p>
          </div>

          {/* BOTTOM */}
          <div className="mt-auto pt-10 flex items-center justify-between text-sm text-gray-400">
            <span>
              {active === "monthly"
                ? "($800/m) SEO optimization Add-on."
                : "($1000) SEO optimization Add-on."}
            </span>
            <div className="w-10 h-5 bg-gray-300 rounded-full"></div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          layout
          className="w-full md:w-1/2 bg-black text-white p-8 flex flex-col justify-between"
        >
          <div>
            <p className="text-[#A5A5A5] tracking-tighter text-sm mb-4">
              What&apos;s included:
            </p>

            {/* ✅ FIXED FEATURES LIST (NO DISAPPEAR) */}
            <motion.ul
              layout
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="space-y-3 text-sm"
            >
              {features[active].map((item, index) => (
                <motion.li
                  layout
                  key={index}
                  className="flex items-start gap-3"
                >
                  <span className="flex items-center justify-center w-3 h-3 bg-[#CBCBCB] rounded-full text-black text-xs">
                    +
                  </span>
                  <span className="text-white/90">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* BOTTOM */}
          <div className="mt-10 flex items-center justify-between">
            <div className="text-sm text-gray-400">
              <p>Estimated delivery:</p>
              <p className="text-white font-medium">
                {active === "monthly" ? "48 hours" : "3–4 weeks"}
              </p>
            </div>
            <Link href="/contact">
              <button className="bg-white cursor-pointer text-black px-6 py-2 rounded-full text-sm font-medium hover:scale-105 transition">
                {active === "monthly" ? "Get started +" : "Get in touch +"}
              </button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
