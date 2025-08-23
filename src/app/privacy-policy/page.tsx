import type { Metadata } from 'next'
import { Suspense } from 'react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/layout/WhatsAppFloat'
import PrivacyPolicyContent from './PrivacyPolicyContent'

export const metadata: Metadata = {
  title: 'سياسة الخصوصية - Privacy Policy | فالكون برو ديجيتال',
  description: 'سياسة الخصوصية وحماية البيانات لشركة فالكون برو ديجيتال. نحن ملتزمون بحماية خصوصيتك وأمان معلوماتك الشخصية في جميع دول الخليج.',
  keywords: [
    'سياسة الخصوصية',
    'Privacy Policy',
    'حماية البيانات',
    'Data Protection',
    'الأمان',
    'Security',
    'معلومات شخصية',
    'Personal Information',
    'فالكون برو ديجيتال',
    'Falcon Pro Digital',
    'خصوصية',
    'Privacy',
    'أمان المعلومات',
    'Information Security',
    'حماية الخصوصية',
    'Privacy Protection',
    'قانون حماية البيانات',
    'Data Protection Law',
    'السعودية',
    'الإمارات',
    'قطر',
    'الكويت',
    'الخليج'
  ],
  openGraph: {
    title: 'سياسة الخصوصية - Privacy Policy | فالكون برو ديجيتال',
    description: 'سياسة الخصوصية وحماية البيانات لشركة فالكون برو ديجيتال. نحن ملتزمون بحماية خصوصيتك وأمان معلوماتك الشخصية.',
    type: 'website',
    locale: 'ar_SA',
    siteName: 'فالكون برو ديجيتال',
    url: 'https://falconprodigital.com/privacy-policy',
  },
  twitter: {
    card: 'summary',
    title: 'سياسة الخصوصية - Privacy Policy | فالكون برو ديجيتال',
    description: 'سياسة الخصوصية وحماية البيانات لشركة فالكون برو ديجيتال',
  },
  alternates: {
    canonical: 'https://falconprodigital.com/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">جاري التحميل...</div>}>
        <PrivacyPolicyContent />
      </Suspense>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
