import { MapPin, Sun, Mountain, Camera, Train, Utensils } from 'lucide-react';

const spots = [
  {
    title: 'Jaipur, Rajasthan',
    tag: 'Heritage & Palaces',
    image:
      'https://images.unsplash.com/photo-1585506942819-8f7f2650f7d1?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Goa',
    tag: 'Beaches & Nightlife',
    image:
      'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Kashmir Valley',
    tag: 'Mountains & Lakes',
    image:
      'https://images.unsplash.com/photo-1610728890077-0d0c3f9ca6eb?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Varanasi, Uttar Pradesh',
    tag: 'Spiritual & Culture',
    image:
      'https://images.unsplash.com/photo-1599661046289-e31897846a09?q=80&w=1600&auto=format&fit=crop',
  },
];

const perks = [
  { icon: Train, label: 'Smart Routes' },
  { icon: Utensils, label: 'Local Flavours' },
  { icon: Camera, label: 'Photo Spots' },
  { icon: Mountain, label: 'Nature Trails' },
  { icon: Sun, label: 'Best Seasons' },
];

export default function Destinations() {
  return (
    <section id="destinations" className="relative bg-[#0b0d12] text-white py-20">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(99,102,241,0.15),transparent_60%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end gap-10 mb-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 backdrop-blur px-3 py-1 text-xs text-white/80 mb-4">
              <MapPin className="w-3.5 h-3.5" /> Top Picks
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Vibrant destinations across India</h2>
            <p className="mt-3 text-white/70 max-w-2xl">
              Handpicked places blending heritage, nature, food, and culture. Save them, compare seasons, and build your perfect route.
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 lg:gap-3">
            {perks.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-2">
                <Icon className="w-4 h-4 text-white" />
                <span className="text-xs text-white/80">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {spots.map((s) => (
            <a key={s.title} href="#plan" className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10">
              <div className="aspect-[4/5]">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-4">
                <div className="text-sm text-white/80">{s.tag}</div>
                <div className="text-lg font-semibold">{s.title}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
