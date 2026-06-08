import type { Metadata } from 'next';
import { Cairo, Tajawal, Inter } from 'next/font/google';
import './globals.css';
import { SITE_CONFIG, SEO_KEYWORDS } from '@/constants';

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

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

const siteUrl = SITE_CONFIG.url;
const ogImage = `${siteUrl}/images/logo.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: SITE_CONFIG.seoTitle,
    template: '%s | Clean House KSA كلين هاوس',
  },
  description: SITE_CONFIG.seoDescription,
  keywords: SEO_KEYWORDS,
  applicationName: 'Clean House KSA',
  authors: [{ name: 'كلين هاوس Clean House KSA', url: siteUrl }],
  creator: 'Clean House KSA | كلين هاوس',
  publisher: 'cleanhouseksa',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: siteUrl,
    siteName: 'كلين هاوس Clean House KSA',
    title: SITE_CONFIG.seoTitle,
    description: SITE_CONFIG.seoDescription,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Clean House KSA كلين هاوس - شركة تنظيف احترافي في السعودية',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.seoTitle,
    description: SITE_CONFIG.seoDescription,
    images: [ogImage],
  },
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  manifest: '/manifest.webmanifest',
  alternates: {
    canonical: siteUrl,
    languages: { 'ar-SA': siteUrl },
  },
  ...(process.env.GOOGLE_SITE_VERIFICATION && {
    verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
  }),
};

const businessRef = {
  '@type': 'LocalBusiness',
  '@id': `${siteUrl}/#business`,
  name: 'كلين هاوس Clean House KSA',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'كلين هاوس Clean House KSA',
      alternateName: SITE_CONFIG.alternateNames,
      description: SITE_CONFIG.seoDescription,
      inLanguage: 'ar-SA',
      publisher: { '@id': `${siteUrl}/#business` },
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${siteUrl}/#business`,
      name: 'كلين هاوس Clean House KSA',
      alternateName: SITE_CONFIG.alternateNames,
      description: SITE_CONFIG.seoDescription,
      url: siteUrl,
      telephone: SITE_CONFIG.phone,
      email: SITE_CONFIG.email,
      foundingDate: SITE_CONFIG.established,
      image: ogImage,
      logo: ogImage,
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
        dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
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
        itemReviewed: businessRef,
        ratingValue: '4.9',
        reviewCount: '1250',
        bestRating: '5',
        worstRating: '1',
      },
      review: [
        {
          '@type': 'Review',
          itemReviewed: businessRef,
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5', worstRating: '1' },
          author: { '@type': 'Person', name: 'أحمد المالكي' },
          reviewBody: 'خدمة ممتازة جداً! قاموا بتنظيف مكيفات البيت كلها بطريقة احترافية. لاحظت فرقاً واضحاً في جودة الهواء والبرودة. أنصح بهم بشدة.',
          datePublished: '2024-03-15',
        },
        {
          '@type': 'Review',
          itemReviewed: businessRef,
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5', worstRating: '1' },
          author: { '@type': 'Person', name: 'نورة الشمري' },
          reviewBody: 'تنظيف الكنب كان رائعاً! أزالوا بقعة قهوة كانت من شهر وما قدرت أزيلها. الكنب صار كأنه جديد. شكراً كلين هاوس.',
          datePublished: '2024-04-02',
        },
        {
          '@type': 'Review',
          itemReviewed: businessRef,
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5', worstRating: '1' },
          author: { '@type': 'Person', name: 'خالد العتيبي' },
          reviewBody: 'تنظيف السجاد كان على أعلى مستوى. جاءت الفرقة في الوقت المحدد وأنجزوا العمل باحترافية تامة. سأتعامل معهم دائماً.',
          datePublished: '2024-05-10',
        },
        {
          '@type': 'Review',
          itemReviewed: businessRef,
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5', worstRating: '1' },
          author: { '@type': 'Person', name: 'فيصل الحربي' },
          reviewBody: 'كنت أعاني من مشكلة صراصير من فترة طويلة وجربت أكثر من شركة بدون فائدة. كلين هاوس حلّت المشكلة من أول زيارة والحمد لله ما رجعت الحشرات.',
          datePublished: '2024-07-22',
        },
        {
          '@type': 'Review',
          itemReviewed: businessRef,
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5', worstRating: '1' },
          author: { '@type': 'Person', name: 'سارة القحطاني' },
          reviewBody: 'قاموا بتنظيف خزان المياه في وقت قصير جداً وبكفاءة عالية. أنا مطمئنة الآن على مياه الشرب لعائلتي. خدمة موثوقة ومعتمدة.',
          datePublished: '2024-06-18',
        },
        {
          '@type': 'Review',
          itemReviewed: businessRef,
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5', worstRating: '1' },
          author: { '@type': 'Person', name: 'محمد الزهراني' },
          reviewBody: 'أفضل شركة تنظيف تعاملت معها. الأسعار معقولة والخدمة ممتازة. تنظيف المكيفات كان شامل وسريع والفريق محترف جداً.',
          datePublished: '2024-08-05',
        },
        {
          '@type': 'Review',
          itemReviewed: businessRef,
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5', worstRating: '1' },
          author: { '@type': 'Person', name: 'هند الدوسري' },
          reviewBody: 'المجالس العربية بعد التنظيف بدت كأنها جديدة! الفريق كان محترماً وشغلهم نظيف. سأطلب منهم تنظيف السجاد أيضاً.',
          datePublished: '2024-09-12',
        },
      ],
      sameAs: [SITE_CONFIG.whatsapp],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'ما مناطق الخدمة التي تغطيها كلين هاوس Clean House KSA؟',
          acceptedAnswer: { '@type': 'Answer', text: 'نغطي جميع مناطق المملكة: الرياض، جدة، الدمام، مكة المكرمة، المدينة المنورة وغيرها.' },
        },
        {
          '@type': 'Question',
          name: 'هل المواد المستخدمة آمنة على الأطفال والحيوانات الأليفة؟',
          acceptedAnswer: { '@type': 'Answer', text: 'نعم، جميع موادنا معتمدة وآمنة على الأطفال والحيوانات الأليفة وحاصلة على شهادات اعتماد سعودية.' },
        },
        {
          '@type': 'Question',
          name: 'هل تقدمون ضماناً على الخدمة؟',
          acceptedAnswer: { '@type': 'Answer', text: 'نعم، نضمن جودة خدماتنا بالكامل ونعيد الخدمة مجاناً عند عدم الرضا.' },
        },
        {
          '@type': 'Question',
          name: 'كم يستغرق تنظيف المكيفات؟',
          acceptedAnswer: { '@type': 'Answer', text: 'يستغرق تنظيف المكيف الواحد من ٣٠ دقيقة إلى ساعة حسب نوع المكيف وحجم التلوث.' },
        },
        {
          '@type': 'Question',
          name: 'هل تعملون في أيام العطل؟',
          acceptedAnswer: { '@type': 'Answer', text: 'نعم، كلين هاوس Clean House KSA تعمل ٧ أيام في الأسبوع على مدار ٢٤ ساعة بما في ذلك العطل الرسمية.' },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${tajawal.variable} ${inter.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-cairo antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
