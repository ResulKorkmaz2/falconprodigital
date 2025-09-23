import type { Metadata } from 'next'
import { Suspense } from 'react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/layout/WhatsAppFloat'
import TermsOfServiceContent from './TermsOfServiceContent'

export const metadata: Metadata = {
  title: 'شروط الخدمة - Terms of Service | فالكون برو ديجيتال',
  description: 'شروط وأحكام استخدام خدمات فالكون برو ديجيتال. اطلع على القواعد والشروط الخاصة بخدماتنا الرقمية في دول الخليج.',
  keywords: [
    'شروط الخدمة',
    'Terms of Service',
    'شروط الاستخدام',
    'Terms of Use',
    'أحكام وشروط',
    'Terms and Conditions',
    'اتفاقية الخدمة',
    'Service Agreement',
    'فالكون برو ديجيتال',
    'Falcon Pro Digital',
    'قواعد الاستخدام',
    'Usage Rules',
    'الشروط القانونية',
    'Legal Terms',
    'اتفاقية العميل',
    'Client Agreement',
    'السعودية',
    'الإمارات',
    'قطر',
    'الكويت',
    'الخليج'
  ],
  openGraph: {
    title: 'شروط الخدمة - Terms of Service | فالكون برو ديجيتال',
    description: 'شروط وأحكام استخدام خدمات فالكون برو ديجيتال. اطلع على القواعد والشروط الخاصة بخدماتنا الرقمية.',
    type: 'website',
    locale: 'ar_SA',
    siteName: 'فالكون برو ديجيتال',
    url: 'https://falconprodigital.com/terms-of-service',
  },
  twitter: {
    card: 'summary',
    title: 'شروط الخدمة - Terms of Service | فالكون برو ديجيتال',
    description: 'شروط وأحكام استخدام خدمات فالكون برو ديجيتال',
  },
  alternates: {
    canonical: 'https://falconprodigital.com/terms-of-service',
  },
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">جاري التحميل...</div>}>
        <TermsOfServiceContent />
      </Suspense>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

