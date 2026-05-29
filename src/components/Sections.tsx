/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Award, GraduationCap, PenTool, Users, MapPin, Zap, Flame, Trophy } from "lucide-react";
import { useApp } from "./AppProvider";

// 1. Reusable Section Header Component
interface SectionHeaderProps {
  id?: string;
  badge?: string;
  badgeColor?: string;
  title: string;
  subtitle?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  id,
  badge,
  badgeColor = "text-[var(--ac)] bg-[var(--ac)]/10",
  title,
  subtitle,
}) => {
  return (
    <div id={id} className="text-center max-w-2xl mx-auto mb-12 px-4 scroll-mt-24">
      {badge && (
        <span className={`inline-block text-[9px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3 ${badgeColor}`}>
          {badge}
        </span>
      )}
      <h2 className="text-2xl md:text-3xl font-display font-black leading-tight tracking-tight text-[var(--txt)]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm text-[var(--txt2)] mt-3 leading-relaxed font-medium">
          {subtitle}
        </p>
      )}
    </div>
  );
};

// 2. Platform Stats Bar Component (Dark bg2, thin borders, fully adaptive)
export const StatsBar: React.FC = () => {
  const { t, lang } = useApp();

  const coursesLabel = {
    en: "Total Courses",
    ru: "Всего Курсов",
    uz: "Kurslar Soni",
  }[lang] || "Total Courses";

  const stats = [
    { num: t.stats.learnersNum, label: t.stats.learnersLabel, color: "text-[var(--ac)]" },
    { num: "48,129+", label: coursesLabel, color: "text-[var(--ac2)]" },
    { num: t.stats.fieldsNum, label: t.stats.fieldsLabel, color: "text-[var(--cyan)]" },
    { num: t.stats.countriesNum, label: t.stats.countriesLabel, color: "text-[var(--green)]" },
    { num: t.stats.freePrice, label: t.stats.freeLabel, color: "text-[var(--rose)]" },
  ];

  return (
    <div className="w-full border-y border-[var(--bd)] bg-[var(--bg2)]/60 py-8 select-none">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-4 text-center">
          {stats.map((s, i) => (
            <div key={i} className="px-2">
              <span className={`font-display font-black text-xl md:text-2xl lg:text-3xl tracking-tight block ${s.color}`}>
                {s.num}
              </span>
              <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-[var(--txt2)] block mt-1">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// 3. Roles Section (Student, Teacher, Team)
export const RolesSection: React.FC = () => {
  const { t } = useApp();

  return (
    <section id="roles" className="py-20 bg-[var(--bg2)]/35 border-b border-[var(--bd)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <SectionHeader
          badge={t.nav.benefits}
          title={t.roles.title}
          subtitle={t.roles.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mt-8">
          
          {/* Student Pathway Card */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex flex-col h-full rounded-2xl border border-[var(--bd)] bg-[var(--sur)] p-6 lg:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-[var(--green)]/10 text-[var(--green)]">
                <GraduationCap size={20} />
              </div>
              <div>
                <span className="text-[9px] font-mono uppercase tracking-widest font-extrabold text-[var(--green)] bg-[var(--green)]/10 px-2 py-0.5 rounded">
                  {t.roles.studentBadge}
                </span>
                <h3 className="text-base font-bold font-display mt-0.5">{t.roles.studentTitle}</h3>
              </div>
            </div>

            <ul className="space-y-3.5 my-6 flex-1 text-xs">
              {[
                t.roles.studentBullet1,
                t.roles.studentBullet2,
                t.roles.studentBullet3,
                t.roles.studentBullet4,
                t.roles.studentBullet5,
              ].map((bullet, i) => (
                <li key={i} className="flex items-start gap-2.5 leading-relaxed text-[var(--txt2)]">
                  <span className="text-[var(--green)] text-xs mt-0.5 font-mono select-none">✓</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Teacher Pathway Card (Featured glow active with shadows) */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex flex-col h-full rounded-2xl border border-[var(--ac)] bg-[var(--sur)] p-6 lg:p-8 relative shadow-glow"
          >
            <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-grad-main text-white text-[8px] font-bold uppercase tracking-wider font-mono">
              Featured Path
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-[var(--ac)]/10 text-[var(--ac)]">
                <PenTool size={20} />
              </div>
              <div>
                <span className="text-[9px] font-mono uppercase tracking-widest font-extrabold text-[var(--ac)] bg-[var(--ac)]/10 px-2 py-0.5 rounded">
                  {t.roles.teacherBadge}
                </span>
                <h3 className="text-base font-bold font-display mt-0.5">{t.roles.teacherTitle}</h3>
              </div>
            </div>

            <ul className="space-y-3.5 mt-6 mb-5 flex-1 text-xs">
              {[
                t.roles.teacherBullet1,
                t.roles.teacherBullet2,
                t.roles.teacherBullet3,
                t.roles.teacherBullet4,
                t.roles.teacherBullet5,
              ].map((bullet, i) => (
                <li key={i} className="flex items-start gap-2.5 leading-relaxed text-[var(--txt2)]">
                  <span className="text-[var(--ac)] text-xs mt-0.5 font-mono select-none">✓</span>
                  <span className={i === 2 ? "font-bold text-[var(--txt)]" : ""}>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Income Commission Yellow Alert box */}
            <div className="p-3.5 rounded-xl border border-[var(--amber)]/25 bg-[var(--amber)]/5 text-[10px] leading-relaxed text-[var(--txt)] font-medium">
              <span className="font-extrabold text-[var(--amber)] text-xs inline-block mb-1 font-mono">Revenue Share Details</span>
              <p className="text-[var(--txt2)] leading-normal">{t.roles.teacherRevenueCallout}</p>
            </div>
          </motion.div>

          {/* Team / Organization Pathway Card */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex flex-col h-full rounded-2xl border border-[var(--bd)] bg-[var(--sur)] p-6 lg:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-[var(--cyan)]/10 text-[var(--cyan)]">
                <Users size={20} />
              </div>
              <div>
                <span className="text-[9px] font-mono uppercase tracking-widest font-extrabold text-[var(--cyan)] bg-[var(--cyan)]/10 px-2 py-0.5 rounded">
                  {t.roles.teamBadge}
                </span>
                <h3 className="text-base font-bold font-display mt-0.5">{t.roles.teamTitle}</h3>
              </div>
            </div>

            <ul className="space-y-3.5 my-6 flex-1 text-xs">
              {[
                t.roles.teamBullet1,
                t.roles.teamBullet2,
                t.roles.teamBullet3,
                t.roles.teamBullet4,
              ].map((bullet, i) => (
                <li key={i} className="flex items-start gap-2.5 leading-relaxed text-[var(--txt2)]">
                  <span className="text-[var(--cyan)] text-xs mt-0.5 font-mono select-none">✓</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

// 4. Global Leaderboard Side-By-Side Admin Tournament Center
export const LeaderboardSection: React.FC = () => {
  const { t } = useApp();

  // Preset actual student details
  const leaderboardRows = [
    { rank: 1, name: "Aisha Karimova", code: "uz", flag: "🇺🇿", detail: "Medicine · Team Alpha", pts: "48,290", badge: t.leaderboard.badgeWeek1, img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=80&auto=format&fit=crop" },
    { rank: 2, name: "Dmitri Volkov", code: "ru", flag: "🇷🇺", detail: "Physics · Solo", pts: "44,110", badge: "", img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=80&auto=format&fit=crop" },
    { rank: 3, name: "Sara Müller", code: "de", flag: "🇩🇪", detail: "Law · Team Berlin", pts: "41,850", badge: "", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=80&auto=format&fit=crop" },
    { rank: 4, name: "James Okoro", code: "ng", flag: "🇳🇬", detail: "Engineering · Solo", pts: "38,400", badge: "", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=80&auto=format&fit=crop" },
    { rank: 5, name: "Yuki Tanaka", code: "jp", flag: "🇯🇵", detail: "Philosophy · Solo", pts: "35,720", badge: "", img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=80&auto=format&fit=crop" },
  ];

  return (
    <section className="py-20 border-b border-[var(--bd)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <SectionHeader
          badge="Gamification Matrix"
          badgeColor="text-[var(--cyan)] bg-[var(--cyan)]/10"
          title="Consolidate Knowledge Through Action"
          subtitle="Real-time scoreboard trackers and weekly administration challenges motivate student sprint habits on mindsphere.space."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mt-8">
          
          {/* Left Panel: Global leaderboard list */}
          <div className="rounded-2xl border border-[var(--bd)] bg-[var(--sur)] p-5 md:p-6 overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-[var(--bd)] pb-4 mb-4 select-none">
              <div className="flex items-center gap-2">
                <Trophy size={18} className="text-[var(--amber)]" />
                <h3 className="text-base font-bold font-display">{t.leaderboard.title}</h3>
              </div>
              <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-[var(--rose)]/30 bg-[var(--rose)]/5 text-[9px] font-mono font-bold text-[var(--rose)]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--rose)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--rose)]"></span>
                </span>
                {t.leaderboard.live}
              </span>
            </div>

            {/* List Rows */}
            <div className="space-y-3.5">
              {leaderboardRows.map((r, i) => {
                const isAisha = r.name === "Aisha Karimova";
                const isYuki = r.name === "Yuki Tanaka";
                const isElite = isAisha || isYuki;

                return (
                  <div
                    key={i}
                    className={`flex items-center justify-between p-2 rounded-xl transition-all border ${
                      isElite
                        ? "bg-indigo-500/5 border-indigo-500/25 shadow-[0_0_12px_rgba(99,102,241,0.06)] scale-[1.01]"
                        : "bg-[var(--bg3)]/35 hover:bg-[var(--bg3)]/75 border-transparent hover:border-[var(--bd)]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Position circle representation */}
                      <div className="w-6 h-6 rounded-full flex items-center justify-center font-mono text-xs font-extrabold select-none">
                        {r.rank === 1 && <span className="text-[var(--amber)]">🥇</span>}
                        {r.rank === 2 && <span className="text-gray-400">🥈</span>}
                        {r.rank === 3 && <span className="text-amber-700">🥉</span>}
                        {r.rank > 3 && <span className="text-[var(--txt3)] font-semibold">{r.rank}</span>}
                      </div>

                      <div className="relative shrink-0">
                        <img
                          src={r.img}
                          alt={r.name}
                          referrerPolicy="no-referrer"
                          className={`w-8 h-8 rounded-full object-cover bg-neutral-800 transition-all ${
                            isAisha
                              ? "ring-2 ring-offset-1 ring-purple-400 ring-offset-slate-900"
                              : isYuki
                              ? "ring-2 ring-offset-1 ring-amber-400 ring-offset-slate-900"
                              : "ring-0"
                          }`}
                        />
                        {isElite && (
                          <div className="absolute -bottom-1 -right-1 bg-indigo-500 w-3 h-3 rounded-full flex items-center justify-center text-[6px] text-white font-bold select-none shadow">
                            ✦
                          </div>
                        )}
                      </div>

                      <div>
                        <div className="flex items-center gap-1.5 font-sans">
                          {isAisha ? (
                            <span
                              className="text-xs font-black leading-none"
                              style={{ color: "#f472b6", textShadow: "0 0 6px rgba(244,114,182,0.6)" }}
                            >
                              {r.name}
                            </span>
                          ) : isYuki ? (
                            <span
                              className="text-xs font-black leading-none"
                              style={{ color: "#38bdf8", textShadow: "0 0 6px rgba(56,189,248,0.6)" }}
                            >
                              {r.name}
                            </span>
                          ) : (
                            <span className="text-xs font-bold text-[var(--txt)] leading-none">{r.name}</span>
                          )}
                          <span className="text-[10px] select-none" title={r.code.toUpperCase()}>{r.flag}</span>
                          {r.badge && (
                            <span className="text-[8px] font-mono leading-none font-bold bg-[var(--amber)]/10 text-[var(--amber)] px-1.5 py-0.5 rounded ml-1">
                              {r.badge}
                            </span>
                          )}
                          {isElite && (
                            <span className="text-[7px] font-mono font-black bg-indigo-500/20 text-indigo-400 px-1 py-0.5 rounded uppercase leading-none select-none tracking-wide">
                              Elite
                            </span>
                          )}
                        </div>
                        <p className="text-[9px] text-[var(--txt2)] mt-0.5 font-semibold">
                          {r.detail}
                        </p>
                      </div>
                    </div>

                    <span className="font-mono text-[10px] md:text-xs font-black text-[var(--txt)] text-right">
                      {r.pts} <span className="text-[8px] text-[var(--txt3)] font-sans">pts</span>
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Live Indicator footer */}
            <div className="mt-5 pt-4 border-t border-[var(--bd)] text-center">
              <span className="text-[9px] font-mono font-bold tracking-tight text-[var(--txt3)]">
                {t.leaderboard.footer}
              </span>
            </div>
          </div>

          {/* Right Panel: Challenge and Cash Tournaments list */}
          <div className="rounded-2xl border border-[var(--bd)] bg-[var(--sur)] p-5 md:p-6 flex flex-col justify-between">
            <div className="border-b border-[var(--bd)] pb-4 mb-4 select-none">
              <h3 className="text-base font-bold font-display text-grad-main">
                {t.leaderboard.quizzesTitle}
              </h3>
              <p className="text-[10px] text-[var(--txt2)] mt-1 font-semibold">
                {t.leaderboard.quizzesSubtitle}
              </p>
            </div>

            <div className="space-y-3">
              {/* Contest Card 1 */}
              <div className="p-4 rounded-xl border border-[var(--amber)]/20 bg-[var(--amber)]/5 flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div className="space-y-1">
                  <span className="text-[8px] font-mono font-bold bg-[var(--rose)] text-white px-2 py-0.5 rounded uppercase">
                    {t.leaderboard.q1Status}
                  </span>
                  <h4 className="text-xs font-bold text-[var(--txt)] pt-1">{t.leaderboard.q1Title}</h4>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-[10px] font-mono text-[var(--amber)] font-black">
                    {t.leaderboard.q1Prizes}
                  </p>
                </div>
              </div>

              {/* Contest Card 2 */}
              <div className="p-4 rounded-xl border border-[var(--bd)] bg-[var(--sur2)] flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div className="space-y-1">
                  <span className="text-[8px] font-mono font-bold bg-[var(--ac)] text-white px-2 py-0.5 rounded uppercase">
                    {t.leaderboard.q2Status}
                  </span>
                  <h4 className="text-xs font-bold text-[var(--txt)] pt-1">{t.leaderboard.q2Title}</h4>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-[10px] font-mono text-[var(--ac2)] font-black">
                    {t.leaderboard.q2Prizes}
                  </p>
                </div>
              </div>

              {/* Contest Card 3 */}
              <div className="p-4 rounded-xl border border-[var(--bd)] bg-[var(--sur2)] flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div className="space-y-1">
                  <span className="text-[8px] font-mono font-bold bg-[var(--cyan)] text-white px-2 py-0.5 rounded uppercase">
                    {t.leaderboard.q3Status}
                  </span>
                  <h4 className="text-xs font-bold text-[var(--txt)] pt-1">{t.leaderboard.q3Title}</h4>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-[10px] font-mono text-[var(--cyan)] font-black">
                    {t.leaderboard.q3Prizes}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-[var(--bd)] text-center">
              <span className="text-[9px] font-mono font-bold tracking-tight text-[var(--txt3)]">
                {t.leaderboard.quizzesFooter}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
