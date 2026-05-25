import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, type LucideIcon } from 'lucide-react';
import { SEOHead } from '../seo/SEOHead';
import PageHero from './PageHero';
import SectionHeading from './SectionHeading';
import { CTASection } from './CTASection';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface RelatedService {
  title: string;
  href: string;
  description: string;
}

interface ServiceLayoutProps {
  seoTitle: string;
  seoDescription: string;
  canonical?: string;
  eyebrow?: string;
  heroTitle: string;
  heroDescription: string;
  introHeading: string;
  introParagraphs: string[];
  whyHeading: string;
  whyItems: string[];
  featuresHeading: string;
  featuresSubtext: string;
  features: Feature[];
  deepDiveIcon: LucideIcon;
  deepDiveHeading: string;
  deepDiveParagraphs: string[];
  related: RelatedService[];
}

export default function ServiceLayout({
  seoTitle,
  seoDescription,
  canonical,
  eyebrow = 'Property Management',
  heroTitle,
  heroDescription,
  introHeading,
  introParagraphs,
  whyHeading,
  whyItems,
  featuresHeading,
  featuresSubtext,
  features,
  deepDiveIcon: DeepDiveIcon,
  deepDiveHeading,
  deepDiveParagraphs,
  related,
}: ServiceLayoutProps) {
  return (
    <>
      <SEOHead title={seoTitle} description={seoDescription} canonical={canonical} />

      <PageHero
        align="left"
        eyebrow={eyebrow}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: heroTitle },
        ]}
        title={heroTitle}
        description={heroDescription}
      >
        <Link to="/contact" className="btn-primary btn-lg">
          Request a Proposal
          <ArrowRight className="h-5 w-5" />
        </Link>
        <a href="tel:7737280652" className="btn-secondary btn-lg">
          Call 773.728.0652
        </a>
      </PageHero>

      {/* Intro */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <div className="grid items-start gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3">
              <h2 className="font-display text-3xl font-extrabold leading-tight text-ink-900 text-balance sm:text-4xl">
                {introHeading}
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-500">
                {introParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-ink-100 bg-gradient-to-b from-brand-50 to-white p-8 shadow-soft">
                <h3 className="font-display text-xl font-bold text-ink-900">{whyHeading}</h3>
                <ul className="mt-6 space-y-3.5">
                  {whyItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                      <span className="text-sm leading-relaxed text-ink-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-ink-50 py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Capabilities"
            title={featuresHeading}
            description={featuresSubtext}
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-ink-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-ink-900">{title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep dive */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white">
                <DeepDiveIcon className="h-6 w-6" />
              </span>
              <h2 className="font-display text-2xl font-extrabold leading-tight text-ink-900 sm:text-3xl">
                {deepDiveHeading}
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-ink-500">
              {deepDiveParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-ink-50 py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading align="center" eyebrow="Keep Exploring" title="Related services" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {related.map((service) => (
              <Link
                key={service.title}
                to={service.href}
                className="group flex flex-col rounded-2xl border border-ink-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-card-hover"
              >
                <h3 className="font-display text-lg font-bold text-ink-900 transition-colors group-hover:text-brand-700">
                  {service.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-500">
                  {service.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
