import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Falcon Pro Digital - ROI-Driven Google Ads & Web Design for GCC',
  description: 'Professional Google Ads management and conversion-focused web design services for businesses in Saudi Arabia, Kuwait, and Qatar. Maximize your ROI with our proven strategies.',
  keywords: 'google ads agency riyadh, digital marketing kuwait, web design qatar, تصميم مواقع, إعلانات جوجل',
  authors: [{ name: 'Falcon Pro Digital' }],
  openGraph: {
    title: 'Falcon Pro Digital - ROI-Driven Google Ads & Web Design',
    description: 'Professional digital marketing services for GCC businesses',
    url: 'https://falconprodigital.com',
    siteName: 'Falcon Pro Digital',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Falcon Pro Digital - ROI-Driven Google Ads & Web Design',
    description: 'Professional digital marketing services for GCC businesses',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" className={`${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
