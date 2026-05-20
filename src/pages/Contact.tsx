import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  MapPin, Phone, Mail, Clock, ArrowRight, Building2,
  AlertTriangle, ExternalLink, ChevronRight
} from 'lucide-react';
import { ContactForm } from '../components/ContactForm';

const contactCards = [
  {
    icon: MapPin,
    title: 'Office Address',
    lines: ['5107 N Western Ave, Suite 1S', 'Chicago, Illinois 60625'],
    href: 'https://maps.google.com/?q=5107+N+Western+Ave+Suite+1S+Chicago+IL+60625',
    linkLabel: 'Get Directions',
  },
  {
    icon: Phone,
    title: 'Phone',
    lines: ['773.728.0652'],
    href: 'tel:7737280652',
    linkLabel: 'Call Us',
    sub: 'Mon-Fri 9am-5pm CT',
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['mirsad@stellarpropertygroup.com'],
    href: 'mailto:mirsad@stellarpropertygroup.com',
    linkLabel: 'Send Email',
    sub: 'We respond within 24 hours',
  },
  {
    icon: Clock,
    title: 'Office Hours',
    lines: ['Monday - Friday: 9:00 AM - 5:00 PM', 'Saturday - Sunday: Closed'],
    sub: '24/7 Emergency Line Available',
  },
];

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Stellar Property Group | Get a Free Property Management Quote</title>
        <meta
          name="description"
          content="Contact Stellar Property Group for a free property management quote. Located at 5107 N Western Ave, Suite 1S, Chicago, IL 60625. Call 773.728.0652 or email mirsad@stellarpropertygroup.com."
        />
        <link rel="canonical" href="https://stellarpropertygroup.com/contact" />
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
            Get in Touch
          </div>
          <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08] mb-6">
            Contact Us
          </h1>
          <p className="text-lg lg:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto">
            Ready to discuss your property management needs? We'd love to hear from you. Reach out for a free, no-obligation quote.
          </p>
        </div>
      </section>

      {/* ── Contact Form + Info ────────────────────────────────── */}
      <section className="py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left: Contact Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Right: Contact Info Cards */}
            <div className="lg:col-span-2 space-y-5">
              {contactCards.map(({ icon: Icon, title, lines, href, linkLabel, sub }) => (
                <div
                  key={title}
                  className="bg-white rounded-2xl p-6 shadow-card border border-slate-100 hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-navy-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-navy-700" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1.5">{title}</p>
                      {lines.map((line) =>
                        href ? (
                          <a
                            key={line}
                            href={href}
                            target={href.startsWith('http') ? '_blank' : undefined}
                            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="block text-sm text-navy-800 font-medium hover:text-navy-600 transition-colors"
                          >
                            {line}
                          </a>
                        ) : (
                          <p key={line} className="text-sm text-navy-800 font-medium">{line}</p>
                        )
                      )}
                      {sub && <p className="text-xs text-slate-400 mt-1">{sub}</p>}
                      {href && linkLabel && (
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-navy-600 hover:text-navy-800 mt-2 transition-colors"
                        >
                          {linkLabel} <ChevronRight className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Existing Client Portal */}
              <div className="bg-navy-950 rounded-2xl p-6 shadow-glass">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-1.5">Existing Clients</p>
                    <p className="text-sm text-white/80 font-medium mb-2">
                      Access your owner/resident portal to make payments, submit requests, and view documents.
                    </p>
                    <a
                      href="https://stellarpropertygroup.appfolio.com/connect/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold px-4 py-2 rounded-lg transition-all duration-200 text-xs"
                    >
                      AppFolio Portal <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Emergency Contact ──────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="bg-red-50 border border-red-100 rounded-2xl p-8 lg:p-10">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-14 h-14 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-7 h-7 text-red-600" />
              </div>
              <div className="flex-1">
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-navy-900 mb-3">
                  Emergency After Hours?
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  For urgent issues like flooding, fire damage, elevator entrapment, or building system failures, our emergency line is available 24/7. A real person will answer and dispatch the appropriate response.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="tel:7737280652"
                    className="inline-flex items-center gap-2 bg-red-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-700 transition-all duration-200 text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    Call 773.728.0652
                  </a>
                  <p className="flex items-center text-sm text-slate-500">
                    Available 24 hours a day, 7 days a week
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map Area ───────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-navy-600 mb-3">Our Location</p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy-900">
              Visit Our Office
            </h2>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-card border border-slate-100">
            <iframe
              title="Stellar Property Group Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.5!2d-87.6935!3d41.9745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd1e8c10fb5e5%3A0x0!2s5107+N+Western+Ave%2C+Chicago%2C+IL+60625!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* ── Quick Links ────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              to="/services"
              className="group bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold text-navy-900 mb-2 group-hover:text-navy-700 transition-colors">
                Explore Our Services
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                Learn about our full range of property management solutions for condominiums, HOAs, and townhome communities.
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-navy-600 group-hover:text-navy-800 transition-colors">
                View Services <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link
              to="/about"
              className="group bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold text-navy-900 mb-2 group-hover:text-navy-700 transition-colors">
                About Stellar Property Group
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                Discover our story, values, and the credentials that make us Chicago's trusted property management partner since 2007.
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-navy-600 group-hover:text-navy-800 transition-colors">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
