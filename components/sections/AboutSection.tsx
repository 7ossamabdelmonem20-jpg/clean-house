'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Leaf } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { SITE_CONFIG } from '@/constants';

const values = [
  { icon: Award, title: 'جودة لا تُضاهى', desc: 'نلتزم بأعلى معايير الجودة في كل خدمة نقدمها' },
  { icon: Users, title: 'فريق متخصص', desc: 'عمال مدربون ومعتمدون بخبرة تتجاوز ٥ سنوات' },
  { icon: Clock, title: 'التزام بالمواعيد', desc: 'نصل في الوقت المحدد دائماً بلا تأخير' },
  { icon: Leaf, title: 'مواد صديقة للبيئة', desc: 'نستخدم منتجات آمنة معتمدة لا تضر بالصحة' },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white" aria-label="من نحن">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/images/heroimage/hero.jpg"
                alt="فريق شركة كلين هاوس للتنظيف الاحترافي في السعودية"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
            </div>

            {/* Badge overlay */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-2xl">🏆</div>
                <div>
                  <p className="font-black text-gray-900">منذ {SITE_CONFIG.established}</p>
                  <p className="text-gray-500 text-sm">شركة معتمدة ومرخصة</p>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-2xl opacity-20 rotate-12" />
            <div className="absolute -top-3 -left-3 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl opacity-30 rotate-6" />
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <SectionHeader
              badge="من نحن"
              title="كلين هاوس"
              highlight="شريكك الموثوق للتنظيف"
              subtitle=""
              center={false}
            />

            <p className="text-gray-600 leading-relaxed mb-6 text-base">
              منذ عام <strong>٢٠١٥</strong>، تُقدّم شركة <strong>كلين هاوس</strong> خدمات التنظيف الاحترافي بأعلى معايير الجودة
              في المملكة العربية السعودية. نخدم المنازل والفلل والشركات والمكاتب في الرياض، جدة، الدمام وجميع مدن المملكة.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 text-base">
              يضم فريقنا أكثر من <strong>٥٠ متخصصاً</strong> في التنظيف مدربين على أحدث التقنيات، ونستخدم
              معدات متطورة ومواد تنظيف معتمدة وآمنة تماماً على الأسرة والبيئة.
            </p>

            {/* Values grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {values.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors group">
                  <div className="w-10 h-10 bg-blue-100 group-hover:bg-blue-200 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                    <Icon size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-0.5">{title}</h3>
                    <p className="text-gray-500 text-xs">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a href={SITE_CONFIG.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-sm">
                احجز الآن
              </a>
              <a href="#services" onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }); }} className="btn-secondary text-sm">
                خدماتنا
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
