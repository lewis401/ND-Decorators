
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import StaticImageSection from '../components/StaticImageSection';
import GallerySection from '../components/GallerySection';
import WorkCarousel from '../components/WorkCarousel';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import AboutSection from '../components/AboutSection';
import ServiceAreasSection from '../components/ServiceAreasSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navHeight = 96; // Increased offset to account for navbar + spacing
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const menuItems = [
    { href: '#gallery', text: 'Gallery' },
    { href: '#services', text: 'Services' },
    { href: '#reviews', text: 'Reviews' },
    { href: '#about', text: 'About' },
    { href: '#contact', text: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap');
        
        .font-serif {
          font-family: 'Crimson Text', serif;
        }
        
        .font-sans {
          font-family: 'Inter', sans-serif;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 font-sans fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a 
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              }}
              className="text-xl font-serif font-semibold text-gray-900 hover:text-[#48487F] transition-colors cursor-pointer"
            >
              N D Decorators
            </a>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  onClick={(e) => handleSmoothScroll(e, item.href.substring(1))}
                  className="text-gray-600 hover:text-[#48487F] transition-colors font-normal text-sm"
                >
                  {item.text}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setMobileMenuOpen(true)}
                className="text-gray-600 hover:text-gray-900 transition-colors"
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.div
                  animate={mobileMenuOpen ? { rotate: 180 } : { rotate: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <motion.div 
              className="fixed inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div 
              className="fixed top-0 right-0 bottom-0 w-64 bg-white/95 backdrop-blur-md shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <motion.span 
                  className="font-serif text-lg font-semibold text-gray-900"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  Menu
                </motion.span>
                <motion.button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>
              <div className="py-6">
                {menuItems.map((item, index) => (
                  <motion.a 
                    key={item.href}
                    href={item.href} 
                    onClick={(e) => handleSmoothScroll(e, item.href.substring(1))}
                    className="block px-6 py-3 text-gray-700 hover:text-[#48487F] hover:bg-gray-50 transition-colors font-normal"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: 0.1 + (index * 0.05), 
                      duration: 0.3,
                      ease: "easeOut"
                    }}
                  >
                    {item.text}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Add padding to account for fixed navbar */}
      <div className="pt-16">
        <main>
          <HeroSection />
          <StaticImageSection />
          <GallerySection />
          <WorkCarousel />
          <ServicesSection />
          <TestimonialsSection />
          <AboutSection />
          <ServiceAreasSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}
