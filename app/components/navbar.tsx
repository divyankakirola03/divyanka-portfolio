"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50">
      <nav className="border-b border-black/10 bg-[#f7f5f0]/95 backdrop-blur-md">
        <div className="flex items-center justify-between gap-3 px-6 py-5 md:px-12 lg:px-16">
          <a
            href="#home"
            onClick={closeMenu}
            className="shrink-0 font-serif text-lg tracking-tight sm:text-xl"
          >
            Divyanka Kirola
          </a>

          <div className="hidden items-center gap-8 text-sm md:flex">
            <a href="#home" className="transition hover:opacity-50">
              Home
            </a>
            <a href="#work" className="transition hover:opacity-50">
              Work
            </a>
            <a href="#about" className="transition hover:opacity-50">
              About
            </a>
            <a
              href="#contact"
              className="rounded-full bg-black px-5 py-3 text-white transition hover:scale-105"
            >
              Let&apos;s Talk
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <a
              href="#contact"
              onClick={closeMenu}
              className="rounded-full bg-black px-4 py-2 text-xs text-white transition hover:scale-105 sm:px-5 sm:text-sm"
            >
              Let&apos;s Talk
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              className="relative flex h-10 w-10 shrink-0 items-center justify-center"
            >
              <div className="flex flex-col gap-[6px]">
                <span
                  className={`block h-[2px] w-7 bg-black transition-all duration-300 ${
                    menuOpen ? "translate-y-[8px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-[2px] w-7 bg-black transition-all duration-300 ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-[2px] w-7 bg-black transition-all duration-300 ${
                    menuOpen ? "-translate-y-[8px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`overflow-hidden border-b bg-[#f7f5f0] transition-all duration-500 ease-in-out md:hidden ${
          menuOpen
            ? "max-h-[650px] border-black/10 opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="px-6 pb-8 pt-4">
          <div className="flex flex-col">
            <a
              href="#home"
              onClick={closeMenu}
              className="border-b border-black/10 py-5 font-serif text-3xl"
            >
              Home
            </a>
            <a
              href="#work"
              onClick={closeMenu}
              className="border-b border-black/10 py-5 font-serif text-3xl"
            >
              Work
            </a>
            <a
              href="#about"
              onClick={closeMenu}
              className="border-b border-black/10 py-5 font-serif text-3xl"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="py-5 font-serif text-3xl"
            >
              Contact
            </a>
          </div>

          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-5 flex w-full items-center justify-between rounded-full bg-black px-7 py-5 text-white"
          >
            <span className="text-lg">Contact Me</span>
            <span className="text-xl">↗</span>
          </a>

          <div className="mt-6 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-black/40 sm:text-xs">
            <a
              href="https://github.com/divyankakirola03"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-black"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/divyanka-kirola-b70236293/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-black"
            >
              LinkedIn
            </a>
            <a
              href="mailto:divyankakirola03@gmail.com"
              className="transition hover:text-black"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
