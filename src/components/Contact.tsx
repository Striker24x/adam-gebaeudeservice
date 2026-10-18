import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="kontakt" className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold text-navy sm:text-3xl md:text-4xl">
            Wir sind für Sie da
          </h2>
          <p className="mt-4 text-base text-gray-600 sm:text-lg">
            Rufen Sie uns an oder schreiben Sie uns. Wir beraten Sie gerne
            persönlich und unverbindlich.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm sm:p-10">
          <h3 className="mb-6 text-xl font-bold text-navy">
            Kostenloses Angebot anfordern
          </h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
