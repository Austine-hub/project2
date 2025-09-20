import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Tailwind CSS import
import App from "./App";
import AboutUsPage from "@/pages/AboutUsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about-us" element={<AboutUsPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);



