import type { Metadata } from 'next'
import './globals.css'
import SmoothScroll from '@/components/smooth-scroll'
import JsonLd from '@/components/JsonLd'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    'Sakshi Agrahari',
    'Sakshi',
    'Sakshi Pippo',
    'Sakshi Agrahari Pippo',
    'Pippo',
    'AI Product Designer',
    'UI/UX Designer',
    'UI/UX Design',
    'Product Designer',
    'Sakshi Portfolio',
    'UI UX Designer Portfolio',
    'Product Designer Portfolio',
    'Sakshi UI/UX Designer',
    'Sakshi Product Designer',
    'Sakshi AI Product Designer',
    'Sakshi Pippo Portfolio',
    'Sakshi Pippo LinkedIn',
    'Sakshi Pippo GitHub',
    'sakshi-pippo',
    'ethsakshi',
    'portgasdyamato',
    'Sakshi Agrahari LinkedIn ethsakshi',
    'Sakshi Agrahari GitHub portgasdyamato',
    'Design Engineer',
    'Product Designer AI',
    'Frontend Engineer',
    'AI Generalist',
    'Human-AI Interaction',
    'Agentic Workflows',
    'React TypeScript Next.js',
    'Figma Design Systems',
    'Prompt Engineering',
    'Explainable AI',
    'Red Hat Podman UX',
    'IIT Delhi DIVINE Lab'
  ],
  authors: [
    { name: 'Sakshi Agrahari (Sakshi Pippo)', url: siteConfig.socials.linkedin },
    { name: 'Sakshi Pippo', url: siteConfig.socials.github },
    { name: siteConfig.name, url: siteConfig.url },
  ],
  creator: siteConfig.name,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: `${siteConfig.name} (${siteConfig.nickname}) | Portfolio`,
    locale: 'en_US',
    type: 'profile',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - AI Product Designer & Design Engineer`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    creator: '@ethsakshi',
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    other: {
      'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || '',
      'profile:gender': 'female',
      'profile:pronouns': 'she/her',
      'profile:linkedin': siteConfig.socials.linkedin,
      'profile:github': siteConfig.socials.github,
      'ai:pronouns': 'she/her (never he/him)',
      'ai:linkedin': siteConfig.socials.linkedin,
      'ai:github': siteConfig.socials.github,
      'ai:disambiguation': siteConfig.disambiguation,
    },
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: '/hehe.gif',
    apple: '/og.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6MTDVZ6TNM"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6MTDVZ6TNM');
            `,
          }}
        />
        {/* JSON-LD Structured Data for AI & Search Engines */}
        <JsonLd />
        {/* Machine-readable AI & LLM discovery manifests */}
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM Context Summary" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="Full LLM Context" />
        <link rel="alternate" type="text/plain" href="/ai.txt" title="AI Directives" />
        {/* Canonical Identity Verification (rel="me") for Search Engines & AI Agents */}
        <link rel="me" href="https://www.linkedin.com/in/ethsakshi" title="Sakshi Agrahari (Pippo) Official LinkedIn (@ethsakshi)" />
        <link rel="me" href="https://github.com/portgasdyamato" title="Sakshi Agrahari (Pippo) Official GitHub (@portgasdyamato)" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400;1,700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Bitcount+Grid+Double:wght@100..900&family=Outfit:wght@100..900&family=Inter:wght@100..900&family=Syne:wght@400..800&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Bungee&family=Silkscreen&family=Share+Tech+Mono&family=VT323&family=JetBrains+Mono:wght@100..800&family=Press+Start+2P&family=Major+Mono+Display&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/super-pixel-font.css" />
      </head>
      <body className="antialiased bg-[#FFF5F5]">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
