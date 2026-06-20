
import React from 'react';
import { Phone } from 'lucide-react';

const trustItems = ['WSIB certified', 'Fully insured', 'Barrie & Simcoe County'];

const Hero: React.FC = () => {
  return (
    <section className="relative bg-brand-slate">
      {/* Mobile: photo-first hero */}
      <div className="lg:hidden">
        <div className="relative">
          <img
            src="https://static.wixstatic.com/media/2553e9_555cec11f90a4b36b91e6ff9ce0327a9~mv2.avif/v1/fill/w_674,h_701,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_0179_compressed.avif"
            alt="McNic Holes truck on site in Barrie"
            className="w-full aspect-[4/3] object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-6">
            <p className="text-sm font-medium text-brand-blue mb-2">Barrie &amp; Simcoe County</p>
            <h1 className="text-3xl font-bold leading-tight text-white">
              Post holes, fences &amp; decks built to last
            </h1>
          </div>
        </div>

        <div className="px-6 pt-6 pb-8">
          <p className="text-base text-zinc-400 leading-relaxed">
            Professional digging, deck piers, and fence installs — with utility lines located before we break ground.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <a href="#footer" className="btn-primary w-full">
              Get a free quote
            </a>
            <a
              href="tel:7057967789"
              className="btn-secondary w-full"
            >
              <Phone size={18} />
              (705) 796-7789
            </a>
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-zinc-500">
            {trustItems.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Desktop hero */}
      <div className="hidden lg:block max-w-7xl mx-auto px-6 pt-28 pb-20">
        <div className="grid grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-brand-blue mb-4">Serving Barrie &amp; Simcoe County</p>
            <h1 className="text-5xl xl:text-6xl font-bold leading-[1.08] text-white">
              Post holes, fences &amp; decks{' '}
              <span className="text-brand-blue">built to last</span>
            </h1>
            <p className="mt-6 text-lg text-zinc-400 leading-relaxed max-w-lg">
              Professional post hole digging, deck piers, and fence installations. We locate utilities before every dig and stand behind our work.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#footer" className="btn-primary">
                Get a free quote
              </a>
              <a href="#services" className="btn-secondary">
                See our services
              </a>
            </div>

            <ul className="mt-10 flex flex-wrap gap-6 text-sm text-zinc-500">
              {trustItems.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <img
              src="https://static.wixstatic.com/media/2553e9_555cec11f90a4b36b91e6ff9ce0327a9~mv2.avif/v1/fill/w_674,h_701,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_0179_compressed.avif"
              alt="McNic Holes crew and equipment"
              className="w-full aspect-[4/5] object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-4 gap-4">
          {[
            { value: '10+', label: 'Years experience' },
            { value: '48"', label: 'Standard depth' },
            { value: '$2M+', label: 'Liability coverage' },
            { value: '15%', label: 'Lumber savings' },
          ].map((stat) => (
            <div key={stat.label} className="surface-card px-6 py-5 text-center">
              <div className="text-2xl font-bold text-brand-blue">{stat.value}</div>
              <div className="mt-1 text-sm text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
