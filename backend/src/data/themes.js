export const categories = [
  {
    id: "food-restaurant",
    label: "Food & Restaurant",
    summary: "Menus, reservations, local SEO, and visual storytelling for hospitality brands.",
    accent: "#d1684a"
  },
  {
    id: "shopping-ecommerce",
    label: "Shopping & eCommerce",
    summary: "Conversion-focused stores, product discovery, and WooCommerce-heavy builds.",
    accent: "#2c8b6d"
  },
  {
    id: "travel-tourism",
    label: "Travel & Tourism",
    summary: "Destination-first layouts, itinerary pages, and booking-oriented content flow.",
    accent: "#287e96"
  },
  {
    id: "finance-banking",
    label: "Finance & Banking",
    summary: "Trust-driven design, accessibility, fast performance, and credible service pages.",
    accent: "#245a48"
  },
  {
    id: "education",
    label: "Education & LMS",
    summary: "Course catalogs, instructors, lessons, and learner journeys.",
    accent: "#b47227"
  },
  {
    id: "real-estate",
    label: "Real Estate",
    summary: "Listings, neighborhood proof, rich media, and lead capture funnels.",
    accent: "#7050c8"
  },
  {
    id: "healthcare",
    label: "Healthcare",
    summary: "Accessible service pages, appointment journeys, and clarity-first design.",
    accent: "#28718a"
  },
  {
    id: "portfolio-agency",
    label: "Portfolio & Agency",
    summary: "Case studies, service storytelling, and bold client-facing presentation.",
    accent: "#b0557e"
  },
  {
    id: "saas-startup",
    label: "SaaS & Startup",
    summary: "Fast landing pages, pricing flows, feature sections, and product marketing.",
    accent: "#4d58b7"
  },
  {
    id: "blogging-news",
    label: "Blogging & News",
    summary: "Editorial readability, archive control, and content scale.",
    accent: "#7a6b2f"
  },
  {
    id: "photography",
    label: "Photography",
    summary: "Gallery-led presentation, minimalist chrome, and immersive visuals.",
    accent: "#655d78"
  },
  {
    id: "gym-fitness",
    label: "Gym & Fitness",
    summary: "Class timetables, trainer profiles, and strong action-oriented calls to action.",
    accent: "#8a6320"
  },
  {
    id: "hotel-booking",
    label: "Hotel & Booking",
    summary: "Room showcases, booking journeys, hospitality polish, and mobile-first detail pages.",
    accent: "#1c8077"
  }
];

export const themes = [
  {
    id: "astra",
    slug: "astra",
    name: "Astra",
    vendor: "Brainstorm Force",
    marketplace: "Official",
    pricing: "Free + Pro",
    officialUrl: "https://wpastra.com/",
    demoUrl: "https://wpastra.com/website-templates/",
    purchaseUrl: "https://wpastra.com/pricing/",
    tagline: "A performance-focused multipurpose theme with deep starter site coverage.",
    summary:
      "Astra stays at the top of many professional shortlists because it combines strong performance, excellent WooCommerce tooling, and broad builder support across client projects.",
    bestFor: [
      "shopping-ecommerce",
      "education",
      "portfolio-agency",
      "saas-startup",
      "real-estate",
      "healthcare"
    ],
    builders: ["Gutenberg", "Elementor", "Beaver Builder", "Brizy"],
    keywords: ["lightweight", "starter templates", "woocommerce", "client work", "seo", "agency"],
    strengths: [
      "Huge starter template ecosystem",
      "Strong WooCommerce controls",
      "Flexible enough for agency-standard client builds"
    ],
    cautions: ["Option density can feel heavy for very small brochure sites."],
    scores: {
      performance: 94,
      seo: 93,
      mobile: 95,
      builder: 96,
      woocommerce: 95,
      uiux: 91,
      accessibility: 88,
      customization: 95,
      cwv: 93
    },
    editorScore: 94,
    trendingScore: 98,
    supportSignal: "Widely used across freelancers, agencies, and WooCommerce builds.",
    sources: [
      { label: "Official site", url: "https://wpastra.com/" },
      { label: "Theme resources", url: "https://wpastra.com/themes/" }
    ]
  },
  {
    id: "kadence",
    slug: "kadence",
    name: "Kadence",
    vendor: "Kadence WP",
    marketplace: "Official",
    pricing: "Free + Pro",
    officialUrl: "https://www.kadencewp.com/kadence-theme/",
    demoUrl: "https://www.kadencewp.com/kadence-theme/starter-templates/",
    purchaseUrl: "https://www.kadencewp.com/pricing/",
    tagline: "Modern, fast, and builder-friendly with a strong balance of power and polish.",
    summary:
      "Kadence is consistently recommended for professional builds thanks to its lightweight core, Gutenberg-first approach, and polished starter templates across many industries.",
    bestFor: [
      "food-restaurant",
      "shopping-ecommerce",
      "education",
      "healthcare",
      "portfolio-agency",
      "saas-startup",
      "travel-tourism",
      "gym-fitness"
    ],
    builders: ["Gutenberg", "Elementor", "Beaver Builder", "Brizy"],
    keywords: ["lightweight", "gutenberg", "woocommerce", "starter templates", "accessibility"],
    strengths: [
      "Excellent balance between speed and customization",
      "WooCommerce-ready without feeling bloated",
      "Strong starter templates across business, ecommerce, and course use cases"
    ],
    cautions: ["Advanced premium capabilities are spread across the broader Kadence ecosystem."],
    scores: {
      performance: 95,
      seo: 94,
      mobile: 95,
      builder: 94,
      woocommerce: 93,
      uiux: 93,
      accessibility: 90,
      customization: 94,
      cwv: 94
    },
    editorScore: 95,
    trendingScore: 97,
    supportSignal: "A favorite among agencies adopting modern Gutenberg workflows.",
    sources: [
      { label: "Theme comparison", url: "https://www.kadencewp.com/theme-comparison/" },
      { label: "Starter templates", url: "https://www.kadencewp.com/kadence-theme/starter-templates/" }
    ]
  },
  {
    id: "generatepress",
    slug: "generatepress",
    name: "GeneratePress",
    vendor: "GeneratePress",
    marketplace: "Official",
    pricing: "Free + Premium",
    officialUrl: "https://generatepress.com/",
    demoUrl: "https://generatepress.com/theme/",
    purchaseUrl: "https://generatepress.com/theme/",
    tagline: "One of the cleanest WordPress foundations for speed, stability, and accessibility.",
    summary:
      "GeneratePress is especially strong when long-term maintainability, accessibility, and Core Web Vitals matter more than flashy out-of-the-box effects.",
    bestFor: [
      "finance-banking",
      "healthcare",
      "blogging-news",
      "saas-startup",
      "education",
      "portfolio-agency"
    ],
    builders: ["Gutenberg", "Elementor", "Beaver Builder", "GenerateBlocks"],
    keywords: ["accessibility", "minimal", "performance", "developer friendly", "hooks"],
    strengths: [
      "Extremely lightweight base",
      "Strong accessibility and stability posture",
      "Excellent for custom builds that still need editorial control"
    ],
    cautions: ["Visual wow-factor depends more on your build system than on the stock theme."],
    scores: {
      performance: 97,
      seo: 95,
      mobile: 94,
      builder: 90,
      woocommerce: 88,
      uiux: 86,
      accessibility: 94,
      customization: 90,
      cwv: 97
    },
    editorScore: 94,
    trendingScore: 93,
    supportSignal: "Strong reputation among performance-focused developers and agencies.",
    sources: [
      { label: "Theme page", url: "https://generatepress.com/theme/" },
      { label: "WooCommerce overview", url: "https://generatepress.com/woocommerce/" }
    ]
  },
  {
    id: "blocksy",
    slug: "blocksy",
    name: "Blocksy",
    vendor: "Creative Themes",
    marketplace: "Official",
    pricing: "Free + Pro",
    officialUrl: "https://creativethemes.com/",
    demoUrl: "https://creativethemes.com/blocksy/starter-sites/",
    purchaseUrl: "https://creativethemes.com/blocksy/",
    tagline: "A modern visual theme with sharp starter sites and strong speed credentials.",
    summary:
      "Blocksy stands out for teams wanting a more design-forward feel without giving up speed, responsiveness, or builder compatibility.",
    bestFor: [
      "portfolio-agency",
      "saas-startup",
      "shopping-ecommerce",
      "blogging-news",
      "travel-tourism",
      "finance-banking"
    ],
    builders: ["Gutenberg", "Elementor", "Brizy", "Beaver Builder"],
    keywords: ["modern UI", "starter sites", "speed", "design-forward", "ecommerce"],
    strengths: [
      "Great starter site aesthetics",
      "Fast and flexible for both content and commerce",
      "Helpful middle ground between pure performance themes and more visual builders"
    ],
    cautions: ["Teams that want a very conservative enterprise look may need more brand tailoring."],
    scores: {
      performance: 93,
      seo: 91,
      mobile: 94,
      builder: 93,
      woocommerce: 91,
      uiux: 94,
      accessibility: 88,
      customization: 93,
      cwv: 92
    },
    editorScore: 93,
    trendingScore: 95,
    supportSignal: "Popular with designers who still care about page speed and editorial quality.",
    sources: [
      { label: "Official site", url: "https://creativethemes.com/" },
      { label: "Starter sites", url: "https://creativethemes.com/blocksy/starter-sites/" }
    ]
  },
  {
    id: "divi",
    slug: "divi",
    name: "Divi",
    vendor: "Elegant Themes",
    marketplace: "Official",
    pricing: "Membership",
    officialUrl: "https://www.elegantthemes.com/",
    demoUrl: "https://demo.elegantthemes.com/",
    purchaseUrl: "https://www.elegantthemes.com/",
    tagline: "A visual-builder-first ecosystem for teams that want total design control.",
    summary:
      "Divi remains attractive for teams that prioritize rapid visual prototyping, large design libraries, and non-technical editing freedom more than absolute minimal page weight.",
    bestFor: [
      "portfolio-agency",
      "food-restaurant",
      "hotel-booking",
      "travel-tourism",
      "real-estate",
      "saas-startup"
    ],
    builders: ["Divi Builder"],
    keywords: ["visual builder", "layout packs", "design freedom", "no code", "membership"],
    strengths: [
      "Deep visual builder workflow",
      "Large layout pack library",
      "Comfortable for teams that prefer design operations over code-heavy setups"
    ],
    cautions: ["Not the first choice when extreme lightweight performance is the primary goal."],
    scores: {
      performance: 78,
      seo: 84,
      mobile: 90,
      builder: 95,
      woocommerce: 88,
      uiux: 92,
      accessibility: 82,
      customization: 97,
      cwv: 76
    },
    editorScore: 87,
    trendingScore: 89,
    supportSignal: "Strong commercial ecosystem with a builder-centric user base.",
    sources: [
      { label: "Official site", url: "https://www.elegantthemes.com/" },
      { label: "Theme builder docs", url: "https://www.elegantthemes.com/documentation/divi/the-divi-theme-builder/" }
    ]
  },
  {
    id: "hello-elementor",
    slug: "hello-elementor",
    name: "Hello Elementor",
    vendor: "Elementor",
    marketplace: "Official",
    pricing: "Free",
    officialUrl: "https://elementor.com/themes/hello-theme/",
    demoUrl: "https://elementor.com/themes/hello-theme/",
    purchaseUrl: "https://elementor.com/themes/hello-theme/",
    tagline: "A minimal blank-canvas theme designed to pair tightly with Elementor.",
    summary:
      "Hello is ideal when Elementor is the center of the build and you want the theme layer to stay extremely lean and out of the way.",
    bestFor: [
      "saas-startup",
      "portfolio-agency",
      "shopping-ecommerce",
      "photography",
      "real-estate"
    ],
    builders: ["Elementor"],
    keywords: ["blank canvas", "elementor", "minimal", "fast", "free"],
    strengths: [
      "Very small theme footprint",
      "Excellent alignment with Elementor workflows",
      "Fast foundation for custom page-builder-led builds"
    ],
    cautions: ["Not ideal if you want lots of theme-level design opinions without Elementor."],
    scores: {
      performance: 96,
      seo: 91,
      mobile: 94,
      builder: 98,
      woocommerce: 90,
      uiux: 80,
      accessibility: 85,
      customization: 92,
      cwv: 95
    },
    editorScore: 90,
    trendingScore: 92,
    supportSignal: "Frequently chosen by Elementor-first agencies and solo builders.",
    sources: [
      { label: "Official Hello page", url: "https://elementor.com/themes/hello-theme/" },
      { label: "Help center overview", url: "https://elementor.com/help/what-is-elementor-hello-theme/" }
    ]
  },
  {
    id: "oceanwp",
    slug: "oceanwp",
    name: "OceanWP",
    vendor: "OceanWP",
    marketplace: "Official",
    pricing: "Free + Pro",
    officialUrl: "https://oceanwp.org/",
    demoUrl: "https://oceanwp.org/demos/",
    purchaseUrl: "https://oceanwp.org/",
    tagline: "Feature-rich and highly adaptable with a very large demo catalog.",
    summary:
      "OceanWP is a strong choice when you want broad niche coverage, WooCommerce capability, and lots of prebuilt variation without moving into a heavier all-in-one builder ecosystem.",
    bestFor: [
      "food-restaurant",
      "shopping-ecommerce",
      "travel-tourism",
      "healthcare",
      "gym-fitness",
      "hotel-booking"
    ],
    builders: ["Gutenberg", "Elementor"],
    keywords: ["demos", "woocommerce", "elementor", "multipurpose", "schema ready"],
    strengths: [
      "Large demo library across many industries",
      "Good WooCommerce alignment",
      "Strong fit for users who want more theme features out of the box"
    ],
    cautions: ["Can feel more feature-dense than minimal performance-first themes."],
    scores: {
      performance: 87,
      seo: 89,
      mobile: 92,
      builder: 90,
      woocommerce: 92,
      uiux: 88,
      accessibility: 87,
      customization: 94,
      cwv: 86
    },
    editorScore: 89,
    trendingScore: 88,
    supportSignal: "Strong installed base and very broad starter template coverage.",
    sources: [
      { label: "Official site", url: "https://oceanwp.org/" },
      { label: "Demos library", url: "https://oceanwp.org/demos/" }
    ]
  },
  {
    id: "neve",
    slug: "neve",
    name: "Neve",
    vendor: "ThemeIsle",
    marketplace: "Official",
    pricing: "Free + Pro",
    officialUrl: "https://themeisle.com/themes/neve",
    demoUrl: "https://themeisle.com/themes/neve/starter-sites/?builder=gutenberg",
    purchaseUrl: "https://themeisle.com/themes/neve",
    tagline: "A fast theme with a strong starter site library and broad builder support.",
    summary:
      "Neve is a dependable choice when speed, starter site variety, and long-term client usability all matter in the same project.",
    bestFor: [
      "blogging-news",
      "education",
      "saas-startup",
      "portfolio-agency",
      "shopping-ecommerce",
      "healthcare"
    ],
    builders: ["Gutenberg", "Elementor", "Beaver Builder", "Brizy", "Divi Builder"],
    keywords: ["lightweight", "starter sites", "amp", "seo ready", "client friendly"],
    strengths: [
      "Fast baseline with a broad template library",
      "Works well across content, commerce, and service sites",
      "Friendly for agencies handing sites over to clients"
    ],
    cautions: ["Some advanced layout flexibility sits behind premium add-ons."],
    scores: {
      performance: 92,
      seo: 92,
      mobile: 94,
      builder: 93,
      woocommerce: 90,
      uiux: 89,
      accessibility: 88,
      customization: 92,
      cwv: 92
    },
    editorScore: 91,
    trendingScore: 91,
    supportSignal: "High adoption with especially strong small-business and agency appeal.",
    sources: [
      { label: "Official site", url: "https://themeisle.com/themes/neve" },
      { label: "Starter sites info", url: "https://docs.themeisle.com/neve/starter-sites-available-for-import" }
    ]
  },
  {
    id: "flatsome",
    slug: "flatsome",
    name: "Flatsome",
    vendor: "UX Themes",
    marketplace: "ThemeForest",
    pricing: "One-time purchase",
    officialUrl: "https://themeforest.net/item/flatsome-multipurpose-responsive-woocommerce-theme/5484319",
    demoUrl: "https://themeforest.net/item/flatsome-multipurpose-responsive-woocommerce-theme/5484319",
    purchaseUrl: "https://themeforest.net/item/flatsome-multipurpose-responsive-woocommerce-theme/5484319",
    tagline: "One of the best-known WooCommerce themes for conversion-focused store builds.",
    summary:
      "Flatsome is still a go-to option for store-heavy projects when the priority is a proven WooCommerce experience with lots of prebuilt commerce patterns.",
    bestFor: [
      "shopping-ecommerce",
      "food-restaurant",
      "hotel-booking",
      "gym-fitness"
    ],
    builders: ["UX Builder", "Gutenberg"],
    keywords: ["woocommerce", "storefront", "conversion", "themeforest", "ecommerce"],
    strengths: [
      "Battle-tested WooCommerce setup",
      "Strong product merchandising patterns",
      "Large installed base in store-focused projects"
    ],
    cautions: ["Less attractive when you want a builder-agnostic framework for many non-store site types."],
    scores: {
      performance: 84,
      seo: 86,
      mobile: 91,
      builder: 86,
      woocommerce: 97,
      uiux: 90,
      accessibility: 80,
      customization: 88,
      cwv: 83
    },
    editorScore: 89,
    trendingScore: 90,
    supportSignal: "Long-running ThemeForest leader for WooCommerce-heavy client work.",
    sources: [
      { label: "ThemeForest listing", url: "https://themeforest.net/item/flatsome-multipurpose-responsive-woocommerce-theme/5484319" }
    ]
  },
  {
    id: "woodmart",
    slug: "woodmart",
    name: "WoodMart",
    vendor: "XTemos",
    marketplace: "ThemeForest",
    pricing: "One-time purchase",
    officialUrl: "https://themeforest.net/item/woodmart-woocommerce-wordpress-theme/20264492",
    demoUrl: "https://themeforest.net/item/woodmart-woocommerce-wordpress-theme/20264492",
    purchaseUrl: "https://themeforest.net/item/woodmart-woocommerce-wordpress-theme/20264492",
    tagline: "A powerful all-in-one WooCommerce theme with deep commerce features built in.",
    summary:
      "WoodMart is compelling when an online store needs advanced merchandising features, filters, comparisons, and custom product experiences without piecing together many plugins.",
    bestFor: [
      "shopping-ecommerce",
      "food-restaurant",
      "gym-fitness",
      "hotel-booking"
    ],
    builders: ["Elementor", "WPBakery", "Gutenberg"],
    keywords: ["woocommerce", "ajax filters", "compare", "wishlist", "multivendor"],
    strengths: [
      "Very strong out-of-the-box store feature set",
      "Good for catalog-heavy or conversion-heavy ecommerce projects",
      "Useful when clients want fewer extra Woo plugins"
    ],
    cautions: ["More specialized toward ecommerce than general service or editorial sites."],
    scores: {
      performance: 82,
      seo: 87,
      mobile: 90,
      builder: 89,
      woocommerce: 98,
      uiux: 91,
      accessibility: 82,
      customization: 93,
      cwv: 81
    },
    editorScore: 88,
    trendingScore: 94,
    supportSignal: "One of ThemeForest's strongest commerce-oriented options by sustained sales momentum.",
    sources: [
      { label: "ThemeForest listing", url: "https://themeforest.net/item/woodmart-woocommerce-wordpress-theme/20264492" }
    ]
  },
  {
    id: "xstore",
    slug: "xstore",
    name: "XStore",
    vendor: "8theme",
    marketplace: "ThemeForest",
    pricing: "One-time purchase",
    officialUrl: "https://themeforest.net/item/xstore-responsive-woocommerce-theme/15780546",
    demoUrl: "https://themeforest.net/item/xstore-responsive-woocommerce-theme/15780546",
    purchaseUrl: "https://themeforest.net/item/xstore-responsive-woocommerce-theme/15780546",
    tagline: "A catalog-rich WooCommerce theme with broad retail starter coverage.",
    summary:
      "XStore is a strong commercial option when you need a polished store launch quickly and want lots of ready-made retail templates and product-focused UI patterns.",
    bestFor: [
      "shopping-ecommerce",
      "food-restaurant",
      "gym-fitness",
      "travel-tourism"
    ],
    builders: ["Elementor", "WPBakery"],
    keywords: ["retail", "woocommerce", "themeforest", "templates", "marketplace"],
    strengths: [
      "Large store demo library",
      "Fast path to vertical ecommerce launches",
      "Useful for retail categories that need design variety"
    ],
    cautions: ["A heavier choice than lean framework themes for non-store websites."],
    scores: {
      performance: 80,
      seo: 85,
      mobile: 90,
      builder: 88,
      woocommerce: 96,
      uiux: 90,
      accessibility: 79,
      customization: 92,
      cwv: 79
    },
    editorScore: 87,
    trendingScore: 92,
    supportSignal: "Strong marketplace momentum for high-variation WooCommerce launches.",
    sources: [
      { label: "ThemeForest listing", url: "https://themeforest.net/item/xstore-responsive-woocommerce-theme/15780546" }
    ]
  },
  {
    id: "avada",
    slug: "avada",
    name: "Avada",
    vendor: "ThemeFusion",
    marketplace: "ThemeForest",
    pricing: "One-time purchase",
    officialUrl: "https://avada.com/",
    demoUrl: "https://avada.com/",
    purchaseUrl: "https://themeforest.net/item/avada-responsive-multipurpose-theme/2833226",
    tagline: "A long-running all-in-one website builder with deep layout tooling.",
    summary:
      "Avada remains relevant for teams that want a highly visual website builder, a giant prebuilt site catalog, and a commercial ecosystem that covers many business types.",
    bestFor: [
      "portfolio-agency",
      "real-estate",
      "travel-tourism",
      "hotel-booking",
      "saas-startup"
    ],
    builders: ["Avada Builder"],
    keywords: ["all in one", "website builder", "themeforest", "layout builder", "prebuilt websites"],
    strengths: [
      "Huge prebuilt website library",
      "Rich visual builder ecosystem",
      "Comfortable for teams that want one vendor for many site parts"
    ],
    cautions: ["Not the leanest option when speed-first architecture is the primary decision driver."],
    scores: {
      performance: 77,
      seo: 84,
      mobile: 89,
      builder: 94,
      woocommerce: 89,
      uiux: 90,
      accessibility: 80,
      customization: 96,
      cwv: 75
    },
    editorScore: 86,
    trendingScore: 88,
    supportSignal: "Still highly visible in the commercial multipurpose theme market.",
    sources: [
      { label: "Official site", url: "https://avada.com/" },
      { label: "Purchase documentation", url: "https://avada.com/documentation/how-to-purchase-avada/" }
    ]
  }
];

export const categoryMap = Object.fromEntries(categories.map((category) => [category.id, category]));

