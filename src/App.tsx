import React, { useRef } from "react";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import MainServices from "@/components/sections/MainServices";
import ShopCategory from "@/components/sections/ShopCategory";
import InfoRow from "@/components/layout/main/InfoRow";
import TeamSection from "@/components/sections/TeamSection";

const App: React.FC = () => {
  // Create refs for each section you want to scroll to.
  // This is the idiomatic React way to reference a DOM element.
  const shopCategoryRef = useRef<HTMLElement>(null);
  const mainServicesRef = useRef<HTMLElement>(null);
  const infoRowRef = useRef<HTMLElement>(null);
  const teamSectionRef = useRef<HTMLElement>(null);

  // A simple lookup object to map IDs to their corresponding refs.
  const sectionRefs = {
    home: shopCategoryRef,
    services: mainServicesRef,
    branches: infoRowRef,
    team: teamSectionRef,
  };

  // The scroll handler now uses the lookup object to get the ref and scroll.
  const handleScrollToSection = (id: string) => {
    const ref = sectionRefs[id as keyof typeof sectionRefs];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black text-white font-sans min-h-screen">
      {/* Pass the handleScrollToSection to the Header component */}
      <Header onNavClick={handleScrollToSection} />

      <main className="max-w-6xl mx-auto px-4 py-6 space-y-8">
        {/*
          Each component now needs to be able to receive and forward a ref.
          You'll need to update these components to be forwardRef-enabled.
        */}
        <ShopCategory id="home" ref={shopCategoryRef} />
        <MainServices id="services" ref={mainServicesRef} />
        <InfoRow id="branches" ref={infoRowRef} />
        <TeamSection id="team" ref={teamSectionRef} />
      </main>

      <Footer />
    </div>
  );
};

export default App;



