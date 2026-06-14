import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/constants';

const siteUrl = SITE_CONFIG.url;
const defaultOgImage = `${siteUrl}/images/logo.png`;

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  ogImage = defaultOgImage,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    ...(keywords && { keywords }),
    robots: noIndex
      ? { index: false, follow: true }
      : { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
    openGraph: {
      type: 'website',
      locale: 'ar_SA',
      url,
      siteName: 'كلين هاوس Clean House KSA',
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
      languages: { 'ar-SA': url },
    },
  };
}
