import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css"; // Tailwind CSS
import App from "./App";
import AboutUsPage from "@/pages/AboutUsPage";
import TeamPage from "@/pages/TeamPage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<App />} />

        {/* About Us Page */}
        <Route path="/about-us" element={<AboutUsPage />} />

        {/* Health Experts / Team Page */}
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


