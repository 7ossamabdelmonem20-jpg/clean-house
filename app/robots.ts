// import { MetadataRoute } from 'next';

// export default function robots(): MetadataRoute.Robots {
//   return {
//     rules: { userAgent: '*', allow: '/' },
//     sitemap: 'https://cleanhouseksa.com/sitemap.xml',
//   };
// }

import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },

    sitemap: 'https://www.cleanhouseksa.com/sitemap.xml',
  };
}