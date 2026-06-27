import { SITE_CONFIG } from '@/constants';
import type { City } from '@/constants/cities';
import { SERVICES } from '@/constants';
import {
  getServiceSchemaType,
  getCityGeo,
  getServicePriceRange,
  formatSchemaPriceRange,
} from '@/constants/localSeo';
import { breadcrumbSchema, faqSchema } from '@/lib/seo/jsonld';

type Service = (typeof SERVICES)[number];

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceCityLocalBusinessInput {
  service: Service;
  city: City;
  pageUrl: string;
  description: string;
  faqs?: FaqItem[];
}

function buildOpeningHours() {
  return {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    opens: '00:00',
    closes: '23:59',
  };
}

function buildOffer(service: Service, city: City) {
  const price = getServicePriceRange(service.slug);
  if (!price) return undefined;

  return {
    '@type': 'Offer',
    priceCurrency: price.currency,
    lowPrice: price.minPrice,
    highPrice: price.maxPrice,
    availability: 'https://schema.org/InStock',
    areaServed: { '@type': 'City', name: city.name },
    itemOffered: {
      '@type': 'Service',
      name: `${service.title} في ${city.name}`,
      description: service.shortDesc,
    },
  };
}

/**
 * يبني LocalBusiness Schema ديناميكي + Service + Breadcrumb + FAQ في @graph واحد.
 * متوافق مع Google: بدون itemReviewed داخل nested aggregateRating/review.
 */
export function buildServiceCityLocalBusinessGraph(input: ServiceCityLocalBusinessInput) {
  const { service, city, pageUrl, description, faqs = [] } = input;
  const siteUrl = SITE_CONFIG.url;
  const schemaType = getServiceSchemaType(service.slug);
  const geo = getCityGeo(city.slug);
  const businessId = `${pageUrl}#localbusiness`;
  const organizationId = `${siteUrl}/#organization`;

  const businessName = `كلين هاوس | ${service.title} في ${city.name}`;
  const offer = buildOffer(service, city);
  const priceRange = formatSchemaPriceRange(service.slug);

  const localBusiness: Record<string, unknown> = {
    '@type': schemaType,
    '@id': businessId,
    name: businessName,
    alternateName: [`Clean House KSA ${service.title} ${city.nameEn}`],
    description,
    url: pageUrl,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    image: `${siteUrl}${service.heroImage}`,
    logo: `${siteUrl}/images/logo.png`,
    foundingDate: SITE_CONFIG.established,
    parentOrganization: { '@id': organizationId },
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name,
      addressRegion: city.region,
      addressCountry: 'SA',
      ...(geo?.postalCode && { postalCode: geo.postalCode }),
    },
    areaServed: [
      { '@type': 'City', name: city.name },
      { '@type': 'AdministrativeArea', name: city.region },
    ],
    ...(geo && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: geo.latitude,
        longitude: geo.longitude,
      },
    }),
    openingHoursSpecification: buildOpeningHours(),
    ...(priceRange && { priceRange }),
    ...(offer && { makesOffer: offer }),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${service.title} — ${city.name}`,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.title,
            description: service.shortDesc,
            provider: { '@id': businessId },
            areaServed: city.name,
          },
        },
      ],
    },
  };

  const serviceNode = {
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    name: `${service.title} في ${city.name}`,
    description,
    url: pageUrl,
    serviceType: service.title,
    provider: { '@id': businessId },
    areaServed: { '@type': 'City', name: city.name },
  };

  const breadcrumbs = breadcrumbSchema([
    { name: 'الرئيسية', url: siteUrl },
    { name: 'الخدمات', url: `${siteUrl}/#services` },
    { name: service.title, url: `${siteUrl}/services/${service.slug}` },
    { name: `${service.title} في ${city.name}`, url: pageUrl },
  ]);

  const faq = faqs.length > 0 ? faqSchema(faqs) : null;

  return {
    '@context': 'https://schema.org',
    '@graph': [localBusiness, serviceNode, breadcrumbs, ...(faq ? [faq] : [])],
  };
}
