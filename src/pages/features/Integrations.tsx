import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { useTheme } from "../../lib/theme";
import { Button } from "../../components/ui/button";
import { ArrowRight, CheckCircle, Link, GitBranch, Zap } from "lucide-react";

const Integrations = () => {
  const { theme } = useTheme();

  // Integration categories with their tools
  const integrationCategories = [
    {
      name: "Development Tools",
      tools: [
        {
          name: "GitHub",
          icon: "https://api.dicebear.com/7.x/initials/svg?seed=GH",
        },
        {
          name: "GitLab",
          icon: "https://api.dicebear.com/7.x/initials/svg?seed=GL",
        },
        {
          name: "Bitbucket",
          icon: "https://api.dicebear.com/7.x/initials/svg?seed=BB",
        },
        {
          name: "Jira",
          icon: "https://api.dicebear.com/7.x/initials/svg?seed=JI",
        },
      ],
    },
    {
      name: "Communication",
      tools: [
        {
          name: "Slack",
          icon: "https://api.dicebear.com/7.x/initials/svg?seed=SL",
        },
        {
          name: "Microsoft Teams",
          icon: "https://api.dicebear.com/7.x/initials/svg?seed=MT",
        },
        {
          name: "Discord",
          icon: "https://api.dicebear.com/7.x/initials/svg?seed=DI",
        },
      ],
    },
    {
      name: "File Storage",
      tools: [
        {
          name: "Google Drive",
          icon: "https://api.dicebear.com/7.x/initials/svg?seed=GD",
        },
        {
          name: "Dropbox",
          icon: "https://api.dicebear.com/7.x/initials/svg?seed=DB",
        },
        {
          name: "OneDrive",
          icon: "https://api.dicebear.com/7.x/initials/svg?seed=OD",
        },
      ],
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
                Integrations
              </h1>
              <p className="text-xl dark:text-gray-300 text-gray-600 mb-8">
                Connect utrack with your favorite tools and services to create a
                seamless workflow across your entire tech stack.
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
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop"
                alt="Integrations"
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
            Integration Features
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
                <Link className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white text-gray-900">
                Two-Way Sync
              </h3>
              <p className="dark:text-gray-300 text-gray-600 mb-4">
                Keep your data in sync across all your tools with bidirectional
                synchronization that updates in real-time.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="dark:text-gray-200 text-gray-700">
                    Real-time updates across platforms
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="dark:text-gray-200 text-gray-700">
                    Conflict resolution
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="dark:text-gray-200 text-gray-700">
                    Customizable field mapping
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
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white text-gray-900">
                Automation Workflows
              </h3>
              <p className="dark:text-gray-300 text-gray-600 mb-4">
                Create powerful automation workflows that trigger actions across
                your integrated tools based on events in utrack.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="dark:text-gray-200 text-gray-700">
                    No-code automation builder
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="dark:text-gray-200 text-gray-700">
                    Conditional logic and triggers
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="dark:text-gray-200 text-gray-700">
                    Multi-step workflows
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
                <GitBranch className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white text-gray-900">
                API & Webhooks
              </h3>
              <p className="dark:text-gray-300 text-gray-600 mb-4">
                Build custom integrations with our comprehensive API and webhook
                system for ultimate flexibility.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="dark:text-gray-200 text-gray-700">
                    RESTful API with comprehensive documentation
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="dark:text-gray-200 text-gray-700">
                    Custom webhook configuration
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="dark:text-gray-200 text-gray-700">
                    OAuth 2.0 authentication
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integration Categories */}
      <section className="py-16 px-4 md:px-8 lg:px-12 dark:bg-slate-900 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white text-gray-900">
            Connect With Your Favorite Tools
          </h2>

          <div className="space-y-12">
            {integrationCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold mb-6 dark:text-white text-gray-900">
                  {category.name}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {category.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-lg bg-gray-100 dark:bg-slate-700 flex items-center justify-center mb-2">
                        <img
                          src={tool.icon}
                          alt={tool.name}
                          className="w-10 h-10"
                        />
                      </div>
                      <span className="text-sm font-medium dark:text-gray-200 text-gray-700">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
              Ready to Connect Your Tools?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Join thousands of teams who use utrack to streamline their
              workflows by connecting all their favorite tools.
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

export default Integrations;
