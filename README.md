# Woodsol Modern — Next.js site

This repository contains a Next.js app (App Router, TypeScript) for the Woodsol website with a branded design, product pages, portfolio, and a small client-side UI polish done in the `app/` directory.

## Summary of changes implemented in this workspace

- Rebrand and visual polish: green/white Woodsol theme, variables in `app/globals.css`.
- New pages and content: About, Services, Products (with detail pages), Portfolio, Projects, Contact, Sustainability.
- Hero carousel: responsive, autoplay (respects prefers-reduced-motion), LQIP placeholders via `blurDataURL` and accessible controls (`app/components/HeroCarousel.tsx`).
- Image handling improvements: SVG-based blur placeholders, fallbacks for problematic images (see `HeroCarousel.tsx` where `/Boilers1.jpg` uses `unoptimized` to avoid optimizer path issues).
- Portfolio lightbox: client-side accessible modal for viewing images.
- Header & accessibility tweaks: improved mobile toggler behavior and ARIA attributes in `app/components/Header.tsx`.
- Product datasheets: PDF datasheet(s) added to `public/` and wired to product pages.
- WhatsApp quick-action: wa.me link/button wired with the project contact number.

## Quick start — development

1. Install dependencies:

```powershell
npm install
```

2. Start the dev server:

```powershell
npm run dev
```

Open http://localhost:3000 in your browser.

## Production build

```powershell
npm run build
npm run start
```

## Notes & troubleshooting (Windows)

- **EPERM / file rename errors when starting `next dev`:**
  - Symptom: Next/Turbopack reports EPERM when renaming temporary files inside `.next/dev` and fails to compile.
  - Quick fix (safe):
    1. Stop any running Node processes that may hold file handles:

       ```powershell
       Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force
       ```

    2. Delete the `.next` directory to remove locked temporary files (Next will recreate it):

       ```powershell
       Remove-Item -LiteralPath .next -Recurse -Force -ErrorAction SilentlyContinue
       ```

    3. Restart dev: `npm run dev`.

  - Why this happens: on Windows a background process (antivirus, file indexer, or a stuck Node process or editor extension) can lock files underneath `.next`. Deleting `.next` after stopping Node clears the temp files.
  - Preventative actions:
    - Exclude the repository folder from real-time antivirus/Windows Defender scanning.
    - Close editor extensions that may touch the `.next` tree (some file watchers or formatters). Restart your machine if the problem persists.
    - If you must, run the terminal as Administrator for troubleshooting.

- **Image not displaying (example: `Boilers1.jpg`):**
  - The project uses `next/image` for optimization. On some environments the optimizer path can fail to resolve an image in `/public`. A pragmatic workaround was applied for `/Boilers1.jpg` in `app/components/HeroCarousel.tsx` using `unoptimized` so the image is loaded directly from `/public` while keeping `<Image />` for other slides.
  - To verify image loading: open DevTools → Network and confirm the request for `/Boilers1.jpg` returns 200. Clear browser cache if required.

## Developer tips & next steps

- LQIP placeholders: currently small SVG color rectangles are used as `blurDataURL` for fast LCP wins. We can replace these with photographic tiny base64 thumbnails for better perceived quality.
- Mobile nav collapse: there is an outstanding item to further harden mobile navbar collapse behavior across CSS utility conflicts.
- Back-end & lead capture: no server-side contact/email or WhatsApp Cloud integration has been added yet — these are listed as next steps in the project TODOs.

## Project structure highlights

- `app/` — Next.js App Router routes and React components. Main pages are under `app/`.
- `app/components/` — shared UI: `Header.tsx`, `HeroCarousel.tsx`, `Lightbox.tsx`, etc.
- `public/` — static assets, images and datasheets (PDF).
- `scripts/` — small developer utilities (e.g., `get_image_sizes.js`).

If you'd like, I can:
- Generate photographic blurDataURL thumbnails and wire them into the carousel for better visual LCP.
- Attempt a permanent fix for `next/image` optimizer usage of `/Boilers1.jpg` (custom loader or file-casing audit) and revert `unoptimized`.
- Add a short `CONTRIBUTING.md` and a Windows dev troubleshooting section in the repo.

## License & credits

This repository contains company assets and images; follow the project's internal licensing for logos, imagery and datasheets.

---

Last edited: November 5, 2025 — summary of work implemented locally and verified by production builds.
