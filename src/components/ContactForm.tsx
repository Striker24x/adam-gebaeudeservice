"use client";

import { FormEvent, useState } from "react";

const services = [
  "Praxisreinigung",
  "Büroreinigung",
  "Hotelreinigung",
  "Ferienunterkünfte",
  "Treppenhausreinigung",
  "Glasreinigung",
  "Gartenpflege",
  "Sonstiges",
];

const frequencies = [
  "Einmalig",
  "Wöchentlich",
  "Alle zwei Wochen",
  "Monatlich",
  "Nach Bedarf",
  "Nach Vereinbarung",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    setStatus("submitting");
    setErrors({});

    const formData = new FormData(formEl);
    const payload = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      location: formData.get("location"),
      propertySize: formData.get("propertySize"),
      frequency: formData.get("frequency"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        setStatus("error");
        setMessage(data.message || "Es ist ein Fehler aufgetreten.");
        setErrors(data.errors || {});
        return;
      }

      setStatus("success");
      setMessage(data.message);
      formEl.reset();
    } catch {
      setStatus("error");
      setMessage(
        "Verbindung fehlgeschlagen. Bitte versuchen Sie es später erneut."
      );
    }
  }

  const inputClass =
    "w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-800 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy";
  const labelClass = "mb-1.5 block text-sm font-medium text-gray-700";
  const required = <span className="text-red-600"> *</span>;

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-2xl bg-gradient-to-b from-[#F3F7FF] to-white px-6 py-10 text-center">
        <div className="relative mb-6 h-56 w-40 overflow-hidden rounded-2xl shadow-lg sm:h-64 sm:w-48">
          <video
            src="/images/fun/cat-fast.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        </div>
        <h3 className="text-2xl font-extrabold text-navy sm:text-3xl">
          Vielen Dank für Ihre Anfrage! 🎉
        </h3>
        <p className="mt-3 max-w-md text-sm text-gray-600 sm:text-base">
          Ihre Anfrage ist gerade so schnell in unserem Postfach
          gelandet wie diese Katze auf ihrer Rutsche — Sie hören
          zeitnah von uns!
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 rounded-full border border-navy px-6 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
        >
          Weitere Anfrage senden
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="firstName">
            Vorname{required}
          </label>
          <input
            id="firstName"
            name="firstName"
            required
            className={inputClass}
          />
          {errors.firstName && (
            <p className="mt-1 text-xs text-red-600">{errors.firstName[0]}</p>
          )}
        </div>
        <div>
          <label className={labelClass} htmlFor="lastName">
            Nachname{required}
          </label>
          <input
            id="lastName"
            name="lastName"
            required
            className={inputClass}
          />
          {errors.lastName && (
            <p className="mt-1 text-xs text-red-600">{errors.lastName[0]}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="email">
            E-Mail-Adresse{required}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600">{errors.email[0]}</p>
          )}
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            Telefonnummer
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={inputClass}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-600">{errors.phone[0]}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="service">
            Gewünschte Leistung{required}
          </label>
          <select
            id="service"
            name="service"
            required
            defaultValue=""
            className={inputClass}
          >
            <option value="" disabled>
              Bitte wählen
            </option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="location">
            Einsatzort{required}
          </label>
          <input
            id="location"
            name="location"
            required
            className={inputClass}
          />
          {errors.location && (
            <p className="mt-1 text-xs text-red-600">{errors.location[0]}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="propertySize">
            Objektgröße/Fläche{required}
          </label>
          <input
            id="propertySize"
            name="propertySize"
            placeholder="z. B. 80 m²"
            required
            className={inputClass}
          />
          {errors.propertySize && (
            <p className="mt-1 text-xs text-red-600">
              {errors.propertySize[0]}
            </p>
          )}
        </div>
        <div>
          <label className={labelClass} htmlFor="frequency">
            Reinigungshäufigkeit{required}
          </label>
          <select
            id="frequency"
            name="frequency"
            required
            defaultValue=""
            className={inputClass}
          >
            <option value="" disabled>
              Bitte wählen
            </option>
            {frequencies.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="message">
          Ihre Nachricht
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={inputClass}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600">{errors.message[0]}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-navy px-8 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:scale-[1.02] disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Wird gesendet..." : "Angebot anfordern"}
      </button>

      {status === "error" && (
        <p className="rounded-lg bg-red-50 p-4 text-sm text-red-700">
          {message}
        </p>
      )}
    </form>
  );
}
