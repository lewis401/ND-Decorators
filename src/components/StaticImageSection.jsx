import React from 'react';
import { motion } from 'framer-motion';

export default function StaticImageSection() {
  return (
    <motion.section 
      id="work" 
      className="bg-white pb-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <div className="px-0 md:max-w-6xl md:mx-auto md:px-4 sm:md:px-6 lg:md:px-8">
        <div className="aspect-video w-full overflow-hidden md:rounded-lg md:shadow-xl">
          <motion.img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/b6717e621_2023-03-24.jpg" 
            alt="Beautifully painted yellow staircase" 
            className="w-full h-full object-cover" 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, delay: 0.9 }}
          />
        </div>
      </div>
    </motion.section>
  );
}