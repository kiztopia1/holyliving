import { Heart, Clock, Home, Smile } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Personal Attention',
    description: '"They are people too! Not just numbers! That\'s what really differentiates us from bigger facilities and other adult family homes."'
  },
  {
    icon: Clock,
    title: '24/7 Care Team',
    description: 'Resident manager available around the clock, RN on call, and fully certified CNAs as caregivers and medication technicians.'
  },
  {
    icon: Home,
    title: 'Beautiful Home Environment',
    description: 'Our welcoming home features a cozy living room with fireplace, a peaceful aquarium, and comfortable private rooms with en-suite bathrooms. Outside, residents enjoy our colorful flower gardens, peaceful backyard, and a spacious deck perfect for warm spring and summer days.'
  },
  {
    icon: Smile,
    title: 'Peace & Joy',
    description: 'Families appreciate the level of well-being, peace, and joy our residents experience every day.'
  }
];

export default function WhyChoose() {
  return (
    <section className="py-20 px-4 bg-off-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-charcoal">
          Why Families Choose Holy Living
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-md flex gap-4">
              <div className="w-14 h-14 bg-primary/30 rounded-lg flex items-center justify-center flex-shrink-0 border-2 border-charcoal/10">
                <feature.icon size={24} className="text-charcoal" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-charcoal">{feature.title}</h3>
                <p className="text-warm-gray leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
