import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { SERVICES } from '@/constants';
import ServicePageClient from './ServicePageClient';

// توليد الـ static paths للـ ٤ خدمات
export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

// SEO ديناميكي لكل خدمة
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) return {};

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.metaDesc,
    provider: {
      '@type': 'LocalBusiness',
      name: 'كلين هاوس',
      telephone: '+966561345324',
      areaServed: 'المملكة العربية السعودية',
    },
    serviceType: service.title,
    url: `https://cleanhouse-sa.com/services/${service.slug}`,
  };

  return {
    title: service.metaTitle,
    description: service.metaDesc,
    keywords: `${service.title}, ${service.shortDesc}, كلين هاوس, شركة تنظيف السعودية`,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDesc,
      url: `https://cleanhouse-sa.com/services/${service.slug}`,
      images: [{ url: service.heroImage, width: 1200, height: 630, alt: service.title }],
    },
    alternates: {
      canonical: `https://cleanhouse-sa.com/services/${service.slug}`,
    },
    other: {
      'script:ld+json': JSON.stringify(jsonLd),
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) notFound();

  // باقي الخدمات للـ related section
  const otherServices = SERVICES.filter((s) => s.slug !== params.slug);

  return <ServicePageClient service={service} otherServices={otherServices} />;
}
