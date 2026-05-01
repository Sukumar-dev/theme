# WordPress Theme Reference & Discovery Platform

A full-stack MVP for researching, filtering, comparing, and shortlisting WordPress themes by business category, performance profile, and builder compatibility.

## Stack

- Frontend: React + Vite
- Backend: Node.js + Express
- Data: Curated in-memory seed catalog, structured to be replaceable with MongoDB later
- SEO: Dynamic `robots.txt`, XML sitemap generation, canonical/meta handling, JSON-LD schema, semantic routes

## What is included

- Category-led discovery across business niches like food, travel, finance, healthcare, SaaS, education, real estate, and more
- Smart recommendation scoring based on category fit, performance, builder alignment, and WooCommerce/accessibility priorities
- Theme search with tags and keyword matching
- Multi-theme comparison tray
- Wishlist persistence in local storage
- Trending themes section
- Direct links to official product pages and live demos
- Light and dark mode

## Project structure

```text
wp-theme-discovery-platform/
  backend/
  frontend/
```

## Run locally

1. Install dependencies from the project root:

```bash
npm install
```

2. Start the API:

```bash
npm run dev:backend
```

3. In a second terminal, start the frontend:

```bash
npm run dev:frontend
```

4. Open the Vite URL printed in the terminal.

## Environment

Create `backend/.env` from `backend/.env.example` when deploying:

```bash
PORT=4000
SITE_URL=http://localhost:4000
```

## Deploy on Render

This repo includes a root `render.yaml` Blueprint for a single Render web service.

Why a single service:

- Render builds the React frontend
- Express serves the built frontend and the API together
- No separate frontend/backend URL wiring is required

Render settings from the Blueprint:

- Build command: `npm install && npm run build`
- Start command: `npm run start`
- Health check: `/api/health`
- Plan: `free`

To deploy:

1. In Render, choose `New +` -> `Blueprint`.
2. Connect the GitHub repo: `Sukumar-dev/theme`.
3. Render will detect `render.yaml`.
4. Review the service named `themeatlas` and click `Apply`.

After the first deploy, Render will assign an `onrender.com` URL. The backend automatically uses Render's `RENDER_EXTERNAL_URL` for sitemap generation if `SITE_URL` is not set manually.

## Research note

The seeded catalog is curated from official theme product pages, starter template galleries, and marketplace listings so users can navigate to the native source for deeper review or purchase.

## Future upgrades

- Replace the in-memory repository with MongoDB + Mongoose
- Add authentication for cross-device saved collections
- Add editorial/admin dashboard for theme ingestion
- Add a real LLM or embeddings service for recommendation explanations
