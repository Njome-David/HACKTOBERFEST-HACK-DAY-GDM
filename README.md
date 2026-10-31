# AgroVision AI

AgroVision AI is a multilingual farming assistant built for **Hacktoberfest Hack Day Yaoundé x Modulis 2026**. It uses Gemma 4 to help farmers identify crop problems from photos, get practical farming guidance, and share privacy-conscious outbreak alerts.

The Yaoundé Hack Day focused on open-source and open-weight AI. Its relevant tracks were **Best Use of Gemma 4** and **Best Open-Source AI Project**. The event took place on October 31, 2026. [Event details](https://events.mlh.io/events/14863-hacktoberfest-hack-day-yaounde-x-modulis).

## What it does

- **Photo diagnosis:** Analyze a crop photo, ask clarifying questions, and return a structured diagnosis with confidence, severity, and suggested next steps.
- **Farm assistant:** Ask farming questions by text or voice. English and Hausa voice input are supported; use text for Ewondo (pilot) and Cameroon Pidgin (experimental).
- **Cameroon language options:** English, Hausa, Ewondo (pilot), and Cameroon Pidgin (experimental). Ewondo and Pidgin output still need validation with local speakers.
- **Village Watch:** Share outbreak reports with nearby farms. Real reports are aggregated and small groups are suppressed; demo data is identified as demo data.
- **USSD:** An Africa's Talking-compatible endpoint provides a basic-phone access path.
- **Flexible inference:** Use Gemma through Google's API by default, or configure a local Ollama model.

## Run locally

### Requirements

- Node.js 20.9 or newer and npm
- A Google AI Studio API key for live cloud inference (optional for exploring the app)
- A Postgres connection string for shared Village Watch data (optional)

```bash
git clone https://github.com/Njome-David/HACKTOBERFEST-HACK-DAY-GDM.git
cd HACKTOBERFEST-HACK-DAY-GDM
npm ci
cp .env.local.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Add configuration to `.env.local`; never commit that file or real credentials.

| Variable | Purpose |
|---|---|
| `GEMMA_PROVIDER` | `google` (default) or `local` |
| `GOOGLE_API_KEY` | Enables live Gemma responses through Google's API |
| `GOOGLE_MODEL` | Optional model override; defaults to `gemma-4-26b-a4b-it` |
| `OLLAMA_BASE_URL` | Optional Ollama URL when using `GEMMA_PROVIDER=local` |
| `OLLAMA_TEXT_MODEL` / `OLLAMA_VISION_MODEL` | Optional local models; defaults are in `src/lib/gemma.ts` |
| `DATABASE_URL` | Optional Postgres database for shared Village Watch data |
| `YARNGPT_API_KEY` | Optional generated speech; browser speech is used as a fallback |

Without a model key, the app can still be explored in its demo mode. Village Watch needs a database for shared reports; other data and settings are primarily stored in the browser.

## Try the main flows

1. Complete the farm profile at `/onboarding`.
2. Open `/app/scan`, take or upload a crop photo, answer the clarification questions, and review the diagnosis.
3. Use `/app/assistant` for text or voice questions.
4. Visit `/app/watch` to explore outbreak reports and alerts.

Microphone access requires HTTPS or `localhost`. Browser speech recognition is not available in iOS Safari. Ewondo and Cameroon Pidgin are experimental language options and should be checked with fluent speakers.

## Stack

- Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS 4
- Gemma 4 through Google's API or Ollama
- Neon/Postgres for shared Village Watch data
- YarnGPT and browser speech APIs for voice features
- Africa's Talking-compatible USSD route

## Useful commands

```bash
npm run dev     # Start the development server
npm run build   # Create a production build
npm run lint    # Run ESLint
```
