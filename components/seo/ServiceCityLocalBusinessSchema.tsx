import { buildServiceCityLocalBusinessGraph, type FaqItem } from '@/lib/seo/serviceCityLocalBusiness';
import type { City } from '@/constants/cities';
import { SERVICES } from '@/constants';

type Service = (typeof SERVICES)[number];

export interface ServiceCityLocalBusinessSchemaProps {
  service: Service;
  city: City;
  pageUrl: string;
  description: string;
  faqs?: FaqItem[];
}

/**
 * مكوّن JSON-LD ديناميكي لصفحات (خدمة + مدينة).
 * Server Component — آمن مع Next.js App Router بدون Hydration issues.
 *
 * @example
 * <ServiceCityLocalBusinessSchema
 *   service={service}
 *   city={city}
 *   pageUrl={`${SITE_CONFIG.url}/services/${service.slug}/${city.slug}`}
 *   description={getCityServiceMetaDescription(service, city)}
 *   faqs={getCityServiceFaqs(service, city)}
 * />
 */
export default function ServiceCityLocalBusinessSchema({
  service,
  city,
  pageUrl,
  description,
  faqs,
}: ServiceCityLocalBusinessSchemaProps) {
  const schema = buildServiceCityLocalBusinessGraph({
    service,
    city,
    pageUrl,
    description,
    faqs,
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
