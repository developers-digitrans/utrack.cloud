import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { useTheme } from "../../lib/theme";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";

interface OfficeLocation {
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  mapUrl: string;
  image: string;
}

const Contact = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const officeLocations: OfficeLocation[] = [
    {
      city: "Dubai",
      country: "United Arab Emirates",
      address: "Business Bay, Downtown Dubai, UAE",
      phone: "+971 4 123 4567",
      email: "dubai@utrack.com",
      hours: "Sun-Thu: 9:00 AM - 6:00 PM",
      mapUrl: "https://maps.google.com/?q=Business+Bay+Dubai",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
    },
    {
      city: "Paris",
      country: "France",
      address: "75008 Paris, France",
      phone: "+33 1 23 45 67 89",
      email: "paris@utrack.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM",
      mapUrl: "https://maps.google.com/?q=75008+Paris+France",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop",
    },
    {
      city: "London",
      country: "United Kingdom",
      address: "Canary Wharf, London E14, UK",
      phone: "+44 20 1234 5678",
      email: "london@utrack.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM",
      mapUrl: "https://maps.google.com/?q=Canary+Wharf+London",
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop",
    },
    {
      city: "Casablanca",
      country: "Morocco",
      address: "Casablanca Business District, Morocco",
      phone: "+212 5 22 12 34 56",
      email: "casablanca@utrack.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM",
      mapUrl: "https://maps.google.com/?q=Casablanca+Morocco",
      image:
        "https://images.unsplash.com/photo-1577147443647-81856d5151af?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div
      className={`min-h-screen bg-background text-foreground ${theme === "dark" ? "dark" : ""}`}
    >
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 lg:px-12 bg-gradient-to-b dark:from-slate-900 dark:to-slate-800 from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 dark:text-white text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t("contact_us")}
          </motion.h1>
          <motion.p
            className="text-xl dark:text-gray-300 text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t("contact_subtitle") ||
              "We'd love to hear from you. Get in touch with our team."}
          </motion.p>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 px-4 md:px-8 lg:px-12 dark:bg-slate-800 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white text-gray-900">
            {t("our_offices") || "Our Global Offices"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {officeLocations.map((office, index) => (
              <motion.div
                key={office.city}
                className="bg-white dark:bg-slate-700 rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={office.image}
                    alt={`${office.city} office`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 dark:text-white text-gray-900">
                    {office.city}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">
                    {office.country}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      <p className="text-sm dark:text-gray-200 text-gray-700">
                        {office.address}
                      </p>
                    </div>

                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      <p className="text-sm dark:text-gray-200 text-gray-700">
                        {office.phone}
                      </p>
                    </div>

                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      <p className="text-sm dark:text-gray-200 text-gray-700">
                        {office.email}
                      </p>
                    </div>

                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      <p className="text-sm dark:text-gray-200 text-gray-700">
                        {office.hours}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <a
                      href={office.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium"
                    >
                      {t("view_on_map") || "View on map"}
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 md:px-8 lg:px-12 dark:bg-slate-900 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 dark:text-white text-gray-900">
                {t("get_in_touch") || "Get in Touch"}
              </h2>
              <p className="text-lg dark:text-gray-300 text-gray-600 mb-8">
                {t("contact_form_subtitle") ||
                  "Have questions about our products or services? Fill out the form and our team will get back to you shortly."}
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium dark:text-white text-gray-900">
                      {t("email_us") || "Email Us"}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      info@utrack.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium dark:text-white text-gray-900">
                      {t("call_us") || "Call Us"}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8"
            >
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log("Form submitted");
                }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      {t("full_name") || "Full Name"}
                    </Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      className="dark:bg-slate-700 dark:border-slate-600"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t("email") || "Email"}</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="dark:bg-slate-700 dark:border-slate-600"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">{t("subject") || "Subject"}</Label>
                  <Input
                    id="subject"
                    placeholder="How can we help you?"
                    className="dark:bg-slate-700 dark:border-slate-600"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t("message") || "Message"}</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message here..."
                    className="min-h-[150px] dark:bg-slate-700 dark:border-slate-600"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 dark:bg-black dark:hover:bg-black/90 text-white"
                >
                  {t("send_message") || "Send Message"}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
