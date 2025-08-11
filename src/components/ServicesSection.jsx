
import React from 'react';
import { motion } from 'framer-motion';

export default function ServicesSection() {
  return (
    <motion.section 
      id="services" 
      className="bg-gray-50 py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-normal text-gray-900 mb-4">
            Services
          </h2>
          <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            We provide a complete range of painting and decorating services for homes 
            throughout West Norwood, Streatham and surrounding areas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-medium text-gray-900 mb-3">Interior Painting</h3>
              <p className="font-sans text-gray-600 leading-relaxed font-light">
                Complete interior painting services including walls, ceilings, woodwork, 
                and trim. We use only premium quality paints and take pride in our 
                preparation and finish.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-medium text-gray-900 mb-3">Exterior Painting</h3>
              <p className="font-sans text-gray-600 leading-relaxed font-light">
                Protect and enhance your property with our exterior painting services. 
                We handle all aspects from surface preparation to final coating using 
                weather-resistant materials.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-medium text-gray-900 mb-3">Wallpapering</h3>
              <p className="font-sans text-gray-600 leading-relaxed font-light">
                Expert wallpaper hanging and removal services. From feature walls to 
                complete rooms, we ensure perfect pattern matching and clean edges.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-medium text-gray-900 mb-3">Property Maintenance</h3>
              <p className="font-sans text-gray-600 leading-relaxed font-light">
                General decorating maintenance including touch-ups, minor repairs, 
                filling and sanding. Keeping your property looking its best year round.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
