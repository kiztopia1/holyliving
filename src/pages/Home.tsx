// import TopHeader from '../components/TopHeader';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import WeOffer from '../components/WeOffer';
import WhyChoose from '../components/WhyChoose';
import Gallery from '../components/Gallery';
import MeetOurTeam from '../components/MeetOurTeam';
import HandwrittenReviews from '../components/HandwrittenReviews';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SeoHead from '../components/SeoHead';
import { HomeJsonLd } from '../components/JsonLd';
import { HOME_SEO } from '../lib/seo';

export default function Home() {
  return (
    <div className="min-h-screen">
      <SeoHead seo={HOME_SEO} />
      <HomeJsonLd />
      {/* <TopHeader /> */}
      <Navigation />
      <Hero />
      <AboutUs />
      <WeOffer />
      <WhyChoose />
      <Gallery />
      <MeetOurTeam />
      <HandwrittenReviews />
      <Contact />
      <Footer />
    </div>
  );
}
