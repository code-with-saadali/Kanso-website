"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const HoverText = ({ children }: { children: string }) => {
  return (
    <span className="group relative inline-block overflow-hidden h-5">
      <span className="block transition-transform duration-300 group-hover:-translate-y-full">
        {children}
      </span>
      <span className="absolute left-0 top-full block transition-transform duration-300 group-hover:-translate-y-full text-black">
        {children}
      </span>
    </span>
  );
};

const NavLink = ({
  label,
  num,
  href = "#",
}: {
  label: string;
  num: string;
  href?: string;
}) => {
  return (
    <Link
      href={href}
      className="group flex justify-between items-center py-2.5 border-b border-gray-400 hover:border-gray-600 transition-colors duration-300 overflow-hidden"
    >
      <span className="relative overflow-hidden h-9 flex items-center">
        <span className="block text-2xl font-semibold tracking-tight text-black transition-transform duration-300 group-hover:-translate-y-full">
          {label}
        </span>
        <span className="absolute top-full block text-2xl font-semibold tracking-tight text-black transition-transform duration-300 group-hover:-translate-y-full">
          {label}
        </span>
      </span>

      <span className="relative overflow-hidden h-6 flex items-center">
        <span className="block text-sm font-medium text-gray-600 transition-transform duration-300 group-hover:-translate-y-full">
          ({num})
        </span>
        <span className="absolute top-full block text-sm font-medium text-gray-600 transition-transform duration-300 group-hover:-translate-y-full">
          ({num})
        </span>
      </span>
    </Link>
  );
};

export default function Navbar() {
  const [time, setTime] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const day = now.getDate();
      const month = now.toLocaleString("en-GB", { month: "short" });
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "pm" : "am";
      hours = hours % 12 || 12;
      setTime(`${day} ${month}, ${hours}:${minutes} ${ampm}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const navItems = ["About", "Projects", "Blog"];

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          menuOpen
            ? "backdrop-blur-sm bg-black/40 pointer-events-auto"
            : "backdrop-blur-none bg-black/0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Navbar outer - full width fixed */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center">

        {/* Navbar inner - max width + margin */}
        <div className="bg-[#E3E3E3] w-full mx-2 md:mx-10 min-[1920px]:max-w-7xl rounded-b-xl overflow-hidden">
          <nav className="flex items-center justify-between px-3 py-1.5">
            {/* Left */}
            <div className="flex items-center gap-2">
              <Image
                src="/kanso logo.svg"
                alt="Kanso Logo"
                width={65}
                height={65}
              />
              <span className="text-gray-600 text-sm">{time}</span>
            </div>

            {/* Right */}
            <div className="flex items-center gap-3 md:gap-4 text-[15px] tracking-tighter font-medium">
              {/* Nav links - desktop only */}
              <div
                className={`hidden md:flex items-center gap-4 transition-all duration-300 overflow-hidden ${
                  menuOpen ? "max-w-0 opacity-0" : "max-w-xs opacity-100"
                }`}
              >
                <Link href="#">
                  <HoverText>(Optional Dark version)</HoverText>
                </Link>
                {navItems.map((item) => (
                  <Link key={item} href="#">
                    <HoverText>{item}</HoverText>
                  </Link>
                ))}
              </div>

              {/* Start a project - desktop only */}
              <button className="hidden md:block bg-black text-white text-sm px-4 py-1.25 rounded-full transition whitespace-nowrap">
                Start a project
              </button>

              {/* Plus button */}
              <button
                onClick={() => setMenuOpen((prev) => !prev)}
                className={`flex items-center justify-center text-lg p-2 cursor-pointer bg-white rounded-full shadow-sm transition-transform duration-300 ${
                  menuOpen ? "rotate-45" : "rotate-0"
                }`}
              >
                <AiOutlinePlus />
              </button>
            </div>
          </nav>

          {/* Dropdown Panel */}
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              menuOpen ? "max-h-150 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {/* Desktop layout */}
            <div className="hidden md:flex gap-6 pt-16 pb-3 h-90 px-2">
              <div className="flex-1 w-[50%]">
                {[
                  ["Home", "01"],
                  ["About", "02"],
                  ["Projects", "03"],
                  ["Blog", "04"],
                  ["Contact", "05"],
                ].map(([label, num]) => (
                  <NavLink key={label} label={label} num={num} />
                ))}
              </div>
              <div className="w-[50%] rounded-xl overflow-hidden relative shrink-0">
                <div className="absolute inset-0 bg-black/30 z-10"></div>
                <p className="absolute top-3 w-full text-center text-white text-sm font-medium z-10">
                  Kanso® Studio
                </p>
                <Image
                  src="https://ik.imagekit.io/msmrd69gi/knos%20website/7P2v0b7fdEwf2A2lE1d37Fu8c.avif"
                  alt="Studio"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full mix-blend-multiply"
                />
                <p className="absolute bottom-2 w-full text-center text-white text-sm z-10">
                  © 2025 All rights reserved
                </p>
              </div>
            </div>

            {/* Mobile layout */}
            <div className="flex flex-col md:hidden pt-4 pb-3 px-2">
              {[
                ["Home", "01"],
                ["About", "02"],
                ["Projects", "03"],
                ["Blog", "04"],
                ["Contact", "05"],
              ].map(([label, num]) => (
                <NavLink key={label} label={label} num={num} />
              ))}
              <button className="mt-6 w-full bg-black text-white text-sm py-3 rounded-full transition whitespace-nowrap">
                Start a project
              </button>
            </div>

            {/* Bottom row */}
            <div className="flex justify-between items-center pt-6 md:pt-10 pb-1 px-2">
              <div className="space-y-0.5">
                <div className="relative overflow-hidden h-6.5 flex items-center group w-fit">
                  <span className="block text-sm md:text-lg font-semibold text-black transition-transform duration-300 group-hover:-translate-y-full">
                    hello@kanso.studio
                  </span>
                  <span className="absolute top-full block text-sm md:text-lg font-semibold text-black transition-transform duration-300 group-hover:-translate-y-full">
                    hello@kanso.studio
                  </span>
                </div>
                <div className="relative overflow-hidden h-5.5 flex items-center group w-fit">
                  <span className="block text-sm font-medium text-black transition-transform duration-300 group-hover:-translate-y-full">
                    (123) 456-7890
                  </span>
                  <span className="absolute top-full block text-sm font-medium text-black transition-transform duration-300 group-hover:-translate-y-full">
                    (123) 456-7890
                  </span>
                </div>
              </div>

              <div className="flex gap-3 md:gap-4">
                {["Twitter/X", "Instagram", "LinkedIn"].map((s) => (
                  <div
                    key={s}
                    className="relative overflow-hidden h-5 flex items-center group w-fit cursor-pointer"
                  >
                    <span className="block text-xs md:text-sm font-medium text-black transition-transform duration-300 group-hover:-translate-y-full">
                      {s}
                    </span>
                    <span className="absolute top-full block text-xs md:text-sm font-medium text-black transition-transform duration-300 group-hover:-translate-y-full">
                      {s}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}