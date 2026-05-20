import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryLink?: string;
  primaryText?: string;
  secondaryText?: string;
}

export function CTASection({
  title = 'Ready to Elevate Your Community Management?',
  description = 'Join 42 Chicago-area communities that trust Stellar Property Group. Contact us today for a free consultation and discover why we maintain a 96% client retention rate.',
  primaryLink = '/contact',
  primaryText = 'Get a Free Consultation',
  secondaryText = '773.728.0652',
}: CTASectionProps) {
  return (
    <section className="bg-navy-800 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
          {title}
        </h2>
        <p className="text-lg text-navy-200 mb-10 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={primaryLink}
            className="inline-flex items-center bg-gold-500 text-navy-900 px-8 py-4 rounded-lg font-semibold hover:bg-gold-400 transition-colors"
          >
            {primaryText}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
          <a
            href={`tel:${secondaryText.replace(/\./g, '')}`}
            className="inline-flex items-center text-white border border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
          >
            <Phone className="w-5 h-5 mr-2" />
            {secondaryText}
          </a>
        </div>
      </div>
    </section>
  );
}
