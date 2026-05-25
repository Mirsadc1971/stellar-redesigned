import { Helmet } from 'react-helmet-async';
import {
  Home as HomeIcon, Users, Building2, TrendingUp, Shield, Award,
  AlertTriangle, CheckCircle, Star, Clock, Zap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import ServiceCard from '../components/ui/ServiceCard';
import { CTASection } from '../components/ui/CTASection';

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
    description: 'Expert homeowners association management centered on governance, compliance, and community engagement, with a partner who understands Illinois HOA law.',
    href: '/services/hoa-management',
  },
  {
    icon: Building2,
    title: 'Townhome Management',
    description: 'Tailored management solutions designed for townhome communities of every size. Personalized attention and proactive maintenance keep property values rising.',
    href: '/services/townhome-management',
  },
  {
    icon: TrendingUp,
    title: 'Financial Management',
    description: 'Transparent budgeting, accounting, and financial reporting that boards and owners can trust. Our proven strategies consistently reduce operating costs.',
    href: '/services/financial-management',
  },
  {
    icon: Shield,
    title: 'Maintenance Coordination',
    description: 'Proactive scheduling and vetted vendor management that protects property value year-round — from routine upkeep to emergency repairs, coordinated seamlessly.',
    href: '/services/maintenance-coordination',
  },
  {
    icon: Award,
    title: 'Board Support',
    description: 'Meeting facilitation, governance guidance, and strategic planning to empower your board, so every decision is well-informed.',
    href: '/services/board-support',
  },
  {
    icon: AlertTriangle,
    title: 'Violation Management',
    description: 'Consistent, fair enforcement of community rules and covenants with full documentation. A systematic approach that resolves issues while preserving neighbor relations.',
    href: '/services/violation-management',
  },
];

const differentiators = [
  {
    icon: Star,
    title: '29+ years of Chicago expertise',
    description: 'Deep knowledge of Illinois condo law, Chicago building codes, and North Shore market dynamics — so nothing catches your community off guard.',
  },
  {
    icon: Clock,
    title: '24/7 emergency response',
    description: 'Real people answer your calls around the clock. When urgent issues arise, our team mobilizes immediately to protect your property and residents.',
  },
  {
    icon: CheckCircle,
    title: '96% client retention rate',
    description: 'Communities stay with Stellar because we deliver measurable results — lower costs, higher property values, and happier residents year after year.',
  },
  {
    icon: Zap,
    title: 'Technology-forward approach',
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

      <PageHero
        eyebrow="What We Do"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
        title="Our property management services"
        description="Comprehensive solutions for Chicago condominiums, HOAs, and townhome communities — built on transparency, expertise, and a relentless commitment to your property's success."
      />

      {/* Service cards */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Full-Service Management"
            title="Everything your community needs"
            description="From day-to-day operations to long-term strategic planning, our services cover every aspect of professional community management."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose Stellar */}
      <section className="bg-ink-50 py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="The Stellar Difference"
            title="Why boards choose Stellar"
            description="We don't just manage properties — we build thriving communities, backed by decades of Chicago-area experience."
          />
          <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
            {differentiators.map(({ icon: Icon, title, description }) => (
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

      <CTASection
        title="Ready to get started?"
        description="Discover why 42 Chicago-area associations trust Stellar Property Group. Reach out today for a free, no-obligation consultation."
      />
    </>
  );
}
