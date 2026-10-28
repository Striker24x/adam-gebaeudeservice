export type ServiceFaq = { q: string; a: string };

export type ServiceContent = {
  slug: string;
  title: string;
  shortDescription: string;
  metaDescription: string;
  intro: string;
  bullets: string[];
  body: string[];
  faq: ServiceFaq[];
};

export const SERVICE_AREA_TOWNS = [
  "Waren (Müritz)",
  "Klink",
  "Kargow",
  "Jabel",
  "Torgelow am See",
  "Moltzow",
  "Groß Plasten",
  "Grabowhöfe",
  "Vollrathsruhe",
  "Schloen-Dratow",
  "Klocksin",
  "Hohen Wangelin",
  "Peenehagen",
  "Ankershagen",
  "Penzlin",
  "Malchow",
  "Rostock",
] as const;

export const services: ServiceContent[] = [
  {
    slug: "praxisreinigung",
    title: "Praxisreinigung",
    shortDescription:
      "Hygienische und gründliche Reinigung von Arztpraxen, Behandlungsräumen, Wartebereichen und Sanitäranlagen.",
    metaDescription:
      "Professionelle Praxisreinigung in Waren (Müritz) und Umgebung: hygienisch, zuverlässig und auf die Anforderungen von Arzt- und Zahnarztpraxen abgestimmt.",
    intro:
      "Eine saubere Praxis ist die Grundlage für Vertrauen – bei Patienten genauso wie beim eigenen Team. Adam Gebäudeservice reinigt Arzt-, Zahnarzt- und Therapiepraxen in Waren (Müritz) und Umgebung nach einem festen, hygienebewussten Ablauf, der auf die besonderen Anforderungen medizinischer Einrichtungen abgestimmt ist.",
    bullets: [
      "Behandlungsräume, Liegen und Arbeitsflächen desinfizierend reinigen",
      "Warte- und Empfangsbereiche gründlich und blickdicht sauber halten",
      "Sanitäranlagen hygienisch aufbereiten, inkl. Nachfüllservice für Seife und Handtücher",
      "Böden, Türgriffe und Kontaktflächen regelmäßig wischen und desinfizieren",
      "Fenster und Glasflächen im Empfangsbereich streifenfrei reinigen",
      "Flexible Termine außerhalb der Sprechzeiten, auch früh morgens oder abends",
    ],
    body: [
      "Praxen haben andere Anforderungen an Sauberkeit als ein normales Büro: Hygiene ist hier kein Nice-to-have, sondern Teil der Patientensicherheit. Deshalb arbeiten wir mit abgestimmten Reinigungsmitteln, klaren Checklisten pro Raum und einem festen Rhythmus, der sich nach den Öffnungszeiten Ihrer Praxis richtet – so wird nie während des laufenden Betriebs gereinigt.",
      "Zum Leistungsumfang gehören die tägliche oder wöchentliche Unterhaltsreinigung ebenso wie die gründliche Grundreinigung in größeren Abständen. Besonderes Augenmerk legen wir auf Kontaktflächen wie Türklinken, Lichtschalter und Handläufe, die im Praxisalltag besonders häufig berührt werden – diese Punkte nehmen wir bei jedem Termin gezielt mit in die Checkliste auf.",
      "Jede Praxis ist anders: Eine Zahnarztpraxis mit Behandlungsstühlen und Spülbecken hat andere Schwerpunkte als eine Physiotherapie-Praxis mit Matten und Trainingsgeräten oder eine Hausarztpraxis mit viel Publikumsverkehr im Wartebereich. Beim ersten Vor-Ort-Termin besprechen wir gemeinsam, welche Räume besonders im Fokus stehen sollen und wie der Tagesablauf Ihrer Praxis aussieht, damit wir uns reibungslos einfügen.",
      "Für die Reinigung setzen wir auf Mittel, die gängigen Hygieneanforderungen entsprechen und gleichzeitig materialschonend sind – wichtig für empfindliche Oberflächen wie Behandlungsstühle, Bildschirme oder Edelstahlgeräte. Auf Wunsch dokumentieren wir durchgeführte Reinigungen, etwa für interne Hygienenachweise.",
      "Die Terminplanung richten wir konsequent nach Ihren Sprechzeiten aus: Viele Praxen lassen frühmorgens vor Praxisöffnung oder abends nach Feierabend reinigen, damit kein Patientenbetrieb gestört wird. Kurzfristige Zusatztermine, etwa nach einem Infekt im Team oder vor einer Praxisbegehung, sind auf Anfrage möglich.",
      "Wir sind in Waren (Müritz) und der Region für Arzt- und Zahnarztpraxen im Einsatz – unter anderem in Klink, Kargow, Jabel, Torgelow am See, Moltzow, Groß Plasten, Grabowhöfe, Vollrathsruhe, Schloen-Dratow, Klocksin, Hohen Wangelin, Peenehagen, Ankershagen, Penzlin und Malchow. Auf Anfrage übernehmen wir auch Praxisreinigungen in Rostock.",
      "Qualitätssicherung ist uns wichtig: Jede Praxis bekommt eine feste Ansprechperson, die den Reinigungsplan kennt und bei Rückfragen erreichbar ist. Auftretende Besonderheiten – etwa ein verschobener Praxistag oder ein zusätzlicher Behandlungsraum – lassen sich so unkompliziert kurzfristig klären, ohne dass Informationen verloren gehen.",
      "Gerade bei Neukunden führen wir vor dem ersten regulären Termin häufig eine etwas ausführlichere Ersteinreinigung durch, um einen einheitlichen Ausgangszustand herzustellen. Ab dann greift der vereinbarte Reinigungsrhythmus, den wir bei Bedarf jederzeit anpassen können, etwa wenn sich Patientenzahlen oder Raumnutzung ändern.",
      "Praxisinhaber, die neben der reinen Reinigung auch Wert auf Nachhaltigkeit legen, können bei uns auf Wunsch umweltschonendere Reinigungsmittel ansprechen, sofern diese die notwendigen Hygienestandards erfüllen. Wir beraten Sie gern zu den jeweiligen Vor- und Nachteilen für Ihre Praxis.",
      "Sie möchten die Reinigung Ihrer Praxis in zuverlässige Hände geben? Nehmen Sie Kontakt mit uns auf – wir erstellen Ihnen ein kostenloses, unverbindliches Angebot, abgestimmt auf Raumgröße, Nutzung und gewünschte Frequenz.",
    ],
    faq: [
      {
        q: "Reinigen Sie auch außerhalb der Sprechzeiten?",
        a: "Ja, die meisten Praxistermine legen wir bewusst früh morgens vor Praxisöffnung oder abends nach Feierabend, damit der laufende Betrieb nicht gestört wird.",
      },
      {
        q: "Können Sie kurzfristig einspringen, z. B. nach einem Krankheitsfall im Team?",
        a: "In vielen Fällen ja. Sprechen Sie uns an – wir prüfen kurzfristige Verfügbarkeit und reagieren, wo immer möglich, zeitnah.",
      },
      {
        q: "Arbeiten Sie mit speziellen Hygienemitteln?",
        a: "Wir setzen Reinigungsmittel ein, die auf medizinische Einrichtungen abgestimmt sind, und passen die Auswahl bei Bedarf an Vorgaben Ihrer Praxis an.",
      },
      {
        q: "Wie wird der Preis für die Praxisreinigung berechnet?",
        a: "Der Preis richtet sich nach Raumgröße, Ausstattung und gewünschter Frequenz. Nach einem kurzen Vor-Ort-Termin erhalten Sie ein transparentes, unverbindliches Angebot.",
      },
      {
        q: "Gibt es eine feste Ansprechperson für unsere Praxis?",
        a: "Ja, wir stellen eine feste Ansprechperson, die den Reinigungsplan kennt und bei kurzfristigen Änderungen direkt erreichbar ist.",
      },
      {
        q: "Bieten Sie auch umweltschonendere Reinigungsmittel an?",
        a: "Auf Wunsch sprechen wir Alternativen an, die die notwendigen Hygienestandards für Praxen weiterhin erfüllen.",
      },
    ],
  },
  {
    slug: "bueroreinigung",
    title: "Büroreinigung",
    shortDescription:
      "Zuverlässige Reinigung von Büros, Arbeitsplätzen, Gemeinschaftsräumen und Sanitärbereichen.",
    metaDescription:
      "Büroreinigung in Waren (Müritz) und Umgebung: zuverlässig, termingetreu und für Unternehmen jeder Größe – von Einzelbüros bis zu Gewerbeflächen.",
    intro:
      "Ein gepflegtes Büro wirkt sich direkt auf Konzentration, Wohlbefinden und den Eindruck bei Kunden und Geschäftspartnern aus. Adam Gebäudeservice übernimmt die laufende Reinigung von Büroräumen, Arbeitsplätzen und Gemeinschaftsbereichen in Waren (Müritz) und der Region – pünktlich, gründlich und mit festen Ansprechpartnern.",
    bullets: [
      "Arbeitsplätze, Schreibtische und Bildschirmarbeitsplätze staubfrei halten",
      "Besprechungsräume und Empfangsbereiche herrichten",
      "Küchen, Teeküchen und Pausenräume hygienisch reinigen",
      "Sanitärbereiche inkl. Verbrauchsmaterial-Nachfüllservice",
      "Böden je nach Belag (Teppich, Laminat, Fliesen) fachgerecht pflegen",
      "Mülltrennung und -entsorgung nach Ihren Vorgaben",
    ],
    body: [
      "Jedes Büro hat eigene Abläufe, Besucherzeiten und Anforderungen. Deshalb legen wir vor Vertragsbeginn gemeinsam fest, welche Räume in welchem Rhythmus gereinigt werden sollen – von der täglichen Unterhaltsreinigung bis zur wöchentlichen Grundreinigung einzelner Bereiche.",
      "Wir reinigen sowohl Einzelbüros und kleine Kanzleien als auch größere Bürogebäude mit mehreren Mietparteien. Dabei arbeiten wir diskret, meist außerhalb der Geschäftszeiten, damit Ihr Betrieb nicht gestört wird und Mitarbeitende ungestört arbeiten können.",
      "Zum Alltag gehören Schreibtische, Tastaturen, Telefone und Monitore, die regelmäßig abgestaubt und bei Bedarf mit geeigneten Mitteln gereinigt werden, ebenso wie Besprechungsräume, die vor und nach wichtigen Terminen besonders herausgeputzt sein sollen. Küchen und Pausenräume behandeln wir mit erhöhter Hygieneaufmerksamkeit, da sie von vielen Mitarbeitenden gemeinsam genutzt werden.",
      "Bodenbeläge unterscheiden sich stark: Teppichböden brauchen regelmäßiges Staubsaugen und gelegentliche Grundreinigung, Laminat und Fliesen eine schonende Feuchtreinigung ohne Streifenbildung. Wir stimmen die Methode auf den jeweiligen Belag ab, damit Böden langfristig gepflegt bleiben und nicht vorzeitig verschleißen.",
      "Für Unternehmen mit mehreren Standorten oder wachsenden Flächen bieten wir flexible Vertragsmodelle an, die sich an Mitarbeiterzahl, Flächenänderung oder saisonalen Schwankungen anpassen lassen – ohne aufwendige Neuverhandlung bei jeder kleinen Änderung.",
      "Wir betreuen Büros in Waren (Müritz) sowie in der weiteren Umgebung, darunter Klink, Kargow, Jabel, Torgelow am See, Moltzow, Groß Plasten, Grabowhöfe, Vollrathsruhe, Schloen-Dratow, Klocksin, Hohen Wangelin, Peenehagen, Ankershagen, Penzlin und Malchow. Für Unternehmen mit Sitz in Rostock übernehmen wir die Büroreinigung ebenfalls auf Anfrage.",
      "Als Reinigungsfirma für Büros in Waren (Müritz) legen wir Wert auf feste Teams statt wechselndem Personal: Dieselben Reinigungskräfte kennen Ihre Räume, Ihre Wünsche und eventuelle Besonderheiten – das spart Abstimmungsaufwand und sorgt für gleichbleibende Qualität von Termin zu Termin.",
      "Nach dem Erstgespräch erhalten Sie ein schriftliches Angebot mit transparenter Kalkulation nach Fläche und Frequenz, ohne versteckte Zusatzkosten. Änderungen am Leistungsumfang – etwa ein zusätzlicher Raum oder eine geänderte Reinigungsfrequenz – lassen sich unkompliziert nachträglich anpassen.",
      "Für ein individuelles Angebot nennen Sie uns einfach die Größe Ihrer Büroflächen und die gewünschte Reinigungsfrequenz – wir melden uns zeitnah mit einem transparenten, kostenlosen Angebot zurück.",
    ],
    faq: [
      {
        q: "Reinigen Sie auch außerhalb der Geschäftszeiten?",
        a: "Ja, die Büroreinigung findet in der Regel früh morgens oder abends statt, damit der laufende Geschäftsbetrieb nicht beeinträchtigt wird.",
      },
      {
        q: "Gibt es feste Ansprechpartner für größere Objekte?",
        a: "Bei größeren Büroflächen oder mehreren Mietparteien stellen wir feste Ansprechpartner, damit Abstimmungen unkompliziert bleiben.",
      },
      {
        q: "Können Sie auch kurzfristig vor wichtigen Terminen reinigen?",
        a: "Zusatzreinigungen vor Kundenterminen oder Besprechungen sind nach Absprache möglich, soweit es unsere Kapazitäten zulassen.",
      },
      {
        q: "Wie flexibel sind die Vertragsmodelle?",
        a: "Wir passen Umfang und Frequenz an Mitarbeiterzahl, Flächenänderungen oder saisonale Schwankungen an – ohne aufwendige Neuverhandlung im Alltag.",
      },
      {
        q: "Was kostet Büroreinigung in Waren (Müritz)?",
        a: "Der Preis hängt von Fläche, Ausstattung und gewünschter Frequenz ab. Nennen Sie uns die Eckdaten Ihres Büros – Sie erhalten eine transparente, unverbindliche Kalkulation ohne versteckte Kosten.",
      },
      {
        q: "Arbeiten immer dieselben Reinigungskräfte bei uns?",
        a: "Soweit möglich, ja – wir setzen auf feste Teams pro Objekt, damit Räume und Besonderheiten bekannt bleiben.",
      },
    ],
  },
  {
    slug: "hotelreinigung",
    title: "Hotelreinigung",
    shortDescription:
      "Professionelle Reinigung von Hotelzimmern, Ferienwohnungen, öffentlichen Bereichen und sanitären Anlagen nach individueller Absprache.",
    metaDescription:
      "Hotelreinigung in Waren (Müritz) und Umgebung: Zimmer, Gemeinschaftsflächen und Sanitärbereiche professionell gereinigt – flexibel nach Belegung und Saison.",
    intro:
      "Gäste erwarten ab der ersten Minute ein makellos gepflegtes Zimmer. Adam Gebäudeservice unterstützt Hotels, Pensionen und Gästehäuser in Waren (Müritz) und Umgebung bei der laufenden Reinigung – flexibel abgestimmt auf Belegung, Saison und Check-in-/Check-out-Zeiten.",
    bullets: [
      "Zimmerreinigung inkl. Bettenmachen und Bad-Aufbereitung",
      "Öffentliche Bereiche wie Lobby, Flure und Treppenhäuser",
      "Frühstücksräume und Gemeinschaftsküchen hygienisch reinigen",
      "Sanitäre Anlagen im Gästebereich und Personalbereich",
      "Spiegel, Glasflächen und Fenster streifenfrei pflegen",
      "Saisonale Grundreinigung vor und nach der Hauptsaison",
    ],
    body: [
      "Die touristische Saison rund um die Müritz bringt besondere Anforderungen an Hotelreinigung mit sich: enge Zeitfenster zwischen Check-out und Check-in, wechselnde Auslastung und hohe Ansprüche der Gäste an Sauberkeit. Wir planen unsere Einsätze entsprechend flexibel und können kurzfristig auf Auslastungsänderungen reagieren.",
      "Neben der laufenden Zimmerreinigung übernehmen wir auch die Pflege öffentlicher Bereiche wie Lobby, Frühstücksraum und Treppenhäuser, damit der erste Eindruck für Ihre Gäste stimmt – vom Eingang bis zum Zimmer.",
      "Zur Zimmerreinigung zählen Bettenmachen, Bad- und Sanitäraufbereitung, Staubwischen und das Auffüllen von Hygieneartikeln. Auf Wunsch übernehmen wir auch den Wechsel von Hand- und Bettwäsche sowie kleinere Sichtkontrollen, etwa auf vergessene Gegenstände oder Schäden, die dem Housekeeping gemeldet werden sollten.",
      "In der Hauptsaison steigt die Zahl der Zimmerwechsel oft deutlich an, während in der Nebensaison seltenere, aber gründlichere Reinigungen gefragt sind. Wir passen Personaleinsatz und Taktung an diese Schwankungen an, damit Qualität unabhängig von der Auslastung konstant bleibt.",
      "Für Frühstücksräume und Gemeinschaftsküchen gelten besondere Hygienestandards, da hier Lebensmittel verarbeitet und verzehrt werden. Wir reinigen Tische, Theken und Kontaktflächen entsprechend gründlich und richten uns dabei nach den Öffnungszeiten Ihres Frühstücksservice.",
      "Unseren Service bieten wir Hotels, Pensionen und Gästehäusern in Waren (Müritz) sowie in Klink, Kargow, Jabel, Torgelow am See, Moltzow, Groß Plasten, Grabowhöfe, Vollrathsruhe, Schloen-Dratow, Klocksin, Hohen Wangelin, Peenehagen, Ankershagen, Penzlin und Malchow. Auch für Beherbergungsbetriebe in Rostock sind wir auf Anfrage im Einsatz.",
      "Als Reinigungsfirma für die Tourismusregion rund um die Müritz kennen wir die saisonalen Besonderheiten: hohe Auslastung in den Sommermonaten und an Feiertagen, ruhigere Phasen im Winter. Wir stimmen Personaleinsatz und Vertragsgestaltung darauf ab, statt ein starres Modell über das ganze Jahr zu verlangen.",
      "Für neue Kooperationen vereinbaren wir zunächst einen Vor-Ort-Termin, bei dem wir Zimmeranzahl, Gemeinschaftsflächen und übliche Belegungszeiten erfassen. Daraus entsteht ein Angebot mit klarer Preisstruktur pro Zimmer bzw. Flächeneinheit, das bei Bedarf saisonal angepasst werden kann.",
      "Sprechen Sie uns an, wenn Sie einen verlässlichen Reinigungspartner für die Saison oder dauerhaft suchen – wir erstellen Ihnen ein auf Ihre Zimmeranzahl zugeschnittenes Angebot.",
    ],
    faq: [
      {
        q: "Können Sie auf wechselnde Belegung flexibel reagieren?",
        a: "Ja, wir passen die Taktung je nach Saison und Auslastung an – von häufigen Zimmerwechseln in der Hochsaison bis zu ruhigeren Intervallen außerhalb der Saison.",
      },
      {
        q: "Übernehmen Sie auch den Wechsel von Bettwäsche und Handtüchern?",
        a: "Ja, das ist auf Wunsch Teil der Zimmerreinigung und wird individuell mit Ihnen abgestimmt.",
      },
      {
        q: "Reinigen Sie auch Frühstücksräume und Gemeinschaftsküchen?",
        a: "Ja, inklusive der dort geltenden erhöhten Hygieneanforderungen für Flächen, die mit Lebensmitteln in Kontakt kommen.",
      },
      {
        q: "Wie wird das Angebot für mein Hotel berechnet?",
        a: "Maßgeblich sind Zimmeranzahl, Größe der Gemeinschaftsflächen und gewünschte Frequenz. Nach kurzer Abstimmung erhalten Sie ein individuelles Angebot.",
      },
      {
        q: "Was kostet Hotelreinigung pro Zimmer?",
        a: "Das hängt von Zimmergröße, Ausstattung und Belegungstaktung ab. Beim Vor-Ort-Termin ermitteln wir die Eckdaten und erstellen eine transparente Preisstruktur pro Zimmer.",
      },
      {
        q: "Passen Sie sich an saisonale Auslastungsschwankungen an?",
        a: "Ja, Personaleinsatz und Vertragsgestaltung richten wir nach Haupt- und Nebensaison aus, statt ein starres Jahresmodell vorzugeben.",
      },
    ],
  },
  {
    slug: "ferienunterkuenfte",
    title: "Ferienunterkünfte",
    shortDescription:
      "Gründliche Reinigung von Ferienhäusern und Ferienwohnungen vor dem Gästewechsel – zuverlässig und nach individueller Absprache.",
    metaDescription:
      "Endreinigung für Ferienwohnungen und Ferienhäuser in Waren (Müritz) und an der Müritz: zuverlässig zwischen den Gästewechseln, auch kurzfristig.",
    intro:
      "Zwischen Auszug und nächstem Check-in bleibt oft nur wenig Zeit. Adam Gebäudeservice übernimmt die Endreinigung von Ferienwohnungen und Ferienhäusern in Waren (Müritz) und der Umgebung der Müritz – gründlich, zuverlässig und auch bei kurzfristigen Terminen.",
    bullets: [
      "Komplette Endreinigung zwischen zwei Gästewechseln",
      "Küche, Bad und Wohnbereich hygienisch aufbereiten",
      "Bettwäsche- und Handtuchwechsel nach Absprache",
      "Terrassen, Balkone und Außenbereiche mitreinigen",
      "Kontrolle auf Vollständigkeit und Schäden nach Auszug",
      "Kurzfristige Termine bei engem Gästewechsel möglich",
    ],
    body: [
      "Gerade in der Hauptsaison an der Müritz liegen Auszug und nächste Anreise oft am selben Tag. Wir kennen diesen Zeitdruck und richten unsere Einsatzplanung danach aus, damit Ihre Ferienwohnung pünktlich und in einwandfreiem Zustand für die nächsten Gäste bereitsteht.",
      "Neben der klassischen Endreinigung bieten wir auf Wunsch auch den Wechsel von Bettwäsche und Handtüchern sowie eine kurze Sichtkontrolle auf Schäden oder fehlendes Inventar an – praktisch für Vermieter, die nicht selbst vor Ort sind.",
      "Zur Endreinigung gehören Küche inklusive Kühlschrank und Kochfeld, Bad mit Sanitäranlagen, Wohn- und Schlafbereiche sowie das Auffüllen von Verbrauchsmaterial wie Müllbeuteln oder Toilettenpapier, soweit vom Vermieter gewünscht. Auch Terrassen, Balkone und Außensitzbereiche nehmen wir bei Bedarf in die Reinigung mit auf.",
      "Für Vermieter, die mehrere Objekte in der Region verwalten, bieten wir feste Reinigungsfenster an, die sich nach den üblichen Wechseltagen (meist samstags) richten, sowie kurzfristige Zusatztermine bei spontanen Buchungen oder verlängerten Aufenthalten.",
      "Nach jeder Endreinigung werfen wir einen kurzen, aufmerksamen Blick auf den Zustand der Unterkunft – das hilft Vermietern, Schäden oder fehlendes Inventar frühzeitig zu erkennen, bevor die nächsten Gäste einziehen.",
      "Unseren Endreinigungsservice bieten wir für Ferienunterkünfte in Waren (Müritz) sowie in Klink, Kargow, Jabel, Torgelow am See, Moltzow, Groß Plasten, Grabowhöfe, Vollrathsruhe, Schloen-Dratow, Klocksin, Hohen Wangelin, Peenehagen, Ankershagen, Penzlin und Malchow an. Auch Objekte in Rostock übernehmen wir auf Anfrage.",
      "Was zur Endreinigung gehört, hängt vom Objekt ab: Bei einer kleinen Ferienwohnung reicht oft eine kompakte Reinigung von ein bis zwei Stunden, bei einem größeren Ferienhaus mit mehreren Schlafzimmern und Außenbereich braucht es entsprechend mehr Zeit. Wir kalkulieren transparent nach Wohnfläche und Ausstattung.",
      "Für Vermieter, die über Plattformen wie Airbnb oder Booking.com vermieten, ist ein verlässlicher Reinigungspartner besonders wichtig, da schlechte Bewertungen wegen mangelnder Sauberkeit sich direkt auf künftige Buchungen auswirken. Wir arbeiten nach einer festen Checkliste, damit jede Endreinigung denselben hohen Standard erreicht.",
      "Vermieten Sie eine oder mehrere Ferienunterkünfte? Lassen Sie uns über eine feste Zusammenarbeit für die Saison sprechen – kontaktieren Sie uns für ein unverbindliches Angebot.",
    ],
    faq: [
      {
        q: "Wie kurzfristig können Sie eine Endreinigung einplanen?",
        a: "Bei engem Gästewechsel, etwa am selben Tag, versuchen wir kurzfristig verfügbare Termine zu finden – am besten frühzeitig anfragen.",
      },
      {
        q: "Übernehmen Sie auch den Wäschewechsel?",
        a: "Ja, Bettwäsche- und Handtuchwechsel sind auf Wunsch Teil der Endreinigung.",
      },
      {
        q: "Melden Sie Schäden oder fehlendes Inventar?",
        a: "Wir werfen nach jeder Reinigung einen aufmerksamen Blick auf den Zustand der Unterkunft und informieren Sie bei Auffälligkeiten.",
      },
      {
        q: "Betreuen Sie auch mehrere Ferienobjekte eines Vermieters?",
        a: "Ja, für Vermieter mit mehreren Objekten richten wir feste Reinigungsfenster ein, die sich an den üblichen Wechseltagen orientieren.",
      },
      {
        q: "Was kostet die Endreinigung einer Ferienwohnung?",
        a: "Der Preis richtet sich nach Wohnfläche und Ausstattung. Nennen Sie uns Größe und Lage der Unterkunft – Sie erhalten eine transparente Preiskalkulation ohne versteckte Kosten.",
      },
      {
        q: "Arbeiten Sie nach einer festen Checkliste?",
        a: "Ja, damit jede Endreinigung – unabhängig davon, wer sie durchführt – denselben hohen Standard erreicht.",
      },
    ],
  },
  {
    slug: "treppenhausreinigung",
    title: "Treppenhausreinigung",
    shortDescription:
      "Zuverlässige Reinigung von Treppenhäusern, Fluren, Eingangsbereichen und Geländern.",
    metaDescription:
      "Treppenhausreinigung in Waren (Müritz) und Umgebung: regelmäßige Pflege von Treppen, Fluren, Geländern und Eingangsbereichen für Wohn- und Gewerbeobjekte.",
    intro:
      "Das Treppenhaus ist der erste Eindruck eines Gebäudes – für Bewohner, Mieter und Besucher. Adam Gebäudeservice übernimmt die regelmäßige Reinigung von Treppenhäusern, Fluren und Eingangsbereichen in Waren (Müritz) und Umgebung, zuverlässig nach festem Reinigungsplan.",
    bullets: [
      "Treppenstufen, Podeste und Handläufe gründlich reinigen",
      "Fenster und Glasflächen im Treppenhaus pflegen",
      "Eingangsbereiche, Fußmatten und Briefkastenanlagen sauber halten",
      "Keller- und Dachbodenzugänge nach Bedarf mitreinigen",
      "Winterdienst-Anfragen auf Nachfrage möglich",
      "Fester Reinigungsplan nach Hausordnung oder individueller Absprache",
    ],
    body: [
      "Ob Mehrfamilienhaus, Gewerbeobjekt oder Eigentümergemeinschaft: Ein gepflegtes Treppenhaus erhöht nicht nur die Wohnqualität, sondern senkt auch das Unfallrisiko durch rutschige oder verschmutzte Stufen. Wir reinigen nach einem festen, dokumentierten Turnus, der sich an Hausordnung oder Verwaltervorgaben orientiert.",
      "Zum Leistungsumfang gehören neben den Treppenstufen selbst auch Handläufe, Lichtschalter, Fenster und der Eingangsbereich inklusive Briefkastenanlage – die Bereiche also, die am häufigsten frequentiert werden und am schnellsten verschmutzen.",
      "Der genaue Reinigungsturnus richtet sich nach Größe und Nutzung des Objekts: In stark frequentierten Mehrfamilienhäusern ist wöchentliche Reinigung üblich, in kleineren Objekten reicht oft ein zwei- bis vierwöchentlicher Rhythmus. Gemeinsam mit Hausverwaltung oder Eigentümergemeinschaft legen wir einen Plan fest, der zum tatsächlichen Bedarf passt.",
      "Neben der laufenden Reinigung bieten wir auf Anfrage auch Grundreinigungen an, etwa nach Renovierungsarbeiten im Haus, sowie saisonale Zusatzleistungen wie das Entfernen von Laub im Eingangsbereich im Herbst.",
      "Für Objekte mit Außenflächen im Winter können wir auf Anfrage auch Winterdienst-Leistungen wie Schneeräumung und Streuen vor Eingängen koordinieren, damit Bewohner und Besucher sicher ins Gebäude gelangen.",
      "Wir reinigen Treppenhäuser in Waren (Müritz) und der Region, darunter Klink, Kargow, Jabel, Torgelow am See, Moltzow, Groß Plasten, Grabowhöfe, Vollrathsruhe, Schloen-Dratow, Klocksin, Hohen Wangelin, Peenehagen, Ankershagen, Penzlin und Malchow. Objekte in Rostock übernehmen wir ebenfalls auf Anfrage.",
      "Die Kosten für eine Treppenhausreinigung werden meist pro Etage oder pro Quadratmeter kalkuliert und hängen von Frequenz, Etagenzahl und Zustand der Flächen ab. Nach einer kurzen Objektbesichtigung erhalten Hausverwaltungen und Eigentümergemeinschaften von uns eine nachvollziehbare, schriftliche Kalkulation, oft als Teil der Betriebskostenabrechnung.",
      "Für Mehrfamilienhäuser mit mehreren Aufgängen bieten wir einheitliche Reinigungsstandards über alle Aufgänge hinweg, damit kein Treppenhaus schlechter gepflegt wird als ein anderes – ein häufiger Kritikpunkt bei wechselnden Dienstleistern.",
      "Für Hausverwaltungen und Eigentümergemeinschaften erstellen wir gerne ein Angebot für die regelmäßige Treppenhausreinigung – sprechen Sie uns einfach an.",
    ],
    faq: [
      {
        q: "Wie oft wird das Treppenhaus gereinigt?",
        a: "Das hängt von Größe und Nutzung des Objekts ab – üblich sind wöchentliche bis vierwöchentliche Intervalle, die wir gemeinsam mit Ihnen festlegen.",
      },
      {
        q: "Übernehmen Sie auch Winterdienst?",
        a: "Ja, Schneeräumung und Streuen vor Eingängen können wir auf Anfrage koordinieren.",
      },
      {
        q: "Reinigen Sie auch nach Renovierungsarbeiten?",
        a: "Ja, für solche Fälle bieten wir zusätzliche Grundreinigungen außerhalb des normalen Turnus an.",
      },
      {
        q: "Arbeiten Sie direkt mit Hausverwaltungen zusammen?",
        a: "Ja, wir erstellen Angebote für Hausverwaltungen und Eigentümergemeinschaften und stimmen den Reinigungsplan mit den jeweiligen Vorgaben ab.",
      },
      {
        q: "Was kostet Treppenhausreinigung im Mehrfamilienhaus?",
        a: "Die Kalkulation erfolgt meist pro Etage oder Quadratmeter, abhängig von Frequenz und Zustand der Flächen. Nach einer Objektbesichtigung erhalten Sie eine nachvollziehbare, schriftliche Kalkulation.",
      },
      {
        q: "Gelten einheitliche Standards bei mehreren Aufgängen?",
        a: "Ja, wir reinigen alle Aufgänge eines Objekts nach demselben Standard, damit die Qualität überall gleich bleibt.",
      },
    ],
  },
  {
    slug: "glasreinigung",
    title: "Glasreinigung",
    shortDescription:
      "Professionelle Reinigung von Fenstern, Glasflächen und Rahmen für klare und gepflegte Ergebnisse.",
    metaDescription:
      "Glas- und Fensterreinigung in Waren (Müritz) und Umgebung: streifenfreie Ergebnisse für Privathaushalte, Büros und Gewerbeobjekte.",
    intro:
      "Verschmutzte Fenster trüben jeden Ausblick – und jeden ersten Eindruck. Adam Gebäudeservice reinigt Fenster, Glasfronten und Rahmen in Waren (Müritz) und der Region streifenfrei und gründlich, für Privathaushalte wie für Gewerbeobjekte.",
    bullets: [
      "Fenster innen und außen streifenfrei reinigen",
      "Rahmen, Fensterbänke und Dichtungen mitreinigen",
      "Glasfronten und Schaufenster im Gewerbebereich",
      "Wintergärten und Terrassenverglasungen",
      "Reinigung auch in größeren Höhen mit geeigneter Ausrüstung",
      "Einmalige Termine oder regelmäßige Intervalle möglich",
    ],
    body: [
      "Streifenfreie Fenster sind eine Frage der richtigen Technik, der passenden Reinigungsmittel und der Erfahrung – deshalb setzen wir auf abgestimmte Arbeitsabläufe statt Zufallsergebnisse. Das gilt für normale Wohnungsfenster genauso wie für große Glasflächen an Gewerbeobjekten.",
      "Je nach Objekt reinigen wir einmalig (z. B. nach Bauarbeiten oder vor einem besonderen Anlass) oder im regelmäßigen Turnus, etwa halbjährlich oder quartalsweise. Für höher gelegene Fenster arbeiten wir mit geeigneter Ausrüstung, damit auch schwer zugängliche Flächen zuverlässig gereinigt werden.",
      "Neben der eigentlichen Glasfläche reinigen wir auch Rahmen, Fensterbänke und Dichtungen mit, da sich dort häufig Staub und Schmutz ablagern, der auf den ersten Blick nicht auffällt, aber das Gesamtbild trübt. Bei Schaufenstern und Glasfronten im Gewerbebereich legen wir besonderen Wert auf ein makelloses Ergebnis, da diese Flächen direkt die Außenwirkung Ihres Unternehmens prägen.",
      "Wintergärten und Terrassenverglasungen stellen besondere Anforderungen, da sie oft großflächig, schräg oder über mehrere Ebenen verteilt sind. Wir prüfen vor Ort, welche Technik und welcher Zugang notwendig sind, und planen den Einsatz entsprechend.",
      "Nach Bauarbeiten, etwa bei Fenstertausch oder Renovierung, bleiben häufig Zement- oder Farbreste auf dem Glas zurück. Für solche Fälle bieten wir eine gründliche Erstreinigung an, die über die normale Unterhaltsreinigung hinausgeht.",
      "Unseren Glasreinigungsservice bieten wir in Waren (Müritz) sowie in Klink, Kargow, Jabel, Torgelow am See, Moltzow, Groß Plasten, Grabowhöfe, Vollrathsruhe, Schloen-Dratow, Klocksin, Hohen Wangelin, Peenehagen, Ankershagen, Penzlin und Malchow an. Aufträge in Rostock übernehmen wir ebenfalls auf Anfrage.",
      "Die Kosten für Glasreinigung werden meist pro Quadratmeter oder pro Fenster kalkuliert und richten sich nach Fensteranzahl, Zugänglichkeit und gewünschtem Turnus. Bei größeren Objekten wie Wintergärten oder Glasfronten erstellen wir nach einer kurzen Begehung ein transparentes Angebot.",
      "Als Reinigungsfirma für Privat- und Gewerbekunden in der Region legen wir Wert auf zuverlässige Termine: Fest vereinbarte Reinigungsrhythmen werden eingehalten, Verschiebungen kündigen wir frühzeitig an.",
      "Ob einmalige Glasreinigung oder fester Reinigungsrhythmus: Kontaktieren Sie uns für ein kostenloses Angebot, abgestimmt auf Fensteranzahl und Zugänglichkeit.",
    ],
    faq: [
      {
        q: "Reinigen Sie auch schwer zugängliche Fenster in größerer Höhe?",
        a: "Ja, dafür setzen wir geeignete Ausrüstung ein und prüfen vorab, welche Zugangsmöglichkeiten vor Ort bestehen.",
      },
      {
        q: "Wie oft sollten Fenster professionell gereinigt werden?",
        a: "Üblich sind halbjährliche bis quartalsweise Intervalle, abhängig von Lage, Witterung und persönlichen Ansprüchen.",
      },
      {
        q: "Können Sie Verschmutzungen nach Bauarbeiten entfernen?",
        a: "Ja, nach Fenstertausch oder Renovierung bieten wir eine gründliche Erstreinigung für Zement- oder Farbreste an.",
      },
      {
        q: "Reinigen Sie auch Wintergärten und Terrassenverglasungen?",
        a: "Ja, dafür prüfen wir individuell die passende Technik, da diese Flächen oft großflächig oder schräg angeordnet sind.",
      },
      {
        q: "Was kostet professionelle Glasreinigung?",
        a: "Die Kalkulation erfolgt meist pro Fenster oder Quadratmeter, abhängig von Zugänglichkeit und Anzahl. Nennen Sie uns Fensteranzahl und Objektart für ein transparentes Angebot.",
      },
      {
        q: "Bieten Sie auch regelmäßige Glasreinigungsverträge an?",
        a: "Ja, neben einmaligen Terminen sind feste Rhythmen wie halbjährlich oder quartalsweise möglich.",
      },
    ],
  },
  {
    slug: "gartenpflege",
    title: "Gartenpflege",
    shortDescription:
      "Pflege von Rasen, Grünflächen, Beeten und Außenbereichen rund um Ihre Immobilie.",
    metaDescription:
      "Gartenpflege und Außenanlagenpflege in Waren (Müritz) und Umgebung: Rasenpflege, Heckenschnitt und Pflege von Grünflächen für Privat- und Gewerbeobjekte.",
    intro:
      "Ein gepflegter Außenbereich rundet das Gesamtbild einer Immobilie ab. Adam Gebäudeservice übernimmt die laufende Pflege von Rasen, Beeten, Hecken und Außenanlagen in Waren (Müritz) und Umgebung – für Privatgrundstücke, Mehrfamilienhäuser und Gewerbeobjekte.",
    bullets: [
      "Rasenmähen und Kantenschnitt in regelmäßigen Intervallen",
      "Hecken- und Strauchschnitt nach Jahreszeit",
      "Beetpflege, Unkrautentfernung und Laubbeseitigung",
      "Pflege von Wegen, Einfahrten und Außenanlagen",
      "Saisonale Grundreinigung im Frühjahr und Herbst",
      "Einmalige Einsätze oder fester Pflegevertrag möglich",
    ],
    body: [
      "Gartenpflege ist Saisonarbeit: Im Frühjahr und Sommer steht regelmäßiges Mähen und der Rückschnitt von Hecken und Sträuchern im Vordergrund, im Herbst die Laubbeseitigung und die Vorbereitung der Außenanlagen auf den Winter. Wir richten die Einsatzfrequenz nach der Jahreszeit und dem tatsächlichen Pflegebedarf Ihres Grundstücks.",
      "Für Vermieter und Hausverwaltungen bieten wir auch die kontinuierliche Pflege von Gemeinschaftsgrünflächen an, inklusive Wegepflege und Entfernung von Unkraut aus Pflasterfugen – damit das Objekt das ganze Jahr über einen gepflegten Eindruck macht.",
      "Beim Heckenschnitt richten wir uns nach den jahreszeitlich sinnvollen Schnittzeiten, damit Pflanzen gesund bleiben und gleichzeitig ein gepflegtes Erscheinungsbild entsteht. Bei Beeten übernehmen wir regelmäßiges Unkrautentfernen sowie auf Wunsch kleinere Pflegearbeiten wie das Zurückschneiden verblühter Pflanzen.",
      "Private Gartenbesitzer, die selbst wenig Zeit für die laufende Pflege haben, profitieren von einem festen Pflegevertrag mit regelmäßigen Terminen, während Eigentümer von Ferienimmobilien häufig eine saisonale Grundreinigung im Frühjahr vor der Vermietungssaison und im Herbst danach bevorzugen.",
      "Wege, Einfahrten und befestigte Außenflächen gehören ebenfalls zum Leistungsumfang: Wir entfernen Unkraut aus Fugen, kehren Laub und Schmutz zusammen und halten so auch die nicht-grünen Bereiche rund um Ihre Immobilie gepflegt.",
      "Unseren Gartenpflegeservice bieten wir in Waren (Müritz) sowie in Klink, Kargow, Jabel, Torgelow am See, Moltzow, Groß Plasten, Grabowhöfe, Vollrathsruhe, Schloen-Dratow, Klocksin, Hohen Wangelin, Peenehagen, Ankershagen, Penzlin und Malchow an. Aufträge in Rostock übernehmen wir ebenfalls auf Anfrage.",
      "Die Kosten für Gartenpflege werden meist pro Stunde oder im Rahmen eines monatlichen Pflegevertrags kalkuliert und richten sich nach Grundstücksgröße, Umfang der Arbeiten und Häufigkeit. Nach einer kurzen Besichtigung erhalten Sie von uns eine transparente, unverbindliche Kalkulation.",
      "Als Reinigungsfirma mit Zusatzleistung Außenanlagenpflege sehen wir Gebäude- und Gartenpflege gerne als Gesamtpaket: Kunden, die bereits Treppenhaus- oder Büroreinigung bei uns beauftragt haben, können die Gartenpflege unkompliziert ergänzen, ohne einen zweiten Dienstleister koordinieren zu müssen.",
      "Egal ob einmaliger Pflegeeinsatz oder laufender Pflegevertrag: Nennen Sie uns Grundstücksgröße und gewünschten Umfang – wir erstellen Ihnen ein passendes, kostenloses Angebot.",
    ],
    faq: [
      {
        q: "Wie oft wird der Rasen gemäht?",
        a: "Das hängt von Jahreszeit und Wachstum ab – in der Hauptsaison meist alle ein bis zwei Wochen, außerhalb der Saison seltener.",
      },
      {
        q: "Übernehmen Sie auch Heckenschnitt?",
        a: "Ja, wir schneiden Hecken und Sträucher zu den jahreszeitlich passenden Zeitpunkten.",
      },
      {
        q: "Pflegen Sie auch Gemeinschaftsgrünflächen für Hausverwaltungen?",
        a: "Ja, inklusive Wegepflege und Entfernung von Unkraut aus Pflasterfugen für Mehrfamilienhäuser und Wohnanlagen.",
      },
      {
        q: "Ist auch eine einmalige Grundreinigung des Gartens möglich?",
        a: "Ja, etwa zu Saisonbeginn oder -ende, unabhängig von einem laufenden Pflegevertrag.",
      },
      {
        q: "Was kostet Gartenpflege pro Monat?",
        a: "Das hängt von Grundstücksgröße und gewünschtem Umfang ab. Nach einer kurzen Besichtigung erhalten Sie eine transparente Kalkulation, egal ob stundenweise oder als monatlicher Pflegevertrag.",
      },
      {
        q: "Kann ich Gartenpflege mit anderen Leistungen wie Treppenhausreinigung kombinieren?",
        a: "Ja, viele Kunden kombinieren Gebäude- und Außenanlagenpflege bei uns als ein Gesamtpaket mit einem Ansprechpartner.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceContent | undefined {
  return services.find((s) => s.slug === slug);
}
