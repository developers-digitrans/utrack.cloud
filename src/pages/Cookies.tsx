import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useTheme } from "../lib/theme";
import { useTranslation } from "react-i18next";

const Cookies = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <div
      className={`min-h-screen bg-background text-foreground ${theme === "dark" ? "dark" : ""}`}
    >
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 lg:px-12 bg-gradient-to-b dark:from-slate-900 dark:to-slate-800 from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 dark:text-white text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Cookie Policy
          </motion.h1>
          <motion.p
            className="text-xl dark:text-gray-300 text-gray-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 md:px-8 lg:px-12 dark:bg-slate-800 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose dark:prose-invert prose-lg max-w-none">
            <h2>What Are Cookies</h2>
            <p>
              Cookies are small pieces of text sent by your web browser by a
              website you visit. A cookie file is stored in your web browser and
              allows the Service or a third-party to recognize you and make your
              next visit easier and the Service more useful to you.
            </p>
            <p>
              Cookies can be "persistent" or "session" cookies. Persistent
              cookies remain on your personal computer or mobile device when you
              go offline, while session cookies are deleted as soon as you close
              your web browser.
            </p>

            <h2>How utrack Uses Cookies</h2>
            <p>
              When you use and access the Service, we may place a number of
              cookies files in your web browser. We use cookies for the
              following purposes:
            </p>
            <ul>
              <li>To enable certain functions of the Service</li>
              <li>To provide analytics</li>
              <li>To store your preferences</li>
              <li>
                To enable advertisements delivery, including behavioral
                advertising
              </li>
            </ul>
            <p>
              We use both session and persistent cookies on the Service and we
              use different types of cookies to run the Service:
            </p>
            <ul>
              <li>
                <strong>Essential cookies.</strong> We may use essential cookies
                to authenticate users and prevent fraudulent use of user
                accounts.
              </li>
              <li>
                <strong>Preferences cookies.</strong> We may use preferences
                cookies to remember information that changes the way the Service
                behaves or looks, such as the "remember me" functionality of a
                registered user or a user's language preference.
              </li>
              <li>
                <strong>Analytics cookies.</strong> We may use analytics cookies
                to track information how the Service is used so that we can make
                improvements. We may also use analytics cookies to test new
                advertisements, pages, features or new functionality of the
                Service to see how our users react to them.
              </li>
              <li>
                <strong>Advertising cookies.</strong> These type of cookies are
                used to deliver advertisements on and through the Service and
                track the performance of these advertisements. These cookies may
                also be used to enable third-party advertising networks to
                deliver targeted advertisements that they believe will be of
                most interest to you based on information about your visit to
                our and other websites.
              </li>
            </ul>

            <h2>Third-Party Cookies</h2>
            <p>
              In addition to our own cookies, we may also use various
              third-party cookies to report usage statistics of the Service,
              deliver advertisements on and through the Service, and so on.
            </p>

            <h2>What Are Your Choices Regarding Cookies</h2>
            <p>
              If you'd like to delete cookies or instruct your web browser to
              delete or refuse cookies, please visit the help pages of your web
              browser. Please note, however, that if you delete cookies or
              refuse to accept them, you might not be able to use all of the
              features we offer, you may not be able to store your preferences,
              and some of our pages might not display properly.
            </p>
            <ul>
              <li>
                For the Chrome web browser, please visit this page from Google:{" "}
                <a
                  href="https://support.google.com/accounts/answer/32050"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://support.google.com/accounts/answer/32050
                </a>
              </li>
              <li>
                For the Internet Explorer web browser, please visit this page
                from Microsoft:{" "}
                <a
                  href="http://support.microsoft.com/kb/278835"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://support.microsoft.com/kb/278835
                </a>
              </li>
              <li>
                For the Firefox web browser, please visit this page from
                Mozilla:{" "}
                <a
                  href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored
                </a>
              </li>
              <li>
                For the Safari web browser, please visit this page from Apple:{" "}
                <a
                  href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac
                </a>
              </li>
              <li>
                For any other web browser, please visit your web browser's
                official web pages.
              </li>
            </ul>

            <h2>Where Can You Find More Information About Cookies</h2>
            <p>
              You can learn more about cookies and the following third-party
              websites:
            </p>
            <ul>
              <li>
                AllAboutCookies:{" "}
                <a
                  href="http://www.allaboutcookies.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://www.allaboutcookies.org/
                </a>
              </li>
              <li>
                Network Advertising Initiative:{" "}
                <a
                  href="http://www.networkadvertising.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://www.networkadvertising.org/
                </a>
              </li>
            </ul>

            <h2>Changes to This Cookie Policy</h2>
            <p>
              We may update our Cookie Policy from time to time. We will notify
              you of any changes by posting the new Cookie Policy on this page
              and updating the "Last updated" date at the top of this Cookie
              Policy.
            </p>
            <p>
              You are advised to review this Cookie Policy periodically for any
              changes. Changes to this Cookie Policy are effective when they are
              posted on this page.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about our Cookie Policy, please contact
              us at:
            </p>
            <p>
              Email: privacy@utrack.com
              <br />
              Address: 123 Privacy Street, San Francisco, CA 94107, USA
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cookies;
