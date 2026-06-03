import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { SITE_CONFIG, SERVICES, CITIES } from '@/constants';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      {/* Wave top */}
      <div className="bg-white">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="block">
          <path d="M0 0L1440 0L1440 40C1200 80 720 80 0 40L0 0Z" fill="#111827" />
        </svg>
      </div>

      <div className="container-custom pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl font-black">C</span>
              </div>
              <div>
                <span className="font-black text-xl">كلين هاوس</span>
                <span className="block text-xs text-gray-400">للتنظيف الاحترافي</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              شركة كلين هاوس — أفضل شركة تنظيف احترافي في المملكة العربية السعودية.
              نخدم عملاءنا بأعلى معايير الجودة منذ عام ٢٠١٥.
            </p>
            <div className="flex gap-3">
              <a
                href={SITE_CONFIG.whatsapp}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full text-sm font-semibold transition-colors"
                target="_blank" rel="noopener noreferrer"
                aria-label="تواصل عبر واتساب"
              >
                <MessageCircle size={16} /> واتساب
              </a>
              <a
                href={SITE_CONFIG.tel}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full text-sm font-semibold transition-colors"
                aria-label="اتصل بنا"
              >
                <Phone size={16} /> اتصل
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-white">خدماتنا</h3>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link href={`#${s.anchor}`} className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2">
                    <span>{s.icon}</span> {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2">
                  📞 تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-white">مناطق الخدمة</h3>
            <div className="flex flex-wrap gap-2">
              {CITIES.map((city) => (
                <span key={city} className="bg-gray-800 text-gray-400 text-xs py-1 px-3 rounded-full hover:bg-blue-900 hover:text-blue-300 cursor-default transition-colors">
                  {city}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-white">تواصل معنا</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-xs mb-1">الهاتف والواتساب</p>
                  <a href={SITE_CONFIG.tel} className="text-white font-bold hover:text-blue-400 transition-colors" dir="ltr">
                    {SITE_CONFIG.phoneFormatted}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-xs mb-1">البريد الإلكتروني</p>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-white hover:text-blue-400 transition-colors text-sm">
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-400 mt-0.5 flex-shrink-ox" />
                <div>
                  <p className="text-gray-400 text-xs mb-1">الموقع</p>
                  <p className="text-white text-sm">{SITE_CONFIG.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-xs mb-1">ساعات العمل</p>
                  <p className="text-white text-sm">{SITE_CONFIG.workingHours}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {year} كلين هاوس. جميع الحقوق محفوظة.</p>
          <p className="text-center">
            شركة تنظيف معتمدة في السعودية | الرياض | جدة | الدمام
          </p>
          <p>تنظيف احترافي بضمان الجودة</p>
        </div>
      </div>
    </footer>
  );
}
