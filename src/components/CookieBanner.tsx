"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored !== "accepted" && stored !== "declined") {
        setVisible(true);
      }
    } catch {
      // localStorage nicht verfügbar (z. B. deaktiviert) — Banner sicherheitshalber zeigen
      setVisible(true);
    }
  }, []);

  function decide(value: "accepted" | "declined") {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignorieren, wenn localStorage nicht verfügbar ist
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie-Hinweis"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white px-5 py-5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] md:px-8"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-gray-700">
          Wir verwenden Cookies, um unsere Website bereitzustellen und zu
          optimieren. Weitere Informationen finden Sie in unserer{" "}
          <a href="/datenschutz" className="underline hover:text-navy">
            Datenschutzerklärung
          </a>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => decide("declined")}
            className="rounded-full border border-gray-300 px-5 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
          >
            Ablehnen
          </button>
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="rounded-full bg-navy px-5 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
