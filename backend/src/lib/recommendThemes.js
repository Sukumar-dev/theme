import { categoryMap } from "../data/themes.js";

const includesText = (value, search) => value.toLowerCase().includes(search.toLowerCase());

export const themeMatchesSearch = (theme, search) => {
  if (!search) {
    return true;
  }

  const haystack = [
    theme.name,
    theme.vendor,
    theme.tagline,
    theme.summary,
    theme.marketplace,
    theme.pricing,
    ...theme.builders,
    ...theme.bestFor,
    ...theme.keywords,
    ...theme.strengths
  ].join(" ");

  return includesText(haystack, search);
};

export const scoreTheme = (theme, filters = {}) => {
  let score = theme.editorScore;
  const reasons = [];

  if (filters.category && theme.bestFor.includes(filters.category)) {
    score += 18;
    reasons.push(`Strong fit for ${categoryMap[filters.category]?.label ?? "this category"}`);
  }

  if (filters.builder && theme.builders.includes(filters.builder)) {
    score += 14;
    reasons.push(`Native alignment with ${filters.builder}`);
  }

  if (filters.woocommerce) {
    score += theme.scores.woocommerce / 5;
    if (theme.scores.woocommerce >= 92) {
      reasons.push("Excellent WooCommerce depth");
    }
  }

  if (filters.accessible) {
    score += theme.scores.accessibility / 6;
    if (theme.scores.accessibility >= 89) {
      reasons.push("Above-average accessibility profile");
    }
  }

  if (filters.search && themeMatchesSearch(theme, filters.search)) {
    score += 8;
    reasons.push("Matches the current keyword focus");
  }

  switch (filters.sort) {
    case "performance":
      score += theme.scores.performance * 0.36 + theme.scores.cwv * 0.24;
      break;
    case "seo":
      score += theme.scores.seo * 0.38 + theme.scores.accessibility * 0.18;
      break;
    case "customization":
      score += theme.scores.customization * 0.4 + theme.scores.builder * 0.22;
      break;
    case "trending":
      score += theme.trendingScore * 0.45 + theme.editorScore * 0.15;
      break;
    default:
      score +=
        theme.scores.performance * 0.18 +
        theme.scores.seo * 0.14 +
        theme.scores.customization * 0.14 +
        theme.scores.uiux * 0.11 +
        theme.scores.cwv * 0.12 +
        theme.trendingScore * 0.1;
      break;
  }

  if (!reasons.length) {
    reasons.push("Balanced overall profile across performance, SEO, and customization");
  }

  return {
    matchScore: Math.round(score),
    matchReasons: reasons.slice(0, 3)
  };
};

export const decorateTheme = (theme, filters = {}) => ({
  ...theme,
  ...scoreTheme(theme, filters),
  bestForLabels: theme.bestFor.map((categoryId) => categoryMap[categoryId]?.label ?? categoryId)
});

