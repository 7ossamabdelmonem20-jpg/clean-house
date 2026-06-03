import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/ui/FloatingButtons';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import StatsSection from '@/components/sections/StatsSection';
import ServicesCardsSection from '@/components/sections/ServicesCardsSection';
import WhyUsSection from '@/components/sections/WhyUsSection';
import BeforeAfterSection from '@/components/sections/BeforeAfterSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FAQSection from '@/components/sections/FAQSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <ServicesCardsSection />
        <WhyUsSection />
        <BeforeAfterSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
