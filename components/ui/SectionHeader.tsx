'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
  badgeVariant?: 'primary' | 'teal' | 'green';
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  subtitle,
  center = true,
  light = false,
  badgeVariant = 'teal',
}: SectionHeaderProps) {
  const badgeClass =
    badgeVariant === 'green'
      ? 'bg-accent-50 text-accent-700 border border-accent-200'
      : badgeVariant === 'primary'
      ? 'bg-primary-50 text-primary-600 border border-primary-100'
      : 'bg-teal-50 text-teal-600 border border-teal-100';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className={`${center ? 'text-center' : ''} mb-12 md:mb-16`}
    >
      {badge && (
        <span className={`inline-flex items-center gap-2 font-semibold text-sm py-1.5 px-4 rounded-full mb-5 ${badgeClass}`}>
          <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${badgeVariant === 'teal' ? 'bg-teal-500' : badgeVariant === 'green' ? 'bg-accent-500' : 'bg-primary-500'}`} />
          {badge}
        </span>
      )}
      <h2 className={`section-title ${light ? 'text-white' : 'text-slate-900'}`}>
        {title}
        {highlight && (
          <span className="gradient-text"> {highlight}</span>
        )}
      </h2>
      {subtitle && (
        <p className={`section-subtitle max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-primary-100' : 'text-slate-500'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
