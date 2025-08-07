'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Global application error:', error)
  }, [error])

  return (
    <html lang="ar" dir="rtl">
      <body>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center justify-center px-4" dir="rtl">
          <div className="max-w-md w-full text-center">
            <div className="mb-8">
              <div className="mx-auto w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <AlertTriangle className="w-12 h-12 text-red-500" />
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4 font-arabic">
                عذراً! حدث خطأ جذري
              </h1>
              
              <p className="text-gray-600 mb-8 font-arabic leading-relaxed">
                حدث خطأ خطير في النظام. يرجى إعادة تحميل الصفحة أو المحاولة لاحقاً.
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={reset}
                className="w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 font-arabic"
              >
                <RefreshCw className="w-5 h-5" />
                إعادة المحاولة
              </button>
              
              <Link
                href="/"
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 font-arabic"
              >
                <Home className="w-5 h-5" />
                العودة للرئيسية
              </Link>
            </div>
            
            <div className="mt-8 text-sm text-gray-500 font-arabic">
              <p>
                مشكلة عاجلة؟ تواصل معنا فوراً عبر
                <Link 
                  href="https://wa.me/46724003075?text=عذراً! يوجد خطأ خطير في الموقع"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-500 hover:text-primary-600 mr-1"
                >
                  واتساب
                </Link>
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
