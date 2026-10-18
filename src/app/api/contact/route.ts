import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Lead } from "@/models/Lead";
import { contactFormSchema } from "@/lib/validation";
import { sendLeadNotification } from "@/lib/email";

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Ungültige Anfrage." },
      { status: 400 }
    );
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        message: "Bitte überprüfen Sie Ihre Eingaben.",
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  try {
    await connectToDatabase();
    await Lead.create({ ...parsed.data, createdAt: new Date() });
  } catch (err) {
    console.error("[api/contact] Fehler beim Speichern in MongoDB:", err);
    return NextResponse.json(
      {
        success: false,
        message:
          "Ihre Anfrage konnte derzeit nicht gespeichert werden. Bitte versuchen Sie es später erneut oder rufen Sie uns an.",
      },
      { status: 500 }
    );
  }

  // E-Mail-Benachrichtigung — Fehler hier dürfen den erfolgreichen DB-Save nicht blockieren.
  await sendLeadNotification(parsed.data);

  return NextResponse.json({
    success: true,
    message: "Vielen Dank! Ihre Anfrage wurde erfolgreich übermittelt. Wir melden uns zeitnah bei Ihnen.",
  });
}
