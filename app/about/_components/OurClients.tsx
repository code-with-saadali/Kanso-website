import Image from "next/image";

const clients = [
  {
    name: "Nørda",
    year: "2025",
    logo: "https://ik.imagekit.io/msmrd69gi/knos%20website/ckzgFZfLV9VqmuWWwZBHsT3oVQ.svg",
  },
  {
    name: "Velin",
    year: "2025",
    logo: "https://ik.imagekit.io/msmrd69gi/knos%20website/uEMUZbpEEjiUl5sIgiqzc44cbaI.svg",
  },
  {
    name: "Forma",
    year: "2024",
    logo: "https://ik.imagekit.io/msmrd69gi/knos%20website/FP406q3SMCvP2TgmzOGS4dzVXY.svg",
  },
  {
    name: "Lune",
    year: "2023",
    logo: "https://ik.imagekit.io/msmrd69gi/knos%20website/6vOnf4cpVDDReCoKaAfqrrrMiCs.svg",
  },
  {
    name: "Studio Oko",
    year: "2023",
    logo: "https://ik.imagekit.io/msmrd69gi/knos%20website/VT65uKEswKentc2h9lqdwou92M.svg",
  },
  {
    name: "Aren",
    year: "2022",
    logo: "https://ik.imagekit.io/msmrd69gi/knos%20website/f0j1ZzlIdeBRI2c0zx6eQ2GGCVU.svg",
  },
];

export default function OurClients() {
  return (
    <section className="w-full py-8 md:py-12">

      {/* Top bar */}
      <div className="flex justify-between items-center mb-8 md:mb-16">
        <p className="text-black font-medium tracking-tighter text-sm md:text-base">
          / Our clients
        </p>
        <span className="text-xs md:text-sm text-[#4D4D4D] font-medium tracking-tighter">
          (02)
        </span>
      </div>

      {/* Main content: stacked on mobile, side-by-side on desktop */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-0">

        {/* Left: text */}
        <div className="w-full lg:w-[40%] shrink-0">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 md:mb-4 max-w-sm tracking-tighter">
            We&apos;ve partnered with forward-thinking brands to create work
            that is clear, meaningful, and enduring.
          </h2>
          <p className="text-[#757575] font-medium tracking-tighter max-w-lg text-sm sm:text-base">
            Whether global brands or emerging ventures, we value every
            relationship built on trust, intention, and shared vision.
          </p>
        </div>

        {/* Right: grid */}
        <div className="w-full lg:flex-1 grid grid-cols-2 sm:grid-cols-3 p-1.5 gap-1.5 bg-[#EBEBEB] rounded-xl">
          {clients.map((client) => (
            <div
              key={client.name}
              className="bg-white rounded-xl flex flex-col items-center justify-between px-3 py-4 transition-colors duration-200"
            >
              {/* Client Name */}
              <span className="text-xs sm:text-sm text-[#757575] tracking-wide text-center">
                {client.name}
              </span>

              {/* Logo Image */}
              <div className="flex flex-1 items-center justify-center w-full my-6 sm:my-10 md:my-16">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={56}
                  height={56}
                  className="object-contain grayscale w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
                />
              </div>

              {/* Year */}
              <span className="text-xs sm:text-sm text-[#757575]">
                {client.year}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}