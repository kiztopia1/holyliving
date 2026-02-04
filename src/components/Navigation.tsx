export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm py-4 px-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-8">
          <a href="#home" className="text-warm-gray hover:text-charcoal font-medium transition">Home</a>
          <a href="#about" className="text-warm-gray hover:text-charcoal font-medium transition">About Us</a>
          <a href="#care" className="text-warm-gray hover:text-charcoal font-medium transition">Our Care</a>
          <a href="#gallery" className="text-warm-gray hover:text-charcoal font-medium transition">Our Home</a>
          <a href="#contact" className="text-warm-gray hover:text-charcoal font-medium transition">Contact</a>
        </div>

        <div className="flex items-center">
          <a href="#home" className="flex items-center focus:outline-none">
            <img
              src="/logo.jpg"
              alt="Holy Living Adult Family Home"
              className="h-28 w-auto object-contain"
            />
          </a>
        </div>

        <div className="flex items-center gap-8">
          <a href="tel:206-412-5640" className="text-warm-gray hover:text-charcoal font-medium transition">
            Call Now: 206-412-5640
          </a>
          <a href="#contact" className="bg-primary text-charcoal px-6 py-2 rounded hover:bg-secondary font-medium transition">
            Schedule a Tour
          </a>
        </div>
      </div>
    </nav>
  );
}
