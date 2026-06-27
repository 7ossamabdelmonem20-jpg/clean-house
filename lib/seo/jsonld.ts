import { SITE_CONFIG } from '@/constants';
import type { City } from '@/constants/cities';

const siteUrl = SITE_CONFIG.url;
const businessId = `${siteUrl}/#business`;

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  areaServed?: string;
}) {
  return {
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: {
      '@id': businessId,
    },
    areaServed: opts.areaServed || 'المملكة العربية السعودية',
    serviceType: opts.name,
  };
}

export function faqSchema(
  items: { question: string; answer: string }[] = []
) {
  const validItems = items.filter(
    (item) =>
      item &&
      typeof item.question === 'string' &&
      item.question.trim().length > 0 &&
      typeof item.answer === 'string' &&
      item.answer.trim().length > 0
  );

  return {
    '@type': 'FAQPage',
    mainEntity: validItems.map((item) => ({
      '@type': 'Question',
      name: item.question.trim(),
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer.trim(),
      },
    })),
  };
}

export function localBusinessCitySchema(city: City) {
  return {
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}/cities/${city.slug}#business`,
    name: `كلين هاوس Clean House KSA - ${city.name}`,
    description: city.metaDescription,
    url: `${siteUrl}/cities/${city.slug}`,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    image: `${siteUrl}/images/logo.png`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name,
      addressRegion: city.region,
      addressCountry: 'SA',
    },
    areaServed: {
      '@type': 'City',
      name: city.name,
    },
    openingHoursSpecification: {
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
    },
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  return {
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    url: opts.url,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified || opts.datePublished,
    image: opts.image || `${siteUrl}/images/logo.png`,
    author: {
      '@type': 'Organization',
      name: 'كلين هاوس Clean House KSA',
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'كلين هاوس Clean House KSA',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/logo.png`,
      },
    },
    inLanguage: 'ar-SA',
  };
}

export function buildJsonLd(...schemas: Record<string, unknown>[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas.filter(Boolean),
  };
}