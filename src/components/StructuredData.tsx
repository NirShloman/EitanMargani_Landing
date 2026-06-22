import { business, siteContent } from "@/lib/content";

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoPartsStore",
    name: business.name,
    description: siteContent.seo.description,
    url: siteContent.seo.siteUrl,
    telephone: business.phoneDisplay,
    email: business.email,
    image: `${siteContent.seo.siteUrl}/images/sign.jpg`,
    address: business.address,
    openingHours: business.hours
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
    />
  );
}
