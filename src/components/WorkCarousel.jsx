
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

const images = [
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/b170f45c6_1.png',
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/ecc7a8ef1_2.png',
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/a14772f66_3.png',
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/e19210b3d_4.png',
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/ebd05a47d_5.png',
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/e6021877d_6.png',
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/216b42c86_7.png',
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/a46ebc33e_8.png',
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/c7c4c5e75_9.png',
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/3ffa3545c_10.png',
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/5560b0d45_11.png',
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/e777ca4f4_12.png',
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6609d575a_13.png',
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6e73bef7c_14.png',
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/cddff42df_15.png',
];

const galleryVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function WorkCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const imagesPerView = isMobile ? 1 : 3;

  const paginate = (newDirection) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + newDirection;
      const lastPossibleIndex = images.length - imagesPerView;

      // Clamp the index to prevent scrolling into empty space
      if (newIndex < 0) return 0;
      if (newIndex > lastPossibleIndex) return lastPossibleIndex;

      return newIndex;
    });
  };

  const paginateGallery = (newDirection) => {
    setGalleryIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection;
      if (newIndex < 0) {
        newIndex = images.length - 1;
      } else if (newIndex >= images.length) {
        newIndex = 0;
      }
      return newIndex;
    });
  };

  const openGallery = (imageIndex) => {
    setGalleryIndex(imageIndex);
    setGalleryOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setGalleryOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <motion.section
        className="bg-white pb-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="overflow-hidden relative h-72 md:h-96">
            <motion.div
              className="flex h-full"
              style={{ gap: isMobile ? '0rem' : '1rem' }} // Corresponds to Tailwind's `gap-4`
              animate={{
                x: isMobile 
                  ? `calc(-${currentIndex * 100}%)`
                  : `calc(-${currentIndex * (100 / imagesPerView)}% - ${currentIndex} * 1rem)`,
              }}
              transition={{ type: 'tween', ease: 'easeInOut', duration: 0.8 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipeThreshold = 50;
                if (offset.x < -swipeThreshold) {
                  paginate(1);
                } else if (offset.x > swipeThreshold) {
                  paginate(-1);
                }
              }}
            >
              {images.map((imgSrc, i) => (
                <div
                  key={i}
                  className={`${
                    isMobile 
                      ? 'w-full' 
                      : 'w-[calc((100%-2rem)/3)]'
                  } flex-shrink-0 h-full rounded-lg overflow-hidden shadow-lg relative group cursor-pointer`}
                  onClick={() => openGallery(i)}
                >
                  <img
                    src={imgSrc}
                    alt={`Professional painting and decorating work ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <button
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md z-10 transition-transform transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => paginate(-1)}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md z-10 transition-transform transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => paginate(1)}
            disabled={currentIndex === images.length - imagesPerView}
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </motion.section>

      {/* Full Screen Gallery Overlay */}
      <AnimatePresence>
        {galleryOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeGallery}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-10"
              onClick={closeGallery}
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Gallery Container */}
            <div
              className="relative max-w-4xl max-h-[80vh] w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={galleryIndex}
                  src={images[galleryIndex]}
                  alt={`Professional painting and decorating work ${galleryIndex + 1}`}
                  className="block max-w-full max-h-full object-contain rounded-lg"
                  variants={galleryVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                />
              </AnimatePresence>

              {/* Navigation Buttons */}
              <button
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-20"
                onClick={() => paginateGallery(-1)}
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-20"
                onClick={() => paginateGallery(1)}
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-medium z-30">
              {galleryIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
