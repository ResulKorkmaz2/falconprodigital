import type { Metadata } from 'next'
import { Suspense } from 'react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/layout/WhatsAppFloat'
import PricingContent from './PricingContent'

export const metadata: Metadata = {
  title: 'أسعارنا - Pricing | فالكون برو ديجيتال',
  description: 'اطلع على أسعار خدمات فالكون برو ديجيتال. باقات شفافة بدون رسوم خفية لتصميم المواقع، الإعلانات، الذكاء الاصطناعي والمزيد في دول الخليج.',
  keywords: [
    'أسعار الخدمات',
    'Service Pricing',
    'باقات الأسعار',
    'Pricing Packages',
    'تصميم المواقع أسعار',
    'Website Design Pricing',
    'إعلانات جوجل أسعار',
    'Google Ads Pricing',
    'ذكاء اصطناعي أسعار',
    'AI Pricing',
    'فالكون برو ديجيتال',
    'Falcon Pro Digital',
    'أسعار شفافة',
    'Transparent Pricing',
    'باقات الخدمات',
    'Service Packages',
    'السعودية',
    'الإمارات',
    'قطر',
    'الكويت',
    'الخليج'
  ],
  openGraph: {
    title: 'أسعارنا - Pricing | فالكون برو ديجيتال',
    description: 'اطلع على أسعار خدمات فالكون برو ديجيتال. باقات شفافة بدون رسوم خفية لجميع الخدمات الرقمية.',
    type: 'website',
    locale: 'ar_SA',
    siteName: 'فالكون برو ديجيتال',
    url: 'https://falconprodigital.com/pricing',
  },
  twitter: {
    card: 'summary',
    title: 'أسعارنا - Pricing | فالكون برو ديجيتال',
    description: 'اطلع على أسعار خدمات فالكون برو ديجيتال',
  },
  alternates: {
    canonical: 'https://falconprodigital.com/pricing',
  },
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">جاري التحميل...</div>}>
        <PricingContent />
      </Suspense>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
