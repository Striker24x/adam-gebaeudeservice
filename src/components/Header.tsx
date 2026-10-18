"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

const navLinks = [
  { href: "#", label: "Startseite" },
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#kontakt", label: "Kontakt" },
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
