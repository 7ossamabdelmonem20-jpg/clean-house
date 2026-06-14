'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FaqItem {
  question: string;
  answer: string;
}

export default function SeoFaqSection({ items, title = 'الأسئلة الشائعة' }: { items: FaqItem[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="mt-12" aria-label={title}>
      <h2 className="text-2xl font-black text-slate-900 mb-6">{title}</h2>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div
            key={i}
            className={`border rounded-xl overflow-hidden transition-colors ${
              open === i ? 'border-primary-200 shadow-sm bg-white' : 'border-slate-100 bg-[#F8FAFC]'
            }`}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between p-5 text-right"
              aria-expanded={open === i}
            >
              <span className="font-bold text-slate-900 text-sm">{item.question}</span>
              <ChevronDown
                size={18}
                className={`text-slate-400 flex-shrink-0 mr-3 transition-transform ${open === i ? 'rotate-180 text-primary-500' : ''}`}
              />
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="px-5 pb-5 text-slate-600 text-sm leading-relaxed">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
