'use client';

import { useState, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Phone, MapPin, Wrench, Send, CheckCircle2, AlertCircle, MessageCircle } from 'lucide-react';
import { SITE_CONFIG, CITIES, SERVICES } from '@/constants';

interface ServiceLeadFormProps {
  /** عنوان الخدمة الحالية لتعبئة الحقل مسبقاً */
  defaultService?: string;
  /** تعريف الخدمة الحالية (slug) */
  serviceSlug?: string;
}

interface FormFields {
  name: string;
  phone: string;
  city: string;
  serviceType: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  city?: string;
  serviceType?: string;
}

function validate(fields: FormFields): FormErrors {
  const errors: FormErrors = {};

  if (!fields.name.trim() || fields.name.trim().length < 3) {
    errors.name = 'الاسم يجب أن يكون 3 أحرف على الأقل';
  }

  const saudiPhone = /^(05\d{8}|(\+966|966)5\d{8})$/;
  if (!saudiPhone.test(fields.phone.replace(/\s/g, ''))) {
    errors.phone = 'رقم الجوال غير صحيح (مثال: 0512345678)';
  }

  if (!fields.city) {
    errors.city = 'الرجاء اختيار المدينة';
  }

  if (!fields.serviceType) {
    errors.serviceType = 'الرجاء اختيار نوع الخدمة';
  }

  return errors;
}

export default function ServiceLeadForm({ defaultService, serviceSlug }: ServiceLeadFormProps) {
  const formId = useId();
  const [fields, setFields] = useState<FormFields>({
    name: '',
    phone: '',
    city: '',
    serviceType: defaultService || '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const updated = { ...fields, [name]: value };
    setFields(updated);
    // Validate on change if field was already touched
    if (touched[name]) {
      setErrors(validate(updated));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate(fields));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = { name: true, phone: true, city: true, serviceType: true };
    setTouched(allTouched);
    const errs = validate(fields);
    setErrors(errs);

    if (Object.keys(errs).length > 0) return;

    // Build WhatsApp message
    const msg = encodeURIComponent(
      `مرحباً، أود الاستفسار عن خدمة ${fields.serviceType} في ${fields.city}.\n` +
      `الاسم: ${fields.name}\n` +
      `رقم الجوال: ${fields.phone}\n` +
      `المدينة: ${fields.city}\n` +
      `الخدمة المطلوبة: ${fields.serviceType}`
    );

    setSubmitted(true);

    // Redirect to WhatsApp after short delay
    setTimeout(() => {
      window.open(`https://wa.me/${SITE_CONFIG.phone.replace('+', '')}?text=${msg}`, '_blank');
    }, 600);
  };

  const inputBase =
    'w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-200';
  const selectBase =
    'w-full bg-navy-800 border border-white/20 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-200 appearance-none';
  const errorClass = 'border-red-400 focus:ring-red-400';
  const labelBase = 'block text-xs font-semibold text-primary-200 mb-1.5 uppercase tracking-wide';

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center gap-4 py-10 text-center"
      >
        <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center">
          <CheckCircle2 size={32} className="text-white" />
        </div>
        <div>
          <p className="text-white font-black text-xl mb-1">تم استلام طلبك!</p>
          <p className="text-primary-200 text-sm">سيتم تحويلك لواتساب الآن لإتمام الحجز</p>
        </div>
        <a
          href={SITE_CONFIG.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          id="whatsapp-trigger"
          className="cta-whatsapp flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-black py-3 px-6 rounded-xl text-sm transition-colors"
        >
          <MessageCircle size={18} />
          فتح واتساب
        </a>
      </motion.div>
    );
  }

  return (
    <form
      id="lead-form"
      onSubmit={handleSubmit}
      noValidate
      aria-label="نموذج طلب الخدمة"
      data-gtm-form="lead-form"
      data-service={serviceSlug}
    >
      <div className="space-y-4">
        {/* الاسم */}
        <div>
          <label htmlFor={`${formId}-name`} className={labelBase}>
            <User size={11} className="inline ml-1" />
            الاسم الكريم
          </label>
          <div className="relative">
            <input
              id={`${formId}-name`}
              name="name"
              type="text"
              autoComplete="name"
              placeholder="مثال: أحمد محمد"
              value={fields.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${inputBase} ${touched.name && errors.name ? errorClass : ''}`}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? `${formId}-name-error` : undefined}
            />
          </div>
          <AnimatePresence>
            {touched.name && errors.name && (
              <motion.p
                id={`${formId}-name-error`}
                role="alert"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-1 text-red-300 text-xs mt-1"
              >
                <AlertCircle size={11} /> {errors.name}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* رقم الجوال */}
        <div>
          <label htmlFor={`${formId}-phone`} className={labelBase}>
            <Phone size={11} className="inline ml-1" />
            رقم الجوال
          </label>
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="05xxxxxxxx"
            value={fields.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            dir="ltr"
            className={`${inputBase} text-left ${touched.phone && errors.phone ? errorClass : ''}`}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? `${formId}-phone-error` : undefined}
          />
          <AnimatePresence>
            {touched.phone && errors.phone && (
              <motion.p
                id={`${formId}-phone-error`}
                role="alert"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-1 text-red-300 text-xs mt-1"
              >
                <AlertCircle size={11} /> {errors.phone}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* المدينة والخدمة - Row */}
        <div className="grid grid-cols-2 gap-3">
          {/* المدينة */}
          <div>
            <label htmlFor={`${formId}-city`} className={labelBase}>
              <MapPin size={11} className="inline ml-1" />
              المدينة
            </label>
            <select
              id={`${formId}-city`}
              name="city"
              value={fields.city}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${selectBase} ${touched.city && errors.city ? errorClass : ''}`}
              aria-invalid={!!errors.city}
            >
              <option value="" disabled>اختر المدينة</option>
              {CITIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <AnimatePresence>
              {touched.city && errors.city && (
                <motion.p
                  role="alert"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-1 text-red-300 text-xs mt-1"
                >
                  <AlertCircle size={11} /> {errors.city}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* نوع الخدمة */}
          <div>
            <label htmlFor={`${formId}-service`} className={labelBase}>
              <Wrench size={11} className="inline ml-1" />
              الخدمة
            </label>
            <select
              id={`${formId}-service`}
              name="serviceType"
              value={fields.serviceType}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${selectBase} ${touched.serviceType && errors.serviceType ? errorClass : ''}`}
              aria-invalid={!!errors.serviceType}
            >
              <option value="" disabled>اختر الخدمة</option>
              {SERVICES.map((s) => (
                <option key={s.id} value={s.title}>{s.title}</option>
              ))}
            </select>
            <AnimatePresence>
              {touched.serviceType && errors.serviceType && (
                <motion.p
                  role="alert"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-1 text-red-300 text-xs mt-1"
                >
                  <AlertCircle size={11} /> {errors.serviceType}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* زر الإرسال */}
        <button
          id="lead-submit"
          type="submit"
          data-gtm-click="lead-submit"
          className="w-full flex items-center justify-center gap-2.5 bg-accent-500 hover:bg-accent-600 active:scale-[0.98] text-white font-black py-3.5 rounded-xl transition-all duration-200 shadow-glow-green text-base mt-2"
          aria-label="إرسال طلب الخدمة عبر واتساب"
        >
          <Send size={18} />
          احجز الخدمة عبر واتساب
        </button>

        <p className="text-primary-300 text-xs text-center pt-0.5">
          <CheckCircle2 size={11} className="inline ml-1 text-teal-400" />
          عرض سعر مجاني وبدون التزام • رد فوري
        </p>
      </div>
    </form>
  );
}
