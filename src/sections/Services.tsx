'use client'

import ServiceCard from '@/components/ServiceCard'
import { MousePointer, Globe, BarChart3, Bot } from 'lucide-react'
import { useState } from 'react'

const Services = () => {
  const [language, setLanguage] = useState('ar') // Varsayılan Arapça
  const isRTL = language === 'ar'
  
  const services = [
    {
      icon: MousePointer,
      title: language === 'ar' ? 'إدارة إعلانات جوجل' : 'Google Ads Management',
      description: language === 'ar' 
        ? 'إدارة احترافية للحملات الإعلانية مع تحسين مؤكد للعائد على الاستثمار. نتولى كل شيء من البحث عن الكلمات المفتاحية إلى تتبع التحويلات لضمان أقصى استفادة من ميزانيتك الإعلانية.'
        : 'Professional campaign management with proven ROI optimization. We handle everything from keyword research to conversion tracking to ensure maximum return on your advertising budget.',
      features: language === 'ar' 
        ? [
            'إعداد وتحسين الحملات الإعلانية',
            'البحث المتقدم عن الكلمات المفتاحية',
            'إنشاء واختبار نصوص الإعلانات',
            'تتبع التحويلات والتحليلات',
            'تقارير الأداء الشهرية المفصلة'
          ]
        : [
            'Campaign Setup & Optimization',
            'Advanced Keyword Research',
            'Ad Copy Creation & Testing',
            'Conversion Tracking & Analytics',
            'Detailed Monthly Performance Reports'
          ],
      color: 'from-blue-500 to-primary-500',
      link: '/services/google-ads'
    },
    {
      icon: Globe,
      title: language === 'ar' ? 'تصميم مواقع عالية التحويل' : 'High-Converting Web Design',
      description: language === 'ar'
        ? 'مواقع ويب حديثة ومتجاوبة مصممة خصيصاً لتحويل الزوار إلى عملاء. محسنة للسرعة وتحسين محركات البحث وتجربة المستخدم المثلى في السوق الخليجي.'
        : 'Modern, responsive websites specifically designed to convert visitors into customers. Optimized for speed, SEO, and optimal user experience in the GCC market.',
      features: language === 'ar'
        ? [
            'تصميم متجاوب يركز على الهاتف المحمول',
            'سرعة تحميل فائقة أقل من 3 ثوان',
            'هيكل محسن لمحركات البحث',
            'تحسين معدل التحويل CRO',
            'دعم كامل للغة العربية والإنجليزية'
          ]
        : [
            'Mobile-First Responsive Design',
            'Lightning-Fast Loading Under 3s',
            'SEO-Optimized Structure',
            'Conversion Rate Optimization',
            'Full Arabic & English Support'
          ],
      color: 'from-green-500 to-accent-300',
      link: '/services/web-design'
    },
    {
      icon: BarChart3,
      title: language === 'ar' ? 'تحسين محركات البحث والتحليلات' : 'SEO & Analytics',
      description: language === 'ar'
        ? 'استراتيجيات شاملة لتحسين محركات البحث وتحليلات مفصلة لتتبع أداء التسويق الرقمي والعائد على الاستثمار. متخصصون في الأسواق الخليجية والمحتوى العربي.'
        : 'Comprehensive SEO strategies and detailed analytics to track your digital marketing performance and ROI. Specialized in GCC markets and Arabic content.',
      features: language === 'ar'
        ? [
            'تدقيق تحسين محركات البحث التقني',
            'تحسين محركات البحث المحلية للخليج',
            'إعداد وتكوين جوجل أناليتكس',
            'مراقبة الأداء والتقارير',
            'تحليل المنافسين والسوق'
          ]
        : [
            'Technical SEO Audits',
            'Local SEO for GCC Markets',
            'Google Analytics Setup',
            'Performance Monitoring & Reports',
            'Competitor & Market Analysis'
          ],
      color: 'from-purple-500 to-primary-500',
      link: '/services/seo-analytics'
    },
    {
      icon: Bot,
      title: language === 'ar' ? 'روبوتات الذكاء الاصطناعي' : 'AI Chat Bots & Agents',
      description: language === 'ar'
        ? 'روبوتات محادثة ذكية مدعومة بالذكاء الاصطناعي تخدم عملاءك 24/7، تجيب على استفساراتهم، تحل مشاكلهم، وتحولهم إلى عملاء فعليين. متاحة بالعربية والإنجليزية دون توقف.'
        : 'Intelligent AI-powered chatbots that serve your customers 24/7, answer their queries, solve problems, and convert them into actual customers. Available in Arabic and English without interruption.',
      features: language === 'ar'
        ? [
            'خدمة عملاء ذكية على مدار الساعة',
            'دعم اللغة العربية والإنجليزية',
            'تكامل مع الواتساب والموقع الإلكتروني',
            'تعلم آلي وتحسين مستمر',
            'تقارير تفصيلية عن المحادثات'
          ]
        : [
            '24/7 Intelligent Customer Service',
            'Arabic & English Language Support',
            'WhatsApp & Website Integration',
            'Machine Learning & Continuous Improvement',
            'Detailed Conversation Analytics'
          ],
      color: 'from-indigo-500 to-purple-500',
      link: '/services/ai-chatbot'
    }
  ]

  return (
    <section id="services" className="py-20 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-4 font-arabic">
            {language === 'ar' ? 'خدماتنا المتخصصة' : 'Our Specialized Services'}
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-right font-arabic">
            {language === 'ar' 
              ? (
                <>
                  حلول التسويق الرقمي الشاملة
                  <br />
                  <span className="text-primary-500">لدول مجلس التعاون الخليجي</span>
                </>
              )
              : (
                <>
                  Comprehensive Digital Marketing
                  <br />
                  <span className="text-primary-500">Solutions for GCC</span>
                </>
              )
            }
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-right font-arabic">
            {language === 'ar'
              ? 'نقدم خدمات تسويق رقمي متكاملة مصممة خصيصاً لتعظيم عائدك على الاستثمار ودفع النمو المستدام للأعمال في المملكة العربية السعودية والكويت وقطر. متخصصون في السوق الخليجي مع فهم عميق للثقافة المحلية واحتياجات العملاء.'
              : 'We provide end-to-end digital marketing services designed to maximize your ROI and drive sustainable business growth across Saudi Arabia, Kuwait, and Qatar. Specialized in GCC markets with deep understanding of local culture and customer needs.'
            }
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              color={service.color}
              link={service.link}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-500 to-accent-300 rounded-2xl p-8 md:p-12 text-right">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-arabic">
              {language === 'ar' 
                ? 'هل أنت مستعد لتنمية أعمالك؟'
                : 'Ready to Grow Your Business?'
              }
            </h3>
            <p className="text-primary-100 text-lg mb-6 max-w-2xl mx-auto font-arabic">
              {language === 'ar'
                ? 'احصل على استشارة مجانية واكتشف كيف يمكن لخدماتنا المتخصصة أن تضاعف عائدك على الاستثمار في التسويق الرقمي خلال 90 يوماً.'
                : 'Get a free consultation and discover how our specialized services can double your digital marketing ROI within 90 days.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/46724003075?text=مرحباً! أريد الحصول على تدقيق مجاني للتسويق الرقمي لأعمالي"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200 font-arabic"
              >
                {language === 'ar' ? 'ابدأ التدقيق المجاني 🚀' : 'Start Free Audit 🚀'}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200 border-2 border-white/20 font-arabic"
              >
                {language === 'ar' ? 'حدد موعد مكالمة 📞' : 'Schedule Call 📞'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
