import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, MessageCircle, ArrowLeft } from 'lucide-react';
import SeoHead from '../components/SeoHead';
import { REVIEW_SEO } from '../lib/seo';

// Replace with your actual Google review URL (from Google Maps or Business Profile)
const GOOGLE_REVIEW_URL =
  'https://www.google.com/search?q=Holy+Living+Adult+Family+Home+Shoreline+WA#lrd=0x549010ff5d7d0719:0x8396f8b1ed3a6823,3,,,,';

export default function ReviewUs() {
  const [selectedStars, setSelectedStars] = useState<number | null>(null);
  const [feedback, setFeedback] = useState('');
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleStarClick = (rating: number) => {
    setSelectedStars(rating);
    if (rating >= 4) {
      window.open(GOOGLE_REVIEW_URL, '_blank', 'noopener,noreferrer');
    }
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Feedback:', feedback);
    setFeedbackSent(true);
  };

  return (
    <div
      className="min-h-[100vh] min-h-[100dvh] flex flex-col items-center justify-center px-4 py-8 text-charcoal relative"
      style={{
        backgroundImage: 'url(/imgs/outside2.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <SeoHead seo={REVIEW_SEO} />
      <div className="absolute inset-0 bg-charcoal/60" aria-hidden="true" />
      <Link
        to="/"
        className="absolute top-4 left-4 z-10 flex items-center gap-2 text-white/90 hover:text-white transition text-sm font-medium drop-shadow-md"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to home
      </Link>
      <div className="w-full max-w-md mx-auto text-center relative z-10 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl px-6 py-10 sm:px-10 sm:py-12">
        <img
          src="/logo.jpg"
          alt="Holy Living Adult Family Home"
          className="h-16 w-auto mx-auto mb-3 sm:h-20"
        />
        <h2 className="text-lg sm:text-xl font-semibold text-charcoal mb-8">
          Holy Living Adult Family Home
        </h2>
        {!selectedStars ? (
          <>
            <h1 className="text-3xl sm:text-4xl font-bold text-charcoal mb-2">
              How was your experience?
            </h1>
            <p className="text-warm-gray mb-8">
              Your feedback helps us improve. Tap a star to rate.
            </p>
            <div
              className="flex justify-center gap-2 sm:gap-3 mb-2"
              role="group"
              aria-label="Rate 1 to 5 stars"
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleStarClick(star)}
                  className="p-1 sm:p-2 rounded-full transition transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label={`${star} star${star > 1 ? 's' : ''}`}
                >
                  <Star
                    className="w-10 h-10 sm:w-12 sm:h-12 text-primary drop-shadow-sm"
                    fill="none"
                    strokeWidth={2}
                    stroke="currentColor"
                  />
                </button>
              ))}
            </div>
          </>
        ) : selectedStars >= 4 ? (
          <div className="space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-4">
              <Star className="w-8 h-8" fill="currentColor" />
            </div>
            <h2 className="text-2xl font-bold text-charcoal">Thank you!</h2>
            <p className="text-warm-gray">
              Thank you for your support. It means a lot to us.
            </p>
            <Link
              to="/"
              className="inline-block mt-4 bg-primary text-charcoal px-8 py-3 rounded-lg font-medium hover:bg-secondary transition"
            >
              Go back home
            </Link>
          </div>
        ) : (
          <div className="space-y-6 text-left">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-charcoal/10 text-charcoal mb-3">
                <MessageCircle className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold text-charcoal">
                Thanks for your review
              </h2>
              <p className="text-warm-gray mt-2">
                We're sorry we didn't meet your expectations. What could we do
                better?
              </p>
            </div>
            {!feedbackSent ? (
              <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Your feedback (optional)"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-warm-gray/30 focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px] resize-none text-charcoal placeholder:text-warm-gray"
                  rows={4}
                />
                <button
                  type="submit"
                  className="w-full bg-primary text-charcoal px-6 py-3 rounded-lg font-medium hover:bg-secondary transition"
                >
                  Send feedback
                </button>
              </form>
            ) : (
              <p className="text-center text-warm-gray">
                We've received your feedback. Thank you for helping us improve.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
