const galleryItems = [
  { image: '/imgs/aquarium.jpg', caption: 'Cozy living room with aquarium' },
  { image: '/imgs/living2.jpg', caption: 'Living area' },
  { image: '/imgs/outside.png', caption: 'Welcoming entrance' },
  { image: '/imgs/outside2.jpg', caption: 'Exterior and grounds' },
  { image: '/imgs/outdoor-grill.jpg', caption: 'Outdoor patio and grill' },
  { image: '/imgs/garden1.jpg', caption: 'Garden and outdoor space' },
  { image: '/imgs/gardern2.jpg', caption: 'Landscaped grounds' },
  { image: '/imgs/gardern3.jpg', caption: 'Peaceful outdoor areas' },
  { image: '/imgs/corridor-port.jpg', caption: 'Wide, accessible hallways' },
  { image: '/imgs/corridor-port2.jpg', caption: 'Hallway' },
  { image: '/imgs/room.jpg', caption: 'Comfortable private room' },
  { image: '/imgs/room2.jpg', caption: 'Private room' },
  { image: '/imgs/room3.jpg', caption: 'Private room' },
  { image: '/imgs/dining.jpg', caption: 'Dining area' },
  { image: '/imgs/toilet.jpg', caption: 'Fully accessible bathroom' },
  { image: '/imgs/toilet-new.jpg', caption: 'Accessible bathroom' },
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative z-0 rounded-xl bg-white shadow-lg ring-1 ring-charcoal/5 transition-all duration-300 ease-out hover:z-20 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl hover:ring-charcoal/10"
            >
              <div className="overflow-hidden rounded-t-xl">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-64 object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>
              <p className="rounded-b-xl bg-off-white px-4 py-3 text-warm-gray text-sm font-medium">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
