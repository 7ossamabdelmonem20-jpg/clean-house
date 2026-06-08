import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/constants';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'كلين هاوس Clean House KSA',
    short_name: 'cleanhouseksa',
    description: 'Clean House KSA – شركة تنظيف احترافية في المملكة العربية السعودية',
    start_url: SITE_CONFIG.url,
    id: SITE_CONFIG.url,
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1d4ed8',
    lang: 'ar-SA',
    dir: 'rtl',
    icons: [
      {
        src: '/images/logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
