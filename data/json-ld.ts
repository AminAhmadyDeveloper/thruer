import type { Graph } from "schema-dts";

export const rootJsonLd: Graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@id": "https://thruer.vercel.app/#app",
      "@type": "SoftwareApplication",
      applicationCategory: "BusinessApplication",
      description:
        "Thruer is an AI-powered Next.js boilerplate with Tailwind CSS, Radix UI, and more.",
      inLanguage: "en",
      name: "Thruer",
      offers: {
        "@type": "Offer",
        price: 0,
        priceCurrency: "USD",
      },
      operatingSystem: "Android, iOS, Web",
      publisher: {
        "@type": "Person",
        email: "aminahmadyworks@gmail.com",
        name: "Amin Ahmady",
        sameAs: [
          "https://instagram.com/aminahmady",
          "https://linkedin.com/in/aminahmady",
          "https://twitter.com/aminahmady",
        ],
        telephone: "+989146673078",
        url: "https://aminahmady.vercel.app",
      },
      url: "https://thruer.vercel.app/",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Features",
      url: "https://thruer.vercel.app/#link",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Templates",
      url: "https://thruer.vercel.app/#link",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Pricing",
      url: "https://thruer.vercel.app/#link",
    },
    {
      "@type": "SiteNavigationElement",
      name: "About Us",
      url: "https://thruer.vercel.app/about-us",
    },
    {
      "@type": "SiteNavigationElement",
      name: "FAQ",
      url: "https://thruer.vercel.app/faq",
    },
  ],
};
