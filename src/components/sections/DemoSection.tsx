import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";

interface DemoSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  arcadeUrl?: string;
  onCtaClick?: () => void;
}

const DemoSection = ({
  title,
  subtitle,
  ctaText = "Get Started Free",
  arcadeUrl = "https://app.arcade.software/share/template", // Replace with your actual arcade.software URL
  onCtaClick = () => window.open("https://app.utrack.cloud", "_blank"),
}: DemoSectionProps) => {
  const { t } = useTranslation();

  // Set default values after t is defined
  const demoTitle =
    title || (t ? t("experience_utrack") : "Experience utrack in Action");
  const demoSubtitle =
    subtitle ||
    (t
      ? t("try_interactive_demo")
      : "Try our interactive demo to see how utrack can transform your project management workflow");

  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 dark:bg-slate-800 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-12">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white text-gray-900">
              {demoTitle}
            </h2>
            <p className="text-lg dark:text-gray-300 text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              {demoSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="outline"
                onClick={() => {
                  const demoElement =
                    document.getElementById("interactive-demo");
                  if (demoElement) {
                    demoElement.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="dark:border-gray-600 dark:text-white"
              >
                <Play className="mr-2 h-4 w-4" />
                {t("watch_demo") || "Watch Demo"}
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="w-full rounded-lg overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="aspect-video w-full" id="interactive-demo">
            <iframe
              src={arcadeUrl}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="utrack Interactive Demo"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;
