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
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[450px] sm:h-[540px] md:h-[540px] overflow-hidden" id="home">
      {slides.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={src} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/15" />
        </div>
      ))}

      <div className="absolute inset-0 flex items-center justify-center md:justify-start px-6 sm:px-10 md:px-16 max-w-7xl mx-auto">
        <div className="max-w-xl sm:max-w-2xl text-center md:text-left">
          <h1 className="text-black text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
            Holy Living Adult Family Home
          </h1>
          <p className="!text-black text-lg sm:text-xl md:text-2xl font-semibold mb-6">
            Where Compassionate Care Feels Like Family
          </p>
          <div className="flex gap-3 sm:gap-4 flex-nowrap justify-center md:justify-start">
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
    </div>
  );
}
