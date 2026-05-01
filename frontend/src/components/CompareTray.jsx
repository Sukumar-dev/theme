import { useEffect, useState } from "react";
import { fetchJson } from "../lib/api";

const rows = [
  ["Editor fit", "editorScore"],
  ["Performance", "scores.performance"],
  ["Core Web Vitals", "scores.cwv"],
  ["SEO", "scores.seo"],
  ["Mobile", "scores.mobile"],
  ["Builder support", "scores.builder"],
  ["WooCommerce", "scores.woocommerce"],
  ["Accessibility", "scores.accessibility"],
  ["Customization", "scores.customization"]
];

const readValue = (item, path) =>
  path.split(".").reduce((current, key) => (current ? current[key] : undefined), item);

export const CompareTray = ({ compareSlugs, onRemove }) => {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!compareSlugs.length) {
      setItems([]);
      setOpen(false);
      return;
    }

    let ignore = false;

    fetchJson(`/api/compare?slugs=${compareSlugs.join(",")}`)
      .then((response) => {
        if (!ignore) {
          setItems(response);
        }
      })
      .catch(() => {
        if (!ignore) {
          setItems([]);
        }
      });

    return () => {
      ignore = true;
    };
  }, [compareSlugs]);

  if (!compareSlugs.length) {
    return null;
  }

  const gridTemplateColumns = `180px repeat(${Math.max(items.length, 1)}, minmax(180px, 1fr))`;

  return (
    <div className="compare-tray">
      <div className="compare-tray__bar">
        <div>
          <strong>{compareSlugs.length} themes selected</strong>
          <span>Side-by-side performance, SEO, and commerce signals</span>
        </div>

        <button className="button secondary" onClick={() => setOpen((value) => !value)} type="button">
          {open ? "Hide compare" : "Open compare"}
        </button>
      </div>

      {open ? (
        <div className="compare-panel">
          <div className="compare-grid compare-grid--header" style={{ gridTemplateColumns }}>
            <div className="compare-cell compare-cell--label">Metric</div>
            {items.map((item) => (
              <div className="compare-cell compare-cell--theme" key={item.slug}>
                <strong>{item.name}</strong>
                <span>{item.vendor}</span>
                <button className="plain-link" onClick={() => onRemove(item.slug)} type="button">
                  Remove
                </button>
              </div>
            ))}
          </div>

          {rows.map(([label, path]) => (
            <div className="compare-grid" key={label} style={{ gridTemplateColumns }}>
              <div className="compare-cell compare-cell--label">{label}</div>
              {items.map((item) => (
                <div className="compare-cell" key={`${item.slug}-${label}`}>
                  {readValue(item, path)}
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};
