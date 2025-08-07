'use client'

import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { useState } from 'react'

const Footer = () => {
  const [language, setLanguage] = useState('ar') // Varsayılan Arapça
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Google Ads Management', nameAr: 'إدارة إعلانات جوجل', href: '#services' },
      { name: 'Web Design', nameAr: 'تصميم المواقع', href: '#services' },
      { name: 'SEO & Analytics', nameAr: 'تحسين محركات البحث', href: '#services' },
      { name: 'Digital Strategy', nameAr: 'الاستراتيجية الرقمية', href: '#services' },
    ],
    company: [
      { name: 'About Us', nameAr: 'من نحن', href: '#about' },
      { name: 'Our Process', nameAr: 'عمليتنا', href: '#about' },
      { name: 'Case Studies', nameAr: 'دراسات الحالة', href: '#about' },
      { name: 'Contact', nameAr: 'اتصل بنا', href: '#contact' },
    ],
    legal: [
      { name: 'Privacy Policy', nameAr: 'سياسة الخصوصية', href: '/privacy-policy' },
      { name: 'Terms of Service', nameAr: 'شروط الخدمة', href: '/terms-of-service' },
      { name: 'Cookie Policy', nameAr: 'سياسة ملفات تعريف الارتباط', href: '/cookie-policy' },
    ]
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-gray-900 text-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 space-x-reverse mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-300 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">F</span>
                </div>
                <div>
                  <span className="text-xl font-bold font-arabic">Falcon Pro</span>
                  <span className="text-sm text-primary-400 block -mt-1 font-arabic">Digital</span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed font-arabic" dir="rtl">
                {language === 'ar' 
                  ? 'خدمات إعلانات جوجل وتصميم المواقع المدفوعة بالعائد على الاستثمار للشركات الطموحة في منطقة الخليج.' 
                  : 'ROI-driven Google Ads and web design services for ambitious SMEs across the GCC region.'}
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin size={16} className="text-primary-400" />
                  <span className="text-gray-300">Riyadh, Saudi Arabia</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6 font-arabic text-right">
                {language === 'ar' ? 'الخدمات' : 'Services'}
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200 font-arabic text-right block"
                      dir="rtl"
                    >
                      {language === 'ar' ? link.nameAr : link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-6 font-arabic text-right">
                {language === 'ar' ? 'الشركة' : 'Company'}
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200 font-arabic text-right block"
                      dir="rtl"
                    >
                      {language === 'ar' ? link.nameAr : link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Social */}
            <div>
              <h3 className="text-lg font-semibold mb-6 font-arabic text-right">
                {language === 'ar' ? 'ابق على اتصال' : 'Stay Connected'}
              </h3>
              
              <p className="text-gray-300 mb-6 font-arabic text-right" dir="rtl">
                {language === 'ar' 
                  ? 'احصل على أحدث رؤى ونصائح التسويق الرقمي.' 
                  : 'Get the latest digital marketing insights and tips.'}
              </p>

              {/* Newsletter Signup */}
              <div className="mb-6" dir="rtl">
                <div className="flex flex-row-reverse">
                  <input
                    type="email"
                    placeholder={language === 'ar' ? 'عنوان بريدك الإلكتروني' : 'Your email address'}
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-r-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400 font-arabic text-right"
                  />
                  <button className="px-6 py-3 bg-primary-500 hover:bg-primary-600 rounded-l-lg transition-colors duration-200">
                    <Mail size={20} />
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm font-arabic text-right">
              {language === 'ar' 
                ? `© {currentYear} فالكون برو ديجيتال. جميع الحقوق محفوظة.`
                : `© {currentYear} Falcon Pro Digital. All rights reserved.`}
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 space-x-reverse">
              {footerLinks.legal.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm font-arabic"
                >
                  {language === 'ar' ? link.nameAr : link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-gray-500 text-xs text-center font-arabic" dir="rtl">
              <strong>{language === 'ar' ? 'إخلاء مسؤولية:' : 'Disclaimer:'}</strong> 
              {language === 'ar' 
                ? 'نحن لسنا شريكاً رسمياً لجوجل. نحن وكالة تسويق رقمي مستقلة متخصصة في إدارة إعلانات جوجل وخدمات تصميم المواقع. جميع العلامات التجارية وأسماء العلامات هي ملكية لأصحابها المعنيين.' 
                : 'We are not an official Google Partner. We are an independent digital marketing agency specializing in Google Ads management and web design services. All trademarks and brand names are the property of their respective owners.'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
