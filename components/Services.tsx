
import React from 'react';
import { ArrowRight, Box, Drill, Hammer, ShieldCheck } from 'lucide-react';
import SectionHeader from './SectionHeader';

const services = [
  {
    title: 'Post holes',
    icon: Drill,
    spec: 'Up to 48" deep',
    quoteValue: 'Post Holes Only',
    desc: 'Precision drilling for fences and deck supports. We handle rocky clay, frost, and dense fill.',
    image: 'https://static.wixstatic.com/media/cd139d_94ac0ead191745a3a12661c9af51161e~mv2.jpg/v1/fill/w_295,h_360,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2022-08-30(1).jpg',
  },
  {
    title: 'Deck piers',
    icon: Box,
    spec: 'Heavy-duty load',
    quoteValue: 'Deck Piers',
    desc: 'Concrete piers that resist frost heave and seasonal ground shift.',
    image: 'https://static.wixstatic.com/media/2553e9_1fbc454d137e4bb384138936bd403b66~mv2.jpeg/v1/crop/x_61,y_16,w_665,h_484/fill/w_295,h_360,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/In_ground_concrete_piers_webp-2.jpeg',
  },
  {
    title: 'Fence builds',
    icon: ShieldCheck,
    spec: 'Residential',
    quoteValue: 'Full Fence Installation',
    desc: 'Privacy wood, chain link, and more — straight, durable boundary lines.',
    image: 'https://static.wixstatic.com/media/2553e9_ec4ed1521fea45d3bdc2df74c15347b6~mv2.jpg/v1/fill/w_295,h_360,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/7aac78d3bb59437b538087a16c2c3bfa.jpg',
  },
  {
    title: 'Deck builds',
    icon: Hammer,
    spec: 'Simcoe standards',
    quoteValue: 'Deck Build',
    desc: 'Framing and finishing from the ground up, built to local code.',
    image: 'https://static.wixstatic.com/media/2553e9_9fbe75cf10ba4134a7f33df476289171~mv2.jpg/v1/fill/w_295,h_360,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/55a5b69689ca985e7518171a504f1daf.jpg',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Services"
          title="What we do"
          description="One crew handles the full job — from digging to building — so your project starts on solid ground."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <article
              key={service.title}
              className="surface-card overflow-hidden flex flex-col sm:flex-row group"
            >
              <div className="sm:w-[42%] relative min-h-[200px] sm:min-h-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              <div className="sm:w-[58%] p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <service.icon className="text-brand-blue" size={20} />
                    <span className="text-xs font-medium text-zinc-500">{service.spec}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{service.desc}</p>
                </div>
                <a
                  href={`#footer?service=${encodeURIComponent(service.quoteValue)}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:text-white transition-colors"
                >
                  Get a quote
                  <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
