export default function AboutUs() {
  return (
    <section className="py-20 px-4 bg-off-white" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="group relative z-0 rounded-2xl bg-white shadow-lg ring-1 ring-charcoal/5 transition-all duration-300 ease-out hover:z-20 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl hover:ring-charcoal/10">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/imgs/aquarium.jpg"
                alt="Living room with aquarium at Holy Living"
                className="w-full h-[500px] object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6 text-charcoal">
              A Place Your Loved One Will Call Home
            </h2>

            <div className="space-y-4 text-warm-gray leading-relaxed">
              <p>
                At Holy Living Adult Family Home, we believe caring for others is more than a job—it's a calling. Our beautiful Shoreline residence offers a warm, inviting atmosphere where just six residents receive the personalized attention that larger facilities simply cannot provide.
              </p>

              <p>
                What makes us different? We see every resident as a person with their own unique story, preferences, and needs. With a 1:3 caregiver-to-resident ratio and ownership on-site, we ensure each individual receives the dignity, comfort, and genuine care they deserve.
              </p>

              <p>
                Families who visit us immediately feel the difference. From our peaceful aquarium in the living room to the attentive care we provide, everything about Holy Living is designed to bring well-being and joy to our residents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
