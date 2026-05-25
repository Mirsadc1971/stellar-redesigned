import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Building2 } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import { CTASection } from '../components/ui/CTASection';
import { neighborhoods } from '../data/neighborhoods';

const sortedNeighborhoods = [...neighborhoods].sort((a, b) =>
  a.name.localeCompare(b.name)
);

const alphabet = Array.from(
  new Set(sortedNeighborhoods.map((n) => n.name[0].toUpperCase()))
).sort();

const stats = [
  { value: '24', label: 'Neighborhoods served' },
  { value: '29+', label: 'Years of experience' },
  { value: '42', label: 'Associations managed' },
  { value: '24/7', label: 'Emergency service' },
];

export default function ServiceAreas() {
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Stellar Property Group',
    description:
      'Professional property management serving 24 Chicago neighborhoods. Condominium, HOA, and townhome management.',
    url: 'https://www.stellarpropertygroup.com/service-areas',
    telephone: '+1-773-728-0652',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '5107 N Western Ave, Suite 1S',
      addressLocality: 'Chicago',
      addressRegion: 'IL',
      postalCode: '60625',
      addressCountry: 'US',
    },
    areaServed: neighborhoods.map((n) => ({
      '@type': 'Place',
      name: `${n.name}, Chicago, IL`,
    })),
  };

  return (
    <>
      <Helmet>
        <title>Chicago Property Management Service Areas | Stellar Property Group</title>
        <meta
          name="description"
          content="Stellar Property Group provides professional condominium, HOA, and townhome management across 24 Chicago neighborhoods. Find your neighborhood and get a free quote."
        />
        <meta
          name="keywords"
          content="Chicago property management, Chicago HOA management, Chicago condo management, Chicago neighborhood property management"
        />
        <link rel="canonical" href="https://www.stellarpropertygroup.com/service-areas" />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>

      <PageHero
        align="left"
        eyebrow="Where We Serve"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Service Areas' }]}
        title="Chicago property management service areas"
        description={`Stellar Property Group proudly serves ${neighborhoods.length} neighborhoods across Chicago. From lakefront high-rises to neighborhood townhome communities, we deliver professional management wherever you call home.`}
      >
        <span className="inline-flex items-center gap-2 rounded-xl border border-brand-100 bg-white px-4 py-3 text-sm font-semibold text-ink-700 shadow-xs">
          <Building2 className="h-4 w-4 text-brand-600" />
          {neighborhoods.length} Neighborhoods · Condominiums · HOAs · Townhomes
        </span>
      </PageHero>

      {/* Alphabet quick nav */}
      <div className="sticky top-20 z-30 border-y border-ink-100 bg-white/95 backdrop-blur-md">
        <div className="container-x">
          <div className="flex flex-wrap gap-1 py-3">
            {alphabet.map((letter) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-brand-700 transition-colors hover:bg-brand-50"
              >
                {letter}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Neighborhoods grid */}
      <section className="bg-ink-50 py-16 lg:py-20">
        <div className="container-x">
          {alphabet.map((letter) => {
            const letterNeighborhoods = sortedNeighborhoods.filter(
              (n) => n.name[0].toUpperCase() === letter
            );
            return (
              <div key={letter} id={`letter-${letter}`} className="mb-12 scroll-mt-36">
                <h2 className="mb-6 inline-flex items-center gap-3 font-display text-xl font-extrabold text-ink-900">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-white">
                    {letter}
                  </span>
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {letterNeighborhoods.map((neighborhood) => (
                    <Link
                      key={neighborhood.slug}
                      to={`/property-management-${neighborhood.slug}`}
                      className="group rounded-2xl border border-ink-100 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card-hover"
                    >
                      <div className="flex items-start gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                          <MapPin className="h-5 w-5" />
                        </span>
                        <div className="min-w-0">
                          <h3 className="font-display font-bold text-ink-900 transition-colors group-hover:text-brand-700">
                            {neighborhood.name}
                          </h3>
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {neighborhood.propertyTypes.slice(0, 3).map((type) => (
                              <span
                                key={type}
                                className="rounded-md bg-ink-50 px-2 py-0.5 text-xs font-medium capitalize text-ink-500"
                              >
                                {type}
                              </span>
                            ))}
                          </div>
                          <p className="mt-2 text-xs text-ink-400">
                            ZIP: {neighborhood.zipCodes.join(', ')}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-x">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="rounded-2xl border border-ink-100 bg-gradient-to-b from-brand-50 to-white p-7 text-center"
              >
                <div className="font-display text-4xl font-extrabold text-brand-600 lg:text-5xl">
                  {value}
                </div>
                <div className="mt-1.5 text-sm font-medium text-ink-500">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Don't see your neighborhood?"
        description="We're always expanding our service area across Chicagoland. Contact us to discuss your property management needs — we'd love to help your community."
        primaryText="Get a Free Proposal"
      />
    </>
  );
}
