import { Phone, Mail, MapPin } from 'lucide-react';

export default function TopHeader() {
  return (
    <div className="bg-primary text-charcoal py-1.5 px-4 text-sm sm:text-base">
      <div className="max-w-7xl mx-auto flex justify-evenly items-center flex-wrap gap-3 sm:gap-4">
        <a href="tel:425-921-6842" className="flex items-center gap-2 text-charcoal hover:text-warm-gray transition shrink-0">
          <Phone size={14} />
          <span className="whitespace-nowrap">(425) 921-6842</span>
        </a>
        <a
          href="mailto:holylivingss@gmail.com"
          className="hidden sm:flex items-center gap-2 text-charcoal hover:text-warm-gray transition shrink-0"
        >
          <Mail size={14} />
          <span className="truncate max-w-[200px] sm:max-w-none">holylivingss@gmail.com</span>
        </a>
        <div className="flex items-center gap-2 shrink-0">
          <MapPin size={14} />
          <span className="leading-snug">20121 8th Ave NE, Shoreline, WA 98155</span>
        </div>
      </div>
    </div>
  );
}
