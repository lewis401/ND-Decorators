import React from 'react';
import { motion } from 'framer-motion';

export default function GallerySection() {
  return (
    <motion.section 
      id="gallery" 
      className="bg-white py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-4xl lg:text-5xl font-normal text-gray-900">
            Gallery
          </h2>
        </div>
      </div>
    </motion.section>
  );
}