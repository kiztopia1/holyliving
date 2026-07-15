import { Link } from 'react-router-dom';
import { Phone, Calendar, ChevronRight, ArrowLeft } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';
import SeoHead from './SeoHead';
import { BreadcrumbJsonLd } from './JsonLd';
import {
  SITE_ADDRESS,
  SITE_PHONE,
  SITE_PHONE_TEL,
  type SeoPageContent,
} from '../lib/seo';

export default function SeoServicePage({ page }: { page: SeoPageContent }) {
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: page.h1, path: page.seo.path },
  ];

  return (
    <div className="min-h-screen bg-off-white">
      <SeoHead seo={page.seo} />
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <Navigation />

      <article className="pt-16 md:pt-20">
        <div className="bg-gradient-to-b from-white via-off-white to-off-white">
          <div className="max-w-3xl mx-auto px-4 py-10 md:py-14">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-1 text-xs text-warm-gray">
                <li>
                  <Link to="/" className="hover:text-charcoal transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="w-3.5 h-3.5" />
                </li>
                <li className="text-charcoal font-medium" aria-current="page">
                  {page.h1}
                </li>
              </ol>
            </nav>

            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-sm text-warm-gray hover:text-charcoal transition mb-4"
            >
              <ArrowLeft size={16} />
              Back to home
            </Link>

            <h1 className="text-3xl md:text-4xl text-charcoal font-bold leading-tight">
              {page.h1}
            </h1>
            <p className="mt-4 text-base md:text-lg text-warm-gray leading-relaxed">
              {page.intro}
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${SITE_PHONE_TEL}`}
                className="inline-flex items-center justify-center gap-2 rounded-full h-11 px-6 text-sm font-semibold bg-primary text-charcoal hover:bg-secondary transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call {SITE_PHONE}
              </a>
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full h-11 px-6 text-sm font-semibold border border-charcoal/20 text-charcoal hover:bg-white transition-colors"
              >
                <Calendar className="w-4 h-4" />
                Schedule a Tour
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 py-10 md:py-14 space-y-10">
          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl md:text-3xl text-charcoal font-bold">
                {section.heading}
              </h2>
              <p className="mt-3 text-warm-gray leading-relaxed">{section.body}</p>
            </section>
          ))}

          <section className="rounded-xl bg-charcoal px-6 py-8 md:px-8 text-center">
            <h2 className="text-2xl md:text-3xl text-white font-bold">
              Schedule a visit in Shoreline
            </h2>
            <p className="mt-3 text-off-white/85 text-sm md:text-base max-w-xl mx-auto">
              See the home, meet our caregivers, and ask every question you have. We are at{' '}
              {SITE_ADDRESS.street}, {SITE_ADDRESS.city}, {SITE_ADDRESS.region}{' '}
              {SITE_ADDRESS.postal}.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${SITE_PHONE_TEL}`}
                className="inline-flex items-center justify-center rounded-full h-11 px-6 text-sm font-semibold bg-primary text-charcoal hover:bg-secondary transition-colors"
              >
                Call {SITE_PHONE}
              </a>
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center rounded-full h-11 px-6 text-sm font-semibold bg-white text-charcoal hover:bg-off-white transition-colors"
              >
                Book a Tour
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl text-charcoal font-bold">
              Related care pages
            </h2>
            <ul className="mt-4 flex flex-col gap-2">
              {page.related.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-charcoal/80 hover:text-charcoal transition-colors text-sm md:text-base underline-offset-2 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/"
                  className="text-charcoal/80 hover:text-charcoal transition-colors text-sm md:text-base underline-offset-2 hover:underline"
                >
                  Back to Holy Living home
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </article>

      <Footer />
    </div>
  );
}
