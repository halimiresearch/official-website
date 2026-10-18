import { SITE_URL, site } from "@/content/site";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.brand.name,
    url: SITE_URL,
    description: site.seo.description,
    email: site.contact.email,
    sameAs: site.contact.socials.map((s) => s.url),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
