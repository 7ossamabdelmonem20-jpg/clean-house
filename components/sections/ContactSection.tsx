'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { SITE_CONFIG, SERVICES, CITIES } from '@/constants';

const contactMethods = [
  {
    icon: MessageCircle,
    label: 'واتساب',
    value: SITE_CONFIG.phoneFormatted,
    desc: 'رد فوري خلال دقائق',
    href: SITE_CONFIG.whatsapp,
    color: 'bg-green-500',
    textColor: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: Phone,
    label: 'اتصل بنا',
    value: SITE_CONFIG.phoneFormatted,
    desc: 'متاح ٢٤/٧',
    href: SITE_CONFIG.tel,
    color: 'bg-blue-600',
    textColor: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Mail,
    label: 'البريد الإلكتروني',
    value: SITE_CONFIG.email,
    desc: 'نرد خلال ٢٤ ساعة',
    href: `mailto:${SITE_CONFIG.email}`,
    color: 'bg-purple-600',
    textColor: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-white" aria-label="تواصل معنا">
      <div className="container-custom">
        <SectionHeader
          badge="تواصل معنا"
          title="احصل على"
          highlight="عرض سعر مجاني"
          subtitle="تواصل معنا الآن وسيتصل بك أحد ممثلينا خلال دقائق لتحديد موعد مناسب لك"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Quick contact cards */}
            <div className="space-y-4 mb-8">
              {contactMethods.map(({ icon: Icon, label, value, desc, href, color, textColor, bgColor }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('https') ? '_blank' : undefined}
                  rel={href.startsWith('https') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 bg-white group"
                  aria-label={`${label}: ${value}`}
                >
                  <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">{label}</p>
                    <p className={`font-black text-lg ${textColor}`} dir={href.includes('mail') ? 'ltr' : 'rtl'}>
                      {value}
                    </p>
                    <p className="text-gray-400 text-xs">{desc}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Info */}
            <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-bold text-gray-900 text-sm">مناطق الخدمة</p>
                  <p className="text-gray-600 text-sm">
                    {CITIES.slice(0, 6).join(' • ')} والمزيد
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-bold text-gray-900 text-sm">ساعات العمل</p>
                  <p className="text-gray-600 text-sm">{SITE_CONFIG.workingHours}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Request form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-3xl p-8 text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 pattern-bg opacity-10" />
            <div className="relative">
              <h3 className="text-2xl font-black mb-2">طلب خدمة سريع</h3>
              <p className="text-blue-200 text-sm mb-6">أرسل لنا عبر واتساب وسنتواصل فوراً</p>

              <div className="space-y-4">
                <div>
                  <label className="block text-blue-200 text-sm font-semibold mb-2">الخدمة المطلوبة</label>
                  <div className="grid grid-cols-2 gap-2">
                    {SERVICES.map((s) => (
                      <div key={s.id} className="flex items-center gap-2 bg-white/10 hover:bg-white/20 rounded-xl p-3 cursor-pointer transition-colors border border-white/20">
                        <span className="text-lg">{s.icon}</span>
                        <span className="text-sm font-medium text-white">{s.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-blue-200 text-sm font-semibold mb-2">المدينة</label>
                  <div className="flex flex-wrap gap-2">
                    {CITIES.slice(0, 6).map((city) => (
                      <span key={city} className="bg-white/10 border border-white/20 text-white text-xs py-1.5 px-3 rounded-full cursor-pointer hover:bg-white/20 transition-colors">
                        {city}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  <a
                    href={SITE_CONFIG.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-black py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-green-500/30 text-lg"
                    aria-label="تواصل عبر واتساب لطلب الخدمة"
                  >
                    <MessageCircle size={24} />
                    اطلب الخدمة عبر واتساب
                  </a>
                  <a
                    href={SITE_CONFIG.tel}
                    className="w-full flex items-center justify-center gap-3 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold py-3.5 rounded-2xl transition-all duration-300 text-base"
                    aria-label="اتصل بنا الآن"
                  >
                    <Phone size={20} />
                    أو اتصل مباشرة
                  </a>
                </div>

                <div className="flex items-center gap-2 text-blue-200 text-xs pt-2">
                  <CheckCircle2 size={14} />
                  عرض سعر مجاني وبدون التزام • رد فوري
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
