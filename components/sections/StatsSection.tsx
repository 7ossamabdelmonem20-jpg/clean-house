'use client';

import { motion } from 'framer-motion';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { STATS } from '@/constants';

export default function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900 relative overflow-hidden" aria-label="إحصائياتنا">
      <div className="absolute inset-0 pattern-bg opacity-10" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400" />

      <div className="container-custom relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="counter-card rounded-2xl p-6 text-center group hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-black text-white mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-blue-200 font-semibold text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
