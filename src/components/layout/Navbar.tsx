import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import {
  Menu,
  X,
  User,
  LogIn,
  ChevronDown,
  Moon,
  Sun,
  Globe,
} from "lucide-react";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "../ui/sheet";
import { cn } from "../../lib/utils";
import { useTheme } from "../../lib/theme";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface NavbarProps {
  onOpenAuthModal?: (type: "login" | "signup") => void;
  isLoggedIn?: boolean;
  userProfile?: {
    name?: string;
    avatar?: string;
  };
}

const Navbar = ({
  onOpenAuthModal = () => {},
  isLoggedIn = false,
  userProfile = { name: "User", avatar: undefined },
}: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme, language, setLanguage } = useTheme();
  const { t } = useTranslation();
  const features = getFeatures(t);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      // Handle logout success (e.g., redirect or update UI)
      console.log("Logged out successfully");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 dark:bg-slate-900 bg-white dark:text-white text-gray-900",
        {
          "shadow-md dark:bg-slate-900/95 bg-white/95 backdrop-blur-sm":
            isScrolled,
          "bg-transparent": !isScrolled,
        },
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
              <span className="text-white dark:text-black font-bold">UT</span>
            </div>
            <span className="font-bold text-xl">utrack</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>{t("features")}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px] grid-cols-2">
                    {features.map((feature) => (
                      <li key={feature.title}>
                        <NavigationMenuLink asChild>
                          <a
                            href={feature.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {feature.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {feature.description}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  to="/pricing"
                  className="px-4 py-2 text-sm font-medium hover:text-primary"
                >
                  {t("pricing")}
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  to="/about"
                  className="px-4 py-2 text-sm font-medium hover:text-primary"
                >
                  {t("about")}
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  to="/contact"
                  className="px-4 py-2 text-sm font-medium hover:text-primary"
                >
                  {t("contact")}
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Theme, Language and Authentication Buttons */}
          <div className="flex items-center ml-4 space-x-2">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Change language"
                >
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() => setLanguage("en")}
                  className={language === "en" ? "bg-accent" : ""}
                >
                  English
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage("fr")}
                  className={language === "fr" ? "bg-accent" : ""}
                >
                  Français
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage("ar")}
                  className={language === "ar" ? "bg-accent" : ""}
                >
                  العربية
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Authentication Buttons */}
            {isLoggedIn ? (
              <div className="flex items-center">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="flex items-center gap-2">
                        {userProfile.avatar ? (
                          <img
                            src={userProfile.avatar}
                            alt="User avatar"
                            className="w-8 h-8 rounded-full"
                          />
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <User className="h-4 w-4 text-primary" />
                          </div>
                        )}
                        <span>{userProfile.name}</span>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="w-48 p-2">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link
                                to="/dashboard"
                                className="block px-4 py-2 text-sm hover:bg-accent rounded-md w-full text-left"
                              >
                                {t("dashboard")}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link
                                to="/profile"
                                className="block px-4 py-2 text-sm hover:bg-accent rounded-md w-full text-left"
                              >
                                {t("profile")}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <button
                                onClick={handleLogout}
                                className="block px-4 py-2 text-sm hover:bg-accent rounded-md w-full text-left text-red-500"
                              >
                                {t("logout")}
                              </button>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            ) : (
              <>
                <Button
                  variant="ghost"
                  onClick={() => onOpenAuthModal("login")}
                  className="flex items-center gap-1"
                >
                  <LogIn className="h-4 w-4 mr-1" />
                  {t("login")}
                </Button>
                <Button
                  onClick={() => onOpenAuthModal("signup")}
                  className="bg-primary hover:bg-primary/90 dark:bg-black dark:hover:bg-black/90 text-white"
                >
                  {t("signup")}
                </Button>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center py-4">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
                      <span className="text-white dark:text-black font-bold">
                        UT
                      </span>
                    </div>
                    <span className="font-bold text-xl">utrack</span>
                  </div>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                    </Button>
                  </SheetClose>
                </div>

                <div className="flex flex-col space-y-4 py-4">
                  <div className="border-b pb-4">
                    <div className="px-2 mb-2 text-sm font-semibold text-muted-foreground">
                      {t("features")}
                    </div>
                    {features.map((feature) => (
                      <SheetClose asChild key={feature.title}>
                        <Link
                          to={feature.href}
                          className="flex flex-col px-2 py-2 text-sm hover:bg-accent rounded-md"
                        >
                          <span className="font-medium">{feature.title}</span>
                          <span className="text-xs text-muted-foreground">
                            {feature.description}
                          </span>
                        </Link>
                      </SheetClose>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <SheetClose asChild>
                      <Link
                        to="/pricing"
                        className="block px-2 py-2 text-sm hover:bg-accent rounded-md"
                      >
                        {t("pricing")}
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        to="/about"
                        className="block px-2 py-2 text-sm hover:bg-accent rounded-md"
                      >
                        {t("about")}
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        to="/contact"
                        className="block px-2 py-2 text-sm hover:bg-accent rounded-md"
                      >
                        {t("contact")}
                      </Link>
                    </SheetClose>
                  </div>
                </div>

                {/* Theme and Language Controls */}
                <div className="border-t border-b py-4 mb-4">
                  <div className="px-2 mb-2 text-sm font-semibold text-muted-foreground">
                    {t("preferences")}
                  </div>
                  <div className="flex justify-between px-2 py-2">
                    <span>{t("theme")}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                      }
                      className="px-2"
                    >
                      {theme === "dark" ? (
                        <>
                          <Sun className="h-4 w-4 mr-2" />
                          {t("light")}
                        </>
                      ) : (
                        <>
                          <Moon className="h-4 w-4 mr-2" />
                          {t("dark")}
                        </>
                      )}
                    </Button>
                  </div>
                  <div className="flex justify-between px-2 py-2">
                    <span>{t("language")}</span>
                    <select
                      value={language}
                      onChange={(e) =>
                        setLanguage(e.target.value as "en" | "fr" | "ar")
                      }
                      className="bg-transparent border rounded px-2 py-1 text-sm"
                    >
                      <option value="en">English</option>
                      <option value="fr">Français</option>
                      <option value="ar">العربية</option>
                    </select>
                  </div>
                </div>

                <div className="mt-auto border-t pt-4">
                  {isLoggedIn ? (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 px-2 py-2">
                        {userProfile.avatar ? (
                          <img
                            src={userProfile.avatar}
                            alt="User avatar"
                            className="w-8 h-8 rounded-full"
                          />
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <User className="h-4 w-4 text-primary" />
                          </div>
                        )}
                        <span className="font-medium">{userProfile.name}</span>
                      </div>
                      <SheetClose asChild>
                        <Link
                          to="/dashboard"
                          className="block px-2 py-2 text-sm hover:bg-accent rounded-md"
                        >
                          {t("dashboard")}
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link
                          to="/profile"
                          className="block px-2 py-2 text-sm hover:bg-accent rounded-md"
                        >
                          {t("profile")}
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <button
                          onClick={handleLogout}
                          className="block w-full text-left px-2 py-2 text-sm hover:bg-accent rounded-md text-red-500"
                        >
                          {t("logout")}
                        </button>
                      </SheetClose>
                    </div>
                  ) : (
                    <div className="flex flex-col space-y-2">
                      <SheetClose asChild>
                        <Button
                          variant="outline"
                          onClick={() => onOpenAuthModal("login")}
                          className="w-full justify-center dark:bg-black dark:text-white dark:border-gray-600"
                        >
                          <LogIn className="h-4 w-4 mr-2" />
                          {t("login")}
                        </Button>
                      </SheetClose>
                      <SheetClose asChild>
                        <Button
                          onClick={() => onOpenAuthModal("signup")}
                          className="w-full justify-center bg-primary hover:bg-primary/90 dark:bg-black dark:hover:bg-black/90 text-white"
                        >
                          {t("signup")}
                        </Button>
                      </SheetClose>
                    </div>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

const getFeatures = (t: any) => [
  {
    title: t ? t("task_management") : "Task Management",
    description: t
      ? t("task_management_desc")
      : "Create, assign, and track tasks with ease",
    href: "/features/tasks",
  },
  {
    title: t ? t("team_collaboration_feature") : "Team Collaboration",
    description: t
      ? t("team_collaboration_desc")
      : "Work together seamlessly with your team",
    href: "/features/collaboration",
  },
  {
    title: t ? t("time_tracking") : "Time Tracking",
    description: t
      ? t("time_tracking_desc")
      : "Monitor time spent on projects and tasks",
    href: "/features/time-tracking",
  },
  {
    title: t ? t("analytics_reports") : "Analytics & Reports",
    description: t
      ? t("analytics_reports_desc")
      : "Gain insights with powerful reporting tools",
    href: "/features/analytics",
  },
  {
    title: t ? t("resource_management") : "Resource Management",
    description: t
      ? t("resource_management_desc")
      : "Optimize resource allocation across projects",
    href: "/features/resources",
  },
  {
    title: t ? t("integrations") : "Integrations",
    description: t
      ? t("integrations_desc")
      : "Connect with your favorite tools and services",
    href: "/features/integrations",
  },
];

export default Navbar;
