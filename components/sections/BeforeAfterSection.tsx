"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const beforeAfterItems = [
  {
    title: "تنظيف المكيفات",
    // قبل: مكيف متسخ قبل التنظيف — بعد: مكيف نظيف بعد الصيانة
    before: "/images/before-after/ac-before.webp",

    after: "/images/before-after/ac-after.webp",
    desc: "إزالة الأتربة والبكتيريا من الفلاتر والوحدة الداخلية",
  },
  {
    title: "تنظيف السجاد",
    // قبل: سجاد قذر — بعد: سجاد نظيف بجهاز بخار
    before:
    "/images/before-after/co-after.jpg",
    after:
    "/images/before-after/co-before.jpg",
    desc: "إزالة البقع والأوساخ العميقة بتقنية البخار الساخن",
  },
  {
    title: "تنظيف الكنب",
    // قبل: كنب يحتاج تنظيف — بعد: كنب نظيف فاخر
    before:
      "/images/before-after/can-before.jpg",
    after:
      "/images/before-after/can-after.jpg",
    desc: "إزالة البقع ورائحة الرطوبة وتعقيم الكنب بالكامل",
  },
];

export default function BeforeAfterSection() {
  return (
    <section
      className="section-padding bg-gray-50"
      aria-label="قبل وبعد التنظيف"
    >
      <div className="container-custom">
        <SectionHeader
          badge="نتائج حقيقية"
          title="قبل وبعد"
          highlight="التنظيف الاحترافي"
          subtitle="شاهد الفرق الواضح قبل وبعد خدمات التنظيف الاحترافي من كلين هاوس. نتائج مضمونة وفورية"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {beforeAfterItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="card overflow-hidden group"
            >
              {/* Before/After Images */}
              <div className="grid grid-cols-2 gap-0.5 bg-gray-200">
                <div className="relative aspect-square">
                  <Image
                    src={item.before}
                    alt={`قبل ${item.title} - كلين هاوس`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="200px"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-red-900/30 flex items-end p-3">
                    <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      قبل ✗
                    </span>
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
                  <div className="absolute inset-0 bg-green-900/20 flex items-end p-3">
                    <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      بعد ✓
                    </span>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-black text-gray-900 text-lg mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className="text-yellow-400 text-sm">
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-gray-500 text-xs">
                    نتيجة مضمونة ١٠٠٪
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
