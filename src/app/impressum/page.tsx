export const metadata = {
  title: "Impressum",
  description:
    "Impressum von Adam Gebäudeservice (Jamal Al Hamade Gebäudereinigung), Waren (Müritz).",
  alternates: { canonical: "/impressum" },
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-32 md:px-8">
      <h1 className="text-3xl font-extrabold text-navy">Impressum</h1>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-gray-700">
        <section>
          <p>
            Jamal Al Hamade Gebäudereinigung
            <br />
            Carl-Hainmüller-Straße 7
            <br />
            17192 Waren(müritz)
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-navy">Kontakt</h2>
          <p>
            Telefon: 0177 3931256
            <br />
            E-Mail: info@adam-gebaeudeservice.de
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-navy">
            Verbraucherstreitbeilegung/Universalschlichtungsstelle
          </h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </section>

        <p className="text-xs text-gray-500">
          Quelle:{" "}
          <a
            href="https://www.e-recht24.de"
            className="underline hover:text-navy"
            target="_blank"
            rel="noopener noreferrer"
          >
            eRecht24
          </a>
        </p>
      </div>
    </main>
  );
}
