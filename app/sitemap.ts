// import { MetadataRoute } from 'next';
// import { SERVICES } from '@/constants';

// export default function sitemap(): MetadataRoute.Sitemap {
//   const baseUrl = 'https://cleanhouseksa.com';

//   const servicePages = SERVICES.map((s) => ({
//     url: `${baseUrl}/services/${s.slug}`,
//     lastModified: new Date(),
//     changeFrequency: 'monthly' as const,
//     priority: 0.9,
//   }));

//   return [
//     { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
//     { url: `${baseUrl}/#about`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
//     { url: `${baseUrl}/#contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
//     ...servicePages,
//   ];
// }


import { MetadataRoute } from 'next';
import { SERVICES } from '@/constants';

const baseUrl = 'https://www.cleanhouseksa.com';

export default function sitemap(): MetadataRoute.Sitemap {
  // الصفحة الرئيسية
  const homePage = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 1,
  };

  // صفحات الخدمات
  const servicePages = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // صفحات ثابتة موجودة فعلًا
  const staticPages = [
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },

    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },

    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  return [
    homePage,
    ...staticPages,
    ...servicePages,
  ];
}