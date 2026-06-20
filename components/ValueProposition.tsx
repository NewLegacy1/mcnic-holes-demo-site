
import React from 'react';
import { Award, Map, ShieldCheck, TrendingDown } from 'lucide-react';
import SectionHeader from './SectionHeader';

const pillars = [
  {
    icon: Award,
    title: '10+ years experience',
    desc: 'Deck and fence builds across Simcoe County.',
  },
  {
    icon: ShieldCheck,
    title: 'Insured & certified',
    desc: 'WSIB compliant with full liability coverage.',
  },
  {
    icon: TrendingDown,
    title: '15% lumber savings',
    desc: 'Trade pricing on structural lumber, delivered to site.',
  },
  {
    icon: Map,
    title: 'Utility clearance',
    desc: 'Every dig starts with verified line locations.',
  },
];

const ValueProposition: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-6 bg-[#0e0e0e]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <SectionHeader
              label="Why McNic Holes"
              title="Quality work,"
              highlight="fair pricing."
              description="We handle the digging and the build, and pass lumber savings on to you through our supplier partnerships."
            />

            <div className="grid sm:grid-cols-2 gap-6">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="flex gap-3">
                  <div className="w-9 h-9 rounded-md bg-white/5 flex items-center justify-center shrink-0">
                    <pillar.icon size={18} className="text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{pillar.title}</h3>
                    <p className="mt-1 text-sm text-zinc-500 leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card p-10 md:p-12 text-center">
            <p className="text-sm font-semibold text-brand-blue mb-2">Material savings</p>
            <div className="text-7xl md:text-8xl font-bold text-brand-blue leading-none">15%</div>
            <p className="mt-4 text-base text-zinc-400 max-w-xs mx-auto leading-relaxed">
              Off structural lumber on active season projects, delivered straight to your build site.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
