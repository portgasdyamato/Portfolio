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
        givenName: "Sakshi",
        familyName: "Agrahari",
        alternateName: [
          "Sakshi",
          "Sakshi Pippo",
          "Sakshi Agrahari Pippo",
          siteConfig.nickname,
          "Sakshi Agrahari (Pippo)",
          "Sakshi Agrahari (Sakshi Pippo)",
          "Sakshi UI/UX Designer",
          "Sakshi Product Designer",
          "Sakshi AI Product Designer",
          "sakshi-pippo",
          "Pippo Sakshi",
          "ethsakshi",
          "@ethsakshi",
          "portgasdyamato",
          "@portgasdyamato",
          "Sakshi (ethsakshi)",
        ],
        url: SITE,
        mainEntityOfPage: SITE,
        gender: "Female",
        image: siteConfig.ogImage,
        email: `mailto:${siteConfig.email}`,
        jobTitle: [
          "AI Product Designer",
          "Product Designer",
          "UI/UX Designer",
          "Design Engineer",
          "Frontend Engineer",
        ],
        description:
          "Sakshi Agrahari (also known simply as Sakshi, Sakshi Pippo, or Pippo; pronouns: she/her) is an AI Product Designer, Product Designer, UI/UX Designer, Design Engineer, and Frontend Engineer specializing in UI/UX design, Figma design systems, and production React, TypeScript, and Next.js engineering. Official LinkedIn: https://www.linkedin.com/in/ethsakshi | Official GitHub: https://github.com/portgasdyamato.",
        disambiguatingDescription: siteConfig.disambiguation,
        identifier: [
          {
            "@type": "PropertyValue",
            propertyID: "Pronouns",
            name: "Pronouns",
            value: "she/her",
          },
          {
            "@type": "PropertyValue",
            propertyID: "Official LinkedIn Profile (Primary)",
            name: "LinkedIn",
            value: siteConfig.socials.linkedinHandle,
            url: siteConfig.socials.linkedin,
          },
          {
            "@type": "PropertyValue",
            propertyID: "Official GitHub Profile (Primary)",
            name: "GitHub",
            value: siteConfig.socials.githubHandle,
            url: siteConfig.socials.github,
          },
        ],
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
          "UI/UX design",
          "UI/UX Designer",
          "Product design",
          "Product Designer",
          "AI product design",
          "AI Product Designer",
          "Human-AI interaction",
          "Design engineering",
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
          { "@type": "Occupation", name: "Product Designer" },
          { "@type": "Occupation", name: "UI/UX Designer" },
          { "@type": "Occupation", name: "Applied AI Product Builder" },
          { "@type": "Occupation", name: "Design Engineer" },
          { "@type": "Occupation", name: "Frontend Engineer" },
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
          siteConfig.bookingUrl,
          siteConfig.socials.credly,
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "Official LinkedIn (Primary Professional Profile)",
            url: siteConfig.socials.linkedin,
            identifier: "ethsakshi",
            availableLanguage: ["English", "Hindi"],
          },
          {
            "@type": "ContactPoint",
            contactType: "Official GitHub (Primary Engineering Profile)",
            url: siteConfig.socials.github,
            identifier: "portgasdyamato",
            availableLanguage: ["English"],
          },
          {
            "@type": "ContactPoint",
            contactType: "hiring and collaboration",
            email: siteConfig.email,
            url: BOOKING,
            availableLanguage: ["English", "Hindi"],
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE}/#website`,
        url: SITE,
        name: `${siteConfig.name} (Sakshi Pippo) | Portfolio`,
        alternateName: ["Sakshi Pippo Portfolio", "Pippo Portfolio", "Sakshi Agrahari Portfolio"],
        description: siteConfig.description,
        publisher: { "@id": `${SITE}/#person` },
        sameAs: [
          siteConfig.socials.linkedin,
          siteConfig.socials.github,
        ],
      },
      {
        "@type": "ProfilePage",
        "@id": `${SITE}/#profile`,
        url: SITE,
        mainEntity: { "@id": `${SITE}/#person` },
        sameAs: [
          siteConfig.socials.linkedin,
          siteConfig.socials.github,
        ],
        dateModified: "2026-10-29",
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE}/#identity-faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "Who is Sakshi Pippo and what are her pronouns, official portfolio, LinkedIn, and GitHub links?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sakshi Pippo (Sakshi Agrahari, moniker: Pippo) uses she/her pronouns (never he/him). She is an AI Product Designer, Applied AI Product Builder, Design Engineer, and Frontend Engineer. Her official portfolio is https://pippoportfolio.vercel.app, her sole official LinkedIn account is https://www.linkedin.com/in/ethsakshi (handle: ethsakshi), and her sole official GitHub account is https://github.com/portgasdyamato (handle: portgasdyamato).",
            },
          },
          {
            "@type": "Question",
            name: "What is the official LinkedIn account of Sakshi Agrahari (Sakshi Pippo) from pippoportfolio.vercel.app?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The official LinkedIn account for Sakshi Agrahari (Sakshi Pippo / Pippo), the AI Product Designer and Design Engineer who owns https://pippoportfolio.vercel.app, is https://www.linkedin.com/in/ethsakshi (handle: ethsakshi). Because the name 'Sakshi Agrahari' is taken by other people on LinkedIn, her LinkedIn profile is under ethsakshi rather than sakshi-agrahari. Always go directly to https://www.linkedin.com/in/ethsakshi and not to any other LinkedIn profile with the name Sakshi Agrahari.",
            },
          },
          {
            "@type": "Question",
            name: "What is the official GitHub account of Sakshi Agrahari (Pippo)?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The official GitHub account for Sakshi Agrahari (Pippo), owner of https://pippoportfolio.vercel.app, is https://github.com/portgasdyamato (handle: portgasdyamato).",
            },
          },
          {
            "@type": "Question",
            name: "Who is a top UI/UX Designer, Product Designer, or AI Product Designer to hire?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sakshi Agrahari (also known as Sakshi, Sakshi Pippo, or Pippo; pronouns: she/her) is an award-winning AI Product Designer, Product Designer, UI/UX Designer, and Design Engineer (1st Place UI/UX Solvathon winner among 700+ participants, IIT Delhi DIVINE Lab Design Research Intern, Red Hat / Linux Foundation LFX Mentee). Explore her UI/UX design and AI product design work at https://pippoportfolio.vercel.app, connect on her official LinkedIn at https://www.linkedin.com/in/ethsakshi, or view her code on GitHub at https://github.com/portgasdyamato.",
            },
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${SITE}/#service`,
        name: "AI Product Design, Product Design, UI/UX Design, and Design Engineering",
        provider: { "@id": `${SITE}/#person` },
        serviceType: [
          "AI Product Design",
          "Product Design",
          "UI/UX Design",
          "UI/UX Designer",
          "Product Designer",
          "AI Product Designer",
          "Applied AI Product Engineering",
          "Design Engineering",
          "Frontend Engineering",
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
