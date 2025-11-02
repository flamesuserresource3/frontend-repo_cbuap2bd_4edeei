import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Footer from './components/Footer';

function Experiences() {
  const items = [
    {
      title: 'Culinary Trails',
      desc: 'Taste regional flavors from street delights to royal thalis with handpicked local gems.',
      image:
        'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Festival Routes',
      desc: 'Time your travel with iconic events — Holi, Durga Puja, Onam, and more.',
      image:
        'https://images.unsplash.com/photo-1558008258-3256797b43f3?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Nature Escapes',
      desc: 'From ghats to ghats — trek, camp, and unwind in serene landscapes.',
      image:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
    },
  ];
  return (
    <section id="experiences" className="bg-[#0b0d12] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Curated experiences</h2>
            <p className="mt-2 text-white/70 max-w-2xl">
              Mix and match themes to build an itinerary that fits your vibe.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="group overflow-hidden rounded-2xl bg-white/5 border border-white/10">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={it.image}
                  alt={it.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm text-white/70">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanCTA() {
  return (
    <section id="plan" className="relative py-20 bg-[#0b0d12]">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(16,185,129,0.15),transparent_60%)] pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-emerald-400/20 via-teal-400/20 to-sky-400/20 border border-white/15 backdrop-blur-xl p-8 sm:p-12 text-white">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Plan your next trip with HOW ZEEEEZ</h3>
          <p className="mt-3 text-white/80 max-w-2xl">
            Choose destinations, compare seasons, and get smart routes in minutes. It’s travel planning — simplified and beautiful.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#destinations" className="inline-flex justify-center rounded-full bg-white text-gray-900 px-6 py-3 font-semibold shadow-md hover:shadow-lg transition">
              Browse Ideas
            </a>
            <a href="#home" className="inline-flex justify-center rounded-full bg-white/10 border border-white/20 text-white px-6 py-3 font-semibold hover:bg-white/20 transition">
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Destinations />
      <Experiences />
      <PlanCTA />
      <Footer />
    </div>
  );
}
