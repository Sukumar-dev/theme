const sortOptions = [
  { value: "smart", label: "Smart ranking" },
  { value: "performance", label: "Performance first" },
  { value: "seo", label: "SEO first" },
  { value: "customization", label: "Customization first" },
  { value: "trending", label: "Trending now" }
];

const marketplaceOptions = ["Official", "ThemeForest"];

export const FilterSidebar = ({
  categories,
  builders,
  filters,
  onChange,
  onReset
}) => (
  <aside className="filters-panel">
    <div className="filters-panel__header">
      <p className="section-kicker">Refine results</p>
      <h3>Find the best-fit theme faster.</h3>
    </div>

    <label className="field">
      <span>Business category</span>
      <select
        onChange={(event) => onChange({ category: event.target.value })}
        value={filters.category}
      >
        <option value="">All categories</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.label}
          </option>
        ))}
      </select>
    </label>

    <label className="field">
      <span>Page builder</span>
      <select
        onChange={(event) => onChange({ builder: event.target.value })}
        value={filters.builder}
      >
        <option value="">Any builder</option>
        {builders.map((builder) => (
          <option key={builder} value={builder}>
            {builder}
          </option>
        ))}
      </select>
    </label>

    <label className="field">
      <span>Marketplace</span>
      <select
        onChange={(event) => onChange({ marketplace: event.target.value })}
        value={filters.marketplace}
      >
        <option value="">All sources</option>
        {marketplaceOptions.map((marketplace) => (
          <option key={marketplace} value={marketplace}>
            {marketplace}
          </option>
        ))}
      </select>
    </label>

    <label className="field">
      <span>Ranking mode</span>
      <select
        onChange={(event) => onChange({ sort: event.target.value })}
        value={filters.sort}
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>

    <label className="tick">
      <input
        checked={filters.woocommerce}
        onChange={(event) => onChange({ woocommerce: event.target.checked })}
        type="checkbox"
      />
      <span>Prioritize WooCommerce-ready themes</span>
    </label>

    <label className="tick">
      <input
        checked={filters.accessible}
        onChange={(event) => onChange({ accessible: event.target.checked })}
        type="checkbox"
      />
      <span>Prioritize accessibility-friendly themes</span>
    </label>

    <button className="button secondary" onClick={onReset} type="button">
      Reset filters
    </button>
  </aside>
);

