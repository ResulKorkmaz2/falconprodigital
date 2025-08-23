import type { Metadata } from 'next'
import { Suspense } from 'react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/layout/WhatsAppFloat'
import CookiePolicyContent from './CookiePolicyContent'

export const metadata: Metadata = {
  title: 'سياسة ملفات الارتباط - Cookie Policy | فالكون برو ديجيتال',
  description: 'سياسة ملفات الارتباط (الكوكيز) لشركة فالكون برو ديجيتال. تعرف على كيفية استخدامنا لملفات الارتباط لتحسين تجربتك على موقعنا الإلكتروني.',
  keywords: [
    'سياسة الكوكيز',
    'Cookie Policy',
    'ملفات الارتباط',
    'Cookies',
    'الكوكيز',
    'تتبع المواقع',
    'Website Tracking',
    'تحليلات الموقع',
    'Website Analytics',
    'تجربة المستخدم',
    'User Experience',
    'فالكون برو ديجيتال',
    'Falcon Pro Digital',
    'سياسة ملفات الارتباط',
    'إعدادات الكوكيز',
    'Cookie Settings',
    'الأمان',
    'Security',
    'خصوصية المتصفح',
    'Browser Privacy',
    'تخزين البيانات',
    'Data Storage',
    'السعودية',
    'الإمارات',
    'قطر',
    'الكويت',
    'الخليج'
  ],
  openGraph: {
    title: 'سياسة ملفات الارتباط - Cookie Policy | فالكون برو ديجيتال',
    description: 'سياسة ملفات الارتباط (الكوكيز) لشركة فالكون برو ديجيتال. تعرف على كيفية استخدامنا لملفات الارتباط.',
    type: 'website',
    locale: 'ar_SA',
    siteName: 'فالكون برو ديجيتال',
    url: 'https://falconprodigital.com/cookie-policy',
  },
  twitter: {
    card: 'summary',
    title: 'سياسة ملفات الارتباط - Cookie Policy | فالكون برو ديجيتال',
    description: 'سياسة ملفات الارتباط (الكوكيز) لشركة فالكون برو ديجيتال',
  },
  alternates: {
    canonical: 'https://falconprodigital.com/cookie-policy',
  },
}

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">جاري التحميل...</div>}>
        <CookiePolicyContent />
      </Suspense>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
