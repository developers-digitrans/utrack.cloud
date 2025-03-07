import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";

export interface PricingFeature {
  name: string;
  included: boolean;
}

export interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  features: PricingFeature[];
  popular?: boolean;
  ctaText?: string;
}

interface PricingCardProps {
  plan: PricingPlan;
  isAnnual?: boolean;
  onSelectPlan?: (plan: PricingPlan) => void;
}

const PricingCard = ({
  plan = {
    name: "Basic",
    description: "Perfect for individuals and small teams",
    monthlyPrice: 19,
    annualPrice: 190,
    popular: false,
    ctaText: "Get Started",
    features: [
      { name: "Up to 5 projects", included: true },
      { name: "Basic analytics", included: true },
      { name: "24/7 support", included: true },
      { name: "Custom domains", included: false },
      { name: "Advanced security", included: false },
      { name: "Team collaboration", included: false },
    ],
  },
  isAnnual = false,
  onSelectPlan = () => {},
}: PricingCardProps) => {
  const { t } = useTranslation();
  const currentPrice = isAnnual ? plan.annualPrice : plan.monthlyPrice;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full"
    >
      <Card
        className={`h-full flex flex-col ${plan.popular ? "border-primary shadow-lg" : "dark:border-slate-700 border-border"} dark:bg-slate-800 bg-card dark:text-white text-gray-900`}
      >
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
              <CardDescription className="mt-2">
                {plan.description}
              </CardDescription>
            </div>
            {plan.popular && (
              <Badge
                variant="default"
                className="bg-primary text-primary-foreground"
              >
                {t ? t("popular") : "Popular"}
              </Badge>
            )}
          </div>
          <div className="mt-4">
            <span className="text-3xl font-bold">${currentPrice}</span>
            <span className="text-muted-foreground ml-1">
              {isAnnual
                ? t
                  ? t("per_year")
                  : "/year"
                : t
                  ? t("per_month")
                  : "/month"}
            </span>
            {isAnnual && (
              <p className="text-sm text-muted-foreground mt-1">
                {t ? t("save_annually") : "Save"} $
                {plan.monthlyPrice * 12 - plan.annualPrice}{" "}
                {t ? "" : "annually"}
              </p>
            )}
          </div>
        </CardHeader>

        <CardContent className="flex-grow">
          <ul className="space-y-3">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span
                  className={`mr-2 mt-0.5 ${feature.included ? "text-primary" : "text-muted-foreground"}`}
                >
                  {feature.included ? (
                    <Check size={16} />
                  ) : (
                    <span className="block w-4 h-4 rounded-full border border-muted-foreground"></span>
                  )}
                </span>
                <span
                  className={
                    feature.included
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }
                >
                  {feature.name}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>

        <CardFooter>
          <Button
            onClick={() => onSelectPlan(plan)}
            className={`w-full bg-primary dark:bg-black hover:bg-primary/90 dark:hover:bg-black/90 text-white`}
            variant="default"
          >
            Contact Sales
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default PricingCard;
