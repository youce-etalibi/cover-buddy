import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderMessage from "./a - header/header-msg";
import HeaderNavbar from "./a - header/header-navbar";
import SectionPromo from "./b - section-promo/section-promo";
import TypesFiltrage from "./c - section-types/section-types-filtrage";

export default function HomePage() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeaderMessage />
              <HeaderNavbar />
              <SectionPromo/>
              <TypesFiltrage/>
            </>
          }
        />
      </Routes>
    </Router>
  );
}
