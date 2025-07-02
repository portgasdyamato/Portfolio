import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pippo Portfolio',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bitcount+Grid+Double:wght@100..900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/super-pixel-font.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}
