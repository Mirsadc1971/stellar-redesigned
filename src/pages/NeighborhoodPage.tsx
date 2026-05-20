import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Building2, Shield, DollarSign, Users, ClipboardCheck, Phone, MapPin, ArrowRight, Home } from 'lucide-react';
import { getNeighborhoodBySlug, getRelatedNeighborhoods } from '../data/neighborhoods';

const services = [
  {
    title: 'Financial Management',
    description: 'Transparent budgeting, assessments, reserves, and detailed financial reporting for your association.',
    icon: DollarSign,
    link: '/services/financial-management'
  },
  {
    title: 'Maintenance & Operations',
    description: 'Proactive maintenance programs, vendor management, and 24/7 emergency response.',
    icon: ClipboardCheck,
    link: '/services/maintenance'
  },
  {
    title: 'Board & Community Support',
    description: 'Meeting coordination, compliance enforcement, and communication tools for effective governance.',
    icon: Users,
    link: '/services/board-support'
  },
  {
    title: 'Vendor Management',
    description: 'Vetted contractor networks, competitive bidding, and quality oversight for all building projects.',
    icon: Building2,
    link: '/services/vendor-management'
  }
];

const whyChoose = [
  {
    title: 'Local Expertise',
    description: 'Deep knowledge of Chicago neighborhoods, building codes, and local vendor networks.',
    icon: MapPin
  },
  {
    title: 'Proven Track Record',
    description: 'Trusted by hundreds of associations across Chicago for reliable, professional management.',
    icon: Shield
  },
  {
    title: 'Transparent Communication',
    description: 'Real-time reporting, online portals, and responsive service your board can count on.',
    icon: Phone
  },
  {
    title: 'Tailored Solutions',
    description: 'Management plans customized to your building size, budget, and community needs.',
    icon: Home
  }
];

export default function NeighborhoodPage() {
  const { slug } = useParams<{ slug: string }>();
  const neighborhood = slug ? getNeighborhoodBySlug(slug) : undefined;

  if (!neighborhood) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Neighborhood Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">
            We couldn't find the neighborhood you're looking for. Browse all our service areas to find your community.
          </p>
          <Link
            to="/service-areas"
            className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
          >
            View All Service Areas
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    );
  }

  const relatedNeighborhoods = getRelatedNeighborhoods(neighborhood.slug, 3);

  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Stellar Property Group',
    description: `Professional property management in ${neighborhood.name}, Chicago.`,
    url: `https://www.stellarpropertygroup.com/property-management-${neighborhood.slug}`,
    telephone: '+1-773-728-0652',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '5107 N Western Ave, Suite 1S',
      addressLocality: 'Chicago',
      addressRegion: 'IL',
      postalCode: '60625',
      addressCountry: 'US'
    },
    areaServed: {
      '@type': 'Place',
      name: `${neighborhood.name}, Chicago, IL`
    },
    serviceType: 'Property Management',
    priceRange: '$$'
  };

  return (
    <>
      <Helmet>
        <title>Property Management in {neighborhood.name} | Stellar Property Group</title>
        <meta
          name="description"
          content={`Professional condominium, HOA, and townhome management in ${neighborhood.name}, Chicago. Trusted by local boards for 20+ years. Get a free quote today.`}
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-blue-200 mb-4">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/service-areas" className="hover:text-white transition-colors">Service Areas</Link>
              <span>/</span>
              <span className="text-white">{neighborhood.name}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Property Management in {neighborhood.name}, Chicago
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              {neighborhood.description}
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {neighborhood.propertyTypes.map((type) => (
                <span
                  key={type}
                  className="bg-blue-700/50 border border-blue-400/30 text-blue-100 px-4 py-1.5 rounded-full text-sm font-medium capitalize"
                >
                  {type}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:7737280652"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                <Phone className="w-5 h-5" />
                773.728.0652
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services in {neighborhood.name}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive property management tailored to the unique needs of {neighborhood.name} associations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  to={service.link}
                  className="group bg-gray-50 rounded-xl p-6 hover:bg-blue-50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                    <Icon className="w-6 h-6 text-blue-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800 transition-colors"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Stellar for {neighborhood.name} Property Management
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine citywide resources with neighborhood-level knowledge to deliver exceptional results for your association.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChoose.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex gap-4 bg-white rounded-xl p-6 shadow-sm"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Zip Codes Section */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-gray-700 font-semibold">Serving ZIP codes:</span>
            {neighborhood.zipCodes.map((zip) => (
              <span
                key={zip}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm font-medium"
              >
                {zip}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Elevate Your {neighborhood.name} Property Management?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for a free, no-obligation consultation and proposal tailored to your association's needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
            >
              Get Your Free Proposal
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

      {/* Related Neighborhoods & Internal Links */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Explore Nearby Neighborhoods
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {relatedNeighborhoods.map((related) => (
              <Link
                key={related.slug}
                to={`/property-management-${related.slug}`}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-blue-700" />
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                    {related.name}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                  {related.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {related.propertyTypes.slice(0, 3).map((type) => (
                    <span
                      key={type}
                      className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs capitalize"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-800 font-medium transition-colors"
              >
                Our Services <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-800 font-medium transition-colors"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/service-areas"
                className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-800 font-medium transition-colors"
              >
                All Service Areas <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
