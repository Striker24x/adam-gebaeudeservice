export const metadata = { title: "Impressum — Adam Gebäudeservice" };

export default function ImpressumPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-32 md:px-8">
      <h1 className="text-3xl font-extrabold text-navy">Impressum</h1>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-gray-700">
        <section>
          <h2 className="mb-2 text-lg font-bold text-navy">
            Angaben gemäß § 5 TMG
          </h2>
          <p>
            Adam Gebäudeservice
            <br />
            Waren (Müritz)
            <br />
            Deutschland
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
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p>Adam Gebäudeservice, Waren (Müritz)</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-navy">Haftungsausschluss</h2>
          <p>
            Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt
            erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der
            Inhalte können wir jedoch keine Gewähr übernehmen. Als
            Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich. Für fremde Inhalte,
            auf die wir lediglich verlinken, übernehmen wir keine Haftung.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-navy">Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge
            Dritter sind als solche gekennzeichnet. Die Vervielfältigung,
            Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb
            der Grenzen des Urheberrechtes bedürfen der schriftlichen
            Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </section>
      </div>
    </main>
  );
}
