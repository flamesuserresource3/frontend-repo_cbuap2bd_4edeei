import Spline from '@splinetool/react-spline';
import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 border border-white/30 backdrop-blur px-3 py-1 text-xs text-white mb-6">
            <Star className="w-3.5 h-3.5 text-yellow-300" />
            India Domestic Tourism
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Discover India with HOW ZEEEEZ
          </h1>
          <p className="mt-5 text-white/90 text-lg sm:text-xl leading-relaxed">
            From Himalayan peaks to Goan beaches, ancient temples to neon cityscapes — craft your dream journey with modern, immersive planning.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#destinations"
              className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 px-6 py-3 font-semibold shadow-md hover:shadow-lg transition"
            >
              Explore Destinations
            </a>
            <a
              href="#plan"
              className="inline-flex items-center justify-center rounded-full bg-white/15 border border-white/30 text-white px-6 py-3 font-semibold hover:bg-white/25 transition"
            >
              Plan a Trip
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
