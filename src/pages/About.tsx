import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight, Shield, Eye, Zap, Award, Building2, Users,
  TrendingUp, Clock, CheckCircle, ChevronRight, MapPin
} from 'lucide-react';

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
    desc: 'Industry-leading credentials, continuous education, and a relentless focus on raising the standard of property management.',
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

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative py-28 lg:py-36 bg-navy-950 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full -translate-y-1/2 translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 text-white/80 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
            Serving Chicago Since 2007
          </div>
          <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08] mb-6">
            About Stellar Property Group
          </h1>
          <p className="text-lg lg:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto">
            A locally owned, professionally credentialed property management firm dedicated exclusively to Chicago condominiums, HOAs, and townhome communities.
          </p>
        </div>
      </section>

      {/* ── Company Story ──────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-navy-600 mb-3">Our Story</p>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-900 leading-tight mb-6">
                From a Small Firm to 42 Associations
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-5">
                Stellar Property Group was founded in 2007 with a clear mission: deliver property management that Chicago condo boards, HOAs, and townhome associations actually deserve. At the time, most firms treated community management as a side business. We made it our only business.
              </p>
              <p className="text-slate-600 leading-relaxed mb-5">
                Starting with a handful of Chicago North Side associations, we grew through referrals and results — not marketing gimmicks. Today, we manage 42 associations and 2,450 units across Chicago and the North Shore, with a 96% client retention rate that speaks louder than any advertisement.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Our growth has always been intentional. We only take on communities we can serve exceptionally, assigning a dedicated manager who knows every building, every board member, and every vendor by name. That personal approach is what sets us apart from national firms that treat your community as a line item.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 bg-navy-800 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-navy-900 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 text-sm"
                >
                  Our Services <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-navy-200 text-navy-700 font-semibold px-7 py-3.5 rounded-lg hover:bg-navy-50 transition-all duration-200 text-sm"
                >
                  Get in Touch
                </Link>
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
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Values ───────────────────────────────────── */}
      <section className="py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-navy-600 mb-3">Our Values</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-900 leading-tight mb-4">
              What Drives Us Every Day
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              These aren't posters on a wall. They're the principles that guide every decision we make for the communities we serve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-slate-100 group"
              >
                <div className="w-11 h-11 rounded-xl bg-navy-50 flex items-center justify-center mb-5 group-hover:bg-navy-800 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-navy-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-base font-semibold text-navy-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Bar ──────────────────────────────────────────── */}
      <section className="py-16 bg-navy-950">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ value, label, sub }) => (
              <div
                key={label}
                className="text-center bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="text-4xl lg:text-5xl font-bold text-white mb-1">{value}</div>
                <div className="text-sm font-semibold text-white/80">{label}</div>
                <div className="text-xs text-white/45 mt-0.5">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Credentials ────────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-navy-600 mb-3">Credentials</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-900 leading-tight mb-4">
              Industry-Leading Certifications
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our team holds the most respected credentials in property management — proof of our commitment to professional excellence and continuing education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {credentials.map(({ abbr, name, desc }) => (
              <div
                key={abbr}
                className="flex items-start gap-5 bg-slate-50 rounded-2xl p-7 border border-slate-100 hover:shadow-card transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-navy-800 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-gold-400 tracking-wide">{abbr}</span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-navy-900 mb-1">{name}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Areas ──────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-card border border-slate-100">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-navy-50 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-navy-700" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-navy-600">Where We Serve</p>
                </div>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy-900 leading-tight mb-4">
                  Chicago &amp; the North Shore
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  From Lincoln Park to Lake Forest, we manage communities across Chicago's most desirable neighborhoods and North Shore suburbs. Our local expertise means we know every alderman, every building department, and every reliable contractor in your area.
                </p>
                <Link
                  to="/service-areas"
                  className="inline-flex items-center gap-2 text-navy-700 font-semibold hover:text-navy-900 transition-colors text-sm"
                >
                  View All Service Areas <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  'Chicago', 'Evanston', 'Skokie', 'Glenview', 'Wilmette', 'Winnetka',
                  'Highland Park', 'Northbrook', 'Glencoe', 'Kenilworth', 'Lake Forest', 'Deerfield',
                ].map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-2 bg-slate-50 rounded-lg px-3 py-2.5 text-sm text-navy-700 font-medium"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold-500 flex-shrink-0" />
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="bg-navy-950 rounded-3xl overflow-hidden">
            <div className="relative px-8 py-16 lg:px-16 lg:py-20 text-center">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full -translate-y-1/2 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold-500/5 rounded-full translate-y-1/2 -translate-x-1/3" />

              <div className="relative max-w-2xl mx-auto">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold-400 mb-3">Let's Talk</p>
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                  Ready to Experience the Stellar Difference?
                </h2>
                <p className="text-white/60 text-lg leading-relaxed mb-10">
                  Whether you're considering a management change or exploring options for the first time, we'd love to learn about your community and show you what professional, hands-on management looks like.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg text-sm"
                  >
                    Request a Proposal <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-white/15 transition-all duration-200 text-sm"
                  >
                    Explore Our Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
