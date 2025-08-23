import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Format price in USD with "starting from" text in Arabic
export function formatPrice(price: number): string {
  return `بدءاً من $${price.toLocaleString('en-US')}`
}

// Format WhatsApp number for display
export function formatPhoneNumber(phone: string): string {
  return phone.replace(/(\+\d{2})(\d{2})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5')
}

// Generate WhatsApp link with message
export function generateWhatsAppLink(number: string, message: string): string {
  const cleanNumber = number.replace(/[^0-9]/g, '')
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`
}

// Smooth scroll to element
export function scrollToElement(elementId: string): void {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

// Check if element is in viewport
export function isInViewport(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

// Debounce function
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

// Format Arabic text for better display
export function formatArabicText(text: string): string {
  return text
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .trim() // Remove leading and trailing spaces
}

// Generate slug from Arabic text
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[أإآ]/g, 'ا')
    .replace(/[ة]/g, 'ه')
    .replace(/[ي]/g, 'ى')
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim()
}

// Check if device is mobile
export function isMobile(): boolean {
  if (typeof window === 'undefined') return false
  return window.innerWidth < 768
}

// Get browser language
export function getBrowserLanguage(): string {
  if (typeof window === 'undefined') return 'ar'
  return navigator.language.split('-')[0] || 'ar'
}

// Convert English numbers to Arabic numbers
export function toArabicNumbers(num: string | number): string {
  const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']
  return num.toString().replace(/[0-9]/g, (digit) => arabicNumbers[parseInt(digit)])
}

// Convert Arabic numbers to English numbers
export function toEnglishNumbers(num: string): string {
  const englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']
  let result = num
  arabicNumbers.forEach((arabic, index) => {
    result = result.replace(new RegExp(arabic, 'g'), englishNumbers[index])
  })
  return result
}

// Validate Arabic text
export function isArabicText(text: string): boolean {
  const arabicRegex = /[\u0600-\u06FF\u0750-\u077F]/
  return arabicRegex.test(text)
}

// Get optimal image quality based on device
export function getImageQuality(): number {
  if (typeof window === 'undefined') return 80
  
  // Lower quality for mobile to save bandwidth
  if (window.innerWidth < 768) return 60
  
  // High quality for desktop
  return 80
}

// Intersection Observer hook for animations
export function createIntersectionObserver(
  callback: (entries: IntersectionObserverEntry[]) => void,
  options?: IntersectionObserverInit
): IntersectionObserver | null {
  if (typeof window === 'undefined') return null
  
  return new IntersectionObserver(callback, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    ...options,
  })
}

// Simple email validation (though we're not using email)
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Get current time in Gulf timezone
export function getGulfTime(): string {
  return new Intl.DateTimeFormat('ar-SA', {
    timeZone: 'Asia/Riyadh',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).format(new Date())
}


