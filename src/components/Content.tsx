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
import { useApp } from "./AppProvider";
import { AIChatSimulator } from "./AIChatSimulator";

export const Content: React.FC = () => {
  const { t, setIsAuthOpen, setAuthTab, lang } = useApp();

  // Tab state for Features section
  const [activeTab, setActiveTab] = useState<"ai" | "fields" | "lang" | "access" | "community">("ai");

  // Accordion multiple-open state for FAQs
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);
  const [faqSearch, setFaqSearch] = useState("");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<"all" | "platform" | "ai" | "pricing">("all");
  const [feedback, setFeedback] = useState<{[key: number]: "yes" | "no"}>({});

  // Community & Gamified Clans State
  const [selectedExerciseTab, setSelectedExerciseTab] = useState<number>(0);
  const [quizSelection, setQuizSelection] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [selectedClanId, setSelectedClanId] = useState<number>(1);
  const [clanRatings, setClanRatings] = useState([
    { id: 1, name: "Sovereign Minds", members: 24, xp: 48900, tag: "CS & Logic", weeklyProgress: [12000, 15000, 18000, 22000, 25000, 48900] },
    { id: 2, name: "Cosmic Devs", members: 19, xp: 45200, tag: "Astro Systems", weeklyProgress: [9000, 13000, 17000, 21000, 31000, 45200] },
    { id: 3, name: "Quantum Alchemists", members: 15, xp: 42100, tag: "Quantum Math", weeklyProgress: [15000, 19000, 22000, 28000, 34000, 42100] }
  ]);
  const [chatChannel, setChatChannel] = useState<"clan" | "friends" | "teacher">("clan");
  
  // Clan notifications state
  const [chatNotifications, setChatNotifications] = useState<{ clan: number; friends: number; teacher: number }>({
    clan: 2,
    friends: 1,
    teacher: 0
  });
  
  // Custom toast notification banner for live chats simulation
  const [liveToast, setLiveToast] = useState<{ sender: string; channel: string; text: string } | null>(null);

  const [clanMessages, setClanMessages] = useState<Array<{ sender: string; text: string; role: string; time: string }>>([
    { sender: "Sarah", text: "Yo everyone! Who solved today's hardcore orbit exercise?", role: "Member", time: "16:20" },
    { sender: "Dmitry", text: "Prof Albert posted a crazy formula! I got +250 XP for our clan!", role: "Co-Leader", time: "16:21" }
  ]);
  const [friendMessages, setFriendMessages] = useState<Array<{ sender: string; text: string; role: string; time: string }>>([
    { sender: "Javohir", text: "Hey! Let's build a new design course on MindSphere tonight.", role: "Friend", time: "15:10" },
    { sender: "Elbek", text: "Great idea! We earn 90% royalties together.", role: "You", time: "15:12" }
  ]);
  const [teacherMessages, setTeacherMessages] = useState<Array<{ sender: string; text: string; role: string; time: string }>>([
    { sender: "You", text: "Professor, I'm stuck on Step 4 of the neural network backpropagation.", role: "Student", time: "11:45" },
    { sender: "Dr. Elena (CS Head)", text: "Look closely at the partial derivative with respect to bias. Let me send a math note!", role: "Teacher", time: "11:50" }
  ]);
  const [newChatInput, setNewChatInput] = useState("");

  // Custom simulation variables
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("monthly");
  const [selectedUpgradePlan, setSelectedUpgradePlan] = useState<string | null>(null);
  const [isPremiumUser, setIsPremiumUser] = useState<boolean>(false);

  // Discord Nitro Customizer states
  const [nitroNick, setNitroNick] = useState("AlphaScholar");
  const [nitroColor, setNitroColor] = useState("#c084fc"); // purple default
  const [nitroRing, setNitroRing] = useState("cyber"); // cyber, neon, gold, none
  const [nitroTheme, setNitroTheme] = useState("nebula"); // nebula, obsidian, vaporwave, matrix
  const [nitroBadge, setNitroBadge] = useState("elite"); // elite, instructor, both, none

  // States for quiz stats and interactive clan challenges
  const [quizCorrectCount, setQuizCorrectCount] = useState<number>(5);
  const [quizIncorrectCount, setQuizIncorrectCount] = useState<number>(2);

  const [dailyClanChallenges, setDailyClanChallenges] = useState([
    { id: 1, titleEn: "Collaborative Code-Off", titleRu: "Командный Хакатон", titleUz: "Jamoaviy Kodlash", descEn: "Accumulate 1,500 Group XP together in lessons", descRu: "Наберите 1,500 XP всем кланом на уроках", descUz: "Klan bilan darslarda 1,500 XP to'plang", done: false, rewardPoints: 150 },
    { id: 2, titleEn: "Midnight Velocity Run", titleRu: "Полуночный Спринт", titleUz: "Yarim Tun Tezligi", descEn: "Keep study streak above 3 consecutive days", descRu: "Удерживайте ударный режим учебы более 3 дней", descUz: "O'qish zarbasini ketma-ket 3 kundan ko'p tuting", done: true, rewardPoints: 200 },
    { id: 3, titleEn: "Peer Review Exchange", titleRu: "Обзор Решений Коллег", titleUz: "Hamkasblar Tahlili", descEn: "Share a verified orbital theory insight in chat", descRu: "Поделитесь проверенной гипотезой в обсуждении", descUz: "Muhokamada tasdiqlangan nazariyani ulashing", done: false, rewardPoints: 100 }
  ]);

  const handleSendCommunityChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newChatInput.trim()) return;
    const msg = { sender: "You", text: newChatInput.trim(), role: "Active Peer", time: "Just now" };
    if (chatChannel === "clan") {
      setClanMessages((prev) => [...prev, msg]);
    } else if (chatChannel === "friends") {
      setFriendMessages((prev) => [...prev, msg]);
    } else {
      setTeacherMessages((prev) => [...prev, msg]);
    }
    setNewChatInput("");

    // Simulate an automatic response with unread chat notification simulation!
    setTimeout(() => {
      const channelNames = ["clan", "friends", "teacher"] as const;
      const randomChannel = channelNames[Math.floor(Math.random() * 3)];
      const senders = ["Zara", "Alex", "Prof. Sophia", "Dr. Victor"];
      const messagesSource = [
        "Incredible work! We just unlocked the bronze achievement award!",
        "Check out this extreme backpropagation flowchart in our cloud system.",
        "That calculus problem makes total sense once you apply orbital limits.",
        "Your weekly contribution was listed in the top bracket chart. Keep pushing!"
      ];
      const selectedSender = senders[Math.floor(Math.random() * senders.length)];
      const text = messagesSource[Math.floor(Math.random() * messagesSource.length)];

      // Trigger actual unread notification increase if not currently focusing on it
      if (randomChannel !== chatChannel) {
        setChatNotifications((prev) => ({
          ...prev,
          [randomChannel]: prev[randomChannel] + 1
        }));
      }

      // Add to list
      const receivedMsg = { sender: selectedSender, text, role: randomChannel === "teacher" ? "Mentor" : "Guild Member", time: "Just now" };
      if (randomChannel === "clan") {
        setClanMessages((prev) => [...prev, receivedMsg]);
      } else if (randomChannel === "friends") {
        setFriendMessages((prev) => [...prev, receivedMsg]);
      } else {
        setTeacherMessages((prev) => [...prev, receivedMsg]);
      }

      // Show real-time notification toast popups!
      setLiveToast({ sender: selectedSender, channel: randomChannel, text });
      setTimeout(() => setLiveToast(null), 5000);

    }, 2800);
  };

  const simulateIncomingMessageNotification = () => {
    const channelNames = ["clan", "friends", "teacher"] as const;
    const randomChannel = channelNames[Math.floor(Math.random() * 3)];
    const responses = [
      "Wait, did you see the new Clan Achievement Medals on our guild dashboard?",
      "Wow! Sovereign Minds is taking over the weekly XP chart race!",
      "Professor Albert posted a brand new mathematical research paper on Quantum dynamics.",
      "Today's logic challenge option B is correct! Let's boost our guild XP stat!"
    ];
    const senders = ["Javohir", "Sarah", "Dr. Elena", "Quantum Specialist"];
    const text = responses[Math.floor(Math.random() * responses.length)];
    const sender = senders[Math.floor(Math.random() * senders.length)];

    setChatNotifications((prev) => ({
      ...prev,
      [randomChannel]: prev[randomChannel] + 1
    }));

    const rxMsg = { sender, text, role: randomChannel === "teacher" ? "Educator" : "Peer", time: "Just now" };
    if (randomChannel === "clan") {
      setClanMessages((prev) => [...prev, rxMsg]);
    } else if (randomChannel === "friends") {
      setFriendMessages((prev) => [...prev, rxMsg]);
    } else {
      setTeacherMessages((prev) => [...prev, rxMsg]);
    }

    setLiveToast({ sender, channel: randomChannel, text });
    setTimeout(() => setLiveToast(null), 5000);
  };

  const boostClan = (clanId: number) => {
    setClanRatings((prev) =>
      prev.map((c) => (c.id === clanId ? { ...c, xp: c.xp + 150, weeklyProgress: c.weeklyProgress.map((w, idx) => idx === 5 ? w + 150 : w) } : c))
    );
  };

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const triggerSignUp = () => {
    setAuthTab("signup");
    setIsAuthOpen(true);
  };

  const launchLMS = () => {
    window.location.href = "https://mindsphere.com";
  };

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
      feedbackSuccess: "Спасибо за поддержку открытой кооперации!",
      categories: {
        all: "Все Категории",
        platform: "Платформа и Эко",
        ai: "ИИ и Обучение",
        pricing: "Лидерборды и Цены"
      }
    },
    uz: {
      searchPlaceholder: "Tez-tez beriladigan savollardan qidirish...",
      expandAll: "Hammasini ochish",
      collapseAll: "Hammasini yopish",
      noResults: "Mos keladigan savollar topilmadi. Boshqa so'z kiriting.",
      copied: "Nusxalandi!",
      copyLink: "Havolani nusxalash",
      feedbackTitle: "Ushbu javob foydali bo'ldimi?",
      feedbackYes: "Ha",
      feedbackNo: "Yo'q",
      feedbackSuccess: "Raqamli kooperativimizni qo'llab-quvvatlaganingiz uchun tashakkur!",
      categories: {
        all: "Barcha Savollar",
        platform: "Platforma va Eko",
        ai: "AI va Ta'lim",
        pricing: "Jamoalar va Narxlar"
      }
    }
  }[lang as "en" | "ru" | "uz"] || {
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
  };

  // Support deep linking on page load / hash change
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash && hash.startsWith("#faq-")) {
        const indexStr = hash.replace("#faq-", "");
        const index = parseInt(indexStr, 10);
        if (!isNaN(index)) {
          setOpenFaqs((prev) => prev.includes(index) ? prev : [...prev, index]);
          setTimeout(() => {
            const el = document.getElementById(`faq-item-${index}`);
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

  const handleCopyLink = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    const url = `${window.location.origin}${window.location.pathname}#faq-${index}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
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
            <span className="inline-block text-[9px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3 text-[var(--gradient)] bg-[var(--ac)]/10 text-[var(--ac)]">
              Core Architecture
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-black leading-tight tracking-tight text-[var(--txt)]">
              {t.benefits.title}
            </h2>
            <p className="text-sm text-[var(--txt2)] mt-3 leading-relaxed font-medium">
              {t.benefits.subtitle}
            </p>
          </div>

          {/* 6 Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            
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
            <p className="text-[11px] text-[var(--txt2)] mt-1 tracking-tight">Optional persistent identifiers validating study milestones across networks.</p>
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
                      <span className="text-[var(--ac)]">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={triggerSignUp}
                className="w-full py-2 rounded-xl border border-[var(--bd2)] bg-[var(--sur2)] hover:bg-[var(--sur)] text-[10px] font-bold text-[var(--txt)] transition-all cursor-pointer"
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
              <span className="absolute -top-3 right-5 px-2 py-0.5 rounded bg-grad-main text-white text-[7px] font-mono leading-none font-bold uppercase z-10">
                Most Popular
              </span>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-xs font-bold text-[var(--txt)] uppercase tracking-wider">{t.benefits.passes.proTitle}</h4>
                  <Sparkles size={11} className="text-[var(--ac)] animate-pulse" />
                </div>
                <div className="my-3 flex items-baseline gap-1">
                  <span className="text-2xl font-black font-display text-grad-main">{t.benefits.passes.proPrice}</span>
                  <span className="text-[10px] text-[var(--txt3)] font-semibold">/ month</span>
                </div>
                <p className="text-[10px] text-[var(--txt2)] mb-5 italic">{t.benefits.passes.proSub}</p>
                
                <ul className="space-y-2.5 text-[10px] text-[var(--txt2)] border-t border-[var(--bd)] pt-4 mb-6">
                  {t.benefits.passes.proFeatures.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-[var(--ac)]">✓</span>
                      <span className={i === 2 ? "font-bold text-[var(--txt)]" : ""}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={triggerSignUp}
                className="w-full py-2 rounded-xl bg-grad-main text-[10px] font-bold text-white transition-all cursor-pointer"
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
                      <span className="text-[var(--ac)]">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={triggerSignUp}
                className="w-full py-2 rounded-xl border border-[var(--bd2)] bg-[var(--sur2)] hover:bg-[var(--sur)] text-[10px] font-bold text-[var(--txt)] transition-all cursor-pointer"
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
            <span className="inline-block text-[9px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3 text-[var(--cyan)] bg-[var(--cyan)]/10">
              Interactive Blueprint
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-black leading-tight tracking-tight text-[var(--txt)]">
              {t.features.title}
            </h2>
            <p className="text-sm text-[var(--txt2)] mt-3 leading-relaxed font-medium">
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
                    : "bg-[var(--sur)] text-[var(--txt2)] border-[var(--bd)] hover:border-[var(--bd2)]"
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
                    <h3 className="text-lg md:text-xl font-display font-black leading-tight">
                      {t.features.ai.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-[var(--txt2)] font-medium">
                      {t.features.ai.desc}
                    </p>
                    <ul className="space-y-3 pt-2 text-xs text-[var(--txt2)] font-medium">
                      {[
                        t.features.ai.bullet1,
                        t.features.ai.bullet2,
                        t.features.ai.bullet3,
                        t.features.ai.bullet4,
                      ].map((bullet, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle size={14} className="text-[var(--ac)] shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Chat simulated console - Interactive loop */}
                  <AIChatSimulator lang={lang as any} />
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
                          whileHover={{ scale: 1.05, y: -2, borderColor: "rgba(124, 111, 255, 0.4)", boxShadow: "0 8px 18px rgba(124, 111, 255, 0.12)" }}
                          transition={{ type: "spring", stiffness: 400, damping: 20 }}
                          className="p-3 rounded-xl border border-[var(--bd)] bg-[var(--sur)] flex flex-col justify-between h-[80px] cursor-pointer"
                        >
                          <domain.icon size={18} className="text-[var(--ac)]" />
                          <div>
                            <h4 className="text-[10px] font-bold text-[var(--txt)] leading-tight line-clamp-1">
                              {domainName}
                            </h4>
                            <p className="text-[8px] text-[var(--txt3)] font-mono leading-none mt-1 font-bold">
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
                    <h3 className="text-lg md:text-xl font-display font-black leading-tight">
                      {t.features.lang.title}
                    </h3>
                    
                    {/* Phase 1 */}
                    <div className="p-4 rounded-xl border border-[var(--green)]/20 bg-[var(--green)]/5">
                      <span className="text-[8px] font-mono leading-none font-bold text-white bg-[var(--green)] px-2 py-0.5 rounded uppercase">
                        {t.features.lang.p1Title}
                      </span>
                      <p className="text-[11px] leading-relaxed text-[var(--txt2)] mt-2 font-semibold">
                        {t.features.lang.p1Desc}
                      </p>
                    </div>

                    {/* Phase 2 */}
                    <div className="p-4 rounded-xl border border-[var(--bd)] bg-[var(--sur2)]">
                      <span className="text-[8px] font-mono leading-none font-bold text-white bg-[var(--ac)] px-2 py-0.5 rounded uppercase">
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
                      <h4 className="text-[10px] font-mono font-bold tracking-wider uppercase text-[var(--txt3)]">
                        {t.features.lang.statTitle}
                      </h4>
                      <span className="text-4xl font-display font-black text-grad-full block py-2">
                        142
                      </span>
                    </div>

                    {/* Roadmap bars */}
                    <div className="space-y-3">
                      <h5 className="text-[9px] font-mono font-bold text-[var(--txt3)] uppercase tracking-wider">
                        {t.features.lang.roadmapTitle}
                      </h5>
                      <div className="space-y-2">
                        {/* 2025: 3 */}
                        <div className="space-y-1">
                          <div className="flex justify-between text-[8px] font-mono text-[var(--txt2)]">
                            <span>2025</span>
                            <span>3 Languages (Live)</span>
                          </div>
                          <div className="h-1.5 bg-[var(--sur2)] rounded-full overflow-hidden">
                            <div className="h-full bg-[var(--green)] w-[5%] rounded-full" />
                          </div>
                        </div>

                        {/* 2026: ~20 */}
                        <div className="space-y-1">
                          <div className="flex justify-between text-[8px] font-mono text-[var(--txt2)]">
                            <span>2026</span>
                            <span>~20 Languages (Systemic)</span>
                          </div>
                          <div className="h-1.5 bg-[var(--sur2)] rounded-full overflow-hidden">
                            <div className="h-full bg-[var(--ac)] w-[30%] rounded-full" />
                          </div>
                        </div>

                        {/* 2027: 142 */}
                        <div className="space-y-1">
                          <div className="flex justify-between text-[8px] font-mono text-[var(--txt2)]">
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
                    <div key={i} className="p-5 rounded-xl border border-[var(--bd)] bg-[var(--sur)] flex items-start gap-3">
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
                      <div className="flex items-center gap-2 mb-3">
                        <Trophy className="text-[var(--cyan)]" size={16} />
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
                              className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 text-xs ${
                                isSelected 
                                  ? "border-[var(--ac)] bg-[var(--ac)]/10 shadow-sm" 
                                  : "border-[var(--bd)] bg-[var(--sur2)]/30 hover:border-[var(--bd2)]"
                              }`}
                            >
                              <div className="flex items-center gap-2">
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
                              <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                                <span className="text-[10px] font-mono font-black text-[var(--ac)]">{clan.xp} XP</span>
                                <button
                                  onClick={() => boostClan(clan.id)}
                                  title="Boost Clan!"
                                  className="p-1 rounded bg-[var(--ac)]/10 text-[var(--ac)] hover:bg-[var(--ac)] hover:text-white transition-all duration-200 font-bold active:scale-[0.85] text-[8px]"
                                >
                                  ⚡ +150
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* NEW SECTION A: Clan Achievement Medals cabinet */}
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
                            { name: "Alchemist Pro", desc: "Discovered a hidden spiral prime sequence algorithm.", color: "border-yellow-500/30 text-yellow-500 bg-yellow-500/5" },
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

                      {/* NEW SECTION B: Clan Weekly XP Race Chart (Dynamic Visual Progress Chart) */}
                      <div className="mt-4 border-t border-[var(--bd)]/40 pt-4">
                        <h5 className="text-[10px] font-black uppercase tracking-wider text-[var(--txt3)] font-mono mb-2.5 flex items-center justify-between">
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
                                  <div className="flex justify-between items-center">
                                    <span className={`font-bold text-[10px] ${isSelected ? "text-[var(--ac)]" : "text-[var(--txt)]"}`}>
                                      {clan.name} {isSelected && " (Active)"}
                                    </span>
                                  <span className="font-mono text-[8px] font-black text-[var(--ac)]">{clan.xp} XP</span>
                                </div>
                                <div className="h-2 bg-[var(--sur2)] rounded-full overflow-hidden relative">
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

                    <div className="p-3 rounded-lg border border-dashed border-[var(--ac)]/45 bg-[var(--ac)]/5 text-[9px] font-mono font-extrabold text-[var(--ac)] text-center animate-pulse uppercase tracking-wider">
                      {lang === "uz" ? "Navbatdagi turnir: 15 soatdan so'ng" : lang === "ru" ? "След. турнир через: 15 часов" : "Next Guild Tournament In: 15 Hours"}
                    </div>
                  </div>

                  {/* Center Column: Daily Hardcore Exercises quiz */}
                  <div className="p-5 rounded-2xl border border-[var(--bd)] bg-[var(--sur)] hover:border-[var(--bd2)] transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Sparkles className="text-emerald-500" size={14} />
                        <h3 className="text-xs font-black uppercase tracking-wider text-emerald-500 font-mono">
                          {lang === "uz" ? "Kunlik murakkab mashq" : lang === "ru" ? "Сложные Задачи" : "Administrator Hardcore Match"}
                        </h3>
                      </div>
                      <h4 className="text-sm font-bold text-[var(--txt)] flex items-center justify-between">
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
                        <div className="border-b border-[var(--bd)]/40 pb-2 flex items-center justify-between">
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
                                className={`w-full p-2 rounded-lg border text-[10px] font-bold text-left transition-all ${
                                  quizSubmitted
                                    ? opt.correct
                                      ? "bg-emerald-500/10 border-emerald-500 text-emerald-500"
                                      : isSelected
                                      ? "bg-red-500/10 border-red-500 text-red-500"
                                      : "bg-transparent border-[var(--bd)] text-[var(--txt3)]"
                                    : isSelected
                                    ? "bg-[var(--ac)]/15 border-[var(--ac)] text-[var(--txt)]"
                                    : "bg-[var(--sur)] border-[var(--bd)] text-[var(--txt2)] hover:border-[var(--ac)]/55"
                                }`}
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
                        <div className="p-2.5 rounded-lg text-center bg-emerald-500/10 border border-emerald-500/20 text-[9.5px] font-bold text-emerald-500 animate-fadeIn">
                          {quizSelection === 2 
                            ? (lang === "uz" ? "Correct answer! +250 XP added to clan!" : lang === "ru" ? "Правильно! Зачислено +250 XP гильдии." : "Correct answer. +250 XP awarded to your clan.")
                            : (lang === "uz" ? "Incorrect! Try again to learn!" : lang === "ru" ? "Неверно, но обучение бесплатно! Попробуйте еще раз." : "Incorrect, but trials are free! Try again.")}
                          <button
                            onClick={() => {
                              setQuizSubmitted(false);
                              setQuizSelection(null);
                            }}
                            className="block mx-auto mt-1.5 underline text-[8.5px] font-mono text-emerald-600 hover:text-emerald-500 uppercase select-none tracking-tight font-extrabold cursor-pointer"
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
                        <div className="p-2 rounded-xl bg-emerald-500/5 border border-emerald-500/15 flex items-center justify-between">
                          <span className="text-[9px] font-bold text-emerald-500/80 uppercase">{lang === "en" ? "Correct" : "Верно"}</span>
                          <span className="text-sm font-black text-emerald-500 font-mono">{quizCorrectCount}</span>
                        </div>
                        <div className="p-2 rounded-xl bg-red-500/5 border border-red-500/15 flex items-center justify-between">
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
                      <h5 className="text-[10px] font-black uppercase tracking-wider text-[var(--txt3)] font-mono mb-2.5 flex items-center justify-between">
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
                                  // Complete physical state update
                                  setDailyClanChallenges(prev => prev.map(ch => ch.id === challenge.id ? { ...ch, done: true } : ch));
                                  // Add XP reward to currently active guild!
                                  boostClan(selectedClanId);
                                  // Show toast notification
                                  const activeClanName = clanRatings.find(c => c.id === selectedClanId)?.name || "your clan";
                                  setLiveToast({
                                    sender: "Clan Herald",
                                    channel: "challenges",
                                    text: `Unlocked "${title}"! +150 XP added to ${activeClanName}!`
                                  });
                                  setTimeout(() => setLiveToast(null), 5000);
                                }
                              }}
                              className={`p-2 rounded-lg border transition-all cursor-pointer text-[10px] flex items-center gap-2 ${
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
                                <div className="flex justify-between items-center gap-2">
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
                  <div className="p-5 rounded-2xl border border-[var(--bd)] bg-[var(--sur)] hover:border-[var(--bd2)] transition-all flex flex-col justify-between h-auto">
                    <div className="flex flex-col h-full justify-between">
                      {/* Section Title */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <MessageSquare className="text-[var(--ac)]" size={14} />
                          <h3 className="text-xs font-black uppercase tracking-wider text-[var(--ac)] font-mono">
                            {lang === "uz" ? "Hamkorlik muloqoti" : lang === "ru" ? "Прямое общение" : "Peer-To-Peer Hotline"}
                          </h3>
                        </div>

                        {/* Messenger Channel selector tabs with Unread notification badges */}
                        <div className="grid grid-cols-3 gap-1 bg-[var(--sur2)] p-0.5 rounded-lg border border-[var(--bd)] mb-3 text-[9px] font-bold select-none text-center">
                          <button
                            onClick={() => {
                              setChatChannel("clan");
                              setChatNotifications((prev) => ({ ...prev, clan: 0 }));
                            }}
                            className={`py-1 rounded cursor-pointer transition-all flex items-center justify-center gap-1 ${
                              chatChannel === "clan" ? "bg-[var(--sur)] text-[var(--ac)] shadow-sm font-black" : "text-[var(--txt3)] hover:text-[var(--txt)]"
                            }`}
                          >
                            <span>Clan</span>
                            {chatNotifications.clan > 0 && (
                              <span className="px-1 py-0.2 rounded-full bg-red-500 text-white text-[7px] font-bold font-mono animate-pulse shrink-0">
                                {chatNotifications.clan}
                              </span>
                            )}
                          </button>
                          
                          <button
                            onClick={() => {
                              setChatChannel("friends");
                              setChatNotifications((prev) => ({ ...prev, friends: 0 }));
                            }}
                            className={`py-1 rounded cursor-pointer transition-all flex items-center justify-center gap-1 ${
                              chatChannel === "friends" ? "bg-[var(--sur)] text-[var(--ac)] shadow-sm font-black" : "text-[var(--txt3)] hover:text-[var(--txt)]"
                            }`}
                          >
                            <span>Friends</span>
                            {chatNotifications.friends > 0 && (
                              <span className="px-1 py-0.2 rounded-full bg-red-500 text-white text-[7px] font-bold font-mono animate-pulse shrink-0">
                                {chatNotifications.friends}
                              </span>
                            )}
                          </button>
                          
                          <button
                            onClick={() => {
                              setChatChannel("teacher");
                              setChatNotifications((prev) => ({ ...prev, teacher: 0 }));
                            }}
                            className={`py-1 rounded cursor-pointer transition-all flex items-center justify-center gap-1 ${
                              chatChannel === "teacher" ? "bg-[var(--sur)] text-[var(--ac)] shadow-sm font-black" : "text-[var(--txt3)] hover:text-[var(--txt)]"
                            }`}
                          >
                            <span>Teacher</span>
                            {chatNotifications.teacher > 0 && (
                              <span className="px-1 py-0.2 rounded-full bg-red-500 text-white text-[7px] font-bold font-mono animate-pulse shrink-0">
                                {chatNotifications.teacher}
                              </span>
                            )}
                          </button>
                        </div>

                        {/* Chat queue display */}
                        <div className="space-y-3 h-[280px] sm:h-[350px] lg:h-[385px] overflow-y-auto mb-3.5 p-2 border border-[var(--bd)]/40 rounded-xl bg-[var(--sur2)]/15 text-[10px]">
                          {(chatChannel === "clan" ? clanMessages : chatChannel === "friends" ? friendMessages : teacherMessages).map((m, i) => {
                            const isYou = m.sender === "You";
                            return (
                              <div key={i} className={`flex flex-col ${isYou ? "items-end" : "items-start"} w-full animate-fadeIn`}>
                                <div className={`px-2.5 py-1.5 rounded-xl ${
                                  isYou 
                                    ? "bg-[var(--ac)] text-white font-semibold rounded-tr-none" 
                                    : "bg-[var(--sur2)] border border-[var(--bd)] text-[var(--txt)] rounded-tl-none font-medium"
                                } max-w-[85%] leading-normal`}>
                                  <p>{m.text}</p>
                                </div>
                                <span className="text-[7px] text-[var(--txt3)] font-mono mt-0.5 uppercase tracking-tight">
                                  {m.sender} ({m.role}) · {m.time}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Input Submit */}
                      <div>
                        <form onSubmit={handleSendCommunityChat} className="flex items-center gap-1.5">
                          <input
                            type="text"
                            value={newChatInput}
                            onChange={(e) => setNewChatInput(e.target.value)}
                            placeholder={
                              chatChannel === "clan"
                                ? (lang === "uz" ? "Klanga xabar yozish..." : lang === "ru" ? "Написать в клан..." : "Talk in Clan Lounge...")
                                : chatChannel === "friends"
                                ? (lang === "uz" ? "Do'stlarga yozish..." : lang === "ru" ? "Написать другу..." : "DM friends direct...")
                                : (lang === "uz" ? "O'qituvchiga murojaat..." : lang === "ru" ? "Написать преподавателю..." : "Ask your professor...")
                            }
                            className="flex-1 bg-[var(--sur)] border border-[var(--bd)] rounded-lg px-2.5 py-1.5 text-[10px] text-[var(--txt)] focus:outline-none focus:border-[var(--ac)]"
                          />
                          <button
                            type="submit"
                            disabled={!newChatInput.trim()}
                            className={`px-3 py-1.5 rounded-lg text-[9.5px] font-black uppercase text-white transition-all ${
                              newChatInput.trim() ? "bg-[var(--ac)] cursor-pointer hover:opacity-90" : "bg-[var(--sur2)] text-[var(--txt3)] border border-[var(--bd)] cursor-not-allowed"
                            }`}
                          >
                            Send
                          </button>
                        </form>
                      </div>

                    </div>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* ======================================================================
          PRICING SECTION (id="pricing")
          ====================================================================== */}
      <section id="pricing" className="py-20 bg-[var(--bg)] border-b border-[var(--bd)] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block text-[9px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3 text-[var(--ac)] bg-[var(--ac)]/10">
              {t.checkout.pricingBadge}
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-black leading-tight tracking-tight text-[var(--txt)]">
              {t.checkout.pricingTitle}
            </h2>
            <p className="text-sm text-[var(--txt2)] mt-3 leading-relaxed font-medium">
              {t.checkout.pricingSubtitle}
            </p>
          </div>

          {/* Interactive Billing Toggle */}
          <div className="flex justify-center items-center gap-3.5 mb-12 select-none">
            <span className={`text-xs font-bold transition-colors ${billingCycle === "monthly" ? "text-[var(--ac)]" : "text-[var(--txt3)]"}`}>
              {t.checkout.monthly}
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "annually" : "monthly")}
              className="w-12 h-6 rounded-full bg-[var(--sur2)] border border-[var(--bd)] relative flex items-center transition-all px-0.5 cursor-pointer"
            >
              <div className={`w-5 h-5 rounded-full bg-[var(--ac)] transition-transform ${billingCycle === "annually" ? "translate-x-6" : ""}`} />
            </button>
            <span className={`text-xs font-bold transition-colors flex items-center gap-1.5 ${billingCycle === "annually" ? "text-[var(--ac)]" : "text-[var(--txt3)]"}`}>
              <span>{t.checkout.annually}</span>
              <span className="px-1.5 py-0.5 rounded text-[8px] font-mono text-white bg-emerald-500 font-bold uppercase tracking-wider shrink-0 animate-bounce">
                20% OFF
              </span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-10">
            
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
                  <span className="text-xs text-[var(--txt3)] font-semibold">/ {t.checkout.forever}</span>
                </div>
                <p className="text-[10px] text-[var(--txt2)] mb-5 font-medium leading-normal">
                  {t.checkout.freeTierDesc}
                </p>

                <ul className="space-y-3 text-[10px] text-[var(--txt2)] border-t border-[var(--bd)] pt-4 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>{t.pricing.c1Features[0]}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>Basic AI tutor access (Gemini)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>Standard Community Clans access</span>
                  </li>
                  <li className="flex items-center gap-2 text-[var(--txt3)] border-t border-[var(--bd)]/30 pt-2 mt-2">
                    <span className="font-bold">✗</span>
                    <span className="line-through">Custom interactive sandbox playgrounds</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => {
                  setSelectedUpgradePlan("Free Standard");
                }}
                className="w-full py-2 rounded-xl bg-[var(--sur2)] hover:bg-[var(--sur)] border border-[var(--bd2)] text-[10px] font-black uppercase text-[var(--txt)] transition-all cursor-pointer text-center"
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
              <div className="absolute -top-3 right-4 px-2 py-0.5 rounded bg-grad-main text-white text-[7.5px] font-black uppercase tracking-wider font-mono z-10 animate-pulse">
                Best Booster
              </div>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[9px] font-mono uppercase bg-[var(--ac)]/10 text-[var(--ac)] px-2 py-0.5 rounded font-black">
                    AI Premium
                  </span>
                </div>
                <h3 className="text-sm font-bold font-display text-[var(--txt)]">AI Learner Pro</h3>
                <div className="my-3 flex items-baseline gap-1">
                  <span className="text-2xl font-black font-display text-[var(--ac)]">
                    {billingCycle === "monthly" ? "$5.99" : "$4.49"}
                  </span>
                  <span className="text-xs text-[var(--txt3)] font-semibold font-mono">/ mo</span>
                </div>
                <p className="text-[10px] text-[var(--txt2)] mb-5 font-medium leading-normal">
                  Unlock advanced reasoning AI models for hyper-speed learning.
                </p>

                <ul className="space-y-3 text-[10px] text-[var(--txt2)] border-t border-[var(--bd)] pt-4 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-[var(--ac)] font-bold">✓</span>
                    <span className="font-bold text-[var(--txt)]">Unlimited Deep-Reasoning AI Tutor</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[var(--ac)] font-bold">✓</span>
                    <span>Audio Speech voiceover narration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[var(--ac)] font-bold">✓</span>
                    <span>Advanced logic & coding sandbox</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[var(--ac)] font-bold">✓</span>
                    <span>Exclusive Supporter profile card badge</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => setSelectedUpgradePlan("AI Learner Pro")}
                className="w-full py-2 rounded-xl bg-grad-main text-[10px] font-black uppercase text-white transition-all cursor-pointer shadow-sm text-center font-bold"
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
                  <span className="text-xs text-[var(--txt3)] font-semibold font-mono font-bold">/ mo</span>
                </div>
                <p className="text-[10px] text-[var(--txt2)] mb-5 font-medium leading-normal">
                  {lang === "uz" ? "Yillik tarifda darslar uchun 10% chegirma beriladi" : lang === "ru" ? "При годовой подписке скидка 10% на все платные курсы" : "Get 10% discount on every course platform-wide on annual option!"}
                </p>

                <ul className="space-y-3 text-[10px] text-[var(--txt2)] border-t border-[var(--bd)] pt-4 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-[var(--ac)] font-bold">✓</span>
                    <span>Publish infinite paid path streams</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[var(--ac)] font-bold">✓</span>
                    <span className="font-bold text-[var(--txt)]">Annual Special: 10% Discount logic</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[var(--ac)] font-bold">✓</span>
                    <span>AI Automatic Syllabus generator</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[var(--ac)] font-bold">✓</span>
                    <span>Deep statistics and grading panels</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => setSelectedUpgradePlan("Creator & Teacher")}
                className="w-full py-2 rounded-xl bg-[var(--sur2)] hover:bg-[var(--sur)] border border-[var(--bd2)] text-[10px] font-black uppercase text-[var(--txt)] transition-all cursor-pointer text-center"
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
                <span className="text-[9px] translate-x-1.5 -translate-y-1.5 rotate-45 font-black text-indigo-400">NITRO</span>
              </div>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[9px] font-mono uppercase bg-indigo-500/15 border border-indigo-500/30 px-2 py-0.5 rounded font-black text-indigo-400">
                    Elite
                  </span>
                </div>
                <h3 className="text-sm font-bold font-display text-grad-main">{t.pricing.c3Title}</h3>
                <div className="my-3 flex items-baseline gap-1">
                  <span className="text-2xl font-black font-display text-[var(--txt)]">
                    {billingCycle === "monthly" ? "$43.00" : "$32.25"}
                  </span>
                  <span className="text-xs text-[var(--txt3)] font-semibold font-mono">/ mo</span>
                </div>
                <p className="text-[10px] text-[var(--txt2)] mb-5 font-medium leading-normal">
                  {lang === "uz" ? "Discord Nitro uslubi, avatar bezaklari va doimiy 25% chegirma!" : lang === "ru" ? "Discord Nitro стиль, яркие аватары и постоянная 25% скидка!" : "Includes elite custom name glows and 25% course discount logic."}
                </p>

                <ul className="space-y-3 text-[10px] text-[var(--txt2)] border-t border-[var(--bd)] pt-4 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-indigo-500 font-bold">✓</span>
                    <span className="font-bold text-[var(--txt)]">Platform-wide 25% Course Discount</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-indigo-500 font-bold">✓</span>
                    <span>Neon Nickname & Discord Nitro glowing glows</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-indigo-500 font-bold">✓</span>
                    <span>Custom cyber avatar rings and profile decorations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-indigo-500 font-bold">✓</span>
                    <span>High-tier server priority streaming limits</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => {
                  setSelectedUpgradePlan("Elite Pass");
                  setIsPremiumUser(true);
                }}
                className="w-full py-2 rounded-xl bg-grad-main text-[10px] font-black uppercase text-white transition-all cursor-pointer text-center font-bold"
              >
                {lang === "en" ? "Get Elite Pass" : "Получить Elite Pass"}
              </button>
            </motion.div>

          </div>

          {/* Pricing Bottom Notice container */}
          <div className="max-w-2xl mx-auto p-4 rounded-xl border border-[var(--bd)] bg-[var(--sur)] flex items-start gap-2.5 text-[10px] leading-relaxed select-none mb-14">
            <Sparkles className="text-amber-500 shrink-0 mt-0.5" size={12} />
            <p className="text-[var(--txt2)] font-medium">
              We charge 0% on free education pathways. MindSphere Premium supports host bandwith, localized translation modules, and unhindered server hosting fees.
            </p>
          </div>

          {/* ======================================================================
              INTERACTIVE DISCORD NITRO CUSTOMIZER PLAYGROUND (Requested)
              ====================================================================== */}
          <div className="max-w-4xl mx-auto rounded-3xl border border-indigo-500/20 bg-gradient-to-r from-indigo-950/15 to-purple-950/15 p-6 backdrop-blur-sm shadow-xl select-none relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 pointer-events-none opacity-10">
              <span className="text-9xl font-display font-black tracking-normal">NITRO</span>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
              
              {/* Left Panel: Settings Controls */}
              <div className="flex-1 w-full space-y-5">
                <div>
                  <span className="inline-block text-[8px] font-mono font-bold tracking-widest text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-full mb-1.5 uppercase">
                    {lang === "uz" ? "Customizer boshqaruvi" : lang === "ru" ? "Студия настроек" : "Customizer Control"}
                  </span>
                  <h3 className="text-base font-bold font-display text-[var(--txt)] flex items-center gap-1.5">
                    <span>
                      {lang === "uz" ? "Elite Pass & Nitro-Stil Shaxsiy Sozlamalar" : lang === "ru" ? "Студия кастомизации Elite Pass & Nitro-стиль" : "Elite Pass & Discord Nitro Customs Playground"}
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
                    <div className="flex items-center gap-2">
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
                          className={`py-1 rounded-lg border text-[8px] font-mono font-bold uppercase transition-all ${nitroTheme === item.value ? "bg-indigo-500/25 border-indigo-500 text-white" : "bg-[var(--sur2)] text-[var(--txt2)] border-[var(--bd)] hover:bg-[var(--sur)]"}`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Subtext info */}
                <div className="flex gap-2 bg-indigo-500/5 rounded-xl p-3 border border-indigo-500/10 text-[9px] text-indigo-400 font-semibold leading-relaxed">
                  <span className="text-xs font-mono select-none shrink-0 font-bold">ℹ</span>
                  <p>
                    {lang === "uz" ? "Ushbu sozlamalar faol Elite Pass foydalanuvchilariga mindsphere.org platformasida barcha chatlarda va peshqadamlar jadvalida avtomatik porlashini ta'minlaydi!"
                      : lang === "ru" ? "Эти настройки предоставляют владельцам Elite Pass автоматическое свечение никнеймов в общих чатах на mindsphere.org, а также во всех рейтинговых таблицах!"
                      : "These custom styles are applied automatically for Elite Pass owners in all community chats, discussion boards, and scoreboard leaderboards platform-wide!"}
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
                  <div className="absolute top-4 right-4 flex gap-1 items-center">
                    {nitroBadge !== "none" && (
                      <span className="text-[7px] font-mono select-none px-1.5 py-0.5 rounded-full bg-indigo-500 text-white font-black uppercase tracking-wider animate-pulse flex items-center gap-0.5 shadow">
                        <span>✦</span>ELITE
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
                        {lang === "uz" ? "ELITE CLASS O'QUVCHISI" : lang === "ru" ? "ЭЛИТНЫЙ НАБЛЮДАТЕЛЬ" : "ELITE CLASS SCHOLAR"}
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

          </div>

        </div>
      </section>

      {/* ======================================================================
          GUIDE SECTION (id="guide")
          ====================================================================== */}
      <section id="guide" className="py-20 bg-[var(--bg2)]/35 border-b border-[var(--bd)] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-[9px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3 text-[var(--green)] bg-[var(--green)]/10">
              User Path Step
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-black leading-tight tracking-tight text-[var(--txt)]">
              {t.guide.title}
            </h2>
            <p className="text-sm text-[var(--txt2)] mt-3 leading-relaxed font-medium">
              {t.guide.subtitle}
            </p>
          </div>

          {/* 3 Steps List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mb-16">
            
            {/* Step 1 */}
            <div className="space-y-4">
              <span className="text-4xl font-display font-black text-grad-main leading-none block">
                {t.guide.step1}
              </span>
              <h3 className="text-base font-bold font-sans text-[var(--txt)]">
                {t.guide.step1Title}
              </h3>
              <p className="text-xs text-[var(--txt2)] leading-relaxed font-medium">
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
              <p className="text-xs text-[var(--txt2)] leading-relaxed font-medium">
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
              <p className="text-xs text-[var(--txt2)] leading-relaxed font-medium">
                {t.guide.step3Desc}
              </p>
            </div>

          </div>

          {/* Ecosystem Explainer Cards (Contrasting Org vs Com parameters) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            
            {/* Org Guide Portal */}
            <div className="p-6 rounded-2xl border border-[var(--bd)] bg-[var(--sur)] flex flex-col justify-between h-[160px]">
              <div>
                <h4 className="font-display font-bold text-sm tracking-tight text-[var(--txt)]">
                  {t.guide.portalTitle}
                </h4>
                <p className="text-[10px] text-[var(--txt2)] leading-relaxed mt-2 font-medium">
                  {t.guide.portalDesc}
                </p>
              </div>
              <span className="text-[9px] font-mono leading-none font-bold text-[var(--ac2)]">
                Active State
              </span>
            </div>

            {/* Com actual LMS console launcher trigger */}
            <div className="p-6 rounded-2xl border border-[var(--ac)] bg-[var(--sur)] flex flex-col justify-between h-[160px] shadow-glow">
              <div>
                <h4 className="font-display font-bold text-sm tracking-tight text-[var(--txt)]">
                  {t.guide.lmsTitle}
                </h4>
                <p className="text-[10px] text-[var(--txt2)] leading-relaxed mt-2 font-medium">
                  {t.guide.lmsDesc}
                </p>
              </div>
              
              <button
                onClick={launchLMS}
                className="w-full mt-4 py-2 font-bold text-[10px] bg-grad-green text-white rounded-xl shadow active:scale-[0.98] transition-all flex items-center justify-center gap-1 cursor-pointer"
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
      <section id="faq" className="py-20 bg-[var(--bg)] border-b border-[var(--bd)] scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block text-[9px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3 text-[var(--cyan)] bg-[var(--cyan)]/10">
              Common Questions
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-black leading-tight tracking-tight text-[var(--txt)]">
              {t.faq.title}
            </h2>
            <p className="text-sm text-[var(--txt2)] mt-3 leading-relaxed font-medium">
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
                placeholder={localFAQTranslations.searchPlaceholder}
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
                onClick={() => setOpenFaqs([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])}
                className="px-4 py-2 border border-[var(--bd)] bg-[var(--sur)] hover:border-[var(--bd2)] text-[10px] font-bold text-[var(--txt)] rounded-full transition-all cursor-pointer hover:bg-[var(--sur2)]/30 active:scale-[0.97]"
              >
                {localFAQTranslations.expandAll}
              </button>
              <button
                onClick={() => setOpenFaqs([])}
                className="px-4 py-2 border border-[var(--bd)] bg-[var(--sur)] hover:border-[var(--bd2)] text-[10px] font-bold text-[var(--txt)] rounded-full transition-all cursor-pointer hover:bg-[var(--sur2)]/30 active:scale-[0.97]"
              >
                {localFAQTranslations.collapseAll}
              </button>
            </div>
          </div>

          {/* FAQ Category Selector pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 select-none">
            {(["all", "platform", "ai", "pricing"] as const).map((cat) => {
              const isActive = selectedCategory === cat;
              const catLabel = localFAQTranslations.categories[cat];
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
                  <div className="flex items-center gap-1.5">
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
              ];

              const getCategory = (idx: number): "platform" | "ai" | "pricing" => {
                if ([0, 3, 7, 8].includes(idx)) return "platform";
                if ([1, 6, 9].includes(idx)) return "ai";
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
                              
                              <div className="flex items-center gap-3 shrink-0">
                                {/* Inline Copy Link Solution (Doesn't clip under overflow-hidden) */}
                                <button
                                  onClick={(e) => handleCopyLink(e, idx)}
                                  title={localFAQTranslations.copyLink}
                                  className={`h-8 rounded-lg border transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer text-[9.5px] sm:text-[10px] font-bold tracking-wide select-none shrink-0 ${
                                    isCopied
                                      ? "bg-[var(--green)]/15 border-[var(--green)]/40 text-[var(--green)] shadow-[0_0_12px_rgba(34,197,94,0.15)] w-[82px] sm:w-[102px]"
                                      : "bg-[var(--sur2)] border-[var(--bd)] text-[var(--txt3)] hover:text-[var(--ac)] hover:border-[var(--ac)]/45 w-[82px] sm:w-[102px]"
                                  }`}
                                >
                                  {isCopied ? (
                                    <>
                                      <Check size={10} className="stroke-[3.5px] animate-bounce" />
                                      <span className="font-sans font-bold">{localFAQTranslations.copied}</span>
                                    </>
                                  ) : (
                                    <>
                                      <Copy size={10} />
                                      <span className="hidden sm:inline font-sans font-bold text-[var(--txt3)]">{localFAQTranslations.copyLink}</span>
                                    </>
                                  )}
                                </button>

                                <ChevronDown
                                  size={14}
                                  className={`text-[var(--txt3)] transition-transform duration-300 ${isOpen ? "rotate-180 text-[var(--ac)]" : ""}`}
                                />
                              </div>
                            </div>

                            {/* Animated Accordion Height with AnimatePresence */}
                            <AnimatePresence initial={false}>
                              {isOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.25, ease: "easeInOut" }}
                                  className="overflow-hidden"
                                >
                                  <div className="px-5 pb-5 pt-1 text-[11px] md:text-[12px] leading-relaxed text-[var(--txt2)] border-t border-[var(--bd)]/40 font-medium">
                                    <p>{item.a}</p>

                                    {/* FAQ Helpful Verification Widget */}
                                    <div className="mt-4 pt-4 border-t border-[var(--bd)]/20 flex flex-col sm:flex-row items-center justify-between gap-3 bg-[var(--sur2)]/10 p-3 rounded-xl">
                                      <span className="text-[10px] md:text-[11px] font-bold text-[var(--txt2)] flex items-center gap-1.5 select-none">
                                        {localFAQTranslations.feedbackTitle}
                                      </span>
                                      <div className="flex items-center gap-2 select-none">
                                        {feedback[idx] ? (
                                          <motion.p
                                            initial={{ opacity: 0, x: 10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="text-[9px] font-bold text-[var(--green)] flex items-center gap-1.5 bg-[var(--green)]/10 px-3 py-1 rounded-full border border-[var(--green)]/30"
                                          >
                                            💚 {localFAQTranslations.feedbackSuccess}
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
                                              👍 {localFAQTranslations.feedbackYes}
                                            </button>
                                            <button
                                              onClick={(e) => {
                                                e.stopPropagation();
                                                setFeedback((prev) => ({ ...prev, [idx]: "no" }));
                                              }}
                                              className="px-3 py-1.5 rounded-lg border border-[var(--bd)] bg-[var(--sur)] text-[10px] font-bold text-[var(--txt)] flex items-center gap-1 cursor-pointer hover:border-red-500/50 hover:text-red-500 hover:bg-red-500/10 transition-all select-none active:scale-[0.95]"
                                            >
                                              👎 {localFAQTranslations.feedbackNo}
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
                      {localFAQTranslations.noResults}
                    </p>
                  </div>
                );
              }
            })()}
          </div>

        </div>
      </section>

      {/* ======================================================================
          CTA SECTION (Large display segment with space-orbs)
          ====================================================================== */}
      <section className="relative py-24 overflow-hidden border-b border-[var(--bd)] flex flex-col items-center justify-center text-center">
        {/* Soft atmospheric orbs behind the CTA container */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full bg-[var(--ac)]/15 blur-[110px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-[200px] h-[200px] rounded-full bg-[var(--cyan)]/8 blur-[90px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10 w-full space-y-6">
          <h2 className="font-display font-black leading-[1.1] text-center" style={{ fontSize: "clamp(1.8rem, 4vw, 2.9rem)" }}>
            <span>{t.cta.titleMain} </span>
            <span className="text-grad-full py-1">{t.cta.titleGrad}</span>
          </h2>
          
          <p className="text-xs md:text-sm text-[var(--txt2)] max-w-lg mx-auto leading-relaxed font-medium">
            {t.cta.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-4">
            <button
              onClick={triggerSignUp}
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-grad-main text-white font-bold text-xs shadow-lg shadow-[var(--ac)]/15 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-1"
            >
              {t.cta.btnCreate}
            </button>
            <button
              onClick={launchLMS}
              className="w-full sm:w-auto px-8 py-3 rounded-full border border-[var(--bd2)] bg-[var(--sur2)] hover:bg-[var(--sur)] hover:border-[var(--ac)] text-[var(--txt)] font-bold text-xs active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-1"
            >
              {t.cta.btnPlatform}
            </button>
          </div>

          <p className="text-[9px] font-mono font-bold tracking-tight text-[var(--txt3)] pt-2 uppercase">
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
            className="fixed bottom-6 right-6 z-50 max-w-sm bg-[var(--sur)] border-2 border-[var(--ac)] rounded-2xl p-4 shadow-2xl flex gap-3 items-start cursor-pointer hover:border-[var(--ac)]/80"
            onClick={() => {
              // Open the community chat tab when clicking on the toast!
              setActiveTab("community");
              setLiveToast(null);
            }}
          >
            <MessageSquare className="text-[var(--ac)] shrink-0 mt-0.5" size={18} />
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
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
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.94, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 20 }}
              className="w-full max-w-md bg-[var(--sur)] border border-[var(--bd)] rounded-3xl p-6 relative overflow-hidden shadow-2xl"
            >
              {/* Decorative top border */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-grad-main" />

              <button
                onClick={() => setSelectedUpgradePlan(null)}
                className="absolute top-4 right-4 text-[var(--txt3)] hover:text-[var(--txt)] transition-colors cursor-pointer text-sm font-bold font-mono p-1 rounded-full hover:bg-[var(--sur2)]"
              >
                ✕
              </button>

              <div className="space-y-4 pt-1">
                <div className="flex items-center gap-2">
                  <div>
                    <h3 className="text-base font-black font-display text-[var(--txt)]">
                      {t.checkout.subscribeTo} {selectedUpgradePlan}
                    </h3>
                    <p className="text-[9px] text-[var(--txt3)] uppercase tracking-widest font-mono">
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
                  <div className="flex justify-between text-xs">
                    <span className="text-[var(--txt2)]">{t.checkout.selectedTier}</span>
                    <span className="font-bold text-[var(--txt)]">{selectedUpgradePlan}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[var(--txt2)] font-semibold">{t.checkout.billingFrequency}</span>
                    <span className="font-bold capitalize text-[var(--ac)]">
                      {billingCycle === "monthly" ? t.checkout.monthly : t.checkout.annually}
                    </span>
                  </div>
                  <div className="border-t border-[var(--bd)]/40 my-2 pt-2 flex justify-between text-xs text-[var(--txt)] font-black">
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
                  <label className="text-[10px] font-mono text-[var(--txt3)] uppercase tracking-wider font-bold">{t.checkout.paymentDetails}</label>
                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder={t.checkout.cardholderName}
                      className="w-full bg-[var(--sur2)]/60 border border-[var(--bd)] rounded-xl px-3 py-2 text-xs text-[var(--txt)] focus:outline-none focus:border-[var(--ac)]"
                    />
                    <div className="grid grid-cols-3 gap-2">
                      <input
                        type="text"
                        maxLength={19}
                        placeholder={t.checkout.cardNumber}
                        className="col-span-2 bg-[var(--sur2)]/60 border border-[var(--bd)] rounded-xl px-3 py-2 text-xs text-[var(--txt)] focus:outline-none focus:border-[var(--ac)]"
                      />
                      <input
                        type="text"
                        maxLength={5}
                        placeholder={t.checkout.expiryDate}
                        className="bg-[var(--sur2)]/60 border border-[var(--bd)] rounded-xl px-3 py-2 text-xs text-[var(--txt)] text-center focus:outline-none focus:border-[var(--ac)]"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    onClick={() => setSelectedUpgradePlan(null)}
                    className="flex-1 py-2.5 rounded-xl border border-[var(--bd)] text-xs text-[var(--txt2)] hover:bg-[var(--sur2)] cursor-pointer font-black uppercase text-center"
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
