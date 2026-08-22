"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/Icons";
import { personal } from "@/lib/data";

const links = [
  { id: "work", label: "Work" },
  { id: "stack", label: "Stack" },
  { id: "career", label: "Career" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-30% 0px -55%", threshold: [0, 0.2, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-5">
      <div className="page-container pointer-events-none">
        <nav
          aria-label="Primary navigation"
          className="pointer-events-auto relative flex min-h-14 items-center justify-between border border-[var(--border-strong)] bg-[#07100df2] px-3 shadow-[0_14px_50px_rgba(0,0,0,0.28)] sm:px-4"
        >
          <a
            href="#top"
            aria-label="Lian Kang, back to top"
            className="flex min-h-11 items-center px-2 font-mono text-sm font-bold tracking-[-0.04em] text-[var(--foreground)] transition-colors duration-200 hover:text-[var(--accent)]"
          >
            LK<span className="ml-1 text-[var(--accent)]">&#47;&#47;</span>
          </a>

          <div className="hidden items-center md:flex">
            {links.map((link) => {
              const active = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={"#" + link.id}
                  aria-current={active ? "location" : undefined}
                  className={
                    "relative flex min-h-11 items-center px-4 font-mono text-xs uppercase tracking-[0.12em] transition-colors duration-200 " +
                    (active
                      ? "text-[var(--accent)]"
                      : "text-[var(--muted)] hover:text-[var(--foreground)]")
                  }
                >
                  <span
                    aria-hidden="true"
                    className={
                      "mr-2 h-1.5 w-1.5 rounded-full transition-colors duration-200 " +
                      (active ? "bg-[var(--accent)]" : "bg-[var(--border-strong)]")
                    }
                  />
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--subtle)]">
              Available
            </span>
            <a
              href={"mailto:" + personal.email}
              className="inline-flex min-h-11 items-center gap-2 bg-[var(--accent)] px-4 font-mono text-xs font-bold uppercase tracking-[0.1em] text-[var(--accent-ink)] transition-colors duration-200 hover:bg-[#dcff91]"
            >
              Let&apos;s talk
              <Icon name="arrow-up-right" className="h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center text-[var(--foreground)] transition-colors duration-200 hover:text-[var(--accent)] md:hidden"
          >
            <Icon name={menuOpen ? "close" : "menu"} className="h-6 w-6" />
          </button>

          {menuOpen && (
            <div
              id="mobile-navigation"
              className="absolute left-[-1px] right-[-1px] top-[calc(100%+1px)] border border-[var(--border-strong)] bg-[var(--background)] p-3 shadow-[0_24px_45px_rgba(0,0,0,0.45)] md:hidden"
            >
              <div className="grid gap-1">
                {links.map((link, index) => (
                  <a
                    key={link.id}
                    href={"#" + link.id}
                    onClick={() => setMenuOpen(false)}
                    className="flex min-h-12 items-center justify-between border-b border-[var(--border)] px-3 font-mono text-sm uppercase tracking-[0.1em] text-[var(--muted)] transition-colors duration-200 hover:bg-[var(--surface)] hover:text-[var(--foreground)]"
                  >
                    {link.label}
                    <span className="text-[10px] text-[var(--subtle)]">0{index + 1}</span>
                  </a>
                ))}
                <a
                  href={"mailto:" + personal.email}
                  className="mt-2 inline-flex min-h-12 items-center justify-between bg-[var(--accent)] px-4 font-mono text-sm font-bold uppercase tracking-[0.08em] text-[var(--accent-ink)]"
                >
                  Start a conversation
                  <Icon name="arrow-up-right" className="h-4 w-4" />
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
