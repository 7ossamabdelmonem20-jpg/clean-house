import { notFound } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/ui/FloatingButtons';
import ServiceCityLocalBusinessSchema from '@/components/seo/ServiceCityLocalBusinessSchema';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import InternalLinks from '@/components/seo/InternalLinks';
import SeoFaqSection from '@/components/seo/SeoFaqSection';
import SeoCtaBanner from '@/components/seo/SeoCtaBanner';
import { SERVICES } from '@/constants';
import { getCityBySlug, getAllCitySlugs } from '@/constants/cities';
import { SITE_CONFIG } from '@/constants';
import { buildPageMetadata } from '@/lib/seo/metadata';
import {
  getCityServiceMetaDescription,
  getCityServiceH1,
  getCityServiceIntro,
  getCityServiceLongContent,
  getCityServiceFaqs,
  getServiceCityPageSeo,
} from '@/lib/seo/content';
import { ICON_MAP } from '@/utils/iconMap';
import { Phone, MessageCircle, CheckCircle2, MapPin } from 'lucide-react';

export function generateStaticParams() {
  const params: { slug: string; city: string }[] = [];
  for (const service of SERVICES) {
    for (const citySlug of getAllCitySlugs()) {
      params.push({ slug: service.slug, city: citySlug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: { slug: string; city: string } }) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  const city = getCityBySlug(params.city);
  if (!service || !city) return {};

  const seo = getServiceCityPageSeo(service, city);

  return buildPageMetadata({
    title: seo.title,
    description: seo.description,
    path: `/services/${service.slug}/${city.slug}`,
    keywords: `${service.title} ${city.name}, ${service.title} في ${city.name}, كلين هاوس ${city.name}`,
    ogImage: `${SITE_CONFIG.url}${service.heroImage}`,
  });
}

export default function ServiceCityPage({ params }: { params: { slug: string; city: string } }) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  const city = getCityBySlug(params.city);
  if (!service || !city) notFound();

  const pageUrl = `${SITE_CONFIG.url}/services/${service.slug}/${city.slug}`;
  const h1 = getCityServiceH1(service, city);
  const intro = getCityServiceIntro(service, city);
  const longContent = getCityServiceLongContent(service, city);
  const faqs = getCityServiceFaqs(service, city);
  const { description: metaDescription } = getServiceCityPageSeo(service, city);
  const Icon = ICON_MAP[service.icon];

  return (
    <>
      <ServiceCityLocalBusinessSchema
        service={service}
        city={city}
        pageUrl={pageUrl}
        description={metaDescription}
        faqs={faqs}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-navy-700 pt-28 pb-16 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={service.heroImage}
              alt={`${h1} - كلين هاوس`}
              fill
              className="object-cover opacity-20"
              priority
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 hero-overlay" />
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary-500 via-teal-400 to-accent-500" />
          <div className="container-custom relative">
            <Breadcrumbs
              items={[
                { label: 'الرئيسية', href: '/' },
                { label: service.title, href: `/services/${service.slug}` },
                { label: city.name },
              ]}
            />
            <div className="flex items-center gap-3 mb-4">
              {Icon && (
                <div className={`w-10 h-10 ${service.bgColor} rounded-xl flex items-center justify-center border ${service.borderColor}`}>
                  <Icon size={20} className={service.textColor} strokeWidth={1.75} />
                </div>
              )}
              <span className="inline-flex items-center gap-1.5 text-sm text-teal-300">
                <MapPin size={14} />
                {city.name} — {city.region}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">{h1}</h1>
            <p className="text-primary-200 text-lg max-w-2xl leading-relaxed mb-8">{intro}</p>
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
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                {longContent.map((paragraph, i) => (
                  <div key={i} className="mb-6">
                    {i === 0 ? (
                      <h2 className="text-xl font-black text-slate-900 mb-3">{paragraph}</h2>
                    ) : i === 2 ? (
                      <>
                        <h3 className="text-lg font-bold text-slate-900 mb-3">الأحياء التي نخدمها</h3>
                        <p className="text-slate-600 leading-relaxed">{paragraph}</p>
                      </>
                    ) : (
                      <p className="text-slate-600 leading-relaxed">{paragraph}</p>
                    )}
                  </div>
                ))}

                <h2 className="text-xl font-black text-slate-900 mb-4">مميزات الخدمة في {city.name}</h2>
                <ul className="space-y-2.5 mb-8">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-slate-700 text-sm">
                      <CheckCircle2 size={16} className="text-teal-500 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <h2 className="text-xl font-black text-slate-900 mb-4">خطوات العمل</h2>
                <ol className="space-y-4">
                  {service.steps.map((step, i) => (
                    <li key={step.title} className="flex gap-4">
                      <span className="w-8 h-8 bg-primary-50 border border-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-sm flex-shrink-0">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="font-bold text-slate-900 text-sm">{step.title}</h3>
                        <p className="text-slate-500 text-xs mt-0.5">{step.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-card-hover border border-slate-100 sticky top-28">
                <Image
                  src={service.image}
                  alt={`${h1} - كلين هاوس ${city.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <InternalLinks type="service-city" citySlug={city.slug} serviceSlug={service.slug} />
            <SeoFaqSection items={faqs} title={`أسئلة شائعة عن ${service.title} في ${city.name}`} />
            <SeoCtaBanner
              title={`احجز ${service.title} في ${city.name} الآن`}
              subtitle="عرض سعر مجاني — فريقنا يصل إليك في أسرع وقت"
            />
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
