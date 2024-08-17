import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ComingSoon from "./pages/comingSoon.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      {/* <App /> */}

      <Routes>
        <Route index element={<App />} />
        <Route path="comingsoon" element={<ComingSoon />} />
      </Routes>
    </Router>
  </StrictMode>
);
