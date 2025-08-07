'use client'

import { useState } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import { 
  BarChart3, Search, TrendingUp, Target, CheckCircle, 
  ArrowRight, Zap, Eye, Users, Clock, Award,
  Shield, Lightbulb, Rocket, Star, Activity, Globe
} from 'lucide-react'

export default function SEOAnalyticsPage() {
  const [language, setLanguage] = useState('ar')

  return (
    <main className="min-h-screen">
      <Nav />
      <div className="bg-gradient-to-br from-slate-50 to-white" dir="rtl">
      {/* Hero Section */}
      <section className="pt-16 md:pt-24 pb-16 bg-gradient-to-br from-purple-500 via-primary-600 to-accent-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-right">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <BarChart3 size={20} className="ml-2" />
                <span className="font-arabic font-bold">تحسين محركات البحث والتحليلات</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight font-arabic">
                <span className="block">اظهر في</span>
                <span className="block text-yellow-300">النتائج الأولى</span>
                <span className="block">لجوجل والعملاء يجدونك</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-purple-100 leading-relaxed font-arabic">
                خدمات تحسين محركات البحث (SEO) وتحليلات مفصلة متخصصة للسوق الخليجي والمحتوى العربي. 
                نضعك في المقدمة ونتتبع كل زائر ونحول البيانات إلى قرارات ذكية تزيد أرباحك.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:flex-row-reverse">
                <Link
                  href="https://wa.me/46724003075?text=أريد تحسين ترتيب موقعي في جوجل والحصول على المزيد من العملاء"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl font-arabic"
                >
                  <Search size={22} className="mr-3 group-hover:animate-pulse" />
                  <span>تحسين مجاني - ابدأ الآن</span>
                </Link>
                
                <Link
                  href="#audit"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl transition-all duration-300 font-arabic"
                >
                  <Activity size={22} className="mr-3" />
                  <span>تدقيق SEO مجاني</span>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold font-arabic text-center mb-6">نتائج SEO حقيقية</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white/10 rounded-xl">
                      <div className="text-3xl font-black text-green-300 mb-2">+485%</div>
                      <div className="text-sm font-arabic">زيادة الزيارات</div>
                    </div>
                    <div className="text-center p-4 bg-white/10 rounded-xl">
                      <div className="text-3xl font-black text-yellow-300 mb-2">#1</div>
                      <div className="text-sm font-arabic">ترتيب جوجل</div>
                    </div>
                    <div className="text-center p-4 bg-white/10 rounded-xl">
                      <div className="text-3xl font-black text-blue-300 mb-2">250+</div>
                      <div className="text-sm font-arabic">كلمة مفتاحية</div>
                    </div>
                    <div className="text-center p-4 bg-white/10 rounded-xl">
                      <div className="text-3xl font-black text-red-300 mb-2">90د</div>
                      <div className="text-sm font-arabic">متوسط الجلسة</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gray-50 border-y">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-black text-purple-500">40+</div>
              <div className="text-gray-600 font-arabic">موقع محسن</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-black text-purple-500">92%</div>
              <div className="text-gray-600 font-arabic">تحسن في الترتيب</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-black text-purple-500">6</div>
              <div className="text-gray-600 font-arabic">شهور متوسط النتائج</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-black text-purple-500">24/7</div>
              <div className="text-gray-600 font-arabic">مراقبة الأداء</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our SEO & Analytics Services */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 font-arabic">
              خدمات SEO والتحليلات الشاملة
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-arabic">
              نقدم حلول تحسين محركات البحث وتحليل البيانات لتحقيق أقصى ظهور ونمو مستدام لموقعك
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "تحسين محركات البحث التقني",
                description: "تدقيق شامل وتحسين تقني لموقعك ليكون متوافق تماماً مع خوارزميات جوجل",
                features: ["تدقيق SEO شامل", "تحسين سرعة الموقع", "إصلاح الأخطاء التقنية"]
              },
              {
                icon: Target,
                title: "بحث الكلمات المفتاحية",
                description: "بحث متقدم عن الكلمات المفتاحية المناسبة للسوق الخليجي والمحتوى العربي",
                features: ["كلمات عربية وإنجليزية", "تحليل المنافسين", "كلمات طويلة عالية التحويل"]
              },
              {
                icon: Globe,
                title: "SEO المحلي للخليج",
                description: "تحسين خاص للظهور في النتائج المحلية للسعودية والكويت وقطر",
                features: ["Google My Business", "خرائط جوجل", "مراجعات العملاء"]
              },
              {
                icon: BarChart3,
                title: "Google Analytics المتقدم",
                description: "إعداد وتكوين تحليلات جوجل لتتبع كل تفاعل وقياس الأداء بدقة",
                features: ["تتبع التحويلات", "تحليل سلوك المستخدمين", "تقارير مخصصة"]
              },
              {
                icon: TrendingUp,
                title: "تحليل الأداء والتقارير",
                description: "تقارير مفصلة شهرية مع تحليل عميق للبيانات وتوصيات التحسين",
                features: ["تقارير شهرية مفصلة", "مؤشرات KPI", "توصيات التحسين"]
              },
              {
                icon: Eye,
                title: "مراقبة المنافسين",
                description: "تتبع ومراقبة استراتيجيات منافسيك للبقاء دائماً في المقدمة",
                features: ["تحليل منافسين", "مراقبة الكلمات المفتاحية", "تحليل backlinks"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-accent-400 rounded-2xl mb-6 mx-auto">
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center font-arabic">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 font-arabic text-center leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600 font-arabic">
                      <CheckCircle size={16} className="text-purple-500 ml-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Process */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 font-arabic">
              مراحل تحسين موقعك لمحركات البحث
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-arabic">
              عملية مدروسة ومجربة لتحقيق أفضل نتائج SEO لموقعك
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "التدقيق والتحليل",
                description: "تحليل شامل للوضع الحالي لموقعك وتحديد نقاط التحسين",
                icon: Search
              },
              {
                step: "02", 
                title: "البحث والاستراتيجية",
                description: "بحث الكلمات المفتاحية ووضع استراتيجية SEO مخصصة",
                icon: Target
              },
              {
                step: "03",
                title: "التحسين والتطبيق",
                description: "تطبيق التحسينات التقنية وتحسين المحتوى",
                icon: Rocket
              },
              {
                step: "04",
                title: "المتابعة والتطوير",
                description: "مراقبة النتائج والتحسين المستمر للأداء",
                icon: TrendingUp
              }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-accent-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <process.icon size={32} className="text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-arabic">
                  {process.title}
                </h3>
                <p className="text-gray-600 font-arabic">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SEO Matters */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 font-arabic">
              لماذا تحتاج SEO لنجاح عملك؟
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-arabic">
              أهمية تحسين محركات البحث في العصر الرقمي
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {[
                {
                  stat: "93%",
                  title: "من التجارب تبدأ بالبحث",
                  description: "93% من جميع التجارب الرقمية تبدأ بمحرك البحث - إذا لم تظهر في النتائج، فأنت غير موجود"
                },
                {
                  stat: "75%", 
                  title: "لا يتجاوزون الصفحة الأولى",
                  description: "75% من الناس لا يتجاوزون الصفحة الأولى في نتائج البحث - كن في المقدمة أو ستفقد عملاءك"
                },
                {
                  stat: "14.6%",
                  title: "معدل إغلاق SEO",
                  description: "العملاء القادمين من البحث العضوي لديهم معدل إغلاق 14.6% مقارنة بـ 1.7% للإعلانات التقليدية"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 space-x-reverse">
                  <div className="text-right">
                    <div className="text-4xl font-black text-purple-500 mb-2">{item.stat}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-arabic">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 font-arabic leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500 to-accent-400 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6 font-arabic text-center">
                  تدقيق SEO مجاني لموقعك
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <CheckCircle size={20} className="text-yellow-300" />
                    <span className="font-arabic">تحليل شامل للأخطاء التقنية</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <CheckCircle size={20} className="text-yellow-300" />
                    <span className="font-arabic">تقييم المحتوى والكلمات المفتاحية</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <CheckCircle size={20} className="text-yellow-300" />
                    <span className="font-arabic">مقارنة مع المنافسين</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <CheckCircle size={20} className="text-yellow-300" />
                    <span className="font-arabic">خطة عمل مفصلة للتحسين</span>
                  </div>
                </div>
                <Link
                  href="https://wa.me/46724003075?text=أريد تدقيق SEO مجاني لموقعي لتحسين ترتيبه في جوجل"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center font-arabic"
                >
                  <span>احصل على التدقيق المجاني</span>
                  <ArrowRight size={20} className="mr-2 rotate-180 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Dashboard Preview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white" id="audit">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 font-arabic">
              تقارير وتحليلات مفصلة
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-arabic">
              احصل على تقارير شاملة تساعدك في اتخاذ قرارات تسويقية ذكية
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white text-center">
                <div className="text-3xl font-black mb-2">+485%</div>
                <div className="font-arabic">نمو الزيارات العضوية</div>
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white text-center">
                <div className="text-3xl font-black mb-2">2:45</div>
                <div className="font-arabic">متوسط الوقت في الموقع</div>
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-6 text-white text-center">
                <div className="text-3xl font-black mb-2">12.5%</div>
                <div className="font-arabic">معدل التحويل</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-arabic">تتبع الكلمات المفتاحية</h3>
                <div className="space-y-3">
                  {[
                    { keyword: "تصميم مواقع الرياض", position: 1, change: "+12" },
                    { keyword: "شركة تسويق الكويت", position: 3, change: "+5" },
                    { keyword: "إعلانات جوجل قطر", position: 2, change: "+8" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div className="text-right">
                        <div className="font-bold text-gray-900 font-arabic">{item.keyword}</div>
                        <div className="text-sm text-gray-600">الترتيب #{item.position}</div>
                      </div>
                      <div className="text-green-500 font-bold">{item.change}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-arabic">أداء الصفحات</h3>
                <div className="space-y-3">
                  {[
                    { page: "الصفحة الرئيسية", views: "2,847", rate: "45%" },
                    { page: "خدمات التسويق", views: "1,923", rate: "38%" },
                    { page: "تصميم المواقع", views: "1,456", rate: "29%" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div className="text-right">
                        <div className="font-bold text-gray-900 font-arabic">{item.page}</div>
                        <div className="text-sm text-gray-600">{item.views} زيارة</div>
                      </div>
                      <div className="text-blue-500 font-bold">{item.rate}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-accent-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6 font-arabic">
            هل أنت مستعد للظهور في النتائج الأولى؟
          </h2>
          <p className="text-xl mb-8 font-arabic max-w-2xl mx-auto">
            انضم إلى أكثر من 40 شركة ناجحة اختارت فالكون برو ديجيتال لتحسين ترتيب مواقعها في جوجل
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:flex-row-reverse">
            <Link
              href="https://wa.me/46724003075?text=أريد تحسين ترتيب موقعي في جوجل والحصول على المزيد من العملاء"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl font-arabic"
            >
              <Search size={22} className="mr-3 group-hover:animate-pulse" />
              <span>ابدأ التحسين الآن</span>
            </Link>
            
            <Link
              href="/"
              className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl transition-all duration-300 font-arabic"
            >
              <span>العودة للرئيسية</span>
              <ArrowRight size={20} className="mr-2 rotate-180 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
      </div>
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
