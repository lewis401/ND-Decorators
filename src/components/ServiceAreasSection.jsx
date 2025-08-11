import React from 'react';
import { motion } from 'framer-motion';

export default function ServiceAreasSection() {
  const serviceAreas = [
    'West Norwood',
    'Streatham', 
    'Streatham Hill',
    'Tulse Hill',
    'Crystal Palace',
    'Upper Norwood',
    'South Norwood',
    'Dulwich',
    'Herne Hill'
  ];

  return (
    <motion.section 
      className="bg-white py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-4xl lg:text-5xl font-normal text-gray-900 mb-4">
            Service Areas
          </h2>
          <p className="font-sans text-lg text-gray-600 font-light mb-12">
            Professional painting and decorating throughout South London
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-10">
            {serviceAreas.map((area, index) => (
              <div 
                key={index}
                className="font-sans text-gray-700 font-light py-3 px-6 bg-gray-100 rounded-lg border border-gray-200 text-base"
              >
                {area}
              </div>
            ))}
          </div>
          
          <p className="font-sans text-gray-500 leading-relaxed font-light text-base max-w-3xl mx-auto">
            We provide professional painting and decorating services throughout these South London areas. 
            If your location isn't listed, please get in touch as we may still be able to help.
          </p>
        </div>
      </div>
    </motion.section>
  );
}