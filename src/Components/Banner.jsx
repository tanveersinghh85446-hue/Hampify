import { Link } from "react-router-dom";

function Banner() {
  return (
    <section className="bg-linear-to-r from-[#0C3B2E] to-[#155843] text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-16 grid md:grid-cols-2 items-center gap-8">
        <div>
          <span className="inline-block bg-[#C6F135] text-[#14140F] text-xs font-bold px-3 py-1 rounded-full mb-4">
            Festive Season Special
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            Hampers that turn moments <br className="hidden md:block" />
            into memories
          </h1>
          <p className="text-gray-200 text-sm md:text-base mb-6 max-w-md">
            Handpicked gift hampers for Diwali, Rakhi, birthdays, anniversaries
            and every celebration in between. Delivered with care.
          </p>
          <Link
            to="/products"
            className="inline-block bg-[#C6F135] text-[#14140F] font-semibold px-6 py-3 rounded-xl hover:bg-[#b7df2d] transition-colors"
          >
            Shop All Hampers
          </Link>
        </div>

        <div className="hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=600"
            alt="Gift hamper"
            className="rounded-2xl shadow-2xl w-full h-80 object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
