import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import PricingCard from "../cards/PricingCard";
import { useTranslation } from "react-i18next";

// Define the PricingPlan type locally instead of importing it
interface PricingFeature {
  name: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  features: PricingFeature[];
  popular?: boolean;
  ctaText?: string;
}

interface PricingSectionProps {
  title?: string;
  description?: string;
  plans?: PricingPlan[];
}

const getDefaultPlans = (t: any) => [
  {
    name: t ? t("basic") : "Starter",
    description: t
      ? t("perfect_for_individuals")
      : "Perfect for individuals and small teams",
    monthlyPrice: 19,
    annualPrice: 190,
    popular: false,
    ctaText: t ? t("get_started") : "Get Started",
    features: [
      { name: t ? t("up_to_5_projects") : "Up to 5 projects", included: true },
      { name: t ? t("basic_analytics") : "Basic analytics", included: true },
      { name: t ? t("support_247") : "24/7 support", included: true },
      { name: t ? t("custom_domains") : "Custom domains", included: false },
      {
        name: t ? t("advanced_security") : "Advanced security",
        included: false,
      },
      {
        name: t ? t("team_collaboration") : "Team collaboration",
        included: false,
      },
    ],
  },
  {
    name: t ? t("pro") : "Pro",
    description: t
      ? t("ideal_for_growing")
      : "Ideal for growing teams and businesses",
    monthlyPrice: 49,
    annualPrice: 490,
    popular: true,
    ctaText: t ? t("start_free_trial") : "Start Free Trial",
    features: [
      {
        name: t ? t("unlimited_projects") : "Unlimited projects",
        included: true,
      },
      {
        name: t ? t("advanced_analytics") : "Advanced analytics",
        included: true,
      },
      {
        name: t ? t("priority_support") : "24/7 priority support",
        included: true,
      },
      { name: t ? t("custom_domains") : "Custom domains", included: true },
      {
        name: t ? t("advanced_security") : "Advanced security",
        included: true,
      },
      {
        name: t ? t("team_collaboration") : "Team collaboration",
        included: false,
      },
    ],
  },
  {
    name: t ? t("enterprise") : "Enterprise",
    description: t
      ? t("for_large_organizations")
      : "For large organizations with complex needs",
    monthlyPrice: 99,
    annualPrice: 990,
    popular: false,
    ctaText: t ? t("contact_sales") : "Contact Sales",
    features: [
      {
        name: t ? t("unlimited_projects") : "Unlimited projects",
        included: true,
      },
      {
        name: t ? t("enterprise_analytics") : "Enterprise analytics",
        included: true,
      },
      {
        name: t ? t("dedicated_support") : "24/7 dedicated support",
        included: true,
      },
      { name: t ? t("custom_domains") : "Custom domains", included: true },
      {
        name: t ? t("advanced_security") : "Advanced security",
        included: true,
      },
      {
        name: t ? t("team_collaboration") : "Team collaboration",
        included: true,
      },
    ],
  },
];

const PricingSection = ({ title, description, plans }: PricingSectionProps) => {
  const [isAnnual, setIsAnnual] = useState(false);
  const { t } = useTranslation();

  // Use translated plans if none provided
  const defaultPlans = getDefaultPlans(t);
  plans = plans || defaultPlans;

  // Use translated text or fallback to props
  const pricingTitle = title || t("pricing_title");
  const pricingDescription = description || t("pricing_description");

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const handleSelectPlan = (plan: PricingPlan) => {
    console.log(`Selected plan: ${plan.name}`);
    // In a real implementation, this would navigate to checkout or sign up
  };

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b dark:from-slate-800 dark:to-slate-900 from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 dark:text-white text-gray-900">
            {pricingTitle}
          </h2>
          <p className="text-lg dark:text-gray-300 text-gray-600 max-w-2xl mx-auto">
            {pricingDescription}
          </p>

          <div className="flex items-center justify-center mt-8 space-x-3">
            <Label
              htmlFor="pricing-toggle"
              className={`text-sm font-medium ${!isAnnual ? "dark:text-white text-gray-900" : "dark:text-gray-400 text-gray-500"}`}
            >
              {t("monthly")}
            </Label>
            <Switch
              id="pricing-toggle"
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
            />
            <Label
              htmlFor="pricing-toggle"
              className={`text-sm font-medium ${isAnnual ? "dark:text-white text-gray-900" : "dark:text-gray-400 text-gray-500"}`}
            >
              {t("annual")}
              <span className="ml-1.5 inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                {t("save")}
              </span>
            </Label>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div key={index} variants={itemVariants}>
              <PricingCard
                plan={plan}
                isAnnual={isAnnual}
                onSelectPlan={handleSelectPlan}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="dark:text-gray-300 text-gray-600 max-w-3xl mx-auto">
            {t("pricing_footer")}{" "}
            <a
              href="#contact"
              className="text-primary font-medium hover:underline"
            >
              {t("contact_sales")}
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
