import { Link } from 'react-router-dom';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import PageHero from '../components/ui/PageHero';
import { CTASection } from '../components/ui/CTASection';
import { blogPosts } from '../data/blog-posts';

function formatDate(dateString: string): string {
  const date = new Date(dateString + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function Blog() {
  return (
    <>
      <SEOHead
        title="Property Management Blog | Stellar Property Management"
        description="Expert insights, tips, and resources for Chicago condo board members and property owners. Stay informed on property management best practices, Illinois regulations, and community governance."
        canonical="https://stellarpropertygroup.com/blog"
      />

      <PageHero
        eyebrow="Insights & Resources"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
        title="Insights for board members & property owners"
        description="Expert guidance on property management, board governance, financial planning, and building maintenance from the Stellar Property Management team."
      />

      <section className="bg-ink-50 py-20 lg:py-28">
        <div className="container-x">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                {post.featuredImage && (
                  <Link
                    to={`/blog/${post.slug}`}
                    className="block aspect-video overflow-hidden bg-ink-100"
                  >
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </Link>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-4 text-xs font-medium text-ink-400">
                    <span className="inline-flex items-center gap-1.5">
                      <Tag className="h-3.5 w-3.5 text-brand-500" />
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-display text-lg font-bold leading-snug text-ink-900">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="transition-colors hover:text-brand-700"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-500">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-ink-100 pt-4">
                    <span className="inline-flex items-center gap-1.5 text-xs text-ink-400">
                      <Calendar className="h-3.5 w-3.5" />
                      {formatDate(post.date)}
                    </span>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have questions about property management?"
        description="Our team is here to help Chicago board members and property owners navigate the complexities of community management. Reach out for a free consultation."
      />
    </>
  );
}
