import TopHeader from './components/TopHeader';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import WeOffer from './components/WeOffer';
import WhyChoose from './components/WhyChoose';
import Gallery from './components/Gallery';
import MeetOurTeam from './components/MeetOurTeam';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <TopHeader />
      <Navigation />
      <Hero />
      <AboutUs />
      <WeOffer />
      <WhyChoose />
      <Gallery />
      <MeetOurTeam />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
