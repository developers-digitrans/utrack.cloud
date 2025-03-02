import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Zap,
  BarChart,
  Users,
  Calendar,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

interface FeatureCardProps {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  ctaText?: string;
  onClick?: () => void;
}

const FeatureCard = ({
  icon = <Zap className="h-10 w-10 text-primary" />,
  title = "Boost Productivity",
  description = "Streamline your workflow and get more done in less time with our intuitive project management tools.",
  ctaText = "Learn more",
  onClick = () => console.log("Feature card clicked"),
}: FeatureCardProps) => {
  const { t } = useTranslation();
  // Default icons to use if none provided
  const defaultIcons = [
    <Zap className="h-10 w-10 text-primary" key="zap" />,
    <BarChart className="h-10 w-10 text-primary" key="chart" />,
    <Users className="h-10 w-10 text-primary" key="users" />,
    <Calendar className="h-10 w-10 text-primary" key="calendar" />,
  ];

  // Use provided icon or select a random one from defaults
  const displayIcon =
    icon || defaultIcons[Math.floor(Math.random() * defaultIcons.length)];

  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col dark:bg-slate-800 bg-white dark:border-slate-700 border-gray-200 overflow-hidden dark:text-white text-gray-900">
        <CardHeader className="pb-2">
          <div className="mb-4">{displayIcon}</div>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription className="dark:text-gray-300 text-gray-600">
            {description}
          </CardDescription>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span className="text-sm">
                {t ? t("easy_to_implement") : "Easy to implement"}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span className="text-sm">
                {t ? t("seamless_integration") : "Seamless integration"}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span className="text-sm">
                {t ? t("real_time_updates") : "Real-time updates"}
              </span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button
            variant="ghost"
            className="group p-0 h-auto font-medium text-primary hover:text-primary/80 dark:hover:bg-black dark:hover:text-white"
            onClick={onClick}
          >
            {ctaText}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default FeatureCard;
