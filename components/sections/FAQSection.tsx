'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle, Phone } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { FAQ_ITEMS, SITE_CONFIG } from '@/constants';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-[#F8FAFC]" aria-label="الأسئلة الشائعة">
      <div className="container-custom">
        <SectionHeader
          badge="الأسئلة الشائعة"
          title="كل ما تريد معرفته"
          highlight="عن خدماتنا"
          subtitle="إجابات على أكثر الأسئلة شيوعاً من عملائنا في المملكة العربية السعودية"
          badgeVariant="primary"
        />

        <div className="max-w-3xl mx-auto">
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className={`bg-white rounded-2xl overflow-hidden border transition-all duration-200 ${
                  openIndex === i ? 'border-primary-200 shadow-sm' : 'border-slate-100 hover:border-slate-200'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-right font-bold text-slate-900 hover:text-primary-600 transition-colors"
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="text-sm leading-relaxed">{item.question}</span>
                  <ChevronDown
                    size={18}
                    className={`flex-shrink-0 ml-4 transition-transform duration-300 ${
                      openIndex === i ? 'rotate-180 text-primary-500' : 'text-slate-400'
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-slate-600 leading-relaxed text-sm border-t border-slate-100 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Still have questions */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 text-center p-8 bg-navy-700 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary-500 to-teal-400 rounded-t-3xl" />
            <h3 className="text-white font-black text-xl mb-2">لديك سؤال آخر؟</h3>
            <p className="text-primary-200 mb-6 text-sm">فريقنا جاهز للإجابة على جميع استفساراتك على مدار الساعة</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href={SITE_CONFIG.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-sm">
                <MessageCircle size={16} /> واتساب
              </a>
              <a href={SITE_CONFIG.tel} className="flex items-center gap-2 bg-white text-navy-700 font-bold py-2.5 px-6 rounded-xl hover:bg-slate-50 transition-colors text-sm">
                <Phone size={15} /> اتصل الآن
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
