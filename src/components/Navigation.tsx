import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { href: '/#home', label: 'Home' },
  { href: '/#about', label: 'About Us' },
  { href: '/#care', label: 'Services' },
  { href: '/#gallery', label: 'Gallery' },
  { href: '/review', label: 'Testimonials', isRoute: true },
  { href: '/#team', label: 'Team' },
  { href: '/#contact', label: 'Contact Us' },
] as const;

const linkClass =
  'text-charcoal text-sm hover:text-charcoal transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-14 md:h-16">
            <Link to="/" className="flex items-center gap-2 shrink-0 min-w-0">
              <img
                src="/logo.jpg"
                alt="Holy Living Adult Family Home"
                width={48}
                height={48}
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
              />
              <div className="hidden sm:block min-w-0">
                <span className="text-charcoal text-sm md:text-base font-semibold block leading-tight truncate">
                  Holy Living Adult Family Home
                </span>
                <span className="text-warm-gray text-[10px] md:text-xs">Where care feels like family</span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
              {navLinks.map((link) =>
                'isRoute' in link && link.isRoute ? (
                  <Link key={link.href} to={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                ) : (
                  <a key={link.href} href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                )
              )}
            </nav>

            <div className="hidden lg:flex items-center gap-2 shrink-0">
              <a
                href="tel:4259216842"
                className="inline-flex items-center justify-center gap-2 rounded-full h-9 px-4 text-sm font-semibold bg-primary text-charcoal hover:bg-secondary transition-colors"
              >
                <Phone className="w-3.5 h-3.5 shrink-0" />
                Call Now
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full h-9 px-4 text-sm font-semibold border border-charcoal/20 text-charcoal hover:bg-off-white transition-colors"
              >
                Schedule A Tour
              </a>
            </div>

            <button
              type="button"
              className="lg:hidden p-2 text-charcoal"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="lg:hidden bg-white border-t border-charcoal/10 py-4">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) =>
                  'isRoute' in link && link.isRoute ? (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="text-charcoal hover:text-warm-gray px-4 py-2 text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-charcoal hover:text-warm-gray px-4 py-2 text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  )
                )}
                <div className="px-4 pt-3 flex flex-col gap-2">
                  <a
                    href="tel:4259216842"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full h-10 text-sm font-semibold bg-primary text-charcoal hover:bg-secondary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Phone className="w-3.5 h-3.5 shrink-0" />
                    (425) 921-6842
                  </a>
                  <a
                    href="/#contact"
                    className="inline-flex w-full items-center justify-center rounded-full h-10 text-sm font-semibold border border-charcoal/20 text-charcoal hover:bg-off-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Schedule A Tour
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    
    </>
  );
}
