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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NBS4X76X');`
          }}
        />
        {/* End Google Tag Manager */}
        
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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-NBS4X76X"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
        {children}
      </body>
    </html>
  )
}
