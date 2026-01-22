import { useEffect, useState } from "react";
import { getAllProperties } from "../api/property.api";

export default function Home() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    getAllProperties()
      .then(res => setProperties(res.data))
      .catch(() => {});
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#050B18] via-[#0A1025] to-black text-white min-h-screen">

      {/* HERO */}
      <section className="pt-40 pb-32">
        <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-20 items-center">

          <div>
            <h1 className="text-6xl font-extrabold leading-tight mb-8">
              Luxury Homes.<br />
              Smart Investments.
            </h1>

            <p className="text-gray-400 text-xl mb-12">
              Discover premium properties curated for modern living.
            </p>

            {/* Glass Search */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 grid md:grid-cols-4 gap-4 shadow-2xl">
              <input className="bg-black/40 border border-white/10 rounded-xl p-4 text-white" placeholder="Location" />
              <select className="bg-black/40 border border-white/10 rounded-xl p-4 text-white">
                <option>Buy</option>
                <option>Rent</option>
              </select>
              <input className="bg-black/40 border border-white/10 rounded-xl p-4 text-white" placeholder="Budget" />
              <button className="rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 font-bold shadow-xl hover:scale-105 transition">
                Search
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-10 -left-10 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl">
              <h3 className="text-2xl font-bold">₹ 2.4 Cr</h3>
              <p className="text-gray-300">Sea View Villa</p>
            </div>
          </div>

        </div>
      </section>

      {/* FEATURED */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-10">

          <h2 className="text-5xl font-bold mb-16">
            Featured Residences
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {properties.map(p => (
              <div key={p._id} className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition">

                <img
                  src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
                  className="h-64 w-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{p.title}</h3>
                  <p className="text-gray-400">{p.location}</p>

                  <div className="flex justify-between items-center mt-6">
                    <p className="text-cyan-400 font-bold text-xl">₹ {p.price}</p>
                    <span className="px-4 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-400/20">
                      Premium
                    </span>
                  </div>

                  <button className="mt-8 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 font-bold shadow-lg hover:scale-105 transition">
                    View Property
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-10 text-center">

          <h2 className="text-5xl font-bold mb-8">
            List Your Luxury Property
          </h2>

          <p className="text-gray-400 text-xl mb-12">
            Reach premium buyers across India
          </p>

          <button className="px-12 py-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-xl font-bold shadow-2xl hover:scale-105 transition">
            Add Property
          </button>

        </div>
      </section>

    </div>
  );
}
