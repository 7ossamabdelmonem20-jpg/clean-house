'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, Phone, MessageCircle, ArrowRight, Star, ChevronLeft } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/ui/FloatingButtons';
import { SITE_CONFIG, TESTIMONIALS } from '@/constants';

interface Service {
  id: string;
  slug: string;
  icon: string;
  title: string;
  shortDesc: string;
  description: string;
  longDescription: string;
  features: string[];
  steps: { title: string; desc: string }[];
  image: string;
  heroImage: string;
  color: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
  metaTitle: string;
  metaDesc: string;
}

export default function ServicePageClient({
  service,
  otherServices,
}: {
  service: Service;
  otherServices: Service[];
}) {
  // نصفّي التقييمات الخاصة بهذه الخدمة إن وُجدت، وإلا نأخذ أول ٣
  const relatedTestimonials = TESTIMONIALS.filter((t) =>
    t.service.includes(service.title.split(' ')[1] ?? '')
  ).slice(0, 3);
  const displayTestimonials =
    relatedTestimonials.length >= 2 ? relatedTestimonials : TESTIMONIALS.slice(0, 3);

  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ── */}
        <section className="relative min-h-[60vh] flex items-end overflow-hidden" aria-label={`خدمة ${service.title}`}>
          {/* صورة الخلفية */}
          <div className="absolute inset-0">
            <Image
              src={service.heroImage}
              alt={`${service.title} - كلين هاوس السعودية`}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/70 to-gray-800/40" />
          </div>

          <div className="container-custom relative z-10 pb-16 pt-32">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-white/60 mb-6" aria-label="breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">الرئيسية</Link>
              <ChevronLeft size={14} />
              <Link href="/#services" className="hover:text-white transition-colors">الخدمات</Link>
              <ChevronLeft size={14} />
              <span className="text-white">{service.title}</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className={`inline-flex items-center gap-2 text-sm font-bold py-1.5 px-4 rounded-full mb-4 bg-white/15 backdrop-blur-sm border border-white/20 text-white`}>
                <span>{service.icon}</span> خدمة احترافية معتمدة
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
                {service.title}
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mb-8">
                {service.shortDesc}
              </p>

              <div className="flex flex-wrap gap-4">
                <a href={SITE_CONFIG.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base">
                  <MessageCircle size={20} /> احجز الخدمة الآن
                </a>
                <a href={SITE_CONFIG.tel} className="bg-white/15 backdrop-blur-sm border border-white/30 text-white font-bold py-3 px-7 rounded-full hover:bg-white/25 transition-all inline-flex items-center gap-2">
                  <Phone size={18} /> {SITE_CONFIG.phoneFormatted}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── الوصف + المميزات ── */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* النص */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className={`inline-block text-sm font-bold py-1.5 px-4 rounded-full mb-4 ${service.bgColor} ${service.textColor}`}>
                  {service.title}
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5">
                  لماذا تختار كلين هاوس لـ{service.title}؟
                </h2>
                <p className="text-gray-600 leading-relaxed text-base mb-4">
                  {service.description}
                </p>
                <p className="text-gray-600 leading-relaxed text-base mb-8">
                  {service.longDescription}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3">
                      <CheckCircle2 size={20} className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  <a href={SITE_CONFIG.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                    <MessageCircle size={18} /> احجز الآن
                  </a>
                  <a href={SITE_CONFIG.tel} className="btn-secondary">
                    <Phone size={18} /> اتصل بنا
                  </a>
                </div>
              </motion.div>

              {/* الصورة */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <Image
                    src={service.image}
                    alt={`${service.title} احترافي - كلين هاوس`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                {/* بطاقة ضمان */}
                <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 bg-green-100 rounded-xl flex items-center justify-center text-xl">🛡️</div>
                    <div>
                      <p className="font-black text-gray-900 text-sm">ضمان الخدمة</p>
                      <p className="text-gray-500 text-xs">نعيد الخدمة مجاناً</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── خطوات العمل ── */}
        <section className={`section-padding ${service.bgColor}`}>
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className={`inline-block text-sm font-bold py-1.5 px-4 rounded-full mb-4 bg-white ${service.textColor}`}>
                كيف نعمل؟
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                خطوات {service.title}
              </h2>
              <p className="text-gray-600 mt-3 max-w-xl mx-auto">
                عملية منظمة ومدروسة لضمان أفضل نتيجة في أسرع وقت
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-6 relative">
              {/* خط الربط */}
              <div className="hidden md:block absolute top-10 right-[10%] left-[10%] h-0.5 bg-gradient-to-l from-transparent via-blue-200 to-transparent" />

              {service.steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center relative"
                >
                  <div className={`w-20 h-20 mx-auto rounded-2xl bg-white shadow-md flex items-center justify-center mb-4 border-2 ${service.borderColor} relative z-10`}>
                    <span className={`text-2xl font-black ${service.textColor}`}>{i + 1}</span>
                  </div>
                  <h3 className="font-black text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── تقييمات العملاء ── */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                ماذا قالوا عن <span className="gradient-text">{service.title}</span>؟
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {displayTestimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card p-6"
                >
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star key={s} size={16} className="text-yellow-400" fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">"{t.text}"</p>
                  <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                    <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                      <p className="text-gray-400 text-xs">📍 {t.city}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 relative overflow-hidden">
          <div className="absolute inset-0 pattern-bg opacity-10" />
          <div className="container-custom relative text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              احجز {service.title} الآن
            </h2>
            <p className="text-blue-200 text-lg mb-8">
              تواصل معنا واحصل على عرض سعر مجاني فوري
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={SITE_CONFIG.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base">
                <MessageCircle size={20} /> تواصل عبر واتساب
              </a>
              <a href={SITE_CONFIG.tel} className="bg-white text-blue-800 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition-colors inline-flex items-center gap-2 text-base">
                <Phone size={18} /> اتصل الآن
              </a>
            </div>
          </div>
        </section>

        {/* ── خدمات أخرى ── */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                خدماتنا الأخرى
              </h2>
              <p className="text-gray-500 mt-2">اكتشف باقي خدمات التنظيف الاحترافية</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {otherServices.map((s, i) => (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={`/services/${s.slug}`}
                    className="card p-6 block group hover:border-blue-200 border border-transparent"
                  >
                    <div className={`w-14 h-14 ${s.bgColor} rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                      {s.icon}
                    </div>
                    <h3 className="font-black text-gray-900 text-lg mb-2 group-hover:text-blue-700 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{s.shortDesc}</p>
                    <span className={`inline-flex items-center gap-1 text-sm font-bold ${s.textColor}`}>
                      اعرف أكثر <ArrowRight size={14} />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
