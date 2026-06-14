import type { City } from '@/constants/cities';
import { SERVICES } from '@/constants';

type Service = (typeof SERVICES)[number];

export function getCityServiceMetaTitle(service: Service, city: City): string {
  return `${service.title} في ${city.name} | كلين هاوس Clean House KSA`;
}

export function getCityServiceMetaDescription(service: Service, city: City): string {
  const templates: Record<string, string> = {
    ac: `تنظيف مكيفات في ${city.name} — كلين هاوس تقدم تنظيف وتعقيم مكيفات سبليت وشباك ومركزية بالبخار في ${city.name}. فريق محترف وضمان. احجز الآن.`,
    carpet: `تنظيف سجاد في ${city.name} — كلين هاوس تغسل السجاد والموكيت بالبخار في منزلك في ${city.name}. إزالة البقع والتعقيم. احجز الآن.`,
    sofa: `تنظيف كنب في ${city.name} — كلين هاوس تنظف الكنب والمجالس العربية بالبخار في ${city.name}. إزالة البقع والروائح. احجز الآن.`,
    tank: `تنظيف خزانات في ${city.name} — كلين هاوس تعقم خزانات المياه الأرضية والعلوية في ${city.name} بمواد معتمدة. احجز الآن.`,
    pest: `مكافحة حشرات في ${city.name} — كلين هاوس تبيد الصراصير والنمل والقوارض في ${city.name} بمواد آمنة ومعتمدة. ضمان ٣ أشهر.`,
  };
  return templates[service.slug] || `${service.title} في ${city.name} — كلين هاوس Clean House KSA. احجز الآن.`;
}

export function getCityServiceH1(service: Service, city: City): string {
  return `${service.title} في ${city.name}`;
}

export function getCityServiceIntro(service: Service, city: City): string {
  return `تبحث عن ${service.title.toLowerCase()} في ${city.name}؟ كلين هاوس Clean House KSA تقدم خدمة ${service.title} احترافية في ${city.name} وجميع أحياء ${city.region}. ${service.description} نصل إليك في ${city.name} بفريق مدرب ومعدات حديثة ومواد معتمدة مع ضمان على الخدمة.`;
}

export function getCityServiceLongContent(service: Service, city: City): string[] {
  const base = [
    `لماذا تحتاج ${service.title} في ${city.name}؟`,
    `${city.longDescription} ومع ذلك، ${service.longDescription}`,
    `نخدم في ${city.name} الأحياء التالية: ${city.neighborhoods.slice(0, 6).join('، ')} وغيرها من المناطق. فريق كلين هاوس يصل إليك في أسرع وقت مع معدات متخصصة لـ${service.title}.`,
    `نضمن لك في ${city.name}: جودة عالية، مواد آمنة معتمدة، فريق محترف، أسعار شفافة بدون رسوم خفية، وضمان على الخدمة. تواصل معنا الآن للحصول على عرض سعر مجاني.`,
  ];
  return base;
}

export function getCityServiceFaqs(service: Service, city: City) {
  const common = [
    {
      question: `هل تقدمون ${service.title} في ${city.name}؟`,
      answer: `نعم، كلين هاوس تقدم ${service.title} في ${city.name} وجميع أحياء ${city.region}. نصل إليك في نفس اليوم في معظم الحالات.`,
    },
    {
      question: `كم تكلفة ${service.title} في ${city.name}؟`,
      answer: `تختلف الأسعار حسب حجم العمل ونوع الخدمة. تواصل معنا للحصول على عرض سعر مجاني ومخصص لاحتياجاتك في ${city.name}.`,
    },
    {
      question: `هل المواد المستخدمة آمنة في ${city.name}؟`,
      answer: 'نعم، جميع موادنا معتمدة وآمنة على الأطفال والحيوانات الأليفة. نستخدم منتجات حاصلة على شهادات اعتماد سعودية.',
    },
    {
      question: `هل تقدمون ضماناً على ${service.title} في ${city.name}؟`,
      answer: 'نعم، نضمن جودة جميع خدماتنا. في حال عدم رضاك، نعيد الخدمة مجاناً حتى تحصل على النتيجة المطلوبة.',
    },
    {
      question: `كيف أحجز ${service.title} في ${city.name}؟`,
      answer: `يمكنك الحجز عبر الاتصال على 0561345324 أو واتساب. سنحدد موعداً مناسباً لك في ${city.name} في أسرع وقت.`,
    },
  ];

  const serviceSpecific: Record<string, { question: string; answer: string }[]> = {
    ac: [
      {
        question: `كم يستغرق تنظيف المكيف في ${city.name}؟`,
        answer: 'يستغرق تنظيف المكيف الواحد من ٣٠ دقيقة إلى ساعة حسب نوع المكيف ومستوى التلوث.',
      },
    ],
    tank: [
      {
        question: `كم مرة يجب تنظيف الخزان في ${city.name}؟`,
        answer: 'ننصح بتنظيف خزان المياه كل ٦ أشهر على الأقل لضمان مياه شرب آمنة ونظيفة.',
      },
    ],
    pest: [
      {
        question: `هل مبيدات مكافحة الحشرات آمنة في ${city.name}؟`,
        answer: 'نعم، نستخدم مبيدات مرخصة من وزارة الصحة السعودية. ننصح بالخروج ٢-٣ ساعات ثم تهوية الغرف.',
      },
    ],
  };

  return [...common, ...(serviceSpecific[service.slug] || [])];
}

export function getCityFaqs(city: City) {
  return [
    {
      question: `ما هي خدمات كلين هاوس في ${city.name}؟`,
      answer: `نقدم في ${city.name}: تنظيف المكيفات، تنظيف الكنب والمجالس، تنظيف السجاد، تنظيف الخزانات، ومكافحة الحشرات. جميع الخدمات بضمان ومواد معتمدة.`,
    },
    {
      question: `هل تصلون لجميع أحياء ${city.name}؟`,
      answer: `نعم، نخدم جميع أحياء ${city.name} بما فيها: ${city.neighborhoods.slice(0, 5).join('، ')} وغيرها.`,
    },
    {
      question: `كم تكلفة خدمات التنظيف في ${city.name}؟`,
      answer: `الأسعار تختلف حسب نوع الخدمة وحجم العمل. تواصل معنا للحصول على عرض سعر مجاني ومنافس في ${city.name}.`,
    },
    {
      question: `هل تعملون في ${city.name} أيام العطل؟`,
      answer: 'نعم، كلين هاوس تعمل ٧ أيام في الأسبوع على مدار ٢٤ ساعة بما في ذلك أيام العطل الرسمية.',
    },
    {
      question: `كيف أحجز خدمة تنظيف في ${city.name}؟`,
      answer: `اتصل على 0561345324 أو راسلنا عبر واتساب. سنحدد موعداً مناسباً لك في ${city.name} خلال دقائق.`,
    },
  ];
}
