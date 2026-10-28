"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "Startseite" },
  { href: "/#ueber-uns", label: "Über uns" },
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="tel:+491773931256"
            className="hidden items-center gap-2 rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-navy-dark sm:flex"
            aria-label="Jetzt anrufen: 0177 3931256"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"
                fill="currentColor"
              />
            </svg>
            0177 3931256
          </a>
          <a
            href="tel:+491773931256"
            aria-label="Jetzt anrufen"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-white sm:hidden"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"
                fill="currentColor"
              />
            </svg>
          </a>

          <button
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Menü öffnen"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="h-0.5 w-6 bg-navy" />
            <span className="h-0.5 w-6 bg-navy" />
            <span className="h-0.5 w-6 bg-navy" />
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 border-t border-gray-100 bg-white px-5 py-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-700"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
