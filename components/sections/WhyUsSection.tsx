'use client';

import { motion } from 'framer-motion';
import { Target, MessageCircle, Phone } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { WHY_CHOOSE_US, SITE_CONFIG } from '@/constants';
import { ICON_MAP } from '@/utils/iconMap';

const cardAccents = [
  'bg-primary-50 border-primary-100 text-primary-500',
  'bg-teal-50 border-teal-100 text-teal-500',
  'bg-accent-50 border-accent-100 text-accent-600',
  'bg-amber-50 border-amber-100 text-amber-500',
  'bg-violet-50 border-violet-100 text-violet-500',
  'bg-rose-50 border-rose-100 text-rose-500',
];

export default function WhyUsSection() {
  return (
    <section className="section-padding bg-white" aria-label="لماذا تختارنا">
      <div className="container-custom">
        <SectionHeader
          badge="لماذا كلين هاوس؟"
          title="الخيار الأول"
          highlight="لأكثر من ١٥,٠٠٠ عميل"
          subtitle="نتميز بالجودة والاحترافية والأمانة في تقديم خدمات التنظيف الاحترافي في جميع مدن المملكة"
          badgeVariant="primary"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = ICON_MAP[item.icon];
            const accent = cardAccents[i % cardAccents.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-[#F8FAFC] hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-card rounded-2xl p-6 transition-all duration-300 cursor-default"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 border ${accent}`}>
                  {Icon && <Icon size={22} strokeWidth={1.75} />}
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-navy-700 rounded-3xl p-8 md:p-12 text-center overflow-hidden"
        >
          <div className="absolute inset-0 pattern-bg opacity-20" />
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary-500 via-teal-400 to-accent-500 rounded-t-3xl" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-semibold py-1.5 px-4 rounded-full mb-5">
              <Target size={13} className="text-teal-300" />
              جاهز لتجربة الفرق؟
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
              جاهز لتجربة التنظيف الاحترافي؟
            </h3>
            <p className="text-primary-200 mb-8 max-w-md mx-auto">
              تواصل معنا الآن واحصل على عرض سعر مجاني خلال دقائق بدون أي التزام
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href={SITE_CONFIG.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <MessageCircle size={18} />
                تواصل عبر واتساب
              </a>
              <a href={SITE_CONFIG.tel} className="flex items-center gap-2 bg-white text-navy-700 font-bold py-3 px-7 rounded-xl hover:bg-slate-50 transition-colors">
                <Phone size={16} /> اتصل بنا الآن
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
