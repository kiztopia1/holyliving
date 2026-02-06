import { useEffect, useState } from 'react';

const slides = [
  '/imgs/living2.jpg',
  '/imgs/outside.png',

    '/imgs/living.jpg',
  '/imgs/room2.jpg',
  '/imgs/outside2.jpg',

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
    <div className="relative h-[520px] sm:h-[600px] overflow-hidden" id="home">
      {slides.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={src} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/15" />
        </div>
      ))}

      <div className="absolute inset-0 flex items-center justify-start px-6 sm:px-10 md:px-16 max-w-7xl mx-auto">
        <div className="max-w-xl sm:max-w-2xl">
          <h1 className="text-charcoal text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
            Holy Living Adult Family Home
          </h1>
          <p className="!text-black text-lg sm:text-xl md:text-2xl font-semibold mb-6">
            Where Compassionate Care Feels Like Family
          </p>
          <div className="flex gap-3 sm:gap-4 flex-nowrap">
            <a
              href="#contact"
              className="bg-primary text-charcoal px-5 sm:px-8 py-2.5 sm:py-3 rounded font-semibold hover:bg-secondary transition whitespace-nowrap text-sm sm:text-base"
            >
              Schedule a Tour
            </a>
            <a
              href="tel:206-412-5640"
              className="bg-white/90 text-charcoal px-5 sm:px-8 py-2.5 sm:py-3 rounded font-semibold hover:bg-white transition border-2 border-charcoal/20 whitespace-nowrap text-sm sm:text-base"
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
