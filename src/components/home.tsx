import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./layout/Navbar";
import HeroSection from "./sections/HeroSection";
import DemoSection from "./sections/DemoSection";
import FeaturesSection from "./sections/FeaturesSection";
import PricingSection from "./sections/PricingSection";
import Footer from "./layout/Footer";
import AuthModal from "./auth/AuthModal";
import BookDemoModal from "./modals/BookDemoModal";
import { useTheme } from "../lib/theme";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalType, setAuthModalType] = useState<"login" | "signup">(
    "login",
  );
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { theme } = useTheme();
  const { t } = useTranslation();

  const handleOpenAuthModal = (type: "login" | "signup" | "demo") => {
    if (type === "demo") {
      handleOpenDemoModal();
      return;
    }
    setAuthModalType(type as "login" | "signup");
    setAuthModalOpen(true);
  };

  const handleCloseAuthModal = () => {
    setAuthModalOpen(false);
  };

  const handleOpenDemoModal = () => {
    setDemoModalOpen(true);
  };

  // Listen for custom event to open demo modal from pricing section
  useEffect(() => {
    const handleOpenDemoEvent = () => {
      setDemoModalOpen(true);
    };

    window.addEventListener("openDemoModal", handleOpenDemoEvent);

    return () => {
      window.removeEventListener("openDemoModal", handleOpenDemoEvent);
    };
  }, []);

  const handleCloseDemoModal = () => {
    setDemoModalOpen(false);
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
        onSecondaryCtaClick={handleOpenDemoModal}
      />

      {/* Demo Section */}
      <DemoSection
        arcadeUrl="https://app.arcade.software/share/template" // Replace with your actual arcade.software URL
        onCtaClick={() => window.open("https://app.utrack.cloud", "_blank")}
      />

      {/* Features Section */}
      <FeaturesSection />

      {/* Pricing Section - Hidden for now */}
      {/* <PricingSection /> */}

      {/* Footer */}
      <Footer />

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={handleCloseAuthModal}
        defaultTab={authModalType}
      />

      {/* Book Demo Modal */}
      <BookDemoModal isOpen={demoModalOpen} onClose={handleCloseDemoModal} />

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
