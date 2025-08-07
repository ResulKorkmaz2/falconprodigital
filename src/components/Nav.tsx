'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Globe } from 'lucide-react'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [language, setLanguage] = useState('ar') // Varsayılan Arapça

  const navItems = [
    { href: '/', label: language === 'ar' ? 'الرئيسية' : 'Home' },
    { href: '/#services', label: language === 'ar' ? 'الخدمات' : 'Services' },
    { href: '/#about', label: language === 'ar' ? 'من نحن' : 'About' },
    { href: '/#contact', label: language === 'ar' ? 'اتصل بنا' : 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 order-2">
            <Link href="/" className="flex items-center space-x-2 space-x-reverse">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-300 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">ف</span>
              </div>
              <span className="font-bold text-xl text-gray-900 font-arabic">فالكون برو ديجيتال</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block order-1">
            <div className="mr-10 flex items-baseline space-x-8 space-x-reverse">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-gray-50 rounded-md font-arabic"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Left side items - Arabic RTL */}
          <div className="hidden md:flex items-center space-x-4 space-x-reverse order-3">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-500 rounded-md hover:bg-gray-50 transition-colors duration-200"
            >
              <Globe size={16} className="ml-1" />
              <span className="font-arabic">{language === 'ar' ? 'English' : 'عربي'}</span>
            </button>
            
            <Link
              href="https://wa.me/46724003075?text=مرحباً! أريد الحصول على تدقيق مجاني للتسويق الرقمي"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center space-x-2 space-x-reverse font-arabic"
            >
              <span className="mr-1">📱</span>
              <span>واتساب</span>
            </Link>
            <Link
              href="#contact"
              className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 font-arabic"
            >
              تدقيق مجاني
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2 space-x-reverse order-1">
            <button
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="flex items-center px-2 py-1 text-sm font-medium text-gray-700 hover:text-primary-500 rounded-md"
            >
              <Globe size={16} className="ml-1" />
              <span className="font-arabic">{language === 'ar' ? 'EN' : 'عر'}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-500 focus:outline-none focus:text-primary-500 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100" dir="rtl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-primary-500 block px-3 py-2 text-base font-medium hover:bg-gray-50 rounded-md font-arabic text-right"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 pb-2 space-y-2">
              <Link
                href="https://wa.me/46724003075?text=مرحباً! أريد الحصول على تدقيق مجاني للتسويق الرقمي"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white block px-3 py-2 rounded-lg text-base font-medium text-center font-arabic"
                onClick={() => setIsOpen(false)}
              >
                واتساب 📱
              </Link>
              <Link
                href="/#contact"
                className="bg-primary-500 hover:bg-primary-600 text-white block px-3 py-2 rounded-lg text-base font-medium text-center font-arabic"
                onClick={() => setIsOpen(false)}
              >
                تدقيق مجاني
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Nav
