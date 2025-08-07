import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Services from '@/sections/Services'
import About from '@/sections/About'
import Contact from '@/sections/Contact'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
