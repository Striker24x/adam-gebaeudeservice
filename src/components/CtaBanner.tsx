export default function CtaBanner() {
  return (
    <section className="bg-navy py-16 text-white">
      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <h2 className="text-2xl font-extrabold sm:text-3xl">
          Sie benötigen eine zuverlässige Reinigung?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          Kontaktieren Sie uns für ein kostenloses und unverbindliches
          Angebot. Wir beraten Sie persönlich und finden die passende
          Reinigungslösung für Ihr Objekt.
        </p>
        <a
          href="#kontakt"
          className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-navy shadow-lg transition-transform hover:scale-105"
        >
          Kostenloses Angebot anfordern
        </a>
      </div>
    </section>
  );
}
