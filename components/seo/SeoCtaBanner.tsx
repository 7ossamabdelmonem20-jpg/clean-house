import { Phone, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/constants';

interface SeoCtaBannerProps {
  title: string;
  subtitle?: string;
}

export default function SeoCtaBanner({ title, subtitle }: SeoCtaBannerProps) {
  return (
    <section className="mt-12 relative bg-navy-700 rounded-2xl p-8 md:p-10 text-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary-500 via-teal-400 to-accent-500 rounded-t-2xl" />
      <h2 className="text-xl md:text-2xl font-black text-white mb-3">{title}</h2>
      {subtitle && <p className="text-primary-200 text-sm mb-6 max-w-md mx-auto">{subtitle}</p>}
      <div className="flex flex-wrap gap-3 justify-center">
        <a href={SITE_CONFIG.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
          <MessageCircle size={18} />
          تواصل عبر واتساب
        </a>
        <a href={SITE_CONFIG.tel} className="flex items-center gap-2 bg-white text-navy-700 font-bold py-3 px-7 rounded-xl hover:bg-slate-50 transition-colors">
          <Phone size={16} />
          {SITE_CONFIG.phoneFormatted}
        </a>
      </div>
    </section>
  );
}
