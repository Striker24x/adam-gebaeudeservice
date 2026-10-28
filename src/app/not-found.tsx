import Link from "next/link";

export const metadata = {
  title: "Seite nicht gefunden",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-5 py-32 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-navy">
        Fehler 404
      </p>
      <h1 className="mt-4 text-3xl font-extrabold text-navy sm:text-4xl">
        Diese Seite wurde nicht gefunden
      </h1>
      <p className="mt-4 max-w-md text-gray-600">
        Die aufgerufene Seite existiert nicht oder wurde verschoben. Nutzen
        Sie die Links unten, um zu unseren Leistungen oder zur Startseite zu
        gelangen.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-dark"
        >
          Zur Startseite
        </Link>
        <Link
          href="/#leistungen"
          className="inline-flex items-center justify-center rounded-full border border-navy px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
        >
          Unsere Leistungen ansehen
        </Link>
        <a
          href="tel:+491773931256"
          className="inline-flex items-center justify-center rounded-full border border-navy px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
        >
          0177 3931256 anrufen
        </a>
      </div>
    </main>
  );
}
