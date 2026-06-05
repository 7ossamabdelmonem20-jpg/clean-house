'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { TESTIMONIALS } from '@/constants';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-white" aria-label="آراء العملاء">
      <div className="container-custom">
        <SectionHeader
          badge="آراء عملائنا"
          title="ماذا يقول"
          highlight="عملاؤنا؟"
          subtitle="آراء حقيقية من عملائنا المميزين في مختلف مدن المملكة العربية السعودية"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card p-6 relative"
            >
              {/* Quote icon */}
              <Quote size={32} className="text-blue-100 absolute top-6 left-6" aria-hidden />

              {/* Stars */}
              <div className="flex gap-1 mb-4" role="img" aria-label={`تقييم ${t.rating} من 5 نجوم`}>
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} size={16} className="text-yellow-400" fill="currentColor" />
                ))}
              </div>

              {/* Review text */}
              <blockquote className="text-gray-700 leading-relaxed mb-5 text-sm relative z-10">
                "{t.text}"
              </blockquote>

              {/* Service badge */}
              <span className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold py-1 px-3 rounded-full mb-4">
                {t.service}
              </span>

              {/* Customer */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center text-white font-bold">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs flex items-center gap-1">
                    📍 {t.city}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Overall rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-100"
        >
          <div className="flex justify-center gap-1 mb-3">
            {[1,2,3,4,5].map((s) => (
              <Star key={s} size={28} className="text-yellow-400" fill="currentColor" />
            ))}
          </div>
          <div className="text-5xl font-black text-gray-900 mb-2">٤.٩</div>
          <p className="text-gray-600">متوسط التقييم من أكثر من <strong>١,٢٥٠</strong> تقييم موثق</p>
        </motion.div>
      </div>
    </section>
  );
}
