'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { SERVICES } from '@/constants';
import { ICON_MAP } from '@/utils/iconMap';

export default function ServicesCardsSection() {
  return (
    <section id="services" className="section-padding bg-[#F8FAFC]" aria-label="خدماتنا">
      <div className="container-custom">
        <SectionHeader
          badge="خدماتنا الاحترافية"
          title="حلول تنظيف"
          highlight="شاملة ومتكاملة"
          subtitle="اختر الخدمة التي تحتاجها واعرف كل التفاصيل — أسعار، خطوات، وضمانات"
          badgeVariant="teal"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border border-slate-100 hover:border-primary-100 h-full"
                  aria-label={`اعرف أكثر عن ${service.title}`}
                >
                  {/* Icon chip – Design System: icon on top */}
                  <div className="p-5 pb-0">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${service.bgColor} border ${service.borderColor}`}>
                      {Icon && <Icon size={26} className={service.textColor} strokeWidth={1.75} />}
                    </div>
                    <h2 className="font-black text-slate-900 text-base mb-1.5 group-hover:text-primary-600 transition-colors leading-snug">
                      {service.title}
                    </h2>
                    <p className="text-slate-500 text-xs mb-4 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Service image */}
                  <div className="relative h-36 overflow-hidden mx-5 rounded-xl">
                    <Image
                      src={service.image}
                      alt={`${service.title} - كلين هاوس في المملكة العربية السعودية`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 20vw"
                      loading="lazy"
                    />
                  </div>

                  {/* Features */}
                  <div className="px-5 py-3 flex-1">
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feat) => (
                        <li key={feat} className="flex items-center gap-2 text-xs text-slate-600">
                          <span className="w-1.5 h-1.5 bg-teal-400 rounded-full flex-shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="px-5 pb-5 pt-3 border-t border-slate-100 mt-auto">
                    <div className={`flex items-center gap-2 text-xs font-bold ${service.textColor} group-hover:gap-3 transition-all`}>
                      <Sparkles size={12} />
                      اعرف المزيد
                      <ArrowLeft size={13} className="mr-auto group-hover:-translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-slate-500 text-sm mb-4">هل تحتاج لأكثر من خدمة؟ نقدم باقات مجمّعة بأسعار مخفضة</p>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-teal text-sm"
          >
            احصل على عرض مجمّع
          </a>
        </motion.div>
      </div>
    </section>
  );
}
