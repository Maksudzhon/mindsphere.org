/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { BookOpen, Users, Compass, Code, Landmark, Award, ArrowUpRight, MessageSquare, Mail, Github } from "lucide-react";
import { useApp } from "./AppProvider";
import { SectionHeader } from "./Sections";

export const About: React.FC = () => {
  const { t } = useApp();

  return (
    <section id="about" className="w-full py-16 scroll-mt-20 border-t border-[var(--bd)] relative overflow-hidden bg-[var(--bg)]">
      {/* Background Soft atmospheric light orbs */}
      <div className="absolute top-[15%] left-[10%] w-[320px] h-[320px] rounded-full bg-[var(--ac)]/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-[var(--cyan)]/8 blur-[110px] pointer-events-none" />

      {/* Grid Pattern mask overlay */}
      <div className="absolute inset-0 dot-grid opacity-30 [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10 space-y-20">
        
        {/* About Hero Header */}
        <section className="text-center space-y-4 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-[9px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-[var(--ac)]/15 text-[var(--ac2)]">
              Our Identity
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-black leading-tight tracking-tight text-grad-full"
          >
            {t.about.heroTitle}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs md:text-sm text-[var(--txt2)] font-medium leading-relaxed max-w-xl mx-auto"
          >
            {t.about.heroSubtitle}
          </motion.p>
        </section>

        {/* Co-Mission section inside display panel */}
        <section className="p-6 md:p-8 rounded-2xl border border-[var(--ac)] bg-[var(--sur)] text-center shadow-glow max-w-4xl mx-auto">
          <h2 className="text-base font-bold font-display uppercase tracking-wider text-[var(--ac2)] mb-3">
            {t.about.missionTitle}
          </h2>
          <p className="font-display font-black tracking-tight text-xl md:text-2xl leading-snug text-[var(--txt)] max-w-2xl mx-auto">
            "{t.about.missionDesc}"
          </p>
        </section>

        {/* Horizontal Story origin blocks */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
          <div className="space-y-4">
            <span className="text-[10px] font-mono font-bold text-[var(--green)]">THE INCEPTION</span>
            <h2 className="text-xl md:text-2xl font-display font-black">{t.about.storyTitle}</h2>
            <p className="text-xs leading-relaxed text-[var(--txt2)] font-semibold">
              {t.about.storyDesc1}
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-[var(--bd)] bg-[var(--bg2)] text-xs text-[var(--txt2)] leading-relaxed font-semibold">
            <p>{t.about.storyDesc2}</p>
          </div>
        </section>

        {/* 4 Core values Grid */}
        <section className="space-y-10 max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-lg md:text-xl font-display font-black">{t.about.valuesTitle}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Free education */}
            <div className="p-5 rounded-xl border border-[var(--bd)] bg-[var(--sur2)]/30 space-y-2">
              <span className="text-lg select-none">🎓</span>
              <h3 className="text-xs font-bold text-[var(--txt)]">{t.about.v1Title}</h3>
              <p className="text-[10px] text-[var(--txt2)] font-semibold leading-relaxed">{t.about.v1Desc}</p>
            </div>

            {/* Open software */}
            <div className="p-5 rounded-xl border border-[var(--bd)] bg-[var(--sur2)]/30 space-y-2">
              <span className="text-lg select-none">💻</span>
              <h3 className="text-xs font-bold text-[var(--txt)]">{t.about.v2Title}</h3>
              <p className="text-[10px] text-[var(--txt2)] font-semibold leading-relaxed">{t.about.v2Desc}</p>
            </div>

            {/* AI companion */}
            <div className="p-5 rounded-xl border border-[var(--bd)] bg-[var(--sur2)]/30 space-y-2">
              <span className="text-lg select-none">🤖</span>
              <h3 className="text-xs font-bold text-[var(--txt)]">{t.about.v3Title}</h3>
              <p className="text-[10px] text-[var(--txt2)] font-semibold leading-relaxed">{t.about.v3Desc}</p>
            </div>

            {/* Local groups */}
            <div className="p-5 rounded-xl border border-[var(--bd)] bg-[var(--sur2)]/30 space-y-2">
              <span className="text-lg select-none">🏆</span>
              <h3 className="text-xs font-bold text-[var(--txt)]">{t.about.v4Title}</h3>
              <p className="text-[10px] text-[var(--txt2)] font-semibold leading-relaxed">{t.about.v4Desc}</p>
            </div>

          </div>
        </section>

        {/* Core Team bios */}
        <section className="space-y-8 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <h2 className="text-lg md:text-xl font-display font-black">{t.about.teamTitle}</h2>
            <p className="text-[11px] text-[var(--txt2)] font-semibold">{t.about.teamSub}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Team Person 1 */}
            <div className="p-5 rounded-xl border border-[var(--bd)] bg-[var(--sur)] flex flex-col justify-between">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop"
                  referrerPolicy="no-referrer"
                  alt="Zurich Executive Coordinator"
                  className="w-12 h-12 rounded-full object-cover mb-4 bg-neutral-800"
                />
                <h3 className="text-xs font-bold text-[var(--txt)]">Dr. Marc Keller</h3>
                <p className="text-[9px] text-[var(--ac2)] font-semibold font-mono mt-0.5">{t.about.t1Role}</p>
              </div>
              <p className="text-[10px] text-[var(--txt2)] leading-relaxed font-semibold mt-3 pt-3 border-t border-[var(--bd)]/50">
                {t.about.t1Bio}
              </p>
            </div>

            {/* Team Person 2 */}
            <div className="p-5 rounded-xl border border-[var(--bd)] bg-[var(--sur)] flex flex-col justify-between">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop"
                  referrerPolicy="no-referrer"
                  alt="Tashkent UX System Specialist"
                  className="w-12 h-12 rounded-full object-cover mb-4 bg-neutral-800"
                />
                <h3 className="text-xs font-bold text-[var(--txt)]">Nargiza Alimova</h3>
                <p className="text-[9px] text-[var(--ac2)] font-semibold font-mono mt-0.5">{t.about.t2Role}</p>
              </div>
              <p className="text-[10px] text-[var(--txt2)] leading-relaxed font-semibold mt-3 pt-3 border-t border-[var(--bd)]/50">
                {t.about.t2Bio}
              </p>
            </div>

            {/* Team Person 3 */}
            <div className="p-5 rounded-xl border border-[var(--bd)] bg-[var(--sur)] flex flex-col justify-between">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
                  referrerPolicy="no-referrer"
                  alt="Tokyo ML Optimizer Lead"
                  className="w-12 h-12 rounded-full object-cover mb-4 bg-neutral-800"
                />
                <h3 className="text-xs font-bold text-[var(--txt)]">Kenji Takahashi</h3>
                <p className="text-[9px] text-[var(--ac2)] font-semibold font-mono mt-0.5">{t.about.t3Role}</p>
              </div>
              <p className="text-[10px] text-[var(--txt2)] leading-relaxed font-semibold mt-3 pt-3 border-t border-[var(--bd)]/50">
                {t.about.t3Bio}
              </p>
            </div>

          </div>
        </section>

        {/* Ecosystem contrast explainer block */}
        <section className="space-y-6 max-w-4xl mx-auto border-t border-[var(--bd)] pt-16">
          <div className="text-center">
            <h2 className="text-lg font-display font-black">{t.about.ecoTitle}</h2>
            <p className="text-[11px] text-[var(--txt2)] max-w-md mx-auto leading-relaxed font-semibold mt-2">{t.about.ecoDesc}</p>
          </div>
        </section>

        {/* Timeline target line */}
        <section className="p-6 md:p-8 rounded-2xl border border-[var(--bd)] bg-[var(--sur2)]/25 space-y-8 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-base font-display font-black leading-none">{t.about.timelineTitle}</h2>
            <p className="text-[9px] text-[var(--txt3)] font-mono font-bold uppercase tracking-wider mt-2">{t.about.timelineSub}</p>
          </div>

          <div className="space-y-5 text-[10px] font-semibold text-[var(--txt2)] select-none">
            {/* Q1 */}
            <div className="flex gap-4 items-start pl-2 relative border-l border-[var(--bd2)] ml-2">
              <span className="w-2 h-2 rounded-full bg-[var(--ac)] absolute -left-[4.5px] top-1" />
              <div>
                <p className="font-mono text-[var(--ac2)] font-black">2024 Q1</p>
                <p className="text-[var(--txt)] font-bold mt-0.5">Idea Inception & Structural Design</p>
                <p className="mt-1 leading-normal text-[10px]">Assembled swiss-german text parser libraries and defined semantic schema trees.</p>
              </div>
            </div>

            {/* Q3 */}
            <div className="flex gap-4 items-start pl-2 relative border-l border-[var(--bd2)] ml-2">
              <span className="w-2 h-2 rounded-full bg-[var(--cyan)] absolute -left-[4.5px] top-1" />
              <div>
                <p className="font-mono text-[var(--cyan)] font-black">2024 Q3</p>
                <p className="text-[var(--txt)] font-bold mt-0.5">Global Beta Test Deployment</p>
                <p className="mt-1 leading-normal text-[10px]">Introduced micro-certifications, server side caching models, and registered 10K test minds.</p>
              </div>
            </div>

            {/* launch */}
            <div className="flex gap-4 items-start pl-2 relative border-l border-[var(--bd2)] ml-2">
              <span className="w-2 h-2 rounded-full bg-[var(--green)] absolute -left-[4.5px] top-1" />
              <div>
                <p className="font-mono text-[var(--green)] font-black">2025</p>
                <p className="text-[var(--txt)] font-bold mt-0.5">Universal Open Launch Station</p>
                <p className="mt-1 leading-normal text-[10px]">Scaled servers to Solar network clouds, deployed first LLM adapters, and hit 2.4M active readers.</p>
              </div>
            </div>

            {/* 20 langs */}
            <div className="flex gap-4 items-start pl-2 relative">
              <span className="w-2 h-2 rounded-full bg-[var(--amber)] absolute -left-[4.5px] top-1" />
              <div>
                <p className="font-mono text-[var(--amber)] font-black">2026</p>
                <p className="text-[var(--txt)] font-bold mt-0.5">Phase 2 Language Broadcaster</p>
                <p className="mt-1 leading-normal text-[10px]">Releasing semantic automated course translates across 20 global baseline languages.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact segment grid links */}
        <section className="text-center space-y-6 max-w-xl mx-auto pb-8">
          <h2 className="text-xl font-display font-black">{t.about.joinTitle}</h2>
          <p className="text-xs text-[var(--txt2)] font-medium leading-relaxed">
            {t.about.joinDesc}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full pt-2 select-none">
            <a
              href="https://github.com/mindsphere-org"
              className="px-4 py-2 text-[10px] font-bold rounded-xl border border-[var(--bd)] bg-[var(--sur)] text-[var(--txt)] hover:border-[var(--ac)] transition-colors inline-flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Github size={12} />
              <span>GitHub</span>
            </a>
            <a
              href="https://discord.gg/mindsphere"
              className="px-4 py-2 text-[10px] font-bold rounded-xl border border-[var(--bd)] bg-[var(--sur)] text-[var(--txt)] hover:border-[var(--ac)] transition-colors inline-flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <MessageSquare size={12} />
              <span>Discord</span>
            </a>
            <a
              href="mailto:cooperations@mindsphere.org"
              className="px-4 py-2 text-[10px] font-bold rounded-xl border border-[var(--bd)] bg-[var(--sur)] text-[var(--txt)] hover:border-[var(--ac)] transition-colors inline-flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Mail size={12} />
              <span>cooperations@mindsphere.org</span>
            </a>
          </div>
        </section>

      </div>
    </section>
  );
};
