import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  CreditCard, AlertTriangle, Users, MessageSquare, ArrowRight,
  ExternalLink, ChevronDown, ChevronUp, HelpCircle
} from 'lucide-react';
import { ViolationReportForm } from '../components/ViolationReportForm';
import { BoardNominationForm } from '../components/BoardNominationForm';

type ActiveTab = 'violation' | 'nomination' | null;

const faqs = [
  {
    q: 'How do I make a payment?',
    a: 'Log in to the AppFolio resident portal to make one-time or recurring payments via bank transfer or credit card. If you need portal access, contact our office at 773.728.0652 or email mirsad@stellarpropertygroup.com.',
  },
  {
    q: 'How do I submit a maintenance request?',
    a: 'Maintenance requests can be submitted through the AppFolio portal under "Maintenance Requests." For after-hours emergencies (flooding, fire, elevator issues), call 773.728.0652 directly.',
  },
  {
    q: 'Where can I find my association\'s governing documents?',
    a: 'Governing documents including bylaws, declarations, and rules are available in the document section of your AppFolio portal. Contact your property manager if you need assistance locating specific documents.',
  },
  {
    q: 'How do I get access to the resident portal?',
    a: 'New residents receive portal invitations during onboarding. If you haven\'t received yours or need a new invitation, contact our office and we\'ll send one to your registered email address within one business day.',
  },
  {
    q: 'When are board meetings held?',
    a: 'Board meeting schedules vary by community. Check your AppFolio portal for upcoming meeting dates and agendas, or contact your dedicated property manager for the schedule.',
  },
  {
    q: 'How do I report an emergency?',
    a: 'For life-threatening emergencies, call 911 first. For building emergencies (flooding, fire damage, elevator entrapment), call our 24/7 emergency line at 773.728.0652. A real person will answer and dispatch help.',
  },
];

const quickLinks = [
  {
    icon: CreditCard,
    title: 'Make a Payment',
    desc: 'Pay assessments, dues, or fees through the secure AppFolio portal.',
    action: 'portal' as const,
  },
  {
    icon: AlertTriangle,
    title: 'Report a Violation',
    desc: 'Submit a formal violation report for your community.',
    action: 'violation' as const,
  },
  {
    icon: Users,
    title: 'Board Nomination',
    desc: 'Apply to serve on your condominium or HOA board.',
    action: 'nomination' as const,
  },
  {
    icon: MessageSquare,
    title: 'Contact Management',
    desc: 'Reach out to our team with questions or requests.',
    action: 'contact' as const,
  },
];

export default function Resources() {
  const [activeTab, setActiveTab] = useState<ActiveTab>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleQuickLink = (action: string) => {
    if (action === 'violation') {
      setActiveTab('violation');
      setTimeout(() => {
        document.getElementById('forms-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (action === 'nomination') {
      setActiveTab('nomination');
      setTimeout(() => {
        document.getElementById('forms-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <>
      <Helmet>
        <title>Owner & Resident Resources | Stellar Property Group</title>
        <meta
          name="description"
          content="Access owner and resident resources from Stellar Property Group. Make payments, report violations, submit board nominations, and find answers to common questions."
        />
        <link rel="canonical" href="https://stellarpropertygroup.com/resources" />
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
            Owner &amp; Resident Portal
          </div>
          <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08] mb-6">
            Owner &amp; Resident Resources
          </h1>
          <p className="text-lg lg:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto">
            Everything you need to manage your account, submit forms, and stay connected with your community — all in one place.
          </p>
        </div>
      </section>

      {/* ── Quick Links ────────────────────────────────────────── */}
      <section className="py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-navy-600 mb-3">Quick Links</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-900 leading-tight mb-4">
              What Can We Help You With?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Select an option below to get started.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map(({ icon: Icon, title, desc, action }) => {
              if (action === 'portal') {
                return (
                  <a
                    key={title}
                    href="https://stellarpropertygroup.appfolio.com/connect/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-slate-100"
                  >
                    <div className="w-11 h-11 rounded-xl bg-navy-50 flex items-center justify-center mb-5 group-hover:bg-navy-800 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-navy-700 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-base font-semibold text-navy-900 mb-2">{title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">{desc}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-navy-600 group-hover:text-navy-800 transition-colors">
                      Open Portal <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </a>
                );
              }

              if (action === 'contact') {
                return (
                  <Link
                    key={title}
                    to="/contact"
                    className="group bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-slate-100"
                  >
                    <div className="w-11 h-11 rounded-xl bg-navy-50 flex items-center justify-center mb-5 group-hover:bg-navy-800 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-navy-700 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-base font-semibold text-navy-900 mb-2">{title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">{desc}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-navy-600 group-hover:text-navy-800 transition-colors">
                      Contact Us <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                );
              }

              return (
                <button
                  key={title}
                  onClick={() => handleQuickLink(action)}
                  className="group bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-slate-100 text-left"
                >
                  <div className="w-11 h-11 rounded-xl bg-navy-50 flex items-center justify-center mb-5 group-hover:bg-navy-800 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-navy-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-base font-semibold text-navy-900 mb-2">{title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">{desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-navy-600 group-hover:text-navy-800 transition-colors">
                    Open Form <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Tab Forms Section ──────────────────────────────────── */}
      <section id="forms-section" className="py-28 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-navy-600 mb-3">Online Forms</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-900 leading-tight mb-4">
              Submit a Form
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
              Select a form below to get started. All submissions are sent directly to our management team.
            </p>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <button
              onClick={() => setActiveTab(activeTab === 'violation' ? null : 'violation')}
              className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm transition-all duration-200 ${
                activeTab === 'violation'
                  ? 'bg-navy-800 text-white shadow-lg'
                  : 'bg-slate-100 text-navy-700 hover:bg-slate-200'
              }`}
            >
              <AlertTriangle className="w-4 h-4" />
              Violation Report
            </button>
            <button
              onClick={() => setActiveTab(activeTab === 'nomination' ? null : 'nomination')}
              className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm transition-all duration-200 ${
                activeTab === 'nomination'
                  ? 'bg-navy-800 text-white shadow-lg'
                  : 'bg-slate-100 text-navy-700 hover:bg-slate-200'
              }`}
            >
              <Users className="w-4 h-4" />
              Board Nomination
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'violation' && <ViolationReportForm />}
          {activeTab === 'nomination' && <BoardNominationForm />}

          {!activeTab && (
            <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-7 h-7 text-slate-400" />
              </div>
              <p className="text-slate-500 text-sm">
                Select a form above to get started, or use the quick links to access the owner portal.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── FAQ Section ────────────────────────────────────────── */}
      <section className="py-28 bg-slate-50">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-navy-600 mb-3">FAQ</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-900 leading-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Answers to common owner and resident questions.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map(({ q, a }, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-100 shadow-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold text-navy-900">{q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5">
                    <p className="text-sm text-slate-600 leading-relaxed">{a}</p>
                  </div>
                )}
              </div>
            ))}
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
                <p className="text-xs font-semibold uppercase tracking-widest text-gold-400 mb-3">Need Help?</p>
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                  Can't Find What You Need?
                </h2>
                <p className="text-white/60 text-lg leading-relaxed mb-10">
                  Our management team is here to help. Reach out and we'll get you the answers or resources you need.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg text-sm"
                  >
                    Contact Us <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="tel:7737280652"
                    className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-white/15 transition-all duration-200 text-sm"
                  >
                    Call 773.728.0652
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
