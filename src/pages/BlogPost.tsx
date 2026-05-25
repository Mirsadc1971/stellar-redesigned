import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, Tag, User, ChevronRight, ArrowLeft } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { CTASection } from '../components/ui/CTASection';
import { getBlogPostBySlug, blogPosts } from '../data/blog-posts';

function formatDate(dateString: string): string {
  const date = new Date(dateString + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    author: { '@type': 'Organization', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: 'Stellar Property Management',
      url: 'https://stellarpropertygroup.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://stellarpropertygroup.com/blog/${post.slug}`,
    },
  };

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.metaDescription}
        canonical={`https://stellarpropertygroup.com/blog/${post.slug}`}
        ogType="article"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <header className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white pt-32 pb-12 lg:pt-36">
        <div className="pointer-events-none absolute -top-24 right-[-6rem] h-96 w-96 rounded-full bg-brand-200/30 blur-3xl" />
        <div className="container-x relative">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink-400">
              <li>
                <Link to="/" className="font-medium text-ink-500 hover:text-brand-600">
                  Home
                </Link>
              </li>
              <li><ChevronRight className="h-3.5 w-3.5 text-ink-300" /></li>
              <li>
                <Link to="/blog" className="font-medium text-ink-500 hover:text-brand-600">
                  Blog
                </Link>
              </li>
              <li><ChevronRight className="h-3.5 w-3.5 text-ink-300" /></li>
              <li className="max-w-[16rem] truncate font-medium text-ink-700 sm:max-w-md">
                {post.title}
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-700">
                <Tag className="h-3.5 w-3.5" />
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-400">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>
            <h1 className="font-display text-3xl font-extrabold leading-[1.12] text-ink-900 text-balance sm:text-4xl lg:text-[2.85rem]">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-ink-500">
              <span className="inline-flex items-center gap-1.5">
                <User className="h-4 w-4 text-brand-500" />
                {post.author}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-brand-500" />
                {formatDate(post.date)}
              </span>
            </div>
          </div>
        </div>
      </header>

      {post.featuredImage && (
        <div className="bg-white">
          <div className="container-x">
            <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-ink-100 shadow-card">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="aspect-[16/8] w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      )}

      <article className="bg-white pb-20 pt-12 lg:pb-28">
        <div className="container-x">
          <div
            className="mx-auto max-w-3xl [&>h2]:mt-12 [&>h2]:mb-4 [&>h2]:font-display [&>h2]:text-2xl [&>h2]:font-extrabold [&>h2]:text-ink-900 [&>h2]:sm:text-3xl [&>h3]:mt-9 [&>h3]:mb-3 [&>h3]:font-display [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-ink-900 [&>p]:mb-5 [&>p]:text-lg [&>p]:leading-relaxed [&>p]:text-ink-600 [&>ul]:my-6 [&>ul]:space-y-3 [&>ul]:list-disc [&>ul]:pl-6 [&>ul>li]:text-lg [&>ul>li]:leading-relaxed [&>ul>li]:text-ink-600 [&>ul>li]:marker:text-brand-500 [&_a]:font-medium [&_a]:text-brand-600 [&_a]:underline [&_a]:underline-offset-2 [&_a]:decoration-brand-300 hover:[&_a]:text-brand-700 [&_strong]:font-semibold [&_strong]:text-ink-900 [&>figure]:my-9 [&>figure>svg]:block [&>figure>svg]:w-full [&>figure>svg]:rounded-2xl [&>figure>svg]:border [&>figure>svg]:border-ink-100 [&>figure>figcaption]:mt-3 [&>figure>figcaption]:text-center [&>figure>figcaption]:text-sm [&>figure>figcaption]:text-ink-400"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mx-auto mt-12 max-w-3xl border-t border-ink-100 pt-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all articles
            </Link>
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="border-t border-ink-100 bg-ink-50 py-20 lg:py-28">
          <div className="container-x">
            <h2 className="font-display text-2xl font-extrabold text-ink-900 sm:text-3xl">
              Related articles
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related) => (
                <article
                  key={related.slug}
                  className="rounded-2xl border border-ink-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <span className="text-xs font-bold uppercase tracking-wide text-brand-600">
                    {related.category}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold text-ink-900">
                    <Link
                      to={`/blog/${related.slug}`}
                      className="transition-colors hover:text-brand-700"
                    >
                      {related.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{related.excerpt}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
