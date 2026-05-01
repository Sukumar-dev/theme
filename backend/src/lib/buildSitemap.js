export const buildSitemap = ({ siteUrl, themes, categories }) => {
  const cleanSiteUrl = siteUrl.replace(/\/$/, "");

  const routes = [
    { path: "/", priority: "1.0", changefreq: "daily" },
    ...categories.map((category) => ({
      path: `/category/${category.id}`,
      priority: "0.8",
      changefreq: "weekly"
    })),
    ...themes.map((theme) => ({
      path: `/themes/${theme.slug}`,
      priority: "0.7",
      changefreq: "weekly"
    }))
  ];

  const urls = routes
    .map(
      (route) => `
  <url>
    <loc>${cleanSiteUrl}${route.path}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`;
};

