/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
import { Translations, i18n } from "../lib/i18n";

type Language = "en" | "ru" | "uz";
type Theme = "dark" | "light";
type PageState = "home" | "about";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

interface AppContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  langCode: Language;
  t: Translations;
  page: PageState;
  setPage: (page: PageState) => void;
  isAuthOpen: boolean;
  setIsAuthOpen: (open: boolean) => void;
  authTab: "signin" | "signup";
  setAuthTab: (tab: "signin" | "signup") => void;
  showLangModal: boolean;
  setShowLangModal: (show: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load initial settings with fallback
  const [lang, setLangRaw] = useState<Language>(() => {
    const saved = localStorage.getItem("ms_lang");
    if (saved === "ru" || saved === "uz" || saved === "en") {
      return saved as Language;
    }
    return "uz";
  });

  const [showLangModal, setShowLangModal] = useState<boolean>(() => {
    return !localStorage.getItem("ms_lang");
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
  const setLang = useCallback((newLang: Language) => {
    setLangRaw(newLang);
    localStorage.setItem("ms_lang", newLang);
    setShowLangModal(false);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeRaw((prev) => {
      const nextTheme = prev === "dark" ? "light" : "dark";
      localStorage.setItem("ms_theme", nextTheme);
      return nextTheme;
    });
  }, []);

  const setPage = useCallback((newPage: PageState) => {
    setPageRaw(newPage);
    window.location.hash = newPage === "about" ? "about" : "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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

  const [t, setT] = useState<Translations>(() => i18n[lang] || i18n.uz);

  useEffect(() => {
    let isMounted = true;
    if (i18n[lang]) {
      setT(i18n[lang]);
    } else {
      if (lang === "en") {
        import("../lib/locales/en").then((m) => {
          if (!isMounted) return;
          i18n.en = m.en;
          setT(m.en);
        }).catch((err) => {
          console.error("Failed to lazy load en layout dictionary", err);
        });
      } else if (lang === "ru") {
        import("../lib/locales/ru").then((m) => {
          if (!isMounted) return;
          i18n.ru = m.ru;
          setT(m.ru);
        }).catch((err) => {
          console.error("Failed to lazy load ru layout dictionary", err);
        });
      }
    }
    return () => {
      isMounted = false;
    };
  }, [lang]);

  const themeContextValue = useMemo(() => ({
    theme,
    toggleTheme,
  }), [theme, toggleTheme]);

  // Memoize context value to shield downstream listeners from needless rendering
  const contextValue = useMemo(() => ({
    lang,
    setLang,
    langCode: lang,
    t,
    page,
    setPage,
    isAuthOpen,
    setIsAuthOpen,
    authTab,
    setAuthTab,
    showLangModal,
    setShowLangModal,
  }), [
    lang,
    setLang,
    t,
    page,
    setPage,
    isAuthOpen,
    authTab,
    showLangModal,
  ]);

  return (
    <AppContext.Provider value={contextValue}>
      <ThemeContext.Provider value={themeContextValue}>
        {children}
      </ThemeContext.Provider>
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

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside an AppProvider");
  }
  return context;
};
