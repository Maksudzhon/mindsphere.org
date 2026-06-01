/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Globe, Github, MessageSquare, Twitter, PlayCircle } from "lucide-react";
import { useApp } from "../../providers/AppProvider";

export const Footer: React.FC = () => {
  const { t, setPage } = useApp();

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const rect = el.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetY = rect.top + scrollTop - 74;
      window.scrollTo({ top: targetY, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[var(--bg)] border-t border-[var(--bd)] py-16 text-xs text-[var(--txt2)] select-none">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 pb-12 border-b border-[var(--bd)]">
          
          {/* Col 1 Brand Column */}
          <div className="space-y-4">
            <div
              onClick={handleLogoClick}
              className="flex items-center gap-2 cursor-pointer group w-fit"
            >
              <span className="text-xl text-[var(--ac)] animate-spin-slow font-heading">
                ⬡
              </span>
              <div className="flex items-baseline">
                <span className="font-display font-black text-lg tracking-tight text-grad-main">
                  MindSphere
                </span>
              </div>
            </div>
            
            <p className="leading-relaxed font-semibold">
              {t.footer.desc}
            </p>

            {/* Social Icons row */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://mindsphere.org"
                className="p-1.5 rounded-full border border-[var(--bd)] bg-[var(--sur2)] text-[var(--txt2)] hover:text-[var(--ac)] transition-colors cursor-pointer"
                aria-label="MindSphere Web Portal"
              >
                <Globe size={14} />
              </a>
              <a
                href="https://github.com/mindsphere-org"
                className="p-1.5 rounded-full border border-[var(--bd)] bg-[var(--sur2)] text-[var(--txt2)] hover:text-[var(--ac)] transition-colors cursor-pointer"
                aria-label="GitHub Repository"
              >
                <Github size={14} />
              </a>
              <a
                href="https://x.com/mindsphere_org"
                className="p-1.5 rounded-full border border-[var(--bd)] bg-[var(--sur2)] text-[var(--txt2)] hover:text-[var(--ac)] transition-colors cursor-pointer"
                aria-label="X Account"
              >
                <Twitter size={14} />
              </a>
              <a
                href="https://discord.gg/mindsphere"
                className="p-1.5 rounded-full border border-[var(--bd)] bg-[var(--sur2)] text-[var(--txt2)] hover:text-[var(--ac)] transition-colors cursor-pointer"
                aria-label="Discord Guild Partner"
              >
                <MessageSquare size={14} />
              </a>
            </div>
          </div>

          {/* Col 2 Platform Links */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-[var(--txt)] text-xs uppercase tracking-wider">
              {t.footer.platform}
            </h4>
            <ul className="space-y-2.5 font-semibold">
              <li>
                <button
                  onClick={() => handleNavClick("features")}
                  className="hover:text-[var(--ac)] transition-colors cursor-pointer"
                >
                  {t.footer.c1Link1}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("pricing")}
                  className="hover:text-[var(--ac)] transition-colors cursor-pointer"
                >
                  {t.footer.c1Link2}
                </button>
              </li>
              <li>
                <a
                  href="https://mindsphere.space"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--ac)] transition-colors cursor-pointer"
                >
                  {t.footer.c1Link3}
                </a>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("guide")}
                  className="hover:text-[var(--ac)] transition-colors cursor-pointer"
                >
                  {t.footer.c1Link4}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3 Community Links */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-[var(--txt)] text-xs uppercase tracking-wider">
              {t.footer.community}
            </h4>
            <ul className="space-y-2.5 font-semibold">
              <li>
                <a
                  href="https://github.com/mindsphere-org"
                  className="hover:text-[var(--ac)] transition-colors cursor-pointer"
                >
                  {t.footer.c2Link1}
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/mindsphere"
                  className="hover:text-[var(--ac)] transition-colors cursor-pointer"
                >
                  {t.footer.c2Link2}
                </a>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("faq")}
                  className="hover:text-[var(--ac)] transition-colors cursor-pointer"
                >
                  {t.footer.c2Link3}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("roles")}
                  className="hover:text-[var(--ac)] transition-colors cursor-pointer"
                >
                  {t.footer.c2Link4}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4 Legal Links */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-[var(--txt)] text-xs uppercase tracking-wider">
              {t.footer.legal}
            </h4>
            <ul className="space-y-2.5 font-semibold">
              <li>
                <a href="#privacy" className="hover:text-[var(--ac)] transition-colors">
                  {t.footer.c3Link1}
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-[var(--ac)] transition-colors">
                  {t.footer.c3Link2}
                </a>
              </li>
              <li>
                <a href="#branding" className="hover:text-[var(--ac)] transition-colors">
                  {t.footer.c3Link3}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-[10px] leading-none text-[var(--txt3)] font-mono font-bold">
            © {new Date().getFullYear()} MindSphere. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span className="text-[10px] leading-none text-[var(--txt3)] font-mono font-bold uppercase tracking-wider">
              {t.footer.madeWith}
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
