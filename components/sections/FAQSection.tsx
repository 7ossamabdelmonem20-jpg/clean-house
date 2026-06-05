'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { FAQ_ITEMS, SITE_CONFIG } from '@/constants';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-gray-50" aria-label="الأسئلة الشائعة">
      <div className="container-custom">
        <SectionHeader
          badge="الأسئلة الشائعة"
          title="كل ما تريد معرفته"
          highlight="عن خدماتنا"
          subtitle="إجابات على أكثر الأسئلة شيوعاً من عملائنا في المملكة العربية السعودية"
        />

        <div className="max-w-3xl mx-auto">
          {/* ⚠️ لا يوجد itemScope هنا — الـ FAQPage Schema موجود فقط في layout.tsx */}
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-right font-bold text-gray-900 hover:text-blue-700 transition-colors"
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 ml-4 text-blue-600 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-gray-600 leading-relaxed text-sm border-t border-gray-100 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 text-center p-8 bg-blue-700 rounded-3xl"
          >
            <h3 className="text-white font-black text-xl mb-3">لديك سؤال آخر؟</h3>
            <p className="text-blue-200 mb-5 text-sm">فريقنا جاهز للإجابة على جميع استفساراتك على مدار الساعة</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href={SITE_CONFIG.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-sm">
                💬 واتساب
              </a>
              <a href={SITE_CONFIG.tel} className="bg-white text-blue-800 font-bold py-2.5 px-6 rounded-full hover:bg-blue-50 transition-colors text-sm inline-flex items-center gap-2">
                📞 اتصل الآن
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
