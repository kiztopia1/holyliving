import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const AUTO_SCROLL_MS = 4500;

/** Wide images with left-aligned handwriting: anchor content left so it doesn't sit too far right */
const reviews: { src: string; alt: string; contentAlign?: 'left' | 'center' }[] = [
  { src: '/reviews/review.jpg', alt: 'Handwritten review from a family', contentAlign: 'left' },
  { src: '/reviews/review1.jpg', alt: 'Handwritten review from a family', contentAlign: 'left' },
  { src: '/reviews/review2-port.jpg', alt: 'Handwritten review from a family' },
  { src: '/reviews/review3.jpg', alt: 'Handwritten review from a family', contentAlign: 'left' },
  { src: '/reviews/review4-port.jpg', alt: 'Handwritten review from a family' },
];

export default function HandwrittenReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Auto-scroll main carousel
  useEffect(() => {
    if (lightboxIndex !== null) return;
    const id = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % reviews.length);
    }, AUTO_SCROLL_MS);
    return () => clearInterval(id);
  }, [lightboxIndex]);

  const goTo = (index: number) => {
    setCurrentIndex(index);
  };

  const goPrev = () => setLightboxIndex((i) => (i === null ? null : (i - 1 + reviews.length) % reviews.length));
  const goNext = () => setLightboxIndex((i) => (i === null ? null : (i + 1) % reviews.length));

  return (
    <section className="py-20 px-4 bg-off-white" id="reviews">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-charcoal">
          What Families Say About Us
        </h2>
        <p className="text-warm-gray text-center max-w-2xl mx-auto mb-16">
          Real handwritten notes from families who have experienced the care and warmth of Holy Living.
        </p>

        {/* Desktop & mobile: single sliding carousel with auto-scroll */}
        <div className="relative overflow-hidden rounded-2xl shadow-xl bg-[#e8e4dc]">
          {/* Fixed-height viewport so slide size never jumps */}
          <div className="min-h-[62vh] sm:min-h-[65vh] flex items-center justify-center py-8 px-4">
            <div
              className="flex w-full transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  className="flex-shrink-0 w-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset focus:ring-offset-2 rounded-2xl min-h-[54vh] sm:min-h-[58vh]"
                >
                  {/* Polaroid-style card: same padding for all, image fits inside → portrait/landscape both look intentional */}
                  <span className="inline-block bg-white px-4 py-4 sm:px-6 sm:py-6 rounded-lg shadow-lg border border-warm-gray/10">
                    <img
                      src={review.src}
                      alt={review.alt}
                      className="max-h-[48vh] sm:max-h-[52vh] max-w-[85vw] w-auto object-contain block"
                      style={{ objectPosition: review.contentAlign === 'left' ? 'left center' : 'center' }}
                    />
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Prev/Next for main carousel */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goTo((currentIndex - 1 + reviews.length) % reviews.length); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-charcoal/70 text-white hover:bg-charcoal transition"
            aria-label="Previous review"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goTo((currentIndex + 1) % reviews.length); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-charcoal/70 text-white hover:bg-charcoal transition"
            aria-label="Next review"
          >
            <ChevronRight size={28} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={(e) => { e.stopPropagation(); goTo(index); }}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  index === currentIndex ? 'bg-primary scale-125' : 'bg-white/70 hover:bg-white'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>

        </div>

      </div>

      {/* Modal: stacked slides, user can slide through */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 p-4"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="View review images"
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
            aria-label="Close"
          >
            <X size={28} />
          </button>

          <div className="relative w-full max-w-4xl flex items-center" onClick={(e) => e.stopPropagation()}>
            {/* Prev */}
            <button
              type="button"
              onClick={goPrev}
              className="flex-shrink-0 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
              aria-label="Previous review"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Fixed viewport + polaroid frame so portrait/landscape don't shift layout */}
            <div className="flex-1 flex justify-center items-center min-h-[80vh] px-2">
              <span className="inline-block bg-white/95 px-6 py-6 rounded-xl shadow-2xl border border-white/20">
                <img
                  key={lightboxIndex}
                  src={reviews[lightboxIndex].src}
                  alt={reviews[lightboxIndex].alt}
                  className="max-h-[72vh] max-w-[min(85vw,72rem)] w-auto object-contain block"
                  style={{ objectPosition: reviews[lightboxIndex].contentAlign === 'left' ? 'left center' : 'center' }}
                />
              </span>
            </div>

            {/* Next */}
            <button
              type="button"
              onClick={goNext}
              className="flex-shrink-0 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
              aria-label="Next review"
            >
              <ChevronRight size={32} />
            </button>
          </div>

          {/* Modal dots */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(index); }}
                className={`w-3 h-3 rounded-full transition ${
                  index === lightboxIndex ? 'bg-primary scale-125' : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-6 text-white/90 text-sm">
            {lightboxIndex + 1} of {reviews.length}
          </p>
        </div>
      )}
    </section>
  );
}
