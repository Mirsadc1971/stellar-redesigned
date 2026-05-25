import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Building2, ChevronDown, Menu, X, ExternalLink, Phone } from 'lucide-react';

const services = [
  { name: 'Condominium Management', href: '/services/condominium-management' },
  { name: 'HOA Management', href: '/services/hoa-management' },
  { name: 'Townhome Management', href: '/services/townhome-management' },
  { name: 'Financial Management', href: '/services/financial-management' },
  { name: 'Maintenance Coordination', href: '/services/maintenance-coordination' },
  { name: 'Board Support', href: '/services/board-support' },
  { name: 'Violation Management', href: '/services/violation-management' },
];

const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services', hasDropdown: true },
  { name: 'Service Areas', href: '/service-areas' },
  { name: 'Resources', href: '/resources' },
  { name: 'Contact', href: '/contact' },
];

const PORTAL_URL = 'https://stellarpropertygroup.appfolio.com/connect/';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'border-b border-ink-100 bg-white/90 shadow-soft backdrop-blur-lg'
          : 'border-b border-transparent bg-white/70 backdrop-blur-md'
      }`}
    >
      <div className="container-x">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link to="/" className="group flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 shadow-lift transition-transform duration-300 group-hover:scale-105">
              <Building2 className="h-6 w-6 text-white" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-extrabold tracking-tight text-ink-900">
                Stellar Property Group
              </span>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-600">
                Chicago Property Management
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    to={link.href}
                    className={`flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors duration-200 ${
                      isActive(link.href)
                        ? 'bg-brand-50 text-brand-700'
                        : 'text-ink-600 hover:bg-ink-50 hover:text-ink-900'
                    }`}
                  >
                    {link.name}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        servicesOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </Link>

                  <div
                    className={`absolute left-1/2 top-full -translate-x-1/2 pt-3 transition-all duration-200 ${
                      servicesOpen
                        ? 'visible translate-y-0 opacity-100'
                        : 'invisible -translate-y-2 opacity-0'
                    }`}
                  >
                    <div className="w-80 rounded-2xl border border-ink-100 bg-white p-2 shadow-card-hover">
                      <Link
                        to="/services"
                        className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-brand-700 hover:bg-brand-50"
                      >
                        All Services Overview
                      </Link>
                      <div className="my-1 h-px bg-ink-100" />
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          to={service.href}
                          className={`block rounded-xl px-4 py-2.5 text-sm transition-colors duration-150 ${
                            isActive(service.href)
                              ? 'bg-brand-50 font-semibold text-brand-700'
                              : 'text-ink-600 hover:bg-ink-50 hover:text-ink-900'
                          }`}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors duration-200 ${
                    isActive(link.href)
                      ? 'bg-brand-50 text-brand-700'
                      : 'text-ink-600 hover:bg-ink-50 hover:text-ink-900'
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          <a
            href={PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-xl border border-ink-200 px-5 py-2.5 text-sm font-semibold text-ink-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700 hover:shadow-soft lg:inline-flex"
          >
            Make a Payment
            <ExternalLink className="h-3.5 w-3.5" />
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-ink-700 transition-colors hover:bg-ink-50 lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          mobileOpen ? 'max-h-[85vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="space-y-1 border-t border-ink-100 bg-white px-5 py-5">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.name}>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-colors duration-200 ${
                    isActive(link.href)
                      ? 'bg-brand-50 text-brand-700'
                      : 'text-ink-700 hover:bg-ink-50'
                  }`}
                >
                  {link.name}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      mobileServicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    mobileServicesOpen ? 'max-h-[30rem] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="space-y-0.5 py-1 pl-3">
                    <Link
                      to="/services"
                      className="block rounded-lg px-4 py-2 text-sm font-semibold text-brand-700 hover:bg-brand-50"
                    >
                      All Services
                    </Link>
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        to={service.href}
                        className={`block rounded-lg px-4 py-2 text-sm transition-colors duration-150 ${
                          isActive(service.href)
                            ? 'bg-brand-50 font-semibold text-brand-700'
                            : 'text-ink-500 hover:bg-ink-50 hover:text-ink-900'
                        }`}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className={`block rounded-xl px-4 py-3 text-sm font-semibold transition-colors duration-200 ${
                  isActive(link.href)
                    ? 'bg-brand-50 text-brand-700'
                    : 'text-ink-700 hover:bg-ink-50'
                }`}
              >
                {link.name}
              </Link>
            )
          )}

          <div className="flex gap-2.5 pt-3">
            <a
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-ink-200 px-4 py-3 text-sm font-semibold text-ink-700 transition-colors hover:border-brand-300 hover:text-brand-700"
            >
              Make a Payment
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <a
              href="tel:7737280652"
              className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-ink-200 px-4 py-3 text-sm font-semibold text-ink-700 transition-colors hover:border-brand-300 hover:text-brand-700"
            >
              <Phone className="h-3.5 w-3.5" />
              Call Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
