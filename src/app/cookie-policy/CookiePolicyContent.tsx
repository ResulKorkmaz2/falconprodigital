'use client'

import { useState } from 'react'
import Container from '@/components/ui/Container'
import { COMPANY_INFO } from '@/lib/constants'

export default function CookiePolicyContent() {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar')
  const currentDate = new Date().toLocaleDateString('ar-SA')

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 to-red-800 text-white py-20 md:py-32 overflow-hidden pt-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <Container className="relative z-10 text-center">
          <div className="flex items-center justify-center mb-4 text-white/90">
            <span className="text-3xl ml-3">🍪</span>
            <span className="text-lg font-medium">
              {language === 'ar' ? 'ملفات الارتباط والتتبع' : 'Cookies & Tracking'}
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
            {language === 'ar' ? 'سياسة ملفات الارتباط' : 'Cookie Policy'}
          </h1>

          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            {language === 'ar' 
              ? 'نستخدم ملفات الارتباط (الكوكيز) لتحسين تجربتك على موقعنا وتقديم خدمات مخصصة وفقاً لتفضيلاتك'
              : 'We use cookies to enhance your experience on our website and provide customized services according to your preferences'
            }
          </p>

          {/* Language Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <button
              onClick={() => setLanguage('ar')}
              className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                language === 'ar' 
                  ? 'bg-white text-orange-600 shadow-lg' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              العربية
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                language === 'en' 
                  ? 'bg-white text-orange-600 shadow-lg' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              English
            </button>
          </div>

          <div className="text-sm text-white/70">
            {language === 'ar' 
              ? `آخر تحديث: ${currentDate}`
              : `Last Updated: ${new Date().toLocaleDateString('en-US')}`
            }
          </div>
        </Container>
      </section>

      {/* Policy Content */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">

              {language === 'ar' ? (
                // Arabic Content
                <div className="space-y-8 text-right" dir="rtl">
                  <div>
                    <h2 className="text-3xl font-black text-gray-900 mb-6">1. ما هي ملفات الارتباط (الكوكيز)؟</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        ملفات الارتباط هي ملفات نصية صغيرة يتم تخزينها على جهازك عند زيارة موقعنا الإلكتروني. 
                        تساعد هذه الملفات في تحسين أداء الموقع وتقديم تجربة أفضل ومخصصة لك.
                      </p>
                      <p>
                        نستخدم ملفات الارتباط لفهم كيفية تفاعلك مع موقعنا وتحسين الخدمات التي نقدمها.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-black text-gray-900 mb-6">2. أنواع ملفات الارتباط التي نستخدمها</h2>
                    <div className="space-y-6">
                      
                      <div className="p-6 bg-green-50 rounded-2xl border-l-4 border-green-500">
                        <h3 className="text-xl font-bold text-green-800 mb-3">ملفات الارتباط الضرورية</h3>
                        <p className="text-green-700">
                          هذه الملفات ضرورية لعمل الموقع الأساسي. تشمل ملفات الجلسة وإعدادات الأمان. 
                          لا يمكن تعطيل هذه الملفات دون التأثير على وظائف الموقع.
                        </p>
                      </div>

                      <div className="p-6 bg-blue-50 rounded-2xl border-l-4 border-blue-500">
                        <h3 className="text-xl font-bold text-blue-800 mb-3">ملفات الارتباط التحليلية</h3>
                        <p className="text-blue-700">
                          تساعدنا في فهم كيفية استخدام الزوار لموقعنا من خلال جمع معلومات مجهولة عن الصفحات الأكثر زيارة 
                          ومدة البقاء في الموقع. نستخدم هذه البيانات لتحسين الموقع.
                        </p>
                      </div>

                      <div className="p-6 bg-purple-50 rounded-2xl border-l-4 border-purple-500">
                        <h3 className="text-xl font-bold text-purple-800 mb-3">ملفات الارتباط الوظيفية</h3>
                        <p className="text-purple-700">
                          تُمكن الموقع من تذكر الخيارات التي اتخذتها (مثل اسم المستخدم أو اللغة أو المنطقة) 
                          وتوفير ميزات محسنة وأكثر تخصيصاً.
                        </p>
                      </div>

                      <div className="p-6 bg-orange-50 rounded-2xl border-l-4 border-orange-500">
                        <h3 className="text-xl font-bold text-orange-800 mb-3">ملفات الارتباط الإعلانية</h3>
                        <p className="text-orange-700">
                          تُستخدم لتقديم إعلانات أكثر صلة بك وباهتماماتك. كما تُستخدم للحد من عدد مرات رؤيتك 
                          للإعلان نفسه وقياس فعالية الحملات الإعلانية.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-black text-gray-900 mb-6">3. كيف نستخدم ملفات الارتباط</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>نستخدم ملفات الارتباط للأغراض التالية:</p>
                      <ul className="list-disc list-inside space-y-2 mr-6">
                        <li>تحسين أداء وسرعة تحميل الموقع</li>
                        <li>تخصيص المحتوى والخدمات حسب اهتماماتك</li>
                        <li>تذكر تفضيلاتك وإعداداتك</li>
                        <li>تحليل حركة المرور والاستخدام</li>
                        <li>قياس فعالية حملاتنا التسويقية</li>
                        <li>توفير وظائف وسائل التواصل الاجتماعي</li>
                        <li>منع الاحتيال وضمان الأمان</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-black text-gray-900 mb-6">4. ملفات الارتباط من طرف ثالث</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        قد نسمح لشركات مختارة بوضع ملفات الارتباط على موقعنا لتقديم خدمات معينة:
                      </p>
                      <ul className="list-disc list-inside space-y-2 mr-6">
                        <li>Google Analytics - لتحليل استخدام الموقع</li>
                        <li>Facebook Pixel - لقياس فعالية الإعلانات</li>
                        <li>منصات وسائل التواصل الاجتماعي</li>
                        <li>أدوات خدمة العملاء والدعم</li>
                        <li>منصات الدفع الآمنة</li>
                      </ul>
                      <p>
                        هذه الشركات لها سياسات خصوصية منفصلة، ونشجعك على مراجعتها.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-black text-gray-900 mb-6">5. إدارة ملفات الارتباط</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        يمكنك التحكم في ملفات الارتباط وإدارتها بعدة طرق:
                      </p>
                      
                      <div className="space-y-4">
                        <div className="p-4 bg-gray-50 rounded-xl">
                          <h4 className="font-bold text-gray-900 mb-2">إعدادات المتصفح</h4>
                          <p className="text-sm">
                            يمكنك تعديل إعدادات متصفحك لحذف أو منع ملفات الارتباط. كل متصفح له طريقة مختلفة لإدارة هذه الإعدادات.
                          </p>
                        </div>

                        <div className="p-4 bg-gray-50 rounded-xl">
                          <h4 className="font-bold text-gray-900 mb-2">أدوات إلغاء الاشتراك</h4>
                          <p className="text-sm">
                            يمكنك استخدام أدوات مخصصة لإلغاء الاشتراك في ملفات الارتباط التحليلية والإعلانية من مختلف الشركات.
                          </p>
                        </div>

                        <div className="p-4 bg-gray-50 rounded-xl">
                          <h4 className="font-bold text-gray-900 mb-2">إعدادات الموقع</h4>
                          <p className="text-sm">
                            سنقوم بإضافة أداة لإدارة تفضيلات ملفات الارتباط مباشرة على موقعنا في المستقبل القريب.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-black text-gray-900 mb-6">6. تأثير تعطيل ملفات الارتباط</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        إذا اخترت تعطيل ملفات الارتباط، فقد تواجه بعض القيود:
                      </p>
                      <ul className="list-disc list-inside space-y-2 mr-6">
                        <li>عدم حفظ تفضيلاتك الشخصية</li>
                        <li>الحاجة لإعادة إدخال معلوماتك في كل زيارة</li>
                        <li>عدم عمل بعض الوظائف التفاعلية</li>
                        <li>تجربة أقل تخصيصاً</li>
                        <li>صعوبة في قياس وتحسين أداء الموقع</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-black text-gray-900 mb-6">7. الأمان والحماية</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        نتخذ تدابير صارمة لحماية ملفات الارتباط وضمان أمانها:
                      </p>
                      <ul className="list-disc list-inside space-y-2 mr-6">
                        <li>تشفير البيانات الحساسة</li>
                        <li>استخدام بروتوكولات أمان متقدمة</li>
                        <li>مراقبة منتظمة للأنشطة المشبوهة</li>
                        <li>عدم تخزين معلومات شخصية حساسة في ملفات الارتباط</li>
                        <li>انتهاء صلاحية تلقائي للملفات غير المستخدمة</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-black text-gray-900 mb-6">8. التحديثات على هذه السياسة</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        قد نقوم بتحديث سياسة ملفات الارتباط من وقت لآخر لتعكس التغييرات في ممارساتنا أو لأسباب قانونية أو تنظيمية. 
                        سنقوم بإشعارك بأي تحديثات مهمة.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                // English Content
                <div className="space-y-8 text-left" dir="ltr">
                  <div>
                    <h2 className="text-3xl font-black text-gray-900 mb-6">1. What are Cookies?</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        Cookies are small text files that are stored on your device when you visit our website. 
                        These files help improve the site&apos;s performance and provide a better, more personalized experience for you.
                      </p>
                      <p>
                        We use cookies to understand how you interact with our site and improve the services we provide.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-black text-gray-900 mb-6">2. Types of Cookies We Use</h2>
                    <div className="space-y-6">
                      
                      <div className="p-6 bg-green-50 rounded-2xl border-l-4 border-green-500">
                        <h3 className="text-xl font-bold text-green-800 mb-3">Essential Cookies</h3>
                        <p className="text-green-700">
                          These cookies are necessary for the basic functioning of the website. They include session files and security settings. 
                          These cookies cannot be disabled without affecting the site&apos;s functionality.
                        </p>
                      </div>

                      <div className="p-6 bg-blue-50 rounded-2xl border-l-4 border-blue-500">
                        <h3 className="text-xl font-bold text-blue-800 mb-3">Analytics Cookies</h3>
                        <p className="text-blue-700">
                          These help us understand how visitors use our website by collecting anonymous information about the most visited pages 
                          and time spent on the site. We use this data to improve the website.
                        </p>
                      </div>

                      <div className="p-6 bg-purple-50 rounded-2xl border-l-4 border-purple-500">
                        <h3 className="text-xl font-bold text-purple-800 mb-3">Functional Cookies</h3>
                        <p className="text-purple-700">
                          These enable the website to remember choices you&apos;ve made (such as username, language, or region) 
                          and provide enhanced, more personalized features.
                        </p>
                      </div>

                      <div className="p-6 bg-orange-50 rounded-2xl border-l-4 border-orange-500">
                        <h3 className="text-xl font-bold text-orange-800 mb-3">Advertising Cookies</h3>
                        <p className="text-orange-700">
                          These are used to deliver advertisements that are more relevant to you and your interests. They&apos;re also used to limit 
                          the number of times you see an advertisement and measure the effectiveness of advertising campaigns.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-black text-gray-900 mb-6">3. How We Use Cookies</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>We use cookies for the following purposes:</p>
                      <ul className="list-disc list-inside space-y-2 ml-6">
                        <li>Improving website performance and loading speed</li>
                        <li>Personalizing content and services based on your interests</li>
                        <li>Remembering your preferences and settings</li>
                        <li>Analyzing traffic and usage patterns</li>
                        <li>Measuring the effectiveness of our marketing campaigns</li>
                        <li>Providing social media functionality</li>
                        <li>Preventing fraud and ensuring security</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-black text-gray-900 mb-6">4. Third-Party Cookies</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        We may allow selected companies to place cookies on our website to provide certain services:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-6">
                        <li>Google Analytics - for website usage analysis</li>
                        <li>Facebook Pixel - for advertising effectiveness measurement</li>
                        <li>Social media platforms</li>
                        <li>Customer service and support tools</li>
                        <li>Secure payment platforms</li>
                      </ul>
                      <p>
                        These companies have separate privacy policies, and we encourage you to review them.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-black text-gray-900 mb-6">5. Managing Cookies</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        You can control and manage cookies in several ways:
                      </p>
                      
                      <div className="space-y-4">
                        <div className="p-4 bg-gray-50 rounded-xl">
                          <h4 className="font-bold text-gray-900 mb-2">Browser Settings</h4>
                          <p className="text-sm">
                            You can modify your browser settings to delete or prevent cookies. Each browser has a different method for managing these settings.
                          </p>
                        </div>

                        <div className="p-4 bg-gray-50 rounded-xl">
                          <h4 className="font-bold text-gray-900 mb-2">Opt-out Tools</h4>
                          <p className="text-sm">
                            You can use specialized tools to opt out of analytics and advertising cookies from various companies.
                          </p>
                        </div>

                        <div className="p-4 bg-gray-50 rounded-xl">
                          <h4 className="font-bold text-gray-900 mb-2">Website Settings</h4>
                          <p className="text-sm">
                            We will add a tool to manage cookie preferences directly on our website in the near future.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-black text-gray-900 mb-6">6. Impact of Disabling Cookies</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        If you choose to disable cookies, you may experience some limitations:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-6">
                        <li>Your personal preferences won&apos;t be saved</li>
                        <li>You&apos;ll need to re-enter your information on each visit</li>
                        <li>Some interactive features won&apos;t work</li>
                        <li>Less personalized experience</li>
                        <li>Difficulty in measuring and improving website performance</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-black text-gray-900 mb-6">7. Security and Protection</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        We implement strict measures to protect cookies and ensure their security:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-6">
                        <li>Encryption of sensitive data</li>
                        <li>Use of advanced security protocols</li>
                        <li>Regular monitoring for suspicious activities</li>
                        <li>No storage of sensitive personal information in cookies</li>
                        <li>Automatic expiration of unused files</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-black text-gray-900 mb-6">8. Updates to This Policy</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        We may update our cookie policy from time to time to reflect changes in our practices or for legal or regulatory reasons. 
                        We will notify you of any significant updates.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Contact Section */}
              <div className="mt-12 p-8 bg-orange-50 rounded-2xl">
                <div className="text-center">
                  <h3 className="text-2xl font-black text-orange-900 mb-4">
                    {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                  </h3>
                  <p className="text-orange-700 mb-6">
                    {language === 'ar' 
                      ? 'لأي أسئلة حول ملفات الارتباط أو لإدارة تفضيلاتك، تواصل معنا'
                      : 'For any questions about cookies or to manage your preferences, contact us'
                    }
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                        language === 'ar' 
                          ? 'السلام عليكم! لدي سؤال حول سياسة ملفات الارتباط'
                          : 'Hello! I have a question about the cookie policy'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-8 py-3 bg-green-600 text-white hover:bg-green-700 rounded-xl font-bold transition-all duration-300"
                    >
                      <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      {language === 'ar' ? 'تواصل عبر الواتساب' : 'Contact via WhatsApp'}
                    </a>
                    
                    <div className="text-orange-600 font-medium">
                      {language === 'ar' ? 'أو' : 'or'}
                    </div>
                    
                    <a
                      href="mailto:info@falconprodigital.com"
                      className="inline-flex items-center justify-center px-8 py-3 bg-orange-600 text-white hover:bg-orange-700 rounded-xl font-bold transition-all duration-300"
                    >
                      <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      {language === 'ar' ? 'راسلنا بالإيميل' : 'Email Us'}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
