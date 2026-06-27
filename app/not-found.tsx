import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/constants';

export const metadata: Metadata = {
  title: 'الصفحة غير موجودة',
  description: `الصفحة المطلوبة غير موجودة. عد إلى ${SITE_CONFIG.name} Clean House KSA للتنظيف الاحترافي في المملكة العربية السعودية.`,
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <p className="text-6xl font-black text-blue-700 mb-4">404</p>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">الصفحة غير موجودة</h1>
        <p className="text-gray-600 mb-8">
          عذراً، الصفحة التي تبحث عنها غير متوفرة. عد إلى موقع كلين هاوس Clean House KSA.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full transition-colors"
        >
          العودة للرئيسية
        </Link>
      </div>
    </main>
  );
}
