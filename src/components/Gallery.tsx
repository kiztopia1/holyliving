const galleryItems = [
  {
    image: 'https://images.pexels.com/photos/6942057/pexels-photo-6942057.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Cozy living room with electric fireplace'
  },
  {
    image: 'https://images.pexels.com/photos/7551662/pexels-photo-7551662.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Welcoming entrance'
  },
  {
    image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Wide, accessible hallways'
  },
  {
    image: 'https://images.pexels.com/photos/7551608/pexels-photo-7551608.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Comfortable private rooms'
  },
  {
    image: 'https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Fully accessible bathrooms'
  },
  {
    image: 'https://images.pexels.com/photos/7551608/pexels-photo-7551608.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Common areas'
  }
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
