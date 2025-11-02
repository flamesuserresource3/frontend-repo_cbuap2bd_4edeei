import { Heart, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 text-white font-semibold text-lg">
              <span className="inline-flex items-center justify-center p-2 rounded-lg bg-white/10 border border-white/10">
                <MapPin className="w-5 h-5" />
              </span>
              HOW ZEEEEZ
            </div>
            <p className="mt-3 text-sm text-white/70 max-w-sm">
              Your modern guide to exploring the heart of India — thoughtfully curated journeys, real-time tips, and stunning visuals.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-white" href="#destinations">Destinations</a></li>
              <li><a className="hover:text-white" href="#experiences">Experiences</a></li>
              <li><a className="hover:text-white" href="#plan">Plan a Trip</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Stay in the loop</h4>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 placeholder:text-white/50"
              />
              <button className="rounded-lg bg-white text-gray-900 px-4 py-2 text-sm font-medium">Join</button>
            </form>
            <p className="mt-2 text-xs text-white/60 flex items-center gap-1">
              Made with <Heart className="w-3.5 h-3.5 text-pink-400" /> across India
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/60 flex items-center justify-between">
          <p>© {new Date().getFullYear()} HOW ZEEEEZ. All rights reserved.</p>
          <a href="mailto:hello@howzeeeez.in" className="inline-flex items-center gap-2 hover:text-white">
            <Mail className="w-4 h-4" /> Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
