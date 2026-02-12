import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://falconprodigital.com"),
  title: {
    default: "فالكون برو ديجيتال | خبراء إعلانات جوجل في الخليج العربي",
    template: "%s | فالكون برو ديجيتال",
  },
  description:
    "الشريك الموثوق لإعلانات جوجل في السعودية، قطر، الكويت والبحرين. نقدم حملات إعلانية مستهدفة عبر شبكة البحث، يوتيوب، والأداء الأقصى لتحقيق أعلى عائد استثمار.",
  keywords: [
    "إعلانات جوجل السعودية",
    "إعلانات جوجل قطر",
    "إعلانات جوجل الكويت",
    "إعلانات جوجل البحرين",
    "Google Ads السعودية",
    "Google Ads قطر",
    "Google Ads الكويت",
    "Google Ads البحرين",
    "شركة إعلانات جوجل",
    "وكالة تسويق رقمي الخليج",
    "حملات إعلانية جوجل",
    "إعلانات يوتيوب الخليج",
    "تسويق رقمي السعودية",
    "إعلانات الأداء الأقصى",
    "تحليل الكلمات المفتاحية",
    "إعلانات شبكة البحث",
    "إعلانات شبكة جوجل الإعلانية",
    "وكالة جوجل أدز",
    "خبير إعلانات جوجل",
    "تسويق إلكتروني الخليج",
  ],
  authors: [{ name: "Falcon Pro Digital - Aptiro LLC" }],
  creator: "Falcon Pro Digital - Aptiro LLC",
  publisher: "Aptiro LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://falconprodigital.com",
    siteName: "فالكون برو ديجيتال",
    title: "فالكون برو ديجيتال | خبراء إعلانات جوجل في الخليج العربي",
    description:
      "الشريك الموثوق لإعلانات جوجل في السعودية، قطر، الكويت والبحرين. حملات إعلانية احترافية لتحقيق أعلى عائد استثمار.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "فالكون برو ديجيتال - خبراء إعلانات جوجل",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "فالكون برو ديجيتال | خبراء إعلانات جوجل في الخليج",
    description:
      "الشريك الموثوق لإعلانات جوجل في السعودية، قطر، الكويت والبحرين",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://falconprodigital.com",
    languages: {
      "ar-SA": "https://falconprodigital.com",
    },
  },
  category: "Digital Marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0c1929" />
        <meta name="msapplication-TileColor" content="#0c1929" />
        <meta name="geo.region" content="SA;QA;KW;BH" />
        <meta name="geo.placename" content="Gulf Region" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Falcon Pro Digital",
              alternateName: "فالكون برو ديجيتال",
              url: "https://falconprodigital.com",
              logo: "https://falconprodigital.com/logo.png",
              parentOrganization: {
                "@type": "Organization",
                name: "Aptiro LLC",
              },
              description:
                "الشريك الموثوق لإعلانات جوجل في الخليج العربي - السعودية، قطر، الكويت، البحرين",
              areaServed: [
                { "@type": "Country", name: "Saudi Arabia" },
                { "@type": "Country", name: "Qatar" },
                { "@type": "Country", name: "Kuwait" },
                { "@type": "Country", name: "Bahrain" },
              ],
              serviceType: [
                "Google Search Ads",
                "Performance Max Campaigns",
                "Google Display Network",
                "YouTube Advertising",
                "Keyword Analysis",
                "Web Development",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: ["Arabic", "English"],
              },
              sameAs: ["https://wa.me/16288006818"],
            }),
          }}
        />
        {/* Structured Data for LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "فالكون برو ديجيتال",
              image: "https://falconprodigital.com/logo.png",
              description:
                "وكالة متخصصة في إعلانات جوجل وحملات التسويق الرقمي في دول الخليج العربي",
              priceRange: "$$",
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 25.2048,
                  longitude: 51.203,
                },
                geoRadius: "2000 km",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "خدمات إعلانات جوجل",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "إعلانات شبكة البحث",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "إعلانات الأداء الأقصى",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "إعلانات يوتيوب",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={cairo.className}>{children}</body>
    </html>
  );
}
