import ContactDetails from "./_components/ContactDetails";
import FaqSection from "./_components/FaqSection";

export default function page() {
  return (
    <div>
      <div className="px-3 md:px-10 min-[1920px]:max-w-7xl mx-auto">
        <ContactDetails />
        <FaqSection />
      </div>
    </div>
  );
}
