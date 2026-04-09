const awards = [
  { id: "01", title: "Site of the day",        org: "Awwwards",           year: "2025" },
  { id: "02", title: "Merit Award",             org: "Art Directors Club", year: "2024" },
  { id: "03", title: "Featured Studio",         org: "Siteinspire",        year: "2024" },
  { id: "04", title: "Design Annual Selection", org: "Communication Arts", year: "2023" },
  { id: "05", title: "Best Visual Design",      org: "Webby Awards",       year: "2022" },
  { id: "06", title: "Best Minimal Identity",   org: "Branding Awards",    year: "2021" },
];

export default function AwardsRecognitions() {
  return (
    <section className="w-full py-8 md:py-12">

      {/* Top bar */}
      <div className="flex justify-between items-center mb-8 md:mb-12">
        <p className="text-black font-medium tracking-tighter text-sm md:text-base">
          / Achievements
        </p>
        <span className="text-xs md:text-sm text-[#4D4D4D] font-medium tracking-tighter">
          (03)
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter text-black mb-10 md:mb-16">
        Awards &amp; Recognitions{" "}
        <span className="text-[#A8A8A8]">({awards.length})</span>
      </h2>

      {/* Awards list */}
      <div className="w-full">
        {awards.map((award) => (
          <div
            key={award.id}
            className="border-b-2 border-[#A8A8A8] hover:border-black ease-in-out transition duration-500 cursor-pointer py-5 md:py-6"
          >

            {/* 🔥 MOBILE LAYOUT */}
            <div className="flex flex-col gap-2 md:hidden">
              <div className="flex justify-between items-center">
                <span className="text-xs text-[#AAAAAA]">{award.id}</span>
                <span className="text-xs text-[#AAAAAA]">{award.year}</span>
              </div>

              <span className="text-base font-semibold text-black tracking-tighter">
                {award.title}
              </span>

              <span className="text-sm text-[#4D4D4D]">
                {award.org}
              </span>
            </div>

            {/* 💻 DESKTOP LAYOUT */}
            <div
              className="hidden md:grid items-center"
              style={{ gridTemplateColumns: "1fr 2fr 2fr 1fr" }}
            >
              <span className="text-sm text-[#AAAAAA]">{award.id}</span>

              <span className="text-lg font-semibold text-black tracking-tighter">
                {award.title}
              </span>

              <span className="text-base text-[#4D4D4D]">
                {award.org}
              </span>

              <span className="text-right text-sm text-[#AAAAAA]">
                {award.year}
              </span>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
