import type { Metadata } from 'next'
import './globals.css'
import CustomCursor from '@/components/custom-cursor'
import PixelCharacter from '@/components/pixel-character'

export const metadata: Metadata = {
  title: 'Sakshi Agrahari | Portfolio',
  description: 'This is a portfolio website showcasing my work and skills.',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Bitcount+Grid+Double:wght@100..900&family=Outfit:wght@100..900&family=Inter:wght@100..900&family=Syne:wght@400..800&family=Bungee&family=Silkscreen&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/super-pixel-font.css" />
      </head>
      <body className="antialiased selection:bg-brand-500/30 selection:text-brand-900">
        <CustomCursor />
        {children}
        <PixelCharacter />
      </body>
    </html>
  )
}
