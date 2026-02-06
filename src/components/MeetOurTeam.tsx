export default function MeetOurTeam() {
  return (
    <section className="py-20 px-4 bg-off-white" id="team">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-charcoal">
          Meet Our Caring Team
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/imgs/living2.jpg"
              alt="Saba - Provider at Holy Living Adult Family Home"
              className="w-full h-[450px] object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2 text-charcoal">Saba — Provider</h3>
            <p className="text-warm-gray leading-relaxed mb-6">
              Saba founded Holy Living Adult Family Home with one clear mission: to provide the loving, personalized care that every person deserves. As a certified CNA with over 15 years of experience in senior care, she remains actively involved in daily operations and personally knows each resident and their family. For Saba, caregiving isn't just a profession—it's a calling that comes naturally to her compassionate spirit.
            </p>

            <ul className="space-y-2 text-warm-gray mb-6">
              <li>• Owner & Resident Manager available on-site 24/7</li>
              <li>• Registered Nurse (RN) on call at all times</li>
              <li>• Fully certified CNAs serving as caregivers</li>
            </ul>

            <blockquote className="border-l-4 border-primary pl-6 py-2 text-charcoal italic">
              "Caring for others is like nature to me. It felt like something I could definitely do long-term and as a career."
              <footer className="text-warm-gray text-sm mt-2 not-italic">— Saba, Owner</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
