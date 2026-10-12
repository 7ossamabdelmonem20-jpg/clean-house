import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, MessageCircle, Code2, ExternalLink } from 'lucide-react';
import { DEVELOPMENT_PARTNER, SITE_CONFIG, SERVICES } from '@/constants';
import { SEO_CITIES } from '@/constants/cities';
import { ICON_MAP } from '@/utils/iconMap';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-700 text-white" role="contentinfo">
      {/* Wave top */}
      {/* <div className="bg-white">
        <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="block">
          <path d="M0 0L1440 0L1440 32C1200 64 720 64 0 32L0 0Z" fill="#1E2937" />
        </svg>
      </div> */}

      <div className="container-custom pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl overflow-hidden flex-shrink-0 bg-white">
                <Image
                  src="/images/logo.png"
                  alt="كلين هاوس Clean House KSA"
                  width={44}
                  height={44}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-black text-lg text-white block">كلين هاوس</span>
                <span className="block text-xs text-teal-400 font-inter font-medium" lang="en">Clean House KSA</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              {SITE_CONFIG.name} {SITE_CONFIG.nameEn} KSA — أفضل شركة تنظيف احترافي في المملكة العربية السعودية.
              نخدم عملاءنا بأعلى معايير الجودة منذ عام ٢٠١٥.
            </p>
            <div className="flex gap-3">
              <a
                href={SITE_CONFIG.whatsapp}
                className="flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white py-2 px-4 rounded-xl text-xs font-semibold transition-colors cta-whatsapp"
                target="_blank" rel="noopener noreferrer"
                id="footer-whatsapp-trigger"
                data-gtm-click="footer-whatsapp"
                aria-label="تواصل عبر واتساب"
              >
                <MessageCircle size={14} /> واتساب
              </a>
              <a
                href={SITE_CONFIG.tel}
                className="flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white py-2 px-4 rounded-xl text-xs font-semibold transition-colors cta-call"
                id="footer-call-trigger"
                data-gtm-click="footer-call"
                aria-label="اتصل بنا"
              >
                <Phone size={14} /> اتصل
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-base mb-5 text-white">خدماتنا</h3>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => {
                const SvcIcon = ICON_MAP[s.icon];
                return (
                  <li key={s.id}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="text-slate-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-2"
                    >
                      {SvcIcon && <SvcIcon size={14} strokeWidth={1.75} className="flex-shrink-0" />}
                      {s.title}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link href="#contact" className="text-slate-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-2">
                  <Phone size={14} strokeWidth={1.75} className="flex-shrink-0" />
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h3 className="font-bold text-base mb-5 text-white">مناطق الخدمة</h3>
            <ul className="space-y-2 mb-4">
              {SEO_CITIES.slice(0, 6).map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/cities/${city.slug}`}
                    className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
                  >
                    شركة تنظيف في {city.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/cities" className="text-teal-400 hover:text-teal-300 text-xs font-semibold">
              جميع المدن ←
            </Link>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-base mb-5 text-white">تواصل معنا</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-500 text-xs mb-0.5">الهاتف والواتساب</p>
                  <a href={SITE_CONFIG.tel} className="text-white font-bold text-sm hover:text-primary-400 transition-colors" dir="ltr">
                    {SITE_CONFIG.phoneFormatted}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-500 text-xs mb-0.5">البريد الإلكتروني</p>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-white text-sm hover:text-primary-400 transition-colors">
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-500 text-xs mb-0.5">الموقع</p>
                  <p className="text-white text-sm">{SITE_CONFIG.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-500 text-xs mb-0.5">ساعات العمل</p>
                  <p className="text-white text-sm">{SITE_CONFIG.workingHours}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Development partner */}
        <div className="mb-6 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-l from-primary-500/10 via-white/[0.04] to-teal-500/10 p-1">
          <div className="flex flex-col items-center justify-between gap-4 rounded-xl bg-navy-800/70 px-5 py-4 text-center sm:flex-row sm:text-right">
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-teal-400/20 bg-teal-400/10 text-teal-300 shadow-glow-teal">
                <Code2 size={22} strokeWidth={1.8} aria-hidden="true" />
              </div>
              <div>
                <p className="font-bold text-white">{DEVELOPMENT_PARTNER.attribution}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-400 sm:text-sm">
                  {DEVELOPMENT_PARTNER.description}
                </p>
              </div>
            </div>
            <a
              href={DEVELOPMENT_PARTNER.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full flex-shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-teal-500 to-primary-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-teal-950/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-glow-teal focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-800 sm:w-auto"
              aria-label={`زيارة موقع شركة ${DEVELOPMENT_PARTNER.name} (يفتح في نافذة جديدة)`}
            >
              <span>تعرّف على نظّم</span>
              <ExternalLink
                size={15}
                className="transition-transform duration-200 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {year} كلين هاوس Clean House KSA. جميع الحقوق محفوظة.</p>
          <p className="text-center">
            <span className="text-teal-400/70 font-inter" lang="en">cleanhouseksa</span>
            {' '}| شركة تنظيف معتمدة | الرياض | جدة | الدمام
          </p>
          <p className="text-slate-600">تنظيف احترافي بضمان الجودة</p>
        </div>
      </div>
    </footer>
  );
}
