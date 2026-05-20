import { Link } from 'react-router-dom';
import { SEOHead } from '../../components/seo/SEOHead';
import { CTASection } from '../../components/ui/CTASection';
import {
  Shield,
  FileSearch,
  Scale,
  ClipboardList,
  TrendingUp,
  FileText,
  CheckCircle2,
  ArrowRight,
  Gavel
} from 'lucide-react';

export default function ViolationManagement() {
  const features = [
    { icon: FileSearch, title: 'Rule Enforcement', description: 'Systematic monitoring and enforcement of community rules, architectural standards, and use restrictions based on your governing documents.' },
    { icon: Scale, title: 'Due Process Compliance', description: 'Every enforcement action follows proper notice requirements, hearing procedures, and appeal rights as required by Illinois law and your bylaws.' },
    { icon: ClipboardList, title: 'Violation Tracking', description: 'Digital tracking system that documents every violation, notice, response, and resolution with complete audit trails for your records.' },
    { icon: TrendingUp, title: 'Progressive Enforcement', description: 'Graduated response from friendly reminders to formal warnings to fines to hearings, giving homeowners every opportunity to come into compliance.' },
    { icon: FileText, title: 'Documentation Management', description: 'Proper documentation of every enforcement action including photographs, correspondence, hearing records, and resolution agreements.' },
    { icon: Gavel, title: 'Hearing Facilitation', description: 'Professional coordination of violation hearings including notice preparation, evidence organization, hearing procedures, and decision documentation.' }
  ];

  return (
    <>
      <SEOHead
        title="Violation Management & Enforcement | Stellar Property Group"
        description="Professional violation management and enforcement for Chicago community associations. Fair due process, progressive enforcement, violation tracking, and Illinois compliance. Protecting community standards since 2007."
      />

      {/* Hero Section */}
      <section className="relative bg-navy-900 py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-gold-500 mb-4">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Enforcement Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Violation Management & Enforcement
            </h1>
            <p className="text-xl text-navy-200 mb-8 leading-relaxed">
              Protecting your community standards through fair, consistent, and legally compliant enforcement. Our systematic approach to violation management preserves property values while respecting the rights of every homeowner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center bg-gold-500 text-navy-900 px-8 py-4 rounded-lg font-semibold hover:bg-gold-400 transition-colors"
              >
                Discuss Your Enforcement Needs
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
                Fair Enforcement That Protects Everyone
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Community rules exist for good reason: they protect property values, maintain quality of life, and ensure every resident can enjoy their home in peace. But enforcement without proper process creates conflict, legal exposure, and community division. Stellar Property Group brings a balanced approach to violation management that upholds your community standards while treating every homeowner with fairness and respect.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our violation management system is built on three principles: consistency, transparency, and due process. Every violation is documented objectively, every homeowner receives proper notice and the opportunity to be heard, and every enforcement action follows a progressive discipline framework that the board has approved in advance. This systematic approach protects your association from legal challenges while building community trust in the enforcement process.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Since 2007, we have helped 42 Chicago-area associations maintain their community standards through professional violation management. Our experience with Illinois community association law ensures your enforcement procedures comply with state requirements, your governing documents are properly applied, and your board is protected from liability throughout the process.
              </p>
            </div>
            <div className="bg-navy-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-navy-800 mb-6">Our Enforcement Approach</h3>
              <ul className="space-y-4">
                {[
                  'Consistent, documented enforcement procedures',
                  'Progressive discipline framework',
                  'Proper notice and due process for every case',
                  'Digital violation tracking and reporting',
                  'Illinois community association law compliance',
                  'Hearing coordination and facilitation',
                  'Board-approved enforcement policies',
                  'Regular community-wide rule reminders'
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
              Professional Violation Management Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A complete enforcement system that protects your community standards while following fair, legally compliant procedures at every step.
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
              <Scale className="w-8 h-8 text-navy-700" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-800">
                Illinois Compliance and Legal Protection
              </h2>
            </div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Illinois law imposes specific requirements on how community associations enforce their rules and levy fines. The Common Interest Community Association Act requires associations to provide written notice of alleged violations, offer homeowners a reasonable opportunity to be heard before the board, and follow their own internal procedures consistently. Failure to follow these requirements can invalidate enforcement actions and expose the association to legal liability.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our violation management procedures are designed specifically to comply with Illinois law and protect your association from legal challenges. Every notice includes the specific rule violated, the factual basis for the allegation, the potential consequences, and the homeowner right to request a hearing. Our hearing process follows a structured format that ensures fairness while creating a clear record of the proceedings and the board decision.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We also work with your association attorney to review and update enforcement policies as laws change, ensuring your procedures remain current and defensible. Our detailed documentation practices create a complete paper trail that protects your association if enforcement actions are ever challenged in court. This attention to legal compliance is one of the key reasons our client communities maintain a 96% retention rate with Stellar Property Group.
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
              { title: 'HOA Management', href: '/services/hoa-management', description: 'Full-service HOA management with integrated rule enforcement.' },
              { title: 'Board Support & Governance', href: '/services/board-support', description: 'Governance guidance and hearing facilitation support for your board.' },
              { title: 'Condominium Management', href: '/services/condominium-management', description: 'Condo management with Illinois compliance expertise built in.' }
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
