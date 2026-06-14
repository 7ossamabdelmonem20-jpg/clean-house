import { MetadataRoute } from 'next';
import { SERVICES, SITE_CONFIG } from '@/constants';
import { SEO_CITIES } from '@/constants/cities';
import { BLOG_POSTS } from '@/constants/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;
  const now = new Date();

  const cityPages = SEO_CITIES.map((c) => ({
    url: `${baseUrl}/cities/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: c.priority,
  }));

  const servicePages = SERVICES.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const serviceCityPages = SERVICES.flatMap((s) =>
    SEO_CITIES.map((c) => ({
      url: `${baseUrl}/services/${s.slug}/${c.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),
  );

  const blogPages = BLOG_POSTS.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(p.dateModified),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/cities`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    ...cityPages,
    ...servicePages,
    ...serviceCityPages,
    ...blogPages,
  ];
}
