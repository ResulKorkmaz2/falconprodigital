'use client'

import { CheckCircle, TrendingUp, Users, Award, Clock } from 'lucide-react'
import { useState } from 'react'

const About = () => {
  const [language, setLanguage] = useState('ar') // Varsayılan Arapça
  const isRTL = language === 'ar'
  const stats = [
    {
      icon: TrendingUp,
      value: '300%',
      label: language === 'ar' ? 'زيادة العائد على الاستثمار' : 'ROI Increase'
    },
    {
      icon: Users,
      value: '50+',
      label: language === 'ar' ? 'عميل راضٍ' : 'Happy Clients'
    },
    {
      icon: Award,
      value: '95%',
      label: language === 'ar' ? 'معدل الاحتفاظ بالعملاء' : 'Client Retention'
    },
    {
      icon: Clock,
      value: '24h',
      label: language === 'ar' ? 'وقت الاستجابة' : 'Response Time'
    }
  ]

  const timeline = [
    {
      year: '2020',
      title: language === 'ar' ? 'تأسيس الشركة' : 'Company Founded',
      description: language === 'ar' ? 'بدأنا رحلتنا في التسويق الرقمي مع رؤية واضحة لمساعدة الشركات في دول الخليج على تحقيق النمو المستدام.' : 'Started our digital marketing journey with a clear vision to help GCC businesses achieve sustainable growth.'
    },
    {
      year: '2021',
      title: language === 'ar' ? 'أول العملاء الناجحين' : 'First Success Stories',
      description: language === 'ar' ? 'حققنا نتائج استثنائية لعملائنا الأوائل مع زيادة العائد على الاستثمار بنسبة تزيد عن 200%.' : 'Achieved exceptional results for our first clients with over 200% ROI increase.'
    },
    {
      year: '2022',
      title: language === 'ar' ? 'التوسع في الخليج' : 'GCC Expansion',
      description: language === 'ar' ? 'وسعنا خدماتنا لتشمل السعودية والكويت وقطر مع فريق متخصص في الأسواق المحلية.' : 'Expanded our services across Saudi Arabia, Kuwait, and Qatar with specialized local market expertise.'
    },
    {
      year: '2024',
      title: language === 'ar' ? 'إنجازات جديدة' : 'New Milestones',
      description: language === 'ar' ? 'وصلنا إلى أكثر من 50 عميل راضٍ مع معدل احتفاظ 95% وأصبحنا الشريك المفضل للتسويق الرقمي في المنطقة.' : 'Reached 50+ satisfied clients with 95% retention rate, becoming the preferred digital marketing partner in the region.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium font-arabic">
              {language === 'ar' ? 'من نحن' : 'About Us'}
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-right font-arabic">
              {language === 'ar' 
                ? (
                  <>
                    شركاؤكم في النجاح
                    <br />
                    <span className="text-primary-500">الرقمي</span>
                  </>
                )
                : (
                  <>
                    Your Digital
                    <br />
                    <span className="text-primary-500">Success Partners</span>
                  </>
                )
              }
            </h2>
            
            <h3 className="text-2xl md:text-3xl font-bold text-primary-600 text-right font-arabic">
              {language === 'ar' 
                ? 'متخصصون في السوق الخليجي منذ 2020'
                : 'GCC Market Specialists Since 2020'
              }
            </h3>

            <div className="space-y-6 text-lg text-gray-600">
              {language === 'ar' 
                ? [
                    'نحن فريق من خبراء التسويق الرقمي المتخصصين في دول مجلس التعاون الخليجي، نقدم حلولاً مبتكرة ومخصصة لكل عميل بناءً على احتياجاته الفريدة وأهدافه التجارية.',
                    'خبرتنا العميقة في الثقافة المحلية والسوق الخليجي تمكننا من تطوير استراتيجيات تسويقية فعالة تحقق نتائج استثنائية وعائد استثمار مضمون لعملائنا.',
                    'نؤمن بأن النجاح الحقيقي يأتي من الشراكة طويلة المدى، لذلك نعمل كامتداد لفريقكم لضمان تحقيق أهدافكم وتجاوز توقعاتكم في كل مشروع.'
                  ].map((paragraph: string, index: number) => (
                    <p key={index} className="text-right font-arabic">
                      {paragraph}
                    </p>
                  ))
                : [
                    'We are a team of digital marketing experts specialized in GCC countries, providing innovative and customized solutions for each client based on their unique needs and business goals.',
                    'Our deep expertise in local culture and GCC markets enables us to develop effective marketing strategies that achieve exceptional results and guaranteed ROI for our clients.',
                    'We believe that true success comes from long-term partnerships, so we work as an extension of your team to ensure achieving your goals and exceeding your expectations in every project.'
                  ].map((paragraph: string, index: number) => (
                    <p key={index} className="text-left">
                      {paragraph}
                    </p>
                  ))
              }
            </div>

            {/* Key Points */}
            <div className="space-y-6">
              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 font-arabic text-right">
                    {language === 'ar' ? 'نهج مدفوع بالبيانات' : 'Data-Driven Approach'}
                  </h4>
                  <p className="text-gray-600 text-sm font-arabic text-right">
                    {language === 'ar' ? 'كل قرار مدعوم بالتحليلات والبيانات' : 'Every decision backed by analytics'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 font-arabic text-right">
                    {language === 'ar' ? 'خبرة في أسواق مجلس التعاون الخليجي' : 'GCC Market Expertise'}
                  </h4>
                  <p className="text-gray-600 text-sm font-arabic text-right">
                    {language === 'ar' ? 'فهم عميق للأسواق الإقليمية والثقافة المحلية' : 'Deep understanding of regional markets'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 font-arabic text-right">
                    {language === 'ar' ? 'دعم ثنائي اللغة' : 'Bilingual Support'}
                  </h4>
                  <p className="text-gray-600 text-sm font-arabic text-right">
                    {language === 'ar' ? 'متحدثون أصليون بالعربية والإنجليزية' : 'Native English and Arabic speakers'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 font-arabic text-right">
                    {language === 'ar' ? 'نتائج مثبتة' : 'Proven Results'}
                  </h4>
                  <p className="text-gray-600 text-sm font-arabic text-right">
                    {language === 'ar' ? 'سجل حافل بتحسين عائد الاستثمار بنسبة %300' : 'Track record of 300% ROI improvements'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-accent-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🦅</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-arabic">
                  {language === 'ar' ? 'فلسفتنا في العمل' : 'Our Philosophy'}
                </h3>
                <p className="text-gray-600 mt-2 font-arabic">
                  {language === 'ar' ? 'دقة • سرعة • نتائج' : 'Precision • Speed • Results'}
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700 font-arabic text-right">
                    {language === 'ar' ? 'التخطيط الاستراتيجي' : 'Strategic Planning'}
                  </span>
                  <div className="w-16 h-2 bg-primary-500 rounded-full"></div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700 font-arabic text-right">
                    {language === 'ar' ? 'تنفيذ الحملات' : 'Campaign Execution'}
                  </span>
                  <div className="w-20 h-2 bg-accent-300 rounded-full"></div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700 font-arabic text-right">
                    {language === 'ar' ? 'تحسين الأداء' : 'Performance Optimization'}
                  </span>
                  <div className="w-24 h-2 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700 font-arabic text-right">
                    {language === 'ar' ? 'تعظيم عائد الاستثمار ROI' : 'ROI Maximization'}
                  </span>
                  <div className="w-28 h-2 bg-primary-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg mb-4 group-hover:shadow-xl transition-shadow duration-300">
                <stat.icon size={32} className="text-primary-500" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className={`text-gray-600 text-sm ${isRTL ? 'font-arabic text-center' : 'text-center'}`}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Timeline Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className={`text-2xl md:text-3xl font-bold text-gray-900 mb-4 ${isRTL ? 'font-arabic' : ''}`}>
              {isRTL ? 'رحلتنا' : 'Our Journey'}
            </h3>
            <p className={`text-gray-600 ${isRTL ? 'font-arabic' : ''}`}>
              {isRTL ? 'من شركة ناشئة إلى رائدة إقليمية' : 'From startup to regional leader'}
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 hidden md:block"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${isRTL ? 'md:flex-row-reverse' : (index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse')}`}>
                  <div className={`flex-1 ${isRTL ? 'md:pl-8 md:text-right' : (index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8')}`}>
                    <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-200">
                      <div className="text-primary-500 font-bold text-lg mb-2">{item.year}</div>
                      <h4 className={`font-bold text-gray-900 mb-2 ${isRTL ? 'font-arabic text-right' : 'text-left'}`}>{item.title}</h4>
                      <p className={`text-gray-600 text-sm ${isRTL ? 'font-arabic text-right' : 'text-left'}`}>{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden md:flex w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
