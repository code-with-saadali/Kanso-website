import Image from "next/image";
import React from "react";
import { FiClock, FiPlus, FiZap } from "react-icons/fi";
import { HiOutlineRocketLaunch } from "react-icons/hi2";

export default function WhyUs() {
  return (
    <div className="py-20">
      {/* Top */}
      <div>
        <h1 className="font-medium">/Why us</h1>

        <p className="text-2xl md:text-5xl font-medium tracking-tighter max-w-4xl py-5">
          We cut through noise to create designs <br className="hidden md:block"/>
          that are
          <span className="text-[#757575]">
            thoughtful, timeless, and impactful.
          </span>
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-4 gap-2 mt-10">
        {/* 1st Card */}
        <div className="bg-[#EBEBEB] rounded-2xl p-2 flex flex-col justify-between">
          {/* Image with overlay */}
          <div className="relative overflow-hidden rounded-xl h-87.5">
            <div className="absolute inset-0 bg-black/30 z-10"></div>
            <Image
              src="https://ik.imagekit.io/msmrd69gi/knos%20website/SnETsOfCOQSJFyHnBEJhdhqXW8.avif?updatedAt=1775556754218"
              alt=""
              fill
              className="object-cover mix-blend-luminosity"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-4 text-white z-10">
              <p className="font-semibold text-2xl leading-tight">
                Purposeful Design <br /> for Modern Brands.
              </p>

              <div className="flex items-center justify-between">
                <span className="text-sm">© 2026</span>

                <button className="px-4 py-2 bg-white text-black rounded-full text-sm">
                  Get started +
                </button>
              </div>
            </div>
          </div>

          {/* List */}
          <div className="mt-2 space-y-2 bg-white p-5 rounded-xl">
            {[
              "Collaborative Approach",
              "Quick turnaround",
              "Clear Communication",
              "Consistent Quality",
              "Reliable Support",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <span className="p-0.5 bg-[#414141] text-white rounded-full text-[8px]">
                 <FiPlus />
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* 2nd Card */}
        <div className="bg-[#EBEBEB] rounded-2xl p-5 flex flex-col justify-between">
          {/* Top */}
          <div>
            <div className="flex items-center justify-between">
              {/* Avatars */}
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <Image
                    key={i}
                    width={40}
                    height={40}
                    src={`https://i.pravatar.cc/40?img=${i}`}
                    alt=""
                    className="w-11 h-11 rounded-full border border-white"
                  />
                ))}
              </div>

              <span className="text-sm text-gray-500">4.9/5</span>
            </div>

            <p className="text-[16px] mt-3 text-gray-600 tracking-tighter">
              <span className="font-semibold text-black">100+</span> Happy clients worldwide
            </p>
          </div>

          {/* Review */}
          <div className="mt-6">
            {/* ⭐ Stars ABOVE TEXT */}
            <div className="text-[#414141] mb-2">★★★★★</div>

            <p className="text-[16px] tracking-tighter font-medium text-gray-700">
              &quot;Kanso understood our brand better than we did. Their ability to
              find the essential and express it simply is what sets them apart.&quot;
            </p>

            <div className="flex items-center gap-2 mt-4">
              <img
                src="https://i.pravatar.cc/40?img=5"
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="text-sm font-medium">Sofia Ford</p>
                <p className="text-xs text-gray-500">Founder</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3rd Column */}
        <div className="bg-[#F2F2F2] p-2 rounded-2xl">
  <div className="flex flex-col gap-2">
    {[
      {
        icon: <FiZap className="text-gray-500 text-2xl" />,
        title: "Streamlined Process",
        desc: "Our focused, step-by-step approach saves time and keeps projects moving smoothly.",
      },
      {
        icon: <HiOutlineRocketLaunch className="text-gray-500 text-2xl" />,
        title: "Scalable Design",
        desc: "We create systems that grow with your brand and stay effective over time.",
      },
      {
        icon: <FiClock className="text-gray-500 text-2xl" />,
        title: "24/7 Dedicated Support",
        desc: "We're always here when you need us, ready to answer questions, provide updates.",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="bg-white rounded-xl p-5 flex flex-col gap-2 border border-gray-100"
      >
        <div className="mb-1">{item.icon}</div>

        <p className="font-semibold text-gray-900 text-lg tracking-tighter">
          {item.title}
        </p>

        <p className="text-[16px] text-gray-600 tracking-tighter">
          {item.desc}
        </p>
      </div>
    ))}
  </div>
</div>

        {/* 4th Card */}
        <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-black/30 z-10"></div>
          {/* Image */}
          <Image
            src="https://ik.imagekit.io/msmrd69gi/knos%20website/PcE1ZfvccMAMZR7XuWwBcAhneDA.avif?updatedAt=1775556752899"
            alt=""
            fill
            className="object-cover"
          />

          {/* Top Center */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white text-sm z-10">
            Kanso®
          </div>

          {/* Bottom Center */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white z-10">
            <p className="font-semibold text-lg">Design with intent.</p>
            <p className="text-sm text-gray-200">No excess, no fluff.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
