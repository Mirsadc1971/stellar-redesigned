import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight, Shield, Eye, Zap, Award, ChevronRight, MapPin,
} from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import { CTASection } from '../components/ui/CTASection';

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    desc: 'We act as fiduciaries for every community we serve, making decisions that protect owners and preserve property values.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    desc: 'Clear financial reporting, open communication, and real-time portal access so your board is never left guessing.',
  },
  {
    icon: Zap,
    title: 'Responsiveness',
    desc: '24/7 emergency availability with real people answering the phone. Your concerns are addressed, not queued.',
  },
  {
    icon: Award,
    title: 'Excellence',
    desc: 'Industry-leading credentials, continuous education, and a relentless focus on raising the standard of management.',
  },
];

const credentials = [
  {
    abbr: 'CAI',
    name: 'Community Associations Institute',
    desc: 'Our team holds CAM and PCAM designations from the premier organization for community association professionals.',
  },
  {
    abbr: 'IREM',
    name: 'Institute of Real Estate Management',
    desc: 'Certified Property Manager (CPM) credentials ensuring the highest standards of ethical and professional practice.',
  },
  {
    abbr: 'IDFPR',
    name: 'IL Dept. of Financial & Professional Regulation',
    desc: 'Fully licensed by the State of Illinois with all required community association manager licensing.',
  },
  {
    abbr: 'CCIM',
    name: 'Certified Commercial Investment Member',
    desc: 'Advanced training in commercial real estate investment analysis, bringing financial sophistication to every engagement.',
  },
];

const stats = [
  { value: '42', label: 'Associations', sub: 'Under management' },
  { value: '2,450+', label: 'Units', sub: 'Across Chicagoland' },
  { value: '96%', label: 'Retention Rate', sub: 'Client satisfaction' },
  { value: '29+', label: 'Years', sub: 'Local expertise' },
];

const areas = [
  'Chicago', 'Evanston', 'Skokie', 'Glenview', 'Wilmette', 'Winnetka',
  'Highland Park', 'Northbrook', 'Glencoe', 'Kenilworth', 'Lake Forest', 'Deerfield',
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Stellar Property Group | Chicago Property Management Since 2007</title>
        <meta
          name="description"
          content="Learn about Stellar Property Group — Chicago's trusted property management company since 2007. 42 associations, 2,450+ units, and a 96% client retention rate. CAI, IREM, IDFPR, and CCIM certified."
        />
        <link rel="canonical" href="https://stellarpropertygroup.com/about" />
      </Helmet>

      <PageHero
        eyebrow="Serving Chicago Since 2007"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'About' }]}
        title="About Stellar Property Group"
        description="A locally owned, professionally credentialed property management firm dedicated exclusively to Chicago condominiums, HOAs, and townhome communities."
      />

      {/* Company Story */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Our Story"
                title="From a small firm to 42 associations"
              />
              <div className="mt-6 space-y-4 leading-relaxed text-ink-500">
                <p>
                  Stellar Property Group was founded in 2007 with a clear mission: deliver
                  property management that Chicago condo boards, HOAs, and townhome
                  associations actually deserve. At the time, most firms treated community
                  management as a side business. We made it our only business.
                </p>
                <p>
                  Starting with a handful of Chicago North Side associations, we grew through
                  referrals and results — not marketing gimmicks. Today we manage 42
                  associations and 2,450 units across Chicago and the North Shore, with a 96%
                  client retention rate that speaks louder than any advertisement.
                </p>
                <p>
                  Our growth has always been intentional. We only take on communities we can
                  serve exceptionally, assigning a dedicated manager who knows every building,
                  every board member, and every vendor by name.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/services" className="btn-primary">
                  Our Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Get in Touch
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-100 to-brand-50" />
              <img
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1100"
                alt="Premium Chicago residential building managed by Stellar Property Group"
                className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-card-hover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-ink-50 py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Values"
            title="What drives us every day"
            description="These aren't posters on a wall. They're the principles that guide every decision we make for the communities we serve."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-ink-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-ink-900">{title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-x">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {stats.map(({ value, label, sub }) => (
              <div
                key={label}
                className="rounded-2xl border border-ink-100 bg-gradient-to-b from-brand-50 to-white p-7 text-center"
              >
                <div className="font-display text-4xl font-extrabold text-brand-600 lg:text-5xl">
                  {value}
                </div>
                <div className="mt-1.5 text-sm font-bold text-ink-900">{label}</div>
                <div className="text-xs text-ink-400">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-ink-50 py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Credentials"
            title="Industry-leading certifications"
            description="Our team holds the most respected credentials in property management — proof of our commitment to professional excellence and continuing education."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {credentials.map(({ abbr, name, desc }) => (
              <div
                key={abbr}
                className="flex items-start gap-5 rounded-2xl border border-ink-100 bg-white p-7 shadow-soft"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-800">
                  <span className="text-sm font-extrabold tracking-wide text-white">{abbr}</span>
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-ink-900">{name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <div className="surface-card overflow-hidden">
            <div className="grid items-center gap-10 p-8 lg:grid-cols-2 lg:p-12">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <p className="eyebrow">Where We Serve</p>
                </div>
                <h2 className="font-display text-3xl font-extrabold leading-tight text-ink-900">
                  Chicago &amp; the North Shore
                </h2>
                <p className="mt-4 leading-relaxed text-ink-500">
                  From Lincoln Park to Lake Forest, we manage communities across Chicago's
                  most desirable neighborhoods and North Shore suburbs. Our local expertise
                  means we know every building department and every reliable contractor in
                  your area.
                </p>
                <Link
                  to="/service-areas"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
                >
                  View All Service Areas
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {areas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-2 rounded-xl border border-ink-100 bg-ink-50 px-3 py-2.5 text-sm font-medium text-ink-700"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to experience the Stellar difference?"
        description="Whether you're considering a management change or exploring options for the first time, we'd love to learn about your community."
        primaryText="Request a Proposal"
      />
    </>
  );
}
