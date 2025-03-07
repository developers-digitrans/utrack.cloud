import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { useTheme } from "../../lib/theme";
import { Button } from "../../components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  BarChart,
  PieChart,
  TrendingUp,
} from "lucide-react";

const Analytics = () => {
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
                Analytics & Reports
              </h1>
              <p className="text-xl dark:text-gray-300 text-gray-600 mb-8">
                Gain powerful insights into your projects and team performance
                with comprehensive analytics and customizable reports.
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
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
                alt="Analytics Dashboard"
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
            Powerful Analytics Features
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
                <BarChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white text-gray-900">
                Customizable Dashboards
              </h3>
              <p className="dark:text-gray-300 text-gray-600 mb-4">
                Create personalized dashboards with the metrics and KPIs that
                matter most to you and your team.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="dark:text-gray-200 text-gray-700">
                    Drag-and-drop dashboard builder
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="dark:text-gray-200 text-gray-700">
                    Multiple dashboard views for different roles
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="dark:text-gray-200 text-gray-700">
                    Real-time data updates
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
                <PieChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white text-gray-900">
                Advanced Reporting
              </h3>
              <p className="dark:text-gray-300 text-gray-600 mb-4">
                Generate detailed reports on project progress, team performance,
                resource allocation, and more.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="dark:text-gray-200 text-gray-700">
                    Pre-built report templates
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="dark:text-gray-200 text-gray-700">
                    Custom report builder
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="dark:text-gray-200 text-gray-700">
                    Export to PDF, Excel, or CSV
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
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white text-gray-900">
                Trend Analysis
              </h3>
              <p className="dark:text-gray-300 text-gray-600 mb-4">
                Identify patterns and trends in your data to make informed
                decisions and predict future outcomes.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="dark:text-gray-200 text-gray-700">
                    Historical data comparison
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="dark:text-gray-200 text-gray-700">
                    Predictive analytics
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="dark:text-gray-200 text-gray-700">
                    Anomaly detection
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Report Types Section */}
      <section className="py-16 px-4 md:px-8 lg:px-12 dark:bg-slate-900 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white text-gray-900">
            Essential Reports for Every Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 dark:text-white text-gray-900">
                Project Performance Reports
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium dark:text-white text-gray-900">
                      Burndown Charts
                    </span>
                    <p className="text-sm dark:text-gray-300 text-gray-600">
                      Track remaining work over time to predict completion dates
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium dark:text-white text-gray-900">
                      Velocity Charts
                    </span>
                    <p className="text-sm dark:text-gray-300 text-gray-600">
                      Measure team productivity across sprints or time periods
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium dark:text-white text-gray-900">
                      Budget vs. Actual
                    </span>
                    <p className="text-sm dark:text-gray-300 text-gray-600">
                      Compare planned costs with actual expenditures
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 dark:text-white text-gray-900">
                Team & Resource Reports
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium dark:text-white text-gray-900">
                      Workload Distribution
                    </span>
                    <p className="text-sm dark:text-gray-300 text-gray-600">
                      Visualize task allocation across team members
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium dark:text-white text-gray-900">
                      Time Utilization
                    </span>
                    <p className="text-sm dark:text-gray-300 text-gray-600">
                      Analyze how time is spent across different activities
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium dark:text-white text-gray-900">
                      Capacity Planning
                    </span>
                    <p className="text-sm dark:text-gray-300 text-gray-600">
                      Forecast resource needs for upcoming projects
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
              Make Data-Driven Decisions with utrack
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Transform your project data into actionable insights that drive
              success and continuous improvement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                onClick={() => (window.location.href = "/contact")}
              >
                Request Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Analytics;
