import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { useTheme } from "../../lib/theme";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";

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
      address: "Dubai, UAE",
      phone: "+971 9 50 205 57 33",
      email: "info@digi-trans.org",
      hours: "Sun-Thu: 9:00 AM - 6:00 PM",
      mapUrl: "https://maps.google.com/?q=Business+Bay+Dubai",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
    },
    {
      city: "Paris",
      country: "France",
      address: "Paris, France",
      phone: "+33 6 13 70 97 58",
      email: "info@digi-trans.org",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM",
      mapUrl: "https://maps.google.com/?q=75008+Paris+France",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop",
    },
    {
      city: "London",
      country: "United Kingdom",
      address: "London, UK",
      phone: "+44 777 11 51 435",
      email: "info@digi-trans.org",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM",
      mapUrl: "https://maps.google.com/?q=Canary+Wharf+London",
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop",
    },
    {
      city: "Casablanca",
      country: "Morocco",
      address: "Casablanca Business District, Morocco",
      phone: "+212 6 67 19 71 88",
      email: "info@digi-trans.org",
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
