/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect } from "react";
import { Translations, i18n } from "../lib/i18n";

type Language = "en" | "ru" | "uz";
type Theme = "dark" | "light";
type PageState = "home" | "about";

interface AppContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  langCode: Language;
  t: Translations;
  theme: Theme;
  toggleTheme: () => void;
  page: PageState;
  setPage: (page: PageState) => void;
  isAuthOpen: boolean;
  setIsAuthOpen: (open: boolean) => void;
  authTab: "signin" | "signup";
  setAuthTab: (tab: "signin" | "signup") => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load initial settings with fallback
  const [lang, setLangRaw] = useState<Language>(() => {
    const saved = localStorage.getItem("ms_lang");
    if (saved === "ru" || saved === "uz" || saved === "en") {
      return saved as Language;
    }
    return "en";
  });

  const [theme, setThemeRaw] = useState<Theme>(() => {
    const saved = localStorage.getItem("ms_theme");
    if (saved === "light" || saved === "dark") {
      return saved as Theme;
    }
    return "dark"; // Default is dark active
  });

  const [page, setPageRaw] = useState<PageState>(() => {
    // Simple deep link check by hash or state
    const hash = window.location.hash;
    if (hash === "#about" || window.location.pathname === "/about") {
      return "about";
    }
    return "home";
  });

  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authTab, setAuthTab] = useState<"signin" | "signup">("signin");

  // Sync state actions to localStorage & HTML Attributes
  const setLang = (newLang: Language) => {
    setLangRaw(newLang);
    localStorage.setItem("ms_lang", newLang);
  };

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setThemeRaw(nextTheme);
    localStorage.setItem("ms_theme", nextTheme);
  };

  const setPage = (newPage: PageState) => {
    setPageRaw(newPage);
    window.location.hash = newPage === "about" ? "about" : "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Sync theme to root class and data-theme attribute
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    // Also style background directly on body to avoid color flashes
    root.style.backgroundColor = theme === "dark" ? "#060612" : "#f4f4ff";
  }, [theme]);

  // Read hash updates if user changes them in browser bar
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#about") {
        setPageRaw("about");
      } else {
        setPageRaw("home");
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const t = i18n[lang] || i18n.en;

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        langCode: lang,
        t,
        theme,
        toggleTheme,
        page,
        setPage,
        isAuthOpen,
        setIsAuthOpen,
        authTab,
        setAuthTab,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used inside an AppProvider");
  }
  return context;
};
