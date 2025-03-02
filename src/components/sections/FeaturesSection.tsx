import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation, Variants } from "framer-motion";
import { Rocket, Sparkles, Target, Lightbulb } from "lucide-react";
import FeatureCard from "../cards/FeatureCard";
import { useTranslation } from "react-i18next";

interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  title?: string;
  subtitle?: string;
  features?: Feature[];
}

const getDefaultFeatures = (t: any): Feature[] => [
  {
    id: 1,
    icon: <Rocket className="h-10 w-10 text-primary" />,
    title: t ? t("streamlined_workflow") : "Streamlined Workflow",
    description: t
      ? t("streamlined_workflow_desc")
      : "Automate repetitive tasks and focus on what matters most with our intelligent workflow tools.",
  },
  {
    id: 2,
    icon: <Target className="h-10 w-10 text-primary" />,
    title: t ? t("goal_tracking") : "Goal Tracking",
    description: t
      ? t("goal_tracking_desc")
      : "Set clear objectives and track progress with visual dashboards and real-time updates.",
  },
  {
    id: 3,
    icon: <Sparkles className="h-10 w-10 text-primary" />,
    title: t ? t("ai_powered_insights") : "AI-Powered Insights",
    description: t
      ? t("ai_powered_insights_desc")
      : "Leverage machine learning to identify patterns and get actionable recommendations for your projects.",
  },
  {
    id: 4,
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: t ? t("collaborative_workspace") : "Collaborative Workspace",
    description: t
      ? t("collaborative_workspace_desc")
      : "Bring your team together in a shared space designed for seamless communication and idea sharing.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const FeaturesSection = ({
  title,
  subtitle,
  features,
}: FeaturesSectionProps) => {
  const { t } = useTranslation();

  // Use translated features if none provided
  const defaultFeatures = getDefaultFeatures(t);
  features = features || defaultFeatures;

  // Use translated text or fallback to props
  const featuresTitle = title || t("features_title");
  const featuresSubtitle = subtitle || t("features_subtitle");
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <section
      className="py-20 px-4 md:px-8 lg:px-12 dark:bg-slate-900 bg-gray-50"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 dark:text-white text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {featuresTitle}
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-lg dark:text-gray-300 text-gray-600"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {featuresSubtitle}
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {features.map((feature) => (
            <motion.div key={feature.id} variants={itemVariants}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                onClick={() => console.log(`Feature ${feature.id} clicked`)}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary dark:bg-black hover:bg-primary/90 dark:hover:bg-black/90 transition-colors duration-300"
          >
            {t("explore_features")}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
