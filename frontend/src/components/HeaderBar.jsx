import { Link } from "react-router-dom";

export const HeaderBar = ({
  themeMode,
  onToggleThemeMode,
  wishlistCount,
  compareCount
}) => (
  <header className="topbar">
    <div className="topbar-inner">
      <Link className="brand-mark" to="/">
        <span className="brand-mark__eyebrow">WordPress Research</span>
        <span className="brand-mark__title">ThemeAtlas</span>
      </Link>

      <nav className="topbar-actions" aria-label="Primary">
        <Link className="pill-link" to="/">
          Discover
        </Link>
        <button className="pill-link" onClick={onToggleThemeMode} type="button">
          {themeMode === "dark" ? "Light mode" : "Dark mode"}
        </button>
        <span className="pill-counter">Wishlist {wishlistCount}</span>
        <span className="pill-counter">Compare {compareCount}</span>
      </nav>
    </div>
  </header>
);

