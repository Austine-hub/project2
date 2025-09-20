import React from "react";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import AboutUs from "@/components/AboutUs/AboutUs";

const AboutUsPage: React.FC = () => {
  // Optional: scroll handler for landing-page sections if needed
  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-black text-white font-sans min-h-screen">
      {/* Header with Topbar + Navbar; Hero hidden */}
      <Header onNavClick={handleScrollToSection} hideHero />

      {/* About Us Section */}
      <main className="max-w-6xl mx-auto px-4 py-6">
        <AboutUs />
      </main>

      <Footer />
    </div>
  );
};

export default AboutUsPage;

