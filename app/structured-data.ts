export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "Cameron Highlands Mossy Forest Tours",
  "description": "Experience the enchanting Mossy Forest Cameron Highlands with our guided eco tours. Explore Gunung Brinchang, BOH Tea Plantations, and jungle trekking adventures.",
  "url": "https://cameronhighlandstour.com",
  "telephone": "+60196592141",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Cameron Highlands",
    "addressRegion": "Pahang",
    "addressCountry": "MY"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "4.4704",
    "longitude": "101.3768"
  },
  "priceRange": "RM 150 - RM 280",
  "image": [
    "https://cameronhighlandstour.com/og-image.jpg"
  ],
  "sameAs": [
    "https://wa.me/60196592141"
  ]
};

export const tourPackagesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "Product",
      "name": "Half-Day Mossy Forest Tour",
      "description": "Explore the mystical Mossy Forest, Gunung Brinchang viewpoint, and BOH Tea Plantation in 4-5 hours.",
      "offers": {
        "@type": "Offer",
        "price": "150",
        "priceCurrency": "MYR",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "Product",
      "name": "Full-Day Cameron Adventure",
      "description": "Complete Cameron Highlands experience including Mossy Forest, tea plantations, strawberry farms, and more.",
      "offers": {
        "@type": "Offer",
        "price": "280",
        "priceCurrency": "MYR",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "Product",
      "name": "Eco Photography Tour",
      "description": "Professional photography tour capturing the best of Cameron Highlands' natural beauty.",
      "offers": {
        "@type": "Offer",
        "price": "220",
        "priceCurrency": "MYR",
        "availability": "https://schema.org/InStock"
      }
    }
  ]
};
