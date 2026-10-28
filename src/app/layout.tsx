import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-work-sans",
  display: "swap",
});

const SITE_URL = "https://adam-gebaeudeservice.de";
const SITE_NAME = "Adam Gebäudeservice";
const TITLE =
  "Adam Gebäudeservice — Professionelle Gebäudereinigung in Waren (Müritz)";
const DESCRIPTION =
  "Adam Gebäudeservice – Ihre Reinigungsfirma in Waren (Müritz): zuverlässige Reinigung für Praxen, Ferienwohnungen, Hotels und Büros, gründlich und pünktlich.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — Adam Gebäudeservice",
  },
  description: DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/images/hero/hero-main.jpg",
        width: 1200,
        height: 630,
        alt: "Adam Gebäudeservice — Gebäudereinigung in Waren (Müritz)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/hero/hero-main.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: "Adam Gebäudeservice",
  legalName: "Jamal Al Hamade Gebäudereinigung",
  alternateName: "Reinigungsfirma Waren (Müritz)",
  description: DESCRIPTION,
  url: SITE_URL,
  telephone: "+491773931256",
  email: "info@adam-gebaeudeservice.de",
  image: `${SITE_URL}/images/hero/hero-main.jpg`,
  logo: `${SITE_URL}/images/logo/logo-header-navy.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Carl-Hainmüller-Straße 7",
    postalCode: "17192",
    addressLocality: "Waren (Müritz)",
    addressCountry: "DE",
  },
  areaServed: [
    { "@type": "City", name: "Waren (Müritz)" },
    { "@type": "City", name: "Klink" },
    { "@type": "City", name: "Kargow" },
    { "@type": "City", name: "Jabel" },
    { "@type": "City", name: "Torgelow am See" },
    { "@type": "City", name: "Moltzow" },
    { "@type": "City", name: "Groß Plasten" },
    { "@type": "City", name: "Grabowhöfe" },
    { "@type": "City", name: "Vollrathsruhe" },
    { "@type": "City", name: "Schloen-Dratow" },
    { "@type": "City", name: "Klocksin" },
    { "@type": "City", name: "Hohen Wangelin" },
    { "@type": "City", name: "Peenehagen" },
    { "@type": "City", name: "Ankershagen" },
    { "@type": "City", name: "Penzlin" },
    { "@type": "City", name: "Malchow" },
    { "@type": "City", name: "Rostock" },
  ],
  priceRange: "€€",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Leistungen von Adam Gebäudeservice",
    itemListElement: [
      "Praxisreinigung",
      "Büroreinigung",
      "Hotelreinigung",
      "Ferienunterkünfte",
      "Treppenhausreinigung",
      "Glasreinigung",
      "Gartenpflege",
    ].map((name, i) => ({
      "@type": "Offer",
      position: i + 1,
      itemOffered: {
        "@type": "Service",
        name,
      },
    })),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body className={`${workSans.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
