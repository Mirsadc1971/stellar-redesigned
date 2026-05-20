import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, ArrowRight, Phone, Building2 } from 'lucide-react';
import { neighborhoods } from '../data/neighborhoods';

const sortedNeighborhoods = [...neighborhoods].sort((a, b) =>
  a.name.localeCompare(b.name)
);

const alphabet = Array.from(
  new Set(sortedNeighborhoods.map((n) => n.name[0].toUpperCase()))
).sort();

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
      addressCountry: 'US'
    },
    areaServed: neighborhoods.map((n) => ({
      '@type': 'Place',
      name: `${n.name}, Chicago, IL`
    }))
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-blue-200 mb-4">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">Service Areas</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Chicago Property Management Service Areas
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Stellar Property Group proudly serves {neighborhoods.length} neighborhoods across
              Chicago. From lakefront high-rises to neighborhood townhome communities, we deliver
              professional management wherever you call home.
            </p>
            <div className="flex items-center gap-3 text-blue-200">
              <Building2 className="w-5 h-5" />
              <span>
                {neighborhoods.length} Neighborhoods &bull; Condominiums &bull; HOAs &bull; Townhomes
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Alphabet Quick Nav */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-1 py-3">
            {alphabet.map((letter) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="w-8 h-8 flex items-center justify-center text-sm font-semibold text-blue-700 hover:bg-blue-50 rounded transition-colors"
              >
                {letter}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {alphabet.map((letter) => {
            const letterNeighborhoods = sortedNeighborhoods.filter(
              (n) => n.name[0].toUpperCase() === letter
            );
            return (
              <div key={letter} id={`letter-${letter}`} className="mb-12 scroll-mt-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-700 pb-2 inline-block">
                  {letter}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {letterNeighborhoods.map((neighborhood) => (
                    <Link
                      key={neighborhood.slug}
                      to={`/property-management-${neighborhood.slug}`}
                      className="group bg-white rounded-lg p-5 shadow-sm hover:shadow-md hover:border-blue-200 border border-gray-100 transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-blue-700 mt-0.5 flex-shrink-0" />
                        <div className="min-w-0">
                          <h3 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                            {neighborhood.name}
                          </h3>
                          <div className="flex flex-wrap gap-1.5 mt-2">
                            {neighborhood.propertyTypes.slice(0, 3).map((type) => (
                              <span
                                key={type}
                                className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded text-xs capitalize"
                              >
                                {type}
                              </span>
                            ))}
                          </div>
                          <p className="text-xs text-gray-400 mt-2">
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

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-700 mb-2">24</div>
              <div className="text-gray-600 font-medium">Neighborhoods Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-700 mb-2">29+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-700 mb-2">42</div>
              <div className="text-gray-600 font-medium">Associations Managed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-700 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Emergency Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't See Your Neighborhood?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            We're always expanding our service area across Chicagoland. Contact us to discuss your
            property management needs — we'd love to see how we can help your community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
            >
              Get a Free Proposal
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:7737280652"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call 773.728.0652
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
