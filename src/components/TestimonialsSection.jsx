
import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Zipo Mangaliso',
    initials: 'ZM',
    rating: 5,
    year: '2025',
    text: 'Amazing service from the start from N D Decorators, Nick was helpful and friendly on the phone, came in and done a thorough inspection then provided a fair and reasonable quotation for decorating 3 rooms in my flat. Was very impressed by the job done even, all very neat and crucially done within 3/4 days. I couldn\'t have asked for a better experience, I would use his services again at a heartbeat and I\'d recommend everyone in south London to do so.',
  },
  {
    name: 'L.James',
    initials: 'LJ',
    rating: 5,
    year: '2025',
    text: 'Nick came recommended by a friend for good quality painting and decorating in South East London... and he lived up to the praise. Very easy to communicate with, very knowledge and very skilled in his work. Nick did an amazing job with our bathroom and we will be using him again for any future jobs. Thanks again Nick.',
  },
  {
    name: 'Susie Valenzuela',
    initials: 'SV',
    rating: 5,
    year: '2024',
    text: 'I have used Nick over the years for both Internal and External work. Recently he has just renovated my loft extension and as always has done a beautiful job. Thanks Nick. Highly recommend your work.',
  },
  {
    name: 'Mary Burke',
    initials: 'MB',
    rating: 5,
    year: '2024',
    text: 'We had Nick do a kitchen refresh. Ceiling next to the extractor fan was marked. We had some damp on a wall which Nick has treated for us. The kitchen is now looking really clean and bright. This is the second time we have used Nick. Once again I would highly recommend this company.',
  },
];

export default function TestimonialsSection() {
  return (
    <motion.section 
      id="reviews" 
      className="bg-white py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-normal text-gray-900 mb-4">
            Customer Reviews
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="font-sans text-lg font-medium text-gray-700 ml-2">5.0 out of 5</span>
          </div>
          <p className="font-sans text-lg text-gray-600 font-light leading-relaxed">
            Based on reviews from our satisfied customers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 p-8 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Review text */}
              <p className="font-sans text-gray-700 leading-relaxed font-light mb-6">
                "{testimonial.text}"
              </p>

              {/* Customer info */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#48487F] rounded-full flex items-center justify-center">
                  <span className="font-sans text-white font-medium text-sm">{testimonial.initials}</span>
                </div>
                <div>
                  <h4 className="font-sans font-medium text-gray-900">{testimonial.name}</h4>
                  <p className="font-sans text-sm text-gray-500 font-light">{testimonial.year}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center mt-12">
          <a 
            href="https://share.google/UzQAPMovdetLgocht" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-sans inline-flex items-center gap-2 text-[#48487F] hover:text-[#3a3a66] transition-colors font-medium"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            View all Google Reviews
          </a>
        </div>
      </div>
    </motion.section>
  );
}
