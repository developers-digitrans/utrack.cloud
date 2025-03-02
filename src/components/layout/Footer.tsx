import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { useTranslation } from "react-i18next";

interface FooterProps {
  companyName?: string;
  companyDescription?: string;
  navigationLinks?: Array<{ label: string; href: string }>;
  contactInfo?: {
    email?: string;
    phone?: string;
    address?: string;
  };
  socialLinks?: Array<{ platform: string; href: string }>;
}

const Footer = ({
  companyName = "utrack",
  companyDescription = "Modern project management platform designed to streamline your workflow and boost team productivity.",
  navigationLinks = [
    { label: "Home", href: "/" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  contactInfo = {
    email: "info@projectflow.com",
    phone: "+1 (555) 123-4567",
    address: "123 Workflow Street, San Francisco, CA 94107",
  },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">{companyName}</h3>
            <p className="text-slate-300 text-sm">
              {t("company_description", companyDescription)}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors"
                  whileHover={{ y: -3 }}
                  aria-label={`${link.platform} link`}
                >
                  {getSocialIcon(link.platform)}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">{t("quick_links")}</h3>
            <nav>
              <ul className="space-y-2">
                {navigationLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-slate-300 hover:text-white transition-colors text-sm"
                    >
                      {t(
                        link.label.toLowerCase().replace(" ", "_"),
                        link.label,
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">{t("contact_us")}</h3>
            <ul className="space-y-3">
              {contactInfo.email && (
                <li className="flex items-start space-x-2 text-sm">
                  <Mail className="h-5 w-5 text-slate-400 mt-0.5" />
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </li>
              )}
              {contactInfo.phone && (
                <li className="flex items-start space-x-2 text-sm">
                  <Phone className="h-5 w-5 text-slate-400 mt-0.5" />
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </li>
              )}
              {contactInfo.address && (
                <li className="flex items-start space-x-2 text-sm">
                  <MapPin className="h-5 w-5 text-slate-400 mt-0.5" />
                  <span className="text-slate-300">{contactInfo.address}</span>
                </li>
              )}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">{t("stay_updated")}</h3>
            <p className="text-slate-300 text-sm">{t("newsletter_text")}</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log("Newsletter form submitted");
              }}
              className="space-y-2"
            >
              <Input
                type="email"
                placeholder={t("your_email_address", "Your email address")}
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
                required
                aria-label="Email for newsletter"
              />
              <Button
                type="submit"
                className="w-full dark:bg-black dark:hover:bg-black/90 dark:text-white"
              >
                {t("subscribe")}
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8 bg-slate-700" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>
            © {new Date().getFullYear()} {companyName}. {t("rights_reserved")}
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="/privacy" className="hover:text-white transition-colors">
              {t("privacy_policy")}
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              {t("terms")}
            </a>
            <a href="/cookies" className="hover:text-white transition-colors">
              {t("cookie_policy")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
