import { useState } from 'react';
import { Menu, X, MapPin, Compass } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Plan', href: '#plan' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-30 backdrop-blur-xl/80 bg-white/10 supports-[backdrop-filter]:bg-white/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-white/20 border border-white/20">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div className="font-semibold tracking-tight text-white text-lg">
              HOW ZEEEEZ
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/90 hover:text-white transition-colors text-sm"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#plan"
              className="inline-flex items-center gap-2 bg-white text-gray-900 rounded-full px-4 py-2 text-sm font-medium shadow/20 shadow-white/40 hover:shadow-md transition"
            >
              <Compass className="w-4 h-4" /> Start Exploring
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white/90 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="px-4 py-3 space-y-2 bg-white/10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-white/90 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#plan"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center gap-2 bg-white text-gray-900 rounded-full px-4 py-2 text-sm font-medium"
            >
              <Compass className="w-4 h-4" /> Start Exploring
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
