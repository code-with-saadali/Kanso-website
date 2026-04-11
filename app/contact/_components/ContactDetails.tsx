"use client";
import React, { useState } from "react";

export default function ContactDetails() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // apna form submission logic yahan add karo
  };

  return (
    <section className="py-20 lg:py-34">

      {/* ── Header ── */}
      <div className="md:flex items-end justify-between mb-16 md:mb-24">
        <h1 className="text-[80px] md:text-[120px] lg:text-[190px] font-semibold leading-none tracking-tighter text-black">
          let&apos;s talk.
        </h1>
        <p className="text-lg text-[#888] tracking-tighter text-right font-medium leading-sung mt-6 md:mt-0 md:pb-4">
          Tell us about your project, question, or idea.<br />
          We&apos;ll get back to you within 1–2 business days.
        </p>
      </div>

      {/* ── Two Column ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

        {/* ── Left — Contact Info ── */}
        <div className="flex flex-col gap-6">

          {/* Email & Phone */}
          <div>
            <p className="text-2xl font-bold tracking-tighter text-black">
              hello@kanso.studio
            </p>
            <p className="text-lg font-semibold tracking-tighter text-black mt-1">
              (123) 456-7890
            </p>
          </div>

          <hr className="border-[#d0d0d0]" />

          {/* Socials — scroll-up hover effect */}
          <div className="flex flex-col gap-1.5">
            {[
              { label: "Twitter/X", href: "https://twitter.com" },
              { label: "Instagram", href: "https://instagram.com" },
              { label: "LinkedIn", href: "https://linkedin.com" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden h-6 flex items-center group w-fit cursor-pointer"
              >
                <span className="block text-base text-black font-medium tracking-tighter transition-transform duration-300 group-hover:-translate-y-full">
                  {s.label}
                </span>
                <span className="absolute top-full block text-base text-black font-medium tracking-tighter transition-transform duration-300 group-hover:-translate-y-full">
                  {s.label}
                </span>
              </a>
            ))}
          </div>

          <hr className="border-[#d0d0d0]" />

          {/* Address */}
          <div>
            <p className="text-base text-black tracking-tight">Visit us:</p>
            <p className="text-base text-[#888] tracking-tight mt-0.5">
              123 Street, Metropolis, State, ZIP
            </p>
          </div>

        </div>

        {/* ── Right — Form ── */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-black tracking-tight">Name*</label>
            <input
              type="text"
              placeholder="John"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full bg-[#EBEBEB] rounded-2xl px-5 py-4 text-sm text-black placeholder:text-[#aaa] outline-none tracking-tight"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-black tracking-tight">Email*</label>
            <input
              type="email"
              placeholder="contact@gmail.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full bg-[#EBEBEB] rounded-2xl px-5 py-4 text-sm text-black placeholder:text-[#aaa] outline-none tracking-tight"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-black tracking-tight">Message*</label>
            <textarea
              placeholder="Project inquiry..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={8}
              className="w-full bg-[#EBEBEB] rounded-2xl px-5 py-4 text-sm text-black placeholder:text-[#aaa] outline-none tracking-tight resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-black text-white text-sm font-medium tracking-tight py-4 rounded-full hover:opacity-80 transition-opacity cursor-pointer"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}