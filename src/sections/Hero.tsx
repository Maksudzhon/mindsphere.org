/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Sparkles, BookOpen, Clock, Heart, Award, Shield, Cpu, Flame, Leaf, Scale, Paintbrush, Ruler, Briefcase, Music, Unlock, Eye, X, Check } from "lucide-react";
import { useApp } from "../providers/AppProvider";

export const Hero: React.FC = () => {
  const { t, setIsAuthOpen, setAuthTab, lang } = useApp();
  const [quickViewCourse, setQuickViewCourse] = useState<any | null>(null);

  const courseQuickDetails: Record<number, { en: { desc: string; chapters: string[] }; ru: { desc: string; chapters: string[] }; uz: { desc: string; chapters: string[] } }> = {
    0: { // Biology
      en: { desc: "Deep dive into cellular structures, ecological systems, biochemical transitions, and natural selections.", chapters: ["Cell Biology Essentials", "Genetics & Inheritances", "Ecosystem Architectures"] },
      ru: { desc: "Детальный разбор клеточных структур, экологических систем, биохимических процессов и законов генетики.", chapters: ["Основы клеточной биологии", "Генетика и наследование", "Архитектура экосистем"] },
      uz: { desc: "Hujayra tuzilishi, ekologik tizimlar, biokimyoviy jarayonlar va irsiyat qonuniyatlarini chuqur o'rganish.", chapters: ["Hujayra biologiyasi asoslari", "Genetika va irsiyat", "Ekologik tizimlar arxitekturasi"] }
    },
    1: { // Law
      en: { desc: "Study administrative regulations, corporate governances, public treaties, and civil protections.", chapters: ["Foundations of Jurisprudence", "Contractual Legal Systems", "Human Rights Protocols"] },
      ru: { desc: "Изучение административного права, корпоративного управления, международных договоров и защиты интересов граждан.", chapters: ["Основы юриспруденции", "Договорные правовые системы", "Протоколы прав человека"] },
      uz: { desc: "Ma'muriy tartibga solish, korporativ boshqaruv, xalqaro shartnomalar va fuqarolar huquqlari himoyasini o'rganish.", chapters: ["Yurisprudensiya asoslari", "Shartnomaviy huquq tizimlari", "Inson huquqlari bayonnomalari"] }
    },
    2: { // Fine Arts
      en: { desc: "Explore classic fine arts, visual methodologies, spatial configurations, and modern UI/UX compositions.", chapters: ["Classical & Renaissance Art Flow", "Symmetry & Color Harmonies", "Digital Artboards & Visual Composition"] },
      ru: { desc: "Исследования классического искусства, визуальных методологий, пространственных конфигураций и современного UI/UX.", chapters: ["Потоки классического искусства", "Симметрия и цветовая гармония", "Цифровые арт-борды и дизайн-системы"] },
      uz: { desc: "Klassik tasviriy san'at, vizual metodologiyalar va zamonaviy UI/UX kompozitsiyalarini tahlil qilish.", chapters: ["Klassik va Uyg'onish davri san'ati", "Simmetriya va ranglar uyg'unligi", "Raqamli san'at va vizual dizayn"] }
    },
    3: { // Math
      en: { desc: "Rigorous proofs in linear calculations, algorithmic complexity structures, and statistic logic paradigms.", chapters: ["Advanced Calculus Paradigms", "Linear Algebra Foundations", "Applied Discrete Probability Structures"] },
      ru: { desc: "Строгие доказательства, линейные вычисления, теории сложности алгоритмов и парадигмы математической логики.", chapters: ["Парадигмы продвинутого анализа", "Основы линейной алгебры", "Прикладная дискретная математика"] },
      uz: { desc: "Chiziqli hisob-kitoblar, algoritmik murakkablik va statistik mantiqiy modellar ustida chuqur ishlash.", chapters: ["Oliy matematika muammolari", "Chiziqli algebra asoslari", "Amaliy diskret ehtimolliklar"] }
    },
    4: { // Business
      en: { desc: "Learn venture operations, metric-driven financial evaluations, viral loop marketing, and unit economy rules.", chapters: ["Venture Capital Mechanics", "Unit Economics & Profit Optimization", "Growth Hacking & Brand Building"] },
      ru: { desc: "Освоение бизнес-процессов, финансовых показателей, вирусного маркетинга и юнит-экономики.", chapters: ["Механика венчурного капитала", "Юнит-экономика и прибыль", "Стратегии взрывного роста"] },
      uz: { desc: "Venchur operatsiyalari, moliyaviy baholash, virusli marketing va unit-iqtisodiyot qonun-qoidalarini o'rganish.", chapters: ["Venchur kapitali mexanikasi", "Unit-iqtisodiyot va optimallashtirish", "Katta o'sish strategiyalari"] }
    },
    5: { // Music
      en: { desc: "Harmonic sequences, frequency modulations, dynamic micro-timbre synthesis, and master compression tracks.", chapters: ["Acoustics & Classical Chord Progressions", "Synthesis, Oscillators & DSP", "Modern Digital Audio Workspace Compositions"] },
      ru: { desc: "Гармонические последовательности, частотные модуляции, микротембральный синтез и аудиосведение.", chapters: ["Акустика и основы сольфеджио", "Синтез звука и эквализация", "Работа в DAW и мастеринг треков"] },
      uz: { desc: "Garmonik ketma-ketliklar, chastotali modulyatsiyalar, mikrotembrli sintez va audiomontaj asoslari.", chapters: ["Akustika va klassik akkordlar", "Sintez, osillatorlar va DSP", "DAW tizimlarida ishlash"] }
    }
  };

  const triggerSignUp = () => {
    setAuthTab("signup");
    setIsAuthOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetY = rect.top + scrollTop - 74;
      window.scrollTo({ top: targetY, behavior: "smooth" });
    }
  };

  // Stateful course representations for active simulation and batch actions
  const [courses, setCourses] = useState([
    { id: 0, key: "biology", hours: "34h", prog: 78, color: "var(--green)", bg: "rgba(0,229,160,0.1)", icon: Leaf },
    { id: 1, key: "law", hours: "48h", prog: 45, color: "var(--ac)", bg: "rgba(124,111,255,0.1)", icon: Scale },
    { id: 2, key: "fineArts", hours: "21h", prog: 92, color: "var(--amber)", bg: "rgba(255,179,71,0.1)", icon: Paintbrush },
    { id: 3, key: "math", hours: "60h", prog: 12, color: "var(--cyan)", bg: "rgba(0,212,255,0.1)", icon: Ruler },
    { id: 4, key: "business", hours: "40h", prog: 60, color: "var(--rose)", bg: "rgba(255,107,138,0.1)", icon: Briefcase },
    { id: 5, key: "music", hours: "15h", prog: 85, color: "var(--ac2)", bg: "rgba(196,184,255,0.1)", icon: Music },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<"all" | "completed" | "active">("all");

  const getCourseName = (key: string) => {
    switch (key) {
      case "biology": return t.hero.mockup.domains.biology;
      case "law": return t.hero.mockup.domains.law;
      case "fineArts": return t.hero.mockup.domains.fineArts;
      case "math": return t.hero.mockup.domains.math;
      case "business": return t.hero.mockup.domains.business;
      case "music": return t.hero.mockup.domains.music;
      default: return "";
    }
  };

  // Dynamic Filtering Logic
  const filteredCourses = courses.filter((c) => {
    const name = getCourseName(c.key).toLowerCase();
    const query = searchQuery.toLowerCase();
    const matchesSearch = name.includes(query);

    if (!matchesSearch) return false;

    if (filterType === "completed") {
      return c.prog >= 80;
    } else if (filterType === "active") {
      return c.prog < 80;
    }
    return true;
  });

  return (
    <section className="relative min-h-screen pt-[110px] pb-16 overflow-hidden flex flex-col items-center justify-center">
      {/* Three Ambient Soft-Glow Gradients behind everything */}
      <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] rounded-full bg-[var(--ac)]/15 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-[350px] h-[350px] rounded-full bg-[var(--cyan)]/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[280px] h-[280px] rounded-full bg-[var(--green)]/15 blur-[85px] pointer-events-none" />

      {/* Grid Pattern overlay with masked fadeout towards the bottom */}
      <div className="absolute inset-0 dot-grid opacity-35 max-h-[920px] [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full flex flex-col items-center text-center">
        
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--bd2)] bg-[var(--sur)] shadow-sm mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--green)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--green)]"></span>
          </span>
          <span className="text-[10px] md:text-xs font-bold font-mono tracking-tight text-[var(--txt)]">
            {t.hero.badge}
          </span>
        </motion.div>

        {/* Primary Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display font-black tracking-tight leading-[1.1] mb-5 text-center flex flex-col"
          style={{ fontSize: "clamp(1.9rem, 4.5vw, 3.6rem)" }}
        >
          <span>{t.hero.h1Line1}</span>
          <span className="text-grad-full py-2">{t.hero.h1Line2}</span>
        </motion.h1>

        {/* Animated Subtitle Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm md:text-base text-[var(--txt2)] max-w-[560px] leading-relaxed mb-8 font-medium"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* Dual Actions Group */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10"
        >
          <button
            onClick={triggerSignUp}
            className="w-full sm:w-auto px-7 py-3 rounded-full bg-grad-main hover:opacity-95 font-bold text-xs text-white shadow-lg active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            {t.hero.ctaPrimary}
          </button>
          <button
            onClick={() => scrollToSection("guide")}
            className="w-full sm:w-auto px-7 py-3 rounded-full border border-[var(--bd2)] bg-[var(--sur2)] hover:bg-[var(--sur)] hover:border-[var(--ac)] text-[var(--txt)] font-bold text-xs active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            {t.hero.ctaSecondary}
          </button>
        </motion.div>

        {/* Social Proof metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center gap-3 mb-16 select-none"
        >
          <div className="flex -space-x-2">
            {[
              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
            ].map((img, i) => (
              <img
                key={i}
                src={img}
                referrerPolicy="no-referrer"
                alt="Active Student avatar representation"
                className="w-7 h-7 rounded-full border-1 border-[var(--bg)] object-cover bg-neutral-800 animate-fadeIn"
              />
            ))}
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1.5 leading-none">
              <span className="text-xs font-extrabold text-[var(--txt)]">2M+</span>
              <span className="text-[9px] font-mono tracking-wider text-[var(--green)] bg-[var(--green)]/10 px-1 py-0.2 rounded font-bold">
                ACTIVE
              </span>
            </div>
            <p className="text-[10px] text-[var(--txt2)] font-semibold mt-0.5">
              {t.hero.socialProof}
            </p>
          </div>
        </motion.div>

        {/* Platform Mockup (Fake Browser Frame) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, type: "spring", damping: 20 }}
          className="relative w-full max-w-4xl rounded-2xl border border-[var(--bd2)] bg-[var(--bg2)] shadow-2xl overflow-hidden text-left"
        >
          {/* Browser Top Navigation Bar */}
          <div className="h-10 px-4 border-b border-[var(--bd)] bg-[var(--sur)] flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
            </div>
            <div className="flex items-center bg-[var(--sur2)] rounded-md px-12 md:px-20 py-1 border border-[var(--bd)] text-[10px] text-[var(--txt2)] font-mono tracking-tight select-none select-all">
              {t.hero.mockup.url}
            </div>
            <div className="w-10" /> {/* Spacer */}
          </div>

          {/* Browser Workspace Layout */}
          <div className="flex h-[360px] md:h-[420px] bg-[var(--bg3)] text-[var(--txt)] relative">
            
            {/* Sidebar View (hidden on mobile, shown md+) */}
            <aside className="hidden md:flex flex-col w-[170px] border-r border-[var(--bd)] bg-[var(--sur)] p-4 justify-between h-full">
              <div className="space-y-4">
                <div className="flex items-center gap-1.5 select-none pb-1">
                  <span className="text-sm text-[var(--ac)] animate-spin-slow font-heading drop-shadow-[0_0_6px_rgba(124,111,255,0.4)]">
                    ⬡
                  </span>
                  <span className="font-display font-black text-xs tracking-tight text-grad-main">
                    MindSphere
                  </span>
                </div>
                <nav className="space-y-3">
                  {[
                    t.hero.mockup.dashboard,
                    t.hero.mockup.myCourses,
                    t.hero.mockup.explore,
                    t.hero.mockup.progress,
                    t.hero.mockup.teams,
                  ].map((label, i) => (
                    <div key={i} className="flex items-center gap-2 py-1.5 px-2 rounded-md hover:bg-[var(--sur2)] cursor-pointer">
                      <div className="w-2 h-2 rounded bg-[var(--txt3)]" />
                      <span className="text-[10px] font-semibold text-[var(--txt2)]">{label}</span>
                    </div>
                  ))}
                </nav>
              </div>

              {/* Sidebar Active status */}
              <div className="flex items-center gap-2 p-2 rounded-xl border border-[var(--bd)] bg-[var(--sur2)] lg:mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--green)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--green)]"></span>
                </span>
                <span className="text-[8px] font-mono leading-none font-bold uppercase text-[var(--txt2)]">
                  {t.hero.mockup.aiStatus}
                </span>
              </div>
            </aside>

            {/* Main Application Area (Core grid) */}
            <main className="flex-1 p-5 md:p-6 overflow-y-auto space-y-5 relative">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--bd)]/40 pb-3">
                <div>
                  <h3 className="text-[10px] font-mono text-[var(--txt3)] uppercase tracking-wider font-extrabold leading-none mb-1">
                    {t.hero.mockup.explore}
                  </h3>
                  <h2 className="text-base font-bold font-display leading-tight">{t.hero.mockup.myCourses}</h2>
                </div>

                {/* Filter & Search Bar */}
                <div className="flex flex-wrap items-center gap-2">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={lang === "uz" ? "Qidirish..." : lang === "ru" ? "Поиск..." : "Search..."}
                    className="h-7 px-2.5 rounded-lg border border-[var(--bd)] bg-[var(--sur)] text-[10px] font-sans focus:outline-none focus:border-[var(--ac)] transition-all max-w-[110px] text-[var(--txt)]"
                  />

                  <div className="flex bg-[var(--sur2)] p-0.5 rounded-lg border border-[var(--bd)] h-7 select-none">
                    <button
                      type="button"
                      onClick={() => setFilterType("all")}
                      className={`px-2 rounded-md text-[9px] font-bold transition-all ${
                        filterType === "all"
                          ? "bg-[var(--ac)] text-white shadow-sm"
                          : "text-[var(--txt2)] hover:text-[var(--txt)]"
                      }`}
                    >
                      {lang === "uz" ? "Barchasi" : lang === "ru" ? "Все" : "All"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setFilterType("active")}
                      className={`px-2 rounded-md text-[9px] font-bold transition-all ${
                        filterType === "active"
                          ? "bg-[var(--ac)] text-white shadow-sm"
                          : "text-[var(--txt2)] hover:text-[var(--txt)]"
                      }`}
                    >
                      {lang === "uz" ? "Faol" : lang === "ru" ? "В процессе" : "Active"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setFilterType("completed")}
                      className={`px-2 rounded-md text-[9px] font-bold transition-all ${
                        filterType === "completed"
                          ? "bg-[var(--ac)] text-white shadow-sm"
                          : "text-[var(--txt2)] hover:text-[var(--txt)]"
                      }`}
                    >
                      {lang === "uz" ? "Yopilgan" : lang === "ru" ? "Завершено" : "Completed"}
                    </button>
                  </div>
                </div>
              </div>

              {/* 6 Subject paths preview grid */}
              {filteredCourses.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <p className="text-xs text-[var(--txt3)] font-mono">
                    {lang === "uz" ? "Kurslar topilmadi" : lang === "ru" ? "Курсы не найдены" : "No courses found"}
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 pb-4">
                  {filteredCourses.map((c) => {
                    const Icon = c.icon;
                    const courseName = getCourseName(c.key);
                    return (
                      <motion.div
                        key={c.id}
                        onClick={() => setQuickViewCourse({ ...c, index: c.id, name: courseName })}
                        whileHover={{
                          scale: 1.03,
                          y: -4,
                          borderColor: "var(--bd2)",
                          boxShadow: "0 10px 20px -10px rgba(124, 111, 255, 0.2)"
                        }}
                        transition={{ type: "spring", stiffness: 350, damping: 25 }}
                        className="group relative p-3.5 rounded-xl border border-[var(--bd)] bg-[var(--sur)] flex flex-col justify-between cursor-pointer overflow-hidden transition-colors"
                      >
                        {/* Hover action Quick View Overlay */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-2 z-10">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setQuickViewCourse({ ...c, index: c.id, name: courseName });
                            }}
                            className="px-3 py-1.5 rounded-lg bg-[var(--ac)] text-white hover:opacity-90 font-sans font-extrabold text-[10px] uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-1.5 select-none cursor-pointer w-32"
                          >
                            <Eye size={12} />
                            <span>{lang === "uz" ? "Ko'rish" : lang === "ru" ? "Просмотр" : "Quick View"}</span>
                          </button>
                        </div>

                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <Icon size={14} style={{ color: c.color }} />
                            <span className="text-[8px] font-mono px-1.5 py-0.5 rounded text-[var(--txt2)] bg-[var(--sur2)]">
                              {c.hours}
                            </span>
                          </div>
                          <h4 className="text-xs font-bold font-sans text-[var(--txt)] line-clamp-1 mb-3">
                            {courseName}
                          </h4>
                        </div>

                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-[8px] font-mono text-[var(--txt2)]">
                            <span>Progress</span>
                            <span className="font-semibold text-[var(--txt)]">{c.prog}%</span>
                          </div>
                          <div className="h-1 bg-[var(--sur2)] rounded-full overflow-hidden">
                            <div
                               className="h-full rounded-full transition-all duration-1000"
                               style={{ width: `${c.prog}%`, backgroundColor: c.color }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </main>

            {/* Floating Card 1: AI Tutor (Hidden Mobile) */}
            <div className="hidden md:flex absolute -top-5 -left-10 p-3 rounded-xl border border-[var(--bd2)] bg-[var(--sur)] shadow-lg animate-float max-w-[190px] items-start gap-2.5 z-20 hover:scale-[1.02] transition-transform">
              <span className="p-2 rounded-lg bg-[var(--ac)]/15 text-[var(--ac)] flex items-center justify-center select-none">
                <Cpu size={14} className="animate-pulse" />
              </span>
              <div>
                <h5 className="text-[10px] font-extrabold text-[var(--txt)]">
                  {t.hero.mockup.aiTutorTag}
                </h5>
                <p className="text-[8px] text-[var(--txt2)] leading-tight mt-0.5">
                  {t.hero.mockup.activeLearning}
                </p>
              </div>
            </div>

            {/* Floating Card 2: 100% Free Campaign (Hidden Mobile) */}
            <div className="hidden md:flex absolute -bottom-5 -right-6 p-3 rounded-xl border border-[var(--bd2)] bg-[var(--sur)] shadow-lg animate-float-delayed max-w-[170px] items-start gap-2.5 z-20 hover:scale-[1.02] transition-transform">
              <span className="p-2 rounded-lg bg-[var(--green)]/15 text-[var(--green)] flex items-center justify-center select-none">
                <Unlock size={14} />
              </span>
              <div>
                <h5 className="text-[10px] font-extrabold text-[var(--txt)]">
                  {t.hero.mockup.freeForever}
                </h5>
                <p className="text-[8px] text-[var(--txt2)] leading-tight mt-0.5">
                  {t.hero.mockup.freeForeverDesc}
                </p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>

      {/* Quick View Course Modal */}
      <AnimatePresence>
        {quickViewCourse && (() => {
          const courseIdx = quickViewCourse.index as number;
          const details = courseQuickDetails[courseIdx]?.[lang as "en"|"ru"|"uz"] || courseQuickDetails[courseIdx]?.en;
          const SelectedIcon = quickViewCourse.icon;
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 shadow-2xl"
              onClick={() => setQuickViewCourse(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ type: "spring", duration: 0.4 }}
                className="w-full max-w-lg bg-[var(--sur)] border border-[var(--bd2)] rounded-3xl p-6 relative overflow-hidden shadow-2xl text-left"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Decorative colored glow representing course themed color */}
                <div 
                  className="absolute top-0 inset-x-0 h-1.5"
                  style={{ backgroundColor: quickViewCourse.color }}
                />

                <button
                  type="button"
                  onClick={() => setQuickViewCourse(null)}
                  className="absolute top-4 right-4 text-[var(--txt3)] hover:text-[var(--txt)] transition-colors cursor-pointer text-sm font-bold font-mono p-1 rounded-full hover:bg-[var(--sur2)] flex items-center justify-center"
                >
                  <X size={16} />
                </button>

                <div className="space-y-5 pt-2">
                  {/* Header */}
                  <div className="flex items-start gap-4">
                    <div 
                      className="p-3.5 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg"
                      style={{ backgroundColor: quickViewCourse.color }}
                    >
                      <SelectedIcon size={24} />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase font-mono tracking-widest text-[var(--txt3)] font-black">
                        {lang === "uz" ? "Tezkor sharh" : lang === "ru" ? "Быстрый обзор" : "Course Quick View"}
                      </span>
                      <h3 className="text-lg font-black font-display text-[var(--txt)] leading-tight">
                        {quickViewCourse.name}
                      </h3>
                      <div className="flex items-center gap-3 text-[10px] text-[var(--txt2)] font-mono font-bold mt-1">
                        <span className="flex items-center gap-1">
                          <Clock size={12} style={{ color: quickViewCourse.color }} />
                          {quickViewCourse.hours}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--bd)]" />
                        <span className="flex items-center gap-1 text-[var(--ac)]">
                          <Sparkles size={12} />
                          {lang === "uz" ? "Yordamchi AI" : lang === "ru" ? "ИИ-Помощник" : "AI Empowered"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Course Description */}
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--txt3)]">
                      {lang === "uz" ? "Kurs haqida batafsil" : lang === "ru" ? "Описание курса" : "Course Description"}
                    </h4>
                    <p className="text-xs text-[var(--txt2)] leading-relaxed font-medium">
                      {details?.desc}
                    </p>
                  </div>

                  {/* Progress panel */}
                  <div className="bg-[var(--sur2)]/60 border border-[var(--bd)]/60 rounded-2xl p-4 space-y-3">
                    <div className="flex justify-between items-center text-xs font-bold text-[var(--txt)]">
                      <span>{lang === "uz" ? "O'zlashtirish darajasi" : lang === "ru" ? "Текущий прогресс" : "Syllabus Progress"}</span>
                      <span className="font-mono text-xs" style={{ color: quickViewCourse.color }}>{quickViewCourse.prog}%</span>
                    </div>
                    <div className="h-2 bg-[var(--sur2)] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{ width: `${quickViewCourse.prog}%`, backgroundColor: quickViewCourse.color }}
                      />
                    </div>
                    <div className="flex justify-between text-[9px] text-[var(--txt3)] font-mono">
                      <span>{lang === "uz" ? "Boshlanish" : lang === "ru" ? "Старт" : "Commenced"}</span>
                      <span>{lang === "uz" ? "Sertifikat" : lang === "ru" ? "Сертификат" : "Certificate Ready"}</span>
                    </div>
                  </div>

                  {/* Curriculum chapters */}
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--txt3)]">
                      {lang === "uz" ? "Dastur Boblari" : lang === "ru" ? "Программа курса" : "Syllabus Chapters"}
                    </h4>
                    <ul className="space-y-2">
                      {details?.chapters.map((ch, idx) => (
                        <li 
                          key={idx} 
                          className="flex items-center gap-2.5 px-3 py-2 rounded-xl border border-[var(--bd)]/40 bg-[var(--sur2)]/30 text-xs font-sans text-[var(--txt)] font-semibold hover:border-[var(--bd2)] transition-colors"
                        >
                          <span className="w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-mono font-black text-[var(--txt2)] bg-[var(--sur2)] border border-[var(--bd)]/40 shrink-0">
                            0{idx + 1}
                          </span>
                          <span className="flex-1 truncate">{ch}</span>
                          <span className="text-[8px] font-mono uppercase bg-[var(--ac)]/10 text-[var(--ac)] px-1.5 py-0.5 rounded font-black shrink-0">
                            {idx === 0 && quickViewCourse.prog >= 50 ? (lang === "uz" ? "Tugallandi" : lang === "ru" ? "Пройдено" : "Done") : (lang === "uz" ? "Ochiq" : lang === "ru" ? "Доступно" : "Active")}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Call to actions */}
                  <div className="flex gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setQuickViewCourse(null)}
                      className="flex-1 py-2.5 rounded-xl border border-[var(--bd)] text-xs text-[var(--txt2)] hover:bg-[var(--sur2)] cursor-pointer font-black uppercase text-center transition-all"
                    >
                      {lang === "uz" ? "Yopish" : lang === "ru" ? "Закрыть" : "Close"}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setQuickViewCourse(null);
                        triggerSignUp();
                      }}
                      className="flex-1 py-2.5 rounded-xl text-white text-xs font-black uppercase shadow-lg hover:opacity-95 active:scale-[0.98] transition-all cursor-pointer text-center"
                      style={{ 
                        backgroundColor: quickViewCourse.color,
                        boxShadow: `0 10px 15px -3px ${quickViewCourse.color}40`
                      }}
                    >
                      {lang === "uz" ? "Kursni Davom Ettirish" : lang === "ru" ? "Продолжить курс" : "Continue Course"}
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </section>
  );
};
