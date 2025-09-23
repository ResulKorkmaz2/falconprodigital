'use client'

import Container from '@/components/ui/Container'
import { COMPANY_INFO } from '@/lib/constants'

export default function RefundPolicyContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] bg-gradient-to-br from-blue-600 via-primary-600 to-indigo-700 flex items-center justify-center overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-white/5 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        
        <Container className="relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-8 shadow-2xl">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              فالكون برو ديجيتال - سياسة الإرجاع
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
              إرشادات الإرجاع الواضحة والشفافة لجميع خدمات التسويق الرقمي وتطوير الويب الخاصة بنا
            </p>
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-blue-100">
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
            
            {/* Section 1: النطاق */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-4">1</span>
                النطاق
              </h2>
              <div className="bg-blue-50 rounded-2xl p-6 mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  تنطبق هذه السياسة على جميع الخدمات المقدمة من شركة فالكون برو ديجيتال، فرع من شركة Aptiro LLC الأمريكية، وتشمل على سبيل المثال لا الحصر:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      خدمات تصميم وتطوير المواقع
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      إدارة Google Ads والإعلانات الاجتماعية
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      خدمات الاستضافة وتسجيل النطاقات
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      البريد الإلكتروني المبني على النطاق
                    </li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      إعداد وتطبيق أتمتة الذكاء الاصطناعي
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      استشارات واستراتيجية التسويق الرقمي
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      خدمات SEO وتحليل البيانات
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      إدارة وسائل التواصل الاجتماعي
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 2: أهلية الاسترداد */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-orange-600 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-4">2</span>
                أهلية الاسترداد
              </h2>
              
              <div className="bg-red-50 rounded-2xl p-6 mb-6">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L3.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <h3 className="text-lg font-bold text-red-800">هام: نظراً لطبيعة خدماتنا الرقمية، معظم الأعمال المسلمة &ldquo;غير قابلة للإرجاع&rdquo;</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• يجب تقديم طلبات الإرجاع كتابياً</li>
                  <li>• <strong>7 أيام</strong> من تاريخ الدفع الأولي (مخفضة من 14 يوماً بسبب طبيعة الخدمة الرقمية)</li>
                  <li>• <strong>لا يوجد إرجاع مطلقاً</strong> للأعمال المبدوءة أو المسلمة أو الساعات المعمولة</li>
                </ul>
              </div>

              {/* حالات الإرجاع المضمون */}
              <div className="bg-green-50 rounded-2xl p-6 mb-6">
                <h3 className="text-lg font-bold text-green-800 mb-4">✅ حالات الإرجاع المضمون:</h3>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4">
                    <h4 className="font-bold text-green-700 mb-2">1. المدفوعات المكررة:</h4>
                    <p className="text-gray-700 text-sm">في حالة الدفع عن طريق الخطأ أكثر من مرة لنفس الخدمة، يتم إرجاع الدفعة(الدفعات) الإضافية بالكامل خلال 5 أيام عمل من تاريخ الإبلاغ.</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4">
                    <h4 className="font-bold text-green-700 mb-2">2. لم يبدأ أي عمل:</h4>
                    <p className="text-gray-700 text-sm">إذا لم يتم بدء أي عمل أو استشارة أو جهد في المشروع وألغى العميل خلال 7 أيام، يتم إرجاع كامل المبلغ بعد خصم رسوم المعالجة (عادة 3-5%).</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4">
                    <h4 className="font-bold text-green-700 mb-2">3. أخطاء الدفع التقنية:</h4>
                    <p className="text-gray-700 text-sm">أعطال النظام التي تؤدي إلى رسوم مكررة أو مبالغ خاطئة أو فشل المعاملات المدفوعة بالفعل.</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4">
                    <h4 className="font-bold text-green-700 mb-2">4. عدم إمكانية الخدمة:</h4>
                    <p className="text-gray-700 text-sm">إذا حددنا أننا لا نستطيع تقديم الخدمة المطلوبة بسبب القيود التقنية أو قيود الموارد قبل بدء أي عمل.</p>
                  </div>
                </div>
              </div>

              {/* شروط خاصة */}
              <div className="bg-yellow-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-yellow-800 mb-4">⚠️ شروط خاصة:</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>إدارة الإعلانات:</strong> لا يوجد إرجاع لرسوم الإدارة بعد نشر الحملات وبدء الإنفاق الإعلاني</li>
                  <li>• <strong>أتمتة الذكاء الاصطناعي:</strong> لا يوجد إرجاع بعد بدء الإعداد أو تطبيق التكوينات</li>
                  <li>• <strong>حزم الخدمة المدفوعة مسبقاً:</strong> يمكن إرجاع الجزء غير المستخدم فقط بعد خصم تكاليف الإعداد والاستشارة والأعمال المسبقة</li>
                  <li>• يجب على العميل إثبات أن الخدمات لم يتم تنفيذها كما هو متفق عليه في العقد للحصول على أي إرجاع</li>
                </ul>
              </div>
            </section>

            {/* Section 3: المنتجات والخدمات غير القابلة للإرجاع */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-red-600 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-4">3</span>
                المنتجات والخدمات غير القابلة للإرجاع
              </h2>
              
              <div className="bg-red-50 rounded-2xl p-6">
                <p className="text-red-800 font-bold mb-6">🚫 المنتجات والخدمات التالية غير قابلة للإرجاع تحت أي ظرف:</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-4">
                    <h3 className="text-lg font-bold text-red-800 mb-4">تكاليف الطرف الثالث:</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">✗</span>
                        تسجيلات وتجديدات أسماء النطاقات
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">✗</span>
                        رسوم الاستضافة والخادم
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">✗</span>
                        إنفاق Google Ads وميزانيات الإعلانات الأخرى
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">✗</span>
                        إنفاق إعلانات وسائل التواصل الاجتماعي
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">✗</span>
                        تراخيص أو اشتراكات البرامج من الطرف الثالث
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">✗</span>
                        شهادات SSL وخدمات الأمان
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4">
                    <h3 className="text-lg font-bold text-red-800 mb-4">المخرجات الرقمية:</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">✗</span>
                        كود الموقع المخصص وأعمال التطوير
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">✗</span>
                        التصميم الجرافيكي والأصول الإبداعية
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">✗</span>
                        تكوينات وإعدادات أتمتة الذكاء الاصطناعي
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">✗</span>
                        إعداد وتكوين نظام البريد الإلكتروني
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">✗</span>
                        استراتيجيات الحملة ووقت الاستشارة
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">✗</span>
                        الوقت المنفق في البحث والتحليل أو التخطيط
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-red-100 rounded-lg">
                  <p className="text-red-800 font-medium text-sm">
                    <strong>هام:</strong> بمجرد نشر أي حملة إعلانية، حتى لو لدقائق قليلة، تصبح جميع رسوم الإدارة ذات الصلة غير قابلة للإرجاع بسبب الاستثمار في الوقت المهني والخبرة.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: عملية طلب الإرجاع */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-4">4</span>
                عملية طلب الإرجاع
              </h2>
              
              <div className="bg-purple-50 rounded-2xl p-6">
                <p className="text-purple-800 font-bold mb-6">📋 جميع طلبات الإرجاع تخضع لمراجعة شاملة ويجب أن تستوفي معايير الأهلية الصارمة.</p>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">1</div>
                      <div>
                        <h3 className="text-lg font-bold text-purple-800 mb-3">أرسل طلباً مفصلاً</h3>
                        <p className="text-gray-700 mb-3">أرسل طلبك الكتابي إلى <strong>info@falconprodigital.com</strong> متضمناً:</p>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• رقم الفاتورة وتاريخ الدفع</li>
                          <li>• سبب مفصل لطلب الإرجاع</li>
                          <li>• توثيق لأي مشاكل في الخدمة</li>
                          <li>• الجدول الزمني للعمل المنجز مقابل العقد</li>
                          <li>• للمدفوعات المكررة: معرفات المعاملة لكلا الدفعتين</li>
                          <li>• لادعاءات عدم العمل: تأكيد عدم حدوث اتصال أو عمل</li>
                        </ul>
                        <div className="mt-3 p-3 bg-green-100 rounded-lg">
                          <p className="text-green-800 text-sm">
                            <strong>⚡ معالجة سريعة:</strong> المدفوعات المكررة والأخطاء التقنية تتم معالجتها خلال 1-2 يوم عمل مع الحد الأدنى من الوثائق.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">2</div>
                      <div>
                        <h3 className="text-lg font-bold text-purple-800 mb-3">التحقيق والمراجعة</h3>
                        <p className="text-gray-700">
                          سنؤكد الطلب خلال <strong>5 أيام عمل</strong> ونجري مراجعة شاملة للعمل المنجز والوقت المنفق والالتزامات التعاقدية. 
                          قد تمتد هذه الفترة إلى <strong>10 أيام عمل</strong> للحالات المعقدة.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">3</div>
                      <div>
                        <h3 className="text-lg font-bold text-purple-800 mb-3">القرار والمعالجة</h3>
                        <p className="text-gray-700 mb-3">
                          في حالة الموافقة (نادر للخدمات الرقمية)، يتم تنفيذ الإرجاع خلال <strong>10-15 يوم عمل</strong> 
                          بطريقة الدفع الأصلية، بعد خصم رسوم المعالجة المطبقة والمصاريف الموثقة.
                        </p>
                        <div className="p-3 bg-orange-100 rounded-lg">
                          <p className="text-orange-800 text-sm">
                            <strong>ملاحظة:</strong> نظراً لطبيعة الخدمات الرقمية والعمل القائم على الوقت، لا يمكن الموافقة على معظم طلبات الإرجاع. 
                            نشجع عملاءنا على مناقشة مخاوفهم أثناء المشروع وليس بعد اكتماله.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: مسؤوليات العميل وتوقعات الخدمة */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-green-600 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-4">5</span>
                مسؤوليات العميل وتوقعات الخدمة
              </h2>
              
              <div className="bg-green-50 rounded-2xl p-6">
                <p className="text-green-800 font-bold mb-6">🤝 التواصل الواضح والتوقعات الواقعية تمنع نزاعات الإرجاع.</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-4">
                    <h3 className="text-lg font-bold text-green-800 mb-4">مسؤوليات العميل:</h3>
                    <ul className="space-y-3 text-gray-700 text-sm">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        تحديد متطلبات المشروع والتوقعات بوضوح مسبقاً
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        الاستجابة لطلبات التغذية الراجعة ضمن الأطر الزمنية المتفق عليها
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        توفير بيانات الاعتماد والمواد المطلوبة فوراً
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        التواصل بشأن المخاوف أثناء المشروع وليس بعد اكتماله
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4">
                    <h3 className="text-lg font-bold text-green-800 mb-4">توقعات الخدمة:</h3>
                    <ul className="space-y-3 text-gray-700 text-sm">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        نتائج التسويق الرقمي قد تستغرق 30-90 يوماً لتظهر
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        أتمتة الذكاء الاصطناعي تتطلب عمليات اختبار وتحسين
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        تطوير المواقع يتبع الجدول الزمني المتفق عليه للمشروع
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        أداء الحملة الإعلانية يعتمد على ظروف السوق
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: الإطار القانوني وحل النزاعات */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-4">6</span>
                الإطار القانوني وحل النزاعات
              </h2>
              
              <div className="bg-indigo-50 rounded-2xl p-6">
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-4">
                    <h3 className="text-lg font-bold text-indigo-800 mb-3">القانون المطبق:</h3>
                    <p className="text-gray-700 text-sm">
                      تخضع سياسة الإرجاع هذه وجميع النزاعات ذات الصلة لقوانين ولاية نيو مكسيكو، الولايات المتحدة الأمريكية، 
                      وتكون خاضعة للاختصاص القضائي لمحاكمها.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4">
                    <h3 className="text-lg font-bold text-indigo-800 mb-3">حل النزاعات:</h3>
                    <p className="text-gray-700 text-sm mb-3">
                      يتفق الطرفان على محاولة الوصول إلى حل من خلال التواصل المباشر قبل اللجوء إلى الوسائل القانونية. 
                      في حالة الفشل، يمكن حل النزاعات من خلال التحكيم الملزم في البوكيرك، نيو مكسيكو.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4">
                    <h3 className="text-lg font-bold text-indigo-800 mb-3">تحديد المسؤولية:</h3>
                    <p className="text-gray-700 text-sm">
                      تقتصر مسؤولية Aptiro LLC عن أي خدمة على المبلغ المدفوع لتلك الخدمة المحددة. 
                      نحن لسنا مسؤولين عن الأضرار غير المباشرة أو التبعية أو خسارة الأرباح.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Company Information Section */}
            <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-4">حول شركتنا</h2>
                <div className="max-w-3xl mx-auto">
                  <p className="text-blue-100 mb-6 leading-relaxed">
                    فالكون برو ديجيتال هي فرع من شركة <strong>Aptiro LLC</strong> الأمريكية، المتخصصة في تقديم حلول التسويق الرقمي 
                    والذكاء الاصطناعي المتقدمة في منطقة الخليج العربي. نحن ملتزمون بتقديم خدمات عالية الجودة مع الشفافية الكاملة 
                    في سياساتنا وإجراءاتنا.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                      href="https://aptiroglobal.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-bold rounded-2xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      زيارة موقع Aptiro LLC
                    </a>
                    <div className="text-blue-200 text-sm">
                      الشركة الأم - الولايات المتحدة الأمريكية
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">لديك أسئلة حول سياسة الإرجاع؟</h2>
              <p className="text-green-100 mb-6">
                فريق خدمة العملاء جاهز لمساعدتك والإجابة على جميع استفساراتك
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('مرحباً، لدي استفسار حول سياسة الإرجاع والاسترداد')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-bold text-lg rounded-2xl hover:bg-green-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                >
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  💬 واتساب
                </a>
                <a
                  href="mailto:info@falconprodigital.com?subject=استفسار حول سياسة الإرجاع"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-2xl hover:bg-white hover:text-green-600 transition-all duration-300"
                >
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  📧 إيميل
                </a>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </main>
    </>
  )
}