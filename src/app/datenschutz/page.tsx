export const metadata = { title: "Datenschutz — Adam Gebäudeservice" };

export default function DatenschutzPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-32 md:px-8">
      <h1 className="text-3xl font-extrabold text-navy">
        Datenschutzerklärung
      </h1>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-gray-700">
        <section>
          <h2 className="mb-2 text-lg font-bold text-navy">
            1. Verantwortlicher
          </h2>
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            <br />
            Adam Gebäudeservice, Waren (Müritz), Deutschland
            <br />
            Telefon: 0177 3931256 · E-Mail: info@adam-gebaeudeservice.de
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-navy">
            2. Erhebung und Verarbeitung personenbezogener Daten
          </h2>
          <p>
            Wenn Sie unser Kontaktformular nutzen, erheben wir die von Ihnen
            angegebenen Daten (u. a. Name, E-Mail-Adresse, Telefonnummer,
            gewünschte Leistung, Einsatzort, Objektgröße, gewünschte
            Reinigungshäufigkeit und Ihre Nachricht), um Ihre Anfrage zu
            bearbeiten und Ihnen ein Angebot zu unterbreiten. Rechtsgrundlage
            ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen).
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-navy">
            3. Speicherung und Weitergabe
          </h2>
          <p>
            Ihre Daten werden in einer gesicherten Datenbank gespeichert und
            zusätzlich per E-Mail an uns übermittelt, damit wir Ihre Anfrage
            zeitnah bearbeiten können. Eine Weitergabe an Dritte erfolgt
            nicht, außer soweit dies zur Vertragserfüllung oder aufgrund
            gesetzlicher Verpflichtungen erforderlich ist.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-navy">
            4. Speicherdauer
          </h2>
          <p>
            Wir speichern Ihre Daten nur so lange, wie dies zur Erfüllung des
            Zwecks der Datenerhebung erforderlich ist oder gesetzliche
            Aufbewahrungsfristen dies vorsehen.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-navy">
            5. Ihre Rechte
          </h2>
          <p>
            Sie haben jederzeit das Recht auf Auskunft, Berichtigung,
            Löschung und Einschränkung der Verarbeitung Ihrer
            personenbezogenen Daten sowie ein Recht auf
            Datenübertragbarkeit. Zudem können Sie der Verarbeitung Ihrer
            Daten widersprechen. Wenden Sie sich hierzu bitte an
            info@adam-gebaeudeservice.de.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-navy">
            6. Beschwerderecht
          </h2>
          <p>
            Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde
            über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu
            beschweren.
          </p>
        </section>
      </div>
    </main>
  );
}
