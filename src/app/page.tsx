import Navigation from '@/components/layout/Navigation'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/layout/WhatsAppFloat'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Services Section */}
      <Services />
      
      {/* About Section */}
      <About />
      
      {/* Contact Section */}
      <Contact />
      
      {/* Footer */}
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <WhatsAppFloat />
    </main>
  )
}


