import React, { useRef } from "react";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import MainServices from "@/components/sections/MainServices";
import ShopCategory from "@/components/sections/ShopCategory";
import InfoRow from "@/components/layout/main/InfoRow";

const App: React.FC = () => {
  const shopCategoryRef = useRef<HTMLElement>(null);
  const mainServicesRef = useRef<HTMLElement>(null);
  const infoRowRef = useRef<HTMLElement>(null);

  const sectionRefs = {
    home: shopCategoryRef,
    services: mainServicesRef,
    branches: infoRowRef,
  };

  const handleScrollToSection = (id: string) => {
    const ref = sectionRefs[id as keyof typeof sectionRefs];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-black text-white font-sans min-h-screen">
      {/* Sticky header */}
      <Header onNavClick={handleScrollToSection} />

      {/* ✅ Reserve vertical space for sticky header using CSS variable */}
      <main
        className="max-w-6xl mx-auto px-4 py-6 space-y-8"
        style={{ paddingTop: "var(--header-height, 80px)" }}
      >
        <ShopCategory id="home" ref={shopCategoryRef} />
        <MainServices id="services" ref={mainServicesRef} />
        <InfoRow id="branches" ref={infoRowRef} />
      </main>

      <Footer />
    </div>
  );
};

export default App;
