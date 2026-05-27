/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Play, Sparkles, BookOpen, Clock, Heart, Award, Shield, Cpu, Flame, Leaf, Scale, Paintbrush, Ruler, Briefcase, Music, Unlock } from "lucide-react";
import { useApp } from "./AppProvider";

export const Hero: React.FC = () => {
  const { t, setIsAuthOpen, setAuthTab } = useApp();

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

  // Mock course representations for the platform preview
  const previewCourses = [
    { name: t.hero.mockup.domains.biology, hours: "34h", prog: 78, color: "var(--green)", bg: "rgba(0,229,160,0.1)", icon: Leaf },
    { name: t.hero.mockup.domains.law, hours: "48h", prog: 45, color: "var(--ac)", bg: "rgba(124,111,255,0.1)", icon: Scale },
    { name: t.hero.mockup.domains.fineArts, hours: "21h", prog: 92, color: "var(--amber)", bg: "rgba(255,179,71,0.1)", icon: Paintbrush },
    { name: t.hero.mockup.domains.math, hours: "60h", prog: 12, color: "var(--cyan)", bg: "rgba(0,212,255,0.1)", icon: Ruler },
    { name: t.hero.mockup.domains.business, hours: "40h", prog: 60, color: "var(--rose)", bg: "rgba(255,107,138,0.1)", icon: Briefcase },
    { name: t.hero.mockup.domains.music, hours: "15h", prog: 85, color: "var(--ac2)", bg: "rgba(196,184,255,0.1)", icon: Music },
  ];

  return (
    <section className="relative min-h-screen pt-[110px] pb-16 overflow-hidden flex flex-col items-center justify-center">
      {/* Three Ambient Soft-Glow Gradients behind everything */}
      <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] rounded-full bg-[var(--ac)]/15 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-[350px] h-[350px] rounded-full bg-[var(--cyan)]/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[280px] h-[280px] rounded-full bg-[var(--green)]/10 blur-[85px] pointer-events-none" />

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
                className="w-7 h-7 rounded-full border-1 border-[var(--bg)] object-cover bg-neutral-800"
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
                <div className="h-4 w-20 bg-grad-main rounded-md opacity-25" />
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
            <main className="flex-1 p-5 md:p-6 overflow-y-auto space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-mono text-[var(--txt3)] uppercase tracking-wider font-extrabold">
                    {t.hero.mockup.explore}
                  </h3>
                  <h2 className="text-base font-bold font-display leading-tight">{t.hero.mockup.myCourses}</h2>
                </div>
                <div className="flex gap-2">
                  <span className="h-6 w-16 bg-[var(--sur)] rounded-md border border-[var(--bd)] block" />
                  <span className="h-6 w-16 bg-[var(--sur)] rounded-md border border-[var(--bd)] block" />
                </div>
              </div>

              {/* 6 Subject paths preview grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {previewCourses.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl border border-[var(--bd)] bg-[var(--sur)] hover:border-[var(--bd2)] transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <Icon size={14} style={{ color: c.color }} />
                          <span className="text-[8px] font-mono px-1.5 py-0.5 rounded text-[var(--txt2)] bg-[var(--sur2)]">
                            {c.hours}
                          </span>
                        </div>
                      <h4 className="text-xs font-bold font-sans text-[var(--txt)] line-clamp-1 mb-3">
                        {c.name}
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
                  </div>
                );
                })}
              </div>
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
    </section>
  );
};
