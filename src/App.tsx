/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { AppProvider, useApp } from "./components/AppProvider";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { StatsBar, RolesSection, LeaderboardSection } from "./components/Sections";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { AuthModal } from "./components/AuthModal";
import { About } from "./components/About";

function AppContent() {
  const { page } = useApp();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll height to show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[var(--bg)] text-[var(--txt)] transition-colors duration-400 relative">
      {/* Sticky navigation header */}
      <Navbar />
      
      {/* Route Render View state */}
      <main className="flex-grow">
        <div className="animate-fadeIn">
          <Hero />
          <StatsBar />
          <RolesSection />
          <LeaderboardSection />
          <Content />
          <About />
        </div>
      </main>

      {/* Universal layout items */}
      <Footer />
      <AuthModal />

      {/* Floating Action: scroll back to top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-2.5 rounded-full bg-grad-main text-white cursor-pointer hover:scale-[1.07] active:scale-[0.95] shadow-lg shadow-[var(--ac)]/25 transition-all z-30"
          aria-label="Scroll to top"
        >
          <ArrowUp size={16} />
        </button>
      )}
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
