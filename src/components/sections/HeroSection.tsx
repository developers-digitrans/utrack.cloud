import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  secondaryCtaText?: string;
  onCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
}

const HeroSection = ({
  title,
  subtitle,
  ctaText,
  secondaryCtaText,
  onCtaClick = () => console.log("Primary CTA clicked"),
  onSecondaryCtaClick = () => console.log("Secondary CTA clicked"),
}: HeroSectionProps) => {
  const { t } = useTranslation();

  // Use translated text or fallback to props
  const heroTitle = title || t("hero_title");
  const heroSubtitle = subtitle || t("hero_subtitle");
  const heroCta = ctaText || t("get_started");
  const heroSecondaryCta = secondaryCtaText || t("see_how");
  return (
    <section className="relative w-full min-h-[800px] bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 from-indigo-50 via-purple-50 to-blue-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl"
          animate={{
            y: [0, 20, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"
          animate={{
            y: [0, -20, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-indigo-300 rounded-full opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Hero Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight dark:text-white text-gray-900 mb-6">
              {heroTitle}
            </h1>
            <p className="text-xl dark:text-gray-300 text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              {heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.div whileHover={{ y: -5 }} whileTap={{ y: 0 }}>
                <Button
                  size="lg"
                  onClick={onCtaClick}
                  className="bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-black/90 text-primary dark:text-white font-medium px-8 rounded-full"
                >
                  {heroCta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} whileTap={{ y: 0 }}>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={onSecondaryCtaClick}
                  className="dark:bg-black dark:border-gray-600 border-gray-300 dark:text-white text-gray-700 font-medium px-8 rounded-full"
                >
                  {heroSecondaryCta}
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <ImageSlider />

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-8 -right-8 bg-white dark:bg-slate-800 p-4 rounded-lg shadow-lg flex items-center gap-3"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
                  <svg
                    className="w-6 h-6 text-green-600 dark:text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium dark:text-white">
                    {t("task_completed")}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-300">
                    {t("just_now")}
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-3 rounded-lg shadow-lg"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="bg-blue-100 dark:bg-blue-900 p-1.5 rounded-full">
                    <svg
                      className="w-5 h-5 text-blue-600 dark:text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm font-medium dark:text-white">
                    {t("time_saved")}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <p className="text-sm dark:text-gray-300 text-gray-500 mb-2">
            {t("scroll_explore")}
          </p>
          <ArrowDown className="h-5 w-5 text-gray-400" />
        </motion.div>
      </div>
    </section>
  );
};

// Image Slider Component
const ImageSlider = () => {
  const images = [
    "/images/issues-dark.webp",
    "/images/cycles-dark.webp",
    "/images/pages-dark.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    let interval;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // Change image every 5 seconds
    }

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div
      className="relative rounded-lg shadow-2xl w-full max-w-2xl mx-auto overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative aspect-[16/10]">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Project Management Dashboard ${currentIndex + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors duration-300"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors duration-300"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-white w-4" : "bg-white/50"}`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
