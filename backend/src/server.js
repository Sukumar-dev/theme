import express from "express";
import cors from "cors";
import helmet from "helmet";
import path from "node:path";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { categories, themes } from "./data/themes.js";
import { buildSitemap } from "./lib/buildSitemap.js";
import { decorateTheme, themeMatchesSearch } from "./lib/recommendThemes.js";

const app = express();
const port = Number.parseInt(process.env.PORT ?? "4000", 10);
const siteUrl =
  process.env.SITE_URL ??
  process.env.RENDER_EXTERNAL_URL ??
  `http://localhost:${port}`;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendDist = path.resolve(__dirname, "../../frontend/dist");

app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors());
app.use(express.json());

const toBoolean = (value) => value === "true";

const filterThemes = (query = {}) => {
  const filters = {
    category: query.category ?? "",
    search: query.search ?? "",
    builder: query.builder ?? "",
    marketplace: query.marketplace ?? "",
    sort: query.sort ?? "smart",
    woocommerce: toBoolean(query.woocommerce),
    accessible: toBoolean(query.accessible)
  };

  const filtered = themes
    .filter((theme) => !filters.category || theme.bestFor.includes(filters.category))
    .filter((theme) => !filters.builder || theme.builders.includes(filters.builder))
    .filter(
      (theme) =>
        !filters.marketplace ||
        theme.marketplace.toLowerCase() === filters.marketplace.toLowerCase()
    )
    .filter((theme) => !filters.woocommerce || theme.scores.woocommerce >= 88)
    .filter((theme) => !filters.accessible || theme.scores.accessibility >= 86)
    .filter((theme) => themeMatchesSearch(theme, filters.search))
    .map((theme) => decorateTheme(theme, filters));

  const sortBy = filters.sort;

  filtered.sort((left, right) => {
    if (sortBy === "trending") {
      return right.trendingScore - left.trendingScore;
    }

    if (sortBy === "performance") {
      return right.scores.performance - left.scores.performance;
    }

    if (sortBy === "seo") {
      return right.scores.seo - left.scores.seo;
    }

    if (sortBy === "customization") {
      return right.scores.customization - left.scores.customization;
    }

    return right.matchScore - left.matchScore;
  });

  return filtered;
};

app.get("/api/health", (_request, response) => {
  response.json({
    status: "ok",
    themes: themes.length,
    categories: categories.length
  });
});

app.get("/api/categories", (_request, response) => {
  response.json(categories);
});

app.get("/api/meta", (_request, response) => {
  response.json({
    themeCount: themes.length,
    categoryCount: categories.length,
    marketplaces: [...new Set(themes.map((theme) => theme.marketplace))],
    builders: [...new Set(themes.flatMap((theme) => theme.builders))].sort()
  });
});

app.get("/api/themes", (request, response) => {
  const filtered = filterThemes({
    category: request.query.category,
    search: request.query.search,
    builder: request.query.builder,
    marketplace: request.query.marketplace,
    sort: request.query.sort,
    woocommerce: request.query.woocommerce,
    accessible: request.query.accessible
  });

  const limit = Number.parseInt(request.query.limit ?? `${filtered.length}`, 10);

  response.json({
    total: filtered.length,
    items: filtered.slice(0, limit)
  });
});

app.get("/api/trending", (request, response) => {
  const limit = Number.parseInt(request.query.limit ?? "4", 10);

  const items = [...themes]
    .sort((left, right) => right.trendingScore - left.trendingScore)
    .slice(0, limit)
    .map((theme) => decorateTheme(theme));

  response.json(items);
});

app.get("/api/recommendations", (request, response) => {
  const items = filterThemes({
    category: request.query.category,
    search: request.query.search,
    builder: request.query.builder,
    marketplace: request.query.marketplace,
    sort: request.query.sort,
    woocommerce: request.query.woocommerce,
    accessible: request.query.accessible
  }).slice(0, Number.parseInt(request.query.limit ?? "3", 10));

  response.json(items);
});

app.get("/api/compare", (request, response) => {
  const slugs = `${request.query.slugs ?? ""}`
    .split(",")
    .map((slug) => slug.trim())
    .filter(Boolean)
    .slice(0, 3);

  const items = slugs
    .map((slug) => themes.find((theme) => theme.slug === slug))
    .filter(Boolean)
    .map((theme) => decorateTheme(theme));

  response.json(items);
});

app.get("/api/themes/:slug", (request, response) => {
  const theme = themes.find((item) => item.slug === request.params.slug);

  if (!theme) {
    response.status(404).json({ message: "Theme not found" });
    return;
  }

  const relatedThemes = filterThemes({
    category: theme.bestFor[0],
    builder: theme.builders[0],
    sort: "smart"
  })
    .filter((item) => item.slug !== theme.slug)
    .slice(0, 3);

  response.json({
    ...decorateTheme(theme),
    relatedThemes
  });
});

app.get("/robots.txt", (_request, response) => {
  response.type("text/plain").send(`User-agent: *
Allow: /

Sitemap: ${siteUrl.replace(/\/$/, "")}/sitemap.xml
`);
});

app.get("/sitemap.xml", (_request, response) => {
  response.type("application/xml").send(
    buildSitemap({
      siteUrl,
      themes,
      categories
    })
  );
});

if (existsSync(frontendDist)) {
  app.use(express.static(frontendDist));

  app.get("*", (request, response, next) => {
    if (request.path.startsWith("/api") || request.path === "/robots.txt" || request.path === "/sitemap.xml") {
      next();
      return;
    }

    response.sendFile(path.join(frontendDist, "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Theme discovery API running on ${siteUrl}`);
});
