import { useEffect, useState } from 'react';

const slides = [
  'https://images.pexels.com/photos/6942057/pexels-photo-6942057.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/7551662/pexels-photo-7551662.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1920'
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] overflow-hidden" id="home">
      {slides.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={src} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/50" />
        </div>
      ))}

      <div className="absolute inset-0 flex items-center justify-start px-16 max-w-7xl mx-auto">
        <div className="text-charcoal max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Holy Living Adult Family Home
          </h1>
          <p className="text-2xl font-semibold mb-4">
            Where Compassionate Care Feels Like Family
          </p>
          <p className="text-lg mb-8 opacity-95">
            Experience truly personalized care in a beautiful home environment where your loved one will feel safe, valued, and cared for like family.
          </p>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="bg-primary text-charcoal px-8 py-3 rounded font-medium hover:bg-secondary transition"
            >
              Schedule a Tour
            </a>
            <a
              href="tel:206-412-5640"
              className="bg-white/90 text-charcoal px-8 py-3 rounded font-medium hover:bg-white transition border-2 border-charcoal/20"
            >
              Call Us Today
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentSlide ? 'bg-charcoal' : 'bg-charcoal/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
