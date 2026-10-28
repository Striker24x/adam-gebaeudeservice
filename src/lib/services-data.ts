export type ServiceContent = {
  slug: string;
  title: string;
  shortDescription: string;
  metaDescription: string;
  intro: string;
  bullets: string[];
  body: string[];
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

const AREA_SENTENCE =
  "Wir sind in Waren (Müritz) und der gesamten Region tätig – u. a. in Klink, Kargow, Jabel, Torgelow am See, Moltzow, Groß Plasten, Grabowhöfe, Vollrathsruhe, Schloen-Dratow, Klocksin, Hohen Wangelin, Peenehagen, Ankershagen, Penzlin und Malchow. Auf Anfrage übernehmen wir auch Aufträge in Rostock.";

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
      "Zum Leistungsumfang gehören die tägliche oder wöchentliche Unterhaltsreinigung ebenso wie die gründliche Grundreinigung in größeren Abständen. Besonderes Augenmerk legen wir auf Kontaktflächen wie Türklinken, Lichtschalter und Handläufe, die im Praxisalltag besonders häufig berührt werden.",
      AREA_SENTENCE,
      "Sie möchten die Reinigung Ihrer Praxis in zuverlässige Hände geben? Nehmen Sie Kontakt mit uns auf – wir erstellen Ihnen ein kostenloses, unverbindliches Angebot, abgestimmt auf Raumgröße, Nutzung und gewünschte Frequenz.",
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
      "Wir reinigen sowohl Einzelbüros und kleine Kanzleien als auch größere Bürogebäude mit mehreren Mietparteien. Dabei arbeiten wir diskret, meist außerhalb der Geschäftszeiten, damit Ihr Betrieb nicht gestört wird.",
      AREA_SENTENCE,
      "Für ein individuelles Angebot nennen Sie uns einfach die Größe Ihrer Büroflächen und die gewünschte Reinigungsfrequenz – wir melden uns zeitnah mit einem transparenten, kostenlosen Angebot zurück.",
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
      AREA_SENTENCE,
      "Sprechen Sie uns an, wenn Sie einen verlässlichen Reinigungspartner für die Saison oder dauerhaft suchen – wir erstellen Ihnen ein auf Ihre Zimmeranzahl zugeschnittenes Angebot.",
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
      AREA_SENTENCE,
      "Vermieten Sie eine oder mehrere Ferienunterkünfte? Lassen Sie uns über eine feste Zusammenarbeit für die Saison sprechen – kontaktieren Sie uns für ein unverbindliches Angebot.",
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
      AREA_SENTENCE,
      "Für Hausverwaltungen und Eigentümergemeinschaften erstellen wir gerne ein Angebot für die regelmäßige Treppenhausreinigung – sprechen Sie uns einfach an.",
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
      AREA_SENTENCE,
      "Ob einmalige Glasreinigung oder fester Reinigungsrhythmus: Kontaktieren Sie uns für ein kostenloses Angebot, abgestimmt auf Fensteranzahl und Zugänglichkeit.",
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
      AREA_SENTENCE,
      "Egal ob einmaliger Pflegeeinsatz oder laufender Pflegevertrag: Nennen Sie uns Grundstücksgröße und gewünschten Umfang – wir erstellen Ihnen ein passendes, kostenloses Angebot.",
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceContent | undefined {
  return services.find((s) => s.slug === slug);
}
