import { Link } from "react-router-dom";
import { ScoreBar } from "./ScoreBar";

export const ThemeCard = ({
  theme,
  isWishlisted,
  isCompared,
  compareLimitReached,
  onToggleWishlist,
  onToggleCompare
}) => (
  <article className="theme-card">
    <div className="theme-card__topline">
      <span className="mini-badge">{theme.marketplace}</span>
      <span className="mini-badge muted">{theme.pricing}</span>
    </div>

    <div className="theme-card__heading">
      <div>
        <h3>{theme.name}</h3>
        <p className="theme-card__vendor">
          {theme.vendor} • {theme.tagline}
        </p>
      </div>
      <div className="score-orb">
        <strong>{theme.editorScore}</strong>
        <span>Editor fit</span>
      </div>
    </div>

    <p className="theme-card__summary">{theme.summary}</p>

    <div className="tag-list">
      {theme.builders.slice(0, 3).map((builder) => (
        <span className="tag" key={builder}>
          {builder}
        </span>
      ))}
      {theme.bestForLabels.slice(0, 2).map((label) => (
        <span className="tag muted" key={label}>
          {label}
        </span>
      ))}
    </div>

    <div className="match-reasons">
      {theme.matchReasons?.map((reason) => (
        <span className="match-chip" key={reason}>
          {reason}
        </span>
      ))}
    </div>

    <div className="score-stack">
      <ScoreBar label="Performance" value={theme.scores.performance} />
      <ScoreBar label="SEO" value={theme.scores.seo} />
      <ScoreBar label="WooCommerce" value={theme.scores.woocommerce} />
    </div>

    <p className="theme-card__signal">{theme.supportSignal}</p>

    <div className="card-actions">
      <Link className="button" to={`/themes/${theme.slug}`}>
        View analysis
      </Link>

      <button
        className="button secondary"
        disabled={!isCompared && compareLimitReached}
        onClick={() => onToggleCompare(theme.slug)}
        type="button"
      >
        {isCompared ? "Remove compare" : "Compare"}
      </button>

      <button
        className="button ghost"
        onClick={() => onToggleWishlist(theme.slug)}
        type="button"
      >
        {isWishlisted ? "Saved" : "Save"}
      </button>
    </div>

    <div className="card-links">
      <a href={theme.demoUrl} rel="noreferrer" target="_blank">
        Live demo
      </a>
      <a href={theme.purchaseUrl} rel="noreferrer" target="_blank">
        Official site
      </a>
    </div>
  </article>
);

