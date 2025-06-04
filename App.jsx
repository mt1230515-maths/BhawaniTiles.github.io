
import React, { useCallback, useEffect } from 'react';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProductsSection from '@/components/ProductsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const App = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const revealElementsOnScroll = useCallback(() => {
    const reveals = document.querySelectorAll('.scroll-reveal');
    reveals.forEach(reveal => {
      const windowHeight = window.innerHeight;
      const elementTop = reveal.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveal.classList.add('revealed');
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', revealElementsOnScroll);
    revealElementsOnScroll(); 
    return () => window.removeEventListener('scroll', revealElementsOnScroll);
  }, [revealElementsOnScroll]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Toaster />
      <Navbar scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection />
      <ProductsSection scrollToSection={scrollToSection} />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;