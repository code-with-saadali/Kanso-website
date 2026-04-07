import React from "react";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import Marquee from "./_components/Marquee";
import ParralexImage from "./_components/ParralexImage";
import About from "./_components/About";
import AboutMarquee from "./_components/AboutMarquee";
import ParralexVideo from "./_components/ParralexVideo";
import Work from "./_components/Work";
import WhyUs from "./_components/WhyUs";

export default function page() {
  return (
    <div>
      <Navbar />
      <div className="px-3 md:px-10 min-[1920px]:max-w-7xl mx-auto">
        <Hero />
        <Marquee />
        <ParralexImage />
        <About/>
        <AboutMarquee />
        <ParralexVideo/>
        <Work/>
        <WhyUs/>
      </div>
    </div>
  );
}
