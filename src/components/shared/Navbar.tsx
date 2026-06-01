/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Globe, ChevronDown, Wifi, WifiOff } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useApp, useTheme } from "../../providers/AppProvider";

export const Navbar: React.FC = () => {
  const {
    lang,
    setLang,
    t,
    page,
    setPage,
    setIsAuthOpen,
    setAuthTab,
    setShowLangModal,
  } = useApp();

  const { theme, toggleTheme } = useTheme();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(typeof navigator !== "undefined" ? navigator.onLine : true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Scroll monitoring
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Utility to navigate or scroll beautifully
  const handleNavClick = (sectionId: string) => {
    setMobileOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      setTimeout(() => {
        const rect = el.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const targetY = rect.top + scrollTop - 74; // Sticky offset calculation with smooth scrolling
        window.scrollTo({ top: targetY, behavior: "smooth" });
      }, 10);
    }
  };

  const handleLogoClick = () => {
    setMobileOpen(false);
    setPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openSignIn = () => {
    setMobileOpen(false);
    setAuthTab("signin");
    setIsAuthOpen(true);
  };

  const langNames = {
    en: "EN",
    ru: "RU",
    uz: "UZ",
  };

  const mobileLangDisplay = {
    en: "English",
    ru: "Русский",
    uz: "O'zbekcha",
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 h-[68px] transition-all duration-300 border-b ${
        scrolled
          ? "bg-[var(--bg)]/85 backdrop-blur-md border-[var(--bd2)] shadow-sm"
          : "bg-transparent border-[var(--bd)]"
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-4 md:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <div
          onClick={handleLogoClick}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <span className="text-2xl text-[var(--ac)] animate-spin-slow font-heading drop-shadow-[0_0_8px_rgba(124,111,255,0.4)]">
            ⬡
          </span>
          <div className="flex items-baseline">
            <span className="font-display font-black text-xl tracking-tight text-grad-main">
              MindSphere
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-6">
          <button
            onClick={() => handleNavClick("features")}
            className={`text-xs font-semibold cursor-pointer transition-colors ${
              page === "home"
                ? "text-[var(--txt2)] hover:text-[var(--ac)]"
                : "text-[var(--txt2)] hover:text-[var(--txt)]"
            }`}
          >
            {t.nav.features}
          </button>
          <button
            onClick={() => handleNavClick("roles")}
            className="text-xs font-semibold cursor-pointer text-[var(--txt2)] hover:text-[var(--ac)] transition-colors"
          >
            {t.nav.benefits}
          </button>
          <button
            onClick={() => handleNavClick("pricing")}
            className="text-xs font-semibold cursor-pointer text-[var(--txt2)] hover:text-[var(--ac)] transition-colors"
          >
            {t.nav.pricing}
          </button>
          <button
            onClick={() => handleNavClick("guide")}
            className="text-xs font-semibold cursor-pointer text-[var(--txt2)] hover:text-[var(--ac)] transition-colors"
          >
            {t.nav.guide}
          </button>
          <button
            onClick={() => handleNavClick("faq")}
            className="text-xs font-semibold cursor-pointer text-[var(--txt2)] hover:text-[var(--ac)] transition-colors"
          >
            {t.nav.faq}
          </button>
          <button
            onClick={() => handleNavClick("about")}
            className="text-xs font-semibold cursor-pointer text-[var(--txt2)] hover:text-[var(--ac)] transition-colors"
          >
            {t.nav.about}
          </button>
        </nav>

        {/* Right buttons array (Desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Manual Select Language Modal Trigger */}
          <button
            onClick={() => setShowLangModal(true)}
            className="flex items-center px-3 py-2 rounded-full border border-[var(--bd)] bg-[var(--sur)] text-[var(--txt2)] hover:text-[var(--ac)] hover:border-[var(--ac)]/45 transition-all cursor-pointer select-none"
            title="Select Language / Tilni tanlash"
          >
            <Globe size={15} />
            <span className="text-[10px] font-bold uppercase tracking-wider ml-1.5">
              {lang.toUpperCase()}
            </span>
          </button>

          {/* Theme Switcher Toggle */}
          <button
            onClick={toggleTheme}
            className="relative p-2 rounded-full border border-[var(--bd)] bg-[var(--sur)] text-[var(--txt2)] hover:text-[var(--ac)] transition-colors cursor-pointer overflow-hidden flex items-center justify-center w-8 h-8 focus:outline-none"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme}
                initial={{ y: -12, scale: 0.5, rotate: -90, opacity: 0 }}
                animate={{ y: 0, scale: 1, rotate: 0, opacity: 1 }}
                exit={{ y: 12, scale: 0.5, rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18, ease: "easeInOut" }}
                className="flex items-center justify-center p-0.5"
              >
                {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
              </motion.div>
            </AnimatePresence>
          </button>

          {/* Sign In Trigger CTA */}
          <button
            onClick={openSignIn}
            className="px-4 py-2 text-xs font-bold rounded-full bg-grad-main text-white hover:opacity-90 active:scale-[0.97] transition-all cursor-pointer shadow-sm shadow-[var(--ac)]/10"
          >
            {t.nav.signIn}
          </button>
        </div>

        {/* Hamburger (Mobile) */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Manual Language trigger icon */}
          <button
            onClick={() => {
              setMobileOpen(false);
              setShowLangModal(true);
            }}
            className="p-2 rounded-full border border-[var(--bd)] bg-[var(--sur)] text-[var(--txt2)] mr-1 cursor-pointer"
            aria-label="Select Language"
            title="Select Language / Tilni tanlash"
          >
            <Globe size={14} />
          </button>

          {/* Theme switcher on mobile nav header directly */}
          <button
            onClick={toggleTheme}
            className="relative p-2 rounded-full border border-[var(--bd)] bg-[var(--sur)] text-[var(--txt2)] mr-1 cursor-pointer overflow-hidden flex items-center justify-center w-8 h-8 focus:outline-none"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme}
                initial={{ y: -12, scale: 0.5, rotate: -90, opacity: 0 }}
                animate={{ y: 0, scale: 1, rotate: 0, opacity: 1 }}
                exit={{ y: 12, scale: 0.5, rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18, ease: "easeInOut" }}
                className="flex items-center justify-center p-0.5"
              >
                {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
              </motion.div>
            </AnimatePresence>
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg text-[var(--txt2)] hover:text-[var(--txt)] transition-colors cursor-pointer"
            aria-label="Main menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-[68px] left-0 right-0 border-b border-[var(--bd2)] bg-[var(--bg)]/98 backdrop-blur-xl p-6 space-y-5 shadow-lg flex flex-col items-center text-center animate-fadeIn duration-150 z-50">

          <nav className="flex flex-col gap-2 w-full">
            <button
              onClick={() => handleNavClick("features")}
              className="w-full text-center text-sm font-bold text-[var(--txt)] hover:text-[var(--ac)] hover:bg-[var(--sur2)]/60 py-2.5 rounded-xl transition-all cursor-pointer border border-transparent hover:border-[var(--bd)]/40 select-none"
            >
              {t.nav.features}
            </button>
            <button
              onClick={() => handleNavClick("roles")}
              className="w-full text-center text-sm font-bold text-[var(--txt)] hover:text-[var(--ac)] hover:bg-[var(--sur2)]/60 py-2.5 rounded-xl transition-all cursor-pointer border border-transparent hover:border-[var(--bd)]/40 select-none"
            >
              {t.nav.benefits}
            </button>
            <button
              onClick={() => handleNavClick("pricing")}
              className="w-full text-center text-sm font-bold text-[var(--txt)] hover:text-[var(--ac)] hover:bg-[var(--sur2)]/60 py-2.5 rounded-xl transition-all cursor-pointer border border-transparent hover:border-[var(--bd)]/40 select-none"
            >
              {t.nav.pricing}
            </button>
            <button
              onClick={() => handleNavClick("guide")}
              className="w-full text-center text-sm font-bold text-[var(--txt)] hover:text-[var(--ac)] hover:bg-[var(--sur2)]/60 py-2.5 rounded-xl transition-all cursor-pointer border border-transparent hover:border-[var(--bd)]/40 select-none"
            >
              {t.nav.guide}
            </button>
            <button
              onClick={() => handleNavClick("faq")}
              className="w-full text-center text-sm font-bold text-[var(--txt)] hover:text-[var(--ac)] hover:bg-[var(--sur2)]/60 py-2.5 rounded-xl transition-all cursor-pointer border border-transparent hover:border-[var(--bd)]/40 select-none"
            >
              {t.nav.faq}
            </button>
            <button
              onClick={() => handleNavClick("about")}
              className="w-full text-center text-sm font-bold text-[var(--txt)] hover:text-[var(--ac)] hover:bg-[var(--sur2)]/60 py-2.5 rounded-xl transition-all cursor-pointer border border-transparent hover:border-[var(--bd)]/40 select-none"
            >
              {t.nav.about}
            </button>
          </nav>

          {/* Action Trigger in mobile menu */}
          <button
            onClick={openSignIn}
            className="w-full py-2.5 rounded-full bg-grad-main text-xs font-bold text-white shadow-md cursor-pointer"
          >
            {t.nav.signIn}
          </button>
        </div>
      )}
    </header>
  );
};
