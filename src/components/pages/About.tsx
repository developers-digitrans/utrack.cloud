import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, ExternalLink } from "lucide-react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { useTheme } from "../../lib/theme";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";

const About = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  // Core values
  const coreValues = [
    {
      title: "Innovation",
      description:
        "Pioneering new technological solutions for digital transformation in industry",
    },
    {
      title: "Sustainability",
      description:
        "Developing eco-friendly technologies for a carbon-neutral industrial future",
    },
    {
      title: "Collaboration",
      description:
        "Working closely with partners across Southeastern Europe to drive digital change",
    },
    {
      title: "Excellence",
      description:
        "Delivering high-quality solutions and services throughout the entire product lifecycle",
    },
  ];

  return (
    <div
      className={`min-h-screen bg-background text-foreground ${theme === "dark" ? "dark" : ""}`}
    >
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 lg:px-12 bg-gradient-to-b dark:from-slate-900 dark:to-slate-800 from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              className="flex-1 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white text-gray-900">
                About digi-trans.org
              </h1>
              <p className="text-xl dark:text-gray-300 text-gray-600 mb-8">
                Pioneering digital transformation solutions for sustainable
                industry in Southeastern Europe
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  className="bg-primary hover:bg-primary/90 dark:bg-black dark:hover:bg-black/90 text-white"
                  onClick={() =>
                    window.open("https://digi-trans.org", "_blank")
                  }
                >
                  Visit digi-trans.org
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="dark:border-gray-600 dark:text-white"
                  onClick={() => (window.location.href = "/contact")}
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=800&auto=format&fit=crop"
                alt="Industrial Digital Transformation"
                className="rounded-lg shadow-xl w-full object-cover max-h-[400px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 px-4 md:px-8 lg:px-12 dark:bg-slate-800 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4 dark:text-white text-gray-900">
              Our Company
            </h2>
            <p className="text-lg dark:text-gray-300 text-gray-600 max-w-3xl mx-auto">
              digi-trans.org is at the forefront of digital transformation,
              specializing in innovative technological solutions for industrial
              businesses across Southeastern Europe, with a focus on
              sustainability and future-oriented technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              className="bg-gray-50 dark:bg-slate-700 p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4 dark:text-white text-gray-900">
                Our Vision
              </h3>
              <p className="dark:text-gray-200 text-gray-700 mb-6">
                digi-trans.org envisions transforming Southeastern European
                industry through advanced digital technologies and sustainable
                solutions. We are committed to fostering innovation,
                sustainability, and research & development to create a more
                efficient, competitive, and environmentally friendly industrial
                landscape for the region.
              </p>
              <ul className="space-y-2">
                {coreValues.slice(0, 2).map((value, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <span className="font-medium dark:text-white text-gray-900">
                        {value.title}:
                      </span>{" "}
                      <span className="dark:text-gray-300 text-gray-600">
                        {value.description}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="bg-gray-50 dark:bg-slate-700 p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-4 dark:text-white text-gray-900">
                Our Mission
              </h3>
              <p className="dark:text-gray-200 text-gray-700 mb-6">
                digi-trans.org is dedicated to representing future-oriented
                technologies and serving customers throughout the entire product
                lifecycle. We drive innovation for a sustainable and
                carbon-neutral industry, providing comprehensive digital
                transformation solutions that address the evolving needs of
                industrial businesses in Southeastern Europe. Our mission is to
                be the leading partner for industrial digital transformation in
                the region.
              </p>
              <ul className="space-y-2">
                {coreValues.slice(2, 4).map((value, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <span className="font-medium dark:text-white text-gray-900">
                        {value.title}:
                      </span>{" "}
                      <span className="dark:text-gray-300 text-gray-600">
                        {value.description}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg dark:text-gray-300 text-gray-600 max-w-3xl mx-auto italic">
              "At digi-trans.org, we believe that digital transformation is not
              just about technology—it's about reimagining how industrial
              businesses operate and deliver value in a sustainable, efficient,
              and future-oriented way."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 px-4 md:px-8 lg:px-12 dark:bg-slate-900 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4 dark:text-white text-gray-900">
              Our Approach to Digital Transformation
            </h2>
            <p className="text-lg dark:text-gray-300 text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to
              deliver comprehensive digital transformation solutions tailored to
              the specific needs of industrial businesses in Southeastern
              Europe.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-white text-gray-900">
                Assessment & Strategy
              </h3>
              <p className="dark:text-gray-300 text-gray-600">
                We begin by thoroughly analyzing your current industrial systems
                and processes to identify opportunities for digital enhancement
                and develop a tailored transformation strategy aligned with your
                business goals and sustainability objectives.
              </p>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-white text-gray-900">
                Implementation & Integration
              </h3>
              <p className="dark:text-gray-300 text-gray-600">
                Our expert team implements innovative technological solutions
                and seamlessly integrates them with your existing industrial
                infrastructure to ensure a smooth transition to a more
                digitalized and sustainable operation.
              </p>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-white text-gray-900">
                Optimization & Support
              </h3>
              <p className="dark:text-gray-300 text-gray-600">
                We provide ongoing optimization and support throughout the
                entire product lifecycle to ensure your digital transformation
                continues to deliver value, improve sustainability, and adapt to
                evolving industrial business needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 lg:px-12 bg-primary dark:bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Partner with digi-trans.org to unlock the full potential of
              digital transformation for your industrial organization in
              Southeastern Europe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => (window.location.href = "/contact")}
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                onClick={() => window.open("https://digi-trans.org", "_blank")}
              >
                Learn More
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
