import { Link } from 'react-router-dom';
import { Building2, MapPin, Phone, Mail, Award } from 'lucide-react';

const serviceLinks = [
  { name: 'Condominium Management', href: '/services/condominium-management' },
  { name: 'HOA Management', href: '/services/hoa-management' },
  { name: 'Townhome Management', href: '/services/townhome-management' },
  { name: 'Financial Management', href: '/services/financial-management' },
  { name: 'Maintenance Coordination', href: '/services/maintenance-coordination' },
  { name: 'Board Support', href: '/services/board-support' },
  { name: 'Violation Management', href: '/services/violation-management' },
];

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Service Areas', href: '/service-areas' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
  { name: 'Resources', href: '/resources' },
];

const legalLinks = [
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms of Service', href: '#' },
  { name: 'Sitemap', href: '#' },
];

const credentials = [
  { label: 'CAI Certified', icon: Award },
  { label: 'IREM Member', icon: Award },
  { label: 'IDFPR Licensed', icon: Award },
  { label: 'CCIM Designated', icon: Award },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="p-2 bg-navy-700 rounded-xl">
                <Building2 className="w-6 h-6 text-gold-400" />
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight text-white">
                  Stellar Property Group
                </span>
                <span className="block text-xs font-medium tracking-widest uppercase text-navy-300">
                  Chicago
                </span>
              </div>
            </Link>
            <p className="text-navy-300 text-sm leading-relaxed mb-6">
              Chicago's premier property management company delivering exceptional
              condominium, HOA, and townhome management services with transparency,
              professionalism, and community-focused care.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-navy-300">
                <MapPin className="w-4 h-4 mt-0.5 text-gold-400 shrink-0" />
                <span>5107 N Western Ave, Suite 1S, Chicago, IL 60625</span>
              </div>
              <a
                href="tel:+17737280652"
                className="flex items-center gap-3 text-sm text-navy-300 hover:text-gold-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                773.728.0652
              </a>
              <a
                href="mailto:mirsad@stellarpropertygroup.com"
                className="flex items-center gap-3 text-sm text-navy-300 hover:text-gold-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                mirsad@stellarpropertygroup.com
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-navy-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-navy-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-5">
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-navy-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Credentials Bar */}
      <div className="border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {credentials.map((cred) => (
              <div
                key={cred.label}
                className="flex items-center gap-2 text-navy-400"
              >
                <cred.icon className="w-4 h-4 text-gold-500" />
                <span className="text-xs font-medium tracking-wide uppercase">
                  {cred.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-center text-xs text-navy-500">
            &copy; 2024 Stellar Property Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
