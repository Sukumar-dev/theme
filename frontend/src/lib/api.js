const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "";

export const fetchJson = async (path) => {
  const response = await fetch(`${API_BASE}${path}`);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json();
};

export const buildQueryString = (filters = {}) => {
  const params = new URLSearchParams();

  if (filters.category) {
    params.set("category", filters.category);
  }

  if (filters.search) {
    params.set("search", filters.search);
  }

  if (filters.builder) {
    params.set("builder", filters.builder);
  }

  if (filters.marketplace) {
    params.set("marketplace", filters.marketplace);
  }

  if (filters.sort && filters.sort !== "smart") {
    params.set("sort", filters.sort);
  }

  if (filters.woocommerce) {
    params.set("woocommerce", "true");
  }

  if (filters.accessible) {
    params.set("accessible", "true");
  }

  if (filters.limit) {
    params.set("limit", `${filters.limit}`);
  }

  return params.toString();
};

