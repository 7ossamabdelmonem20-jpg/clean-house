import type { Metadata } from "next";
import { Cairo, Tajawal } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/constants";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  variable: "--font-tajawal",
  weight: ["300", "400", "500", "700", "800"],
  display: "swap",
});

const keywords = [
  "تنظيف المكيفات",
  "شركة تنظيف مكيفات",
  "تنظيف مكيفات سبليت",
  "تنظيف مكيفات شباك",
  "تنظيف مكيفات مركزية",
  "غسيل مكيفات",
  "تعقيم المكيفات",
  "تنظيف فلاتر المكيف",
  "تنظيف الكنب والمجالس",
  "شركة تنظيف كنب",
  "تنظيف كنب بالبخار",
  "غسيل كنب",
  "تنظيف مجالس",
  "تنظيف كنب جلد",
  "تنظيف كنب قماش",
  "إزالة بقع الكنب",
  "تنظيف السجاد والموكيت",
  "شركة تنظيف سجاد",
  "غسيل سجاد",
  "تنظيف سجاد بالبخار",
  "غسيل موكيت",
  "تنظيف سجاد منزلي",
  "إزالة بقع السجاد",
  "تعقيم السجاد",
  "تنظيف الخزانات",
  "شركة تنظيف خزانات",
  "تنظيف خزانات مياه",
  "غسيل خزانات المياه",
  "تعقيم خزانات المياه",
  "تنظيف خزانات أرضية",
  "تنظيف خزانات علوية",
  "شركة تنظيف في السعودية",
  "شركة تنظيف بالرياض",
  "شركة تنظيف بجدة",
  "شركة تنظيف بالدمام",
  "خدمات تنظيف احترافية",
  "شركة تنظيف منازل",
  "تنظيف بالبخار",
  "تنظيف وتعقيم",
  "أفضل خدمات التنظيف",
  "شركة تنظيف معتمدة في السعودية",
  "تنظيف شامل للمنازل",
  "كلين هاوس",
  "أفضل شركة تنظيف",
  "أرخص شركة تنظيف",
  "شركة تنظيف مع الضمان",
  "تنظيف فوري",
  "شركة تنظيف 24 ساعة",
  "مكافحة الحشرات",
  "شركة مكافحة حشرات",
  "مكافحة الصراصير",
  "مكافحة النمل",
  "مكافحة البق",
  "مكافحة القوارض",
  "رش المبيدات",
  "إبادة الحشرات",
  "شركة مكافحة حشرات معتمدة",
  "مكافحة حشرات بالسعودية",
  "رش حشرات منازل",
  "مكافحة حشرات بالرياض",
  "مكافحة حشرات بجدة",
  "مكافحة حشرات بالدمام",
  "إبادة الحشرات المنزلية",
  "رش مبيدات آمنة",
  "مكافحة الفئران والقوارض",
].join(", ");

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cleanhouseksa.com"),
  title: {
    default: "كلين هاوس | أفضل شركة تنظيف ومكافحة حشرات في السعودية",
    template: "%s | كلين هاوس للتنظيف الاحترافي",
  },
  description: SITE_CONFIG.description,
  keywords,
  authors: [{ name: "كلين هاوس", url: "https://www.cleanhouseksa.com" }],
  creator: "كلين هاوس",
  publisher: "كلين هاوس",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://www.cleanhouseksa.com",
    siteName: "كلين هاوس",
    title: "كلين هاوس | أفضل شركة تنظيف احترافي في السعودية",
    description: SITE_CONFIG.description,
    images: [
      {
        url: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "كلين هاوس - شركة تنظيف احترافي في السعودية",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "كلين هاوس | شركة تنظيف احترافي في السعودية",
    description: SITE_CONFIG.description,
  },
  alternates: {
    canonical: "https://www.cleanhouseksa.com",
    languages: { "ar-SA": "https://www.cleanhouseksa.com" },
  },
  // verification: {
  //   google: "your-google-verification-code",
  // },
};

// ⚠️ JSON-LD كـ string ثابت — يضمن ظهوره في الـ HTML مباشرة بدون اعتماد على JS
const JSONLD_STRING = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.cleanhouseksa.com",
      "name": "كلين هاوس للتنظيف الاحترافي",
      "alternateName": "Clean House Saudi Arabia",
      "description": "شركة كلين هاوس – أفضل شركة تنظيف احترافي في السعودية. نقدم خدمات تنظيف المكيفات، تنظيف الكنب، تنظيف السجاد، تنظيف الخزانات، ومكافحة الحشرات بأعلى معايير الجودة والتعقيم.",
      "url": "https://www.cleanhouseksa.com",
      "telephone": "+966561345324",
      "email": "info@cleanhouseksa.com",
      "foundingDate": "2015",
      "areaServed": [
        { "@type": "City", "name": "الرياض" },
        { "@type": "City", "name": "جدة" },
        { "@type": "City", "name": "الدمام" },
        { "@type": "City", "name": "مكة المكرمة" },
        { "@type": "Country", "name": "المملكة العربية السعودية" }
      ],
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "SA",
        "addressRegion": "الرياض"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "00:00",
        "closes": "23:59"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "خدمات التنظيف الاحترافية",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "تنظيف المكيفات", "description": "تنظيف وتعقيم جميع أنواع المكيفات بالبخار" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "تنظيف الكنب والمجالس", "description": "غسيل وتعقيم الكنب والمجالس العربية" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "تنظيف السجاد والموكيت", "description": "غسيل السجاد بالبخار وإزالة البقع" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "تنظيف الخزانات", "description": "تنظيف وتعقيم خزانات المياه الأرضية والعلوية" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "مكافحة الحشرات", "description": "إبادة الحشرات والقوارض بمواد معتمدة وآمنة" } }
        ]
      },
      "aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": 4.9,
  "reviewCount": 7,
  "bestRating": 5,
  "worstRating": 1
},
      "review": [
  {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "أحمد المالكي"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": 5,
      "bestRating": 5
    },
    "reviewBody": "خدمة ممتازة جداً! قاموا بتنظيف مكيفات البيت كلها بطريقة احترافية. لاحظت فرقاً واضحاً في جودة الهواء والبرودة. أنصح بهم بشدة.",
    "datePublished": "2024-03-15",
    "itemReviewed": {
      "@type": "LocalBusiness",
      "@id": "https://www.cleanhouseksa.com",
      "name": "كلين هاوس للتنظيف الاحترافي"
    }
  },
  {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "نورة الشمري"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": 5,
      "bestRating": 5
    },
    "reviewBody": "تنظيف الكنب كان رائعاً! أزالوا بقعة قهوة كانت من شهر وما قدرت أزيلها. الكنب صار كأنه جديد.",
    "datePublished": "2024-04-02",
    "itemReviewed": {
      "@type": "LocalBusiness",
      "@id": "https://www.cleanhouseksa.com",
      "name": "كلين هاوس للتنظيف الاحترافي"
    }
  },
  {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "خالد العتيبي"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": 5,
      "bestRating": 5
    },
    "reviewBody": "تنظيف السجاد كان على أعلى مستوى. جاءت الفرقة في الوقت المحدد وأنجزوا العمل باحترافية تامة.",
    "datePublished": "2024-05-10",
    "itemReviewed": {
      "@type": "LocalBusiness",
      "@id": "https://www.cleanhouseksa.com",
      "name": "كلين هاوس للتنظيف الاحترافي"
    }
  },
  {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "سارة القحطاني"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": 5,
      "bestRating": 5
    },
    "reviewBody": "قاموا بتنظيف خزان المياه في وقت قصير جداً وبكفاءة عالية.",
    "datePublished": "2024-06-18",
    "itemReviewed": {
      "@type": "LocalBusiness",
      "@id": "https://www.cleanhouseksa.com",
      "name": "كلين هاوس للتنظيف الاحترافي"
    }
  },
  {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "فيصل الحربي"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": 5,
      "bestRating": 5
    },
    "reviewBody": "كلين هاوس حلّت مشكلة الحشرات من أول زيارة والحمد لله ما رجعت.",
    "datePublished": "2024-07-22",
    "itemReviewed": {
      "@type": "LocalBusiness",
      "@id": "https://www.cleanhouseksa.com",
      "name": "كلين هاوس للتنظيف الاحترافي"
    }
  },
  {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "محمد الزهراني"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": 5,
      "bestRating": 5
    },
    "reviewBody": "أفضل شركة تنظيف تعاملت معها. الأسعار معقولة والخدمة ممتازة.",
    "datePublished": "2024-08-05",
    "itemReviewed": {
      "@type": "LocalBusiness",
      "@id": "https://www.cleanhouseksa.com",
      "name": "كلين هاوس للتنظيف الاحترافي"
    }
  },
  {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "هند الدوسري"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": 5,
      "bestRating": 5
    },
    "reviewBody": "المجالس العربية بعد التنظيف بدت كأنها جديدة والفريق محترف جداً.",
    "datePublished": "2024-09-12",
    "itemReviewed": {
      "@type": "LocalBusiness",
      "@id": "https://www.cleanhouseksa.com",
      "name": "كلين هاوس للتنظيف الاحترافي"
    }
  }
],
      "sameAs": ["https://wa.me/966561345324"]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "ما مناطق الخدمة التي تغطيها كلين هاوس؟",
          "acceptedAnswer": { "@type": "Answer", "text": "نغطي جميع مناطق المملكة: الرياض، جدة، الدمام، مكة المكرمة، المدينة المنورة وغيرها." }
        },
        {
          "@type": "Question",
          "name": "هل المواد المستخدمة آمنة على الأطفال والحيوانات الأليفة؟",
          "acceptedAnswer": { "@type": "Answer", "text": "نعم، جميع موادنا معتمدة وآمنة على الأطفال والحيوانات الأليفة وحاصلة على شهادات اعتماد سعودية." }
        },
        {
          "@type": "Question",
          "name": "هل تقدمون ضماناً على الخدمة؟",
          "acceptedAnswer": { "@type": "Answer", "text": "نعم، نضمن جودة خدماتنا بالكامل ونعيد الخدمة مجاناً عند عدم الرضا." }
        },
        {
          "@type": "Question",
          "name": "كم يستغرق تنظيف المكيفات؟",
          "acceptedAnswer": { "@type": "Answer", "text": "يستغرق تنظيف المكيف الواحد من ٣٠ دقيقة إلى ساعة حسب نوع المكيف وحجم التلوث." }
        },
        {
          "@type": "Question",
          "name": "هل تعملون في أيام العطل؟",
          "acceptedAnswer": { "@type": "Answer", "text": "نعم، كلين هاوس تعمل ٧ أيام في الأسبوع على مدار ٢٤ ساعة بما في ذلك العطل الرسمية." }
        }
      ]
    }
  ]
}`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${tajawal.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSONLD_STRING }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-cairo antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
