const galleryItems = [
  { image: '/imgs/living.jpg', caption: 'Cozy living room' },
  { image: '/imgs/living2.jpg', caption: 'Living area' },
  { image: '/imgs/outside.png', caption: 'Welcoming entrance' },
  { image: '/imgs/outside2.jpg', caption: 'Exterior and grounds' },
  { image: '/imgs/corridor-port.jpg', caption: 'Wide, accessible hallways' },
  { image: '/imgs/corridor-port2.jpg', caption: 'Hallway' },
  { image: '/imgs/room.jpg', caption: 'Comfortable private room' },
  { image: '/imgs/room2.jpg', caption: 'Private room' },
  { image: '/imgs/room3.jpg', caption: 'Private room' },
  { image: '/imgs/room4.jpg', caption: 'Private room' },
  { image: '/imgs/dining.jpg', caption: 'Dining area' },
  { image: '/imgs/toilet.jpg', caption: 'Fully accessible bathroom' },
  { image: '/imgs/toilet2.png', caption: 'Accessible bathroom' }
];

export default function Gallery() {
  return (
    <section className="py-20 px-4 bg-white" id="gallery">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-charcoal">
          Take a Look Inside Our Home
        </h2>
        <p className="text-warm-gray text-center max-w-2xl mx-auto mb-16">
          A comfortable, well-appointed residence designed for safety, accessibility, and comfort.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-lg group">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
              />
              <p className="bg-off-white px-4 py-3 text-warm-gray text-sm font-medium">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
