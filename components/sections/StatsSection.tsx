'use client';

import { motion } from 'framer-motion';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { STATS } from '@/constants';
import { ICON_MAP } from '@/utils/iconMap';

export default function StatsSection() {
  return (
    <section className="py-14 bg-navy-700 relative overflow-hidden" aria-label="إحصائياتنا">
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary-500 via-teal-400 to-accent-500" />
      <div className="absolute inset-0 pattern-bg opacity-15" />

      <div className="container-custom relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {STATS.map((stat, i) => {
            const Icon = ICON_MAP[stat.icon];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="counter-card rounded-2xl p-6 text-center group hover:bg-white/10 transition-all duration-300 cursor-default"
              >
                {Icon && (
                  <div className="flex justify-center mb-3">
                    <Icon size={28} className="text-primary-300" strokeWidth={1.5} />
                  </div>
                )}
                <div className="text-3xl md:text-4xl font-black text-white mb-1.5">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-primary-300 font-semibold text-sm">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-teal-400 via-primary-400 to-accent-500" />
    </section>
  );
}
