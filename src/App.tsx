import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import ReviewUs from './pages/ReviewUs';
import SeoServicePage from './components/SeoServicePage';
import SeoHead from './components/SeoHead';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { SEO_PAGES } from './lib/seo';

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const timer = window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 80);
      return () => window.clearTimeout(timer);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function NotFoundPage() {
  return (
    <div className="min-h-screen">
      <SeoHead
        seo={{
          title: 'Page Not Found | Holy Living Adult Family Home',
          description: 'The page you requested could not be found.',
          path: '/404',
          noIndex: true,
        }}
      />
      <Navigation />
      <div className="pt-28 pb-20 max-w-[700px] mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl text-charcoal font-bold">Page not found</h1>
        <p className="mt-4 text-warm-gray">
          This page does not exist. Visit our home page to learn about adult family home care in
          Shoreline, WA.
        </p>
        <Link
          to="/"
          className="inline-block mt-6 text-charcoal font-semibold underline-offset-2 hover:underline"
        >
          Go to homepage
        </Link>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review" element={<ReviewUs />} />
        {SEO_PAGES.map((page) => (
          <Route
            key={page.slug}
            path={`/${page.slug}`}
            element={<SeoServicePage page={page} />}
          />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
