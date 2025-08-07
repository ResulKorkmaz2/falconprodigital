'use client'

import { useState } from 'react'
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [language, setLanguage] = useState('ar') // Varsayılan Arapça
  const isRTL = language === 'ar'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
    budget: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Form verilerini WhatsApp mesajı olarak hazırla
    const whatsappMessage = `مرحباً! أريد الحصول على استشارة مجانية:

` +
      `الاسم: ${formData.name}\n` +
      `البريد الإلكتروني: ${formData.email}\n` +
      `الشركة: ${formData.company}\n` +
      `الخدمة المطلوبة: ${formData.service}\n` +
      `الميزانية: ${formData.budget}\n` +
      `الرسالة: ${formData.message}`
    
    // WhatsApp URL'i hazırla
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/46724003075?text=${encodedMessage}`
    
    // Kısa animasyon sonrası WhatsApp'a yönlendir
    setTimeout(() => {
      setIsSubmitting(false)
      window.open(whatsappUrl, '_blank')
      
      // Form alanlarını temizle
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: '',
        budget: ''
      })
      
      setIsSubmitted(true)
      setTimeout(() => setIsSubmitted(false), 3000)
    }, 1000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      titleAr: 'الموقع',
      value: 'Riyadh, Saudi Arabia',
      link: '#'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-4 font-arabic">
            {language === 'ar' ? 'تواصل معنا' : 'Get In Touch'}
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-right font-arabic">
            {language === 'ar' 
              ? (
                <>
                  هل أنت مستعد لتعزيز
                  <br />
                  <span className="text-primary-500">حضورك الرقمي؟</span>
                </>
              )
              : (
                <>
                  Ready to Boost Your
                  <br />
                  <span className="text-primary-500">Digital Presence?</span>
                </>
              )
            }
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-right font-arabic">
            {language === 'ar'
              ? 'احصل على تدقيق مجاني للتسويق الرقمي واكتشف كيف يمكننا مساعدتك في تحقيق عائد أفضل بـ 3 أضعاف على الاستثمار. خبراؤنا جاهزون لتحليل استراتيجيتك الحالية وتقديم رؤى قابلة للتنفيذ.'
              : 'Get a free digital marketing audit and discover how we can help you achieve 3x better ROI. Our experts are ready to analyze your current strategy and provide actionable insights.'
            }
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8" dir="rtl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-right font-arabic">
              {language === 'ar' ? 'أرسل لنا رسالة' : 'Send Us a Message'}
            </h3>
            <p className="text-gray-600 mb-8 text-right font-arabic">
              {language === 'ar' 
                ? 'املأ النموذج أدناه وسنتواصل معك خلال 24 ساعة.'
                : 'Fill out the form below and we\'ll get back to you within 24 hours.'
              }
            </p>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2 font-arabic">
                  {language === 'ar' ? 'تم إرسال الرسالة بنجاح!' : 'Message Sent Successfully!'}
                </h4>
                <p className="text-gray-600 font-arabic">
                  {language === 'ar' ? 'سنتواصل معك خلال 24 ساعة' : 'We\'ll get back to you within 24 hours.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 text-right font-arabic">
                      {language === 'ar' ? 'الاسم الكامل *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 text-right font-arabic text-gray-900"
                      placeholder={language === 'ar' ? 'اسمك الكامل' : 'Your full name'}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 text-right font-arabic">
                      {language === 'ar' ? 'عنوان البريد الإلكتروني *' : 'Email Address *'}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 text-right font-arabic text-gray-900"
                      placeholder={language === 'ar' ? 'مثال: name@email.com' : 'your@email.com'}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2 text-right font-arabic">
                    {language === 'ar' ? 'اسم الشركة' : 'Company Name'}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 text-right font-arabic text-gray-900"
                    placeholder={language === 'ar' ? 'اسم شركتك' : 'Your company'}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2 text-right font-arabic">
                      {language === 'ar' ? 'الخدمة المطلوبة *' : 'Service Interested In *'}
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 text-right font-arabic text-gray-900"
                    >
                      <option value="">{language === 'ar' ? 'اختر الخدمة' : 'Select a service'}</option>
                      <option value="google-ads">{language === 'ar' ? 'إدارة إعلانات جوجل' : 'Google Ads Management'}</option>
                      <option value="web-design">{language === 'ar' ? 'تصميم وتطوير المواقع' : 'Web Design & Development'}</option>
                      <option value="seo">{language === 'ar' ? 'تحسين محركات البحث والتحليلات' : 'SEO & Analytics'}</option>
                      <option value="full-package">{language === 'ar' ? 'الحزمة الرقمية الكاملة' : 'Complete Digital Package'}</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2 text-right font-arabic">
                      {language === 'ar' ? 'الميزانية الشهرية (دولار أمريكي)' : 'Monthly Budget (USD)'}
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 text-right font-arabic text-gray-900"
                    >
                      <option value="">{language === 'ar' ? 'اختر نطاق الميزانية' : 'Select budget range'}</option>
                      <option value="1000-2500">{language === 'ar' ? '1,000$ - 2,500$' : '$1,000 - $2,500'}</option>
                      <option value="2500-5000">{language === 'ar' ? '2,500$ - 5,000$' : '$2,500 - $5,000'}</option>
                      <option value="5000-10000">{language === 'ar' ? '5,000$ - 10,000$' : '$5,000 - $10,000'}</option>
                      <option value="10000+">{language === 'ar' ? '10,000$+' : '$10,000+'}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 text-right font-arabic">
                    {language === 'ar' ? 'الرسالة *' : 'Message *'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-none text-right font-arabic text-gray-900"
                    placeholder={language === 'ar' ? 'أخبرنا عن أهداف عملك وكيف يمكننا مساعدتك...' : 'Tell us about your business goals and how we can help...'}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-500 hover:bg-primary-600 disabled:bg-primary-300 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center font-arabic"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white ml-2"></div>
                      {language === 'ar' ? 'جارٍ الإرسال...' : 'Sending...'}
                    </>
                  ) : (
                    <>
                      <Send size={20} className={language === 'ar' ? 'ml-2' : 'mr-2'} />
                      {language === 'ar' ? 'إرسال الرسالة' : 'Send Message'}
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info & CTA */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-right font-arabic">
                {language === 'ar' ? 'تواصل معنا' : 'Get In Touch'}
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 space-x-reverse">
                    <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon size={24} className="text-primary-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 font-arabic text-right">
                        {language === 'ar' ? info.titleAr : info.title}
                      </h4>
                      <a
                        href={info.link}
                        className="text-primary-600 hover:text-primary-700 transition-colors duration-200 font-arabic text-right block"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-green-50 rounded-2xl p-8" dir="rtl">
              <div className="text-center">
                <div className="text-4xl mb-4">📱</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 font-arabic">
                  {language === 'ar' ? 'تفضل الواتساب؟' : 'Prefer WhatsApp?'}
                </h4>
                <p className="text-gray-600 mb-6 font-arabic">
                  {language === 'ar' ? 'احصل على ردود فورية على استفساراتك' : 'Get instant responses to your questions'}
                </p>
                <a
                  href="https://wa.me/46724003075?text=مرحباً! أنا مهتم بمعرفة المزيد عن خدمات التسويق الرقمي الخاصة بكم."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 font-arabic"
                >
                  {language === 'ar' ? 'ابدأ محادثة واتساب' : 'Start WhatsApp Chat'}
                </a>
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="bg-primary-50 rounded-2xl p-8" dir="rtl">
              <h4 className="text-xl font-bold text-gray-900 mb-4 font-arabic text-right">
                {language === 'ar' ? 'تعهدنا لك' : 'Our Promise'}
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-reverse">
                  <CheckCircle size={20} className="text-green-500 ml-3" />
                  <span className="text-gray-700 font-arabic text-right">
                    {language === 'ar' ? 'ضمان الرد خلال 24 ساعة' : '24-hour response guarantee'}
                  </span>
                </li>
                <li className="flex items-center space-x-reverse">
                  <CheckCircle size={20} className="text-green-500 ml-3" />
                  <span className="text-gray-700 font-arabic text-right">
                    {language === 'ar' ? 'استشارة ومراجعة مجانية' : 'Free consultation & audit'}
                  </span>
                </li>
                <li className="flex items-center space-x-reverse">
                  <CheckCircle size={20} className="text-green-500 ml-3" />
                  <span className="text-gray-700 font-arabic text-right">
                    {language === 'ar' ? 'بدون عقود طويلة الأجل' : 'No long-term contracts'}
                  </span>
                </li>
                <li className="flex items-center space-x-reverse">
                  <CheckCircle size={20} className="text-green-500 ml-3" />
                  <span className="text-gray-700 font-arabic text-right">
                    {language === 'ar' ? 'أسعار واضحة وشفافة' : 'Transparent pricing'}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
