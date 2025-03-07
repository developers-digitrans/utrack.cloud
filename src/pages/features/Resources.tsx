import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { useTheme } from "../../lib/theme";
import { Button } from "../../components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Users,
  BarChart3,
  Calendar,
} from "lucide-react";

const Resources = () => {
  const { theme } = useTheme();

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
                Resource Management
              </h1>
              <p className="text-xl dark:text-gray-300 text-gray-600 mb-8">
                Optimize your team's capacity and allocation with powerful
                resource management tools designed for modern teams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  className="bg-primary hover:bg-primary/90 dark:bg-black dark:hover:bg-black/90 text-white"
                  onClick={() =>
                    window.open("https://app.utrack.cloud", "_blank")
                  }
                >
                  Try It Now
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
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
                alt="Resource Management"
                className="rounded-lg shadow-xl w-full object-cover max-h-[400px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-8 lg:px-12 dark:bg-slate-800 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white text-gray-900">
            Powerful Resource Management Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div
              className="bg-gray-50 dark:bg-slate-700 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white text-gray-900">
                Team Capacity Planning
              </h3>
              <p className="dark:text-gray-300 text-gray-600 mb-4">
                Visualize your team's availability and workload to ensure
                optimal resource allocation across projects.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="dark:text-gray-200 text-gray-700">
                    Visual capacity heatmaps
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="dark:text-gray-200 text-gray-700">
                    Workload balancing tools
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="dark:text-gray-200 text-gray-700">
                    Skill-based resource matching
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="bg-gray-50 dark:bg-slate-700 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white text-gray-900">
                Resource Scheduling
              </h3>
              <p className="dark:text-gray-300 text-gray-600 mb-4">
                Schedule resources with an intuitive calendar interface that
                shows availability, conflicts, and allocation.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="dark:text-gray-200 text-gray-700">
                    Drag-and-drop resource scheduling
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="dark:text-gray-200 text-gray-700">
                    Conflict detection and resolution
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="dark:text-gray-200 text-gray-700">
                    Time-off and availability tracking
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className="bg-gray-50 dark:bg-slate-700 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white text-gray-900">
                Resource Analytics
              </h3>
              <p className="dark:text-gray-300 text-gray-600 mb-4">
                Gain insights into resource utilization, allocation efficiency,
                and capacity trends over time.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="dark:text-gray-200 text-gray-700">
                    Utilization reports and dashboards
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="dark:text-gray-200 text-gray-700">
                    Capacity forecasting
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="dark:text-gray-200 text-gray-700">
                    Resource allocation optimization
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 md:px-8 lg:px-12 dark:bg-slate-900 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white text-gray-900">
            Benefits of Effective Resource Management
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 dark:text-white text-gray-900">
                For Project Managers
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium dark:text-white text-gray-900">
                      Improved Project Planning
                    </span>
                    <p className="text-sm dark:text-gray-300 text-gray-600">
                      Accurately estimate resource needs and timelines for
                      better project planning
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium dark:text-white text-gray-900">
                      Reduced Bottlenecks
                    </span>
                    <p className="text-sm dark:text-gray-300 text-gray-600">
                      Identify and resolve resource constraints before they
                      impact project timelines
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium dark:text-white text-gray-900">
                      Optimized Resource Allocation
                    </span>
                    <p className="text-sm dark:text-gray-300 text-gray-600">
                      Ensure the right people are assigned to the right tasks at
                      the right time
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 dark:text-white text-gray-900">
                For Team Members
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium dark:text-white text-gray-900">
                      Balanced Workloads
                    </span>
                    <p className="text-sm dark:text-gray-300 text-gray-600">
                      Prevent burnout with evenly distributed work assignments
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium dark:text-white text-gray-900">
                      Skill Development
                    </span>
                    <p className="text-sm dark:text-gray-300 text-gray-600">
                      Match assignments to skills and interests for professional
                      growth
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium dark:text-white text-gray-900">
                      Clear Expectations
                    </span>
                    <p className="text-sm dark:text-gray-300 text-gray-600">
                      Transparent view of assignments and priorities across
                      projects
                    </p>
                  </div>
                </li>
              </ul>
            </div>
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
              Optimize Your Team's Potential
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Join thousands of teams who use utrack to maximize productivity
              and deliver projects on time with optimal resource allocation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                onClick={() => (window.location.href = "/contact")}
              >
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
