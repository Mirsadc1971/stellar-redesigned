import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Building2, Phone, ArrowRight, CheckCircle, Users, Home as HomeIcon,
  TrendingUp, Wrench, Award, Star, MapPin, ChevronRight, Mail, ShieldCheck, Landmark,
} from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';

const services = [
  { icon: HomeIcon, title: 'Condominium Management', desc: 'Complete management for condo associations — daily operations, compliance, and long-term capital planning.', href: '/services/condominium-management' },
  { icon: Users, title: 'HOA Management', desc: 'Homeowners association management focused on community engagement, governance, and Illinois compliance.', href: '/services/hoa-management' },
  { icon: Building2, title: 'Townhome Management', desc: 'Personalized service tailored to townhome communities, with dedicated attention to every detail.', href: '/services/townhome-management' },
  { icon: TrendingUp, title: 'Financial Management', desc: 'Transparent reporting, budgeting, and accounting with proven cost-reduction strategies.', href: '/services/financial-management' },
  { icon: Wrench, title: 'Maintenance Coordination', desc: 'Proactive scheduling and vetted vendor management to protect property value year-round.', href: '/services/maintenance-coordination' },
  { icon: Award, title: 'Board Support', desc: 'Meeting coordination, governance guidance, and strategic planning support for your board.', href: '/services/board-support' },
];

const whyUs = [
  { title: '29+ years of local expertise', desc: 'Deep command of Illinois condo law, Chicago regulations, and North Shore market nuances.' },
  { title: 'CAI & IREM certified professionals', desc: 'Our team holds industry-leading credentials including CAM, PCAM, CPM, and CCIM designations.' },
  { title: '24/7 emergency response', desc: 'Round-the-clock availability for urgent issues — real people answer, never voicemail.' },
  { title: 'Proven cost savings', desc: 'Our vendor network and negotiating leverage routinely reduce operating costs for associations.' },
  { title: 'Transparent, flat-fee pricing', desc: 'Customized, not percentage-based — aligned with your interests, not transaction volume.' },
  { title: 'Board-first communication', desc: 'Monthly reporting, real-time portals, and a dedicated manager for your community.' },
];

const stats = [
  { value: '42', label: 'Associations managed' },
  { value: '2,450+', label: 'Units across Chicagoland' },
  { value: '96%', label: 'Client retention rate' },
  { value: '29+', label: 'Years of local expertise' },
];

const serviceAreas = [
  'Chicago', 'Glenview', 'Northbrook', 'Wilmette',
  'Winnetka', 'Highland Park', 'Evanston', 'Skokie',
  'Glencoe', 'Kenilworth', 'Lake Forest', 'Deerfield',
];

const testimonials = [
  {
    quote: "Stellar transformed our association. Financial reports are clear, vendors are reliable, and our board meetings actually run on time now.",
    name: 'Board President',
    community: 'Lincoln Park Condominium Association',
  },
  {
    quote: "After years with a national firm that barely knew our name, switching to Stellar was the best decision we made. They genuinely care about our community.",
    name: 'Board Treasurer',
    community: 'Lakeview Townhome HOA',
  },
  {
    quote: "The 24/7 emergency response alone is worth it. When our boiler failed at 2 AM in January, Stellar had a crew on-site within the hour.",
    name: 'Property Owner',
    community: 'Edgewater Condo Association',
  },
];

export default function Home() {
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Stellar Property Management',
    description:
      'Professional property management services for Chicago and North Shore communities. Specializing in condominium, HOA, and townhome management since 2007.',
    url: 'https://stellarpropertygroup.com',
    telephone: '+1-773-728-0652',
    email: 'mirsad@stellarpropertygroup.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '5107 N Western Ave, Suite 1S',
      addressLocality: 'Chicago',
      addressRegion: 'IL',
      postalCode: '60625',
      addressCountry: 'US',
    },
    areaServed: { '@type': 'City', name: 'Chicago' },
    foundingDate: '2007',
    priceRange: '$$',
  };

  return (
    <>
      <Helmet>
        <title>Stellar Property Management | Chicago's Premier Property Management Company</title>
        <meta name="description" content="Professional property management for Chicago condominiums, HOAs, and townhome associations. 42 associations served, 96% retention rate. Trusted since 2007. Get a free quote." />
        <link rel="canonical" href="https://stellarpropertygroup.com" />
        <meta property="og:title" content="Stellar Property Management | Chicago Property Management" />
        <meta property="og:description" content="Professional property management for Chicago condominiums, HOAs, and townhome associations since 2007." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="pointer-events-none absolute -top-24 right-[-10rem] h-[34rem] w-[34rem] rounded-full bg-brand-200/40 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-12rem] left-[-10rem] h-[28rem] w-[28rem] rounded-full bg-brand-100/60 blur-3xl" />

        <div className="container-x relative">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
            {/* Copy */}
            <div className="animate-fade-up">
              <span className="eyebrow rounded-full border border-brand-100 bg-white px-4 py-2 shadow-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                Chicago &amp; North Shore Since 2007
              </span>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] text-ink-900 text-balance sm:text-5xl lg:text-6xl">
                Property management,{' '}
                <span className="text-brand-600">elevated.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-500 text-pretty">
                Specializing in condominium, HOA, and townhome management with over 29 years
                of local expertise — trusted by 42 associations across Chicagoland.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary btn-lg">
                  Get a Free Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a href="tel:7737280652" className="btn-secondary btn-lg">
                  <Phone className="h-5 w-5" />
                  773.728.0652
                </a>
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-4 w-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="text-sm font-medium text-ink-500">
                  <span className="font-bold text-ink-900">96% retention</span> across 42 Chicago associations
                </p>
              </div>
            </div>

            {/* Visual */}
            <div className="relative animate-fade-up delay-200">
              <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-100 to-brand-50" />
              <img
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1100"
                alt="Premium Chicago residential building managed by Stellar Property Management"
                className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-card-hover"
                loading="eager"
              />

              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-4 w-56 rounded-2xl border border-ink-100 bg-white/95 p-5 shadow-card backdrop-blur-sm sm:-left-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <TrendingUp className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display text-2xl font-extrabold text-ink-900">2,450+</p>
                    <p className="text-xs font-medium text-ink-400">Units under management</p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -right-3 top-6 flex items-center gap-2 rounded-xl border border-ink-100 bg-white/95 px-4 py-3 shadow-card backdrop-blur-sm sm:-right-6">
                <ShieldCheck className="h-5 w-5 text-brand-600" />
                <span className="text-sm font-bold text-ink-900">CAI &amp; IREM Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats strip ────────────────────────────────────────── */}
      <section className="border-y border-ink-100 bg-white">
        <div className="container-x">
          <dl className="grid grid-cols-2 divide-ink-100 lg:grid-cols-4 lg:divide-x">
            {stats.map(({ value, label }, i) => (
              <div
                key={label}
                className={`px-4 py-8 text-center lg:py-10 ${i < 2 ? 'border-b border-ink-100 lg:border-b-0' : ''}`}
              >
                <dt className="font-display text-4xl font-extrabold text-brand-600 lg:text-5xl">
                  {value}
                </dt>
                <dd className="mt-1.5 text-sm font-medium text-ink-500">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Services ───────────────────────────────────────────── */}
      <section className="bg-ink-50 py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="What We Do"
            title="Full-service property management"
            description="Tailored solutions for Chicago's condominium associations, HOAs, and townhome communities — from daily operations to long-term strategy."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc, href }) => (
              <Link
                key={title}
                to={href}
                className="group flex flex-col rounded-2xl border border-ink-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-card-hover"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-ink-900">{title}</h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-500">{desc}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  Learn more
                  <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
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

      {/* ── Why Choose Us ──────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="The Difference"
                title="Why boards choose Stellar"
                description="We're not a national firm that treats your community as a number. We're Chicago specialists who know the neighborhoods, the laws, and the vendors — and prove it every day."
              />
              <div className="mt-9 space-y-4">
                {whyUs.map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                      <CheckCircle className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-semibold text-ink-900">{title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-ink-500">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-100 to-brand-50" />
              <img
                src="https://images.pexels.com/photos/1560932/pexels-photo-1560932.jpeg?auto=compress&cs=tinysrgb&w=1100"
                alt="Chicago skyline showcasing the communities Stellar Property Management serves"
                className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-card-hover"
                loading="lazy"
              />
              <div className="absolute -bottom-7 left-1/2 flex w-[88%] -translate-x-1/2 items-center justify-around rounded-2xl border border-ink-100 bg-white/95 px-4 py-5 shadow-card backdrop-blur-sm">
                {[
                  { v: '96%', l: 'Retention' },
                  { v: '42', l: 'Associations' },
                  { v: '29yr', l: 'Experience' },
                ].map(({ v, l }, i) => (
                  <div
                    key={l}
                    className={`flex-1 text-center ${i < 2 ? 'border-r border-ink-100' : ''}`}
                  >
                    <p className="font-display text-2xl font-extrabold text-ink-900">{v}</p>
                    <p className="text-xs font-medium text-ink-400">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── About / Service Areas ──────────────────────────────── */}
      <section className="bg-ink-50 py-20 lg:py-28">
        <div className="container-x">
          <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Our Story"
                title="Chicago's trusted property partner since 2007"
              />
              <div className="mt-6 space-y-4 text-ink-500 leading-relaxed">
                <p>
                  Since 2007, Stellar Property Management has specialized exclusively in Chicago and
                  North Shore property management — condominiums, HOAs, and townhomes only.
                  That focus isn't a limitation; it's why we outperform generalist firms.
                </p>
                <p>
                  We've earned a 96% client retention rate by treating every community as our
                  only one. Our certified professionals hold credentials from CAI, IREM, and
                  CCIM, and we're fully licensed by IDFPR.
                </p>
                <p>
                  When your board is ready for a management partner that responds, reports,
                  and delivers — we're ready to talk.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/about" className="btn-primary">
                  Learn More About Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Request a Proposal
                </Link>
              </div>
            </div>

            <div className="surface-card p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <MapPin className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-bold text-ink-900">Service Areas</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">
                We manage communities across Chicago and the North Shore's most desirable
                neighborhoods.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2.5 sm:grid-cols-3">
                {serviceAreas.map((area) => (
                  <div key={area} className="flex items-center gap-2 text-sm font-medium text-ink-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                    {area}
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-ink-100 pt-6">
                <Link
                  to="/service-areas"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
                >
                  View all 24 neighborhoods
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 border-t border-ink-100 pt-6">
                {['CAI Certified', 'IREM Member', 'IDFPR Licensed', 'CCIM Designated'].map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-ink-200 bg-ink-50 px-3 py-1.5 text-xs font-semibold text-ink-600"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ───────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Client Testimonials"
            title="What board members say"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map(({ quote, name, community }) => (
              <figure
                key={community}
                className="flex flex-col rounded-2xl border border-ink-100 bg-ink-50 p-7"
              >
                <div className="mb-4 flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-4 w-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <blockquote className="flex-1 text-[15px] leading-relaxed text-ink-700">
                  "{quote}"
                </blockquote>
                <figcaption className="mt-6 border-t border-ink-200/70 pt-5">
                  <p className="font-semibold text-ink-900">{name}</p>
                  <p className="text-sm text-ink-400">{community}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog preview ───────────────────────────────────────── */}
      <section className="bg-ink-50 py-20 lg:py-28">
        <div className="container-x">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Resources" title="Latest from our blog" />
            <Link
              to="/blog"
              className="hidden items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 md:inline-flex"
            >
              View All Posts
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <Link
            to="/blog/condominium-property-management-chicago-what-board-members-should-expect"
            className="group block overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
          >
            <div className="p-8 lg:p-12">
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-700">
                  Board Education
                </span>
                <span className="text-xs font-medium text-ink-400">8 min read</span>
              </div>
              <h3 className="max-w-3xl font-display text-2xl font-bold text-ink-900 transition-colors group-hover:text-brand-700 lg:text-3xl">
                Condominium Property Management in Chicago: What Board Members Should Expect
              </h3>
              <p className="mt-3 max-w-3xl leading-relaxed text-ink-500">
                A comprehensive guide for board members on what to expect from a professional
                property management company — covering financial oversight, maintenance
                coordination, governance support, and more.
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                Read the full article
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ── Contact CTA ────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <Link
            to="/resources"
            className="group mb-10 flex flex-col items-start gap-4 rounded-2xl border border-gold-200 bg-gold-50 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card sm:flex-row sm:items-center sm:justify-between sm:p-7"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-100 text-gold-600">
                <Landmark className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-base font-bold text-ink-900">
                  Owners: pay assessments with no processing fees
                </p>
                <p className="mt-0.5 text-sm text-ink-500">
                  Use your bank's free Bill Pay service — see how to set it up.
                </p>
              </div>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-600">
              View Bill Pay details
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
          <div className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 px-7 py-14 sm:px-12 lg:px-16 lg:py-16">
            <div className="absolute inset-0 bg-grid-light opacity-70" />
            <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-brand-500/30 blur-3xl" />

            <div className="relative grid items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="eyebrow text-brand-200">
                  <span className="h-px w-6 bg-brand-300" />
                  Contact Us
                </p>
                <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-white text-balance sm:text-4xl">
                  Ready to talk?
                </h2>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-brand-100">
                  Whether you're switching managers or starting fresh, we'll show you what
                  professional management looks like. No pressure — just answers.
                </p>
                <Link to="/contact" className="btn-white btn-lg mt-8">
                  Request a Proposal
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>

              <div className="grid gap-4">
                {[
                  { icon: MapPin, title: 'Office', lines: ['5107 N Western Ave, Suite 1S', 'Chicago, Illinois 60625'] },
                  { icon: Phone, title: 'Phone', lines: ['773.728.0652'], href: 'tel:7737280652', sub: '24/7 Emergency Line' },
                  { icon: Mail, title: 'Email', lines: ['mirsad@stellarpropertygroup.com'], href: 'mailto:mirsad@stellarpropertygroup.com' },
                ].map(({ icon: Icon, title, lines, href, sub }) => (
                  <div
                    key={title}
                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur-sm"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-200">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-300">
                        {title}
                      </p>
                      {lines.map((line) =>
                        href ? (
                          <a
                            key={line}
                            href={href}
                            className="block text-sm font-medium text-white transition-colors hover:text-brand-200"
                          >
                            {line}
                          </a>
                        ) : (
                          <p key={line} className="text-sm font-medium text-white">{line}</p>
                        )
                      )}
                      {sub && <p className="mt-0.5 text-xs text-brand-200/70">{sub}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
