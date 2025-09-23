'use client'

import Container from '@/components/ui/Container'
import { COMPANY_INFO } from '@/lib/constants'

export default function TermsOfServiceContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 flex items-center justify-center overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-white/5 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        
        <Container className="relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-8 shadow-2xl">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              شروط الخدمة
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto leading-relaxed mb-8">
              اطلع على شروط وأحكام استخدام خدمات فالكون برو ديجيتال. هذه الشروط تحكم علاقتنا التعاقدية معك.
            </p>
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-indigo-100">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              آخر تحديث: ديسمبر 2024
            </div>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20">
        <Container>
          <div className="max-w-4xl mx-auto">

          {/* Content */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-12">
            
            {/* Section 1: التعريفات */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-4">1</span>
                التعريفات والمصطلحات
              </h2>
              <div className="bg-indigo-50 rounded-2xl p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl p-4">
                      <h3 className="font-bold text-indigo-800 mb-2">الشركة</h3>
                      <p className="text-gray-700 text-sm">
                        فالكون برو ديجيتال، فرع من شركة Aptiro LLC الأمريكية
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-4">
                      <h3 className="font-bold text-indigo-800 mb-2">العميل</h3>
                      <p className="text-gray-700 text-sm">
                        أي شخص أو كيان يطلب خدماتنا أو يتعاقد معنا
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl p-4">
                      <h3 className="font-bold text-indigo-800 mb-2">الخدمات</h3>
                      <p className="text-gray-700 text-sm">
                        جميع الخدمات الرقمية والتسويقية المقدمة من الشركة
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-4">
                      <h3 className="font-bold text-indigo-800 mb-2">الاتفاقية</h3>
                      <p className="text-gray-700 text-sm">
                        هذه الشروط والأحكام مع أي اتفاقيات إضافية
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: نطاق الخدمات */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-4">2</span>
                نطاق الخدمات
              </h2>
              
              <div className="bg-blue-50 rounded-2xl p-6">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  تقدم فالكون برو ديجيتال مجموعة شاملة من الخدمات الرقمية في دول الخليج العربي:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-4">
                    <h3 className="font-bold text-blue-800 mb-3">🎯 الخدمات التسويقية</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• إعلانات Google Ads</li>
                      <li>• إعلانات التجارة الإلكترونية</li>
                      <li>• إعلانات وسائل التواصل الاجتماعي</li>
                      <li>• إدارة وسائل التواصل الاجتماعي</li>
                      <li>• تحسين محركات البحث (SEO)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4">
                    <h3 className="font-bold text-blue-800 mb-3">💻 الخدمات التقنية</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• تصميم وتطوير المواقع</li>
                      <li>• برمجيات سطح المكتب المخصصة</li>
                      <li>• حلول الذكاء الاصطناعي</li>
                      <li>• روبوتات المحادثة الذكية</li>
                      <li>• التسجيل في خرائط Google</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: التزامات العميل */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-green-600 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-4">3</span>
                التزامات العميل
              </h2>
              
              <div className="bg-green-50 rounded-2xl p-6">
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6">
                    <h3 className="text-lg font-bold text-green-800 mb-4">📋 المعلومات والتعاون</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        تقديم جميع المعلومات والمواد المطلوبة للمشروع
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        التعاون والاستجابة في الوقت المناسب
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        ضمان دقة وصحة المعلومات المقدمة
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        احترام المواعيد النهائية المتفق عليها
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6">
                    <h3 className="text-lg font-bold text-green-800 mb-4">💰 الدفع والمالية</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        دفع الرسوم المتفق عليها في المواعيد المحددة
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        تحمل رسوم التحويلات البنكية إن وجدت
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        إشعارنا بأي مشاكل في الدفع فوراً
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: التزامات الشركة */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-4">4</span>
                التزامات الشركة
              </h2>
              
              <div className="bg-purple-50 rounded-2xl p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6">
                    <h3 className="text-lg font-bold text-purple-800 mb-4">🎯 جودة الخدمة</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        تقديم خدمات عالية الجودة
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        الالتزام بالمواعيد المتفق عليها
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        استخدام أحدث التقنيات والأدوات
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        توفير الدعم الفني المطلوب
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6">
                    <h3 className="text-lg font-bold text-purple-800 mb-4">🔒 السرية والأمان</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        حماية معلومات العميل
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        عدم إفشاء البيانات السرية
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        تطبيق معايير الأمان العالية
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        الامتثال لقوانين الخصوصية
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: الأسعار والدفع */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-orange-600 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-4">5</span>
                الأسعار وشروط الدفع
              </h2>
              
              <div className="bg-orange-50 rounded-2xl p-6">
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6">
                    <h3 className="text-lg font-bold text-orange-800 mb-4">💵 سياسة التسعير</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        جميع الأسعار بالدولار الأمريكي (USD)
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        الأسعار قابلة للتغيير مع إشعار مسبق 30 يوماً
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        الأسعار لا تشمل الضرائب المحلية إن وجدت
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        عروض خاصة لها شروط منفصلة
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6">
                    <h3 className="text-lg font-bold text-orange-800 mb-4">📅 شروط الدفع</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium text-gray-800">المشاريع الصغيرة (&lt; $1000)</h4>
                        <p className="text-sm text-gray-600">دفع كامل مقدماً</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium text-gray-800">المشاريع المتوسطة ($1000-$5000)</h4>
                        <p className="text-sm text-gray-600">50% مقدم، 50% عند التسليم</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium text-gray-800">المشاريع الكبيرة (&gt; $5000)</h4>
                        <p className="text-sm text-gray-600">30% مقدم، 40% منتصف المشروع، 30% عند التسليم</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium text-gray-800">الخدمات الشهرية</h4>
                        <p className="text-sm text-gray-600">دفع شهري مقدم</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: حقوق الملكية الفكرية */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-red-600 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-4">6</span>
                حقوق الملكية الفكرية
              </h2>
              
              <div className="bg-red-50 rounded-2xl p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6">
                    <h3 className="text-lg font-bold text-red-800 mb-4">🏢 ملكية الشركة</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        الأدوات والتقنيات المطورة داخلياً
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        المنهجيات والعمليات الخاصة
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        القوالب والتصميمات العامة
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        المعرفة التقنية والخبرات
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6">
                    <h3 className="text-lg font-bold text-green-800 mb-4">👤 ملكية العميل</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        المحتوى والمواد المقدمة
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        العلامات التجارية والشعارات
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        البيانات والمعلومات الخاصة
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        المنتج النهائي بعد الدفع الكامل
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: المسؤولية والضمانات */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-yellow-600 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-4">7</span>
                المسؤولية والضمانات
              </h2>
              
              <div className="bg-yellow-50 rounded-2xl p-6">
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6">
                    <h3 className="text-lg font-bold text-yellow-800 mb-4">✅ ضماناتنا</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-yellow-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        ضمان جودة الخدمة وفقاً للمعايير المتفق عليها
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-yellow-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        ضمان الدعم الفني لمدة 30 يوماً بعد التسليم
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-yellow-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        ضمان سرية المعلومات والبيانات
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-yellow-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        ضمان الامتثال للقوانين المحلية
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6">
                    <h3 className="text-lg font-bold text-red-800 mb-4">⚠️ حدود المسؤولية</h3>
                    <ul className="space-y-3 text-gray-700 text-sm">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        لا نتحمل مسؤولية الخسائر غير المباشرة أو التبعية
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        مسؤوليتنا محدودة بقيمة الخدمة المدفوعة
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        لا نضمن نتائج محددة للحملات الإعلانية
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        العوامل الخارجة عن سيطرتنا (تغييرات المنصات، القوانين)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: إنهاء الخدمة */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-gray-600 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-4">8</span>
                إنهاء الخدمة
              </h2>
              
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">📋 إنهاء من جانب العميل</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        إشعار مسبق 30 يوماً للخدمات الشهرية
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        دفع المستحقات حتى تاريخ الإنهاء
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        تسليم العمل المنجز حتى التاريخ
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        لا استرداد للمبالغ المدفوعة مقدماً
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">🏢 إنهاء من جانب الشركة</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        عدم دفع المستحقات لأكثر من 15 يوماً
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        انتهاك شروط الخدمة
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        عدم التعاون أو تقديم المعلومات المطلوبة
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        أنشطة غير قانونية أو مخالفة للآداب
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 9: القانون المعمول به */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-4">9</span>
                القانون المعمول به وحل النزاعات
              </h2>
              
              <div className="bg-indigo-50 rounded-2xl p-6">
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6">
                    <h3 className="text-lg font-bold text-indigo-800 mb-4">⚖️ الاختصاص القانوني</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      تخضع هذه الاتفاقية لقوانين دولة الإمارات العربية المتحدة والقوانين الفيدرالية الأمريكية حسب طبيعة النزاع.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                        النزاعات التجارية: محاكم دبي
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                        النزاعات التقنية: التحكيم الدولي
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6">
                    <h3 className="text-lg font-bold text-indigo-800 mb-4">🤝 حل النزاعات</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">1</div>
                        <div>
                          <h4 className="font-medium text-gray-800">التفاوض المباشر</h4>
                          <p className="text-sm text-gray-600">محاولة حل النزاع ودياً خلال 30 يوماً</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">2</div>
                        <div>
                          <h4 className="font-medium text-gray-800">الوساطة</h4>
                          <p className="text-sm text-gray-600">وساطة طرف ثالث محايد</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">3</div>
                        <div>
                          <h4 className="font-medium text-gray-800">التحكيم أو المحكمة</h4>
                          <p className="text-sm text-gray-600">الحل النهائي حسب طبيعة النزاع</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">هل لديك استفسار حول شروط الخدمة؟</h2>
              <p className="text-indigo-100 mb-6">
                فريق خدمة العملاء جاهز للإجابة على جميع استفساراتك القانونية والتعاقدية
              </p>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('مرحباً، لدي استفسار حول شروط الخدمة')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 font-bold text-lg rounded-2xl hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.382"/>
                </svg>
                تواصل معنا عبر WhatsApp
              </a>
            </section>
          </div>
        </div>
      </Container>
    </main>
    </>
  )
}
