import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="mb-4">
              <Logo variant="white" />
            </div>
            <p className="mt-4 max-w-sm text-sm text-white/70">
              Adam Gebäudeservice — Professionelle Gebäudereinigung in Waren
              (Müritz) und Umgebung.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/90">
              Kontakt
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                Telefon:{" "}
                <a href="tel:+491773931256" className="hover:text-white">
                  0177 3931256
                </a>
              </li>
              <li>
                E-Mail:{" "}
                <a
                  href="mailto:info@adam-gebaeudeservice.de"
                  className="hover:text-white"
                >
                  info@adam-gebaeudeservice.de
                </a>
              </li>
              <li className="pt-2 text-white/60">
                Erreichbarkeit: Termine nach Vereinbarung. Wir sind
                telefonisch und per E-Mail erreichbar.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/90">
              Rechtliches
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/impressum" className="hover:text-white">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-white">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © 2026 Adam Gebäudeservice. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
