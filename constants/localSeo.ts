/**
 * بيانات Local SEO الثابتة — إحداثيات، أنواع Schema، ونطاقات أسعار تقريبية.
 * عدّل القيم هنا بدون لمس منطق المكوّن.
 */

export type LocalBusinessSchemaType =
  | 'HvacBusiness'
  | 'HomeAndConstructionBusiness'
  | 'ProfessionalService'
  | 'LocalBusiness';

/** نوع Schema.org لكل خدمة */
export const SERVICE_SCHEMA_TYPES: Record<string, LocalBusinessSchemaType> = {
  ac: 'HvacBusiness',
  carpet: 'HomeAndConstructionBusiness',
  sofa: 'HomeAndConstructionBusiness',
  tank: 'HomeAndConstructionBusiness',
  pest: 'ProfessionalService',
};

/** إحداثيات Geo لكل مدينة — تُستخدم في geo + hasMap */
export const CITY_GEO: Record<
  string,
  { latitude: number; longitude: number; postalCode?: string }
> = {
  riyadh: { latitude: 24.7136, longitude: 46.6753, postalCode: '11564' },
  jeddah: { latitude: 21.4858, longitude: 39.1925, postalCode: '21442' },
  dammam: { latitude: 26.3927, longitude: 49.9777, postalCode: '32241' },
  makkah: { latitude: 21.3891, longitude: 39.8579, postalCode: '24231' },
  madinah: { latitude: 24.5247, longitude: 39.5692, postalCode: '42311' },
  khobar: { latitude: 26.2172, longitude: 50.1971, postalCode: '34428' },
  taif: { latitude: 21.4373, longitude: 40.5127, postalCode: '26521' },
  qassim: { latitude: 26.2078, longitude: 43.4837, postalCode: '51431' },
  ahsa: { latitude: 25.3832, longitude: 49.5877, postalCode: '36362' },
};

/** نطاق سعر تقريبي لكل خدمة (SAR) — اختياري لـ Offer / priceRange */
export const SERVICE_PRICE_RANGES: Record<
  string,
  { minPrice: number; maxPrice: number; currency: 'SAR' }
> = {
  ac: { minPrice: 80, maxPrice: 350, currency: 'SAR' },
  carpet: { minPrice: 150, maxPrice: 600, currency: 'SAR' },
  sofa: { minPrice: 120, maxPrice: 500, currency: 'SAR' },
  tank: { minPrice: 200, maxPrice: 800, currency: 'SAR' },
  pest: { minPrice: 250, maxPrice: 900, currency: 'SAR' },
};

export function getServiceSchemaType(serviceSlug: string): LocalBusinessSchemaType {
  return SERVICE_SCHEMA_TYPES[serviceSlug] ?? 'HomeAndConstructionBusiness';
}

export function getCityGeo(citySlug: string) {
  return CITY_GEO[citySlug];
}

export function getServicePriceRange(serviceSlug: string) {
  return SERVICE_PRICE_RANGES[serviceSlug];
}

/** priceRange ديناميكي لـ LocalBusiness Schema — مثال: "80-350 SAR" */
export function formatSchemaPriceRange(serviceSlug: string): string | undefined {
  const range = getServicePriceRange(serviceSlug);
  if (!range) return undefined;
  return `${range.minPrice}-${range.maxPrice} ${range.currency}`;
}
