import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/services-data";

function ServiceIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M9 11L12 14L20 6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 12V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4H15"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Services() {
  return (
    <section id="leistungen" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold text-navy sm:text-3xl md:text-4xl">
            Unsere Leistungen
          </h2>
          <p className="mt-4 text-base text-gray-600 sm:text-lg">
            Maßgeschneiderte Reinigungslösungen für jeden Bedarf.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.slug}
              className="overflow-hidden rounded-2xl bg-white shadow-md transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={`/images/services/${service.slug}.jpg`}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-navy">
                  <ServiceIcon />
                </div>
                <h3 className="text-lg font-bold text-navy">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {service.shortDescription}
                </p>
                <Link
                  href={`/leistungen/${service.slug}`}
                  className="mt-4 inline-flex items-center text-sm font-semibold text-navy hover:underline"
                >
                  Mehr erfahren →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
