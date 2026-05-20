import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Building2, ChevronDown, Menu, X, ExternalLink } from 'lucide-react';

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
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services', hasDropdown: true },
  { name: 'Service Areas', href: '/service-areas' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-white/95 backdrop-blur-md shadow-card'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div
              className={`p-2 rounded-xl transition-colors duration-300 ${
                scrolled ? 'bg-navy-700' : 'bg-white/10 backdrop-blur-sm'
              }`}
            >
              <Building2
                className={`w-6 h-6 transition-colors duration-300 ${
                  scrolled ? 'text-gold-400' : 'text-gold-400'
                }`}
              />
            </div>
            <div>
              <span
                className={`text-lg font-bold tracking-tight transition-colors duration-300 ${
                  scrolled ? 'text-navy-800' : 'text-white'
                }`}
              >
                Stellar Property Group
              </span>
              <span
                className={`block text-xs font-medium tracking-widest uppercase transition-colors duration-300 ${
                  scrolled ? 'text-navy-400' : 'text-white/70'
                }`}
              >
                Chicago
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
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
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      isActive(link.href)
                        ? scrolled
                          ? 'text-navy-800 bg-navy-50'
                          : 'text-white bg-white/15'
                        : scrolled
                        ? 'text-navy-600 hover:text-navy-800 hover:bg-navy-50'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        servicesOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </Link>

                  {/* Dropdown */}
                  <div
                    className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                      servicesOpen
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2'
                    }`}
                  >
                    <div className="bg-white rounded-xl shadow-glass border border-navy-100 py-2 w-72">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          to={service.href}
                          className={`block px-4 py-2.5 text-sm transition-colors duration-150 ${
                            isActive(service.href)
                              ? 'text-navy-800 bg-navy-50 font-medium'
                              : 'text-navy-600 hover:text-navy-800 hover:bg-navy-50'
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
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isActive(link.href)
                      ? scrolled
                        ? 'text-navy-800 bg-navy-50'
                        : 'text-white bg-white/15'
                      : scrolled
                      ? 'text-navy-600 hover:text-navy-800 hover:bg-navy-50'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}

            {/* CTA */}
            <a
              href="https://stellarpropertygroup.appfolio.com/connect/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 inline-flex items-center gap-2 px-5 py-2.5 bg-gold-500 hover:bg-gold-600 text-navy-900 text-sm font-semibold rounded-lg transition-all duration-200 hover:shadow-lg"
            >
              Make a Payment
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
              scrolled || mobileOpen
                ? 'text-navy-700 hover:bg-navy-50'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-navy-100 px-4 py-4 space-y-1">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.name}>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isActive(link.href)
                      ? 'text-navy-800 bg-navy-50'
                      : 'text-navy-600 hover:text-navy-800 hover:bg-navy-50'
                  }`}
                >
                  {link.name}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileServicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    mobileServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pl-4 py-1 space-y-0.5">
                    <Link
                      to="/services"
                      className="block px-4 py-2 text-sm text-navy-500 hover:text-navy-800 hover:bg-navy-50 rounded-lg"
                    >
                      All Services
                    </Link>
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        to={service.href}
                        className={`block px-4 py-2 text-sm rounded-lg transition-colors duration-150 ${
                          isActive(service.href)
                            ? 'text-navy-800 bg-navy-50 font-medium'
                            : 'text-navy-500 hover:text-navy-800 hover:bg-navy-50'
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
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  isActive(link.href)
                    ? 'text-navy-800 bg-navy-50'
                    : 'text-navy-600 hover:text-navy-800 hover:bg-navy-50'
                }`}
              >
                {link.name}
              </Link>
            )
          )}

          <div className="pt-2">
            <a
              href="https://stellarpropertygroup.appfolio.com/connect/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-gold-500 hover:bg-gold-600 text-navy-900 text-sm font-semibold rounded-lg transition-all duration-200"
            >
              Make a Payment
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
