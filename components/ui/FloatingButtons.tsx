'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { SITE_CONFIG } from '@/constants';

export default function FloatingButtons() {
  return (
    <div
      className="fixed bottom-5 right-4 z-50 flex items-center gap-3 sm:gap-4"
      role="complementary"
      aria-label="أزرار التواصل السريع"
    >
      <motion.a
        href={SITE_CONFIG.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل عبر واتساب"
        className="group inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-500 text-white shadow-2xl shadow-slate-950/20 transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <span className="sr-only">واتساب</span>
        <MessageCircle size={24} className="relative z-10" />
      </motion.a>

      <motion.a
        href={SITE_CONFIG.tel}
        aria-label="اتصل بنا"
        className="group inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-700 text-white shadow-2xl shadow-slate-950/20 transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <span className="sr-only">اتصل بنا</span>
        <Phone size={24} className="relative z-10" />
      </motion.a>
    </div>
  );
}
