/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Sparkles, Mic, MicOff, Volume2, Play, MousePointer, HelpCircle } from "lucide-react";

interface AIChatSimulatorProps {
  lang: "en" | "ru" | "uz";
}

interface Message {
  sender: "user" | "ai";
  text: string;
  time: string;
}

// Custom responses block mapped by language
const smartAnswers = {
  en: [
    {
      keywords: ["clan", "clans", "competition", "competitions", "guild", "team", "tournament"],
      answer: "MindSphere features student-organized Clans! You can open or join a digital cooperative with friends, battle in weekly XP brackets against other clans, participate in massive administrator-led tournaments, and share grand structural rewards!"
    },
    {
      keywords: ["difficult", "question", "questions", "exercise", "exercises", "admin", "hardcore", "math", "physics"],
      answer: "Every day at 00:00 UTC, MindSphere structural administrators and high-ranking teachers release 'Daily Hardcore Exercises'. High-scoring students submit public answers, earning mutual reputation tokens and clan boosters!"
    },
    {
      keywords: ["chat", "chats", "friend", "friends", "message", "teacher", "communication", "cooperate"],
      answer: "Absolutely! The ecosystem features private direct messaging between friends, direct chat channels between students and teachers, and dedicated Clan Lounges to strategize solutions live!"
    },
    {
      keywords: ["hello", "hi", "hey", "greetings", "tutor"],
      answer: "Hello, learner! I am the MindSphere AI Sandbox. Ask me about our Student Clans, Daily Hardcore Exercises, Student-Teacher Chats, or try speaking into your microphone!"
    },
    {
      keywords: ["pricing", "cost", "free", "revenue"],
      answer: "Learning is 100% free! For authors, they receive a generous 90% revenue share on paid, customized masterclasses. The remaining 10% supports our digital cooperative database infrastructure."
    }
  ],
  ru: [
    {
      keywords: ["клан", "кланы", "соревнование", "соревнования", "команда", "турнир"],
      answer: "MindSphere поддерживает студенческие Кланы! Вы можете основать или вступить в закрытый кооператив с друзьями, соревноваться в еженедельных XP-брекетах против других гильдий, участвовать в административных турнирах и получать общие бустеры!"
    },
    {
      keywords: ["задач", "задачи", "вопрос", "вопросы", "сложные", "упражнения", "администратор"],
      answer: "Каждые сутки в 00:00 UTC наши лучшие преподаватели и кураторы публикуют 'Ежедневные Сложные Задачи'. Студенты с высоким рейтингом пишут решения, зарабатывая репутационные токены!"
    },
    {
      keywords: ["чат", "сообщение", "сообщения", "друг", "друзья", "преподаватель", "общаться"],
      answer: "Да! Платформа предлагает защищённые личные сообщения между друзьями, прямые чаты вопрос-ответ с учителями и закрытые Каналы Кланов для мгновенной координации."
    },
    {
      keywords: ["привет", "здравствуйте", "приветствую"],
      answer: "Приветствую, исследователь! Я — интерактивный ИИ MindSphere. Спросите меня о Кланах, Ежедневных Задачах, чатах с учителями или попробуйте сказать что-то через микрофон!"
    },
    {
      keywords: ["цена", "цены", "бесплатно", "доход"],
      answer: "Обучение абсолютно бесплатно! Авторы курсов получают рекордные 90% дохода от продаж коммерческих программ. 10% уходят на поддержку серверов и рендеринг кодов."
    }
  ],
  uz: [
    {
      keywords: ["klan", "klanlar", "musobaqa", "musobaqalar", "jamoa", "guruh", "turnir"],
      answer: "MindSphere talabalar klanlarini taqdim etadi! Do'stlaringiz bilan kooperativ yaratishingiz, haftalik XP tizimida boshqa klanlar bilan bellashishingiz va ma'murlar o'tkazadigan turnirlarda g'olib bo'lishingiz mumkin!"
    },
    {
      keywords: ["qiyin", "savol", "savollar", "mashq", "mashqlar", "admin", "vazifa"],
      answer: "Har kuni soat 00:00 da etakchi o'qituvchilar va ma'murlar 'Kunlik Qiyin Mashqlar'ni e'lon qilishadi. Eng iqtidorli talabalar yechimlarni yuklab, obro' tokenlariga ega bo'lishadi!"
    },
    {
      keywords: ["chat", "suhbat", "do'st", "do'stlar", "xabar", "o'qituvchi", "muloqot"],
      answer: "Albatta! Tizim do'stlar o'rtasida shaxsiy xabarlar almashish, talaba va o'qituvchi o'rtasida to'g'ridan-to'g'ri muloqot va maxsus Klan xonalarini o'z ichiga oladi!"
    },
    {
      keywords: ["salom", "assalomu", "assalom", "hey"],
      answer: "Salom, yosh olim! Men MindSphere sinov sun'iy intellektiman. Mendan talabalar klanlari, qiyin mashqlar, o'qituvchi xabarlari haqida so'rang yoki mikrofonga gapiring!"
    },
    {
      keywords: ["narx", "bepul", "daromad"],
      answer: "O'qish 100% mutlaqo bepul! Mualliflar esa sotilgan pullik kurslardan 90% sof daromad olishadi. 10% ulush esa umumiy ma'lumotlar bazasini saqlashga sarflanadi."
    }
  ]
};

// Automated sequence script configuration
const tutorialScripts = {
  en: {
    user: "Can you explain how student clans and daily exercises double our motivation?",
    ai: "Certainly! By organizing into Clans, you compete in real-time leaderboards with your peers. Meanwhile, solving structural 'Daily Exercises' posted by our administrators gives your Clan immense reputation bonuses and unlocking free premium tokens! This gamefield transforms typical silent reading into active digital sports.",
    aiHeader: "MindSphere AI Tutor",
    statusText: "Active & Listening",
    placeholder: "Ask or press Mic to talk...",
    userTag: "You",
    aiTag: "AI Tutor",
    tryYourself: "Switch to Play Sandbox Mode 🎯",
    playingDemo: "Playing Demo Loop",
    simulatedMic: "Translating Voice Speech..."
  },
  ru: {
    user: "Как студенческие кланы и ежедневные сложные задачи повышают мотивацию?",
    ai: "Очень просто! Студенты объединяются в Кланы для борьбы в глобальной лиге XP. Решая 'Ежедневные Сложные Задачи' от кураторов, ваш клан зарабатывает бонусы и открывает премиум-ресурсы! Это превращает пассивное обучение в увлекательное командное соревнование.",
    aiHeader: "ИИ-Тьютор MindSphere",
    statusText: "Активен и слушает",
    placeholder: "Спросите или нажмите на микрофон...",
    userTag: "Вы",
    aiTag: "ИИ Тьютор",
    tryYourself: "Перейти в режим песочницы 🎯",
    playingDemo: "Демонстрация работы",
    simulatedMic: "Распознавание вашей речи..."
  },
  uz: {
    user: "Talabalar klanlari va kunlik qiyin mashqlar motivatsiyani qanday oshiradi?",
    ai: "Juda oson! Talabalar XP ligalarida kurashish uchun Klanlarga birlashadilar. Ma'murlar taqdim etgan 'Kunlik Qiyin Mashqlar'ni yechish esa klanga doimiy bonuslar va bepul kirish huquqini beradi! Bu esa o'qishni haqiqiy talabalar sportiga aylantiradi.",
    aiHeader: "MindSphere AI Repetitori",
    statusText: "Faol va tinglamoqda",
    placeholder: "Yozing yoki Mikrofondan gapiring...",
    userTag: "Siz",
    aiTag: "AI Tutor",
    tryYourself: "Erkin rejimga o'tish 🎯",
    playingDemo: "Demo namoyishi",
    simulatedMic: "Ovozni aniqlash..."
  }
};

export const AIChatSimulator: React.FC<AIChatSimulatorProps> = ({ lang }) => {
  const currentScript = tutorialScripts[lang] || tutorialScripts.en;

  // Mode: "autoplay" (automatic sequence tutorial loop) or "sandbox" (user types or speaks)
  const [mode, setMode] = useState<"autoplay" | "sandbox">("autoplay");
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "ai",
      text: lang === "uz" 
        ? "Salom! Men hamkorlikdagi MindSphere sun'iy intellekt asistentiman. Klanlar, jamoaviy bahslar yoki kunlik qiyin mashqlar haqida so'rang!"
        : lang === "ru"
        ? "Привет! Я умный ассистент MindSphere. Спросите про кланы, групповое общение, ежедневные сложные задачи или скажите голосом!"
        : "Hello! I am MindSphere's cooperative assistant. Ask me about clans, student group chats, daily challenging exercises, or speak up!",
      time: "12:04"
    }
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isAiTyping, setIsAiTyping] = useState(false);
  const [isUserTyping, setIsUserTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [speechStatus, setSpeechStatus] = useState("");

  const chatContainerRef = useRef<HTMLDivElement>(null);
  const playbackRef = useRef<boolean>(true);
  const timeoutIdsRef = useRef<NodeJS.Timeout[]>([]);

  // Scroll logic (strictly local within the chat viewport to eliminate window jumping lag)
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isAiTyping]);

  // Clean timeout helper
  const clearAllTimeouts = () => {
    timeoutIdsRef.current.forEach((t) => clearTimeout(t));
    timeoutIdsRef.current = [];
  };

  // Switch to sandbox and stop loop
  const handleInteractionStart = () => {
    if (mode === "autoplay") {
      setMode("sandbox");
      clearAllTimeouts();
      // Keep only initial helpful tips
      setMessages([
        {
          sender: "ai",
          text: lang === "uz"
            ? "Erkin rejim faollashtirildi! Sun'iy intellekt sizni eshitmoqda. Klanlar, guruh chatlari yoki qiyin mashqlar haqida yozing yoki mikrofonga ayting!"
            : lang === "ru"
            ? "Режим песочницы включен! Напишите свой вопрос про кланы, чаты или сложные задачи, либо скажите в микрофон."
            : "Sandbox controller activated! Type your own query about competitive clans, group chats, daily exercises, or try the Microphone input.",
          time: "12:04"
        }
      ]);
      setInputVal("");
    }
  };

  // Run auto sequence
  useEffect(() => {
    if (mode !== "autoplay") {
      return;
    }

    playbackRef.current = true;
    clearAllTimeouts();

    const triggerTimeout = (fn: () => void, delay: number) => {
      const id = setTimeout(fn, delay);
      timeoutIdsRef.current.push(id);
    };

    const runLoop = () => {
      if (!playbackRef.current) return;

      // 1. Reset messages to single welcome
      setMessages([
        {
          sender: "ai",
          text: lang === "uz"
            ? "Mindsphere darsxonasiga xush kelibsiz! Avtomatik qo'llanmani tomosha qiling yoki istalgan vaqtda kiritishni boshlang!"
            : lang === "ru"
            ? "Добро пожаловать в класс Mindsphere! Посмотрите авто-презентацию или начните вводить в любой момент!"
            : "Welcome to Mindsphere classroom! Watch this quick autoplay guide or start typing at any moment!",
          time: "12:01"
        }
      ]);
      setInputVal("");

      // 2. Delay before user starts "typing"
      triggerTimeout(() => {
        if (!playbackRef.current) return;
        setIsUserTyping(true);

        const textToType = currentScript.user;
        let index = 0;

        const interval = setInterval(() => {
          if (!playbackRef.current) {
            clearInterval(interval);
            return;
          }
          if (index < textToType.length) {
            setInputVal(textToType.substring(0, index + 1));
            index++;
          } else {
            clearInterval(interval);
            setIsUserTyping(false);

            // 3. Pause, then send user message
            triggerTimeout(() => {
              if (!playbackRef.current) return;
              setInputVal("");
              setMessages((prev) => [
                ...prev,
                { sender: "user", text: textToType, time: "12:04" }
              ]);

              // 4. Delay then AI starts typing dots
              triggerTimeout(() => {
                if (!playbackRef.current) return;
                setIsAiTyping(true);

                // 5. Hide dots and start printing AI words
                triggerTimeout(() => {
                  if (!playbackRef.current) return;
                  setIsAiTyping(false);

                  const words = currentScript.ai.split(" ");
                  let currentStr = "";
                  let wordIndex = 0;

                  // Add draft AI bubble
                  setMessages((prev) => [
                    ...prev,
                    { sender: "ai", text: "", time: "12:04" }
                  ]);

                  const streamInterval = setInterval(() => {
                    if (!playbackRef.current) {
                      clearInterval(streamInterval);
                      return;
                    }
                    if (wordIndex < words.length) {
                      currentStr += (wordIndex === 0 ? "" : " ") + words[wordIndex];
                      setMessages((prev) => {
                        const next = [...prev];
                        const last = next.length - 1;
                        if (last >= 0 && next[last].sender === "ai") {
                          next[last] = { ...next[last], text: currentStr };
                        }
                        return next;
                      });
                      wordIndex++;
                    } else {
                      clearInterval(streamInterval);

                      // End of loop, restart after 9 seconds of reading
                      triggerTimeout(() => {
                        if (!playbackRef.current) return;
                        runLoop();
                      }, 9000);
                    }
                  }, 80); // Speed of words

                }, 1300); // Typing dots duration

              }, 600); // Delay before dots

            }, 500); // Delay before sending
          }
        }, 22); // Character typing speed

      }, 1500); // Initial delay
    };

    runLoop();

    return () => {
      playbackRef.current = false;
      clearAllTimeouts();
    };
  }, [mode, lang]);

  // Speech Recognition capture (Voice to text)
  const toggleSpeechRecognition = () => {
    handleInteractionStart();

    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      // Graceful Sandbox simulation if WebSpeech API is not loaded/supported
      simulateMockVoiceInput();
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.lang = lang === "uz" ? "uz-UZ" : lang === "ru" ? "ru-RU" : "en-US";
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        setIsListening(true);
        setSpeechStatus(
          lang === "uz"
            ? "Tinglanmoqda, gapiring..."
            : lang === "ru"
            ? "Слушаю, говорите..."
            : "Listening, microactive..."
        );
      };

      recognition.onerror = (event: any) => {
        console.warn("Speech recognition error", event.error);
        setIsListening(false);
        simulateMockVoiceInput(); // Fallback to simulated input on permission deny
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.onresult = (event: any) => {
        const resultText = event.results[0][0].transcript;
        if (resultText) {
          setInputVal(resultText);
        }
      };

      if (isListening) {
        recognition.stop();
        setIsListening(false);
      } else {
        recognition.start();
      }
    } catch (e) {
      console.error(e);
      simulateMockVoiceInput();
    }
  };

  // Voice Translation Mock typing fallback
  const simulateMockVoiceInput = () => {
    setIsListening(true);
    setSpeechStatus(currentScript.simulatedMic);
    const mockSpeechPrompts = {
      en: "Tell me how student competitions and clans work in MindSphere?",
      ru: "Расскажи, как работают студенческие кланы и соревнования в MindSphere?",
      uz: "MindSphere klanlari va talabalar musobaqalari qanday ishlashini tushuntiring?"
    };

    const targetText = mockSpeechPrompts[lang] || mockSpeechPrompts.en;
    let index = 0;
    setInputVal("");

    const interval = setInterval(() => {
      if (index < targetText.length) {
        setInputVal(targetText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setIsListening(false);
      }
    }, 25);
  };

  // Custom send trigger
  const handleSendMessage = () => {
    if (!inputVal.trim()) return;
    const userText = inputVal.trim();
    setInputVal("");
    handleInteractionStart();

    // 1. Append user bubble
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: userText, time: "12:05" }
    ]);

    // 2. Trigger AI thinking
    setIsAiTyping(true);

    setTimeout(() => {
      setIsAiTyping(false);

      // 3. Find Smart response
      const answerPool = smartAnswers[lang] || smartAnswers.en;
      const cleanUserText = userText.toLowerCase();

      // Find matching categories or fallback
      let matchedAnswer = "";
      for (const item of answerPool) {
        if (item.keywords.some((k) => cleanUserText.includes(k))) {
          matchedAnswer = item.answer;
          break;
        }
      }

      if (!matchedAnswer) {
        // Broad cool cooperative back-up
        matchedAnswer = {
          en: "Amazing query! Mindsphere coordinates 48K courses with daily student clan matches, exercises from high-scored students, and structural teacher channels. Connect with your peers and learn as a cooperative community!",
          ru: "Интересный вопрос! На платформе MindSphere доступно 48 000+ бесплатных курсов, ежедневные битвы кланов, упражнения от лучших учеников и прямое общение с преподавателями.",
          uz: "Ajoyib savol! MindSphere hamjamiyatida 48 000 dan ortiq bepul darslar, klanlar o'rtasidagi kunlik janglar, yuqori balli o'quvchilar mashqlari va o'qituvchi bilan muloqot tizimi mavjud."
        }[lang] || "Amazing!";
      }

      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: matchedAnswer, time: "12:05" }
      ]);
    }, 1200);
  };

  return (
    <div className="rounded-2xl border border-[var(--bd)] bg-[var(--sur)] overflow-hidden flex flex-col h-[380px] sm:h-[400px] shadow-lg relative">
      {/* Top Controller Bar - Toggle modes easily */}
      <div className="bg-[var(--bg)]/85 border-b border-[var(--bd)] px-3 py-2 flex items-center justify-between gap-2 select-none text-[10px]">
        <div className="flex items-center gap-1">
          <span className="flex h-1.5 w-1.5 rounded-full bg-[var(--ac)] animate-ping" />
          <span className="font-extrabold text-[9px] uppercase tracking-wide text-[var(--txt2)]">
            Control Room:
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setMode("autoplay");
            }}
            className={`px-2.5 py-1 rounded-full font-bold transition-all text-[9.5px] cursor-pointer inline-flex items-center gap-1 ${
              mode === "autoplay"
                ? "bg-[var(--ac)] text-white shadow-sm"
                : "bg-[var(--sur2)]/60 text-[var(--txt3)] hover:text-[var(--txt)] hover:bg-[var(--sur2)]"
            }`}
          >
            <Play size={8} />
            <span>Auto Help</span>
          </button>
          <button
            onClick={handleInteractionStart}
            className={`px-2.5 py-1 rounded-full font-bold transition-all text-[9.5px] cursor-pointer inline-flex items-center gap-1 ${
              mode === "sandbox"
                ? "bg-emerald-500 text-white shadow-sm"
                : "bg-[var(--sur2)]/60 text-[var(--txt3)] hover:text-[var(--txt)] hover:bg-[var(--sur2)]"
            }`}
          >
            <MousePointer size={8} />
            <span>Interactive Play (Type / Ask) 🎯</span>
          </button>
        </div>
      </div>

      {/* Main Header */}
      <div className="px-4 py-3 border-b border-[var(--bd)] bg-[var(--sur2)]/60 flex items-center justify-between select-none">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${isListening ? "animate-ping bg-rose-500" : "animate-ping bg-[var(--green)]"}`}></span>
            <span className={`relative inline-flex rounded-full h-2 w-2 ${isListening ? "bg-rose-500" : "bg-[var(--green)]"}`}></span>
          </span>
          <div>
            <h4 className="text-[10px] sm:text-[11.5px] font-black tracking-tight text-[var(--txt)] flex items-center gap-12 sm:gap-1.5">
              <span>{currentScript.aiHeader}</span>
              <Sparkles size={8.5} className="text-[var(--ac)] animate-pulse hidden sm:inline" />
            </h4>
            <p className="text-[7.5px] text-[var(--txt3)] font-mono leading-none mt-1 uppercase font-bold tracking-tight">
              {isListening ? speechStatus : currentScript.statusText}
            </p>
          </div>
        </div>

        {/* Hot Quick Suggestions Tips */}
        <div className="hidden sm:flex items-center gap-1.5">
          <button
            onClick={() => {
              setInputVal({
                en: "Tell me about student Clans and battles?",
                ru: "Расскажи про кланы студентов и битвы?",
                uz: "Talaba klanlari va janglari haqida aytib bering?"
              }[lang] || "Tell me about Clans?");
              handleInteractionStart();
            }}
            className="px-2 py-0.5 rounded border border-[var(--bd)] bg-[var(--sur2)] hover:border-[var(--ac)]/60 text-[8px] font-extrabold text-[var(--txt3)] hover:text-[var(--ac)] transition-all cursor-pointer"
          >
            ⚔️ Clans
          </button>
          <button
            onClick={() => {
              setInputVal({
                en: "What are the daily difficult exercises?",
                ru: "Что такое ежедневные сложные задачи?",
                uz: "Kunlik qiyin mashqlar nima?"
              }[lang] || "Exercises?");
              handleInteractionStart();
            }}
            className="px-2 py-0.5 rounded border border-[var(--bd)] bg-[var(--sur2)] hover:border-[var(--ac)]/60 text-[8px] font-extrabold text-[var(--txt3)] hover:text-[var(--ac)] transition-all cursor-pointer"
          >
            🧠 Daily Tasks
          </button>
        </div>
      </div>

      {/* Message Screen */}
      <div
        ref={chatContainerRef}
        className="flex-1 p-4 space-y-4 overflow-y-auto text-[10px] leading-relaxed flex flex-col bg-gradient-to-b from-transparent to-[var(--sur2)]/5 select-text"
      >
        <AnimatePresence initial={false}>
          {messages.map((m, index) => {
            const isUser = m.sender === "user";
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
                className={`flex flex-col ${isUser ? "items-end" : "items-start"} w-full`}
              >
                <div
                  className={`p-3 rounded-2xl max-w-[88%] sm:max-w-[80%] border ${
                    isUser
                      ? "bg-grad-main text-white border-transparent rounded-tr-sm font-semibold shadow-sm"
                      : "bg-[var(--sur2)] border border-[var(--bd)] text-[var(--txt)] rounded-tl-sm font-medium"
                  }`}
                >
                  <p>{m.text}</p>
                </div>
                <span className="text-[7px] sm:text-[7.5px] text-[var(--txt3)] mt-1 font-mono leading-none select-none px-1">
                  {isUser ? currentScript.userTag : currentScript.aiTag} · {m.time}
                </span>
              </motion.div>
            );
          })}

          {/* AI Typing loading indicator */}
          {isAiTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-start"
            >
              <div className="bg-[var(--sur2)] border border-[var(--bd)] px-3 py-2.5 rounded-2xl rounded-tl-sm flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--ac)] animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--ac)] animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--ac)] animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
              <span className="text-[7.5px] text-[var(--txt3)] mt-1 font-mono leading-none select-none">
                {currentScript.aiTag} typing...
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Voice Visualizer Waveform if Listening */}
      {isListening && (
        <div className="absolute inset-x-0 bottom-[56px] bg-[var(--sur)]/95 border-t border-[var(--bd)] px-4 py-2 flex items-center justify-between gap-3 text-xs text-[var(--txt)] z-20 animate-fadeIn select-none">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping inline-block" />
            <span className="font-bold font-mono text-[9px] uppercase tracking-wider text-rose-500">
              {speechStatus}
            </span>
          </div>
          {/* Audio bouncing bars */}
          <div className="flex items-center gap-0.5 h-5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((bar) => (
              <motion.div
                key={bar}
                animate={{ height: [4, Math.floor(Math.random() * 16 + 8), 4] }}
                transition={{
                  repeat: Infinity,
                  duration: 0.4 + Math.random() * 0.3,
                  ease: "easeInOut"
                }}
                className="w-[2px] bg-[var(--ac)] rounded-full"
              />
            ))}
          </div>
        </div>
      )}

      {/* Interactive Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
        className="p-3 border-t border-[var(--bd)] bg-[var(--sur2)]/90 flex items-center justify-between gap-2 max-w-full select-none"
      >
        {/* Clickable Microphone/Speech activation button */}
        <button
          type="button"
          onClick={toggleSpeechRecognition}
          title="Speech to Text (Voice Input)"
          className={`p-2 rounded-full border transition-all duration-300 relative cursor-pointer ${
            isListening
              ? "bg-rose-500/10 border-rose-500/40 text-rose-500 shadow-sm"
              : "bg-[var(--sur)] border-[var(--bd)] text-[var(--txt3)] hover:text-[var(--ac)] hover:border-[var(--ac)]/40 hover:bg-[var(--sur2)]"
          }`}
        >
          {isListening ? <MicOff size={12} className="animate-pulse" /> : <Mic size={12} />}
        </button>

        {/* Live typing HTML5 input */}
        <input
          type="text"
          value={inputVal}
          onChange={(e) => {
            setInputVal(e.target.value);
            handleInteractionStart();
          }}
          onClick={handleInteractionStart}
          placeholder={currentScript.placeholder}
          disabled={isListening}
          className="flex-1 bg-[var(--sur)] border border-[var(--bd)] rounded-full px-4 py-1.5 text-[10px] text-[var(--txt)] select-text font-bold focus:outline-none focus:border-[var(--ac)] focus:ring-1 focus:ring-[var(--ac)] transition-all h-8 cursor-text shadow-inner"
        />

        <button
          type="submit"
          className={`p-2 rounded-full transition-all duration-300 ${
            inputVal.trim() && !isUserTyping
              ? "bg-grad-main text-white cursor-pointer hover:opacity-90 active:scale-[0.95]"
              : "bg-[var(--sur)] text-[var(--txt3)] border border-[var(--bd)] cursor-not-allowed"
          }`}
          disabled={!inputVal.trim() || isUserTyping}
        >
          <Send size={11} className={inputVal.trim() && !isUserTyping ? "animate-pulse" : ""} />
        </button>
      </form>
    </div>
  );
};
