import Image from "next/image";
import { works } from "./workdata";


export default function Work() {
  return (
    <div className="py-20">
      
      {/* Top Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-5xl font-semibold tracking-tight">
            Selected Work.
          </h1>

          <p className="mt-4 text-gray-500 max-w-md">
            A curated selection of projects that reflect our commitment to simplicity and purposeful design.
          </p>
        </div>

        <button className="px-5 py-2 rounded-full bg-gray-100 text-sm font-medium hover:bg-gray-200 transition">
          View all projects +
        </button>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-2 mt-16">
        {works.map((item) => (
          <div
            key={item.id}
            className="bg-[#EBEBEB] rounded-2xl p-2 cursor-pointer group transition-all duration-600 hover:bg-black will-change-transform"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-xl">
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={600}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="flex justify-between items-center mt-4 px-1">
              
              {/* Left */}
              <div>
                
                {/* Title */}
                <div className="relative overflow-hidden h-6">
                  <span className="block font-semibold tracking-tighter text-black transition-transform duration-400 group-hover:-translate-y-full">
                    {item.title}
                  </span>
                  <span className="absolute top-full left-0 block font-semibold tracking-tighter text-white transition-transform duration-400 group-hover:-translate-y-full">
                    {item.title}
                  </span>
                </div>

                {/* Category */}
                <div className="relative overflow-hidden h-5 mt-1">
                  <span className="block text-sm text-gray-500 transition-transform tracking-tighter duration-400 group-hover:-translate-y-full">
                    {item.category}
                  </span>
                  <span className="absolute top-full left-0 block text-sm tracking-tighter text-gray-300 transition-transform duration-400 group-hover:-translate-y-full">
                    {item.category}
                  </span>
                </div>

              </div>

              {/* Year */}
              <div className="relative overflow-hidden h-5">
                <span className="block text-sm text-gray-500 transition-transform tracking-tighter duration-400 group-hover:-translate-y-full">
                  {item.year}
                </span>
                <span className="absolute top-full left-0 block text-sm tracking-tighter text-gray-300 transition-transform duration-400 group-hover:-translate-y-full">
                  {item.year}
                </span>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}