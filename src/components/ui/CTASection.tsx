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
  title = 'Ready to elevate your community management?',
  description = 'Join 42 Chicago-area associations that trust Stellar Property Group. Reach out for a free consultation and see why boards stay with us year after year.',
  primaryLink = '/contact',
  primaryText = 'Get a Free Consultation',
  secondaryText = '773.728.0652',
}: CTASectionProps) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 px-7 py-14 sm:px-12 lg:px-16 lg:py-20">
          <div className="absolute inset-0 bg-grid-light opacity-70" />
          <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl" />

          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-extrabold leading-tight text-white text-balance sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-brand-100 text-pretty">
              {description}
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to={primaryLink} className="btn-white btn-lg w-full sm:w-auto">
                {primaryText}
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href={`tel:${secondaryText.replace(/\./g, '')}`}
                className="btn btn-lg w-full border border-white/25 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 sm:w-auto"
              >
                <Phone className="h-5 w-5" />
                {secondaryText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
