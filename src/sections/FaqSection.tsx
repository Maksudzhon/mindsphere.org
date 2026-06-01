/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useApp } from "../providers/AppProvider";
import {
  Search,
  BookOpen,
  Globe,
  Sparkles,
  Trophy,
  Check,
  Copy,
  ChevronDown,
  HelpCircle
} from "lucide-react";

export const FaqSection: React.FC = () => {
  const { t, lang } = useApp();

  // Accordion multiple-open state for FAQs (local to this component!)
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);
  const [faqSearch, setFaqSearch] = useState("");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<"all" | "platform" | "ai" | "pricing">("all");
  const [feedback, setFeedback] = useState<{[key: number]: "yes" | "no"}>({});

  const localFAQTranslations = {
    en: {
      searchPlaceholder: "Search frequently asked questions...",
      expandAll: "Expand All",
      collapseAll: "Collapse All",
      noResults: "No matching FAQs found. Try different search terms.",
      copied: "Copied!",
      copyLink: "Copy Link",
      feedbackTitle: "Was this answer helpful?",
      feedbackYes: "Yes",
      feedbackNo: "No",
      feedbackSuccess: "Thank you for supporting our digital cooperative!",
      categories: {
        all: "All Questions",
        platform: "Platform & Eco",
        ai: "AI & Learning",
        pricing: "Teams & Pricing"
      }
    },
    ru: {
      searchPlaceholder: "Поиск по частым вопросам...",
      expandAll: "Развернуть все",
      collapseAll: "Свернуть все",
      noResults: "Вопросы не найдены. Попробуйте другой запрос.",
      copied: "Скопировано!",
      copyLink: "Копировать ссылку",
      feedbackTitle: "Был ли этот ответ полезен?",
      feedbackYes: "Да",
      feedbackNo: "Нет",
      feedbackSuccess: "Благодарим вас за поддержку нашего цифрового кооператива!",
      categories: {
        all: "Все ответы",
        platform: "Платформа и Эко",
        ai: "ИИ и Обучение",
        pricing: "Команды и Цены"
      }
    },
    uz: {
      searchPlaceholder: "Tez-tez so'raladigan savollarni qidirish...",
      expandAll: "Hammasini ochish",
      collapseAll: "Hammasini yopish",
      noResults: "Mos keladigan savollar topilmadi. Boshqa so'zlar bilan urinib ko'ring.",
      copied: "Nusxalandi!",
      copyLink: "Havolani nusxalash",
      feedbackTitle: "Ushbu javob sizga foydali bo'ldimi?",
      feedbackYes: "Ha",
      feedbackNo: "Yo'q",
      feedbackSuccess: "Raqamli kooperativimizni qo'llab-quvvatlaganingiz uchun tashakkur!",
      categories: {
        all: "Barcha Savollar",
        platform: "Platforma va Eko",
        ai: "AI va O'rganish",
        pricing: "Jamoalar va Narxlar"
      }
    }
  };

  const currTrans = localFAQTranslations[lang] || localFAQTranslations.en;

  const handleCopyLink = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    const url = `${window.location.origin}${window.location.pathname}#faq-${index}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // deep linking scrolling effect
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash && hash.startsWith("#faq-")) {
        const idxStr = hash.replace("#faq-", "");
        const idx = parseInt(idxStr, 10);
        if (!isNaN(idx)) {
          // Open the specific FAQ
          setOpenFaqs((prev) => prev.includes(idx) ? prev : [...prev, idx]);
          setTimeout(() => {
            const el = document.getElementById(`faq-item-${idx}`);
            if (el) {
              const rect = el.getBoundingClientRect();
              const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
              const targetY = rect.top + scrollTop - (window.innerHeight / 2) + (rect.height / 2);
              window.scrollTo({ top: targetY, behavior: "smooth" });
            }
          }, 300);
        }
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return (
    <section id="faq" className="py-20 bg-[var(--bg)] border-b border-[var(--bd)] scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block text-[9px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3 text-[var(--cyan)] bg-[var(--cyan)]/10">
            Common Questions
          </span>
          <h2 className="text-2xl md:text-3xl font-display font-black leading-tight tracking-tight text-[var(--txt)]">
            {t.faq.title}
          </h2>
          <p className="text-sm text-[var(--txt2)] mt-3 leading-relaxed font-semibold">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Search Bar + Toggle expand layout */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div className="relative w-full sm:max-w-md">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-[var(--txt3)]">
              <Search size={14} className="animate-pulse" />
            </span>
            <motion.input
              type="text"
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              placeholder={currTrans.searchPlaceholder}
              whileFocus={{ scale: 1.01, borderColor: "var(--ac)" }}
              className="w-full pl-10 pr-10 py-2.5 rounded-full border border-[var(--bd)] bg-[var(--sur)] text-xs font-semibold text-[var(--txt)] placeholder-[var(--txt3)] focus:outline-none focus:ring-1 focus:ring-[var(--ac)] transition-all cursor-text shadow-sm"
            />
            {faqSearch && (
              <button
                onClick={() => setFaqSearch("")}
                className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-[var(--txt3)] hover:text-red-500 transition-colors text-[10px] font-mono font-bold cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 select-none shrink-0 w-full sm:w-auto justify-end">
            <button
              onClick={() => setOpenFaqs([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])}
              className="px-4 py-2 border border-[var(--bd)] bg-[var(--sur)] hover:border-[var(--bd2)] text-[10px] font-bold text-[var(--txt)] rounded-full transition-all cursor-pointer hover:bg-[var(--sur2)]/30 active:scale-[0.97]"
            >
              {currTrans.expandAll}
            </button>
            <button
              onClick={() => setOpenFaqs([])}
              className="px-4 py-2 border border-[var(--bd)] bg-[var(--sur)] hover:border-[var(--bd2)] text-[10px] font-bold text-[var(--txt)] rounded-full transition-all cursor-pointer hover:bg-[var(--sur2)]/30 active:scale-[0.97]"
            >
              {currTrans.collapseAll}
            </button>
          </div>
        </div>

        {/* FAQ Category Selector pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 select-none">
          {(["all", "platform", "ai", "pricing"] as const).map((cat) => {
            const isActive = selectedCategory === cat;
            const catLabel = currTrans.categories[cat];
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-full border transition-all duration-300 relative cursor-pointer ${
                  isActive
                    ? "border-[var(--ac)] text-[var(--txt)] bg-[var(--ac)]/15 shadow-glow scale-[1.03]"
                    : "border-[var(--bd)] text-[var(--txt2)] hover:border-[var(--bd2)] hover:text-[var(--txt)] bg-[var(--sur)] hover:bg-[var(--sur2)]/30"
                }`}
              >
                <div className="flex items-center gap-1.5 flex-row">
                  {cat === "all" && <BookOpen size={12} className="opacity-80 text-[var(--ac)]" />}
                  {cat === "platform" && <Globe size={12} className="opacity-80 text-[var(--ac)]" />}
                  {cat === "ai" && <Sparkles size={12} className="opacity-80 text-[var(--ac)]" />}
                  {cat === "pricing" && <Trophy size={12} className="opacity-80 text-[var(--ac)]" />}
                  <span>{catLabel}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Accordion FAQ Grid */}
        <div className="space-y-3.5">
          {(() => {
            const faqData = [
              { q: t.faq.q1, a: t.faq.a1 },
              { q: t.faq.q2, a: t.faq.a2 },
              { q: t.faq.q3, a: t.faq.a3 },
              { q: t.faq.q4, a: t.faq.a4 },
              { q: t.faq.q5, a: t.faq.a5 },
              { q: t.faq.q6, a: t.faq.a6 },
              { q: t.faq.q7, a: t.faq.a7 },
              { q: t.faq.q8, a: t.faq.a8 },
              { q: t.faq.q9, a: t.faq.a9 },
              { q: t.faq.q10, a: t.faq.a10 },
              { q: t.faq.q11, a: t.faq.a11 },
            ];

            const getCategory = (idx: number): "platform" | "ai" | "pricing" => {
              if ([0, 3, 7, 8, 9].includes(idx)) return "platform";
              if ([1, 10].includes(idx)) return "ai";
              return "pricing";
            };

            const filtered = faqData
              .map((item, originalIndex) => ({ ...item, originalIndex }))
              .filter((item) => {
                const matchesSearch = !faqSearch.trim() ||
                  item.q.toLowerCase().includes(faqSearch.toLowerCase()) ||
                  item.a.toLowerCase().includes(faqSearch.toLowerCase());
                
                const cat = getCategory(item.originalIndex);
                const matchesCategory = selectedCategory === "all" || cat === selectedCategory;

                return matchesSearch && matchesCategory;
              });

            if (filtered.length > 0) {
              return (
                <motion.div layout className="space-y-3.5">
                  <AnimatePresence mode="popLayout">
                    {filtered.map((item) => {
                      const idx = item.originalIndex;
                      const isOpen = openFaqs.includes(idx);
                      const isCopied = copiedIndex === idx;

                      return (
                        <motion.div
                          key={idx}
                          id={`faq-item-${idx}`}
                          layout
                          initial={{ opacity: 0, y: 12, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -12, scale: 0.98 }}
                          transition={{ type: "spring", stiffness: 350, damping: 26 }}
                          className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                            isOpen
                              ? "border-[rgba(124,111,255,0.43)] bg-[var(--sur)] shadow-glow"
                              : "border-[var(--bd)] bg-[var(--sur2)]/30 hover:bg-[var(--sur2)]/70 hover:border-[var(--bd2)]"
                          }`}
                        >
                          <div
                            onClick={() => toggleFaq(idx)}
                            className="w-full px-5 py-4 flex items-center justify-between text-left cursor-pointer select-none"
                          >
                            <span className="text-xs md:text-[13px] font-bold leading-normal text-[var(--txt)] pr-4">
                              {item.q}
                            </span>
                            
                            <div className="flex items-center gap-3 shrink-0 flex-row">
                              <button
                                onClick={(e) => handleCopyLink(e, idx)}
                                title={currTrans.copyLink}
                                className={`h-8 rounded-lg border transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer text-[9.5px] sm:text-[10px] font-bold tracking-wide select-none shrink-0 ${
                                  isCopied
                                    ? "bg-[var(--green)]/15 border-[var(--green)]/40 text-[var(--green)] shadow-[0_0_12px_rgba(34,197,94,0.15)] w-[82px] sm:w-[102px]"
                                    : "bg-[var(--sur2)] border-[var(--bd)] text-[var(--txt3)] hover:text-[var(--ac)] hover:border-[var(--ac)]/45 w-[82px] sm:w-[102px]"
                                }`}
                              >
                                {isCopied ? (
                                  <>
                                    <Check size={10} className="stroke-[3.5px] animate-bounce" />
                                    <span className="font-sans font-bold">{currTrans.copied}</span>
                                  </>
                                ) : (
                                  <>
                                    <Copy size={10} />
                                    <span className="hidden sm:inline font-sans font-bold text-[var(--txt3)]">{currTrans.copyLink}</span>
                                  </>
                                )}
                              </button>

                              <ChevronDown
                                size={14}
                                className={`text-[var(--txt3)] transition-transform duration-300 ${isOpen ? "rotate-180 text-[var(--ac)]" : ""}`}
                              />
                            </div>
                          </div>

                          {/* Animated Accordion Height */}
                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25, ease: "easeInOut" }}
                                className="overflow-hidden"
                              >
                                <div className="px-5 pb-5 pt-1 text-[11px] md:text-[12px] leading-relaxed text-[var(--txt2)] border-t border-[var(--bd)]/40 font-medium font-sans">
                                  <p>{item.a}</p>

                                  {/* FAQ Helpful Verification Widget */}
                                  <div className="mt-4 pt-4 border-t border-[var(--bd)]/20 flex flex-col sm:flex-row items-center justify-between gap-3 bg-[var(--sur2)]/10 p-3 rounded-xl font-sans">
                                    <span className="text-[10px] md:text-[11px] font-bold text-[var(--txt2)] flex items-center gap-1.5 select-none">
                                      {currTrans.feedbackTitle}
                                    </span>
                                    <div className="flex items-center gap-2 select-none flex-row">
                                      {feedback[idx] ? (
                                        <motion.p
                                          initial={{ opacity: 0, x: 10 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          className="text-[9px] font-bold text-[var(--green)] flex items-center gap-1.5 bg-[var(--green)]/10 px-3 py-1 rounded-full border border-[var(--green)]/30"
                                        >
                                          💚 {currTrans.feedbackSuccess}
                                        </motion.p>
                                      ) : (
                                        <>
                                          <button
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              setFeedback((prev) => ({ ...prev, [idx]: "yes" }));
                                            }}
                                            className="px-3 py-1.5 rounded-lg border border-[var(--bd)] bg-[var(--sur)] text-[10px] font-bold text-[var(--txt)] flex items-center gap-1 cursor-pointer hover:border-[var(--green)] hover:text-[var(--green)] hover:bg-[var(--green)]/10 transition-all select-none active:scale-[0.95]"
                                          >
                                            👍 {currTrans.feedbackYes}
                                          </button>
                                          <button
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              setFeedback((prev) => ({ ...prev, [idx]: "no" }));
                                            }}
                                            className="px-3 py-1.5 rounded-lg border border-[var(--bd)] bg-[var(--sur)] text-[10px] font-bold text-[var(--txt)] flex items-center gap-1 cursor-pointer hover:border-red-500/50 hover:text-red-500 hover:bg-red-500/10 transition-all select-none active:scale-[0.95]"
                                          >
                                            👎 {currTrans.feedbackNo}
                                          </button>
                                        </>
                                      )}
                                    </div>
                                  </div>

                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </motion.div>
              );
            } else {
              return (
                <div className="text-center py-12 px-4 border border-dashed border-[var(--bd)] rounded-2xl bg-[var(--sur2)]/10">
                  <HelpCircle className="mx-auto text-[var(--txt3)] mb-3 opacity-60 animate-bounce" size={24} />
                  <p className="text-xs text-[var(--txt2)] font-bold">
                    {currTrans.noResults}
                  </p>
                </div>
              );
            }
          })()}
        </div>

      </div>
    </section>
  );
};
