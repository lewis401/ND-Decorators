
import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <motion.section 
      id="about" 
      className="bg-white pt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-normal text-gray-900 mb-4">
            About <em className="font-light">N D Decorators</em>
          </h2>
        </div>

        <div className="font-sans text-gray-600 space-y-6">
          <p className="text-xl leading-relaxed font-light">
            N D Decorators has been providing professional painting and decorating 
            services to homeowners in West Norwood, Streatham and surrounding areas 
            for over 30 years.
          </p>
          
          <p className="leading-relaxed font-light">
            We are a small, local business that takes pride in delivering high quality 
            workmanship and excellent customer service. Every project, whether large or 
            small, receives the same attention to detail and professional approach.
          </p>

          <p className="leading-relaxed font-light">
            Our services include interior and exterior painting, wallpaper hanging, 
            and general property maintenance. We use only quality materials and take 
            the time to properly prepare all surfaces to ensure a long-lasting finish.
          </p>

          <p className="leading-relaxed font-light">
            We are fully insured and provide free, no-obligation quotations. 
            All work is guaranteed and we always leave your property clean and tidy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
          <div>
            <div className="font-serif text-4xl font-normal text-gray-900 mb-2">30+</div>
            <div className="font-sans text-gray-600 font-medium">Years Experience</div>
          </div>
          <div>
            <div className="font-serif text-4xl font-normal text-gray-900 mb-2">100%</div>
            <div className="font-sans text-gray-600 font-medium">Satisfaction Guarantee</div>
          </div>
          <div>
            <div className="font-serif text-4xl font-normal text-gray-900 mb-2">Local</div>
            <div className="font-sans text-gray-600 font-medium">South London Business</div>
          </div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-t border-gray-200" />
      </div>
    </motion.section>
  );
}
