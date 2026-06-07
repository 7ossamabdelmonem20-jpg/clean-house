// import { MetadataRoute } from 'next';

// export default function robots(): MetadataRoute.Robots {
//   return {
//     rules: { userAgent: '*', allow: '/' },
//     sitemap: 'https://cleanhouseksa.com/sitemap.xml',
//   };
// }


import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.cleanhouseksa.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',

        disallow: [
          '/api/',
          '/admin/',
          '/dashboard/',
          '/private/',
          '/_next/',
        ],
      },
    ],

    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}