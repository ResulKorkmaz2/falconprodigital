'use client'

import { useState, useEffect } from 'react'
import { CONTACT_CONTENT, COMPANY_INFO, SERVICES } from '@/lib/constants'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    country: '',
    message: ''
  })

  const countries = [
    { value: 'sa', label: 'السعودية', flag: '🇸🇦' },
    { value: 'ae', label: 'الإمارات', flag: '🇦🇪' },
    { value: 'kw', label: 'الكويت', flag: '🇰🇼' },
    { value: 'qa', label: 'قطر', flag: '🇶🇦' },
    { value: 'bh', label: 'البحرين', flag: '🇧🇭' },
    { value: 'om', label: 'عمان', flag: '🇴🇲' }
  ]

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const { firstName, lastName, email, phone, service, country, message } = formData
    
    // Validation
    if (!firstName || !lastName || !email || !phone || !service || !country) {
      alert('يرجى ملء جميع الحقول المطلوبة')
      return
    }

    // Find selected options
    const selectedCountry = countries.find(c => c.value === country)
    const selectedService = SERVICES.find((s: any) => s.id === service)
    
    // GTM DataLayer Event
    if (typeof window !== 'undefined') {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: 'whatsapp_click',
        click_id: '056914'
      });
    }
    
    // Create WhatsApp message
    const whatsappMessage = `🔥 *طلب خدمة جديد من الموقع* 🔥

👤 *البيانات الشخصية:*
• الاسم: ${firstName} ${lastName}
• البريد الإلكتروني: ${email}
• رقم الهاتف: ${phone}
• الدولة: ${selectedCountry?.flag} ${selectedCountry?.label}

🎯 *تفاصيل الطلب:*
• الخدمة المطلوبة: ${selectedService?.title || 'خدمة مخصصة'}
• تفاصيل إضافية: ${message || 'لا توجد تفاصيل إضافية'}

⏰ *تم الإرسال:* ${new Date().toLocaleString('ar-SA')}

---
*شكراً لاختيارك فالكون برو ديجيتال* 🚀`

    // Open WhatsApp
    const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, '_blank')
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      service: '',
      country: '',
      message: ''
    })
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      <Container>
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            {CONTACT_CONTENT.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {CONTACT_CONTENT.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* WhatsApp Form */}
          <div className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100" style={{ touchAction: 'manipulation' }}>
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  تواصل معنا عبر واتساب
                </h3>
                <p className="text-gray-600">
                  املأ النموذج وسنتواصل معك فوراً
                </p>
              </div>

              <form onSubmit={handleWhatsAppSubmit} className="space-y-6" style={{ touchAction: 'manipulation' }}>
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 text-right">
                      الاسم الأول <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-right"
                      placeholder="أدخل اسمك الأول"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 text-right">
                      اسم العائلة <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-right"
                      placeholder="أدخل اسم العائلة"
                      required
                    />
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 text-right">
                      البريد الإلكتروني <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-right"
                      placeholder="example@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 text-right">
                      رقم الهاتف <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onKeyPress={(e) => {
                        // Sadece rakamlar, +, -, boşluk ve () karakterlerine izin ver
                        const allowedChars = /[0-9+\-\s()]/
                        if (!allowedChars.test(e.key)) {
                          e.preventDefault()
                        }
                      }}
                      onInput={(e) => {
                        // Input değerini temizle - sadece rakam, +, -, boşluk ve () bırak
                        const target = e.target as HTMLInputElement
                        target.value = target.value.replace(/[^0-9+\-\s()]/g, '')
                      }}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-right"
                      placeholder="+966 5X XXX XXXX"
                      required
                    />
                  </div>
                </div>

                {/* Service and Country */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 text-right">
                      نوع الخدمة <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-right"
                      required
                    >
                      <option value="">اختر الخدمة المطلوبة</option>
                      {SERVICES.map((service: any) => (
                        <option key={service.id} value={service.id}>
                          {service.icon} {service.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 text-right">
                      الدولة <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-right"
                      required
                    >
                      <option value="">اختر دولتك</option>
                      {countries.map(country => (
                        <option key={country.value} value={country.value}>
                          {country.flag} {country.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 text-right">
                    تفاصيل المشروع (اختياري)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onClick={(e) => e.stopPropagation()}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-right resize-none"
                    placeholder="أخبرنا المزيد عن مشروعك أو متطلباتك الخاصة..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  data-wa-id="056914"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group"
                >
                  <svg className="w-6 h-6 ml-3 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  إرسال عبر واتساب
                </Button>

                {/* Privacy Notice */}
                <div className="text-center">
                  <p className="text-xs text-gray-500 leading-relaxed">
                    🔒 معلوماتك آمنة معنا. سيتم إرسال البيانات عبر واتساب فقط ولن يتم حفظها في أي مكان آخر
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Company Info Side */}
          <div className={`${isVisible ? 'animate-slide-up' : 'opacity-0'} space-y-8`}>
            
            {/* Main Company Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div className="text-center mb-6">
                <img 
                  src="/images/logo.png" 
                  alt="Falcon Pro Digital" 
                  className="h-16 mx-auto mb-4"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
                <h3 className="text-2xl font-black text-gray-900 mb-2">
                  فالكون برو ديجيتال
                </h3>
                <p className="text-green-600 font-bold">
                  أكبر شركة رقمية في الخليج
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-center">
                  <span className="text-2xl ml-3">📱</span>
                  <span className="font-bold text-gray-800">{COMPANY_INFO.whatsappDisplayNumber}</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-2xl ml-3">🏢</span>
                  <span className="text-gray-600">جزء من {COMPANY_INFO.parentCompany}</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-2xl ml-3">🌍</span>
                  <span className="text-gray-600">{COMPANY_INFO.parentCompanyLocation}</span>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <h4 className="text-xl font-black text-gray-900 mb-6 text-center">
                نخدم في دول الخليج الكبرى
              </h4>
              
              <div className="grid grid-cols-2 gap-4">
                {CONTACT_CONTENT.serviceAreas.areas.map((area, index) => (
                  <div 
                    key={area.name}
                    className="group p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center">
                      <span className="text-3xl ml-3 group-hover:scale-110 transition-transform duration-300">{area.flag}</span>
                      <span className="font-bold text-gray-800">{area.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contact