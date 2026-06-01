/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  Globe,
  Trophy,
  Award,
  ShieldAlert,
  Unlock,
  CheckCircle,
  HelpCircle,
  Check,
  ChevronDown,
  ArrowRight,
  Send,
  Search,
  Link,
  Copy,
  MessageSquare,
  // 24 disciplines icons
  Stethoscope,
  Scale,
  FlaskConical,
  Ruler,
  Settings,
  Code,
  Scroll,
  BrainCircuit,
  Briefcase,
  Paintbrush,
  Music,
  Map,
  BookOpen,
  Orbit,
  Pipette,
  Leaf,
  Landmark,
  Newspaper,
  Vote,
  Brain,
  BarChart2,
  Languages,
  Activity,
  Flame
} from "lucide-react";
import { useApp } from "../providers/AppProvider";
import { AIChatSimulator } from "../features/ai-chat/AIChatSimulator";
import { FaqSection } from "./FaqSection";
import { ProfileCustomizer } from "../features/profile/ProfileCustomizer";
import { CommunityTab } from "../features/community/CommunityTab";

export const Content: React.FC = () => {
  const { t, setIsAuthOpen, setAuthTab, lang } = useApp();

  // Tab state for Features section
  const [activeTab, setActiveTab] = useState<"ai" | "fields" | "lang" | "access" | "community">("ai");

  // Custom toast notification banner for challenges simulation
  const [liveToast, setLiveToast] = useState<{ sender: string; channel: string; text: string } | null>(null);

  // Custom simulation variables
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("monthly");
  const [selectedUpgradePlan, setSelectedUpgradePlan] = useState<string | null>(null);
  const [isPremiumUser, setIsPremiumUser] = useState<boolean>(false);

  const triggerSignUp = () => {
    setAuthTab("signup");
    setIsAuthOpen(true);
  };

  const launchLMS = () => {
    window.open("https://mindsphere.space", "_blank", "noopener,noreferrer");
  };

  // 24 Domains structure for "All Fields" Tab (Translated keys in i18n are mapped)
  const domainKeys = [
    { icon: Stethoscope, key: "medicine", id: "en_medicine" },
    { icon: Scale, key: "law", id: "en_law" },
    { icon: FlaskConical, key: "science", id: "en_science" },
    { icon: Ruler, key: "math", id: "en_math" },
    { icon: Settings, key: "engineering", id: "en_engineering" },
    { icon: Code, key: "cs", id: "en_cs" },
    { icon: Scroll, key: "history", id: "en_history" },
    { icon: BrainCircuit, key: "psychology", id: "en_psychology" },
    { icon: Briefcase, key: "business", id: "en_business" },
    { icon: Paintbrush, key: "arts", id: "en_arts" },
    { icon: Music, key: "music", id: "en_music" },
    { icon: Map, key: "geography", id: "en_geography" },
    { icon: BookOpen, key: "literature", id: "en_literature" },
    { icon: Orbit, key: "physics", id: "en_physics" },
    { icon: Pipette, key: "chemistry", id: "en_chemistry" },
    { icon: Leaf, key: "biology", id: "en_biology" },
    { icon: Landmark, key: "architecture", id: "en_architecture" },
    { icon: Newspaper, key: "journalism", id: "en_journalism" },
    { icon: Vote, key: "politics", id: "en_politics" },
    { icon: Brain, key: "philosophy", id: "en_philosophy" },
    { icon: BarChart2, key: "stats", id: "en_stats" },
    { icon: Languages, key: "linguistics", id: "en_linguistics" },
    { icon: Activity, key: "sports", id: "en_sports" },
    { icon: Flame, key: "culinary", id: "en_culinary" }
  ];

  return (
    <div className="w-full">
      
      {/* ======================================================================
          BENEFITS SECTION (id="benefits")
          ====================================================================== */}
      <section id="benefits" className="py-20 bg-[var(--bg)] border-b border-[var(--bd)] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-[9px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3 text-[var(--gradient)] bg-[var(--ac)]/10 text-[var(--ac)] animate-pulse">
              Core Architecture
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-black leading-tight tracking-tight text-[var(--txt)] animate-fadeIn">
              {t.benefits.title}
            </h2>
            <p className="text-sm text-[var(--txt2)] mt-3 leading-relaxed font-semibold">
              {t.benefits.subtitle}
            </p>
          </div>

          {/* 6 Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 animate-fadeIn">
            
            {/* AI Tutor Card */}
            <motion.div
              whileHover={{ y: -6, scale: 1.015, borderColor: "rgba(124, 111, 255, 0.4)", boxShadow: "0 10px 25px -10px rgba(124, 111, 255, 0.15)" }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="p-6 rounded-2xl border border-[var(--bd)] bg-[var(--sur2)]/40 hover:bg-[var(--sur2)]/85 transition-colors"
            >
              <Sparkles className="text-[var(--ac)] mb-3" size={24} />
              <h3 className="text-sm font-bold font-sans text-[var(--txt)] mb-2">{t.benefits.card1Title}</h3>
              <p className="text-xs text-[var(--txt2)] leading-relaxed font-semibold">{t.benefits.card1Desc}</p>
            </motion.div>

            {/* Fields Card */}
            <motion.div
              whileHover={{ y: -6, scale: 1.015, borderColor: "rgba(124, 111, 255, 0.4)", boxShadow: "0 10px 25px -10px rgba(124, 111, 255, 0.15)" }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="p-6 rounded-2xl border border-[var(--bd)] bg-[var(--sur2)]/40 hover:bg-[var(--sur2)]/85 transition-colors"
            >
              <Globe className="text-[var(--ac)] mb-3" size={24} />
              <h3 className="text-sm font-bold font-sans text-[var(--txt)] mb-2">{t.benefits.card2Title}</h3>
              <p className="text-xs text-[var(--txt2)] leading-relaxed font-semibold">{t.benefits.card2Desc}</p>
            </motion.div>

            {/* Challenges Card */}
            <motion.div
              whileHover={{ y: -6, scale: 1.015, borderColor: "rgba(124, 111, 255, 0.4)", boxShadow: "0 10px 25px -10px rgba(124, 111, 255, 0.15)" }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="p-6 rounded-2xl border border-[var(--bd)] bg-[var(--sur2)]/40 hover:bg-[var(--sur2)]/85 transition-colors"
            >
              <Trophy className="text-[var(--ac)] mb-3" size={24} />
              <h3 className="text-sm font-bold font-sans text-[var(--txt)] mb-2">{t.benefits.card3Title}</h3>
              <p className="text-xs text-[var(--txt2)] leading-relaxed font-semibold">{t.benefits.card3Desc}</p>
            </motion.div>

            {/* Quizzes Card */}
            <motion.div
              whileHover={{ y: -6, scale: 1.015, borderColor: "rgba(124, 111, 255, 0.4)", boxShadow: "0 10px 25px -10px rgba(124, 111, 255, 0.15)" }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="p-6 rounded-2xl border border-[var(--bd)] bg-[var(--sur2)]/40 hover:bg-[var(--sur2)]/85 transition-colors"
            >
              <HelpCircle className="text-[var(--ac)] mb-3" size={24} />
              <h3 className="text-sm font-bold font-sans text-[var(--txt)] mb-2">{t.benefits.card4Title}</h3>
              <p className="text-xs text-[var(--txt2)] leading-relaxed font-semibold">{t.benefits.card4Desc}</p>
            </motion.div>

            {/* Passes Card */}
            <motion.div
              whileHover={{ y: -6, scale: 1.015, borderColor: "rgba(124, 111, 255, 0.4)", boxShadow: "0 10px 25px -10px rgba(124, 111, 255, 0.15)" }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="p-6 rounded-2xl border border-[var(--bd)] bg-[var(--sur2)]/40 hover:bg-[var(--sur2)]/85 transition-colors"
            >
              <Award className="text-[var(--ac)] mb-3" size={24} />
              <h3 className="text-sm font-bold font-sans text-[var(--txt)] mb-2">{t.benefits.card5Title}</h3>
              <p className="text-xs text-[var(--txt2)] leading-relaxed font-semibold">{t.benefits.card5Desc}</p>
            </motion.div>

            {/* Open Source Card */}
            <motion.div
              whileHover={{ y: -6, scale: 1.015, borderColor: "rgba(124, 111, 255, 0.4)", boxShadow: "0 10px 25px -10px rgba(124, 111, 255, 0.15)" }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="p-6 rounded-2xl border border-[var(--bd)] bg-[var(--sur2)]/40 hover:bg-[var(--sur2)]/85 transition-colors"
            >
              <Unlock className="text-[var(--ac)] mb-3" size={24} />
              <h3 className="text-sm font-bold font-sans text-[var(--txt)] mb-2">{t.benefits.card6Title}</h3>
              <p className="text-xs text-[var(--txt2)] leading-relaxed font-semibold">{t.benefits.card6Desc}</p>
            </motion.div>

          </div>

          {/* BELOW BENCHMARK: Profile Passes (3 cards) */}
          <div className="text-center max-w-lg mx-auto mb-10">
            <h3 className="text-base font-bold font-display leading-tight">Persistent Recognition Passes</h3>
            <p className="text-[11px] text-[var(--txt2)] mt-1 tracking-tight font-semibold">Optional persistent identifiers validating study milestones across networks.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            
            {/* Free Pass Card */}
            <motion.div
              whileHover={{ y: -6, scale: 1.015, borderColor: "rgba(124, 111, 255, 0.2)" }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="p-6 rounded-2xl border border-[var(--bd)] bg-[var(--sur)] flex flex-col justify-between"
            >
              <div>
                <h4 className="text-xs font-bold text-[var(--txt2)] uppercase tracking-wider">{t.benefits.passes.freeTitle}</h4>
                <div className="my-3 flex items-baseline gap-1">
                  <span className="text-2xl font-black font-display text-[var(--txt)]">{t.benefits.passes.freePrice}</span>
                  <span className="text-[10px] text-[var(--txt3)] font-semibold">/ forever</span>
                </div>
                <p className="text-[10px] text-[var(--txt2)] mb-5 italic">{t.benefits.passes.freeSub}</p>
                
                <ul className="space-y-2.5 text-[10px] text-[var(--txt2)] border-t border-[var(--bd)] pt-4 mb-6">
                  {t.benefits.passes.freeFeatures.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-[var(--ac)] font-bold">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={triggerSignUp}
                className="w-full py-2 rounded-xl border border-[var(--bd2)] bg-[var(--sur2)] hover:bg-[var(--sur)] text-[10px] font-bold text-[var(--txt)] transition-all cursor-pointer text-center"
              >
                {t.benefits.passes.getStarted}
              </button>
            </motion.div>

            {/* Pro Pass Card */}
            <motion.div
              whileHover={{ y: -6, scale: 1.02, boxShadow: "0 12px 30px rgba(124, 111, 255, 0.3)" }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="p-6 rounded-2xl border border-[var(--ac)] bg-[var(--sur)] flex flex-col justify-between relative shadow-glow"
            >
              <span className="absolute -top-3 right-5 px-2 py-0.5 rounded bg-grad-main text-white text-[7px] font-mono leading-none font-bold uppercase z-10 animate-pulse">
                Most Popular
              </span>
              <div>
                <div className="flex items-center gap-1.5 flex-row">
                  <h4 className="text-xs font-bold text-[var(--txt)] uppercase tracking-wider">{t.benefits.passes.proTitle}</h4>
                  <Sparkles size={11} className="text-[var(--ac)] animate-pulse shrink-0" />
                </div>
                <div className="my-3 flex items-baseline gap-1">
                  <span className="text-2xl font-black font-display text-grad-main">{t.benefits.passes.proPrice}</span>
                  <span className="text-[10px] text-[var(--txt3)] font-semibold">/ month</span>
                </div>
                <p className="text-[10px] text-[var(--txt2)] mb-5 italic">{t.benefits.passes.proSub}</p>
                
                <ul className="space-y-2.5 text-[10px] text-[var(--txt2)] border-t border-[var(--bd)] pt-4 mb-6">
                  {t.benefits.passes.proFeatures.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-[var(--ac)] font-bold">✓</span>
                      <span className={i === 2 ? "font-bold text-[var(--txt)]" : ""}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={triggerSignUp}
                className="w-full py-2 rounded-xl bg-grad-main text-[10px] font-bold text-white transition-all cursor-pointer text-center font-sans tracking-wide"
              >
                {t.benefits.passes.getStarted}
              </button>
            </motion.div>

            {/* Team Pass Card */}
            <motion.div
              whileHover={{ y: -6, scale: 1.015, borderColor: "rgba(124, 111, 255, 0.2)" }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="p-6 rounded-2xl border border-[var(--bd)] bg-[var(--sur)] flex flex-col justify-between"
            >
              <div>
                <h4 className="text-xs font-bold text-[var(--txt2)] uppercase tracking-wider">{t.benefits.passes.teamTitle}</h4>
                <div className="my-3 flex items-baseline gap-1">
                  <span className="text-2xl font-black font-display text-[var(--txt)]">{t.benefits.passes.teamPrice}</span>
                  <span className="text-[10px] text-[var(--txt3)] font-semibold">/ month</span>
                </div>
                <p className="text-[10px] text-[var(--txt2)] mb-5 italic">{t.benefits.passes.teamSub}</p>
                
                <ul className="space-y-2.5 text-[10px] text-[var(--txt2)] border-t border-[var(--bd)] pt-4 mb-6">
                  {t.benefits.passes.teamFeatures.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-[var(--ac)] font-bold">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={triggerSignUp}
                className="w-full py-2 rounded-xl border border-[var(--bd2)] bg-[var(--sur2)] hover:bg-[var(--sur)] text-[10px] font-bold text-[var(--txt)] transition-all cursor-pointer text-center"
              >
                {t.benefits.passes.getStarted}
              </button>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ======================================================================
          FEATURES SECTION (id="features" Tab switcher)
          ====================================================================== */}
      <section id="features" className="py-20 bg-[var(--bg2)]/35 border-b border-[var(--bd)] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block text-[9px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3 text-[var(--cyan)] bg-[var(--cyan)]/10 animate-pulse">
              Interactive Blueprint
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-black leading-tight tracking-tight text-[var(--txt)]">
              {t.features.title}
            </h2>
            <p className="text-sm text-[var(--txt2)] mt-3 leading-relaxed font-semibold">
              {t.features.subtitle}
            </p>
          </div>

          {/* Tabs header selector pills layout */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 select-none">
            {[
              { id: "ai", label: t.features.tabs.ai },
              { id: "community", label: {
                  en: "Clans & Group Chats",
                  ru: "Кланы и Чат-Группы",
                  uz: "Klanlar va Guruhlar"
                }[lang] || "Clans & Chats"
              },
              { id: "fields", label: t.features.tabs.fields },
              { id: "lang", label: t.features.tabs.lang },
              { id: "access", label: t.features.tabs.access }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-bold border cursor-pointer transition-all ${
                  activeTab === tab.id
                    ? "bg-grad-main text-white border-transparent shadow shadow-[var(--ac)]/15"
                    : "bg-[var(--sur)] text-[var(--txt2)] border-[var(--bd)] hover:border-[var(--bd2)] hover:text-[var(--txt)]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tabs Body Contents with AnimatePresence transition */}
          <div className="min-h-[380px]">
            <AnimatePresence mode="wait">
              
              {/* TAB 1: AI TUTOR MESSAGE PREVIEW BOARD */}
              {activeTab === "ai" && (
                <motion.div
                  key="ai-tab"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                >
                  <div className="space-y-5">
                    <h3 className="text-lg md:text-xl font-display font-black leading-tight text-[var(--txt)]">
                      {t.features.ai.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-[var(--txt2)] font-semibold">
                      {t.features.ai.desc}
                    </p>
                    <ul className="space-y-3 pt-2 text-xs text-[var(--txt2)] font-semibold">
                      {[
                        t.features.ai.bullet1,
                        t.features.ai.bullet2,
                        t.features.ai.bullet3,
                        t.features.ai.bullet4,
                      ].map((bullet, i) => (
                        <li key={i} className="flex items-center gap-3 flex-row">
                          <CheckCircle size={14} className="text-[var(--ac)] shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Chat simulated console - Interactive loop */}
                  <div className="w-full">
                    <AIChatSimulator />
                  </div>
                </motion.div>
              )}

              {/* TAB 2: ALL FIELDS 24-GRID DISCIPLINE DECK */}
              {activeTab === "fields" && (
                <motion.div
                  key="fields-tab"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {domainKeys.map((domain, i) => {
                      // Lookup translated string from i18n
                      const keySuffix = `${lang}_${domain.key}`;
                      const domainName = t.features.fields.domains[keySuffix] || domain.key;
                      
                      return (
                        <motion.div
                          key={i}
                          whileHover={{
                            scale: 1.03,
                            y: -4,
                            borderColor: "var(--ac)",
                            boxShadow: "0 10px 20px -10px rgba(124, 111, 255, 0.2)"
                          }}
                          transition={{ type: "spring", stiffness: 350, damping: 25 }}
                          className="p-3 rounded-xl border border-[var(--bd)] bg-[var(--sur)] flex flex-col justify-between h-[80px] cursor-pointer"
                        >
                          <domain.icon size={18} className="text-[var(--ac)] shrink-0" />
                          <div>
                            <h4 className="text-[10px] font-bold text-[var(--txt)] leading-tight line-clamp-1">
                              {domainName}
                            </h4>
                            <p className="text-[8px] text-[var(--txt3)] font-mono leading-none mt-1 font-bold uppercase tracking-wider">
                              {t.features.fields.count}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* TAB 3: LANGUAGES PHASE MATRIX MAP ROUTE */}
              {activeTab === "lang" && (
                <motion.div
                  key="lang-tab"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                >
                  <div className="space-y-6">
                    <h3 className="text-lg md:text-xl font-display font-black leading-tight text-[var(--txt)]">
                      {t.features.lang.title}
                    </h3>
                    
                    {/* Phase 1 */}
                    <div className="p-4 rounded-xl border border-[var(--green)]/20 bg-[var(--green)]/5">
                      <span className="text-[8px] font-mono leading-none font-bold text-white bg-[var(--green)] px-2 py-0.5 rounded uppercase select-none">
                        {t.features.lang.p1Title}
                      </span>
                      <p className="text-[11px] leading-relaxed text-[var(--txt2)] mt-2 font-semibold">
                        {t.features.lang.p1Desc}
                      </p>
                    </div>

                    {/* Phase 2 */}
                    <div className="p-4 rounded-xl border border-[var(--bd)] bg-[var(--sur2)]">
                      <span className="text-[8px] font-mono leading-none font-bold text-white bg-[var(--ac)] px-2 py-0.5 rounded uppercase select-none">
                        {t.features.lang.p2Title}
                      </span>
                      <p className="text-[11px] leading-relaxed text-[var(--txt2)] mt-2 font-semibold">
                        {t.features.lang.p2Desc}
                      </p>
                    </div>
                  </div>

                  {/* Right side representation target map */}
                  <div className="p-6 rounded-2xl border border-[var(--bd)] bg-[var(--sur)] space-y-5 flex flex-col justify-between h-[300px]">
                    <div>
                      <h4 className="text-[10px] font-mono font-bold tracking-wider uppercase text-[var(--txt3)] select-none">
                        {t.features.lang.statTitle}
                      </h4>
                      <span className="text-4xl font-display font-black text-grad-full block py-2">
                        142
                      </span>
                    </div>

                    {/* Roadmap bars */}
                    <div className="space-y-3">
                      <h5 className="text-[9px] font-mono font-bold text-[var(--txt3)] uppercase tracking-wider select-none">
                        {t.features.lang.roadmapTitle}
                      </h5>
                      <div className="space-y-2">
                        {/* 2025: 3 */}
                        <div className="space-y-1">
                          <div className="flex justify-between text-[8px] font-mono text-[var(--txt2)] font-bold">
                            <span>2025</span>
                            <span>3 Languages (Live)</span>
                          </div>
                          <div className="h-1.5 bg-[var(--sur2)] rounded-full overflow-hidden">
                            <div className="h-full bg-[var(--green)] w-[5%] rounded-full" />
                          </div>
                        </div>

                        {/* 2026: ~20 */}
                        <div className="space-y-1">
                          <div className="flex justify-between text-[8px] font-mono text-[var(--txt2)] font-bold">
                            <span>2026</span>
                            <span>~20 Languages (Systemic)</span>
                          </div>
                          <div className="h-1.5 bg-[var(--sur2)] rounded-full overflow-hidden">
                            <div className="h-full bg-[var(--ac)] w-[30%] rounded-full" />
                          </div>
                        </div>

                        {/* 2027: 142 */}
                        <div className="space-y-1">
                          <div className="flex justify-between text-[8px] font-mono text-[var(--txt2)] font-bold">
                            <span>2027</span>
                            <span>142 Languages (Universal)</span>
                          </div>
                          <div className="h-1.5 bg-[var(--sur2)] rounded-full overflow-hidden">
                            <div className="h-full bg-grad-full w-full rounded-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 4: ACCESSIBILITY & ARCHITECTURE */}
              {activeTab === "access" && (
                <motion.div
                  key="access-tab"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                  {[
                    { title: t.features.access.c1Title, desc: t.features.access.c1Desc },
                    { title: t.features.access.c2Title, desc: t.features.access.c2Desc },
                    { title: t.features.access.c3Title, desc: t.features.access.c3Desc },
                    { title: t.features.access.c4Title, desc: t.features.access.c4Desc },
                    { title: t.features.access.c5Title, desc: t.features.access.c5Desc },
                    { title: t.features.access.c6Title, desc: t.features.access.c6Desc },
                  ].map((card, i) => (
                    <div key={i} className="p-5 rounded-xl border border-[var(--bd)] bg-[var(--sur)] flex items-start gap-3 flex-row hover:border-[var(--bd2)] transition-all">
                      <CheckCircle className="text-[var(--ac)] shrink-0 mt-0.5" size={14} />
                      <div className="space-y-1">
                        <h4 className="text-xs font-bold text-[var(--txt)]">{card.title}</h4>
                        <p className="text-[10px] text-[var(--txt2)] leading-relaxed font-semibold">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {/* TAB 5: GAMIFIED STUDENT CLANS & CHATS COOPERATIVE PLAYGROUND */}
              {activeTab === "community" && (
                <CommunityTab setLiveToast={setLiveToast} setActiveTab={setActiveTab} />
              )}

            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* ======================================================================
          PRICING SECTION (id="pricing")
          ====================================================================== */}
      <section id="pricing" className="py-20 bg-[var(--bg)] border-b border-[var(--bd)] scroll-mt-20 animate-fadeIn">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10 animate-fadeIn">
            <span className="inline-block text-[9px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3 text-[var(--ac)] bg-[var(--ac)]/10 animate-pulse">
              {t.checkout.pricingBadge}
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-black leading-tight tracking-tight text-[var(--txt)]">
              {t.checkout.pricingTitle}
            </h2>
            <p className="text-sm text-[var(--txt2)] mt-3 leading-relaxed font-semibold">
              {t.checkout.pricingSubtitle}
            </p>
          </div>

          {/* Interactive Billing Toggle */}
          <div className="flex justify-center items-center gap-3.5 mb-12 select-none flex-row">
            <span className={`text-xs font-bold transition-colors ${billingCycle === "monthly" ? "text-[var(--ac)]" : "text-[var(--txt3)]"}`}>
              {t.checkout.monthly}
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "annually" : "monthly")}
              className="w-12 h-6 rounded-full bg-[var(--sur2)] border border-[var(--bd)] relative flex items-center transition-all px-0.5 cursor-pointer"
              type="button"
            >
              <div className={`w-5 h-5 rounded-full bg-[var(--ac)] transition-transform ${billingCycle === "annually" ? "translate-x-6" : ""}`} />
            </button>
            <span className={`text-xs font-bold transition-colors flex items-center gap-1.5 flex-row ${billingCycle === "annually" ? "text-[var(--ac)]" : "text-[var(--txt3)]"}`}>
              <span>{t.checkout.annually}</span>
              <span className="px-1.5 py-0.5 rounded text-[8px] font-mono text-white bg-emerald-500 font-bold uppercase tracking-wider shrink-0 animate-bounce">
                20% OFF
              </span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-10 animate-fadeIn">
            
            {/* Free Learner tier card */}
            <motion.div
              whileHover={{ y: -6, scale: 1.015, borderColor: "rgba(124, 111, 255, 0.2)" }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="p-5 rounded-2xl border border-[var(--bd)] bg-[var(--sur)] flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[9px] font-mono uppercase bg-[var(--sur2)] border border-[var(--bd)] px-2 py-0.5 rounded font-black text-[var(--txt3)]">
                    Free Tier
                  </span>
                </div>
                <h3 className="text-sm font-bold font-display text-[var(--txt)]">{t.pricing.c1Title}</h3>
                <div className="my-3 flex items-baseline gap-1">
                  <span className="text-2xl font-black font-display text-[var(--txt)]">$0</span>
                  <span className="text-xs text-[var(--txt3)] font-bold">/ {t.checkout.forever}</span>
                </div>
                <p className="text-[10px] text-[var(--txt2)] mb-5 font-semibold leading-normal">
                  {t.checkout.freeTierDesc}
                </p>

                <ul className="space-y-3 text-[10px] text-[var(--txt2)] border-t border-[var(--bd)] pt-4 mb-6 font-semibold">
                  {t.pricing.c1Features.map((feat, fidx) => (
                    <li key={fidx} className="flex items-center gap-2 animate-fade-in flex-row">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                  <li className="flex items-center gap-2 text-[var(--txt3)] border-t border-[var(--bd)]/30 pt-2 mt-2 flex-row">
                    <span className="font-bold">✗</span>
                    <span className="line-through">
                      {lang === "uz" ? "Maxsus interaktiv dasturlash qum qutilari" : lang === "ru" ? "Интерактивные песочницы для кодинга" : "Custom interactive sandbox playgrounds"}
                    </span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => {
                  setSelectedUpgradePlan("Free Standard");
                }}
                className="w-full py-2 rounded-xl bg-[var(--sur2)] hover:bg-[var(--sur)] border border-[var(--bd2)] text-[10px] font-black uppercase text-[var(--txt)] transition-all cursor-pointer text-center font-bold"
                type="button"
              >
                {t.checkout.activePlan}
              </button>
            </motion.div>

            {/* AI Learner Pro tier card */}
            <motion.div
              whileHover={{ y: -6, scale: 1.02, boxShadow: "0 10px 25px rgba(124, 111, 255, 0.25)" }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="p-5 rounded-2xl border border-[var(--ac)] bg-[var(--sur)] flex flex-col justify-between relative"
            >
              <div className="absolute -top-3 right-4 px-2 py-0.5 rounded bg-grad-main text-white text-[7.5px] font-black uppercase tracking-wider font-mono z-10 animate-pulse select-none">
                Best Booster
              </div>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[9px] font-mono uppercase bg-[var(--ac)]/10 text-[var(--ac)] px-2 py-0.5 rounded font-black">
                    AI Premium
                  </span>
                </div>
                <h3 className="text-sm font-bold font-display text-[var(--txt)]">AI Learner</h3>
                <div className="my-3 flex items-baseline gap-1">
                  <span className="text-2xl font-black font-display text-[var(--ac)]">
                    {billingCycle === "monthly" ? "$5.99" : "$4.49"}
                  </span>
                  <span className="text-xs text-[var(--txt3)] font-bold font-mono">/ mo</span>
                </div>
                <p className="text-[10px] text-[var(--txt2)] mb-5 font-semibold leading-normal animate-fade-in">
                  {lang === "uz" ? "Katta mantiqiy sun'iy intellekt modellariga kirish va kuniga 300 ta so'rov." : lang === "ru" ? "Доступ к продвинутым ИИ-моделям глубокого рассуждения и 300 запросов в день." : "Unlock advanced reasoning AI models with 300 requests/day for hyper-speed study."}
                </p>

                <ul className="space-y-3 text-[10px] text-[var(--txt2)] border-t border-[var(--bd)] pt-4 mb-6 font-semibold">
                  <li className="flex items-center gap-2 flex-row">
                    <span className="text-[var(--ac)] font-bold">✓</span>
                    <span className="font-bold text-[var(--txt)]">
                      {lang === "uz" ? "Kuniga 300 ta AI so'rovi" : lang === "ru" ? "300 ИИ-запросов в сутки" : "300 AI requests/day"}
                    </span>
                  </li>
                  <li className="flex items-center gap-2 flex-row">
                    <span className="text-[var(--ac)] font-bold">✓</span>
                    <span>
                      {lang === "uz" ? "Ilg'or fikrlovchi AI modellar" : lang === "ru" ? "Продвинутые модели рассуждения" : "Advanced reasoning AI models"}
                    </span>
                  </li>
                  <li className="flex items-center gap-2 flex-row">
                    <span className="text-[var(--ac)] font-bold">✓</span>
                    <span>
                      {lang === "uz" ? "Audio darslik va amaliy testlar" : lang === "ru" ? "Аудио лекции и практические тесты" : "Audio voiceover & practice quizzes"}
                    </span>
                  </li>
                  <li className="flex items-center gap-2 flex-row">
                    <span className="text-[var(--ac)] font-bold">✓</span>
                    <span>
                      {lang === "uz" ? "Supporter profil belgisi" : lang === "ru" ? "Значок Supporter в профиле" : "Exclusive Supporter profile badge"}
                    </span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => setSelectedUpgradePlan("AI Learner Pro")}
                className="w-full py-2 rounded-xl bg-grad-main text-[10px] font-black uppercase text-white transition-all cursor-pointer shadow-sm text-center font-bold"
                type="button"
              >
                {lang === "en" ? "Upgrade Now" : "Активировать"}
              </button>
            </motion.div>

            {/* Creator & Teacher Studio Pro */}
            <motion.div
              whileHover={{ y: -6, scale: 1.015, borderColor: "rgba(124, 111, 255, 0.2)" }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="p-5 rounded-2xl border border-[var(--bd)] bg-[var(--sur)] flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[9px] font-mono uppercase bg-[var(--sur2)] border border-[var(--bd)] px-2 py-0.5 rounded font-black text-[var(--txt3)]">
                    Educator
                  </span>
                </div>
                <h3 className="text-sm font-bold font-display text-[var(--txt)]">{t.pricing.c2Title}</h3>
                <div className="my-3 flex items-baseline gap-1">
                  <span className="text-2xl font-black font-display text-[var(--txt)]">
                    {billingCycle === "monthly" ? "$15.00" : "$11.25"}
                  </span>
                  <span className="text-xs text-[var(--txt3)] font-bold font-mono">/ mo</span>
                </div>
                <p className="text-[10px] text-[var(--txt2)] mb-5 font-semibold leading-normal">
                  {lang === "uz" ? "Mualliflar uchun 500 ta kunlik AI so'rovi va darslarni mukammal boshqarish." : lang === "ru" ? "500 ИИ-запросов в сутки, генерация учебных планов и глубокая аналитика." : "Publish paid courses with 90% revenue share, 500 daily requests, and analytical dashboards."}
                </p>

                <ul className="space-y-3 text-[10px] text-[var(--txt2)] border-t border-[var(--bd)] pt-4 mb-6 font-semibold">
                  {t.pricing.c2Features.map((feat, fidx) => (
                    <li key={fidx} className="flex items-center gap-2 animate-fade-in flex-row">
                      <span className="text-[var(--ac)] font-bold">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => setSelectedUpgradePlan("Creator & Teacher")}
                className="w-full py-2 rounded-xl bg-[var(--sur2)] hover:bg-[var(--sur)] border border-[var(--bd2)] text-[10px] font-black uppercase text-[var(--txt)] transition-all cursor-pointer text-center font-bold"
                type="button"
              >
                {lang === "en" ? "Publish Pro" : "Запустить Студию"}
              </button>
            </motion.div>

            {/* Elite Pass card */}
            <motion.div
              whileHover={{ y: -6, scale: 1.015, borderColor: "rgba(124, 111, 255, 0.2)" }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="p-5 rounded-2xl border border-[var(--ac2)] bg-[var(--sur)] flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 h-12 w-12 bg-indigo-500/10 rounded-bl-full border-b border-l border-indigo-500/35 pointer-events-none flex items-center justify-center">
                <span className="text-[9px] translate-x-1.5 -translate-y-1.5 rotate-45 font-black text-indigo-400 select-none">AETHER</span>
              </div>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[9px] font-mono uppercase bg-indigo-500/15 border border-indigo-500/30 px-2 py-0.5 rounded font-black text-indigo-400 select-none">
                    Aether Pass
                  </span>
                </div>
                <h3 className="text-sm font-bold font-display text-grad-main">Aether Pass</h3>
                <div className="my-3 flex items-baseline gap-1">
                  <span className="text-2xl font-black font-display text-[var(--txt)]">
                    {billingCycle === "monthly" ? "$43.00" : "$32.25"}
                  </span>
                  <span className="text-xs text-[var(--txt3)] font-bold font-mono">/ mo</span>
                </div>
                <p className="text-[10px] text-[var(--txt2)] mb-5 font-semibold leading-normal animate-fade-in">
                  {lang === "uz" ? "Aether Pass — qat'iyan 1,000 AI so'rovi, darslarga 20% chegirma (Aqlli Hamkorlik modeli), klan tajribasi va neon hoshiyalar!" : lang === "ru" ? "Aether Pass — строго 1,000 ИИ-запросов, скидка 20% на курсы-участники (Партнерская модель), буст клана и неоновые рамки!" : "Strictly 1,000 requests/day, flat 20% participating course discount (Smart Partnership Model), clan XP boost, and dynamic animated profiles."}
                </p>

                <ul className="space-y-3 text-[10px] text-[var(--txt2)] border-t border-[var(--bd)] pt-4 mb-6 font-semibold">
                  <li className="flex items-center gap-2 flex-row">
                    <span className="text-indigo-500 font-bold">✓</span>
                    <span className="font-bold text-[var(--txt)]">
                      {lang === "uz" ? "Qat'iyan kuniga 1,000 AI so'rovi & 24/7 tezkor xizmat (FUP)" : lang === "ru" ? "Строго 1,000 ИИ-запросов/день + поддержка 24/7 (FUP)" : "Strictly 1,000 AI requests/day & 24/7 Priority Live AI (FUP)"}
                    </span>
                  </li>
                  <li className="flex items-center gap-2 flex-row">
                    <span className="text-indigo-500 font-bold">✓</span>
                    <span>
                      {lang === "uz" ? "Kurslarga 20% chegirma (Aqlli Hamkorlik: platforma 0% fee)" : lang === "ru" ? "Скидка 20% на курсы-участники (Партнерская модель)" : "Flat 20% Course Discount (Smart Partnership: 0% Platform fee)"}
                    </span>
                  </li>
                  <li className="flex items-center gap-2 flex-row">
                    <span className="text-indigo-500 font-bold">✓</span>
                    <span>
                      {lang === "uz" ? "+15% XP klan tajribasi multiplier ko'paytirgichi (max 12)" : lang === "ru" ? "+15% умножитель опыта клана для всего отряда из 12 человек" : "+15% Clan XP Boost multiplier for the entire 12-person squad"}
                    </span>
                  </li>
                  <li className="flex items-center gap-2 flex-row">
                    <span className="text-indigo-500 font-bold">✓</span>
                    <span>
                      {lang === "uz" ? "Yo'nalishga moslanuvchi ramkalar, golografik statuslar, porlovchi nik" : lang === "ru" ? "Рамки аватара, хромовые ники, голографические значки & темы" : "Dynamic science-reactive borders, chrome glows & status badges"}
                    </span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => {
                  setSelectedUpgradePlan("Aether Pass");
                  setIsPremiumUser(true);
                }}
                className="w-full py-2 rounded-xl bg-grad-main text-[10px] font-black uppercase text-white transition-all cursor-pointer text-center font-bold"
                type="button"
              >
                {lang === "uz" ? "Aether Pass Olish" : lang === "ru" ? "Активировать Aether Pass" : "Acquire Aether Pass"}
              </button>
            </motion.div>

          </div>

          {/* Pricing Bottom Notice container */}
          <div className="max-w-2xl mx-auto p-4 rounded-xl border border-[var(--bd)] bg-[var(--sur)] flex items-start gap-2.5 text-[10px] leading-relaxed select-none mb-14 flex-row">
            <Sparkles className="text-amber-500 shrink-0 mt-0.5 animate-pulse" size={12} />
            <p className="text-[var(--txt2)] font-semibold">
              We charge 0% on free education pathways. MindSphere Premium supports host bandwidth, localized translation modules, and unhindered server hosting fees.
            </p>
          </div>

          {/* ======================================================================
              INTERACTIVE DISCORD NITRO CUSTOMIZER PLAYGROUND (Requested)
              ====================================================================== */}
          <div className="max-w-4xl mx-auto rounded-3xl border border-indigo-500/20 bg-gradient-to-r from-indigo-950/15 to-purple-950/15 p-6 backdrop-blur-sm shadow-xl select-none relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 pointer-events-none opacity-10">
              <span className="text-9xl font-display font-black tracking-normal">NITRO</span>
            </div>

            <ProfileCustomizer />

          </div>

        </div>
      </section>

      {/* ======================================================================
          GUIDE SECTION (id="guide")
          ====================================================================== */}
      <section id="guide" className="py-20 bg-[var(--bg2)]/35 border-b border-[var(--bd)] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 animate-fadeIn">
            <span className="inline-block text-[9px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3 text-[var(--green)] bg-[var(--green)]/10 animate-pulse">
              User Path Step
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-black leading-tight tracking-tight text-[var(--txt)]">
              {t.guide.title}
            </h2>
            <p className="text-sm text-[var(--txt2)] mt-3 leading-relaxed font-semibold">
              {t.guide.subtitle}
            </p>
          </div>

          {/* 3 Steps List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mb-16 animate-fadeIn">
            
            {/* Step 1 */}
            <div className="space-y-4">
              <span className="text-4xl font-display font-black text-grad-main leading-none block">
                {t.guide.step1}
              </span>
              <h3 className="text-base font-bold font-sans text-[var(--txt)]">
                {t.guide.step1Title}
              </h3>
              <p className="text-xs text-[var(--txt2)] leading-relaxed font-semibold">
                {t.guide.step1Desc}
              </p>
            </div>

            {/* Step 2 */}
            <div className="space-y-4">
              <span className="text-4xl font-display font-black text-grad-main leading-none block">
                {t.guide.step2}
              </span>
              <h3 className="text-base font-bold font-sans text-[var(--txt)]">
                {t.guide.step2Title}
              </h3>
              <p className="text-xs text-[var(--txt2)] leading-relaxed font-semibold">
                {t.guide.step2Desc}
              </p>
            </div>

            {/* Step 3 */}
            <div className="space-y-4">
              <span className="text-4xl font-display font-black text-grad-main leading-none block">
                {t.guide.step3}
              </span>
              <h3 className="text-base font-bold font-sans text-[var(--txt)]">
                {t.guide.step3Title}
              </h3>
              <p className="text-xs text-[var(--txt2)] leading-relaxed font-semibold">
                {t.guide.step3Desc}
              </p>
            </div>

          </div>

          {/* Ecosystem Explainer Cards (Contrasting Org vs Com parameters) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto animate-fadeIn">
            
            {/* Org Guide Portal */}
            <div className="p-6 rounded-2xl border border-[var(--bd)] bg-[var(--sur)] flex flex-col justify-between h-[160px]">
              <div>
                <h4 className="font-display font-bold text-sm tracking-tight text-[var(--txt)]">
                  {t.guide.portalTitle}
                </h4>
                <p className="text-[10px] text-[var(--txt2)] leading-relaxed mt-2 font-semibold">
                  {t.guide.portalDesc}
                </p>
              </div>
              <span className="text-[9px] font-mono leading-none font-bold text-[var(--ac2)] select-none">
                Active State
              </span>
            </div>

            {/* Com actual LMS console launcher trigger */}
            <div className="p-6 rounded-2xl border border-[var(--ac)] bg-[var(--sur)] flex flex-col justify-between h-[160px] shadow-glow">
              <div>
                <h4 className="font-display font-bold text-sm tracking-tight text-[var(--txt)]">
                  {t.guide.lmsTitle}
                </h4>
                <p className="text-[10px] text-[var(--txt2)] leading-relaxed mt-2 font-semibold">
                  {t.guide.lmsDesc}
                </p>
              </div>
              
              <button
                onClick={launchLMS}
                className="w-full mt-4 py-2 font-bold text-[10px] bg-grad-green text-white rounded-xl shadow active:scale-[0.98] transition-all flex items-center justify-center gap-1 cursor-pointer"
                type="button"
              >
                {t.guide.visit}
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================================
          FAQ SECTION (id="faq")
          ====================================================================== */}
      <FaqSection />

      {/* ======================================================================
          CTA SECTION (Large display segment with space-orbs)
          ====================================================================== */}
      <section className="relative py-24 overflow-hidden border-b border-[var(--bd)] flex flex-col items-center justify-center text-center animate-fadeIn scroll-mt-20">
        {/* Soft atmospheric orbs behind the CTA container */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full bg-[var(--ac)]/15 blur-[110px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-[200px] h-[200px] rounded-full bg-[var(--cyan)]/8 blur-[90px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10 w-full space-y-6">
          <h2 className="font-display font-black leading-[1.1] text-center" style={{ fontSize: "clamp(1.8rem, 4vw, 2.9rem)" }}>
            <span>{t.cta.titleMain} </span>
            <span className="text-grad-full py-1 leading-normal">{t.cta.titleGrad}</span>
          </h2>
          
          <p className="text-xs md:text-sm text-[var(--txt2)] max-w-lg mx-auto leading-relaxed font-semibold">
            {t.cta.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-4">
            <button
              onClick={triggerSignUp}
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-grad-main text-white font-bold text-xs shadow-lg shadow-[var(--ac)]/15 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-1"
              type="button"
            >
              {t.cta.btnCreate}
            </button>
            <button
              onClick={launchLMS}
              className="w-full sm:w-auto px-8 py-3 rounded-full border border-[var(--bd2)] bg-[var(--sur2)] hover:bg-[var(--sur)] hover:border-[var(--ac)] text-[var(--txt)] font-bold text-xs active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-1"
              type="button"
            >
              {t.cta.btnPlatform}
            </button>
          </div>

          <p className="text-[9px] font-mono font-bold tracking-tight text-[var(--txt3)] pt-2 uppercase select-none">
            {t.cta.bullettext}
          </p>
        </div>
      </section>

      {/* Real-time Broadcast Toast Notification Popups */}
      <AnimatePresence>
        {liveToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 max-w-sm bg-[var(--sur)] border-2 border-[var(--ac)] rounded-2xl p-4 shadow-2xl flex gap-3 items-start cursor-pointer hover:border-[var(--ac)]/80 flex-row animate-fadeIn"
            onClick={() => {
              // Open the community chat tab when clicking on the toast!
              setActiveTab("community");
              setLiveToast(null);
            }}
          >
            <MessageSquare className="text-[var(--ac)] shrink-0 mt-0.5" size={18} />
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between flex-row">
                <span className="text-[9px] font-mono font-black uppercase text-[var(--ac)] tracking-wider">
                  New in {liveToast.channel}
                </span>
                <span className="text-[8px] font-mono text-[var(--txt3)]">just now</span>
              </div>
              <h4 className="text-xs font-bold text-[var(--txt)]">{liveToast.sender}</h4>
              <p className="text-[10px] text-[var(--txt2)] line-clamp-2 leading-relaxed">{liveToast.text}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive premium subscription checkout simulator modal */}
      <AnimatePresence>
        {selectedUpgradePlan && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          >
            <motion.div
              initial={{ scale: 0.94, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 20 }}
              className="w-full max-w-md bg-[var(--sur)] border border-[var(--bd)] rounded-3xl p-6 relative overflow-hidden shadow-2xl text-left"
            >
              {/* Decorative top border */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-grad-main" />

              <button
                onClick={() => setSelectedUpgradePlan(null)}
                className="absolute top-4 right-4 text-[var(--txt3)] hover:text-[var(--txt)] transition-colors cursor-pointer text-sm font-bold font-mono p-1 rounded-full hover:bg-[var(--sur2)]"
                type="button"
              >
                ✕
              </button>

              <div className="space-y-4 pt-1 text-left">
                <div className="flex items-center gap-2 flex-row">
                  <div>
                    <h3 className="text-base font-black font-display text-[var(--txt)]">
                      {t.checkout.subscribeTo} {selectedUpgradePlan}
                    </h3>
                    <p className="text-[9px] text-[var(--txt3)] uppercase tracking-widest font-mono select-none">
                      {t.checkout.checkoutGateway}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-[var(--txt2)] leading-relaxed">
                  {t.checkout.description
                    .replace("{tier}", selectedUpgradePlan || "")
                    .replace("{cycle}", billingCycle === "monthly" ? t.checkout.monthly : t.checkout.annually)
                  }
                </p>

                <div className="bg-[var(--sur2)]/60 border border-[var(--bd)]/60 rounded-2xl p-4 space-y-3">
                  <div className="flex justify-between text-xs flex-row">
                    <span className="text-[var(--txt2)] font-semibold">{t.checkout.selectedTier}</span>
                    <span className="font-bold text-[var(--txt)]">{selectedUpgradePlan}</span>
                  </div>
                  <div className="flex justify-between text-xs flex-row">
                    <span className="text-[var(--txt2)] font-semibold">{t.checkout.billingFrequency}</span>
                    <span className="font-bold capitalize text-[var(--ac)]">
                      {billingCycle === "monthly" ? t.checkout.monthly : t.checkout.annually}
                    </span>
                  </div>
                  <div className="border-t border-[var(--bd)]/40 my-2 pt-2 flex justify-between text-xs text-[var(--txt)] font-black flex-row">
                    <span>{t.checkout.dueNow}</span>
                    <span>
                      {selectedUpgradePlan?.includes("Free")
                        ? "$0.00"
                        : selectedUpgradePlan?.includes("AI")
                        ? billingCycle === "monthly" ? "$5.99" : "$53.88 / " + (lang === "uz" ? "yil" : lang === "ru" ? "год" : "year")
                        : selectedUpgradePlan?.includes("Creator")
                        ? billingCycle === "monthly" ? "$15.00" : "$135.00 / " + (lang === "uz" ? "yil" : lang === "ru" ? "год" : "year")
                        : billingCycle === "monthly" ? "$43.00" : "$387.00 / " + (lang === "uz" ? "yil" : lang === "ru" ? "год" : "year")
                      }
                    </span>
                  </div>
                </div>

                {/* Card Details Input form */}
                <div className="space-y-2 text-left">
                  <label className="text-[10px] font-mono text-[var(--txt3)] uppercase tracking-wider font-bold select-none">{t.checkout.paymentDetails}</label>
                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder={t.checkout.cardholderName}
                      className="w-full bg-[var(--sur2)]/60 border border-[var(--bd)] rounded-xl px-3 py-2 text-xs text-[var(--txt)] focus:outline-none focus:border-[var(--ac)] font-sans"
                    />
                    <div className="grid grid-cols-3 gap-2">
                      <input
                        type="text"
                        maxLength={19}
                        placeholder={t.checkout.cardNumber}
                        className="col-span-2 bg-[var(--sur2)]/60 border border-[var(--bd)] rounded-xl px-3 py-2 text-xs text-[var(--txt)] focus:outline-none focus:border-[var(--ac)] font-mono"
                      />
                      <input
                        type="text"
                        maxLength={5}
                        placeholder={t.checkout.expiryDate}
                        className="bg-[var(--sur2)]/60 border border-[var(--bd)] rounded-xl px-3 py-2 text-xs text-[var(--txt)] text-center focus:outline-none focus:border-[var(--ac)] font-mono"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 pt-2 flex-row">
                  <button
                    onClick={() => setSelectedUpgradePlan(null)}
                    className="flex-1 py-2.5 rounded-xl border border-[var(--bd)] text-xs text-[var(--txt2)] hover:bg-[var(--sur2)] cursor-pointer font-black uppercase text-center"
                    type="button"
                  >
                    {t.checkout.btnCancel}
                  </button>
                  <button
                    onClick={() => {
                      setIsPremiumUser(true);
                      setSelectedUpgradePlan(null);
                      setLiveToast({
                        sender: t.checkout.toastSender,
                        channel: "billing",
                        text: t.checkout.successToast
                      });
                      setTimeout(() => {
                        setLiveToast(null);
                      }, 5000);
                    }}
                    className="flex-1 py-2.5 rounded-xl bg-grad-main text-white text-xs font-black uppercase shadow-lg shadow-[var(--ac)]/25 hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer text-center"
                    type="button"
                  >
                    {t.checkout.btnConfirm}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
