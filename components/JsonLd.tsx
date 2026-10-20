import { siteConfig } from "@/lib/site-config";

export default function JsonLd() {
  const SITE = siteConfig.url;
  const BOOKING = siteConfig.bookingUrl;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE}/#person`,
        name: siteConfig.name,
        alternateName: [siteConfig.nickname, "ethsakshi", "portgasdyamato"],
        url: SITE,
        image: siteConfig.ogImage,
        email: `mailto:${siteConfig.email}`,
        jobTitle: "AI Product Designer and Design Engineer",
        description:
          "AI Product Designer, Design Engineer and Frontend Engineer who designs in Figma and ships in React, TypeScript and Next.js, building AI-native products with Claude Code, Cursor and LLM APIs.",
        alumniOf: [
          {
            "@type": "CollegeOrUniversity",
            name: "Dr. A.P.J. Abdul Kalam Technical University",
          },
          {
            "@type": "EducationalOrganization",
            name: "Harvard Aspire Institute",
          },
        ],
        affiliation: [
          {
            "@type": "Organization",
            name: "DIVINE Lab, IIT Delhi",
            description: "Design Research Intern (G2C AI Educational Frameworks)",
          },
          {
            "@type": "Organization",
            name: "Linux Foundation / Red Hat",
            description: "LFX Mentee (Podman Desktop Platform & Open-Source DX)",
          },
          {
            "@type": "Organization",
            name: "BrightChamps",
            description: "Coding & Design Instructor (Generative AI & Design Systems)",
          },
          {
            "@type": "Organization",
            name: "OpenSphere & LegalBridge",
            description: "Product Designer & Web Developer",
          },
        ],
        knowsAbout: [
          "AI product design",
          "Human-AI interaction",
          "Design engineering",
          "UI/UX design",
          "Frontend engineering",
          "React",
          "TypeScript",
          "Next.js",
          "Prompt engineering",
          "Claude Code",
          "Accessibility",
          "Design systems",
          "Explainable AI",
          "Multi-modal LLMs",
        ],
        hasOccupation: [
          { "@type": "Occupation", name: "AI Product Designer" },
          { "@type": "Occupation", name: "Applied AI Product Builder" },
          { "@type": "Occupation", name: "Design Engineer" },
          { "@type": "Occupation", name: "Frontend Engineer" },
          { "@type": "Occupation", name: "UI/UX Designer" },
        ],
        award: [
          "UI/UX Solvathon 1st place among 700+ participants (2025)",
          "Invited Enterprise AI Trainer for Ozone Group (2026)",
          "SheFi Global Scholar, Cohort 14",
          "Aspire Leadership Programme Graduate, Cohort V (Harvard Aspire Institute)",
          "Columbia University Prompt Engineering Certification",
        ],
        sameAs: [
          siteConfig.socials.linkedin,
          siteConfig.socials.github,
          siteConfig.socials.credly,
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "hiring and collaboration",
          email: siteConfig.email,
          url: BOOKING,
          availableLanguage: ["English", "Hindi"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE}/#website`,
        url: SITE,
        name: `${siteConfig.name} (${siteConfig.nickname}) | Portfolio`,
        description: siteConfig.description,
        publisher: { "@id": `${SITE}/#person` },
      },
      {
        "@type": "ProfilePage",
        "@id": `${SITE}/#profile`,
        url: SITE,
        mainEntity: { "@id": `${SITE}/#person` },
        dateModified: "2026-10-20",
      },
      {
        "@type": "Service",
        "@id": `${SITE}/#service`,
        name: "AI Product Design and Applied AI Engineering",
        provider: { "@id": `${SITE}/#person` },
        serviceType: [
          "AI Product Design",
          "Applied AI Product Engineering",
          "Design Engineering",
          "Frontend Engineering",
          "UI/UX Design",
          "AI UX Audits & Prototyping",
        ],
        areaServed: "Worldwide",
        url: `${SITE}/hire`,
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
