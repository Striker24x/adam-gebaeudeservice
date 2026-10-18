import nodemailer from "nodemailer";
import type { ContactFormValues } from "./validation";

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "info@adam-gebaeudeservice.de";
const SMTP_HOST = process.env.SMTP_HOST || "smtp.ionos.de";
const SMTP_PORT = Number(process.env.SMTP_PORT || 465);
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;

function getTransporter() {
  if (!SMTP_USER || !SMTP_PASS) return null;
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

export async function sendLeadNotification(data: ContactFormValues) {
  const transporter = getTransporter();

  if (!transporter) {
    console.warn(
      "[smtp] SMTP_USER/SMTP_PASS sind nicht gesetzt — E-Mails werden übersprungen."
    );
    return { skipped: true };
  }

  const fromAddress = `Adam Gebäudeservice <${SMTP_USER}>`;

  try {
    // 1) Interne Benachrichtigung an den Betrieb
    await transporter.sendMail({
      from: fromAddress,
      to: CONTACT_EMAIL,
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

    // 2) Empfangsbestätigung auf Deutsch an den Kunden
    await transporter.sendMail({
      from: fromAddress,
      to: data.email,
      subject: "Ihre Anfrage bei Adam Gebäudeservice ist eingegangen",
      text: [
        `Hallo ${data.firstName},`,
        ``,
        `vielen Dank für Ihre Anfrage bei Adam Gebäudeservice!`,
        `Wir haben Ihre Angebotsanfrage erfolgreich erhalten und melden uns zeitnah bei Ihnen, um die Details zu besprechen.`,
        ``,
        `Zusammenfassung Ihrer Anfrage:`,
        `Gewünschte Leistung: ${data.service}`,
        `Einsatzort: ${data.location}`,
        `Objektgröße/Fläche: ${data.propertySize || "-"}`,
        `Reinigungshäufigkeit: ${data.frequency}`,
        data.message ? `Ihre Nachricht: ${data.message}` : "",
        ``,
        `Bei dringenden Fragen erreichen Sie uns telefonisch unter 0177 3931256.`,
        ``,
        `Mit freundlichen Grüßen`,
        `Ihr Team von Adam Gebäudeservice`,
      ]
        .filter(Boolean)
        .join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; color:#1a1a1a; max-width:560px;">
          <h2 style="color:#0E2A52;">Vielen Dank für Ihre Anfrage!</h2>
          <p>Hallo ${data.firstName},</p>
          <p>
            wir haben Ihre Angebotsanfrage bei <strong>Adam Gebäudeservice</strong>
            erfolgreich erhalten und melden uns zeitnah bei Ihnen, um die Details
            zu besprechen.
          </p>
          <div style="background:#F3F7FF; border-radius:12px; padding:16px 20px; margin:20px 0;">
            <p style="margin:4px 0;"><strong>Gewünschte Leistung:</strong> ${data.service}</p>
            <p style="margin:4px 0;"><strong>Einsatzort:</strong> ${data.location}</p>
            <p style="margin:4px 0;"><strong>Objektgröße/Fläche:</strong> ${data.propertySize || "-"}</p>
            <p style="margin:4px 0;"><strong>Reinigungshäufigkeit:</strong> ${data.frequency}</p>
            ${data.message ? `<p style="margin:4px 0;"><strong>Ihre Nachricht:</strong><br/>${data.message.replace(/\n/g, "<br/>")}</p>` : ""}
          </div>
          <p>
            Bei dringenden Fragen erreichen Sie uns telefonisch unter
            <a href="tel:+491773931256" style="color:#0E2A52;">0177 3931256</a>.
          </p>
          <p>Mit freundlichen Grüßen<br/>Ihr Team von Adam Gebäudeservice</p>
        </div>
      `,
    });

    return { skipped: false };
  } catch (err) {
    console.error("[smtp] Fehler beim Senden der E-Mails:", err);
    return { skipped: true, error: err };
  }
}
