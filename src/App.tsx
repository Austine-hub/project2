import React from "react";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import MainServices from "@/components/sections/MainServices";
import ShopCategory from "@/components/sections/ShopCategory";
import InfoRow from "@/components/layout/main/InfoRow";

const App: React.FC = () => {
  // Scroll handler for SPA landing-page sections
  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-black text-white font-sans min-h-screen">
      {/* Header with Topbar + Navbar (Hero included) */}
      <Header onNavClick={handleScrollToSection} />

      <main className="max-w-6xl mx-auto px-4 py-6 space-y-8">
        {/* Landing-page sections */}
        <ShopCategory id="home" />
        <MainServices id="services" /> {/* "Our Services" scroll target */}
        <InfoRow id="branches" />
      </main>

      <Footer />
    </div>
  );
};

export default App;


