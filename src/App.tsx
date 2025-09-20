import React from "react";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import MainServices from "@/components/sections/MainServices";
import ShopCategory from "@/components/sections/ShopCategory";
import InfoRow from "@/components/layout/main/InfoRow";

// import Mission from "@/components/sections/Mission";
// import Harrison from "@/components/sections/Harrison";

const App = () => {
  return (
    <div className="bg-black text-white font-sans min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-6 space-y-8">
        <ShopCategory />
        <MainServices />
        <InfoRow />
        {/* <Mission /> */}
        {/* <Harrison /> */}
      </main>
      <Footer />
    </div>
  );
};

export default App;