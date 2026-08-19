export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://salonchairwala.com/#organization",
        "name": "Redwal Furnitures OPC Pvt. Ltd.",
        "alternateName": "Salon Chair Wala",
        "url": "https://salonchairwala.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://salonchairwala.com/products/logo.webp"
        },
        "image": "https://salonchairwala.com/products/logo.webp",
        "email": "redwalenterprises@gmail.com",
        "telephone": "+91-9834956238",
        "sameAs": [
          "https://www.instagram.com/salonchairwala",
          "https://www.facebook.com/salonchairwala"
        ]
      },
      {
        "@type": ["LocalBusiness", "Store", "HomeAndConstructionBusiness"],
        "@id": "https://salonchairwala.com/#localbusiness",
        "name": "Salon Chair Wala",
        "image": "https://salonchairwala.com/products/logo.webp",
        "url": "https://salonchairwala.com",
        "telephone": "+91-9834956238",
        "email": "redwalenterprises@gmail.com",
        "priceRange": "₹₹",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "206, F4 Building, Bhumi World, Bhiwandi-Kalyan Bypass",
          "addressLocality": "Bhiwandi",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 19.30023,
          "longitude": 73.05881
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          "opens": "10:00",
          "closes": "18:00"
        },
        "parentOrganization": {
          "@id": "https://salonchairwala.com/#organization"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://salonchairwala.com/#website",
        "url": "https://salonchairwala.com",
        "name": "Salon Chair Wala",
        "publisher": {
          "@id": "https://salonchairwala.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://salonchairwala.com/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}