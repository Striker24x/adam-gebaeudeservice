import nodemailer from "nodemailer";
import type { ContactFormValues } from "./validation";

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "info@adam-gebaeudeservice.de";
const SMTP_HOST = process.env.SMTP_HOST || "smtp.ionos.de";
const SMTP_PORT = Number(process.env.SMTP_PORT || 465);
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const SITE_URL = process.env.SITE_URL || "https://adam-gebaeudeservice.de";

const LOGO_URL = `${SITE_URL}/images/logo/logo-header-navy.png`;

let cachedTransporter: ReturnType<typeof nodemailer.createTransport> | null = null;

function getTransporter() {
  if (!SMTP_USER || !SMTP_PASS) return null;
  if (cachedTransporter) return cachedTransporter;
  cachedTransporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
    pool: true,
    maxConnections: 2,
  });
  return cachedTransporter;
}

const signatureHtml = `
  <div style="margin-top:28px; padding-top:18px; border-top:1px solid #e5e7eb; font-family: Arial, sans-serif; font-size:13px; color:#555;">
    <p style="margin:0 0 6px 0;"><strong style="color:#0E2A52;">Jamal Al Hamade</strong><br/>Inhaber, Adam Gebäudeservice</p>
    <p style="margin:0;">
      Waren (Müritz), Deutschland<br/>
      Telefon: <a href="tel:+491773931256" style="color:#0E2A52; text-decoration:none;">0177 3931256</a><br/>
      E-Mail: <a href="mailto:info@adam-gebaeudeservice.de" style="color:#0E2A52; text-decoration:none;">info@adam-gebaeudeservice.de</a><br/>
      Web: <a href="${SITE_URL}" style="color:#0E2A52; text-decoration:none;">adam-gebaeudeservice.de</a>
    </p>
  </div>
`;

const signatureText = [
  ``,
  `--`,
  `Jamal Al Hamade`,
  `Inhaber, Adam Gebäudeservice`,
  `Waren (Müritz), Deutschland`,
  `Telefon: 0177 3931256`,
  `E-Mail: info@adam-gebaeudeservice.de`,
  `Web: ${SITE_URL}`,
].join("\n");

function wrapHtml(bodyHtml: string) {
  return `
    <div style="font-family: Arial, sans-serif; color:#1a1a1a; max-width:560px; margin:0 auto;">
      <div style="text-align:center; padding:20px 0;">
        <img src="${LOGO_URL}" alt="Adam Gebäudeservice" width="140" style="display:inline-block;" />
      </div>
      ${bodyHtml}
      ${signatureHtml}
    </div>
  `;
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

  const internalMail = {
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
      signatureText,
    ].join("\n"),
    html: wrapHtml(`
      <h2 style="color:#0E2A52;">Neue Angebotsanfrage</h2>
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>E-Mail:</strong> ${data.email}</p>
      <p><strong>Telefon:</strong> ${data.phone}</p>
      <p><strong>Gewünschte Leistung:</strong> ${data.service}</p>
      <p><strong>Einsatzort:</strong> ${data.location}</p>
      <p><strong>Objektgröße/Fläche:</strong> ${data.propertySize || "-"}</p>
      <p><strong>Reinigungshäufigkeit:</strong> ${data.frequency}</p>
      <p><strong>Nachricht:</strong><br/>${(data.message || "-").replace(/\n/g, "<br/>")}</p>
    `),
  };

  const confirmationMail = {
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
      signatureText,
    ]
      .filter(Boolean)
      .join("\n"),
    html: wrapHtml(`
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
    `),
  };

  try {
    // Beide E-Mails parallel senden (statt sequentiell), um die
    // Gesamtlaufzeit unter dem Serverless-Timeout zu halten.
    const results = await Promise.allSettled([
      transporter.sendMail(internalMail),
      transporter.sendMail(confirmationMail),
    ]);
    const failed = results.filter((r) => r.status === "rejected");
    if (failed.length > 0) {
      console.error("[smtp] Teilweise fehlgeschlagen:", failed);
    }
    return { skipped: false, failed: failed.length };
  } catch (err) {
    console.error("[smtp] Fehler beim Senden der E-Mails:", err);
    return { skipped: true, error: err };
  }
}

export async function sendTestEmail(to: string) {
  const transporter = getTransporter();
  if (!transporter) throw new Error("SMTP nicht konfiguriert");

  const fromAddress = `Adam Gebäudeservice <${SMTP_USER}>`;
  return transporter.sendMail({
    from: fromAddress,
    to,
    subject: "Test: Empfangsbestätigung mit Logo & Signatur",
    text: [
      `Hallo,`,
      ``,
      `dies ist eine Testbestätigung von der Adam Gebäudeservice Website.`,
      `Zusammenfassung Ihrer Anfrage:`,
      `Gewünschte Leistung: Büroreinigung`,
      `Einsatzort: Rostock Dierkow`,
      `Objektgröße/Fläche: 55 m²`,
      `Reinigungshäufigkeit: Wöchentlich`,
      `Ihre Nachricht: Moin das ist ein Test`,
      signatureText,
    ].join("\n"),
    html: wrapHtml(`
      <h2 style="color:#0E2A52;">Vielen Dank für Ihre Anfrage!</h2>
      <p>Hallo,</p>
      <p>
        dies ist eine <strong>Testbestätigung</strong> mit Logo und
        Signatur von der Adam Gebäudeservice Website.
      </p>
      <div style="background:#F3F7FF; border-radius:12px; padding:16px 20px; margin:20px 0;">
        <p style="margin:4px 0;"><strong>Gewünschte Leistung:</strong> Büroreinigung</p>
        <p style="margin:4px 0;"><strong>Einsatzort:</strong> Rostock Dierkow</p>
        <p style="margin:4px 0;"><strong>Objektgröße/Fläche:</strong> 55 m²</p>
        <p style="margin:4px 0;"><strong>Reinigungshäufigkeit:</strong> Wöchentlich</p>
        <p style="margin:4px 0;"><strong>Ihre Nachricht:</strong><br/>Moin das ist ein Test</p>
      </div>
      <p>
        Bei dringenden Fragen erreichen Sie uns telefonisch unter
        <a href="tel:+491773931256" style="color:#0E2A52;">0177 3931256</a>.
      </p>
    `),
  });
}
