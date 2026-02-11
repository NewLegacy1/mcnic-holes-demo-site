
import React from 'react';
import { motion } from 'framer-motion';

const MaterialAdvantage: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="heavy-card p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-10 border-l-8 border-l-brand-blue border-zinc-800"
        >
          <div className="flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left">
            <div className="font-tech text-6xl md:text-8xl font-black text-brand-blue tracking-tighter leading-none">15%</div>
            <div className="space-y-2">
              <h4 className="font-tech text-xs font-bold uppercase tracking-[0.4em] text-zinc-500">MATERIAL PRICING EDGE</h4>
              <p className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-tight">
                Lumber Reductions <br className="hidden md:block" /> & Site Delivery
              </p>
            </div>
          </div>
          
          <div className="lg:max-w-sm text-zinc-400 text-base leading-relaxed text-center lg:text-right border-t border-zinc-800 lg:border-t-0 pt-8 lg:pt-0">
            Active for all current season projects. We leverage industrial partnerships to bypass retail markups and deliver structural lumber directly to your build site.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MaterialAdvantage;
