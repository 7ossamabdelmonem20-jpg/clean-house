import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/ui/FloatingButtons';
import JsonLd from '@/components/seo/JsonLd';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import SeoCtaBanner from '@/components/seo/SeoCtaBanner';
import { BLOG_POSTS, getBlogPost, getAllBlogSlugs } from '@/constants/blog';
import { SITE_CONFIG } from '@/constants';
import { buildPageMetadata } from '@/lib/seo/metadata';
import { buildJsonLd, breadcrumbSchema, articleSchema } from '@/lib/seo/jsonld';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  return buildPageMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    keywords: post.keywords.join(', '),
    ogImage: `${SITE_CONFIG.url}${post.image}`,
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const pageUrl = `${SITE_CONFIG.url}/blog/${post.slug}`;
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  const schema = buildJsonLd(
    articleSchema({
      title: post.title,
      description: post.metaDescription,
      url: pageUrl,
      datePublished: post.datePublished,
      dateModified: post.dateModified,
      image: `${SITE_CONFIG.url}${post.image}`,
    }),
    breadcrumbSchema([
      { name: 'الرئيسية', url: SITE_CONFIG.url },
      { name: 'المدونة', url: `${SITE_CONFIG.url}/blog` },
      { name: post.title, url: pageUrl },
    ]),
  );

  return (
    <>
      <JsonLd data={schema} />
      <Navbar />
      <main className="pt-28 pb-16">
        <article className="container-custom max-w-3xl">
          <Breadcrumbs
            items={[
              { label: 'الرئيسية', href: '/' },
              { label: 'المدونة', href: '/blog' },
              { label: post.title },
            ]}
          />

          <div className="flex items-center gap-3 text-xs text-slate-400 mb-4">
            <span className="bg-primary-50 text-primary-600 font-bold py-1 px-3 rounded-full">{post.category}</span>
            <span className="flex items-center gap-1"><Calendar size={12} />{post.datePublished}</span>
            <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">{post.title}</h1>

          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] mb-8 border border-slate-100">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <div className="prose-content space-y-4">
            {post.content.map((section, i) => {
              if (section.type === 'h2') return <h2 key={i} className="text-xl font-black text-slate-900 mt-8 mb-3">{section.text}</h2>;
              if (section.type === 'h3') return <h3 key={i} className="text-lg font-bold text-slate-900 mt-6 mb-2">{section.text}</h3>;
              if (section.type === 'p') return <p key={i} className="text-slate-600 leading-relaxed text-base">{section.text}</p>;
              if (section.type === 'ul' && section.items) return (
                <ul key={i} className="space-y-2 mr-4">
                  {section.items.map((item) => (
                    <li key={item} className="text-slate-600 text-sm flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              );
              return null;
            })}
          </div>

          <SeoCtaBanner
            title="تحتاج خدمة تنظيف احترافية؟"
            subtitle="كلين هاوس تقدم جميع خدمات التنظيف في المملكة العربية السعودية — احجز الآن"
          />

          {/* Related posts */}
          {otherPosts.length > 0 && (
            <section className="mt-12" aria-label="مقالات ذات صلة">
              <h2 className="text-xl font-black text-slate-900 mb-5">مقالات ذات صلة</h2>
              <div className="space-y-3">
                {otherPosts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="flex items-center gap-3 p-4 bg-[#F8FAFC] hover:bg-white border border-slate-100 hover:border-primary-100 rounded-xl transition-all group"
                  >
                    <span className="text-sm font-bold text-slate-800 group-hover:text-primary-600">{p.title}</span>
                    <ArrowLeft size={14} className="mr-auto text-slate-300 group-hover:text-primary-500" />
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
