import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { useTheme } from "../../lib/theme";
import { Button } from "../../components/ui/button";
import { ArrowRight, CheckCircle, List, Calendar, Filter } from "lucide-react";

const Tasks = () => {
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
                Task Management
              </h1>
              <p className="text-xl dark:text-gray-300 text-gray-600 mb-8">
                Streamline your workflow with powerful task management tools
                designed for modern teams.
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
                src="https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?q=80&w=800&auto=format&fit=crop"
                alt="Task Management"
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
            Powerful Task Management Features
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
                <List className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white text-gray-900">
                Multiple Views
              </h3>
              <p className="dark:text-gray-300 text-gray-600 mb-4">
                Switch between List, Kanban, Calendar, and Gantt views to
                visualize your tasks in the way that works best for your
                workflow.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="dark:text-gray-200 text-gray-700">
                    Kanban boards for visual workflow management
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="dark:text-gray-200 text-gray-700">
                    List view for quick task scanning
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="dark:text-gray-200 text-gray-700">
                    Calendar view for time-based planning
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
                <Filter className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white text-gray-900">
                Custom Fields & Filters
              </h3>
              <p className="dark:text-gray-300 text-gray-600 mb-4">
                Create custom fields to track information specific to your
                workflow and use powerful filters to find exactly what you need.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="dark:text-gray-200 text-gray-700">
                    Custom fields for any data type
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="dark:text-gray-200 text-gray-700">
                    Advanced filtering and sorting
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="dark:text-gray-200 text-gray-700">
                    Save and share custom views
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
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white text-gray-900">
                Task Dependencies
              </h3>
              <p className="dark:text-gray-300 text-gray-600 mb-4">
                Create relationships between tasks to ensure work is completed
                in the right order and nothing falls through the cracks.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="dark:text-gray-200 text-gray-700">
                    Set blocking and blocked-by relationships
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="dark:text-gray-200 text-gray-700">
                    Visualize dependencies in Gantt view
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="dark:text-gray-200 text-gray-700">
                    Automatic notifications when blocking tasks are completed
                  </span>
                </li>
              </ul>
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
              Ready to Transform Your Task Management?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Join thousands of teams who use utrack to streamline their
              workflows and deliver projects on time.
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

export default Tasks;
