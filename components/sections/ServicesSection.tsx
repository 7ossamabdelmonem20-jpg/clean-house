'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { SERVICES, SITE_CONFIG } from '@/constants';

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-gray-50 relative" aria-label="خدماتنا">
      <div className="container-custom">
        <SectionHeader
          badge="خدماتنا الاحترافية"
          title="حلول تنظيف"
          highlight="شاملة ومتكاملة"
          subtitle="نقدم أفضل خدمات التنظيف الاحترافي بالبخار في المملكة. تنظيف مكيفات، كنب، سجاد وخزانات بمعايير عالمية"
        />

        <div className="space-y-16">
          {SERVICES.map((service, i) => (
            <motion.article
              key={service.id}
              id={service.anchor}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              aria-label={service.title}
            >
              {/* Image */}
              <div className={`relative ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] group">
                  <Image
                    src={service.image}
                    alt={`${service.title} - كلين هاوس في المملكة العربية السعودية`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20`} />
                </div>

                {/* Service badge */}
                <div className={`absolute -bottom-4 ${i % 2 === 0 ? '-left-4' : '-right-4'} bg-white rounded-2xl shadow-lg p-4`}>
                  <span className="text-4xl">{service.icon}</span>
                </div>
              </div>

              {/* Content */}
              <div className={i % 2 === 1 ? 'lg:col-start-1' : ''}>
                <span className={`inline-block text-sm font-bold py-1.5 px-4 rounded-full mb-4 ${service.bgColor} text-blue-700`}>
                  خدمة مميزة
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6 text-base">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8" role="list">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={SITE_CONFIG.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm"
                    aria-label={`احجز خدمة ${service.title}`}
                  >
                    احجز الخدمة الآن
                    <ArrowLeft size={16} />
                  </a>
                  <a href={SITE_CONFIG.tel} className="btn-secondary text-sm" aria-label="اتصل للاستفسار">
                    استفسر الآن
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
