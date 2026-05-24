/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Mail, Lock, User, Check, ArrowRight } from "lucide-react";
import { useApp } from "./AppProvider";

export const AuthModal: React.FC = () => {
  const { isAuthOpen, setIsAuthOpen, authTab, setAuthTab, t } = useApp();
  const [role, setRole] = useState<"student" | "teacher">("student");
  
  // States for form input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isAuthOpen) {
        setIsAuthOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isAuthOpen, setIsAuthOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In marketing site, we simulate success and redirect to livesite mindsphere.com
    window.location.href = "https://mindsphere.com";
  };

  return (
    <AnimatePresence>
      {isAuthOpen && (
        <div id="auth-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop blurring overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsAuthOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative w-full max-w-md overflow-hidden rounded-2xl border border-[var(--bd2)] bg-[var(--sur)] p-6 md:p-8 shadow-2xl z-10"
          >
            {/* Upper Right Close Button */}
            <button
              onClick={() => setIsAuthOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-[var(--txt2)] hover:text-[var(--txt)] hover:bg-[var(--sur2)] transition-colors"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Platform Logo */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xl animate-spin-slow text-[var(--ac)]">⬡</span>
              <span className="font-display font-bold text-lg text-grad-main">MindSphere</span>
              <span className="text-xs text-[var(--txt3)] font-mono">.org</span>
            </div>

            {/* Custom Tab Switchers */}
            <div className="flex border-b border-[var(--bd)] mb-6">
              <button
                onClick={() => setAuthTab("signin")}
                className={`flex-1 pb-3 text-sm font-semibold transition-colors relative ${
                  authTab === "signin" ? "text-[var(--ac)]" : "text-[var(--txt2)] hover:text-[var(--txt)]"
                }`}
              >
                {t.auth.signIn}
                {authTab === "signin" && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--ac)]"
                  />
                )}
              </button>
              <button
                onClick={() => setAuthTab("signup")}
                className={`flex-1 pb-3 text-sm font-semibold transition-colors relative ${
                  authTab === "signup" ? "text-[var(--ac)]" : "text-[var(--txt2)] hover:text-[var(--txt)]"
                }`}
              >
                {t.auth.signUp}
                {authTab === "signup" && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--ac)]"
                  />
                )}
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {authTab === "signup" && (
                <div className="space-y-3">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[var(--txt2)] block">
                    {t.auth.roleLabel}
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {/* Student Card */}
                    <div
                      onClick={() => setRole("student")}
                      className={`cursor-pointer p-3 rounded-xl border text-left transition-all relative ${
                        role === "student"
                          ? "border-[var(--ac)] bg-[var(--sur2)] shadow-glow"
                          : "border-[var(--bd)] hover:border-[var(--bd2)]"
                      }`}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-bold text-[var(--txt)]">
                          {t.auth.roleStudent.split(" ")[0]} {t.auth.roleStudent.split(" ").slice(1).join(" ")}
                        </span>
                        {role === "student" && (
                          <span className="text-xs text-[var(--ac)] bg-[var(--sur)] p-0.5 rounded-full">
                            <Check size={12} />
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] leading-tight text-[var(--txt2)]">
                        {t.auth.roleStudentDesc}
                      </p>
                    </div>

                    {/* Teacher Card */}
                    <div
                      onClick={() => setRole("teacher")}
                      className={`cursor-pointer p-3 rounded-xl border text-left transition-all relative ${
                        role === "teacher"
                          ? "border-[var(--ac)] bg-[var(--sur2)] shadow-glow"
                          : "border-[var(--bd)] hover:border-[var(--bd2)]"
                      }`}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-bold text-[var(--txt)]">
                          {t.auth.roleTeacher.split(" ")[0]} {t.auth.roleTeacher.split(" ").slice(1).join(" ")}
                        </span>
                        {role === "teacher" && (
                          <span className="text-xs text-[var(--ac)] bg-[var(--sur)] p-0.5 rounded-full">
                            <Check size={12} />
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] leading-tight text-[var(--txt2)]">
                        {t.auth.roleTeacherDesc}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Name Field (Sign Up Only) */}
              {authTab === "signup" && (
                <div className="space-y-1">
                  <label className="text-xs font-medium text-[var(--txt2)] block">{t.auth.fullName}</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--txt3)]">
                      <User size={16} />
                    </span>
                    <input
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full pl-9 pr-4 py-2 text-sm bg-[var(--sur2)] rounded-xl border border-[var(--bd)] focus:outline-none focus:border-[var(--ac)] transition-all text-[var(--txt)]"
                    />
                  </div>
                </div>
              )}

              {/* Common Fields */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-[var(--txt2)] block">{t.auth.email}</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--txt3)]">
                    <Mail size={16} />
                  </span>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="learner@mindsphere.org"
                    className="w-full pl-9 pr-4 py-2 text-sm bg-[var(--sur2)] rounded-xl border border-[var(--bd)] focus:outline-none focus:border-[var(--ac)] transition-all text-[var(--txt)]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-[var(--txt2)] block">{t.auth.password}</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--txt3)]">
                    <Lock size={16} />
                  </span>
                  <input
                    required
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-9 pr-4 py-2 text-sm bg-[var(--sur2)] rounded-xl border border-[var(--bd)] focus:outline-none focus:border-[var(--ac)] transition-all text-[var(--txt)]"
                  />
                </div>
              </div>

              {/* Action Button */}
              <button
                type="submit"
                className="w-full mt-2 py-2.5 rounded-xl bg-grad-main font-semibold text-xs text-white hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                {authTab === "signin" ? t.auth.btnSubmitIn : t.auth.btnSubmitUp}
                <ArrowRight size={14} />
              </button>
            </form>

            {/* Direct Redirect link */}
            <div className="mt-5 pt-4 border-t border-[var(--bd)] text-center">
              <a
                href="https://mindsphere.com"
                className="text-xs text-[var(--green)] hover:underline inline-flex items-center gap-1 font-medium transition-all"
              >
                {t.auth.orLink}
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
