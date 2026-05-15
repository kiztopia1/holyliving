import { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ADDRESS = '20121 8th Ave NE, Shoreline, WA 98155';
const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    contactMethod: 'phone'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 px-4 bg-white" id="contact">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-charcoal">
          Schedule a Visit Today
        </h2>
        <p className="text-warm-gray text-center max-w-2xl mx-auto mb-16">
          We'd love to show you around and answer any questions you may have. Experience the Holy Living difference firsthand.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-4 mb-8">
              <a href={`https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-warm-gray transition hover:text-charcoal hover:underline hover:decoration-2 hover:decoration-primary hover:underline-offset-4">
                <MapPin size={22} className="flex-shrink-0 mt-0.5" />
                <span>{ADDRESS}</span>
              </a>
              <a href="tel:425-921-6842" className="flex items-center gap-3 text-warm-gray transition hover:text-charcoal hover:underline hover:decoration-2 hover:decoration-primary hover:underline-offset-4">
                <Phone size={22} className="flex-shrink-0" />
                <span>425-921-6842</span>
              </a>
              <a href="tel:206-816-2447" className="flex items-center gap-3 text-warm-gray transition hover:text-charcoal hover:underline hover:decoration-2 hover:decoration-primary hover:underline-offset-4">
                <Phone size={22} className="flex-shrink-0" />
                <span>206-816-2447 (Owner/Manager)</span>
              </a>
              <a href="mailto:holylivingss@gmail.com" className="flex items-center gap-3 text-warm-gray transition hover:text-charcoal hover:underline hover:decoration-2 hover:decoration-primary hover:underline-offset-4">
                <Mail size={22} className="flex-shrink-0" />
                <span>holylivingss@gmail.com</span>
              </a>
            </div>

            <div className="rounded-xl overflow-hidden shadow-md h-64 bg-off-white">
              <iframe
                title="Holy Living Adult Family Home location"
                src={MAP_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Your Name *"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-6 py-4 rounded bg-off-white border border-warm-gray/30 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-6 py-4 rounded bg-off-white border border-warm-gray/30 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <input
              type="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-6 py-4 rounded bg-off-white border border-warm-gray/30 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <textarea
              placeholder="Message / Questions"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-6 py-4 rounded bg-off-white border border-warm-gray/30 focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px] resize-none"
            />
            <div>
              <label className="block text-charcoal font-medium mb-2">Preferred Contact Method</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="phone"
                    checked={formData.contactMethod === 'phone'}
                    onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                    className="text-primary focus:ring-primary"
                  />
                  <span className="text-warm-gray">Phone</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="email"
                    checked={formData.contactMethod === 'email'}
                    onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                    className="text-primary focus:ring-primary"
                  />
                  <span className="text-warm-gray">Email</span>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="bg-primary text-charcoal px-8 py-3 rounded font-medium hover:bg-secondary transition"
            >
              Request Information
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
