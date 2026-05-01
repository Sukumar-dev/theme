import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ScoreBar } from "../components/ScoreBar";
import { ThemeCard } from "../components/ThemeCard";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { fetchJson } from "../lib/api";

const metricOrder = [
  ["Performance", "performance"],
  ["SEO", "seo"],
  ["Core Web Vitals", "cwv"],
  ["Mobile", "mobile"],
  ["Builder compatibility", "builder"],
  ["WooCommerce", "woocommerce"],
  ["Accessibility", "accessibility"],
  ["Customization", "customization"],
  ["UI/UX quality", "uiux"]
];

export const ThemeDetailPage = ({
  wishlistSlugs,
  compareSlugs,
  onToggleWishlist,
  onToggleCompare
}) => {
  const { slug } = useParams();
  const [state, setState] = useState({
    loading: true,
    error: "",
    theme: null
  });

  useEffect(() => {
    let ignore = false;

    setState({
      loading: true,
      error: "",
      theme: null
    });

    fetchJson(`/api/themes/${slug}`)
      .then((response) => {
        if (!ignore) {
          setState({
            loading: false,
            error: "",
            theme: response
          });
        }
      })
      .catch(() => {
        if (!ignore) {
          setState({
            loading: false,
            error: "Unable to load this theme profile.",
            theme: null
          });
        }
      });

    return () => {
      ignore = true;
    };
  }, [slug]);

  const schema = useMemo(() => {
    if (!state.theme) {
      return null;
    }

    return {
      "@context": "https://schema.org",
      "@type": "Product",
      name: state.theme.name,
      brand: {
        "@type": "Brand",
        name: state.theme.vendor
      },
      description: state.theme.summary,
      category: state.theme.bestForLabels.join(", "),
      url: state.theme.officialUrl,
      offers: {
        "@type": "Offer",
        url: state.theme.purchaseUrl,
        availability: "https://schema.org/InStock"
      }
    };
  }, [state.theme]);

  useDocumentMeta({
    title: state.theme
      ? `${state.theme.name} Review | ThemeAtlas`
      : "Theme review | ThemeAtlas",
    description: state.theme?.summary ?? "Detailed WordPress theme analysis and fit guidance.",
    path: `/themes/${slug}`,
    schema
  });

  if (state.loading) {
    return <div className="status-panel detail-status">Loading theme profile…</div>;
  }

  if (state.error || !state.theme) {
    return <div className="status-panel error detail-status">{state.error || "Theme not found."}</div>;
  }

  const compareLimitReached = compareSlugs.length >= 3;
  const theme = state.theme;

  return (
    <div className="detail-shell">
      <Link className="back-link" to={theme.bestFor[0] ? `/category/${theme.bestFor[0]}` : "/"}>
        Back to discovery
      </Link>

      <section className="detail-hero">
        <div className="detail-copy">
          <div className="theme-card__topline">
            <span className="mini-badge">{theme.marketplace}</span>
            <span className="mini-badge muted">{theme.pricing}</span>
          </div>

          <h1>{theme.name}</h1>
          <p className="detail-subhead">
            {theme.vendor} • {theme.tagline}
          </p>
          <p className="detail-summary">{theme.summary}</p>

          <div className="tag-list">
            {theme.bestForLabels.map((label) => (
              <span className="tag" key={label}>
                {label}
              </span>
            ))}
          </div>

          <div className="card-actions">
            <a className="button" href={theme.demoUrl} rel="noreferrer" target="_blank">
              Open live demo
            </a>
            <a className="button secondary" href={theme.purchaseUrl} rel="noreferrer" target="_blank">
              Visit official page
            </a>
            <button className="button ghost" onClick={() => onToggleWishlist(theme.slug)} type="button">
              {wishlistSlugs.includes(theme.slug) ? "Saved" : "Save to wishlist"}
            </button>
            <button
              className="button ghost"
              disabled={!compareSlugs.includes(theme.slug) && compareLimitReached}
              onClick={() => onToggleCompare(theme.slug)}
              type="button"
            >
              {compareSlugs.includes(theme.slug) ? "Remove compare" : "Add to compare"}
            </button>
          </div>
        </div>

        <div className="detail-scoreboard">
          <div className="score-orb large">
            <strong>{theme.editorScore}</strong>
            <span>editor fit score</span>
          </div>
          <p>{theme.supportSignal}</p>
        </div>
      </section>

      <section className="detail-layout">
        <div className="detail-panel">
          <p className="section-kicker">Score breakdown</p>
          <div className="score-stack">
            {metricOrder.map(([label, key]) => (
              <ScoreBar key={key} label={label} value={theme.scores[key]} />
            ))}
          </div>
        </div>

        <div className="detail-panel">
          <p className="section-kicker">Recommendation notes</p>
          <h2>Why teams choose {theme.name}</h2>
          <ul className="detail-list">
            {theme.strengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h3>Watch-outs</h3>
          <ul className="detail-list muted-list">
            {theme.cautions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="preview-panel">
        <div className="section-copy">
          <p className="section-kicker">Live preview</p>
          <h2>Embedded where possible, direct-link fallback when vendor policies block it.</h2>
        </div>

        <div className="preview-frame">
          <iframe loading="lazy" src={theme.demoUrl} title={`${theme.name} demo preview`} />
        </div>
        <p className="preview-note">
          Some official demo pages block iframe embedding. If the preview area stays blank, use the
          live demo button above.
        </p>
      </section>

      {theme.relatedThemes?.length ? (
        <section className="highlight-section">
          <div className="section-copy">
            <p className="section-kicker">Related picks</p>
            <h2>Similar themes worth comparing alongside {theme.name}.</h2>
          </div>

          <div className="cards-grid cards-grid--feature">
            {theme.relatedThemes.map((item) => (
              <ThemeCard
                compareLimitReached={compareLimitReached}
                isCompared={compareSlugs.includes(item.slug)}
                isWishlisted={wishlistSlugs.includes(item.slug)}
                key={item.slug}
                onToggleCompare={onToggleCompare}
                onToggleWishlist={onToggleWishlist}
                theme={item}
              />
            ))}
          </div>
        </section>
      ) : null}

      <section className="detail-panel">
        <p className="section-kicker">Research sources</p>
        <div className="source-list">
          {theme.sources.map((source) => (
            <a href={source.url} key={source.url} rel="noreferrer" target="_blank">
              {source.label}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

