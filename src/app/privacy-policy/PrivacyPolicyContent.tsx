'use client'

import { useState } from 'react'
import Container from '@/components/ui/Container'
import { COMPANY_INFO } from '@/lib/constants'

export default function PrivacyPolicyContent() {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar')
  const currentDate = new Date().toLocaleDateString('ar-SA')

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-indigo-800 text-white py-20 md:py-32 overflow-hidden pt-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <Container className="relative z-10 text-center">
          <div className="flex items-center justify-center mb-4 text-white/90">
            <span className="text-3xl ml-3">🔒</span>
            <span className="text-lg font-medium">
              {language === 'ar' ? 'حماية البيانات والخصوصية' : 'Data Protection & Privacy'}
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
            {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
          </h1>

          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            {language === 'ar' 
              ? 'نحن في فالكون برو ديجيتال ملتزمون بحماية خصوصيتك وأمان معلوماتك الشخصية وفقاً لأفضل المعايير الدولية'
              : 'At Falcon Pro Digital, we are committed to protecting your privacy and securing your personal information according to the highest international standards'
            }
          </p>

          {/* Language Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <button
              onClick={() => setLanguage('ar')}
              className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                language === 'ar' 
                  ? 'bg-white text-blue-600 shadow-lg' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              العربية
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                language === 'en' 
                  ? 'bg-white text-blue-600 shadow-lg' 
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
                    <h2 className="text-3xl font-black text-gray-900 mb-6">1. المعلومات التي نجمعها</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        نقوم بجمع المعلومات التي تقدمها لنا بشكل طوعي عند استخدام خدماتنا، بما في ذلك:
                      </p>
                      <ul className="list-disc list-inside space-y-2 mr-6">
                        <li>معلومات الاتصال (الاسم، البريد الإلكتروني، رقم الهاتف)</li>
                        <li>معلومات الشركة أو العمل</li>
                        <li>تفاصيل المشاريع والمتطلبات</li>
                        <li>معلومات الدفع (تُعالج بشكل آمن عبر منصات دفع معتمدة)</li>
                        <li>معلومات تقنية (عنوان IP، نوع المتصفح، نظام التشغيل)</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-black text-gray-900 mb-6">2. كيف نستخدم معلوماتك</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>نستخدم المعلومات التي نجمعها للأغراض التالية:</p>
                      <ul className="list-disc list-inside space-y-2 mr-6">
                        <li>تقديم وتطوير خدماتنا</li>
                        <li>التواصل معك بخصوص مشاريعك</li>
                        <li>معالجة المدفوعات والفواتير</li>
                        <li>تحسين موقعنا وخدماتنا</li>
                        <li>إرسال التحديثات والعروض (بموافقتك)</li>
                        <li>الامتثال للمتطلبات القانونية</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-black text-gray-900 mb-6">3. مشاركة المعلومات</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        نحن ملتزمون بعدم بيع أو تأجير أو مشاركة معلوماتك الشخصية مع أطراف ثالثة، إلا في الحالات التالية:
                      </p>
                      <ul className="list-disc list-inside space-y-2 mr-6">
                        <li>بموافقتك الصريحة</li>
                        <li>مع مقدمي الخدمات الموثوقين (مثل معالجات الدفع)</li>
                        <li>عندما يقتضي القانون ذلك</li>
                        <li>لحماية حقوقنا أو حقوق الآخرين</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-black text-gray-900 mb-6">4. أمان المعلومات</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        نتخذ تدابير أمنية صارمة لحماية معلوماتك الشخصية:
                      </p>
                      <ul className="list-disc list-inside space-y-2 mr-6">
                        <li>تشفير SSL للبيانات المنقولة</li>
                        <li>خوادم آمنة ومحمية</li>
                        <li>وصول محدود للموظفين المخولين فقط</li>
                        <li>مراقبة مستمرة للأنشطة المشبوهة</li>
                        <li>نسخ احتياطية منتظمة ومشفرة</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-black text-gray-900 mb-6">5. حقوقك</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>لديك الحق في:</p>
                      <ul className="list-disc list-inside space-y-2 mr-6">
                        <li>الوصول إلى معلوماتك الشخصية</li>
                        <li>تصحيح أو تحديث معلوماتك</li>
                        <li>طلب حذف معلوماتك</li>
                        <li>الاعتراض على معالجة معلوماتك</li>
                        <li>سحب الموافقة في أي وقت</li>
                        <li>تقديم شكوى للجهات المختصة</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-black text-gray-900 mb-6">6. الاحتفاظ بالبيانات</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        نحتفظ بمعلوماتك الشخصية طالما كان ذلك ضرورياً لتقديم خدماتنا أو كما يقتضي القانون. 
                        عند عدم الحاجة إلى معلوماتك، سيتم حذفها بشكل آمن.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-black text-gray-900 mb-6">7. التحديثات على هذه السياسة</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        قد نقوم بتحديث سياسة الخصوصية من وقت لآخر. سنقوم بإشعارك بأي تغييرات مهمة 
                        عبر البريد الإلكتروني أو إشعار على موقعنا.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-black text-gray-900 mb-6">8. الامتثال القانوني</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        نلتزم بقوانين حماية البيانات في دول الخليج العربي، بما في ذلك:
                      </p>
                      <ul className="list-disc list-inside space-y-2 mr-6">
                        <li>قانون حماية البيانات في المملكة العربية السعودية</li>
                        <li>قانون حماية البيانات في دولة الإمارات العربية المتحدة</li>
                        <li>قانون حماية البيانات في دولة قطر</li>
                        <li>قانون حماية البيانات في دولة الكويت</li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                // English Content
                <div className="space-y-8 text-left" dir="ltr">
                  <div>
                    <h2 className="text-3xl font-black text-gray-900 mb-6">1. Information We Collect</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        We collect information that you voluntarily provide to us when using our services, including:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-6">
                        <li>Contact information (name, email, phone number)</li>
                        <li>Company or business information</li>
                        <li>Project details and requirements</li>
                        <li>Payment information (processed securely through certified payment platforms)</li>
                        <li>Technical information (IP address, browser type, operating system)</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-black text-gray-900 mb-6">2. How We Use Your Information</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>We use the information we collect for the following purposes:</p>
                      <ul className="list-disc list-inside space-y-2 ml-6">
                        <li>Providing and developing our services</li>
                        <li>Communicating with you about your projects</li>
                        <li>Processing payments and invoices</li>
                        <li>Improving our website and services</li>
                        <li>Sending updates and offers (with your consent)</li>
                        <li>Complying with legal requirements</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-black text-gray-900 mb-6">3. Information Sharing</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        We are committed to not selling, renting, or sharing your personal information with third parties, 
                        except in the following cases:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-6">
                        <li>With your explicit consent</li>
                        <li>With trusted service providers (such as payment processors)</li>
                        <li>When required by law</li>
                        <li>To protect our rights or the rights of others</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-black text-gray-900 mb-6">4. Information Security</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        We implement strict security measures to protect your personal information:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-6">
                        <li>SSL encryption for data transmission</li>
                        <li>Secure and protected servers</li>
                        <li>Limited access to authorized personnel only</li>
                        <li>Continuous monitoring for suspicious activities</li>
                        <li>Regular encrypted backups</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-black text-gray-900 mb-6">5. Your Rights</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>You have the right to:</p>
                      <ul className="list-disc list-inside space-y-2 ml-6">
                        <li>Access your personal information</li>
                        <li>Correct or update your information</li>
                        <li>Request deletion of your information</li>
                        <li>Object to processing of your information</li>
                        <li>Withdraw consent at any time</li>
                        <li>File a complaint with relevant authorities</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-black text-gray-900 mb-6">6. Data Retention</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        We retain your personal information for as long as necessary to provide our services or as required by law. 
                        When your information is no longer needed, it will be securely deleted.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-black text-gray-900 mb-6">7. Updates to This Policy</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        We may update this privacy policy from time to time. We will notify you of any significant changes 
                        via email or a notice on our website.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-black text-gray-900 mb-6">8. Legal Compliance</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        We comply with data protection laws in Gulf countries, including:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-6">
                        <li>Data Protection Law in Kingdom of Saudi Arabia</li>
                        <li>Data Protection Law in United Arab Emirates</li>
                        <li>Data Protection Law in State of Qatar</li>
                        <li>Data Protection Law in State of Kuwait</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Contact Section */}
              <div className="mt-12 p-8 bg-blue-50 rounded-2xl">
                <div className="text-center">
                  <h3 className="text-2xl font-black text-blue-900 mb-4">
                    {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                  </h3>
                  <p className="text-blue-700 mb-6">
                    {language === 'ar' 
                      ? 'لأي أسئلة أو مخاوف بخصوص خصوصيتك، لا تتردد في التواصل معنا'
                      : 'For any questions or concerns about your privacy, do not hesitate to contact us'
                    }
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                        language === 'ar' 
                          ? 'السلام عليكم! لدي سؤال حول سياسة الخصوصية'
                          : 'Hello! I have a question about the privacy policy'
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
                    
                    <div className="text-blue-600 font-medium">
                      {language === 'ar' ? 'أو' : 'or'}
                    </div>
                    
                    <a
                      href="mailto:info@falconprodigital.com"
                      className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-xl font-bold transition-all duration-300"
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
