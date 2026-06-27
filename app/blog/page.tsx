import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/ui/FloatingButtons';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { BLOG_POSTS } from '@/constants/blog';
import { buildPageMetadata } from '@/lib/seo/metadata';

export const metadata = buildPageMetadata({
  title: 'المدونة | نصائح التنظيف | كلين هاوس Clean House KSA',
  description: 'مدونة كلين هاوس — نصائح ودلائل احترافية لتنظيف المكيفات والكنب والسجاد والخزانات ومكافحة الحشرات في المملكة العربية السعودية.',
  path: '/blog',
  keywords: 'نصائح تنظيف, تنظيف المكيفات, تنظيف الكنب, تنظيف السجاد, مكافحة حشرات',
});

export default function BlogIndexPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-16">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: 'الرئيسية', href: '/' }, { label: 'المدونة' }]} />
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">مدونة كلين هاوس</h1>
          <p className="text-slate-600 mb-10 max-w-2xl leading-relaxed">
            نصائح ودلائل احترافية من خبراء التنظيف في المملكة العربية السعودية — كل ما تحتاج معرفته عن تنظيف منزلك.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <article key={post.slug} className="group bg-white border border-slate-100 hover:border-primary-100 hover:shadow-card rounded-2xl overflow-hidden transition-all">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                  <span className="absolute top-3 right-3 bg-white/90 text-xs font-bold py-1 px-3 rounded-full text-primary-600">
                    {post.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1"><Calendar size={12} />{post.datePublished}</span>
                    <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
                  </div>
                  <h2 className="font-black text-slate-900 text-base mb-2 group-hover:text-primary-600 transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1 text-xs font-bold text-primary-600 hover:gap-2 transition-all">
                    اقرأ المزيد <ArrowLeft size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
