import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/lib/services-data";

const SITE_URL = "https://adam-gebaeudeservice.de";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  const title = `${service.title} in Waren (Müritz)`;
  const url = `${SITE_URL}/leistungen/${service.slug}`;

  return {
    title,
    description: service.metaDescription,
    alternates: { canonical: `/leistungen/${service.slug}` },
    openGraph: {
      type: "website",
      url,
      title: `${title} — Adam Gebäudeservice`,
      description: service.metaDescription,
      images: [
        {
          url: `/images/services/${service.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — Adam Gebäudeservice`,
      description: service.metaDescription,
      images: [`/images/services/${service.slug}.jpg`],
    },
  };
}

export default function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const url = `${SITE_URL}/leistungen/${service.slug}`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Startseite",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Leistungen",
        item: `${SITE_URL}/#leistungen`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: url,
      },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: `${service.title} — Adam Gebäudeservice`,
    description: service.metaDescription,
    url,
    provider: {
      "@type": "LocalBusiness",
      name: "Adam Gebäudeservice",
      telephone: "+491773931256",
      email: "info@adam-gebaeudeservice.de",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Carl-Hainmüller-Straße 7",
        postalCode: "17192",
        addressLocality: "Waren (Müritz)",
        addressCountry: "DE",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Waren (Müritz)",
    },
  };

  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <section className="relative h-72 w-full sm:h-96">
        <Image
          src={`/images/services/${service.slug}.jpg`}
          alt={service.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-5xl px-5 md:px-8">
            <nav
              aria-label="Breadcrumb"
              className="mb-3 text-sm text-white/80"
            >
              <Link href="/" className="hover:text-white">
                Startseite
              </Link>
              <span className="mx-2">/</span>
              <span>{service.title}</span>
            </nav>
            <h1 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
              {service.title} in Waren (Müritz)
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8">
        <p className="text-lg leading-relaxed text-gray-700">
          {service.intro}
        </p>

        <h2 className="mt-10 text-xl font-bold text-navy">
          Unsere Leistungen im Überblick
        </h2>
        <ul className="mt-4 space-y-2 text-gray-700">
          {service.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span aria-hidden="true" className="mt-1 text-navy">
                ✓
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 space-y-5 text-gray-700">
          {service.body.map((paragraph, i) => (
            <p key={i} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <h2 className="mt-12 text-xl font-bold text-navy">
          Häufige Fragen zur {service.title.toLowerCase()}
        </h2>
        <div className="mt-4 space-y-6">
          {service.faq.map((item) => (
            <div key={item.q}>
              <h3 className="font-semibold text-navy">{item.q}</h3>
              <p className="mt-1 leading-relaxed text-gray-700">{item.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-gray-50 p-8 text-center">
          <h2 className="text-xl font-bold text-navy">
            Kostenloses Angebot anfordern
          </h2>
          <p className="mt-2 text-gray-600">
            Schildern Sie uns kurz Ihren Bedarf — wir melden uns zeitnah mit
            einem unverbindlichen Angebot für {service.title.toLowerCase()}.
          </p>
          <Link
            href="/#kontakt"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-dark"
          >
            Jetzt Kontakt aufnehmen
          </Link>
        </div>

        <div className="mt-10">
          <Link href="/#leistungen" className="text-sm text-navy underline">
            ← Zurück zur Übersicht aller Leistungen
          </Link>
        </div>
      </section>
    </main>
  );
}
