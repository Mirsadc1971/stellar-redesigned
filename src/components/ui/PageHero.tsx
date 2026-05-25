import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import type { ReactNode } from 'react';

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  breadcrumb?: Crumb[];
  align?: 'left' | 'center';
  children?: ReactNode;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  align = 'center',
  children,
}: PageHeroProps) {
  const centered = align === 'center';

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white pt-32 pb-16 lg:pt-40 lg:pb-24">
      {/* Decorative soft shapes */}
      <div className="pointer-events-none absolute -top-24 right-[-6rem] h-[26rem] w-[26rem] rounded-full bg-brand-200/35 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-[-8rem] h-[22rem] w-[22rem] rounded-full bg-brand-100/50 blur-3xl" />

      <div className="container-x relative">
        <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
          {breadcrumb && breadcrumb.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol
                className={`flex flex-wrap items-center gap-1.5 text-sm text-ink-400 ${
                  centered ? 'justify-center' : ''
                }`}
              >
                {breadcrumb.map((crumb, i) => (
                  <li key={crumb.label} className="flex items-center gap-1.5">
                    {crumb.href ? (
                      <Link
                        to={crumb.href}
                        className="font-medium text-ink-500 transition-colors hover:text-brand-600"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="font-medium text-ink-700">{crumb.label}</span>
                    )}
                    {i < breadcrumb.length - 1 && (
                      <ChevronRight className="h-3.5 w-3.5 text-ink-300" />
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {eyebrow && (
            <div
              className={`mb-5 flex ${centered ? 'justify-center' : ''} animate-fade-up`}
            >
              <span className="eyebrow rounded-full border border-brand-100 bg-white px-4 py-2 shadow-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                {eyebrow}
              </span>
            </div>
          )}

          <h1 className="animate-fade-up font-display text-4xl font-extrabold leading-[1.1] text-ink-900 text-balance sm:text-5xl lg:text-[3.5rem]">
            {title}
          </h1>

          {description && (
            <p
              className={`animate-fade-up delay-100 mt-6 text-lg leading-relaxed text-ink-500 text-pretty ${
                centered ? 'mx-auto max-w-2xl' : 'max-w-2xl'
              }`}
            >
              {description}
            </p>
          )}

          {children && (
            <div
              className={`animate-fade-up delay-200 mt-9 flex flex-wrap gap-4 ${
                centered ? 'justify-center' : ''
              }`}
            >
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
