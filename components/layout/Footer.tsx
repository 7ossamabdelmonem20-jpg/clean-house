import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { SITE_CONFIG, SERVICES, CITIES } from '@/constants';
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
                className="flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white py-2 px-4 rounded-xl text-xs font-semibold transition-colors"
                target="_blank" rel="noopener noreferrer"
                aria-label="تواصل عبر واتساب"
              >
                <MessageCircle size={14} /> واتساب
              </a>
              <a
                href={SITE_CONFIG.tel}
                className="flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white py-2 px-4 rounded-xl text-xs font-semibold transition-colors"
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
            <div className="flex flex-wrap gap-2">
              {CITIES.map((city) => (
                <span
                  key={city}
                  className="bg-white/5 border border-white/10 text-slate-400 text-xs py-1 px-3 rounded-lg hover:border-teal-500/40 hover:text-teal-400 cursor-default transition-colors"
                >
                  {city}
                </span>
              ))}
            </div>
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
