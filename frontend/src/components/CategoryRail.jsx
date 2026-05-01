export const CategoryRail = ({ categories, activeCategory, onSelectCategory }) => (
  <section className="category-rail">
    <div className="section-copy">
      <p className="section-kicker">Industry shortcuts</p>
      <h2>Pick a business category and narrow the catalog instantly.</h2>
    </div>

    <div className="category-grid">
      <button
        className={`category-card ${!activeCategory ? "active" : ""}`}
        onClick={() => onSelectCategory("")}
        type="button"
      >
        <strong>All categories</strong>
        <span>See the full research-backed catalog</span>
      </button>

      {categories.map((category) => (
        <button
          className={`category-card ${activeCategory === category.id ? "active" : ""}`}
          key={category.id}
          onClick={() => onSelectCategory(category.id)}
          style={{ "--category-accent": category.accent }}
          type="button"
        >
          <strong>{category.label}</strong>
          <span>{category.summary}</span>
        </button>
      ))}
    </div>
  </section>
);

