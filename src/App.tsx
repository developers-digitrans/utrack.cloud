import { Suspense, useState, useEffect } from "react";
import { useRoutes, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import routes from "tempo-routes";
import { ThemeContext, Theme, Language } from "./lib/theme";
import { useTranslation } from "react-i18next";
import TronLines from "./components/TronLines";

function App() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [language, setLanguage] = useState<Language>("en");
  const { i18n, t } = useTranslation();
  const location = useLocation();

  // Apply theme to document
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Apply language
  useEffect(() => {
    i18n.changeLanguage(language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    localStorage.setItem("language", language);
  }, [language, i18n]);

  // Initialize from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    const savedLanguage = localStorage.getItem("language") as Language;

    if (savedTheme) setTheme(savedTheme);
    if (savedLanguage) setLanguage(savedLanguage);
  }, []);

  // Update page title based on current route
  useEffect(() => {
    const pageTitle = document.getElementById("page-title");
    if (pageTitle) {
      let title = "utrack";

      // Set page title based on current route
      if (location.pathname === "/") {
        title = "utrack | " + t("home");
      } else if (location.pathname.includes("pricing")) {
        title = "utrack | " + t("pricing");
      } else if (location.pathname.includes("features")) {
        title = "utrack | " + t("features");
      } else if (location.pathname.includes("about")) {
        title = "utrack | " + t("about");
      } else if (location.pathname.includes("contact")) {
        title = "utrack | " + t("contact");
      } else if (location.pathname.includes("blog")) {
        title = "utrack | " + t("blog");
      } else {
        title = "utrack | " + t("project_management");
      }

      pageTitle.textContent = title;
    }
  }, [location, language, t]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, language, setLanguage }}>
      {/* TronLines animation removed */}
      <Suspense fallback={<p>Loading...</p>}>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
          {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
        </>
      </Suspense>
    </ThemeContext.Provider>
  );
}

export default App;
