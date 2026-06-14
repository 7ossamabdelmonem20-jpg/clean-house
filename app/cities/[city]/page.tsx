import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/ui/FloatingButtons';
import JsonLd from '@/components/seo/JsonLd';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import InternalLinks from '@/components/seo/InternalLinks';
import SeoFaqSection from '@/components/seo/SeoFaqSection';
import SeoCtaBanner from '@/components/seo/SeoCtaBanner';
import { SEO_CITIES, getCityBySlug, getAllCitySlugs } from '@/constants/cities';
import { SITE_CONFIG, SERVICES } from '@/constants';
import { buildPageMetadata } from '@/lib/seo/metadata';
import { buildJsonLd, breadcrumbSchema, faqSchema, localBusinessCitySchema } from '@/lib/seo/jsonld';
import { getCityFaqs } from '@/lib/seo/content';
import { ICON_MAP } from '@/utils/iconMap';
import { MapPin, CheckCircle2, Phone, MessageCircle } from 'lucide-react';

export function generateStaticParams() {
  return getAllCitySlugs().map((city) => ({ city }));
}

export async function generateMetadata({ params }: { params: { city: string } }) {
  const city = getCityBySlug(params.city);
  if (!city) return {};
  return buildPageMetadata({
    title: city.metaTitle,
    description: city.metaDescription,
    path: `/cities/${city.slug}`,
    keywords: `شركة تنظيف ${city.name}, تنظيف ${city.name}, كلين هاوس ${city.name}, clean house ${city.nameEn.toLowerCase()}`,
  });
}

export default function CityPage({ params }: { params: { city: string } }) {
  const city = getCityBySlug(params.city);
  if (!city) notFound();

  const pageUrl = `${SITE_CONFIG.url}/cities/${city.slug}`;
  const faqs = getCityFaqs(city);

  const schema = buildJsonLd(
    localBusinessCitySchema(city),
    breadcrumbSchema([
      { name: 'الرئيسية', url: SITE_CONFIG.url },
      { name: 'المدن', url: `${SITE_CONFIG.url}/cities` },
      { name: city.name, url: pageUrl },
    ]),
    faqSchema(faqs),
  );

  return (
    <>
      <JsonLd data={schema} />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-navy-700 pt-28 pb-16 overflow-hidden">
          <div className="absolute inset-0 pattern-bg opacity-15" />
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary-500 via-teal-400 to-accent-500" />
          <div className="container-custom relative">
            <Breadcrumbs
              items={[
                { label: 'الرئيسية', href: '/' },
                { label: 'المدن', href: '/cities' },
                { label: city.name },
              ]}
            />
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={16} className="text-teal-400" />
              <span className="text-teal-300 text-sm font-medium">{city.region}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
              شركة تنظيف في {city.name}
            </h1>
            <p className="text-primary-200 text-lg max-w-2xl leading-relaxed mb-8">
              {city.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={SITE_CONFIG.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <MessageCircle size={18} />
                احجز في {city.name}
              </a>
              <a href={SITE_CONFIG.tel} className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white font-bold py-3 px-7 rounded-xl hover:bg-white/25 transition-colors">
                <Phone size={16} />
                {SITE_CONFIG.phoneFormatted}
              </a>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4">
              لماذا كلين هاوس في {city.name}؟
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">{city.longDescription}</p>

            <h3 className="text-lg font-bold text-slate-900 mb-3">الأحياء التي نخدمها في {city.name}</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {city.neighborhoods.map((n) => (
                <span key={n} className="text-sm py-1.5 px-3 bg-[#F8FAFC] border border-slate-100 rounded-lg text-slate-600">
                  {n}
                </span>
              ))}
            </div>

            {/* Services grid */}
            <h2 className="text-2xl font-black text-slate-900 mb-5">خدماتنا في {city.name}</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {SERVICES.map((s) => {
                const Icon = ICON_MAP[s.icon];
                return (
                  <Link
                    key={s.id}
                    href={`/services/${s.slug}/${city.slug}`}
                    className="flex items-start gap-4 p-5 bg-[#F8FAFC] hover:bg-white border border-slate-100 hover:border-primary-100 hover:shadow-card rounded-2xl transition-all group"
                  >
                    <div className={`w-12 h-12 ${s.bgColor} rounded-xl flex items-center justify-center flex-shrink-0 border ${s.borderColor}`}>
                      {Icon && <Icon size={22} className={s.textColor} strokeWidth={1.75} />}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 group-hover:text-primary-600 transition-colors">{s.title} في {city.name}</h3>
                      <p className="text-slate-500 text-xs mt-1 leading-relaxed">{s.shortDesc}</p>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Why us */}
            <h2 className="text-2xl font-black text-slate-900 mb-5">مميزات كلين هاوس في {city.name}</h2>
            <ul className="space-y-3 mb-8">
              {[
                `فريق متخصص يصل لجميع أحياء ${city.name}`,
                'مواد تنظيف معتمدة وآمنة على الأسرة',
                'معدات حديثة وتقنيات بخار متطورة',
                'أسعار شفافة بدون رسوم خفية',
                'ضمان على جميع الخدمات',
                'خدمة ٢٤/٧ بما في ذلك أيام العطل',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-700 text-sm">
                  <CheckCircle2 size={16} className="text-teal-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <InternalLinks type="city" citySlug={city.slug} />
            <SeoFaqSection items={faqs} title={`أسئلة شائعة عن التنظيف في ${city.name}`} />
          </div>
        </section>

        {/* Other cities */}
        <section className="section-padding bg-[#F8FAFC]">
          <div className="container-custom">
            <h2 className="text-xl font-black text-slate-900 mb-5">نخدم أيضاً في مدن أخرى</h2>
            <div className="flex flex-wrap gap-2">
              {SEO_CITIES.filter((c) => c.slug !== city.slug).map((c) => (
                <Link
                  key={c.slug}
                  href={`/cities/${c.slug}`}
                  className="text-sm py-2 px-4 bg-white border border-slate-100 hover:border-primary-200 rounded-xl text-slate-700 hover:text-primary-600 transition-all"
                >
                  شركة تنظيف في {c.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
