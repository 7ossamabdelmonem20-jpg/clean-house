'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  subtitle,
  center = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${center ? 'text-center' : ''} mb-12 md:mb-16`}
    >
      {badge && (
        <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 font-bold text-sm py-1.5 px-5 rounded-full mb-4">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
          {badge}
        </span>
      )}
      <h2 className={`section-title ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}
        {highlight && (
          <span className="gradient-text"> {highlight}</span>
        )}
      </h2>
      {subtitle && (
        <p className={`section-subtitle max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-blue-100' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
