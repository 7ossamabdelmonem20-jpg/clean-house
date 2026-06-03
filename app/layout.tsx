import type { Metadata } from 'next';
import { Cairo, Tajawal } from 'next/font/google';
import './globals.css';
import { SITE_CONFIG } from '@/constants';

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const tajawal = Tajawal({
  subsets: ['arabic'],
  variable: '--font-tajawal',
  weight: ['300', '400', '500', '700', '800'],
  display: 'swap',
});

const keywords = [
  'تنظيف المكيفات', 'شركة تنظيف مكيفات', 'تنظيف مكيفات سبليت', 'تنظيف مكيفات شباك',
  'تنظيف مكيفات مركزية', 'غسيل مكيفات', 'تعقيم المكيفات', 'تنظيف فلاتر المكيف',
  'تنظيف الكنب والمجالس', 'شركة تنظيف كنب', 'تنظيف كنب بالبخار', 'غسيل كنب',
  'تنظيف مجالس', 'تنظيف كنب جلد', 'تنظيف كنب قماش', 'إزالة بقع الكنب',
  'تنظيف السجاد والموكيت', 'شركة تنظيف سجاد', 'غسيل سجاد', 'تنظيف سجاد بالبخار',
  'غسيل موكيت', 'تنظيف سجاد منزلي', 'إزالة بقع السجاد', 'تعقيم السجاد',
  'تنظيف الخزانات', 'شركة تنظيف خزانات', 'تنظيف خزانات مياه', 'غسيل خزانات المياه',
  'تعقيم خزانات المياه', 'تنظيف خزانات أرضية', 'تنظيف خزانات علوية',
  'شركة تنظيف في السعودية', 'شركة تنظيف بالرياض', 'شركة تنظيف بجدة',
  'شركة تنظيف بالدمام', 'خدمات تنظيف احترافية', 'شركة تنظيف منازل',
  'تنظيف بالبخار', 'تنظيف وتعقيم', 'أفضل خدمات التنظيف', 'شركة تنظيف معتمدة في السعودية',
  'تنظيف شامل للمنازل', 'كلين هاوس', 'أفضل شركة تنظيف', 'أرخص شركة تنظيف',
  'شركة تنظيف مع الضمان', 'تنظيف فوري', 'شركة تنظيف 24 ساعة',
  'مكافحة الحشرات', 'شركة مكافحة حشرات', 'مكافحة الصراصير', 'مكافحة النمل',
  'مكافحة البق', 'مكافحة القوارض', 'رش المبيدات', 'إبادة الحشرات',
  'شركة مكافحة حشرات معتمدة', 'مكافحة حشرات بالسعودية', 'رش حشرات منازل',
  'مكافحة حشرات بالرياض', 'مكافحة حشرات بجدة', 'مكافحة حشرات بالدمام',
  'إبادة الحشرات المنزلية', 'رش مبيدات آمنة', 'مكافحة الفئران والقوارض',
].join(', ');

export const metadata: Metadata = {
  metadataBase: new URL('https://cleanhouse-sa.com'),
  title: {
    default: 'كلين هاوس | أفضل شركة تنظيف ومكافحة حشرات في السعودية',
    template: '%s | كلين هاوس للتنظيف الاحترافي',
  },
  description: SITE_CONFIG.description,
  keywords,
  authors: [{ name: 'كلين هاوس', url: 'https://cleanhouse-sa.com' }],
  creator: 'كلين هاوس',
  publisher: 'كلين هاوس',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: 'https://cleanhouse-sa.com',
    siteName: 'كلين هاوس',
    title: 'كلين هاوس | أفضل شركة تنظيف احترافي في السعودية',
    description: SITE_CONFIG.description,
    images: [
      {
        url: '/images/heroimage/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'كلين هاوس - شركة تنظيف احترافي في السعودية',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'كلين هاوس | شركة تنظيف احترافي في السعودية',
    description: SITE_CONFIG.description,
  },
  alternates: {
    canonical: 'https://cleanhouse-sa.com',
    languages: { 'ar-SA': 'https://cleanhouse-sa.com' },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://cleanhouse-sa.com',
      name: 'كلين هاوس للتنظيف الاحترافي',
      alternateName: 'Clean House Saudi Arabia',
      description: SITE_CONFIG.description,
      url: 'https://cleanhouse-sa.com',
      telephone: '+966561345324',
      email: 'info@cleanhouse-sa.com',
      foundingDate: '2015',
      areaServed: [
        { '@type': 'City', name: 'الرياض' },
        { '@type': 'City', name: 'جدة' },
        { '@type': 'City', name: 'الدمام' },
        { '@type': 'City', name: 'مكة المكرمة' },
        { '@type': 'Country', name: 'المملكة العربية السعودية' },
      ],
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'SA',
        addressRegion: 'الرياض',
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
        opens: '00:00',
        closes: '23:59',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'خدمات التنظيف الاحترافية',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'تنظيف المكيفات', description: 'تنظيف وتعقيم جميع أنواع المكيفات بالبخار' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'تنظيف الكنب والمجالس', description: 'غسيل وتعقيم الكنب والمجالس العربية' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'تنظيف السجاد والموكيت', description: 'غسيل السجاد بالبخار وإزالة البقع' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'تنظيف الخزانات', description: 'تنظيف وتعقيم خزانات المياه الأرضية والعلوية' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'مكافحة الحشرات', description: 'إبادة الحشرات والقوارض بمواد معتمدة وآمنة' } },
        ],
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '1250',
        bestRating: '5',
      },
      sameAs: ['https://wa.me/966561345324'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'ما مناطق الخدمة؟', acceptedAnswer: { '@type': 'Answer', text: 'نغطي جميع مناطق المملكة: الرياض، جدة، الدمام، مكة المكرمة، المدينة المنورة وغيرها.' } },
        { '@type': 'Question', name: 'هل المواد آمنة للأطفال؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم، جميع موادنا معتمدة وآمنة على الأطفال والحيوانات الأليفة.' } },
        { '@type': 'Question', name: 'هل يوجد ضمان على الخدمة؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم، نضمن جودة خدماتنا بالكامل ونعيد الخدمة مجاناً عند عدم الرضا.' } },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${tajawal.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-cairo antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
