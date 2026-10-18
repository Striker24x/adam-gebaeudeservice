import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy pt-28 text-white md:pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 md:grid-cols-2 md:px-8 md:pb-24">
        <div>
          <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
            Professionelle Gebäudereinigung in Waren (Müritz) und Umgebung
          </h1>
          <p className="mt-6 max-w-lg text-base text-white/80 sm:text-lg">
            Zuverlässige Reinigung für Praxen, Ferienwohnungen, Hotels und
            Büros – gründlich, pünktlich und professionell.
          </p>
          <a
            href="#kontakt"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-navy shadow-lg transition-transform hover:scale-105"
          >
            Kostenloses Angebot anfordern
          </a>
        </div>

        <div className="relative h-72 w-full overflow-hidden rounded-2xl shadow-2xl sm:h-96 md:h-[420px]">
          <Image
            src="/images/hero/hero-main.jpg"
            alt="Professionelle Gebäudereinigung"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
