import Image from "next/image";

export default function About() {
  return (
    <section id="ueber-uns" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:px-8">
        <div className="relative order-2 h-[420px] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-xl md:order-1 md:h-[560px]">
          <Image
            src="/images/team/owner-portrait.jpg"
            alt="Inhaber von Adam Gebäudeservice"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain"
          />
        </div>

        <div className="order-1 md:order-2">
          <h2 className="text-2xl font-extrabold text-navy sm:text-3xl md:text-4xl">
            Sauberkeit, auf die Sie sich verlassen können
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
            Adam Gebäudeservice steht für gründliche Arbeit, zuverlässige
            Termine und persönlichen Service. Wir bieten professionelle
            Reinigungslösungen für Praxen, Ferienwohnungen, Hotels und Büros
            in Waren (Müritz) und Umgebung. Dabei stimmen wir unsere
            Leistungen individuell auf die Anforderungen Ihres Objekts ab.
          </p>
        </div>
      </div>
    </section>
  );
}
