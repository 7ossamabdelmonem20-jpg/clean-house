'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { SITE_CONFIG, SERVICES, CITIES } from '@/constants';
import { ICON_MAP } from '@/utils/iconMap';

const contactMethods = [
  {
    icon: MessageCircle,
    label: 'واتساب',
    value: SITE_CONFIG.phoneFormatted,
    desc: 'رد فوري خلال دقائق',
    href: SITE_CONFIG.whatsapp,
    iconBg: 'bg-accent-500',
    textColor: 'text-accent-600',
  },
  {
    icon: Phone,
    label: 'اتصل بنا',
    value: SITE_CONFIG.phoneFormatted,
    desc: 'متاح ٢٤/٧',
    href: SITE_CONFIG.tel,
    iconBg: 'bg-primary-500',
    textColor: 'text-primary-600',
  },
  {
    icon: Mail,
    label: 'البريد الإلكتروني',
    value: SITE_CONFIG.email,
    desc: 'نرد خلال ٢٤ ساعة',
    href: `mailto:${SITE_CONFIG.email}`,
    iconBg: 'bg-teal-500',
    textColor: 'text-teal-600',
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
          badgeVariant="teal"
        />

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-3 mb-8">
              {contactMethods.map(({ icon: Icon, label, value, desc, href, iconBg, textColor }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('https') ? '_blank' : undefined}
                  rel={href.startsWith('https') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 hover:border-primary-100 hover:shadow-card bg-[#F8FAFC] hover:bg-white transition-all duration-250 group"
                  aria-label={`${label}: ${value}`}
                >
                  <div className={`w-11 h-11 ${iconBg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs mb-0.5">{label}</p>
                    <p className={`font-black text-base ${textColor}`} dir={href.includes('mail') ? 'ltr' : 'rtl'}>{value}</p>
                    <p className="text-slate-400 text-xs">{desc}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Extra info */}
            <div className="bg-[#F8FAFC] border border-slate-100 rounded-2xl p-5 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-primary-500" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">مناطق الخدمة</p>
                  <p className="text-slate-500 text-sm mt-0.5">{CITIES.slice(0, 6).join(' • ')} والمزيد</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock size={16} className="text-teal-500" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">ساعات العمل</p>
                  <p className="text-slate-500 text-sm mt-0.5">{SITE_CONFIG.workingHours}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick request panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="bg-navy-700 rounded-3xl p-7 text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 pattern-bg opacity-15" />
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary-500 to-teal-400 rounded-t-3xl" />

            <div className="relative">
              <h3 className="text-xl font-black mb-1">طلب خدمة سريع</h3>
              <p className="text-primary-200 text-sm mb-6">أرسل لنا عبر واتساب وسنتواصل فوراً</p>

              <div className="space-y-5">
                {/* Services picker */}
                <div>
                  <label className="block text-primary-200 text-xs font-semibold mb-2 uppercase tracking-wide">الخدمة المطلوبة</label>
                  <div className="grid grid-cols-2 gap-2">
                    {SERVICES.map((s) => {
                      const SvcIcon = ICON_MAP[s.icon];
                      return (
                        <div key={s.id} className="flex items-center gap-2 bg-white/8 hover:bg-white/15 rounded-xl p-2.5 cursor-pointer transition-colors border border-white/10 hover:border-white/25">
                          {SvcIcon && <SvcIcon size={15} className="text-teal-300 flex-shrink-0" strokeWidth={1.75} />}
                          <span className="text-xs font-medium text-white leading-snug">{s.title}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Cities */}
                <div>
                  <label className="block text-primary-200 text-xs font-semibold mb-2 uppercase tracking-wide">المدينة</label>
                  <div className="flex flex-wrap gap-1.5">
                    {CITIES.slice(0, 6).map((city) => (
                      <span key={city} className="bg-white/8 border border-white/15 text-white text-xs py-1 px-3 rounded-lg cursor-pointer hover:bg-white/18 transition-colors">
                        {city}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="pt-2 space-y-2.5">
                  <a
                    href={SITE_CONFIG.whatsapp}
                    target="_blank" rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2.5 bg-accent-500 hover:bg-accent-600 text-white font-black py-3.5 rounded-xl transition-all duration-200 shadow-glow-green text-base"
                    aria-label="تواصل عبر واتساب لطلب الخدمة"
                  >
                    <MessageCircle size={20} />
                    اطلب الخدمة عبر واتساب
                  </a>
                  <a
                    href={SITE_CONFIG.tel}
                    className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/18 border border-white/20 text-white font-semibold py-3 rounded-xl transition-all duration-200 text-sm"
                    aria-label="اتصل بنا الآن"
                  >
                    <Phone size={17} />
                    أو اتصل مباشرة
                  </a>
                </div>

                <div className="flex items-center gap-2 text-primary-300 text-xs pt-1">
                  <CheckCircle2 size={13} />
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
