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
    'Pippo',
    'AI Product Designer',
    'Design Engineer',
    'Product Designer AI',
    'Frontend Engineer',
    'UI/UX Designer',
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
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
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
  icons: {
    icon: '/hehe.gif',
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
