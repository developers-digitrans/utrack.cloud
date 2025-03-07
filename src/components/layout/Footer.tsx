import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Separator } from "../ui/separator";
import { useTranslation } from "react-i18next";

interface FooterProps {
  companyName?: string;
  companyDescription?: string;
  socialLinks?: Array<{ platform: string; href: string }>;
}

const Footer = ({
  companyName = "utrack",
  companyDescription = "Modern project management platform designed to streamline your workflow and boost team productivity.",
  socialLinks = [
    { platform: "Facebook", href: "https://facebook.com" },
    { platform: "Twitter", href: "https://twitter.com" },
    { platform: "Instagram", href: "https://instagram.com" },
    { platform: "LinkedIn", href: "https://linkedin.com" },
  ],
}: FooterProps) => {
  const { t } = useTranslation();
  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "facebook":
        return <Facebook className="h-5 w-5" />;
      case "twitter":
        return <Twitter className="h-5 w-5" />;
      case "instagram":
        return <Instagram className="h-5 w-5" />;
      case "linkedin":
        return <Linkedin className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-12 px-4 md:px-8 w-full">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Company Info */}
          <div className="space-y-4 mb-8 md:mb-0">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md flex items-center justify-center dark:bg-white bg-black">
                <svg
                  className="h-6 w-6 dark:text-black text-white"
                  viewBox="0 0 192 192"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#logoClipFooter)">
                    <path
                      fill="currentColor"
                      d="M 148.980469 34.386719 C 149.144531 28.046875 148.8125 21.691406 149.042969 15.351562 C 149.082031 14.398438 149.019531 13.570312 148.875 12.855469 L 118.140625 12.855469 C 118 13.546875 117.9375 14.328125 117.960938 15.246094 C 118.070312 19.628906 118.078125 24.042969 118.0625 40.382812 L 85.425781 40.382812 L 85.425781 71.203125 L 113.671875 71.203125 L 113.671875 71.234375 L 117.691406 71.234375 C 117.691406 85.496094 117.953125 99.554688 117.519531 113.59375 C 117.402344 117.410156 115.625 121.390625 113.824219 124.898438 C 106.367188 139.375 89.828125 147.152344 74.464844 143.746094 C 57.347656 139.949219 45.390625 126.519531 44.894531 109.542969 C 44.441406 93.898438 44.738281 78.242188 44.675781 62.589844 C 44.667969 61.496094 44.628906 60.402344 44.566406 59.285156 L 14.097656 59.285156 C 14.058594 59.804688 14.027344 60.316406 14.035156 60.832031 C 14.46875 81.089844 13.28125 101.558594 15.84375 121.546875 C 19.195312 147.632812 42.78125 169.769531 67.921875 174.082031 C 97.25 179.121094 124.820312 166.914062 139.34375 142.796875 C 146.6875 130.609375 149.285156 117.339844 149.402344 103.40625 C 149.488281 92.867188 149.417969 82.339844 149.417969 71.109375 L 178.746094 71.109375 L 178.746094 40.390625 L 148.988281 40.390625 C 148.980469 34.710938 148.980469 34.550781 148.980469 34.386719 Z M 148.980469 34.386719 "
                    />
                  </g>
                  <defs>
                    <clipPath id="logoClipFooter">
                      <path d="M 14 12.828125 L 178.746094 12.828125 L 178.746094 176 L 14 176 Z M 14 12.828125 " />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="text-xl font-bold">{companyName}</h3>
            </div>
            <p className="text-slate-300 text-sm max-w-md">
              {t("company_description", companyDescription)}
            </p>
          </div>
        </div>

        <Separator className="my-8 bg-slate-700" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>
            © {new Date().getFullYear()}, a Digitrans, Inc product.{" "}
            {t("rights_reserved")}
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">
              {t("privacy_policy")}
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              {t("terms")}
            </Link>
            <Link to="/cookies" className="hover:text-white transition-colors">
              {t("cookie_policy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
