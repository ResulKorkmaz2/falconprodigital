import type { Metadata } from 'next'
import { Suspense } from 'react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/layout/WhatsAppFloat'
import RefundPolicyContent from './RefundPolicyContent'

export const metadata: Metadata = {
  title: 'سياسة الإرجاع والاسترداد - Refund Policy | فالكون برو ديجيتال',
  description: 'سياسة الإرجاع والاسترداد لخدمات فالكون برو ديجيتال. تعرف على شروط وأحكام الاسترداد للخدمات الرقمية في دول الخليج.',
  keywords: [
    'سياسة الإرجاع',
    'Refund Policy',
    'سياسة الاسترداد',
    'Return Policy',
    'استرداد الأموال',
    'Money Back',
    'إرجاع الخدمات',
    'Service Return',
    'فالكون برو ديجيتال',
    'Falcon Pro Digital',
    'ضمان الاسترداد',
    'Refund Guarantee',
    'شروط الإرجاع',
    'Return Terms',
    'استرداد الدفع',
    'Payment Refund',
    'السعودية',
    'الإمارات',
    'قطر',
    'الكويت',
    'الخليج'
  ],
  openGraph: {
    title: 'سياسة الإرجاع والاسترداد - Refund Policy | فالكون برو ديجيتال',
    description: 'سياسة الإرجاع والاسترداد لخدمات فالكون برو ديجيتال. تعرف على شروط وأحكام الاسترداد للخدمات الرقمية.',
    type: 'website',
    locale: 'ar_SA',
    siteName: 'فالكون برو ديجيتال',
    url: 'https://falconprodigital.com/refund-policy',
  },
  twitter: {
    card: 'summary',
    title: 'سياسة الإرجاع والاسترداد - Refund Policy | فالكون برو ديجيتال',
    description: 'سياسة الإرجاع والاسترداد لخدمات فالكون برو ديجيتال',
  },
  alternates: {
    canonical: 'https://falconprodigital.com/refund-policy',
  },
}

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">جاري التحميل...</div>}>
        <RefundPolicyContent />
      </Suspense>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

