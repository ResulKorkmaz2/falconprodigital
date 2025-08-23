import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Falcon Pro Digital - أكبر شركة إعلانات وتكنولوجيا معلومات وذكاء اصطناعي دولية في الخليج',
  description: 'شركة Falcon Pro Digital تقدم خدمات التسويق الرقمي والذكاء الاصطناعي في السعودية وقطر والكويت والإمارات. فرع من شركة Aptiro LLC الأمريكية.',
  keywords: ['تسويق رقمي', 'ذكاء اصطناعي', 'إعلانات جوجل', 'تصميم مواقع', 'السعودية', 'قطر', 'الكويت', 'الإمارات'],
  authors: [{ name: 'Falcon Pro Digital' }],
  creator: 'Aptiro LLC',
  publisher: 'Falcon Pro Digital',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Falcon Pro Digital - أكبر شركة إعلانات وتكنولوجيا معلومات وذكاء اصطناعي دولية في الخليج',
    description: 'خدمات التسويق الرقمي والذكاء الاصطناعي المتقدمة في منطقة الخليج',
    url: 'https://falconprodigital.com',
    siteName: 'Falcon Pro Digital',
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Falcon Pro Digital - أكبر شركة إعلانات وتكنولوجيا معلومات وذكاء اصطناعي دولية في الخليج',
    description: 'خدمات التسويق الرقمي والذكاء الاصطناعي المتقدمة في منطقة الخليج',
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
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap" 
          rel="stylesheet" 
        />
        <meta name="geo.region" content="SA" />
        <meta name="geo.placename" content="Gulf Region" />
        <meta name="ICBM" content="24.7136,46.6753" />
      </head>
      <body className="font-arabic antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}
