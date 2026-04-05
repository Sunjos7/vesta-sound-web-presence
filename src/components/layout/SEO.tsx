import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: string;
  keywords?: string;
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  canonical, 
  type = 'website',
  keywords,
}) => {
  const siteName = 'Vesta Sound Property Group';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const defaultDescription = 'Premium residential property management in the Greater Seattle and Puget Sound area. We manage your Seattle rental property like it\'s our own — tenant screening, rent collection, maintenance, and more.';
  const metaDescription = description || defaultDescription;
  const defaultKeywords = 'Seattle property management, Seattle property manager, rental property management Seattle, houses for rent Seattle, Seattle real estate management, property management Greater Seattle, Puget Sound property management, Seattle landlord services, Seattle rental homes, Seattle investment property, Bellevue property management, Redmond property management, Kirkland property management, Bothell property management, Renton property management, Seattle rental analysis, tenant screening Seattle, Seattle leasing agent';
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Vesta Sound Property Group",
    "description": metaDescription,
    "url": "https://vestasoundgroup.com",
    "areaServed": [
      "Seattle, WA",
      "Bellevue, WA",
      "Redmond, WA",
      "Kirkland, WA",
      "Bothell, WA",
      "Renton, WA",
      "Greater Seattle Area",
      "Puget Sound"
    ],
    "serviceType": [
      "Property Management",
      "Rental Property Management",
      "Tenant Screening",
      "Leasing Services",
      "Maintenance Coordination",
      "Rent Collection"
    ],
    "knowsAbout": [
      "Seattle Real Estate",
      "Residential Property Management",
      "Investment Properties Seattle",
      "Seattle Rental Market"
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="geo.region" content="US-WA" />
      <meta name="geo.placename" content="Seattle" />

      {/* Canonical Link */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}; 
