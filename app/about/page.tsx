import React from "react";
import About from "./_components/About";
import ParralexImage from "./_components/ParralexImage";
import Approach from "./_components/Approach";
import OurClients from "./_components/OurClients";
import AwardsRecognitions from "./_components/AwardsRecognitions";
import OurTeam from "./_components/OurTeam";
import OurStory from "./_components/OurStory";

export default function page() {
  return (
    <div>
      <div className="px-3 md:px-10 min-[1920px]:max-w-7xl mx-auto">
        <About />
        <ParralexImage />
        <Approach />
        <OurClients />
        <AwardsRecognitions />
        <OurTeam />
        <OurStory />
      </div>
    </div>
  );
}
