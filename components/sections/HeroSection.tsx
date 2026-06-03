'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Star, CheckCircle2, ChevronDown } from 'lucide-react';
import { SITE_CONFIG } from '@/constants';

const badges = [
  { icon: '⭐', text: '٤.٩ تقييم عملاء' },
  { icon: '✅', text: 'معتمدون رسمياً' },
  { icon: '⚡', text: 'خدمة فورية ٢٤/٧' },
];

const stats = [
  { value: '+١٥,٠٠٠', label: 'عميل راضٍ' },
  { value: '+٩', label: 'سنوات خبرة' },
  { value: '+٥٠,٠٠٠', label: 'خدمة منجزة' },
];

export default function HeroSection() {
  const scroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen hero-gradient overflow-hidden flex items-center" aria-label="القسم الرئيسي">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 pattern-bg opacity-20" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {badges.map((b, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm py-1.5 px-4 rounded-full font-medium"
                >
                  <span>{b.icon}</span> {b.text}
                </motion.span>
              ))}
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              أفضل شركة{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-cyan-300 to-blue-300">
                تنظيف احترافي
              </span>{' '}
              في السعودية
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-blue-100 text-lg leading-relaxed mb-8"
            >
              كلين هاوس – خبراء تنظيف المكيفات، الكنب، السجاد، والخزانات. نستخدم أحدث تقنيات التنظيف بالبخار مع ضمان شامل.
              خدمة فورية في الرياض، جدة، الدمام وجميع مناطق المملكة.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 gap-3 mb-8"
            >
              {['تنظيف بالبخار المعقم', 'فريق محترف ومدرب', 'مواد آمنة للأسرة', 'ضمان الخدمة كاملاً'].map((f) => (
                <div key={f} className="flex items-center gap-2 text-white/90 text-sm">
                  <CheckCircle2 size={16} className="text-green-400 flex-shrink-0" />
                  {f}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a href={SITE_CONFIG.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base shadow-glow-green">
                <MessageCircle size={20} />
                اطلب الخدمة الآن
              </a>
              <a href={SITE_CONFIG.tel} className="btn-secondary text-base border-white/50 text-white hover:bg-white hover:text-blue-800">
                <Phone size={20} />
                {SITE_CONFIG.phoneFormatted}
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex gap-8 border-t border-white/20 pt-8"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-black text-white">{s.value}</div>
                  <div className="text-blue-200 text-sm">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Decorative rings */}
              <div className="absolute inset-0 border-2 border-white/10 rounded-full animate-spin-slow" />
              <div className="absolute inset-8 border-2 border-blue-400/20 rounded-full" />

              {/* Main image — فريق تنظيف احترافي بالزي الموحد */}
              <div className="absolute inset-12 rounded-full overflow-hidden shadow-2xl shadow-blue-900/50 border-4 border-white/20">
                <Image
                  src="/images/heroimage/hero.jpg"
                  alt="فريق كلين هاوس للتنظيف الاحترافي في السعودية"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute top-8 -right-8 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <Star className="text-yellow-500" size={20} fill="currentColor" />
                </div>
                <div>
                  <p className="font-black text-gray-900 text-sm">٤.٩ / ٥</p>
                  <p className="text-gray-500 text-xs">+١٢٥٠ تقييم</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 1 }}
                className="absolute bottom-12 -left-10 bg-white rounded-2xl shadow-xl p-4"
              >
                <p className="text-xs text-gray-500 mb-1">تنظيف اليوم</p>
                <p className="font-black text-green-600 text-sm flex items-center gap-1">
                  <CheckCircle2 size={14} /> تم الانتهاء ✓
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scroll('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        aria-label="التمرير لأسفل"
      >
        <span className="text-xs font-medium">اكتشف المزيد</span>
        <ChevronDown size={20} />
      </motion.button>

      {/* Wave bottom */}
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none">
        <path d="M0 60L1440 60L1440 20C1080 60 360 0 0 20L0 60Z" fill="white" />
      </svg>
    </section>
  );
}
