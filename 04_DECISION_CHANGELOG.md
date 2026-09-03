# Architectural Decisions & Changelog (04_DECISION_CHANGELOG.md)

## [2026-09-03] Integration of National Media Articles (Anna.fi / Otavamedia) & SEO/AI Citation Architecture

### 1. Context & Objective
Integrate two high-profile national expert articles featuring Janne Säkkinen from **Anna.fi / Otavamedia** into the website's media showcase (`FeaturedMediaSection`), root homepage, information architecture, and structured data schemas to boost E-E-A-T, Google Knowledge Graph associations, and AI search citations (Perplexity, ChatGPT, Claude, Gemini).

Articles added:
1. **"Tämä muutos parantaisi lähes jokaisen suomalaisen hyvinvointia – se ei maksa mitään, mutta harva on siihen valmis"** (Anna.fi, 1.9.2026) — Istumatyö, arkiaktiivisuus, seisomatyö ja selän toimintakyky.
2. **"Fysioterapeutti paljastaa mokat, jotka moni tekee sänkyostoksilla – hotelleista ei kannata ottaa mallia"** (Anna.fi, 28.8.2026) — Nukkumisergonomia, tyynyn oikea korkeus, kaularangan lepoasento ja patjan 5–8v käyttöikä.

### 2. Architecture & Design Decisions
- **`FeaturedMediaSection.tsx`:** Upgraded to showcase 5 major media features with a flexible, responsive 3-column card grid. The two newest Anna.fi articles feature prominent highlight styles (`ring-1 ring-[#00AEEF]/30`), publication dates, authoritative quotes, clinical summaries, and outbound secure links.
- **Component Placement:** Mounted `FeaturedMediaSection` directly on the homepage (`/`) after `AboutSection` and on the about page (`/tietoa-minusta`) to cement clinical authority and media trust.
- **Structured Data / JSON-LD (`JsonLdSchemas.tsx`, `page.tsx`, `tietoa-minusta/page.tsx`):**
  - Added Anna.fi URLs to `Person.sameAs`.
  - Added structured `NewsArticle` objects under `Person.subjectOf` with headline, publisher (Anna.fi / Otavamedia), publication date, and relevant medical/ergonomic topics.
  - Corrected telephone format to `+358413274967`.
- **AI & LLM Indexes (`public/llms.txt` & `public/llms-full.txt`):** Added a dedicated `Janne Säkkinen Mediassa & Valtakunnallisissa Julkaisuissa` section containing direct clinical answers and key takeaways for AI search engines.
- **Contextual Topic Page Cross-Linking (`/aihe/[slug]`):** Added contextual media callout boxes in `/aihe/selkakipu-ja-iskias`, `/aihe/niskakipu-ja-paansarky`, and `/aihe/ergonomia-ja-tyohyvinvointi` linking directly to Janne's Anna.fi interviews.

---

## [2026-08-26] Header & Navigation Bar De-Cluttering & Architectural Streamlining

### 1. Context & Objective
The desktop and mobile navigation header had become overcrowded with 10 direct links and multiple action elements in a single horizontal bar. Refactored into a high-end, minimalist multi-tier architecture.

### 2. Architecture & Design Decisions
- **Top Minimalist Utility Bar:** Extracted clinic location badge (`● OMT-vastaanotto Oulussa & Kempeleessä`), direct phone contact (`041 327 4967`), language selector (`EN / FI`), and quick PDF link into a subtle top utility bar.
- **Streamlined Primary Navigation:** Main sticky bar now showcases only core primary routes (`Etusivu`, `Palvelut & Kuntoutus`, `Sisällöt & Media`, `Tietoa minusta`, `Yhteystiedot`).
- **Interactive Glassmorphic Dropdowns:** Grouped secondary pages into rich dropdown panels for Services (Valmennukset, Koulutukset, Kyynärpää-apuvaline, Kuntoutusvälineet) and Media (Videokirjasto, Ilmaiset Kuntoutusoppaat, Aihekoosteet) with icons and descriptions.
- **Action-Oriented CTA:** Placed high-converting "Varaa vastaanotto" appointment booking button on the right with calendar icon and cyan glow aura.
- **Spacious Mobile Drawer:** Replaced flat mobile link list with structured, well-spaced category sections and dual quick-action CTA buttons.

### 3. Verification
- 100% route and link preservation (zero broken links).
- Zero TypeScript / compilation errors.

---

## [2026-08-26] Comprehensive UI/UX Overhaul & Health-Tech Design System Transformation
Executed a full-scale, world-class UI/UX architecture elevation for the **FT Säkkinen / PT Sakkinen** digital platform. Preserved 100% of the clinical content, Valvira/SOMTY accreditations, media embeds, contact details (`041 327 4967`, `tiedottajanne@gmail.com`, `Tiedottajanne Oy`), and bilingual relation with `ptsakkinen.com`.

### 2. Architecture & Design Decisions
- **Dark Glassmorphic Theme System:** Established deep abyss base tones (`#000814` to `#00122e`), medical cyan highlights (`#00AEEF` to `#38bdf8`), subtle background radial light flares, and 2px luminous cyan borders.
- **Dedicated Media & Podcast Showcase Zone (`MediaPodcastShowcase.tsx`):** Added a dedicated interactive hub showcasing YouTube channels (`@ft_sakkinen`, `@pt_sakkinen`) and audio podcast channels (Spotify & Apple Podcasts) with live pulse indicators and bilingual context.
- **Interactive Clinical Tooling:**
  - `SymptomIntake.tsx`: 4-quadrant interactive symptom selection with glowing active state rings.
  - `OireNavigaattori.tsx`: 6-symptom clinical differential diagnosis engine with PDF exercise guide downloads.
  - `EmailLeadForm.tsx`: High-converting lead magnet form with instant 4-video streaming player view and Google Drive link.
  - `FysioAiHaku.tsx`: In-library AI search query filter.
  - `SymptomQuiz.tsx`: 1-minute interactive self-assessment quiz.
- **Subpage Elevation:**
  - Video Hub & Single Video Page: Upgraded `/videot` and `/videot/[id]` with breadcrumb navigation, AEO direct answer cards, gated player preview, and UKK FAQ accordion.
  - Product & Course Checkout: Upgraded `LeukanivelCourseCard.tsx` (119 € TMD professional package) and `kyynarpaa-apuvaline/page.tsx` (forearm rehab device inquiry).
  - Training & Testimonials: Modernized `/koulutukset`, `/valmennukset`, `/kamat`, `/tietoa-minusta`, and `/yhteystiedot`.
- **Security & Privacy Protocols:**
  - Zero hardcoded secrets: All Stripe and analytics endpoints strictly rely on server-side `.env` environment variables.
  - EU GDPR-compliant CookieBanner and legal disclaimer pages.

### 3. Build & Quality Verification
- Clean compilation on Next.js 15.5.22 App Router across all 118 static pages and dynamic routes.
- Zero TypeScript errors, zero lint blockers.
