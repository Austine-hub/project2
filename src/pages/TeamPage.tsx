import React from "react";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import TeamSection from "@/components/sections/TeamSection";

const TeamPage: React.FC = () => {
  return (
    <div className="bg-black text-white font-sans min-h-screen">
      {/* Header + Navbar */}
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-6">
        {/* Team Section */}
        <TeamSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TeamPage;


