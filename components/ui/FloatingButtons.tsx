'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { SITE_CONFIG } from '@/constants';

export default function FloatingButtons() {
  return (
    <div
      className="fixed bottom-5 right-4 z-50 flex items-center gap-3"
      role="complementary"
      aria-label="أزرار التواصل السريع"
    >
      <motion.a
        href={SITE_CONFIG.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل عبر واتساب"
        className="inline-flex items-center justify-center w-13 h-13 w-[52px] h-[52px] rounded-2xl bg-accent-500 text-white shadow-glow-green transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent-300"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <span className="sr-only">واتساب</span>
        <MessageCircle size={22} />
      </motion.a>

      <motion.a
        href={SITE_CONFIG.tel}
        aria-label="اتصل بنا"
        className="inline-flex items-center justify-center w-[52px] h-[52px] rounded-2xl bg-primary-500 text-white shadow-glow transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary-300"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <span className="sr-only">اتصل بنا</span>
        <Phone size={22} />
      </motion.a>
    </div>
  );
}
