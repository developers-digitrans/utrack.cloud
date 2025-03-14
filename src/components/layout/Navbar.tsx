import React, { useState, useEffect } from "react";
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
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  MessageSquare,
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
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 dark:bg-slate-900 bg-white dark:text-white text-gray-900",
        {
          "shadow-md dark:bg-slate-900/95 bg-white/95 backdrop-blur-sm":
            isScrolled,
          "bg-transparent": !isScrolled,
        },
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md flex items-center justify-center dark:bg-white bg-black">
              <svg
                className="h-6 w-6 dark:text-black text-white"
                viewBox="0 0 192 192"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#logoClip)">
                  <path
                    fill="currentColor"
                    d="M 148.980469 34.386719 C 149.144531 28.046875 148.8125 21.691406 149.042969 15.351562 C 149.082031 14.398438 149.019531 13.570312 148.875 12.855469 L 118.140625 12.855469 C 118 13.546875 117.9375 14.328125 117.960938 15.246094 C 118.070312 19.628906 118.078125 24.042969 118.0625 40.382812 L 85.425781 40.382812 L 85.425781 71.203125 L 113.671875 71.203125 L 113.671875 71.234375 L 117.691406 71.234375 C 117.691406 85.496094 117.953125 99.554688 117.519531 113.59375 C 117.402344 117.410156 115.625 121.390625 113.824219 124.898438 C 106.367188 139.375 89.828125 147.152344 74.464844 143.746094 C 57.347656 139.949219 45.390625 126.519531 44.894531 109.542969 C 44.441406 93.898438 44.738281 78.242188 44.675781 62.589844 C 44.667969 61.496094 44.628906 60.402344 44.566406 59.285156 L 14.097656 59.285156 C 14.058594 59.804688 14.027344 60.316406 14.035156 60.832031 C 14.46875 81.089844 13.28125 101.558594 15.84375 121.546875 C 19.195312 147.632812 42.78125 169.769531 67.921875 174.082031 C 97.25 179.121094 124.820312 166.914062 139.34375 142.796875 C 146.6875 130.609375 149.285156 117.339844 149.402344 103.40625 C 149.488281 92.867188 149.417969 82.339844 149.417969 71.109375 L 178.746094 71.109375 L 178.746094 40.390625 L 148.988281 40.390625 C 148.980469 34.710938 148.980469 34.550781 148.980469 34.386719 Z M 148.980469 34.386719 "
                  />
                </g>
                <defs>
                  <clipPath id="logoClip">
                    <path d="M 14 12.828125 L 178.746094 12.828125 L 178.746094 176 L 14 176 Z M 14 12.828125 " />
                  </clipPath>
                </defs>
              </svg>
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
              {/* Pricing link hidden for now */}
              {/* <NavigationMenuItem>
                <Link
                  to="/pricing"
                  className="px-4 py-2 text-sm font-medium hover:text-primary"
                >
                  {t("pricing")}
                </Link>
              </NavigationMenuItem> */}
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
            <>
              <Button
                onClick={() => onOpenAuthModal("demo")}
                className="bg-primary hover:bg-primary/90 dark:bg-black dark:hover:bg-black/90 text-white"
              >
                Book a Demo
              </Button>
            </>
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
                    <div className="h-8 w-8 rounded-md flex items-center justify-center dark:bg-white bg-black">
                      <svg
                        className="h-6 w-6 dark:text-black text-white"
                        viewBox="0 0 192 192"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#logoClipMobile)">
                          <path
                            fill="currentColor"
                            d="M 148.980469 34.386719 C 149.144531 28.046875 148.8125 21.691406 149.042969 15.351562 C 149.082031 14.398438 149.019531 13.570312 148.875 12.855469 L 118.140625 12.855469 C 118 13.546875 117.9375 14.328125 117.960938 15.246094 C 118.070312 19.628906 118.078125 24.042969 118.0625 40.382812 L 85.425781 40.382812 L 85.425781 71.203125 L 113.671875 71.203125 L 113.671875 71.234375 L 117.691406 71.234375 C 117.691406 85.496094 117.953125 99.554688 117.519531 113.59375 C 117.402344 117.410156 115.625 121.390625 113.824219 124.898438 C 106.367188 139.375 89.828125 147.152344 74.464844 143.746094 C 57.347656 139.949219 45.390625 126.519531 44.894531 109.542969 C 44.441406 93.898438 44.738281 78.242188 44.675781 62.589844 C 44.667969 61.496094 44.628906 60.402344 44.566406 59.285156 L 14.097656 59.285156 C 14.058594 59.804688 14.027344 60.316406 14.035156 60.832031 C 14.46875 81.089844 13.28125 101.558594 15.84375 121.546875 C 19.195312 147.632812 42.78125 169.769531 67.921875 174.082031 C 97.25 179.121094 124.820312 166.914062 139.34375 142.796875 C 146.6875 130.609375 149.285156 117.339844 149.402344 103.40625 C 149.488281 92.867188 149.417969 82.339844 149.417969 71.109375 L 178.746094 71.109375 L 178.746094 40.390625 L 148.988281 40.390625 C 148.980469 34.710938 148.980469 34.550781 148.980469 34.386719 Z M 148.980469 34.386719 "
                          />
                        </g>
                        <defs>
                          <clipPath id="logoClipMobile">
                            <path d="M 14 12.828125 L 178.746094 12.828125 L 178.746094 176 L 14 176 Z M 14 12.828125 " />
                          </clipPath>
                        </defs>
                      </svg>
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
                    {/* Pricing link hidden for now */}
                    {/* <SheetClose asChild>
                      <Link
                        to="/pricing"
                        className="block px-2 py-2 text-sm hover:bg-accent rounded-md"
                      >
                        {t("pricing")}
                      </Link>
                    </SheetClose> */}
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
                  <div className="flex flex-col space-y-2">
                    <SheetClose asChild>
                      <Button
                        onClick={() => onOpenAuthModal("demo")}
                        className="w-full justify-center bg-primary hover:bg-primary/90 dark:bg-black dark:hover:bg-black/90 text-white"
                      >
                        Book a Demo
                      </Button>
                    </SheetClose>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
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
