import React from 'react';
import { Phone, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <motion.section 
      id="contact" 
      className="bg-gray-50 py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl lg:text-5xl font-normal text-gray-900 mb-4">
            Contact
          </h2>
          <p className="font-sans text-lg text-gray-600 font-light max-w-2xl mx-auto">
            Get in touch for a free, no-obligation quotation.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <motion.a 
                href="tel:07577649245" 
                className="font-sans inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-4 border border-transparent text-lg sm:text-xl font-medium rounded-md text-white bg-[#48487F] hover:bg-[#3a3a66] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 mr-3" />
                Call 07577 649245
              </motion.a>
              <p className="font-sans text-gray-500 font-light pt-2">
                Available Mon - Sat for a friendly chat about your project.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm max-w-sm mx-auto">
              <h3 className="font-serif text-xl font-medium text-gray-900 mb-4 flex items-center justify-center">
                <Clock className="w-5 h-5 text-gray-400 mr-2" />
                Opening Hours
              </h3>
              <div className="font-sans space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="text-gray-900 font-medium">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="text-gray-900 font-medium">8:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="text-gray-900 font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </motion.section>
  );
}