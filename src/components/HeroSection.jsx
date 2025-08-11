import React from 'react';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 lg:py-32 text-center">
          <motion.h1 
            className="font-serif text-4xl sm:text-5xl lg:text-7xl font-normal text-gray-900 leading-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Professional Painting <br />
            <em className="font-light">& Decorating</em>
          </motion.h1>
          
          <motion.p 
            className="font-sans text-lg sm:text-xl lg:text-2xl text-gray-600 font-light mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Serving West Norwood & Streatham
          </motion.p>
          
          <motion.p 
            className="font-sans text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            High quality interior and exterior painting, decorating and maintenance services 
            for residential properties throughout South London.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <a 
              href="tel:07577649245" 
              className="font-sans inline-flex items-center justify-center px-8 py-3 border border-[#48487F] text-[#48487F] hover:bg-[#48487F] hover:text-white transition-colors duration-300 font-medium rounded-md w-full sm:w-auto min-w-[200px]"
            >
              <Phone className="w-5 h-5 mr-2" />
              07577 649245
            </a>
            <a 
              href="#contact" 
              className="font-sans inline-flex items-center justify-center px-8 py-3 bg-[#48487F] text-white hover:bg-[#3a3a66] transition-colors duration-300 font-medium rounded-md w-full sm:w-auto min-w-[200px]"
            >
              Get Free Quote
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}