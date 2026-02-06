import { useState } from 'react';
import { Link } from 'react-router-dom';

const leftLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#care', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
];

const rightLinks = [
  { href: '/review', label: 'Testimonials', isRoute: true },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact Us' },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm py-3 px-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr] md:gap-4 md:items-center">
        {/* Left: Home, About Us, Services, Gallery (right-aligned toward logo) */}
        <div className="hidden md:flex items-center justify-end gap-8 text-sm font-medium text-charcoal">
          {leftLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-charcoal hover:text-primary transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Center: Logo (column only as wide as the image); left-aligned on mobile */}
        <div className="flex justify-start md:justify-center w-fit">
          <a href="#home" className="flex items-center focus:outline-none shrink-0">
            <img
              src="/logo.jpg"
              alt="Holy Living Adult Family Home"
              className="h-16 w-auto object-contain md:h-20 block mx-0 md:mx-16"
            />
          </a>
        </div>

        {/* Right: Testimonials, Team, Contact Us (left-aligned toward logo) + Schedule A Tour button */}
        <div className="hidden md:flex items-center justify-start gap-8 text-sm font-medium">
          {rightLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.href}
                to={link.href}
                className="text-charcoal hover:text-primary transition"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-charcoal hover:text-primary transition"
              >
                {link.label}
              </a>
            )
          )}
          <a
            href="#contact"
            className="bg-amber-50 text-charcoal px-6 py-2.5 rounded-lg font-medium text-sm border border-amber-200/60 hover:bg-amber-100/80 transition shrink-0"
          >
            Schedule A Tour
          </a>
        </div>

        <button
          type="button"
          className="md:hidden flex items-center justify-center rounded-md border border-charcoal/20 p-2 text-charcoal hover:bg-charcoal/5 focus:outline-none"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Open navigation</span>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-3 border-t border-charcoal/10 pt-3 space-y-3">
          <div className="flex flex-col gap-3 text-base">
            {leftLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-charcoal hover:text-primary font-medium transition"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            {rightLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-charcoal hover:text-primary font-medium transition"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-charcoal hover:text-primary font-medium transition"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              )
            )}
            <a href="tel:206-412-5640" className="text-charcoal hover:text-primary font-medium transition">
              Call Now: (206) 412-5640
            </a>
          </div>
          <a
            href="#contact"
            className="block w-full text-center bg-amber-50 text-charcoal px-6 py-3 rounded-lg font-semibold text-sm border border-amber-200/60 hover:bg-amber-100/80 transition"
            onClick={() => setOpen(false)}
          >
            Schedule A Tour
          </a>
        </div>
      )}
    </nav>
  );
}
