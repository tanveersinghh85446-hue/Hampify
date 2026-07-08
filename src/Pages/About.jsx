function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-2xl md:text-3xl font-bold text-[#14140F] mb-4">
        About Hampify
      </h1>
      <p className="text-gray-600 leading-relaxed mb-4">
        Hampify was born out of a simple idea — gifting should feel personal,
        not transactional. We curate premium hampers for every festival and
        celebration, from Diwali and Rakhi to birthdays, anniversaries, and
        corporate milestones.
      </p>
      <p className="text-gray-600 leading-relaxed mb-4">
        Every hamper is thoughtfully assembled with quality products, beautiful
        packaging, and a personal touch — so your gift doesn't just arrive, it
        makes an impression.
      </p>

      <div className="grid sm:grid-cols-3 gap-6 mt-10">
        <div className="bg-white rounded-2xl border border-gray-100 p-6 text-center">
          <p className="text-3xl font-extrabold text-[#0C3B2E] mb-1">50K+</p>
          <p className="text-sm text-gray-500">Hampers Delivered</p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 p-6 text-center">
          <p className="text-3xl font-extrabold text-[#0C3B2E] mb-1">200+</p>
          <p className="text-sm text-gray-500">Cities Served</p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 p-6 text-center">
          <p className="text-3xl font-extrabold text-[#0C3B2E] mb-1">4.7★</p>
          <p className="text-sm text-gray-500">Average Rating</p>
        </div>
      </div>
    </div>
  );
}

export default About;
