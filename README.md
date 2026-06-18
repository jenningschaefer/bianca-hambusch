# Bianca Hambusch

Website von Bianca Hambusch, gebaut mit [Nuxt 3](https://nuxt.com) und dateibasierten
Inhalten über [@nuxt/content](https://content.nuxt.com). Bilder werden über
[Cloudinary](https://cloudinary.com) ausgeliefert.

## Inhalte

Alle Inhalte liegen als Markdown im Ordner [`content/`](content/):

- `content/pages/` – Einzelseiten (home, about, contact, impressum, datenschutz)
- `content/blog/` – Blog-Beiträge
- `content/products/` – Produkt-/Detailseiten

Die Seiten in [`pages/`](pages/) rendern diese Inhalte über `queryContent()`.

## Entwicklung

```bash
# Abhängigkeiten installieren
npm install

# Dev-Server starten (http://localhost:3000)
npm run dev

# Produktions-Build
npm run build

# Statische Seite generieren
npm run generate

# Build lokal ansehen
npm run preview
```

## Konfiguration

Wichtige Einstellungen stehen in [`nuxt.config.ts`](nuxt.config.ts), u. a. die
Cloudinary-Environment-URL unter `runtimeConfig.public.cloudinaryEnvUrl`.
