"use client";

import { motion } from "framer-motion";
import { Star, Quote, MapPin } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { TESTIMONIALS } from "@/constants";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-white" aria-label="آراء العملاء">
      <div className="container-custom">
        <SectionHeader
          badge="آراء عملائنا"
          title="ماذا يقول"
          highlight="عملاؤنا؟"
          subtitle="آراء حقيقية من عملائنا المميزين في مختلف مدن المملكة العربية السعودية"
          badgeVariant="teal"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-[#F8FAFC] hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-card rounded-2xl p-6 relative transition-all duration-300 group"
            >
              {/* Quote decoration */}
              <Quote size={28} className="text-teal-100 absolute top-5 left-5 group-hover:text-teal-200 transition-colors" aria-hidden />

              {/* Stars */}
              <div className="flex gap-1 mb-4" role="img" aria-label={`تقييم ${t.rating} من 5 نجوم`}>
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} size={15} className="text-amber-400" fill="currentColor" />
                ))}
              </div>

              {/* Review */}
              <blockquote className="text-slate-700 leading-relaxed mb-4 text-sm relative z-10">
                "{t.text}"
              </blockquote>

              {/* Service tag */}
              <span className="inline-block bg-teal-50 text-teal-600 text-xs font-semibold py-1 px-3 rounded-full mb-4 border border-teal-100">
                {t.service}
              </span>

              {/* Customer */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs flex items-center gap-1"><MapPin size={11} strokeWidth={2} />{t.city}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Overall rating */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center bg-[#F8FAFC] rounded-3xl p-8 border border-slate-100"
        >
          <div className="flex justify-center gap-1 mb-3">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={26} className="text-amber-400" fill="currentColor" />
            ))}
          </div>
          <div className="text-5xl font-black text-slate-900 mb-2">٤.٩</div>
          <p className="text-slate-500 text-sm">متوسط التقييم من أكثر من ١٢٥٠ عميل في المملكة العربية السعودية</p>
        </motion.div>
      </div>
    </section>
  );
}
