import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import OperationsPage from "./pages/OperationsPage";
import SustainabilityPage from "./pages/SustainabilityPage";
import InvestorsPage from "./pages/InvestorsPage";
import CareersPage from "./pages/CareersPage";
import ApplyPage from "./pages/ApplyPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import LegalNoticesPage from "./pages/LegalNoticesPage";

import TermsOfUsePage from "./pages/TermsOfUsePage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/operations" element={<OperationsPage />} />
          <Route path="/sustainability" element={<SustainabilityPage />} />
          <Route path="/investors" element={<InvestorsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/policy" element={<PrivacyPolicyPage />} />
          <Route path="/Legal" element={<LegalNoticesPage />} />
          <Route path="/terms" element={<TermsOfUsePage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
