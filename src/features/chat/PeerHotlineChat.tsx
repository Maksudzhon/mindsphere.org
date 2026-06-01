/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useApp } from "../../providers/AppProvider";
import { MessageSquare, Check, Send } from "lucide-react";

export const PeerHotlineChat: React.FC = () => {
  const { lang } = useApp();

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

  return (
    <div className="p-5 rounded-2xl border border-[var(--bd)] bg-[var(--sur)] hover:border-[var(--bd2)] transition-all flex flex-col justify-between h-auto">
      <div className="flex flex-col h-full justify-between">
        {/* Section Title */}
        <div>
          <div className="flex items-center gap-2 mb-3 flex-row">
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
              className={`py-1 rounded cursor-pointer transition-all flex items-center justify-center gap-1 flex-row ${
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
              className={`py-1 rounded cursor-pointer transition-all flex items-center justify-center gap-1 flex-row ${
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
              className={`py-1 rounded cursor-pointer transition-all flex items-center justify-center gap-1 flex-row ${
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
          <form onSubmit={handleSendCommunityChat} className="flex items-center gap-1.5 flex-row">
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
                newChatInput.trim() ? "bg-[var(--ac)] cursor-pointer hover:opacity-90 font-sans" : "bg-[var(--sur2)] text-[var(--txt3)] border border-[var(--bd)] cursor-not-allowed font-sans"
              }`}
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Local Real-time Broadcast Toast Notification Popups */}
      <AnimatePresence>
        {liveToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 max-w-sm bg-[var(--sur)] border-2 border-[var(--ac)] rounded-2xl p-4 shadow-2xl flex gap-3 items-start cursor-pointer hover:border-[var(--ac)]/80 flex-row animate-fadeIn"
            onClick={() => setLiveToast(null)}
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
    </div>
  );
};
