// src/RootRouter.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";
import TeamPage from "./pages/TeamPage";
import AboutPage from "./pages/AboutPage"; // optional, if you have About Us page

const RootRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Landing page */}
        <Route path="/" element={<App />} />

        {/* Health Experts page */}
        <Route path="/health-experts" element={<TeamPage />} />

        {/* About Us page */}
        <Route path="/about-us" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default RootRouter;
