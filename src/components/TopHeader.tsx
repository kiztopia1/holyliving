import { Phone, Mail, MapPin } from 'lucide-react';

export default function TopHeader() {
  return (
    <div className="bg-primary text-charcoal py-2 px-4 text-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-2">
        <div className="flex flex-wrap gap-6 items-center">
          <a href="tel:206-412-5640" className="flex items-center gap-2 hover:text-warm-gray transition">
            <Phone size={16} />
            <span>206-412-5640</span>
          </a>
          <a href="mailto:holylivingss@gmail.com" className="flex items-center gap-2 hover:text-warm-gray transition">
            <Mail size={16} />
            <span>holylivingss@gmail.com</span>
          </a>
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>20121 8th Ave NE, Shoreline, WA 98155</span>
          </div>
        </div>
      </div>
    </div>
  );
}
