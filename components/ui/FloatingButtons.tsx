'use client';

import { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONFIG } from '@/constants';

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-center gap-3" role="complementary" aria-label="أزرار التواصل السريع">
      {/* WhatsApp */}
      <motion.a
        href={SITE_CONFIG.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل عبر واتساب"
        className="group relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-green-500/40 hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
        <MessageCircle size={26} />
        {/* Tooltip */}
        <span className="absolute left-full mr-0 ml-3 bg-gray-900 text-white text-xs font-semibold py-1.5 px-3 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none right-full left-auto -right-32">
          واتساب
        </span>
      </motion.a>

      {/* Phone */}
      <motion.a
        href={SITE_CONFIG.tel}
        aria-label="اتصل بنا"
        className="group flex items-center justify-center w-14 h-14 bg-blue-700 hover:bg-blue-800 text-white rounded-full shadow-lg hover:shadow-blue-700/40 hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
      >
        <Phone size={24} />
        <span className="absolute right-full mr-3 bg-gray-900 text-white text-xs font-semibold py-1.5 px-3 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none -right-28 left-auto">
          اتصل الآن
        </span>
      </motion.a>

      {/* Scroll To Top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            onClick={scrollTop}
            aria-label="العودة للأعلى"
            className="flex items-center justify-center w-11 h-11 bg-gray-700 hover:bg-gray-800 text-white rounded-full shadow-md transition-all duration-300"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
