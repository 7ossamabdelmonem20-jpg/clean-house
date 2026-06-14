import Link from 'next/link';
import { MapPin } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/ui/FloatingButtons';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { SEO_CITIES } from '@/constants/cities';
import { buildPageMetadata } from '@/lib/seo/metadata';

export const metadata = buildPageMetadata({
  title: 'مناطق الخدمة | كلين هاوس Clean House KSA',
  description: 'كلين هاوس تقدم خدمات تنظيف في الرياض وجدة والدمام ومكة والمدينة والخبر والطائف والقصيم والأحساء. احجز الآن.',
  path: '/cities',
  keywords: 'شركة تنظيف السعودية, تنظيف الرياض, تنظيف جدة, تنظيف الدمام',
});

export default function CitiesIndexPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-16">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: 'الرئيسية', href: '/' }, { label: 'مناطق الخدمة' }]} />
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">مناطق خدمات كلين هاوس</h1>
          <p className="text-slate-600 mb-10 max-w-2xl leading-relaxed">
            نقدم خدمات تنظيف احترافية في جميع مدن المملكة العربية السعودية. اختر مدينتك للاطلاع على الخدمات المتاحة.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SEO_CITIES.map((city) => (
              <Link
                key={city.slug}
                href={`/cities/${city.slug}`}
                className="group p-6 bg-white border border-slate-100 hover:border-primary-100 hover:shadow-card rounded-2xl transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={16} className="text-teal-500" />
                  <span className="text-xs text-slate-400">{city.region}</span>
                </div>
                <h2 className="text-lg font-black text-slate-900 group-hover:text-primary-600 transition-colors mb-2">
                  شركة تنظيف في {city.name}
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed">{city.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
