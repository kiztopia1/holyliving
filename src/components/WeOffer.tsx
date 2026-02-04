import { Users, Brain, Heart, Shield, Flower2 } from 'lucide-react';

const careServices = [
  {
    icon: Users,
    title: 'Seniors & General Care',
    description: 'Comprehensive daily living support in a comfortable home environment.'
  },
  {
    icon: Brain,
    title: 'Memory Care Support',
    description: 'Specialized dementia and Alzheimer\'s care delivered with patience, understanding, and proven techniques.'
  },
  {
    icon: Heart,
    title: 'Developmental Disabilities',
    description: 'Supportive care for individuals with developmental disabilities.'
  },
  {
    icon: Shield,
    title: 'Mental Health Support',
    description: 'Compassionate care for individuals needing mental health assistance in a safe, stable environment.'
  },
  {
    icon: Flower2,
    title: 'Hospice & End-of-Life Care',
    description: 'Dignified, comfortable care during life\'s final chapter.'
  }
];

export default function WeOffer() {
  return (
    <section className="py-20 px-4 bg-white" id="care">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-charcoal">
          Our Approach to Care
        </h2>
        <p className="text-xl text-warm-gray text-center mb-16 max-w-2xl mx-auto">
          Individualized Care. Genuine Compassion. Measurable Peace of Mind.
        </p>

        <p className="text-warm-gray text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          Every person who walks through our doors receives individualized care tailored to their unique needs. We provide comprehensive support with all activities of daily living, medication management, home-cooked meals, and everything in between. Most importantly, we treat each resident with the dignity, respect, and personal attention they deserve.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {careServices.map((service, index) => (
            <div key={index} className="bg-off-white rounded-lg p-8 shadow-md border border-white">
              <div className="w-14 h-14 bg-primary/30 rounded-lg flex items-center justify-center mb-4 border-2 border-charcoal/10">
                <service.icon size={28} className="text-charcoal" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-charcoal">{service.title}</h3>
              <p className="text-warm-gray leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
