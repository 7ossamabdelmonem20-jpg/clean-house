'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import { WHY_CHOOSE_US, SITE_CONFIG } from '@/constants';
import { MessageCircle } from 'lucide-react';

export default function WhyUsSection() {
  return (
    <section className="section-padding bg-white" aria-label="لماذا تختارنا">
      <div className="container-custom">
        <SectionHeader
          badge="لماذا كلين هاوس؟"
          title="الخيار الأول"
          highlight="لأكثر من ١٥,٠٠٠ عميل"
          subtitle="نتميز بالجودة والاحترافية والأمانة في تقديم خدمات التنظيف الاحترافي في جميع مدن المملكة العربية السعودية"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {WHY_CHOOSE_US.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card p-6 group cursor-default"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                {item.icon}
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 pattern-bg opacity-10" />
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
              جاهز لتجربة التنظيف الاحترافي؟
            </h3>
            <p className="text-blue-200 mb-8 text-lg">
              تواصل معنا الآن واحصل على عرض سعر مجاني خلال دقائق
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={SITE_CONFIG.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <MessageCircle size={20} />
                تواصل عبر واتساب
              </a>
              <a href={SITE_CONFIG.tel} className="bg-white text-blue-800 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
                📞 اتصل بنا الآن
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
