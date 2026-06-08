"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { CheckCircle2 } from "lucide-react";

const beforeAfterItems = [
  {
    title: "تنظيف المكيفات",
    before: "/images/before-after/ac-before.webp",
    after:  "/images/before-after/ac-after.webp",
    desc: "إزالة الأتربة والبكتيريا من الفلاتر والوحدة الداخلية",
  },
  {
    title: "تنظيف السجاد",
    before: "/images/before-after/co-after.jpg",
    after:  "/images/before-after/co-before.jpg",
    desc: "إزالة البقع والأوساخ العميقة بتقنية البخار الساخن",
  },
  {
    title: "تنظيف الكنب",
    before: "/images/before-after/can-before.jpg",
    after:  "/images/before-after/can-after.jpg",
    desc: "إزالة البقع ورائحة الرطوبة وتعقيم الكنب بالكامل",
  },
];

export default function BeforeAfterSection() {
  return (
    <section className="section-padding bg-[#F8FAFC]" aria-label="قبل وبعد التنظيف">
      <div className="container-custom">
        <SectionHeader
          badge="نتائج حقيقية"
          title="قبل وبعد"
          highlight="التنظيف الاحترافي"
          subtitle="شاهد الفرق الواضح قبل وبعد خدمات التنظيف الاحترافي من كلين هاوس. نتائج مضمونة وفورية"
          badgeVariant="green"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {beforeAfterItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-slate-100"
            >
              {/* Before / After grid */}
              <div className="grid grid-cols-2 gap-0.5 bg-slate-200">
                <div className="relative aspect-square">
                  <Image
                    src={item.before}
                    alt={`قبل ${item.title} - كلين هاوس`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="200px"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-red-900/25 flex items-end p-3">
                    <span className="bg-rose-600 text-white text-xs font-bold px-2.5 py-1 rounded-lg">قبل</span>
                  </div>
                </div>
                <div className="relative aspect-square">
                  <Image
                    src={item.after}
                    alt={`بعد ${item.title} - كلين هاوس`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="200px"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-teal-900/20 flex items-end p-3">
                    <span className="bg-teal-500 text-white text-xs font-bold px-2.5 py-1 rounded-lg">بعد</span>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-black text-slate-900 text-base mb-1.5">{item.title}</h3>
                <p className="text-slate-500 text-sm mb-3 leading-relaxed">{item.desc}</p>
                <div className="flex items-center gap-2 text-teal-600 text-xs font-semibold">
                  <CheckCircle2 size={14} />
                  نتيجة مضمونة ١٠٠٪
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
