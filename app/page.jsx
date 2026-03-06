import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import FeaturedDishes from '../components/FeaturedDishes'
import MenuSection from '../components/MenuSection'
import AboutSection from '../components/AboutSection'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F5EFE0] selection:bg-orange-100 selection:text-orange-900">
      <div className="bg-[#2D4A35] text-white text-center py-2.5 px-4 sm:px-6 text-xs sm:text-sm">
        🎉 <strong className="text-[#D4A843]">Now Open Sundays!</strong> Join us for our weekend Afro-Brunch — 1pm to 5pm.{' '}
        <a href="#contact" className="text-[#D4A843] underline hover:text-[#C49530]">Book your table →</a>
      </div>
      <Header />
      <main>
        <HeroSection />
        <FeaturedDishes />
        <MenuSection />
        <AboutSection />
        <Gallery />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
