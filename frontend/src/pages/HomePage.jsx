import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { CategoryRail } from "../components/CategoryRail";
import { FilterSidebar } from "../components/FilterSidebar";
import { ThemeCard } from "../components/ThemeCard";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { buildQueryString, fetchJson } from "../lib/api";

const resolveFilters = (searchParams, categoryId) => ({
  category: categoryId ?? "",
  search: searchParams.get("q") ?? "",
  builder: searchParams.get("builder") ?? "",
  marketplace: searchParams.get("marketplace") ?? "",
  sort: searchParams.get("sort") ?? "smart",
  woocommerce: searchParams.get("woo") === "true",
  accessible: searchParams.get("accessible") === "true"
});

export const HomePage = ({
  categories,
  builders,
  meta,
  wishlistSlugs,
  compareSlugs,
  onToggleWishlist,
  onToggleCompare
}) => {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const [searchParams] = useSearchParams();
  const searchParamsKey = searchParams.toString();
  const [searchText, setSearchText] = useState("");
  const [themesState, setThemesState] = useState({
    loading: true,
    error: "",
    total: 0,
    items: []
  });
  const [recommendations, setRecommendations] = useState([]);
  const [trending, setTrending] = useState([]);

  const filters = useMemo(
    () => resolveFilters(new URLSearchParams(searchParamsKey), categoryId),
    [categoryId, searchParamsKey]
  );

  const activeCategory = categories.find((category) => category.id === filters.category);

  useEffect(() => {
    setSearchText(filters.search);
  }, [filters.search]);

  useDocumentMeta({
    title: activeCategory
      ? `${activeCategory.label} WordPress Themes | ThemeAtlas`
      : "WordPress Theme Discovery Platform | ThemeAtlas",
    description: activeCategory
      ? `Research-backed WordPress theme picks for ${activeCategory.label.toLowerCase()} websites.`
      : "Search, compare, and shortlist WordPress themes by business category, performance, SEO, and builder compatibility.",
    path: activeCategory ? `/category/${activeCategory.id}` : "/",
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: activeCategory
        ? `${activeCategory.label} WordPress Themes`
        : "ThemeAtlas WordPress Theme Discovery Platform",
      description: activeCategory
        ? activeCategory.summary
        : "A curated discovery platform for WordPress themes.",
      url: `${window.location.origin}${activeCategory ? `/category/${activeCategory.id}` : "/"}`
    }
  });

  useEffect(() => {
    let ignore = false;
    const query = buildQueryString({ ...filters, limit: 18 });
    const recommendationQuery = buildQueryString({ ...filters, limit: 3 });

    setThemesState((current) => ({
      ...current,
      loading: true,
      error: ""
    }));

    Promise.all([
      fetchJson(`/api/themes${query ? `?${query}` : ""}`),
      fetchJson(`/api/recommendations${recommendationQuery ? `?${recommendationQuery}` : ""}`)
    ])
      .then(([themesResponse, recommendationsResponse]) => {
        if (ignore) {
          return;
        }

        setThemesState({
          loading: false,
          error: "",
          total: themesResponse.total,
          items: themesResponse.items
        });
        setRecommendations(recommendationsResponse);
      })
      .catch(() => {
        if (ignore) {
          return;
        }

        setThemesState({
          loading: false,
          error: "Unable to load the catalog right now.",
          total: 0,
          items: []
        });
        setRecommendations([]);
      });

    return () => {
      ignore = true;
    };
  }, [filters]);

  useEffect(() => {
    let ignore = false;

    fetchJson("/api/trending?limit=4")
      .then((response) => {
        if (!ignore) {
          setTrending(response);
        }
      })
      .catch(() => {
        if (!ignore) {
          setTrending([]);
        }
      });

    return () => {
      ignore = true;
    };
  }, []);

  const updateRoute = (nextFilters) => {
    const next = { ...filters, ...nextFilters };
    const params = new URLSearchParams();

    if (next.search) {
      params.set("q", next.search);
    }

    if (next.builder) {
      params.set("builder", next.builder);
    }

    if (next.marketplace) {
      params.set("marketplace", next.marketplace);
    }

    if (next.sort && next.sort !== "smart") {
      params.set("sort", next.sort);
    }

    if (next.woocommerce) {
      params.set("woo", "true");
    }

    if (next.accessible) {
      params.set("accessible", "true");
    }

    const pathname = next.category ? `/category/${next.category}` : "/";
    const queryString = params.toString();

    navigate(queryString ? `${pathname}?${queryString}` : pathname);
  };

  const resetFilters = () => {
    const pathname = filters.category ? `/category/${filters.category}` : "/";
    navigate(pathname);
  };

  const compareLimitReached = compareSlugs.length >= 3;

  return (
    <div className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="section-kicker">Editorial discovery engine</p>
          <h1>Find the right WordPress theme for the business you are actually building.</h1>
          <p className="hero-lead">
            Search by industry, rank by speed or SEO, compare multiple themes, and jump straight to
            the official demo or purchase page.
          </p>

          <form
            className="hero-search"
            onSubmit={(event) => {
              event.preventDefault();
              updateRoute({ search: searchText });
            }}
          >
            <input
              onChange={(event) => setSearchText(event.target.value)}
              placeholder="Search themes by feature, industry, or keyword"
              type="search"
              value={searchText}
            />
            <button className="button" type="submit">
              Search
            </button>
          </form>

          <div className="hero-metrics">
            <div className="hero-metric">
              <strong>{meta?.themeCount ?? 0}</strong>
              <span>curated themes</span>
            </div>
            <div className="hero-metric">
              <strong>{meta?.categoryCount ?? 0}</strong>
              <span>business categories</span>
            </div>
            <div className="hero-metric">
              <strong>{meta?.builders?.length ?? 0}</strong>
              <span>builder ecosystems</span>
            </div>
          </div>
        </div>

        <div className="hero-panel">
          <p className="section-kicker">What the ranking engine weighs</p>
          <ul className="signal-list">
            <li>Speed and Core Web Vitals</li>
            <li>SEO and accessibility posture</li>
            <li>WooCommerce maturity</li>
            <li>Builder compatibility</li>
            <li>Industry fit and design quality</li>
          </ul>
        </div>
      </section>

      <CategoryRail
        activeCategory={filters.category}
        categories={categories}
        onSelectCategory={(category) => updateRoute({ category })}
      />

      {recommendations.length ? (
        <section className="highlight-section">
          <div className="section-copy">
            <p className="section-kicker">Smart picks</p>
            <h2>
              {activeCategory ? `Top fits for ${activeCategory.label}` : "Best-balanced themes right now"}
            </h2>
          </div>

          <div className="cards-grid cards-grid--feature">
            {recommendations.map((theme) => (
              <ThemeCard
                compareLimitReached={compareLimitReached}
                isCompared={compareSlugs.includes(theme.slug)}
                isWishlisted={wishlistSlugs.includes(theme.slug)}
                key={theme.slug}
                onToggleCompare={onToggleCompare}
                onToggleWishlist={onToggleWishlist}
                theme={theme}
              />
            ))}
          </div>
        </section>
      ) : null}

      {trending.length ? (
        <section className="highlight-section compact">
          <div className="section-copy">
            <p className="section-kicker">Trending</p>
            <h2>High-visibility themes agencies keep reaching for.</h2>
          </div>

          <div className="trend-row">
            {trending.map((theme) => (
              <article className="trend-card" key={theme.slug}>
                <div>
                  <span className="mini-badge">{theme.marketplace}</span>
                  <h3>{theme.name}</h3>
                  <p>{theme.tagline}</p>
                </div>
                <div className="trend-card__meta">
                  <strong>{theme.trendingScore}</strong>
                  <span>trend score</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="discovery-layout" id="discover">
        <FilterSidebar
          builders={builders}
          categories={categories}
          filters={filters}
          onChange={updateRoute}
          onReset={resetFilters}
        />

        <div className="results-panel">
          <div className="results-panel__header">
            <div>
              <p className="section-kicker">Catalog</p>
              <h2>
                {activeCategory ? activeCategory.label : "All researched themes"}
              </h2>
              <p className="results-caption">
                {activeCategory?.summary ??
                  "Curated across official vendors and ThemeForest leaders for client work, stores, editorial sites, and startup launches."}
              </p>
            </div>

            <span className="results-count">{themesState.total} themes</span>
          </div>

          {themesState.loading ? <p className="status-panel">Loading theme research…</p> : null}
          {themesState.error ? <p className="status-panel error">{themesState.error}</p> : null}

          {!themesState.loading && !themesState.error ? (
            <div className="cards-grid">
              {themesState.items.map((theme) => (
                <ThemeCard
                  compareLimitReached={compareLimitReached}
                  isCompared={compareSlugs.includes(theme.slug)}
                  isWishlisted={wishlistSlugs.includes(theme.slug)}
                  key={theme.slug}
                  onToggleCompare={onToggleCompare}
                  onToggleWishlist={onToggleWishlist}
                  theme={theme}
                />
              ))}
            </div>
          ) : null}

          {!themesState.loading && !themesState.error && !themesState.items.length ? (
            <div className="status-panel">
              No themes matched this combination. Try clearing the builder or marketplace filter.
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
};
