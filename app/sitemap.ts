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

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.cleanhouseksa.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },

    {
      url: 'https://www.cleanhouseksa.com/services',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];
}