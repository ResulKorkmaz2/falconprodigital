'use client'

import { useState, useEffect } from 'react'
import { translations, Translation } from '@/lib/translations'

export const useTranslation = () => {
  const [currentLang, setCurrentLang] = useState<'en' | 'ar'>('en')
  const [t, setT] = useState<Translation>(translations.en)

  useEffect(() => {
    // Get initial language from localStorage or browser
    const getInitialLanguage = (): 'en' | 'ar' => {
      if (typeof window !== 'undefined') {
        const savedLang = localStorage.getItem('preferred-language')
        if (savedLang && ['en', 'ar'].includes(savedLang)) {
          return savedLang as 'en' | 'ar'
        }

        // Auto-detect from browser
        const browserLang = navigator.language || navigator.languages?.[0] || 'en'
        const arabicLanguages = [
          'ar', 'ar-SA', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG', 'ar-IQ', 
          'ar-JO', 'ar-KW', 'ar-LB', 'ar-LY', 'ar-MA', 'ar-OM', 
          'ar-QA', 'ar-SD', 'ar-SY', 'ar-TN', 'ar-YE'
        ]
        
        const isArabic = arabicLanguages.some(lang => 
          browserLang.toLowerCase().startsWith(lang.toLowerCase())
        )
        
        return isArabic ? 'ar' : 'en'
      }
      return 'en'
    }

    const initialLang = getInitialLanguage()
    setCurrentLang(initialLang)
    setT(translations[initialLang])

    // Listen for language changes
    const handleLanguageChange = (event: CustomEvent) => {
      const newLang = event.detail.language as 'en' | 'ar'
      setCurrentLang(newLang)
      setT(translations[newLang])
    }

    window.addEventListener('languageChanged', handleLanguageChange as EventListener)

    return () => {
      window.removeEventListener('languageChanged', handleLanguageChange as EventListener)
    }
  }, [])

  const changeLanguage = (lang: 'en' | 'ar') => {
    setCurrentLang(lang)
    setT(translations[lang])
    
    // Apply RTL/LTR to document
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang === 'ar' ? 'ar-SA' : 'en-US'
    
    // Update body class for CSS targeting
    document.body.classList.remove('lang-en', 'lang-ar')
    document.body.classList.add(`lang-${lang}`)
    
    // Store language preference in localStorage
    localStorage.setItem('preferred-language', lang)
    
    // Trigger a custom event for other components to listen to
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }))
  }

  return {
    t,
    currentLang,
    changeLanguage,
    isRTL: currentLang === 'ar'
  }
}
