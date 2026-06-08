'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Leaf, Trophy } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { SITE_CONFIG } from '@/constants';

const values = [
  { icon: Award, title: 'جودة لا تُضاهى',      desc: 'نلتزم بأعلى معايير الجودة في كل خدمة نقدمها',          color: 'text-primary-500 bg-primary-50' },
  { icon: Users, title: 'فريق متخصص',           desc: 'عمال مدربون ومعتمدون بخبرة تتجاوز ٥ سنوات',            color: 'text-teal-500 bg-teal-50' },
  { icon: Clock, title: 'التزام بالمواعيد',      desc: 'نصل في الوقت المحدد دائماً بلا تأخير',                 color: 'text-accent-600 bg-accent-50' },
  { icon: Leaf,  title: 'مواد صديقة للبيئة',   desc: 'نستخدم منتجات آمنة معتمدة لا تضر بالصحة أو البيئة',   color: 'text-emerald-600 bg-emerald-50' },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white" aria-label="من نحن">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover aspect-[4/3]">
              <Image
                src="/images/heroimage/hero.jpg"
                alt="فريق شركة كلين هاوس Clean House KSA للتنظيف الاحترافي في السعودية"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Soft overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-700/30 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-card-hover p-4 border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-primary-500 rounded-xl flex items-center justify-center">
                  <Trophy size={22} className="text-white" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="font-black text-slate-900 text-sm">منذ {SITE_CONFIG.established}</p>
                  <p className="text-slate-400 text-xs">شركة معتمدة ومرخصة</p>
                </div>
              </div>
            </div>

            {/* Accent squares */}
            <div className="absolute -top-5 -left-5 w-20 h-20 bg-teal-50 border-2 border-teal-100 rounded-2xl -rotate-6 -z-10" />
            <div className="absolute -top-2 -left-2 w-12 h-12 bg-primary-100 rounded-xl rotate-3 -z-10" />
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            <SectionHeader
              badge="من نحن"
              title="كلين هاوس"
              highlight="شريكك الموثوق للتنظيف"
              subtitle=""
              center={false}
              badgeVariant="teal"
            />

            <p className="text-slate-600 leading-relaxed mb-4 text-base">
              منذ عام <strong className="text-slate-900">٢٠١٥</strong>، تُقدّم شركة{' '}
              <strong className="text-primary-600">كلين هاوس Clean House KSA</strong> خدمات التنظيف الاحترافي
              بأعلى معايير الجودة في المملكة العربية السعودية.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8 text-base">
              يضم فريقنا أكثر من <strong className="text-slate-900">٥٠ متخصصاً</strong> في التنظيف مدربين على
              أحدث التقنيات، ونستخدم معدات متطورة ومواد تنظيف معتمدة وآمنة تماماً على الأسرة والبيئة.
            </p>

            {/* Values grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {values.map(({ icon: Icon, title, desc, color }) => (
                <div
                  key={title}
                  className="flex items-start gap-3 p-4 bg-[#F8FAFC] rounded-xl hover:bg-white hover:shadow-card transition-all duration-200 group border border-transparent hover:border-slate-100"
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${color}`}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm mb-0.5">{title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a href={SITE_CONFIG.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-sm">
                احجز الآن
              </a>
              <button
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-ghost text-sm"
              >
                تصفح خدماتنا
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
