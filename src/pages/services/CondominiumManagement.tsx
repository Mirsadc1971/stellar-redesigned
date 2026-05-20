import { Link } from 'react-router-dom';
import { SEOHead } from '../../components/seo/SEOHead';
import { CTASection } from '../../components/ui/CTASection';
import {
  Building2,
  Scale,
  Users,
  DollarSign,
  Wrench,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  Shield,
  FileText
} from 'lucide-react';

export default function CondominiumManagement() {
  const features = [
    { icon: Scale, title: 'Illinois Condo Act Compliance', description: 'Full compliance with the Illinois Condominium Property Act (765 ILCS 605), ensuring your association meets every statutory requirement.' },
    { icon: Users, title: 'Board Governance Support', description: 'Meeting coordination, agenda preparation, quorum tracking, and parliamentary procedure guidance for effective board operations.' },
    { icon: DollarSign, title: 'Financial Oversight', description: 'Comprehensive budgeting, reserve fund management, assessment collection, and transparent monthly financial reporting.' },
    { icon: Wrench, title: 'Vendor Management', description: 'Vetted contractor relationships, competitive bidding, contract negotiation, and quality oversight for all building services.' },
    { icon: MessageCircle, title: 'Owner Communications', description: 'Dedicated online portal, regular newsletters, emergency notifications, and responsive customer service for all unit owners.' },
    { icon: FileText, title: 'Document Management', description: 'Digital record-keeping, governing document maintenance, disclosure packet preparation, and secure document archiving.' }
  ];

  return (
    <>
      <SEOHead
        title="Condominium Management Services in Chicago | Stellar Property Group"
        description="Full-service condominium management in Chicago and the North Shore. Illinois Condo Property Act compliance, board governance, financial oversight, and 24/7 emergency support. Serving 42 associations since 2007."
      />

      {/* Hero Section */}
      <section className="relative bg-navy-900 py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-gold-500 mb-4">
              <Building2 className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Property Management</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Condominium Management Services in Chicago
            </h1>
            <p className="text-xl text-navy-200 mb-8 leading-relaxed">
              Expert management for Chicago-area condominium associations. From high-rise towers on Lake Shore Drive to boutique buildings in Lincoln Park, we deliver the financial discipline, legal compliance, and responsive service your community deserves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center bg-gold-500 text-navy-900 px-8 py-4 rounded-lg font-semibold hover:bg-gold-400 transition-colors"
              >
                Request a Proposal
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-800 mb-6">
                Full-Service Condo Management Built on Chicago Expertise
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Managing a condominium association in Illinois requires deep knowledge of state-specific regulations, strong financial stewardship, and the ability to balance the needs of diverse unit owners. Since 2007, Stellar Property Group has provided Chicago-area condominiums with the professional management they need to protect property values, maintain common elements, and foster thriving residential communities.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our team holds certifications from the Community Associations Institute (CAI) and the Institute of Real Estate Management (IREM), ensuring your association benefits from industry best practices and cutting-edge management strategies. We currently serve 42 associations across Chicago and the North Shore, maintaining a 96% client retention rate that reflects our commitment to excellence.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether your building has 10 units or 500, our approach is the same: proactive management that prevents problems before they arise, transparent communication that keeps owners informed, and financial planning that positions your association for long-term stability. We assign a dedicated property manager to each community so you always have a knowledgeable point of contact who understands your building inside and out.
              </p>
            </div>
            <div className="bg-navy-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-navy-800 mb-6">Why Chicago Condos Choose Stellar</h3>
              <ul className="space-y-4">
                {[
                  'Dedicated property manager for every community',
                  'Illinois Condominium Property Act expertise',
                  'CAI and IREM certified management team',
                  '24/7 emergency response line',
                  'Online owner portal with financial transparency',
                  'Competitive vendor pricing through bulk contracts',
                  '96% client retention rate since 2007',
                  'Board member training and orientation programs'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-800 mb-4">
              Comprehensive Condominium Management Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every aspect of your association operations, handled by experienced professionals who understand the unique challenges of Chicago condo living.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center mb-5">
                  <feature.icon className="w-6 h-6 text-navy-700" />
                </div>
                <h3 className="text-xl font-bold text-navy-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-navy-700" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-800">
                Illinois Condo Act Compliance
              </h2>
            </div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Illinois condominium associations operate under a complex regulatory framework that includes the Condominium Property Act, the Common Interest Community Association Act, and the Not-for-Profit Corporation Act. Non-compliance can expose board members to personal liability and create costly legal disputes that drain your reserve funds.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our management team stays current with every legislative change and court ruling that affects Illinois condominiums. We ensure your association governing documents, meeting procedures, financial practices, and enforcement policies align with current law. From proper notice requirements to assessment lien procedures, we handle the legal complexities so your board can focus on community-building.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We also work closely with experienced condominium attorneys to address complex legal questions, review proposed bylaw amendments, and navigate disputes. Our proactive approach to compliance has helped our client communities avoid costly litigation and regulatory penalties year after year.
            </p>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-navy-800 mb-10 text-center">
            Related Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Financial Management', href: '/services/financial-management', description: 'Budgeting, reserves, and transparent financial reporting for your association.' },
              { title: 'Maintenance Coordination', href: '/services/maintenance-coordination', description: 'Preventive maintenance programs and 24/7 emergency response for your building.' },
              { title: 'Board Support & Governance', href: '/services/board-support', description: 'Meeting coordination, governance guidance, and strategic planning for your board.' }
            ].map((service) => (
              <Link
                key={service.title}
                to={service.href}
                className="bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition-shadow group"
              >
                <h3 className="text-xl font-bold text-navy-800 mb-3 group-hover:text-gold-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="inline-flex items-center text-navy-700 font-semibold group-hover:text-gold-600 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
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
