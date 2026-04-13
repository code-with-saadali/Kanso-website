import React from "react";

const leftLinks = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Projects", href: "/projects" },
  { text: "Blog", href: "/blog" },
  { text: "Contact", href: "/contact" },
];

const centerLinks = [
  { text: "Terms & Conditions", href: "/terms" },
  { text: "Privacy Policy", href: "/privacy" },
  { text: "404", href: "/404" },
];

const rightLinks = [
  { text: "Twitter/X", href: "https://twitter.com" },
  { text: "Instagram", href: "https://instagram.com" },
  { text: "LinkedIn", href: "https://linkedin.com" },
];

const HoverText = ({ text, href }: { text: string; href: string }) => {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : "_self"}
      rel="noreferrer"
      className="relative overflow-hidden h-5 flex items-center group w-fit cursor-pointer no-underline text-white"
    >
      <span className="block transition-transform duration-300 group-hover:-translate-y-full">
        {text}
      </span>
      <span className="absolute top-full left-0 transition-transform duration-300 group-hover:-translate-y-full">
        {text}
      </span>
    </a>
  );
};

export default function Content() {
  return (
    <div className="bg-[#121212] text-white h-full w-full px-3 md:px-10 min-[1920px]:max-w-7xl mx-auto py-12 flex flex-col justify-between">
      {/* TOP LOGO */}
      <h1 className="text-[14.4vw] min-[1920px]:text-[9vw] font-semibold tracking-tighter pt-12 md:pt-18">
        Kanso® Studio
      </h1>

      {/* MIDDLE */}
      <div className="flex flex-col md:flex-row md:justify-between gap-10">
        {/* LEFT */}
        <div className="max-w-lg">
          <p className="text-[#8C8C8C] mb-6 font-semibold tracking-tighter text-base sm:text-lg">
            Whether you&apos;re building a brand, designing a product, or simply
            want to explore an idea, we&apos;d love to hear from you.
          </p>

          <h3 className="text-xl sm:text-2xl tracking-tighter font-semibold mb-1">
            hello@kanso.studio
          </h3>
          <p className="text-white text-sm sm:text-base">(123) 456-7890</p>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-90">
          <p className="mb-4 text-sm text-gray-300">
            Sign up for our monthly newsletter.
          </p>

          <input
            type="email"
            placeholder="Email"
            className="w-full bg-black border border-[#222] px-5 py-3 rounded-full outline-none mb-3 placeholder-gray-500 text-sm"
          />

          <button className="w-full bg-white text-black py-3 rounded-full font-medium hover:opacity-90 transition text-sm">
            Sign up
          </button>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="mt-16">
        <div className="flex flex-col md:flex-row md:justify-between gap-10 text-sm text-white">
          {/* LINKS GRID */}
          <div className="grid grid-cols-3 gap-10 w-full md:w-auto">
            {/* LEFT */}
            <div className="flex flex-col gap-1">
              {leftLinks.map((item, i) => (
                <HoverText key={i} text={item.text} href={item.href} />
              ))}
            </div>

            {/* CENTER */}
            <div className="flex flex-col gap-1">
              {centerLinks.map((item, i) => (
                <HoverText key={i} text={item.text} href={item.href} />
              ))}
            </div>

            {/* RIGHT */}
            <div className="flex flex-col gap-1">
              {rightLinks.map((item, i) => (
                <HoverText key={i} text={item.text} href={item.href} />
              ))}
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="text-center md:text-right text-xs text-gray-400">
            <p>Designed in Framer By Theori</p>
            <p>© 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}