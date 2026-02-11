
import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, TrendingDown, Map } from 'lucide-react';

const ValueProposition: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <span className="font-tech text-xs uppercase tracking-[0.4em] text-brand-blue mb-4 block font-bold">THE_UNFAIR_ADVANTAGE</span>
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter font-tight leading-[0.9] text-brand-slate mb-10">
              DIG DEEPER. <br /> <span className="text-brand-blue">SAVE MORE.</span>
            </h2>
            <p className="text-xl text-brand-slate/70 leading-relaxed mb-12 font-medium">
              Why pay retail? At McNic Holes, we’ve spent a decade streamlining the build process. By handling the precision digging and leveraging our preferred lumber partnerships, we remove the two biggest hurdles of your project: Labor and Material Costs.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-12">
              <div className="space-y-3 group">
                <div className="flex items-center gap-3 text-brand-blue">
                  <Award size={22} />
                  <span className="font-black uppercase tracking-widest text-sm text-brand-slate group-hover:text-brand-blue transition-colors">10+ Years Expertise</span>
                </div>
                <p className="text-sm text-brand-slate/50 leading-relaxed">A decade of structural certainty for deck and fence builds across Simcoe County.</p>
              </div>
              
              <div className="space-y-3 group">
                <div className="flex items-center gap-3 text-brand-blue">
                  <ShieldCheck size={22} />
                  <span className="font-black uppercase tracking-widest text-sm text-brand-slate group-hover:text-brand-blue transition-colors">Insured & Certified</span>
                </div>
                <p className="text-sm text-brand-slate/50 leading-relaxed">WSIB compliant and fully insured operations. We manage the risk so you don't have to.</p>
              </div>

              <div className="space-y-3 group">
                <div className="flex items-center gap-3 text-brand-blue">
                  <TrendingDown size={22} />
                  <span className="font-black uppercase tracking-widest text-sm text-brand-slate group-hover:text-brand-blue transition-colors">The 15% Edge</span>
                </div>
                <p className="text-sm text-brand-slate/50 leading-relaxed">Preferred industrial pricing on top-tier wood. Exclusive material savings for every client.</p>
              </div>

              <div className="space-y-3 group">
                <div className="flex items-center gap-3 text-brand-blue">
                  <Map size={22} />
                  <span className="font-black uppercase tracking-widest text-sm text-brand-slate group-hover:text-brand-blue transition-colors">Utility Precision</span>
                </div>
                <p className="text-sm text-brand-slate/50 leading-relaxed">Zero-risk digging protocol with full hydro, gas, and water line verification.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="excavated aspect-square bg-brand-slate/5 flex items-center justify-center p-12 border border-brand-slate/10 group overflow-hidden relative">
               <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                  <div className="grid-bg h-full w-full"></div>
               </div>
               <div className="text-center relative z-10">
                  <div className="font-tech text-7xl md:text-9xl font-black text-brand-blue mb-4 tracking-tighter">15%</div>
                  <div className="text-brand-slate font-black uppercase tracking-[0.3em] text-2xl">SAVINGS_VERIFIED</div>
                  <div className="h-[2px] w-24 bg-brand-blue mx-auto mt-10"></div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
