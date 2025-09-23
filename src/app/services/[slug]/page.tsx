import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SERVICES, COMPANY_INFO } from '@/lib/constants'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/layout/WhatsAppFloat'
import Container from '@/components/ui/Container'

interface PageProps {
  params: { slug: string }
}

// Static generation for all services
export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.id,
  }))
}

// Dynamic metadata generation
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = SERVICES.find(s => s.id === params.slug)
  
  if (!service) {
    return { title: 'الخدمة غير موجودة - فالكون برو ديجيتال' }
  }

  return {
    title: `${service.title} | فالكون برو ديجيتال`,
    description: `${service.description}. ${service.titleEnglish} احترافي من فالكون برو ديجيتال في منطقة الخليج.`,
    keywords: [
      service.title,
      service.titleEnglish,
      'فالكون برو ديجيتال',
      'Falcon Pro Digital',
      'التسويق الرقمي',
      'Digital Marketing',
      'السعودية',
      'الإمارات',
      'قطر',
      'الكويت'
    ],
  }
}

export default function ServicePage({ params }: PageProps) {
  const service = SERVICES.find(s => s.id === params.slug)
  
  if (!service) {
    notFound()
  }

  // Generate WhatsApp URLs
  const whatsappContactUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    `السلام عليكم! أريد الاستفسار عن خدمة ${service.title}`
  )}`
  
  const whatsappQuoteUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    `السلام عليكم! أريد عرض سعر مفصل لخدمة ${service.title}`
  )}`

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
        <Container>
          <div className="text-center text-white max-w-4xl mx-auto">
            {/* Service Icon */}
            <div className="text-6xl mb-6">
              {service.icon}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              {service.title}
            </h1>

            {/* Description */}
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              {service.description}
            </p>
                
            {service.popular && (
              <div className="bg-accent-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                ⭐ الأكثر طلباً
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              ما يشمله {service.title}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-start p-6 bg-white rounded-xl shadow-sm">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{feature}</h3>
                    <p className="text-gray-600 text-sm">خدمة احترافية متكاملة تضمن تحقيق أفضل النتائج لعملك</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              جاهز لبدء مشروعك؟
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              تواصل معنا الآن واحصل على استشارة مجانية وعرض سعر مخصص لاحتياجاتك
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappContactUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white rounded-xl font-bold text-lg transition-all duration-300"
              >
                تواصل معنا الآن
              </a>
              
              <a
                href={whatsappQuoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-primary-600 rounded-xl font-bold text-lg transition-all duration-300"
              >
                احصل على عرض سعر
              </a>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
