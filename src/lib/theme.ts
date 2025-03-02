import { createContext, useContext } from "react";

export type Theme = "light" | "dark";
export type Language = "en" | "fr" | "ar";

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  language: Language;
  setLanguage: (language: Language) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
  language: "en",
  setLanguage: () => {},
});

export const useTheme = () => useContext(ThemeContext);
