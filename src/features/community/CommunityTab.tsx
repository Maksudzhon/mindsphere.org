/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { Trophy, Sparkles, Check, CheckCircle } from "lucide-react";
import { useApp } from "../../providers/AppProvider";
import { PeerHotlineChat } from "../chat/PeerHotlineChat";

interface CommunityTabProps {
  setLiveToast: (toast: { sender: string; channel: string; text: string } | null) => void;
  setActiveTab: (tab: "ai" | "fields" | "lang" | "access" | "community") => void;
}

export const CommunityTab: React.FC<CommunityTabProps> = ({ setLiveToast, setActiveTab }) => {
  const { t, lang } = useApp();

  // Selected Clan & Clan Ratings state isolated locally
  const [selectedClanId, setSelectedClanId] = useState<number>(1);
  const [clanRatings, setClanRatings] = useState([
    { id: 1, name: "Sovereign Minds", members: 12, xp: 48900, tag: "CS & Logic", weeklyProgress: [12000, 15000, 18000, 22000, 25000, 48900] },
    { id: 2, name: "Cosmic Devs", members: 11, xp: 45200, tag: "Astro Systems", weeklyProgress: [9000, 13000, 17000, 21000, 31000, 45200] },
    { id: 3, name: "Quantum Alchemists", members: 8, xp: 42100, tag: "Quantum Math", weeklyProgress: [15000, 19000, 22000, 28000, 34000, 42100] }
  ]);

  // Quiz states isolated locally
  const [quizSelection, setQuizSelection] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [quizCorrectCount, setQuizCorrectCount] = useState<number>(5);
  const [quizIncorrectCount, setQuizIncorrectCount] = useState<number>(2);

  // Challenges isolated locally
  const [dailyClanChallenges, setDailyClanChallenges] = useState([
    { id: 1, titleEn: "Collaborative Code-Off", titleRu: "Командный Хакатон", titleUz: "Jamoaviy Kodlash", descEn: "Accumulate 1,500 Group XP together in lessons", descRu: "Наберите 1,500 XP всем кланом на уроках", descUz: "Klan bilan darslarda 1,500 XP to'plang", done: false, rewardPoints: 150 },
    { id: 2, titleEn: "Midnight Velocity Run", titleRu: "Полуночный Спринт", titleUz: "Yarim Tun Tezligi", descEn: "Keep study streak above 3 consecutive days", descRu: "Удерживайте ударный режим учебы более 3 дней", descUz: "O'qish zarbasini ketma-ket 3 kundan ko'p tuting", done: true, rewardPoints: 200 },
    { id: 3, titleEn: "Peer Review Exchange", titleRu: "Обзор Решений Коллег", titleUz: "Hamkasblar Tahlili", descEn: "Share a verified orbital theory insight in chat", descRu: "Поделитесь проверенной гипотезой в обсуждении", descUz: "Muhokamada tasdiqlangan nazariyani ulashing", done: false, rewardPoints: 100 }
  ]);

  const boostClan = (clanId: number) => {
    setClanRatings((prev) =>
      prev.map((c) => (c.id === clanId ? { ...c, xp: c.xp + 150, weeklyProgress: c.weeklyProgress.map((w, idx) => idx === 5 ? w + 150 : w) } : c))
    );
  };

  return (
    <motion.div
      key="community-tab"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="grid grid-cols-1 lg:grid-cols-3 gap-6"
    >
      {/* Left Column: Clans, Achievement Medals & Brackets */}
      <div className="p-5 rounded-2xl border border-[var(--bd)] bg-[var(--sur)] hover:border-[var(--bd2)] transition-all flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-3 flex-row">
            <Trophy className="text-[var(--cyan)] shrink-0" size={16} />
            <h3 className="text-xs font-black uppercase tracking-wider text-[var(--cyan)] font-mono">
              {lang === "uz" ? "Talabalar klanlari" : lang === "ru" ? "Студенческие Кланы" : "Student Cooperatives"}
            </h3>
          </div>
          <h4 className="text-sm font-bold text-[var(--txt)]">
            {lang === "uz" ? "Do'stlar va klanlar musobaqalari" : lang === "ru" ? "Глобальные Битвы Гильдий" : "Guild Leagues & Clan Battles"}
          </h4>
          <p className="text-[10px] text-[var(--txt2)] leading-relaxed font-semibold mt-1.5 mb-4">
            {lang === "uz"
              ? "Yangi klan oching yoki quyidagilardan birini tanlang. XP yig'ing va klaningiz mukofotlarini faollashtiring."
              : lang === "ru"
              ? "Выберите гильдию ниже. Помогайте своей команде зарабатывать еженедельный XP, чтобы доминировать в турнире."
              : "Choose a cooperative guild below. Accumulate team XP together to unlock exclusive medals, tier ratings, and bragging rights."}
          </p>

          {/* Leaderboard & Clan Selector */}
          <div className="space-y-2 mb-4">
            {clanRatings.map((clan, i) => {
              const isSelected = clan.id === selectedClanId;
              return (
                <div
                  key={clan.id}
                  onClick={() => setSelectedClanId(clan.id)}
                  className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 text-xs flex-row ${
                    isSelected
                      ? "border-[var(--ac)] bg-[var(--ac)]/10 shadow-sm"
                      : "border-[var(--bd)] bg-[var(--sur2)]/30 hover:border-[var(--bd2)]"
                  }`}
                >
                  <div className="flex items-center gap-2 flex-row">
                    <span className={`font-mono text-[9px] font-bold w-4 text-center ${isSelected ? "text-[var(--ac)]" : "text-[var(--txt3)]"}`}>
                      #{i + 1}
                    </span>
                    <div>
                      <p className={`font-bold text-[11px] ${isSelected ? "text-[var(--ac)]" : "text-[var(--txt)]"}`}>
                        {clan.name}
                      </p>
                      <span className="text-[8px] text-[var(--txt3)] font-semibold uppercase font-mono">
                        {clan.tag} · {clan.members} members
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 flex-row" onClick={(e) => e.stopPropagation()}>
                    <span className="text-[10px] font-mono font-black text-[var(--ac)]">{clan.xp} XP</span>
                    <button
                      onClick={() => boostClan(clan.id)}
                      title="Boost Clan!"
                      className="p-1 rounded bg-[var(--ac)]/10 text-[var(--ac)] hover:bg-[var(--ac)] hover:text-white transition-all duration-200 font-bold active:scale-[0.85] text-[8px] cursor-pointer"
                      type="button"
                    >
                      ⚡ +150
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Clan Achievement Medals cabinet */}
          <div className="mt-4 border-t border-[var(--bd)]/40 pt-4">
            <h5 className="text-[10px] font-black uppercase tracking-wider text-[var(--txt3)] font-mono mb-2 flex items-center justify-between">
              <span>{lang === "en" ? "Clan Medals & Trophies" : lang === "ru" ? "Медали и Награды Клана" : "Klan Medallari & Kuboklari"}</span>
              <span className="text-[9px] text-[var(--ac)] font-bold font-mono">
                {selectedClanId === 1 ? "3 Earned" : selectedClanId === 2 ? "2 Earned" : "2 Earned"}
              </span>
            </h5>

            <div className="grid grid-cols-3 gap-2">
              {(selectedClanId === 1 ? [
                { name: "Logic Oracle", desc: "For completing 10 consecutive Hardcore orbital mechanics challenges.", color: "border-yellow-500/30 text-yellow-500 bg-yellow-500/5" },
                { name: "Streak Hero", desc: "Obtained 30 days continuous study streak as a unified guild.", color: "border-purple-500/30 text-purple-400 bg-purple-500/5" },
                { name: "Guild Pioneer", desc: "Invited 20 members to the cooperative workspace.", color: "border-amber-600/30 text-amber-500 bg-amber-600/5" }
              ] : selectedClanId === 2 ? [
                { name: "Cosmic Master", desc: "Constructed three complete universe simulators concurrently.", color: "border-yellow-500/30 text-yellow-500 bg-yellow-500/5" },
                { name: "Velocity Hack", desc: "Solved 5 physics assignments with >95% precision in 5 minutes.", color: "border-sky-500/30 text-sky-400 bg-sky-500/5" }
              ] : [
                { name: "Alchemist Pro", desc: "Discovered a hidden spiral spiral prime sequence algorithm.", color: "border-yellow-500/30 text-yellow-500 bg-yellow-500/5" },
                { name: "Forum Scribe", desc: "Provided 50 verified answers inside the student logic board.", color: "border-emerald-500/30 text-emerald-400 bg-emerald-500/5" }
              ]).map((badge, idx) => (
                <div
                  key={idx}
                  className={`p-1.5 rounded-lg border ${badge.color} text-center transition-all hover:scale-[1.03] cursor-pointer flex flex-col items-center justify-center`}
                  onClick={() => alert(`"${badge.name}" Medal:\n\n${badge.desc}`)}
                  title="Click for Medal requirements"
                >
                  <div className="h-5 w-5 rounded-full border border-current flex items-center justify-center text-[9px] font-black font-mono mb-1">
                    {badge.name[0]}
                  </div>
                  <p className="text-[8px] font-black leading-tight select-none truncate w-full">{badge.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Clan Weekly XP Race Chart */}
          <div className="mt-4 border-t border-[var(--bd)]/40 pt-4">
            <h5 className="text-[10px] font-black uppercase tracking-wider text-[var(--txt3)] font-mono mb-2.5 flex items-center justify-between font-sans">
              <span>{lang === "en" ? "Weekly XP Progress Chart" : lang === "ru" ? "Рейтинговый Забег XP" : "Haftalik XP Musobaqasi"}</span>
              <span className="text-[9px] font-mono text-[var(--txt3)] font-semibold uppercase">{lang === "en" ? "Updated" : lang === "ru" ? "Обновлено" : "Yangilangan"}</span>
            </h5>

            <div className="space-y-2.5 p-2.5 rounded-xl bg-[var(--sur2)]/35 border border-[var(--bd)]">
              {clanRatings.map((clan) => {
                const isSelected = clan.id === selectedClanId;
                const maxXP = Math.max(...clanRatings.map((c) => c.xp));
                const percentage = (clan.xp / maxXP) * 100;
                return (
                  <div key={clan.id} className="space-y-1 text-[10px]">
                    <div className="flex justify-between items-center flex-row">
                      <span className={`font-bold text-[10px] ${isSelected ? "text-[var(--ac)] font-bold" : "text-[var(--txt)] font-semibold"}`}>
                        {clan.name} {isSelected && " (Active)"}
                      </span>
                      <span className="font-mono text-[8.5px] font-black text-[var(--ac)]">{clan.xp} XP</span>
                    </div>
                    <div className="h-2 bg-[var(--sur2)] rounded-full overflow-hidden relative border border-[var(--bd)]/10">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className={`h-full rounded-full ${isSelected ? "bg-grad-main shadow-glow" : "bg-[var(--txt3)]/30"}`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        <div className="p-3 rounded-lg border border-dashed border-[var(--ac)]/45 bg-[var(--ac)]/5 text-[9px] font-mono font-extrabold text-[var(--ac)] text-center animate-pulse uppercase tracking-wider select-none">
          {lang === "uz" ? "Navbatdagi turnir: 15 soatdan so'ng" : lang === "ru" ? "След. турнир через: 15 часов" : "Next Guild Tournament In: 15 Hours"}
        </div>
      </div>

      {/* Center Column: Daily Hardcore Exercises quiz */}
      <div className="p-5 rounded-2xl border border-[var(--bd)] bg-[var(--sur)] hover:border-[var(--bd2)] transition-all flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-3 flex-row">
            <Sparkles className="text-emerald-500 shrink-0" size={14} />
            <h3 className="text-xs font-black uppercase tracking-wider text-emerald-500 font-mono">
              {lang === "uz" ? "Kunlik murakkab mashq" : lang === "ru" ? "Сложные Задачи" : "Administrator Hardcore Match"}
            </h3>
          </div>
          <h4 className="text-sm font-bold text-[var(--txt)] flex items-center justify-between flex-row">
            <span>{lang === "uz" ? "Bugungi qiyin vazifa" : lang === "ru" ? "Супер-Миссия дня" : "Today's Logic Battle"}</span>
            <span className="px-2 py-0.5 rounded text-[8px] font-mono bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 font-bold">100% Verified</span>
          </h4>
          <p className="text-[10px] text-[var(--txt2)] leading-relaxed font-semibold mt-1.5 mb-4">
            {lang === "uz"
              ? "O'qituvchilar va ma'murlar tomonidan yaratilgan qiyin misolni yeching va klaningiz obro'sini oshiring!"
              : lang === "ru"
              ? "Решите сложнейшую задачу от администрации или ведущих профессоров, чтобы повысить престиж вашего клана."
              : "Solve structural tasks designed by educators and top administrators. Win reputation points for yourself and XP boosters."}
          </p>

          {/* Real quiz solver implementation */}
          <div className="p-3.5 rounded-xl border border-[var(--bd)] bg-[var(--sur2)] text-left flex flex-col space-y-3">
            <div className="border-b border-[var(--bd)]/40 pb-2 flex items-center justify-between flex-row">
              <span className="text-[8px] font-bold text-[var(--txt3)] font-mono uppercase">Mathematics & Physics</span>
              <span className="text-[9px] font-extrabold text-emerald-500 font-mono">+250 Rep Tokens</span>
            </div>
            <p className="text-[11px] font-bold text-[var(--txt)] leading-normal pr-1">
              {lang === "uz"
                ? "Kosmik kema aylanma orbitasini 2 barobar oshirganda, uning kinetik energiyasi qanday o'zgaradi?"
                : lang === "ru"
                ? "При увеличении радиуса круговой орбиты спутника в 2 раза, его кинетическая энергия..."
                : "If we double the orbital radius of a satellite around a planet, its kinetic energy..."}
            </p>

            {/* Interactive Option buttons */}
            <div className="space-y-1.5">
              {[
                { id: 1, label: lang === "uz" ? "2 barobar ortadi" : lang === "ru" ? "Увеличится в 2 раза" : "Doubles (Increases 2x)", correct: false },
                { id: 2, label: lang === "uz" ? "2 barobar kamayadi" : lang === "ru" ? "Уменьшится в 2 раза" : "Halves (Decreases 2x)", correct: true },
                { id: 3, label: lang === "uz" ? "O'zgarmaydi" : lang === "ru" ? "Не изменится" : "Remains static", correct: false }
              ].map((opt) => {
                const isSelected = quizSelection === opt.id;
                return (
                  <button
                    key={opt.id}
                    disabled={quizSubmitted}
                    onClick={() => setQuizSelection(opt.id)}
                    className={`w-full p-2 rounded-lg border text-[10px] font-bold text-left transition-all cursor-pointer ${
                      quizSubmitted
                        ? opt.correct
                          ? "bg-emerald-500/10 border-emerald-500 text-emerald-500 font-bold"
                          : isSelected
                          ? "bg-red-500/10 border-red-500 text-red-500 font-bold"
                          : "bg-transparent border-[var(--bd)] text-[var(--txt3)]"
                        : isSelected
                        ? "bg-[var(--ac)]/15 border-[var(--ac)] text-[var(--txt)] font-bold"
                        : "bg-[var(--sur)] border-[var(--bd)] text-[var(--txt2)] hover:border-[var(--ac)]/55"
                    }`}
                    type="button"
                  >
                    <span className="font-mono mr-1.5 select-none">{opt.id === 1 ? "A" : opt.id === 2 ? "B" : "C"}.</span>
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-4">
          {quizSubmitted ? (
            <div className="p-2.5 rounded-lg text-center bg-emerald-500/10 border border-emerald-500/20 text-[9.5px] font-bold text-emerald-500 animate-[fadeIn_0.2s_ease-out]">
              {quizSelection === 2
                ? (lang === "uz" ? "Correct answer! +250 XP added to clan!" : lang === "ru" ? "Правильно! Зачислено +250 XP гильдии." : "Correct answer. +250 XP awarded to your clan.")
                : (lang === "uz" ? "Incorrect! Try again to learn!" : lang === "ru" ? "Неверно, но обучение бесплатно! Попробуйте еще раз." : "Incorrect, but trials are free! Try again.")}
              <button
                onClick={() => {
                  setQuizSubmitted(false);
                  setQuizSelection(null);
                }}
                className="block mx-auto mt-1.5 underline text-[8.5px] font-mono text-emerald-600 hover:text-emerald-500 uppercase select-none tracking-tight font-extrabold cursor-pointer"
                type="button"
              >
                [Try Again]
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                if (quizSelection !== null) {
                  setQuizSubmitted(true);
                  if (quizSelection === 2) {
                    setQuizCorrectCount(prev => prev + 1);
                    boostClan(selectedClanId);
                  } else {
                    setQuizIncorrectCount(prev => prev + 1);
                  }
                }
              }}
              disabled={quizSelection === null}
              className={`w-full py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                quizSelection !== null
                  ? "bg-emerald-500 text-white hover:opacity-90 active:scale-[0.97]"
                  : "bg-[var(--sur2)] text-[var(--txt3)] border border-[var(--bd)] cursor-not-allowed"
              }`}
              type="button"
            >
              {lang === "uz" ? "Javobni Tekshirish" : lang === "ru" ? "Проверить Решение" : "Validate Response"}
            </button>
          )}
        </div>

        {/* Interactive Quiz Performance Stats */}
        <div className="mt-5 border-t border-[var(--bd)]/40 pt-4">
          <h5 className="text-[10px] font-black uppercase tracking-wider text-[var(--txt3)] font-mono mb-2 flex items-center justify-between">
            <span>{lang === "en" ? "Quiz Performance Stats" : lang === "ru" ? "Статистика Решений" : "Yechimlar Statistikasi"}</span>
            <span className="font-mono text-[9px] text-[var(--ac)] font-bold">
              {lang === "en" ? "ACCURACY:" : lang === "ru" ? "ТОЧНОСТЬ:" : "ANIQLIK:"} {Math.round((quizCorrectCount / (quizCorrectCount + quizIncorrectCount || 1)) * 100)}%
            </span>
          </h5>

          <div className="grid grid-cols-2 gap-3 mb-2">
            <div className="p-2 rounded-xl bg-emerald-500/5 border border-emerald-500/15 flex items-center justify-between flex-row">
              <span className="text-[9px] font-bold text-emerald-500/80 uppercase">{lang === "en" ? "Correct" : "Верно"}</span>
              <span className="text-sm font-black text-emerald-500 font-mono">{quizCorrectCount}</span>
            </div>
            <div className="p-2 rounded-xl bg-red-500/5 border border-red-500/15 flex items-center justify-between flex-row">
              <span className="text-[9px] font-bold text-red-500/80 uppercase">{lang === "en" ? "Incorrect" : "Неверно"}</span>
              <span className="text-sm font-black text-red-500 font-mono">{quizIncorrectCount}</span>
            </div>
          </div>

          {/* Visual graph / horizontal split progress bar */}
          {quizCorrectCount + quizIncorrectCount > 0 && (
            <div className="h-2 rounded-lg overflow-hidden flex bg-[var(--sur2)] border border-[var(--bd)]">
              <div className="bg-emerald-500 h-full transition-all duration-500" style={{ width: `${(quizCorrectCount / (quizCorrectCount + quizIncorrectCount)) * 100}%` }} title="Correct" />
              <div className="bg-red-500 h-full transition-all duration-500" style={{ width: `${(quizIncorrectCount / (quizCorrectCount + quizIncorrectCount)) * 100}%` }} title="Incorrect" />
            </div>
          )}
        </div>

        {/* Daily Clan Challenges */}
        <div className="mt-5 border-t border-[var(--bd)]/40 pt-4">
          <h5 className="text-[10px] font-black uppercase tracking-wider text-[var(--txt3)] font-mono mb-2.5 flex items-center justify-between font-sans">
            <span>{lang === "en" ? "Daily Clan Challenges" : lang === "ru" ? "Ежедневные Испытания" : "Kunlik Klan Vazifalari"}</span>
            <span className="text-[9px] font-mono text-amber-500/90 font-bold">{dailyClanChallenges.filter(c => c.done).length}/{dailyClanChallenges.length} {lang === "en" ? "COMPLETED" : lang === "ru" ? "ВЫПОЛНЕНО" : "BAJARILDI"}</span>
          </h5>

          <div className="space-y-1.5">
            {dailyClanChallenges.map((challenge) => {
              const title = lang === "uz" ? challenge.titleUz : lang === "ru" ? challenge.titleRu : challenge.titleEn;
              const desc = lang === "uz" ? challenge.descUz : lang === "ru" ? challenge.descRu : challenge.descEn;
              return (
                <div
                  key={challenge.id}
                  onClick={() => {
                    if (!challenge.done) {
                      setDailyClanChallenges(prev => prev.map(ch => ch.id === challenge.id ? { ...ch, done: true } : ch));
                      boostClan(selectedClanId);
                      const activeClanName = clanRatings.find(c => c.id === selectedClanId)?.name || "your clan";
                      setLiveToast({
                        sender: "Clan Herald",
                        channel: "challenges",
                        text: `Unlocked "${title}"! +150 XP added to ${activeClanName}!`
                      });
                      setTimeout(() => setLiveToast(null), 5000);
                    }
                  }}
                  className={`p-2 rounded-lg border transition-all cursor-pointer text-[10px] flex items-center gap-2 flex-row ${
                    challenge.done
                      ? "bg-amber-500/5 border-amber-500/25 opacity-70"
                      : "bg-[var(--sur2)]/30 border border-[var(--bd)] hover:border-[var(--bd2)]"
                  }`}
                >
                  <span className="shrink-0 select-none">
                    {challenge.done ? (
                      <Check className="text-amber-500" size={12} />
                    ) : (
                      <div className="h-1.5 w-1.5 rounded-full bg-[var(--txt3)] ml-1" />
                    )}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center gap-2 flex-row">
                      <p className={`font-bold text-[10px] truncate ${challenge.done ? "line-through text-amber-500/70" : "text-[var(--txt)]"}`}>
                        {title}
                      </p>
                      <span className="font-mono text-[8.5px] font-black text-amber-500 shrink-0">
                        +{challenge.rewardPoints} XP
                      </span>
                    </div>
                    <p className="text-[8.5px] text-[var(--txt3)] font-medium leading-tight truncate">
                      {desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Right Column: Chats loop matching friends/clans/teachers + Unread Alert Badges */}
      <div className="w-full">
        <PeerHotlineChat />
      </div>
    </motion.div>
  );
};
