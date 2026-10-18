import { Resend } from "resend";
import type { ContactFormValues } from "./validation";

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "info@adam-gebaeudeservice.de";

export async function sendLeadNotification(data: ContactFormValues) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.warn(
      "[resend] RESEND_API_KEY ist nicht gesetzt — Benachrichtigungs-E-Mail wird übersprungen."
    );
    return { skipped: true };
  }

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from: "Adam Gebäudeservice Website <onboarding@resend.dev>",
      to: [CONTACT_EMAIL],
      replyTo: data.email,
      subject: `Neue Angebotsanfrage von ${data.firstName} ${data.lastName}`,
      text: [
        `Neue Angebotsanfrage über die Website:`,
        ``,
        `Name: ${data.firstName} ${data.lastName}`,
        `E-Mail: ${data.email}`,
        `Telefon: ${data.phone}`,
        `Gewünschte Leistung: ${data.service}`,
        `Einsatzort: ${data.location}`,
        `Objektgröße/Fläche: ${data.propertySize || "-"}`,
        `Reinigungshäufigkeit: ${data.frequency}`,
        `Nachricht: ${data.message || "-"}`,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; color:#1a1a1a;">
          <h2 style="color:#0E2A52;">Neue Angebotsanfrage</h2>
          <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
          <p><strong>E-Mail:</strong> ${data.email}</p>
          <p><strong>Telefon:</strong> ${data.phone}</p>
          <p><strong>Gewünschte Leistung:</strong> ${data.service}</p>
          <p><strong>Einsatzort:</strong> ${data.location}</p>
          <p><strong>Objektgröße/Fläche:</strong> ${data.propertySize || "-"}</p>
          <p><strong>Reinigungshäufigkeit:</strong> ${data.frequency}</p>
          <p><strong>Nachricht:</strong><br/>${(data.message || "-").replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });
    return { skipped: false, result };
  } catch (err) {
    console.error("[resend] Fehler beim Senden der Benachrichtigungs-E-Mail:", err);
    return { skipped: true, error: err };
  }
}
