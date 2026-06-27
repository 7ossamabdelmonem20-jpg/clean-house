'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, CheckCircle2, ChevronDown, Star, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '@/constants';

const highlights = [
  'تنظيف بالبخار المعقم',
  'فريق محترف ومدرب',
  'مواد آمنة للأسرة',
  'ضمان الخدمة كاملاً',
];

const stats = [
  { value: '+١٥,٠٠٠', label: 'عميل راضٍ' },
  { value: '+٩',       label: 'سنوات خبرة' },
  { value: '+٥٠,٠٠٠', label: 'خدمة منجزة' },
];

export default function HeroSection() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="القسم الرئيسي"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/heroimage/hero.jpg"
          alt="فريق كلين هاوس Clean House KSA للتنظيف الاحترافي في المملكة العربية السعودية"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Design System overlay: dark navy → primary blue → teal */}
        <div className="absolute inset-0 hero-overlay" />
        {/* subtle dot pattern on top */}
        <div className="absolute inset-0 pattern-bg opacity-25" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-28 pb-20">
        <div className="max-w-3xl">

          {/* Brand tag */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-7"
          >
            <span className="inline-flex items-center gap-2 bg-white/15 border border-white/30 backdrop-blur-sm text-white text-xs font-semibold py-1.5 px-4 rounded-full">
              <Sparkles size={13} className="text-teal-300" />
              Clean House KSA · cleanhouseksa
            </span>
            <span className="hidden sm:flex items-center gap-1.5 bg-accent-500/20 border border-accent-400/40 text-accent-300 text-xs font-semibold py-1.5 px-3 rounded-full">
              <Star size={11} fill="currentColor" /> ٤.٩ تقييم عملاء
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] mb-6"
          >
            <span className="text-white">كلين هاوس</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-teal-300 to-primary-300">
              Clean House
            </span>
            <br />
            أفضل شركة تنظيف في المملكة العربية السعودية
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white/80 text-lg leading-relaxed mb-8 max-w-xl"
          >
            {SITE_CONFIG.name} — خبراء تنظيف المكيفات، الكنب، السجاد، والخزانات بأحدث تقنيات البخار. خدمة فورية في الرياض، جدة، الدمام وجميع مناطق المملكة.
          </motion.p>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="grid grid-cols-2 gap-2.5 mb-9 max-w-sm"
          >
            {highlights.map((h) => (
              <div key={h} className="flex items-center gap-2 text-white/85 text-sm">
                <CheckCircle2 size={15} className="text-teal-300 flex-shrink-0" />
                {h}
              </div>
            ))}
          </motion.div>

          {/* CTAs – Design System: rounded-xl */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            <a
              href={SITE_CONFIG.whatsapp}
              target="_blank" rel="noopener noreferrer"
              className="btn-whatsapp text-base shadow-glow-green"
            >
              <MessageCircle size={19} />
              اطلب الخدمة الآن
            </a>
            <a
              href={SITE_CONFIG.tel}
              className="flex items-center gap-2 bg-white/15 border border-white/35 backdrop-blur-sm text-white font-semibold py-3 px-6 rounded-xl hover:bg-white/25 transition-all duration-200 text-base"
            >
              <Phone size={18} />
              {SITE_CONFIG.phoneFormatted}
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex gap-8 border-t border-white/15 pt-8"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-black text-white">{s.value}</div>
                <div className="text-white/60 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => scrollTo('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/50 hover:text-white transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.2 }}
        aria-label="التمرير لأسفل"
      >
        <span className="text-xs font-medium">اكتشف المزيد</span>
        <ChevronDown size={18} />
      </motion.button>

      {/* Bottom wave */}
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 56" fill="none" preserveAspectRatio="none">
        <path d="M0 56L1440 56L1440 18C1080 56 360 0 0 18L0 56Z" fill="white" />
      </svg>
    </section>
  );
}
