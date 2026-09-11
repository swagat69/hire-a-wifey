import { CONTACT, FAQS, SERVICE_AREA } from "@/lib/content";

const SITE = "https://www.hireawifeyaustralia.com.au";

/**
 * LocalBusiness + FAQPage, per brief §24. Every value here is also visible
 * on the page — no claims are made in markup that a visitor cannot read.
 */
export default function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": `${SITE}/#business`,
        name: "Hire a Wifey",
        slogan: "We Take Care of Home.",
        description:
          "Home cleaning, housekeeping and household assistance throughout Hervey Bay — cleaning, laundry, ironing, dishes, bed making, home organisation and meal preparation. NDIS and DVA clients welcome.",
        url: SITE,
        telephone: "+61448168480",
        email: CONTACT.email,
        image: `${SITE}/brand/logo-original.jpg`,
        logo: `${SITE}/brand/logo-original.jpg`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Hervey Bay",
          addressRegion: "QLD",
          addressCountry: "AU",
        },
        areaServed: SERVICE_AREA.suburbs.map((name) => ({
          "@type": "Place",
          name: `${name}, Queensland`,
        })),
        knowsLanguage: "en-AU",
        identifier: {
          "@type": "PropertyValue",
          propertyID: "ABN",
          value: CONTACT.abn,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE}/#faq`,
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
