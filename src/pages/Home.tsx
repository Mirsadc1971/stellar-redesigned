import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Building2, Phone, ArrowRight, CheckCircle, Users, Home as HomeIcon,
  TrendingUp, Shield, Clock, Award, Star, MapPin, ChevronRight
} from 'lucide-react';

const services = [
  { icon: HomeIcon, title: 'Condominium Management', desc: 'Complete management solutions for condo associations, from daily operations to long-term capital planning.', href: '/services/condominium-management' },
  { icon: Users, title: 'HOA Management', desc: 'Expert homeowners association management focused on community engagement, governance, and compliance.', href: '/services/hoa-management' },
  { icon: Building2, title: 'Townhome Management', desc: 'Personalized services tailored to townhome communities with dedicated attention to every detail.', href: '/services/townhome-management' },
  { icon: TrendingUp, title: 'Financial Management', desc: 'Transparent reporting, budgeting, and accounting with proven cost-reduction strategies.', href: '/services/financial-management' },
  { icon: Shield, title: 'Maintenance Coordination', desc: 'Proactive scheduling and vendor management to protect property value and resident satisfaction.', href: '/services/maintenance-coordination' },
  { icon: Award, title: 'Board Support', desc: 'Meeting coordination, documentation, governance guidance, and strategic planning support.', href: '/services/board-support' },
  { icon: Clock, title: 'Administrative Services', desc: 'Streamlined operations, correspondence management, and compliance record-keeping.', href: '/services/violation-management' },
  { icon: CheckCircle, title: 'Capital Project Management', desc: 'Expert oversight of major renovations and infrastructure projects from bid to completion.', href: '/services/maintenance-coordination' },
  { icon: Star, title: 'Resident Relations', desc: 'Dedicated communications channels and responsive support that keeps communities thriving.', href: '/services/board-support' },
];

const whyUs = [
  { title: '18+ Years of Local Expertise', desc: 'Deep understanding of Illinois condo law, Chicago regulations, and North Shore market nuances.' },
  { title: 'CAI & IREM Certified Professionals', desc: 'Our team holds industry-leading credentials including CAM, PCAM, CPM, and CCIM designations.' },
  { title: '24/7 Emergency Response', desc: 'Round-the-clock availability for urgent issues — real people answer, not voicemail.' },
  { title: 'Guaranteed Cost Savings', desc: 'Our vendor network and negotiating leverage routinely reduces operating costs for associations.' },
  { title: 'Transparent, Flat-Fee Pricing', desc: 'Customized, not percentage-based — aligned with your interests, not transaction volume.' },
  { title: 'Board-First Communication', desc: 'Monthly reports, real-time portals, and a dedicated manager for your community.' },
];

const serviceAreas = [
  'Chicago', 'Glenview', 'Northbrook', 'Wilmette',
  'Winnetka', 'Highland Park', 'Evanston', 'Skokie',
  'Glencoe', 'Kenilworth', 'Lake Forest', 'Deerfield',
];

export default function Home() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Stellar Property Group",
    "description": "Professional property management services for Chicago and North Shore communities. Specializing in condominium, HOA, and townhome management since 2007.",
    "url": "https://stellarpropertygroup.com",
    "telephone": "+1-773-728-0652",
    "email": "mirsad@stellarpropertygroup.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5107 N Western Ave, Suite 1S",
      "addressLocality": "Chicago",
      "addressRegion": "IL",
      "postalCode": "60625",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": "Chicago"
    },
    "foundingDate": "2007",
    "priceRange": "$$"
  };

  return (
    <>
      <Helmet>
        <title>Stellar Property Group | Chicago's Premier Property Management Company</title>
        <meta name="description" content="Professional property management for Chicago condominiums, HOAs, and townhome associations. 50+ communities served, 96% retention rate. Trusted since 2007. Get a free quote." />
        <link rel="canonical" href="https://stellarpropertygroup.com" />
        <meta property="og:title" content="Stellar Property Group | Chicago Property Management" />
        <meta property="og:description" content="Professional property management for Chicago condominiums, HOAs, and townhome associations since 2007." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-950">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1560932/pexels-photo-1560932.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Chicago skyline at dusk showcasing the city's iconic architecture"
            className="w-full h-full object-cover object-center opacity-25"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/60" />
        </div>

        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-32 lg:py-40 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 text-white/80 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
                Chicago &amp; North Shore Since 2007
              </div>
              <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08] mb-6 text-balance">
                Property Management,<br />
                <span className="text-gold-400">Elevated.</span>
              </h1>
              <p className="text-lg text-white/65 leading-relaxed mb-10 max-w-lg">
                Specializing in condominium, HOA, and townhome management with over 18 years of local expertise. Trusted by 50+ communities across Chicagoland.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white text-navy-900 font-semibold px-7 py-3.5 rounded-lg hover:bg-slate-100 transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 text-sm"
                >
                  Get a Free Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:7737280652"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-white/15 transition-all duration-200 text-sm"
                >
                  <Phone className="w-4 h-4" />
                  773.728.0652
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-fade-up delay-200">
              {[
                { value: '50+', label: 'Communities', sub: 'Under management' },
                { value: '2,450+', label: 'Units', sub: 'Across Chicago' },
                { value: '96%', label: 'Retention', sub: 'Client satisfaction' },
                { value: '18+', label: 'Years', sub: 'Local expertise' },
              ].map(({ value, label, sub }) => (
                <div
                  key={label}
                  className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300"
                >
                  <div className="text-4xl font-bold text-white mb-1">{value}</div>
                  <div className="text-sm font-semibold text-white/80">{label}</div>
                  <div className="text-xs text-white/45 mt-0.5">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs">
          <span className="uppercase tracking-widest text-[10px]">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* ── Services ───────────────────────────────────────────── */}
      <section className="py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-navy-600 mb-3">What We Do</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-900 leading-tight mb-4">
              Full-Service Property Management
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Tailored solutions for Chicago's condominium associations, HOAs, and townhome communities — from daily operations to long-term strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc, href }) => (
              <Link
                key={title}
                to={href}
                className="group bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-slate-100"
              >
                <div className="w-11 h-11 rounded-xl bg-navy-50 flex items-center justify-center mb-5 group-hover:bg-navy-800 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-navy-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-base font-semibold text-navy-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-navy-600 mt-4 group-hover:text-navy-800 transition-colors">
                  Learn more <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-navy-700 font-semibold hover:text-navy-900 transition-colors text-sm"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ──────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-navy-600 mb-3">The Difference</p>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-900 leading-tight mb-6">
                Why Boards Choose Stellar
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                We're not a large national firm that treats your community as a number. We're Chicago specialists who know the neighborhoods, the laws, and the vendors — and we prove it every day.
              </p>

              <div className="space-y-5">
                {whyUs.map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-4 group">
                    <div className="w-5 h-5 rounded-full bg-navy-100 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-navy-800 transition-colors duration-200">
                      <CheckCircle className="w-3 h-3 text-navy-700 group-hover:text-white transition-colors duration-200" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy-900">{title}</p>
                      <p className="text-sm text-slate-500 mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-navy-100 to-navy-50 rounded-3xl -z-10" />
              <img
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Premium Chicago residential building managed by Stellar Property Group"
                className="w-full rounded-2xl shadow-glass object-cover aspect-[4/3]"
                loading="lazy"
              />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-card flex items-center gap-5">
                <div className="text-center flex-1 border-r border-slate-100 pr-5">
                  <div className="text-2xl font-bold text-navy-900">96%</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Retention Rate</div>
                </div>
                <div className="text-center flex-1 border-r border-slate-100 pr-5">
                  <div className="text-2xl font-bold text-navy-900">50+</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Communities</div>
                </div>
                <div className="text-center flex-1">
                  <div className="text-2xl font-bold text-navy-900">18yr</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── About ──────────────────────────────────────────────── */}
      <section className="py-28 bg-navy-950 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gold-400 mb-3">Our Story</p>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Chicago's Trusted Property Partner Since 2007
              </h2>
              <p className="text-white/65 leading-relaxed mb-5 text-lg">
                Since 2007, Stellar Property Group has specialized exclusively in Chicago and North Shore property management — condominiums, HOAs, and townhomes only. That focus isn't a limitation; it's why we outperform generalist firms.
              </p>
              <p className="text-white/65 leading-relaxed mb-5">
                We've earned a 96% client retention rate by treating every community as our only one. Our team of certified professionals holds credentials from CAI, IREM, and CCIM, and we're fully licensed by IDFPR.
              </p>
              <p className="text-white/65 leading-relaxed mb-10">
                When your board is ready for a management partner that responds, reports, and delivers — we're ready to talk.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 text-sm"
                >
                  Learn More About Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-white/15 transition-all duration-200 text-sm"
                >
                  Request a Proposal
                </Link>
              </div>
            </div>

            <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-8">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-6">Service Areas</h3>
              <div className="grid grid-cols-2 gap-3">
                {serviceAreas.map((area) => (
                  <div key={area} className="flex items-center gap-2 text-white/75 text-sm">
                    <span className="w-1 h-1 rounded-full bg-gold-400 flex-shrink-0" />
                    {area}
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <Link to="/service-areas" className="text-gold-400 text-sm font-medium hover:text-gold-500 transition-colors inline-flex items-center gap-1">
                  View all 72 neighborhoods <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-3">
                {['CAI Certified', 'IREM Member', 'IDFPR Licensed', 'CCIM Designated'].map((c) => (
                  <span key={c} className="inline-block border border-white/20 text-white/60 text-xs font-medium px-3 py-1.5 rounded-full">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonial / Social Proof ─────────────────────────── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-navy-600 mb-3">Client Testimonials</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">
              What Board Members Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Stellar transformed our association. Financial reports are clear, vendors are reliable, and our board meetings actually run on time now.",
                name: "Board President",
                community: "Lincoln Park Condominium Association"
              },
              {
                quote: "After years with a national firm that barely knew our name, switching to Stellar was the best decision we made. They genuinely care about our community.",
                name: "Board Treasurer",
                community: "Lakeview Townhome HOA"
              },
              {
                quote: "The 24/7 emergency response alone is worth it. When our boiler failed at 2 AM in January, Stellar had a crew on-site within the hour.",
                name: "Property Owner",
                community: "Edgewater Condo Association"
              },
            ].map(({ quote, name, community }) => (
              <div key={community} className="bg-white rounded-2xl p-8 shadow-card border border-slate-100">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(s => (
                    <Star key={s} className="w-4 h-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed mb-6 italic">"{quote}"</p>
                <div>
                  <p className="text-sm font-semibold text-navy-900">{name}</p>
                  <p className="text-xs text-slate-500">{community}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog Preview ───────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-navy-600 mb-3">Resources</p>
              <h2 className="font-display text-4xl font-bold text-navy-900">Latest From Our Blog</h2>
            </div>
            <Link to="/blog" className="hidden md:inline-flex items-center gap-2 text-navy-700 font-semibold hover:text-navy-900 transition-colors text-sm">
              View All Posts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <Link
            to="/blog/condominium-property-management-chicago-what-board-members-should-expect"
            className="group block bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-card-hover transition-all duration-300"
          >
            <div className="p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-navy-600 bg-navy-50 px-3 py-1 rounded-full">Board Education</span>
                <span className="text-xs text-slate-400">8 min read</span>
              </div>
              <h3 className="font-display text-2xl lg:text-3xl font-bold text-navy-900 mb-3 group-hover:text-navy-700 transition-colors">
                Condominium Property Management in Chicago: What Board Members Should Expect
              </h3>
              <p className="text-slate-600 leading-relaxed max-w-3xl mb-4">
                A comprehensive guide for board members on what to expect from a professional property management company, covering financial oversight, maintenance coordination, governance support, and more.
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-navy-700 group-hover:text-navy-900 transition-colors">
                Read the full article <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>

          <div className="text-center mt-8 md:hidden">
            <Link to="/blog" className="inline-flex items-center gap-2 text-navy-700 font-semibold hover:text-navy-900 transition-colors text-sm">
              View All Posts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Contact CTA ────────────────────────────────────────── */}
      <section className="py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="bg-navy-950 rounded-3xl overflow-hidden">
            <div className="relative px-8 py-16 lg:px-16 lg:py-20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full -translate-y-1/2 translate-x-1/3" />

              <div className="grid lg:grid-cols-2 gap-12 items-center relative">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold-400 mb-3">Contact Us</p>
                  <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                    Ready to Talk?
                  </h2>
                  <p className="text-white/60 text-lg leading-relaxed mb-8">
                    Whether you're switching managers or starting fresh, we'll show you what professional management looks like. No pressure — just answers.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg text-sm"
                  >
                    Request a Proposal
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="grid gap-4">
                  {[
                    { icon: MapPin, title: 'Office', lines: ['5107 N Western Ave, Suite 1S', 'Chicago, Illinois 60625'] },
                    { icon: Phone, title: 'Phone', lines: ['773.728.0652'], href: 'tel:7737280652', sub: '24/7 Emergency Line' },
                    { icon: Building2, title: 'Email', lines: ['mirsad@stellarpropertygroup.com'], href: 'mailto:mirsad@stellarpropertygroup.com' },
                  ].map(({ icon: Icon, title, lines, href, sub }) => (
                    <div key={title} className="flex items-start gap-4 bg-white/[0.06] border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors duration-200">
                      <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-gold-400" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-1">{title}</p>
                        {lines.map((line) =>
                          href ? (
                            <a key={line} href={href} className="block text-sm text-white/80 hover:text-white transition-colors">{line}</a>
                          ) : (
                            <p key={line} className="text-sm text-white/80">{line}</p>
                          )
                        )}
                        {sub && <p className="text-xs text-white/35 mt-0.5">{sub}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
