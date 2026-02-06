import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ChevronRight, Star } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Care', href: '#care' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Holy Living Adult Family Home</h4>
            <p className="text-off-white text-sm">
              Licensed Adult Family Home in Shoreline, WA
            </p>
            <p className="text-off-white/80 text-sm mt-1">License #7547341</p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="flex items-center gap-2 text-off-white hover:text-primary transition group">
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-off-white text-sm">
                  20121 8th Ave NE<br />
                  Shoreline, WA 98155
                </span>
              </div>
              <a href="tel:206-412-5640" className="flex items-center gap-3 text-off-white hover:text-primary transition">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <span>206-412-5640</span>
              </a>
              <a href="mailto:holylivingss@gmail.com" className="flex items-center gap-3 text-off-white hover:text-primary transition">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <span className="text-sm">holylivingss@gmail.com</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Hours</h4>
            <p className="text-off-white text-sm">
              Available 24/7 for resident care
            </p>
            <p className="text-off-white/80 text-sm mt-2">
              Tours by appointment
            </p>
            <Link
              to="/review"
              className="mt-4 inline-flex items-center gap-2 bg-primary text-charcoal px-5 py-2.5 rounded-lg font-medium hover:bg-secondary transition text-sm"
            >
              <Star size={18} />
              Review Us
            </Link>
          </div>
        </div>

        <div className="border-t border-warm-gray/40 pt-8 text-center">
          <p className="text-off-white/80 text-sm">
            2026 Holy Living Adult Family Home. All rights reserved.
          </p>
          <br />
          <p className="text-off-white/80 text-sm">Powered by ProspexCare. </p>
        </div>
      </div>
    </footer>
  );
}
