# Adam Gebäudeservice — Website

Next.js 14 (App Router, TypeScript) One-Page-Website für Adam Gebäudeservice
mit MongoDB-Backend für Kontaktanfragen und optionalem E-Mail-Versand über
Resend.

## Features

- One-Page-Site mit Anchor-Navigation (Startseite, Über uns, Leistungen, Kontakt)
- Kontaktformular → speichert Leads in MongoDB (`leads`-Collection) und
  verschickt optional eine Benachrichtigungs-E-Mail via Resend
- Responsive, Tailwind CSS, Work Sans Schriftart
- Dockerized: App-Container (Next.js, standalone build) + MongoDB-Container
  + optional mongo-express zur DB-Verwaltung

## Schnellstart mit Docker

```bash
cp .env.example .env
# RESEND_API_KEY optional eintragen — ohne Key wird der E-Mail-Versand
# übersprungen, die DB-Speicherung funktioniert trotzdem.

docker compose up --build -d
```

- Website: http://localhost:3000
- MongoDB: läuft intern unter `mongo:27017`, extern erreichbar auf
  `localhost:27017`
- mongo-express (DB-Verwaltung, optional): http://localhost:8081

Stoppen:

```bash
docker compose down
```

Daten bleiben über den benannten Docker-Volume `mongo-data` erhalten
(`docker compose down -v` löscht auch die Daten).

## Lokale Entwicklung ohne Docker

Voraussetzungen: Node.js 20+, eine lokal erreichbare MongoDB-Instanz.

```bash
npm install
cp .env.example .env.local
# MONGODB_URI auf eure lokale/externe MongoDB anpassen,
# z. B. mongodb://localhost:27017/adam-gebaeudeservice

npm run dev
```

Die Seite läuft dann auf http://localhost:3000.

### Build & Lint lokal prüfen

```bash
npm run build
npm run lint
```

## Umgebungsvariablen (`.env.example`)

| Variable         | Beschreibung                                          |
| ---------------- | ------------------------------------------------------ |
| `MONGODB_URI`    | Verbindungsstring zur MongoDB                           |
| `RESEND_API_KEY` | API-Key für Resend (E-Mail-Benachrichtigung), optional  |
| `CONTACT_EMAIL`  | Zieladresse für Benachrichtigungs-E-Mails               |

## Bilder / Platzhalter

Folgende Bildpfade werden von der Seite referenziert und müssen final mit
echten Fotos befüllt werden (aktuell liegen Platzhalter vor):

```
public/images/hero/hero-main.jpg
public/images/services/praxisreinigung.jpg
public/images/services/bueroreinigung.jpg
public/images/services/hotelreinigung.jpg
public/images/services/ferienunterkuenfte.jpg
public/images/services/treppenhausreinigung.jpg
public/images/services/glasreinigung.jpg
public/images/services/gartenpflege.jpg
public/images/team/owner-portrait.jpg
```

Die Dateinamen bitte unverändert lassen, damit ein nachgelagerter
Bildgenerierungs-Prozess die Platzhalter direkt ersetzen kann.

## Projektstruktur

```
src/
  app/
    api/contact/route.ts   # POST-Endpoint: Validierung, MongoDB, Resend
    impressum/page.tsx
    datenschutz/page.tsx
    layout.tsx
    page.tsx
  components/               # Header, Footer, Hero, About, Services, ...
  lib/                      # mongodb.ts, email.ts, validation.ts
  models/Lead.ts            # Mongoose-Schema für Kontaktanfragen
```
