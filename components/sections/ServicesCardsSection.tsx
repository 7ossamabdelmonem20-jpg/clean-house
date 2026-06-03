'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { SERVICES } from '@/constants';

export default function ServicesCardsSection() {
  return (
    <section id="services" className="section-padding bg-gray-50" aria-label="خدماتنا">
      <div className="container-custom">
        <SectionHeader
          badge="خدماتنا الاحترافية"
          title="حلول تنظيف"
          highlight="شاملة ومتكاملة"
          subtitle="اختر الخدمة التي تحتاجها واعرف كل التفاصيل — أسعار، خطوات، وضمانات"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group block bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-400 hover:-translate-y-2 border border-transparent hover:border-blue-100"
                aria-label={`اعرف أكثر عن ${service.title}`}
              >
                {/* صورة */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} - كلين هاوس السعودية`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 25vw"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-30 group-hover:opacity-40 transition-opacity`} />

                  {/* أيقونة */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl shadow-md">
                    {service.icon}
                  </div>
                </div>

                {/* محتوى */}
                <div className="p-5">
                  <h2 className="font-black text-gray-900 text-lg mb-2 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* ميزات مختصرة */}
                  <ul className="space-y-1.5 mb-5">
                    {service.features.slice(0, 3).map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-xs text-gray-600">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  {/* زر */}
                  <div className={`flex items-center justify-between pt-4 border-t border-gray-100`}>
                    <span className={`font-bold text-sm ${service.textColor} group-hover:gap-3 flex items-center gap-2 transition-all`}>
                      اعرف التفاصيل
                      <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
                    </span>
                    <span className={`text-xs py-1 px-3 rounded-full ${service.bgColor} ${service.textColor} font-semibold`}>
                      احجز الآن
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
