import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z.string().trim().min(1, "Vorname ist erforderlich."),
  lastName: z.string().trim().min(1, "Nachname ist erforderlich."),
  email: z.string().trim().email("Bitte geben Sie eine gültige E-Mail-Adresse ein."),
  phone: z.string().trim().min(3, "Bitte geben Sie eine gültige Telefonnummer ein."),
  service: z.enum([
    "Praxisreinigung",
    "Büroreinigung",
    "Hotelreinigung",
    "Ferienunterkünfte",
    "Treppenhausreinigung",
    "Glasreinigung",
    "Gartenpflege",
    "Sonstiges",
  ]),
  location: z.string().trim().min(1, "Einsatzort ist erforderlich."),
  propertySize: z.string().trim().min(1, "Objektgröße/Fläche ist erforderlich."),
  frequency: z.enum([
    "Einmalig",
    "Wöchentlich",
    "Alle zwei Wochen",
    "Monatlich",
    "Nach Bedarf",
    "Nach Vereinbarung",
  ]),
  message: z.string().trim().min(1, "Nachricht ist erforderlich."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
