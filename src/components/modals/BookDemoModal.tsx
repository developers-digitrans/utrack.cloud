import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X, Calendar, Clock, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "../ui/dialog";
import { Button } from "../ui/button";

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookDemoModal = ({ isOpen, onClose }: BookDemoModalProps) => {
  const { t } = useTranslation();
  const [calendarLoaded, setCalendarLoaded] = useState(false);
  const [calendarError, setCalendarError] = useState(false);

  // Cal.com integration - simplified approach using iframe
  useEffect(() => {
    if (!isOpen) return;

    // Reset states when modal opens
    setCalendarLoaded(false);
    setCalendarError(false);

    // Short timeout to simulate loading and ensure the iframe has time to initialize
    const timer = setTimeout(() => {
      setCalendarLoaded(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[900px] p-0 overflow-hidden dark:bg-slate-800 bg-white max-h-[90vh]">
        <DialogHeader className="p-6 pb-0">
          <div className="flex justify-between items-center">
            <DialogTitle className="text-2xl font-bold dark:text-white text-gray-900">
              {t("book_demo") || "Book a Demo"}
            </DialogTitle>
          </div>
          <DialogDescription className="mt-2 dark:text-gray-300 text-gray-600">
            {t("book_demo_description") ||
              "Schedule a personalized demo to see how our platform can help your team."}
          </DialogDescription>
        </DialogHeader>

        <div className="p-6 pt-2 h-full">
          {/* Cal.com Calendar Widget */}
          {!calendarLoaded && !calendarError && (
            <div className="flex flex-col items-center justify-center py-12">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="mb-4"
              >
                <Calendar className="h-10 w-10 text-primary" />
              </motion.div>
              <p className="text-gray-500 dark:text-gray-400">
                {t("loading_calendar") || "Loading calendar..."}
              </p>
            </div>
          )}

          {calendarError && (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="mb-4 p-3 rounded-full bg-red-100 dark:bg-red-900/20">
                <Clock className="h-10 w-10 text-red-500 dark:text-red-400" />
              </div>
              <h3 className="text-lg font-medium mb-2 dark:text-white text-gray-900">
                {t("calendar_error_title") || "Calendar Unavailable"}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md">
                {t("calendar_error_message") ||
                  "We're having trouble loading our booking calendar. Please try again later or contact us directly."}
              </p>
              <Button
                onClick={() => (window.location.href = "/contact")}
                className="bg-primary hover:bg-primary/90 dark:bg-black dark:hover:bg-black/90 text-white"
              >
                {t("contact_us") || "Contact Us"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}

          {calendarLoaded && (
            <div
              className="cal-embed-container rounded-lg overflow-hidden"
              style={{ height: "calc(80vh - 120px)" }}
            >
              {/* Direct Cal.com iframe embed - more reliable than the JS embed */}
              <iframe
                src={`https://cal.com/${import.meta.env.VITE_CAL_USERNAME}/${import.meta.env.VITE_CAL_EVENT_NAME}?embed=true&theme=dark&layout=month_view&hideCloseButton=true`}
                width="100%"
                frameBorder="0"
                title="Book a demo"
                className="w-full h-full"
                style={{ minHeight: "700px" }}
              />
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookDemoModal;
