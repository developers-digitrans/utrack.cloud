import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useTheme } from "../lib/theme";
import { useTranslation } from "react-i18next";

const Terms = () => {
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
            Terms of Service
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
            <h2>1. Introduction</h2>
            <p>
              Welcome to utrack ("Company", "we", "our", "us")! These Terms of
              Service ("Terms", "Terms of Service") govern your use of our
              website and services operated by utrack.
            </p>
            <p>
              By accessing or using the Service, you agree to be bound by these
              Terms. If you disagree with any part of the terms, then you may
              not access the Service.
            </p>

            <h2>2. Communications</h2>
            <p>
              By creating an Account on our service, you agree to subscribe to
              newsletters, marketing or promotional materials and other
              information we may send. However, you may opt out of receiving
              any, or all, of these communications from us by following the
              unsubscribe link or instructions provided in any email we send.
            </p>

            <h2>3. Subscriptions</h2>
            <p>
              Some parts of the Service are billed on a subscription basis
              ("Subscription(s)"). You will be billed in advance on a recurring
              and periodic basis ("Billing Cycle"). Billing cycles are set
              either on a monthly or annual basis, depending on the type of
              subscription plan you select when purchasing a Subscription.
            </p>
            <p>
              At the end of each Billing Cycle, your Subscription will
              automatically renew under the exact same conditions unless you
              cancel it or utrack cancels it. You may cancel your Subscription
              renewal either through your online account management page or by
              contacting utrack customer support team.
            </p>

            <h2>4. Free Trial</h2>
            <p>
              utrack may, at its sole discretion, offer a Subscription with a
              free trial for a limited period of time ("Free Trial").
            </p>
            <p>
              You may be required to enter your billing information in order to
              sign up for the Free Trial. If you do enter your billing
              information when signing up for the Free Trial, you will not be
              charged by utrack until the Free Trial has expired. On the last
              day of the Free Trial period, unless you cancelled your
              Subscription, you will be automatically charged the applicable
              subscription fee for the type of Subscription you have selected.
            </p>

            <h2>5. Content</h2>
            <p>
              Our Service allows you to post, link, store, share and otherwise
              make available certain information, text, graphics, videos, or
              other material ("Content"). You are responsible for the Content
              that you post on or through the Service, including its legality,
              reliability, and appropriateness.
            </p>
            <p>
              By posting Content on or through the Service, You represent and
              warrant that: (i) the Content is yours (you own it) and/or you
              have the right to use it and the right to grant us the rights and
              license as provided in these Terms, and (ii) that the posting of
              your Content on or through the Service does not violate the
              privacy rights, publicity rights, copyrights, contract rights or
              any other rights of any person or entity.
            </p>

            <h2>6. Accounts</h2>
            <p>
              When you create an account with us, you guarantee that you are
              above the age of 18, and that the information you provide us is
              accurate, complete, and current at all times. Inaccurate,
              incomplete, or obsolete information may result in the immediate
              termination of your account on the Service.
            </p>
            <p>
              You are responsible for maintaining the confidentiality of your
              account and password, including but not limited to the restriction
              of access to your computer and/or account. You agree to accept
              responsibility for any and all activities or actions that occur
              under your account and/or password, whether your password is with
              our Service or a third-party service. You must notify us
              immediately upon becoming aware of any breach of security or
              unauthorized use of your account.
            </p>

            <h2>7. Intellectual Property</h2>
            <p>
              The Service and its original content (excluding Content provided
              by users), features and functionality are and will remain the
              exclusive property of utrack and its licensors. The Service is
              protected by copyright, trademark, and other laws of both the
              United States and foreign countries. Our trademarks and trade
              dress may not be used in connection with any product or service
              without the prior written consent of utrack.
            </p>

            <h2>8. Termination</h2>
            <p>
              We may terminate or suspend your account and bar access to the
              Service immediately, without prior notice or liability, under our
              sole discretion, for any reason whatsoever and without limitation,
              including but not limited to a breach of the Terms.
            </p>
            <p>
              If you wish to terminate your account, you may simply discontinue
              using the Service. All provisions of the Terms which by their
              nature should survive termination shall survive termination,
              including, without limitation, ownership provisions, warranty
              disclaimers, indemnity and limitations of liability.
            </p>

            <h2>9. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the
              laws of the United States, without regard to its conflict of law
              provisions.
            </p>
            <p>
              Our failure to enforce any right or provision of these Terms will
              not be considered a waiver of those rights. If any provision of
              these Terms is held to be invalid or unenforceable by a court, the
              remaining provisions of these Terms will remain in effect. These
              Terms constitute the entire agreement between us regarding our
              Service, and supersede and replace any prior agreements we might
              have had between us regarding the Service.
            </p>

            <h2>10. Changes</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. If a revision is material we will provide
              at least 30 days notice prior to any new terms taking effect. What
              constitutes a material change will be determined at our sole
              discretion.
            </p>
            <p>
              By continuing to access or use our Service after any revisions
              become effective, you agree to be bound by the revised terms. If
              you do not agree to the new terms, you are no longer authorized to
              use the Service.
            </p>

            <h2>11. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              Email: legal@utrack.com
              <br />
              Address: 123 Legal Street, San Francisco, CA 94107, USA
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
