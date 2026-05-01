import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { CompareTray } from "./components/CompareTray";
import { HeaderBar } from "./components/HeaderBar";
import { HomePage } from "./pages/HomePage";
import { ThemeDetailPage } from "./pages/ThemeDetailPage";
import { fetchJson } from "./lib/api";
import { readStoredValue, writeStoredValue } from "./lib/storage";

const THEME_MODE_KEY = "themeatlas:mode";
const WISHLIST_KEY = "themeatlas:wishlist";
const COMPARE_KEY = "themeatlas:compare";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [meta, setMeta] = useState({
    themeCount: 0,
    categoryCount: 0,
    builders: []
  });
  const [themeMode, setThemeMode] = useState(() => readStoredValue(THEME_MODE_KEY, "light"));
  const [wishlistSlugs, setWishlistSlugs] = useState(() => readStoredValue(WISHLIST_KEY, []));
  const [compareSlugs, setCompareSlugs] = useState(() => readStoredValue(COMPARE_KEY, []));

  useEffect(() => {
    let ignore = false;

    Promise.all([fetchJson("/api/categories"), fetchJson("/api/meta")])
      .then(([categoriesResponse, metaResponse]) => {
        if (!ignore) {
          setCategories(categoriesResponse);
          setMeta(metaResponse);
        }
      })
      .catch(() => {
        if (!ignore) {
          setCategories([]);
        }
      });

    return () => {
      ignore = true;
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = themeMode;
    writeStoredValue(THEME_MODE_KEY, themeMode);
  }, [themeMode]);

  useEffect(() => {
    writeStoredValue(WISHLIST_KEY, wishlistSlugs);
  }, [wishlistSlugs]);

  useEffect(() => {
    writeStoredValue(COMPARE_KEY, compareSlugs);
  }, [compareSlugs]);

  const toggleWishlist = (slug) => {
    setWishlistSlugs((current) =>
      current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug]
    );
  };

  const toggleCompare = (slug) => {
    setCompareSlugs((current) => {
      if (current.includes(slug)) {
        return current.filter((item) => item !== slug);
      }

      if (current.length >= 3) {
        return current;
      }

      return [...current, slug];
    });
  };

  return (
    <div className="app-shell">
      <HeaderBar
        compareCount={compareSlugs.length}
        onToggleThemeMode={() =>
          setThemeMode((currentMode) => (currentMode === "dark" ? "light" : "dark"))
        }
        themeMode={themeMode}
        wishlistCount={wishlistSlugs.length}
      />

      <main className="content-shell">
        <Routes>
          <Route
            element={
              <HomePage
                builders={meta.builders}
                categories={categories}
                compareSlugs={compareSlugs}
                meta={meta}
                onToggleCompare={toggleCompare}
                onToggleWishlist={toggleWishlist}
                wishlistSlugs={wishlistSlugs}
              />
            }
            path="/"
          />
          <Route
            element={
              <HomePage
                builders={meta.builders}
                categories={categories}
                compareSlugs={compareSlugs}
                meta={meta}
                onToggleCompare={toggleCompare}
                onToggleWishlist={toggleWishlist}
                wishlistSlugs={wishlistSlugs}
              />
            }
            path="/category/:categoryId"
          />
          <Route
            element={
              <ThemeDetailPage
                compareSlugs={compareSlugs}
                onToggleCompare={toggleCompare}
                onToggleWishlist={toggleWishlist}
                wishlistSlugs={wishlistSlugs}
              />
            }
            path="/themes/:slug"
          />
        </Routes>
      </main>

      <CompareTray
        compareSlugs={compareSlugs}
        onRemove={(slug) =>
          setCompareSlugs((current) => current.filter((item) => item !== slug))
        }
      />
    </div>
  );
};

export default App;

