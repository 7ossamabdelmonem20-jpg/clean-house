import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { SERVICES } from '@/constants';
import { SEO_CITIES } from '@/constants/cities';
import { ICON_MAP } from '@/utils/iconMap';

interface InternalLinksProps {
  type: 'city' | 'service-city';
  citySlug?: string;
  serviceSlug?: string;
}

export default function InternalLinks({ type, citySlug, serviceSlug }: InternalLinksProps) {
  if (type === 'city' && citySlug) {
    return (
      <section className="mt-12" aria-label="خدماتنا في هذه المدينة">
        <h2 className="text-xl font-black text-slate-900 mb-5">خدماتنا في هذه المدينة</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {SERVICES.map((s) => {
            const Icon = ICON_MAP[s.icon];
            return (
              <Link
                key={s.id}
                href={`/services/${s.slug}/${citySlug}`}
                className="flex items-center gap-3 p-4 bg-[#F8FAFC] hover:bg-white border border-slate-100 hover:border-primary-100 rounded-xl transition-all group"
              >
                {Icon && <Icon size={20} className={s.textColor} strokeWidth={1.75} />}
                <span className="text-sm font-bold text-slate-800 group-hover:text-primary-600">{s.title}</span>
                <ArrowLeft size={14} className="mr-auto text-slate-300 group-hover:text-primary-500 transition-colors" />
              </Link>
            );
          })}
        </div>
      </section>
    );
  }

  if (type === 'service-city' && citySlug && serviceSlug) {
    const otherServices = SERVICES.filter((s) => s.slug !== serviceSlug);
    const otherCities = SEO_CITIES.filter((c) => c.slug !== citySlug).slice(0, 6);

    return (
      <div className="mt-12 space-y-10">
        <section aria-label="نفس الخدمة في مدن أخرى">
          <h2 className="text-xl font-black text-slate-900 mb-5">نفس الخدمة في مدن أخرى</h2>
          <div className="flex flex-wrap gap-2">
            {otherCities.map((c) => (
              <Link
                key={c.slug}
                href={`/services/${serviceSlug}/${c.slug}`}
                className="text-sm py-2 px-4 bg-[#F8FAFC] hover:bg-primary-50 border border-slate-100 hover:border-primary-200 rounded-xl text-slate-700 hover:text-primary-600 transition-all"
              >
                {SERVICES.find((s) => s.slug === serviceSlug)?.title} في {c.name}
              </Link>
            ))}
          </div>
        </section>

        <section aria-label="خدمات أخرى في نفس المدينة">
          <h2 className="text-xl font-black text-slate-900 mb-5">خدمات أخرى في نفس المدينة</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {otherServices.map((s) => {
              const Icon = ICON_MAP[s.icon];
              return (
                <Link
                  key={s.id}
                  href={`/services/${s.slug}/${citySlug}`}
                  className="flex items-center gap-3 p-4 bg-[#F8FAFC] hover:bg-white border border-slate-100 hover:border-primary-100 rounded-xl transition-all group"
                >
                  {Icon && <Icon size={18} className={s.textColor} strokeWidth={1.75} />}
                  <span className="text-sm font-bold text-slate-800 group-hover:text-primary-600">{s.title}</span>
                  <ArrowLeft size={14} className="mr-auto text-slate-300 group-hover:text-primary-500" />
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    );
  }

  return null;
}
