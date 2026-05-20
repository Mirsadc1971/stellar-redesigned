import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Home as HomeIcon, Users, Building2, TrendingUp, Shield, Award,
  AlertTriangle, ArrowRight, CheckCircle, Phone, Star, Clock, Zap
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

const services: ServiceItem[] = [
  {
    icon: HomeIcon,
    title: 'Condominium Management',
    description: 'Full-service management for Chicago condo associations, from daily operations to reserve planning. We handle the details so your board can focus on community vision.',
    href: '/services/condominium-management',
  },
  {
    icon: Users,
    title: 'HOA Management',
    description: 'Expert homeowners association management centered on governance, compliance, and community engagement. Build a stronger neighborhood with a partner who understands Illinois HOA law.',
    href: '/services/hoa-management',
  },
  {
    icon: Building2,
    title: 'Townhome Management',
    description: 'Tailored management solutions designed for townhome communities of every size. Personalized attention and proactive maintenance keep your property values rising.',
    href: '/services/townhome-management',
  },
  {
    icon: TrendingUp,
    title: 'Financial Management',
    description: 'Transparent budgeting, accounting, and financial reporting that boards and owners can trust. Our proven strategies consistently reduce operating costs across communities.',
    href: '/services/financial-management',
  },
  {
    icon: Shield,
    title: 'Maintenance Coordination',
    description: 'Proactive scheduling and vetted vendor management that protects property value year-round. From routine upkeep to emergency repairs, we coordinate it all seamlessly.',
    href: '/services/maintenance-coordination',
  },
  {
    icon: Award,
    title: 'Board Support',
    description: 'Meeting facilitation, governance guidance, and strategic planning to empower your board. We provide the tools and expertise so every decision is well-informed.',
    href: '/services/board-support',
  },
  {
    icon: AlertTriangle,
    title: 'Violation Management',
    description: 'Consistent, fair enforcement of community rules and covenants with full documentation. Our systematic approach resolves issues efficiently while preserving neighbor relationships.',
    href: '/services/violation-management',
  },
];

const differentiators = [
  {
    icon: Star,
    title: '29+ Years of Chicago Expertise',
    description: 'Deep knowledge of Illinois condo law, Chicago building codes, and North Shore market dynamics — so nothing catches your community off guard.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Response',
    description: 'Real people answer your calls around the clock. When urgent issues arise, our team mobilizes immediately to protect your property and residents.',
  },
  {
    icon: CheckCircle,
    title: '96% Client Retention Rate',
    description: 'Communities stay with Stellar because we deliver measurable results — lower costs, higher property values, and happier residents year after year.',
  },
  {
    icon: Zap,
    title: 'Technology-Forward Approach',
    description: 'Online portals, real-time reporting, and digital communication tools give boards and residents instant access to everything they need.',
  },
];

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Property Management Services | Stellar Property Group</title>
        <meta
          name="description"
          content="Full-service property management for Chicago condominium associations, HOAs, and townhome communities. From financial oversight to maintenance coordination, Stellar Property Group delivers comprehensive solutions tailored to your community."
        />
        <link rel="canonical" href="https://stellarpropertygroup.com/services" />
      </Helmet>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative bg-navy-950 py-24 md:py-32 overflow-hidden">
        {/* Decorative gradient accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/50 via-transparent to-navy-950 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-gold-400 font-semibold text-sm tracking-widest uppercase mb-4">
            What We Do
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Our Property Management Services
          </h1>
          <p className="text-lg md:text-xl text-navy-200 max-w-2xl mx-auto leading-relaxed">
            Comprehensive solutions for Chicago condominiums, HOAs, and townhome
            communities — built on transparency, expertise, and a relentless
            commitment to your property's success.
          </p>
        </div>
      </section>

      {/* ── Service Cards Grid ─────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-navy-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">
              Everything Your Community Needs
            </h2>
            <p className="text-navy-500 max-w-2xl mx-auto text-lg">
              From day-to-day operations to long-term strategic planning, our
              services cover every aspect of professional community management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  to={service.href}
                  className="group block bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-navy-100/50"
                >
                  <div className="w-14 h-14 bg-navy-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-navy-700 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-navy-600 group-hover:text-gold-400 transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-800 mb-3 group-hover:text-navy-900 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-navy-500 leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-navy-600 group-hover:text-gold-600 transition-colors duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why Choose Stellar ─────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-gold-500 font-semibold text-sm tracking-widest uppercase mb-4">
              The Stellar Difference
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">
              Why Choose Stellar
            </h2>
            <p className="text-navy-500 max-w-2xl mx-auto text-lg">
              We don't just manage properties — we build thriving communities
              backed by decades of Chicago-area experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {differentiators.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex gap-5 p-6 rounded-xl bg-navy-50/50 border border-navy-100/50"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-navy-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="bg-navy-950 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-navy-200 mb-10 max-w-2xl mx-auto">
            Discover why 42 Chicago-area communities trust Stellar Property
            Group. Reach out today for a free, no-obligation consultation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center bg-gold-500 text-navy-900 px-8 py-4 rounded-lg font-semibold hover:bg-gold-400 transition-colors"
            >
              Get a Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="tel:7737280652"
              className="inline-flex items-center text-white border border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              773.728.0652
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
