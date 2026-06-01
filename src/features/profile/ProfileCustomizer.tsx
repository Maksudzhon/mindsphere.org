/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { useApp } from "../../providers/AppProvider";
import { Sparkles } from "lucide-react";

export const ProfileCustomizer: React.FC = () => {
  const { lang } = useApp();

  // Local state variables for Discord Nitro Customizer
  const [nitroNick, setNitroNick] = useState("AlphaScholar");
  const [nitroColor, setNitroColor] = useState("#c084fc"); // purple default
  const [nitroRing, setNitroRing] = useState("cyber"); // cyber, neon, gold, none
  const [nitroTheme, setNitroTheme] = useState("nebula"); // nebula, obsidian, vaporwave, matrix
  const [nitroBadge, setNitroBadge] = useState("elite"); // elite, instructor, both, none

  return (
    <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
      
      {/* Left Panel: Settings Controls */}
      <div className="flex-1 w-full space-y-5">
        <div>
          <span className="inline-block text-[8px] font-mono font-bold tracking-widest text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-full mb-1.5 uppercase">
            {lang === "uz" ? "Customizer boshqaruvi" : lang === "ru" ? "Студия настроек" : "Customizer Control"}
          </span>
          <h3 className="text-base font-bold font-display text-[var(--txt)] flex items-center gap-1.5 flex-row">
            <span>
              {lang === "uz" ? "Aether Pass & Nitro-Stil Shaxsiy Sozlamalar" : lang === "ru" ? "Студия кастомизации Aether Pass & Nitro-стиль" : "Aether Pass & Discord Nitro Customs Playground"}
            </span>
            <Sparkles size={14} className="text-indigo-400 shrink-0 animate-pulse" />
          </h3>
          <p className="text-[10px] text-[var(--txt2)] mt-1.5 font-medium leading-relaxed">
            {lang === "uz" ? "Neon uslubida porlaydigan nomlarni, kiber-ramkalarni va unikal profil kartalarini jonli sozlang!" : lang === "ru" ? "Настройте неоновое свечение никнейма, кастомные кибер-рамки аватарок и стильные темы профиля прямо сейчас!" : "Simulate exclusive visual perks including custom neon nickname glow effects, kiber profile cards, and custom avatar borders live!"}
          </p>
        </div>

        <div className="border-t border-[var(--bd)]/40 pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Nickname Input */}
          <div className="space-y-1.5">
            <label className="text-[9px] font-mono font-bold text-[var(--txt3)] uppercase tracking-wider block">
              {lang === "uz" ? "Taxallusingiz (Nick)" : lang === "ru" ? "Ваш Никнейм" : "Your Nickname"}
            </label>
            <input
              type="text"
              maxLength={18}
              value={nitroNick}
              onChange={(e) => setNitroNick(e.target.value || "AlphaScholar")}
              className="w-full bg-[var(--sur)] border border-[var(--bd)] rounded-xl px-3 py-2 text-xs text-[var(--txt)] focus:outline-none focus:border-indigo-500 transition-colors font-semibold font-mono"
            />
          </div>

          {/* Nickname Glow Color Select */}
          <div className="space-y-1.5">
            <label className="text-[9px] font-mono font-bold text-[var(--txt3)] uppercase tracking-wider block">
              {lang === "uz" ? "Neon rangdagi taxallus" : lang === "ru" ? "Цвет неонового имени" : "Neon Username Color"}
            </label>
            <div className="flex items-center gap-2 flex-row">
              {[
                { color: "#c084fc", name: "Purple" },
                { color: "#f472b6", name: "Pink" },
                { color: "#38bdf8", name: "Cyan" },
                { color: "#4ade80", name: "Green" },
                { color: "#fbbf24", name: "Amber" },
              ].map((c) => (
                <button
                  key={c.color}
                  onClick={() => setNitroColor(c.color)}
                  className={`w-6.5 h-6.5 rounded-full border transition-transform hover:scale-110 cursor-pointer ${nitroColor === c.color ? "border-white scale-110" : "border-transparent"}`}
                  style={{ backgroundColor: c.color }}
                  title={c.name}
                  type="button"
                />
              ))}
            </div>
          </div>

          {/* Avatar Border Decoration Select */}
          <div className="space-y-1.5">
            <label className="text-[9px] font-mono font-bold text-[var(--txt3)] uppercase tracking-wider block">
              {lang === "uz" ? "Avatar kiber-ramkasi" : lang === "ru" ? "Кибер-рамка для аватара" : "Cyber Avatar Ring decoration"}
            </label>
            <div className="grid grid-cols-4 gap-1.5 text-center">
              {[
                { value: "cyber", label: "Pink Hex" },
                { value: "neon", label: "Laser Rose" },
                { value: "gold", label: "Golden Wreath" },
                { value: "none", label: "None" },
              ].map((item) => (
                <button
                  key={item.value}
                  onClick={() => setNitroRing(item.value)}
                  type="button"
                  className={`py-1 rounded-lg border text-[8px] font-mono font-bold uppercase transition-all ${nitroRing === item.value ? "bg-indigo-500/25 border-indigo-500 text-white" : "bg-[var(--sur2)] text-[var(--txt2)] border-[var(--bd)] hover:bg-[var(--sur)]"}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Profile Cards Theme theme option */}
          <div className="space-y-1.5">
            <label className="text-[9px] font-mono font-bold text-[var(--txt3)] uppercase tracking-wider block">
              {lang === "uz" ? "Profil kartasi mavzusi" : lang === "ru" ? "Тема карточки профиля" : "Profile Card Theme"}
            </label>
            <div className="grid grid-cols-4 gap-1.5 text-center">
              {[
                { value: "nebula", label: "Nebula" },
                { value: "obsidian", label: "Obsidian" },
                { value: "vaporwave", label: "Vapor" },
                { value: "matrix", label: "Matrix" },
              ].map((item) => (
                <button
                  key={item.value}
                  onClick={() => setNitroTheme(item.value)}
                  type="button"
                  className={`py-1 rounded-lg border text-[8px] font-mono font-bold uppercase transition-all ${nitroTheme === item.value ? "bg-indigo-500/25 border-indigo-500 text-white" : "bg-[var(--sur2)] text-[var(--txt2)] border-[var(--bd)] hover:bg-[var(--sur)]"}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Subtext info */}
        <div className="flex gap-2 bg-indigo-500/5 rounded-xl p-3 border border-indigo-500/10 text-[9px] text-indigo-400 font-semibold leading-relaxed flex-row">
          <span className="text-xs font-mono select-none shrink-0 font-bold">ℹ</span>
          <p>
            {lang === "uz" ? "Ushbu sozlamalar faol Aether Pass foydalanuvchilariga mindsphere.org platformasida barcha chatlarda va peshqadamlar jadvalida avtomatik porlashini va ramkalarini ta'minlaydi!"
              : lang === "ru" ? "Эти настройки предоставляют владельцам Aether Pass автоматическое свечение никнеймов в общих чатах на mindsphere.org, а также во всех рейтинговых таблицах!"
              : "These custom styles are applied automatically for Aether Pass owners in all community chats, discussion boards, and scoreboard leaderboards platform-wide!"}
          </p>
        </div>

      </div>

      {/* Right Panel: Live Mock Profile Card Preview */}
      <div className="w-full md:w-64 shrink-0 flex justify-center">
        <motion.div
          key={`${nitroTheme}-${nitroRing}-${nitroColor}`}
          initial={{ scale: 0.95, opacity: 0.9 }}
          animate={{ scale: 1, opacity: 1 }}
          className={`w-full max-w-[240px] rounded-2xl relative p-5 overflow-hidden transition-all ${
            nitroTheme === "nebula"
              ? "bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900 shadow-xl shadow-purple-500/15 border border-purple-500/35"
              : nitroTheme === "obsidian"
              ? "bg-gradient-to-br from-neutral-900 to-neutral-850 shadow-xl border border-neutral-700"
              : nitroTheme === "vaporwave"
              ? "bg-gradient-to-tr from-fuchsia-950 via-rose-900 to-cyan-950 border border-fuchsia-400/40 shadow-xl shadow-pink-500/10"
              : "bg-gradient-to-b from-black to-emerald-950 border border-emerald-500/30 shadow-xl shadow-emerald-500/10"
          }`}
        >
          {/* Decorative card background overlay */}
          <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

          {/* Elite Pass Badge Icon on the Top Right */}
          <div className="absolute top-4 right-4 flex gap-1 items-center flex-row">
            {nitroBadge !== "none" && (
              <span className="text-[7px] font-mono select-none px-1.5 py-0.5 rounded-full bg-indigo-500 text-white font-black uppercase tracking-wider animate-pulse flex items-center gap-0.5 shadow flex-row">
                <span>✦</span>AETHER
              </span>
            )}
          </div>

          <div className="flex flex-col items-center text-center space-y-4 pt-4">
            {/* Glowing Avatar frame based on choice */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
                alt="Avatar preview"
                referrerPolicy="no-referrer"
                className={`w-16 h-16 rounded-full object-cover transition-all ${
                  nitroRing === "cyber"
                    ? "ring-4 ring-offset-2 ring-purple-400 ring-offset-purple-950"
                    : nitroRing === "neon"
                    ? "ring-4 ring-offset-2 ring-pink-500 ring-offset-pink-950"
                    : nitroRing === "gold"
                    ? "ring-4 ring-offset-2 ring-amber-400 ring-offset-amber-950"
                    : "ring-0"
                }`}
              />
              {nitroRing !== "none" && (
                <div className="absolute -bottom-1 -right-1 bg-indigo-500 border border-indigo-900 w-5 h-5 rounded-full flex items-center justify-center text-[8px] text-white">
                  ✦
                </div>
              )}
            </div>

            {/* Glowing Neon Nickname */}
            <div className="space-y-1">
              <h4
                className="text-sm font-extrabold font-display leading-tight tracking-wide font-mono transition-colors"
                style={{
                  color: nitroColor,
                  textShadow: `0 0 10px ${nitroColor}dd, 0 0 20px ${nitroColor}44`,
                }}
              >
                {nitroNick}
              </h4>
              <p className="text-[8px] text-white/50 font-mono tracking-widest font-black uppercase">
                {lang === "uz" ? "AETHER CLASS O'QUVCHISI" : lang === "ru" ? "AETHER НАБЛЮДАТЕЛЬ" : "AETHER CLASS SCHOLAR"}
              </p>
            </div>

            {/* Fake micro Stats */}
            <div className="grid grid-cols-2 gap-2 border-t border-white/10 pt-3.5 w-full text-center">
              <div>
                <span className="text-[10px] font-black font-display text-white">48,290</span>
                <span className="text-[7px] text-white/40 block font-mono uppercase">Course XP</span>
              </div>
              <div>
                <span className="text-[10px] font-black font-display text-amber-400">#1 Global</span>
                <span className="text-[7px] text-white/40 block font-mono uppercase">Leaderboard</span>
              </div>
            </div>

            <div className="w-full bg-white/5 rounded-xl p-2 border border-white/5 text-[8px] text-white/75 leading-tight text-left font-serif italic">
              "Knowledge is a sphere with infinite dimensional paths..."
            </div>

          </div>
        </motion.div>
      </div>

    </div>
  );
};
