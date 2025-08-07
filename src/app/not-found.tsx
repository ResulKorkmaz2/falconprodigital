import Link from 'next/link'
import { FileX, Home, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center justify-center px-4" dir="rtl">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="mx-auto w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-6">
            <FileX className="w-12 h-12 text-blue-500" />
          </div>
          
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-4 font-arabic">
            الصفحة غير موجودة
          </h2>
          
          <p className="text-gray-600 mb-8 font-arabic leading-relaxed">
            عذراً، لا يمكننا العثور على الصفحة التي تبحث عنها. ربما تم نقلها أو حذفها.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 font-arabic"
          >
            <Home className="w-5 h-5" />
            العودة للرئيسية
          </Link>
          
          <Link
            href="/#services"
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 font-arabic"
          >
            <Search className="w-5 h-5" />
            استعراض خدماتنا
          </Link>
        </div>
        
        <div className="mt-8 text-sm text-gray-500 font-arabic">
          <p>
            تحتاج مساعدة؟ تواصل معنا عبر
            <Link 
              href="https://wa.me/46724003075?text=مرحباً! لا أجد الصفحة التي أبحث عنها"
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
  )
}
