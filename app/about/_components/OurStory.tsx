import Image from "next/image";

export default function OurStory() {
  return (
    <section className="w-full py-8 md:py-12">

      {/* Top bar */}
      <div className="flex justify-between items-center mb-8 md:mb-12">
        <p className="text-black font-medium tracking-tighter">
          / Our story
        </p>
        <span className="text-xs md:text-sm text-[#4D4D4D] font-medium tracking-tighter">
          (05)
        </span>
      </div>

      {/* Heading */}
      <div className="mb-6 md:mb-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tighter mb-4">
          <span className="text-black">Kanso was born from a belief that <br className="hidden md:block"/> </span>
          <span className="text-[#757575] font-medium tracking-tighter">design should do more with less.</span>
        </h2>
        <p className="text-[#757575] font-medium text-lg tracking-tighter max-w-xl">
          Frustrated by noise and clutter in the creative industry, we set out to build
          something different, a studio focused on clarity, intention, and restraint.
        </p>
      </div>

      {/* Images */}
      <div className="w-full flex flex-col md:flex-row gap-3 items-stretch">

        {/* First office */}
        <div className="w-full md:w-[49%] flex flex-col gap-2">
          <p className="text-xs md:text-sm text-black tracking-tighter text-right">
            First office <span className="text-[#AAAAAA]">(2010)</span>
          </p>
          <div className="relative w-full h-70 sm:h-90 md:h-115 rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
              alt="First office 2010"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Current office */}
        <div className="w-full md:w-[51%] flex flex-col gap-2">
          <p className="text-xs md:text-sm text-black tracking-tighter text-right">
            Current office <span className="text-[#AAAAAA]">(2025)</span>
          </p>
          <div className="relative w-full h-70 sm:h-90 md:h-115 rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80"
              alt="Current office 2025"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>

    </section>
  );
}