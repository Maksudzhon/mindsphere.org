/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Globe, ArrowRight } from "lucide-react";
import { useApp } from "../../providers/AppProvider";

export const LanguageModal: React.FC = () => {
  const { lang, setLang, showLangModal, setShowLangModal } = useApp();

  // Disable scrolling while modal is open
  useEffect(() => {
    if (showLangModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showLangModal]);

  const languages = [
    {
      code: "uz" as const,
      name: "O'zbekcha",
      subtitle: "Lotin yozuvida",
      flag: "🇺🇿",
      greeting: "Platformaga xush kelibsiz!",
    },
    {
      code: "ru" as const,
      name: "Русский",
      subtitle: "На кириллице",
      flag: "🇷🇺",
      greeting: "Добро пожаловать на платформу!",
    },
    {
      code: "en" as const,
      name: "English",
      subtitle: "Global Language",
      flag: "🇺🇸",
      greeting: "Welcome to the platform!",
    },
  ];

  return (
    <AnimatePresence>
      {showLangModal && (
        <div
          id="language-selector-overlay"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
        >
          {/* Backdrop trigger */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
            onClick={() => {
              // Only let user close if they already have some language specified, 
              // otherwise force selecting to ensure a great first experience.
              if (localStorage.getItem("ms_lang")) {
                setShowLangModal(false);
              }
            }}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative w-full max-w-md overflow-hidden rounded-2xl border border-[var(--bd2)] bg-[var(--sur)] p-5 sm:p-6 md:p-8 shadow-2xl z-10 max-h-[92vh] flex flex-col"
          >
            {/* Top design accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-grad-main" />

            {/* Header */}
            <div className="text-center mb-5 flex-shrink-0">
              <div className="mx-auto w-10 h-10 rounded-full bg-[var(--ac)]/10 flex items-center justify-center text-[var(--ac)] mb-3 animate-pulse">
                <Globe size={20} />
              </div>
              <h2 className="text-lg sm:text-xl font-display font-bold tracking-tight text-[var(--txt)]">
                Tilni Tanlang / Выберите язык
              </h2>
              <p className="text-[11px] text-[var(--txt3)] mt-1.5 max-w-xs mx-auto">
                Qaysi tilda ishlatishni xohlaysiz? / На каком языке хотите использовать платформу?
              </p>
            </div>

            {/* Language Options List */}
            <div className="space-y-2.5 overflow-y-auto max-h-[50vh] pr-1.5 scrollbar-thin mb-5">
              {languages.map((item) => (
                <button
                  key={item.code}
                  onClick={() => setLang(item.code)}
                  className="group w-full flex items-center justify-between p-3 rounded-xl border border-[var(--bd2)] bg-[var(--bg)] hover:border-[var(--ac)]/40 hover:bg-[var(--sur2)]/60 transition-all duration-200 active:scale-[0.99] cursor-pointer relative overflow-hidden"
                >
                  {/* Hover background glow */}
                  <div className="absolute -inset-px bg-gradient-to-r from-purple-500/0 to-indigo-500/0 group-hover:from-purple-500/5 group-hover:to-indigo-500/5 transition-all duration-300" />

                  <div className="flex items-center gap-3 relative z-10">
                    {/* Consistent High Quality Custom Badge */}
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br from-[var(--ac)]/10 to-[var(--ac)]/5 text-[11px] font-black text-[var(--ac)] flex items-center justify-center border border-[var(--ac)]/15 uppercase tracking-wide group-hover:scale-105 transition-transform duration-200">
                      {item.code.toUpperCase()}
                    </div>
                    
                    <div className="text-left">
                      <h3 className="font-bold text-xs sm:text-sm text-[var(--txt)] group-hover:text-[var(--ac)] transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-[10px] text-[var(--txt3)]">{item.subtitle}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 relative z-10 pl-2">
                    <span className="hidden sm:inline-block text-[10px] text-[var(--txt3)] italic opacity-60 group-hover:opacity-100 transition-opacity">
                      {item.greeting.length > 25 ? item.greeting.substring(0, 22) + "..." : item.greeting}
                    </span>
                    <ArrowRight size={14} className="text-[var(--txt3)] opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </div>
                </button>
              ))}
            </div>

            {/* Support / Info Footer */}
            <div className="text-center text-[10px] text-[var(--txt3)] border-t border-[var(--bd)]/40 pt-3 flex-shrink-0">
              MindSphere · Dunyo bo'ylab barcha uchun bepul ta'lim
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
