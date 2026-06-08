import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { SERVICES, SITE_CONFIG, SEO_KEYWORDS } from '@/constants';
import ServicePageClient from './ServicePageClient';

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) return {};

  const pageUrl = `${SITE_CONFIG.url}/services/${service.slug}`;

  return {
    title: service.metaTitle,
    description: service.metaDesc,
    keywords: `${service.title}, Clean House KSA, cleanhouseksa, كلين هاوس, ${SEO_KEYWORDS}`,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDesc,
      url: pageUrl,
      images: [{ url: `${SITE_CONFIG.url}${service.heroImage}`, width: 1200, height: 630, alt: `${service.title} - Clean House KSA` }],
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

function ServiceJsonLd({ service }: { service: (typeof SERVICES)[number] }) {
  const pageUrl = `${SITE_CONFIG.url}/services/${service.slug}`;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: service.title,
        description: service.metaDesc,
        url: pageUrl,
        provider: {
          '@type': 'LocalBusiness',
          name: 'كلين هاوس Clean House KSA',
          alternateName: SITE_CONFIG.alternateNames,
          telephone: SITE_CONFIG.phone,
          url: SITE_CONFIG.url,
        },
        areaServed: 'المملكة العربية السعودية',
        serviceType: service.title,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: SITE_CONFIG.url },
          { '@type': 'ListItem', position: 2, name: 'الخدمات', item: `${SITE_CONFIG.url}/#services` },
          { '@type': 'ListItem', position: 3, name: service.title, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
    />
  );
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const otherServices = SERVICES.filter((s) => s.slug !== params.slug);

  return (
    <>
      <ServiceJsonLd service={service} />
      <ServicePageClient service={service} otherServices={otherServices} />
    </>
  );
}
