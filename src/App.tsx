/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, memo, Suspense } from "react";
import { ArrowUp } from "lucide-react";
import { AppProvider, useApp } from "./providers/AppProvider";
import { Navbar } from "./components/shared/Navbar";
import { Hero } from "./sections/Hero";
import { StatsBar, RolesSection, LeaderboardSection } from "./sections/Sections";
import { Content } from "./sections/Content";
import { Footer } from "./components/shared/Footer";
import { About } from "./sections/About";
import { LanguageModal } from "./components/shared/LanguageModal";

// Lazy load heavy interactive Modal components to optimize first-contentful paint and bundle sizes
const AuthModalLazy = React.lazy(() =>
  import("./features/auth/AuthModal").then((module) => ({ default: module.AuthModal }))
);

// Memoize heavy page blocks to prevent performance drop during scroll-state changes or context-updates
const MemoizedNavbar = memo(Navbar);
const MemoizedHero = memo(Hero);
const MemoizedStatsBar = memo(StatsBar);
const MemoizedRolesSection = memo(RolesSection);
const MemoizedLeaderboardSection = memo(LeaderboardSection);
const MemoizedContent = memo(Content);
const MemoizedAbout = memo(About);

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
      <MemoizedNavbar />
      
      {/* Route Render View state */}
      <main className="flex-grow">
        <div className="animate-fadeIn">
          <MemoizedHero />
          <MemoizedStatsBar />
          <MemoizedRolesSection />
          <MemoizedLeaderboardSection />
          <MemoizedContent />
          <MemoizedAbout />
        </div>
      </main>

      {/* Universal layout items */}
      <Footer />
      
      {/* Lazy loaded auth panel modal with React Suspense safe boundaries */}
      <Suspense fallback={null}>
        <AuthModalLazy />
      </Suspense>

      {/* Language select on first load modal */}
      <LanguageModal />

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
