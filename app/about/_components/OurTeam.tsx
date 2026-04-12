import Image from "next/image";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";

const team = [
  {
    name: "Hana Mori",
    role: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=80",
  },
  {
    name: "Luca Feld",
    role: "Design Lead",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
  },
  {
    name: "Emil Novak",
    role: "UX/UI Designer",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80",
  },
  {
    name: "Nia Calderon",
    role: "Brand Strategist",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80",
  },
  {
    name: "Mira Dae",
    role: "Art Director",
    image:
      "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?w=600&q=80",
  },
  {
    name: "Theo Yamane",
    role: "Project Manager",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
  },
];

export default function OurTeam() {
  return (
    <section className="w-full bg-[#151515] rounded-2xl p-6 md:p-8 my-18">
      {/* Top bar */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-white font-medium tracking-tighter text-xs md:text-sm">
          / Our team
        </p>
        <span className="text-xs md:text-sm text-[#888] font-medium tracking-tighter">
          (04)
        </span>
      </div>

      {/* Heading row */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8 md:mb-10">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-white mb-2 max-w-xl">
            We&apos;re a group designers, strategists, and thinkers.
          </h2>
          <p className="text-[#888] text-xs sm:text-sm tracking-tighter max-w-xs leading-relaxed">
            Every project is shaped by close collaboration and a shared
            commitment to meaningful design.
          </p>
        </div>

        {/* Join us button */}
       <Link href="/contact">
         <button className="group w-fit px-5 py-2.5 rounded-full bg-[#EBEBEB] hover:bg-gray-200 transition font-medium tracking-tighter flex items-center gap-2 text-sm cursor-pointer">
          <span className="relative overflow-hidden h-5 flex items-center">
            <span className="block transition-transform duration-300 group-hover:-translate-y-full">
              Join us
            </span>
            <span className="absolute top-full transition-transform duration-300 group-hover:-translate-y-full">
              Join us
            </span>
          </span>

          <FiPlus className="transition-transform duration-300 group-hover:rotate-90" />
        </button>
       </Link>
      </div>

      {/* Team grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
        {team.map((member) => (
          <div
            key={member.name}
            className="relative rounded-xl overflow-hidden group cursor-pointer bg-black p-1.5"
          >
            {/* Image */}
            <div className="relative w-full aspect-3/4">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 rounded-xl"
              />
              {/* dark gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Name & Role */}
            <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
              <p className="text-white text-xs sm:text-sm font-semibold tracking-tighter leading-tight">
                {member.name}
              </p>
              <p className="text-[#aaa] text-[10px] sm:text-xs tracking-tighter">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
