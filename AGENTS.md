# NASAQ Fit-Out & Interior Design — Engineering & Brand Guidelines

> **Mandatory Guidelines for AI Agents working on the Nasaq Fitout codebase (`nasaqfitout.ae`).**

---

## 1. Company Identity & Business Scope

1. **Brand**: NASAQ Fit-Out & Interior Design (نسق للتصميم الداخلي والمقاولات).
2. **Domain**: `https://nasaqfitout.ae/`
3. **Location / Market**: Dubai and United Arab Emirates (UAE).
4. **Core Capabilities**:
   - Turnkey Commercial & Residential Interior Fit-Out Contractor.
   - Custom Architectural Joinery, Woodwork & Feature Wall Mouldings.
   - Gypsum Partitions, Acoustic Ceilings, and Glass Partitions.
   - Complete MEP (Mechanical, Electrical, Plumbing) Coordination.
   - Authority Approvals & Permitting (Dubai Municipality, Civil Defence, DDA, Concordia, Trakhees).
   - B2B Subcontracting for Design Studios, Developers, and Commercial Entities.

---

## 2. Security & Deployment Standards

1. **Zero Secret Leaks**:
   - Never commit or log API keys, Cloudflare tokens, or `.env` files.
   - Deployment runs via Cloudflare Pages.

2. **Secure Outbound Links**:
   - All outgoing external links (`<a href="..." target="_blank">`) MUST enforce `rel="noopener noreferrer"`.

3. **HTTPS & Canonical Compliance**:
   - Canonical links, OpenGraph tags, schema markup, and internal links MUST use `https://nasaqfitout.ae/` with strict trailing slashes.

---

## 3. Local SEO & AI Search Readiness

1. **Local Schema Markup**:
   - Enforce structured JSON-LD data (`GeneralContractor`, `HomeAndConstructionBusiness`, `LocalBusiness`) targeting Dubai and UAE.
   - Maintain official social links (LinkedIn, Instagram, WhatsApp Business).

2. **Bilingual Integrity**:
   - Maintain parity between English and Arabic (`/ar/`) pages.
   - Ensure `dir="rtl"` and correct hreflang alternate tags on Arabic assets.

3. **AI Search Optimization**:
   - Keep `llms.txt`, `agent-card.json`, and `ai-catalog.json` up to date with services and contact details.

---

## 4. Work Hygiene

1. Always verify asset paths, responsive styling, and sitemap.xml entries before pushing.
2. Backups and archives belong in `_backups/` (ignored by git).
