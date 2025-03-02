import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./layout/Navbar";
import HeroSection from "./sections/HeroSection";
import FeaturesSection from "./sections/FeaturesSection";
import PricingSection from "./sections/PricingSection";
import Footer from "./layout/Footer";
import AuthModal from "./auth/AuthModal";
import { useTheme } from "../lib/theme";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalType, setAuthModalType] = useState<"login" | "signup">(
    "login",
  );
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { theme } = useTheme();
  const { t } = useTranslation();

  const handleOpenAuthModal = (type: "login" | "signup") => {
    setAuthModalType(type);
    setAuthModalOpen(true);
  };

  const handleCloseAuthModal = () => {
    setAuthModalOpen(false);
  };

  // Mock user profile data
  const userProfile = {
    name: "John Doe",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
  };

  return (
    <div
      className={`min-h-screen bg-background text-foreground ${theme === "dark" ? "dark" : ""}`}
    >
      {/* Navigation */}
      <Navbar
        onOpenAuthModal={handleOpenAuthModal}
        isLoggedIn={isLoggedIn}
        userProfile={userProfile}
      />

      {/* Hero Section */}
      <HeroSection
        onCtaClick={() => handleOpenAuthModal("signup")}
        onSecondaryCtaClick={() => console.log("See how it works clicked")}
      />

      {/* Features Section */}
      <FeaturesSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Footer */}
      <Footer />

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={handleCloseAuthModal}
        defaultTab={authModalType}
      />

      {/* Scroll to top button */}
      <motion.button
        className="fixed bottom-8 right-8 p-3 rounded-full bg-primary dark:bg-black text-white shadow-lg z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </div>
  );
};

export default Home;
