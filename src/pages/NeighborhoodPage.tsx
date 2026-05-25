import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Building2, Shield, DollarSign, Users, Wrench, Phone, MapPin, ArrowRight, Home,
} from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import { getNeighborhoodBySlug, getRelatedNeighborhoods } from '../data/neighborhoods';

const services = [
  {
    title: 'Financial Management',
    description: 'Transparent budgeting, assessments, reserves, and detailed financial reporting for your association.',
    icon: DollarSign,
    link: '/services/financial-management',
  },
  {
    title: 'Maintenance Coordination',
    description: 'Proactive maintenance programs, vetted vendor management, and 24/7 emergency response.',
    icon: Wrench,
    link: '/services/maintenance-coordination',
  },
  {
    title: 'Board Support',
    description: 'Meeting coordination, governance guidance, and communication tools for effective board leadership.',
    icon: Users,
    link: '/services/board-support',
  },
  {
    title: 'HOA Management',
    description: 'Full-service homeowners association management focused on compliance and community engagement.',
    icon: Building2,
    link: '/services/hoa-management',
  },
];

const whyChoose = [
  {
    title: 'Local Expertise',
    description: 'Deep knowledge of Chicago neighborhoods, building codes, and local vendor networks.',
    icon: MapPin,
  },
  {
    title: 'Proven Track Record',
    description: 'Trusted by associations across Chicago for reliable, professional management since 2007.',
    icon: Shield,
  },
  {
    title: 'Transparent Communication',
    description: 'Real-time reporting, online portals, and responsive service your board can count on.',
    icon: Phone,
  },
  {
    title: 'Tailored Solutions',
    description: 'Management plans customized to your building size, budget, and community needs.',
    icon: Home,
  },
];

export default function NeighborhoodPage() {
  const { slug } = useParams<{ slug: string }>();
  const neighborhood = slug ? getNeighborhoodBySlug(slug) : undefined;

  if (!neighborhood) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-ink-50 px-6 pt-20">
        <div className="text-center">
          <h1 className="font-display text-3xl font-extrabold text-ink-900">
            Neighborhood not found
          </h1>
          <p className="mx-auto mt-3 max-w-md text-ink-500">
            We couldn't find the neighborhood you're looking for. Browse all our service areas
            to find your community.
          </p>
          <Link to="/service-areas" className="btn-primary mt-8">
            View All Service Areas
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  const relatedNeighborhoods = getRelatedNeighborhoods(neighborhood.slug, 3);

  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Stellar Property Management',
    description: `Professional property management in ${neighborhood.name}, Chicago.`,
    url: `https://www.stellarpropertygroup.com/property-management-${neighborhood.slug}`,
    telephone: '+1-773-728-0652',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '5107 N Western Ave, Suite 1S',
      addressLocality: 'Chicago',
      addressRegion: 'IL',
      postalCode: '60625',
      addressCountry: 'US',
    },
    areaServed: { '@type': 'Place', name: `${neighborhood.name}, Chicago, IL` },
    serviceType: 'Property Management',
    priceRange: '$$',
  };

  return (
    <>
      <Helmet>
        <title>Property Management in {neighborhood.name} | Stellar Property Management</title>
        <meta
          name="description"
          content={`Professional condominium, HOA, and townhome management in ${neighborhood.name}, Chicago. Trusted by local boards for 29+ years. Get a free quote today.`}
        />
        <meta
          name="keywords"
          content={`${neighborhood.name} property management, ${neighborhood.name} HOA management, ${neighborhood.name} condo management, Chicago property management`}
        />
        <link
          rel="canonical"
          href={`https://www.stellarpropertygroup.com/property-management-${neighborhood.slug}`}
        />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>

      <PageHero
        align="left"
        eyebrow="Neighborhood Property Management"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Service Areas', href: '/service-areas' },
          { label: neighborhood.name },
        ]}
        title={`Property Management in ${neighborhood.name}, Chicago`}
        description={neighborhood.description}
      >
        <div className="flex w-full flex-wrap gap-2">
          {neighborhood.propertyTypes.map((type) => (
            <span
              key={type}
              className="rounded-full border border-brand-100 bg-white px-3.5 py-1.5 text-xs font-semibold capitalize text-brand-700"
            >
              {type}
            </span>
          ))}
        </div>
        <Link to="/contact" className="btn-primary btn-lg">
          Get a Free Quote
          <ArrowRight className="h-5 w-5" />
        </Link>
        <a href="tel:7737280652" className="btn-secondary btn-lg">
          <Phone className="h-5 w-5" />
          773.728.0652
        </a>
      </PageHero>

      {/* Services */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Our Services"
            title={`Property management in ${neighborhood.name}`}
            description={`Comprehensive property management tailored to the unique needs of ${neighborhood.name} associations.`}
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ title, description, icon: Icon, link }) => (
              <Link
                key={title}
                to={link}
                className="group flex flex-col rounded-2xl border border-ink-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-card-hover"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-base font-bold text-ink-900 transition-colors group-hover:text-brand-700">
                  {title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{description}</p>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/services" className="btn-secondary">
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-ink-50 py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="The Difference"
            title={`Why ${neighborhood.name} boards choose Stellar`}
            description="We combine citywide resources with neighborhood-level knowledge to deliver exceptional results for your association."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {whyChoose.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="flex gap-5 rounded-2xl border border-ink-100 bg-white p-7 shadow-soft"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink-900">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zip codes */}
      <section className="bg-white py-12">
        <div className="container-x">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-semibold text-ink-900">Serving ZIP codes:</span>
            {neighborhood.zipCodes.map((zip) => (
              <span
                key={zip}
                className="rounded-lg bg-ink-50 px-3 py-1 text-sm font-medium text-ink-600"
              >
                {zip}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink-50 py-20 lg:py-28">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 px-7 py-14 text-center sm:px-12 lg:py-16">
            <div className="absolute inset-0 bg-grid-light opacity-70" />
            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-3xl font-extrabold leading-tight text-white text-balance sm:text-4xl">
                Ready to elevate your {neighborhood.name} property management?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-brand-100">
                Contact us today for a free, no-obligation consultation and proposal tailored
                to your association's needs.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link to="/contact" className="btn-white btn-lg w-full sm:w-auto">
                  Get Your Free Proposal
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href="tel:7737280652"
                  className="btn btn-lg w-full border border-white/25 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 sm:w-auto"
                >
                  <Phone className="h-5 w-5" />
                  773.728.0652
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related neighborhoods */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="Nearby" title="Explore nearby neighborhoods" />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {relatedNeighborhoods.map((related) => (
              <Link
                key={related.slug}
                to={`/property-management-${related.slug}`}
                className="group rounded-2xl border border-ink-100 bg-ink-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:bg-white hover:shadow-card-hover"
              >
                <div className="mb-3 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-brand-600" />
                  <h3 className="font-display text-lg font-bold text-ink-900 transition-colors group-hover:text-brand-700">
                    {related.name}
                  </h3>
                </div>
                <p className="mb-3 line-clamp-2 text-sm text-ink-500">{related.description}</p>
                <div className="flex flex-wrap gap-2">
                  {related.propertyTypes.slice(0, 3).map((type) => (
                    <span
                      key={type}
                      className="rounded-md bg-white px-2 py-0.5 text-xs font-medium capitalize text-ink-500"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 border-t border-ink-100 pt-8">
            <h3 className="mb-4 font-display text-lg font-bold text-ink-900">Quick links</h3>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {[
                { to: '/services', label: 'Our Services' },
                { to: '/contact', label: 'Contact Us' },
                { to: '/service-areas', label: 'All Service Areas' },
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
                >
                  {label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
