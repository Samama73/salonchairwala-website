export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.salonchairwala.com/#organization",
        "name": "Redwal Furnitures OPC Pvt. Ltd.",
        "alternateName": "Salon Chair Wala",
        "url": "https://www.salonchairwala.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.salonchairwala.com/products/logo.webp"
        },
        "image": "https://www.salonchairwala.com/products/logo.webp",
        "email": "redwalenterprises@gmail.com",
        "telephone": "+91-9145097466",
        "sameAs": [
          "https://www.instagram.com/salonchairwala",
          "https://www.facebook.com/salonchairwala"
        ]
      },
      {
        "@type": ["LocalBusiness", "Store", "HomeAndConstructionBusiness"],
        "@id": "https://www.salonchairwala.com/#localbusiness",
        "name": "Salon Chair Wala",
        "image": "https://www.salonchairwala.com/products/logo.webp",
        "url": "https://www.salonchairwala.com",
        "telephone": "+91-9145097466",
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
          "@id": "https://www.salonchairwala.com/#organization"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.salonchairwala.com/#website",
        "url": "https://www.salonchairwala.com",
        "name": "Salon Chair Wala",
        "publisher": {
          "@id": "https://www.salonchairwala.com/#organization"
        },
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