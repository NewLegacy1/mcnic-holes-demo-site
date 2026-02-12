
import React from 'react';
import { motion } from 'framer-motion';
import { Drill } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 min-h-[90vh] flex flex-col items-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Grid layout for Desktop | Flex column for Mobile */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-20">
          
          {/* 1. Image - Left side on desktop (lg:order-1), Second on mobile (order-2) */}
          <motion.div
            className="lg:col-span-5 lg:row-span-2 order-2 lg:order-1 relative mt-4 lg:mt-0 w-full"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.3 }}
          >
            <div className="relative border-8 border-zinc-900 bg-zinc-900 p-2 shadow-2xl">
              <div className="aspect-video md:aspect-[4/5] overflow-hidden brightness-100 contrast-100">
                <img 
                  src="https://static.wixstatic.com/media/2553e9_555cec11f90a4b36b91e6ff9ce0327a9~mv2.avif/v1/fill/w_674,h_701,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_0179_compressed.avif" 
                  alt="McNic Holes Heavy Machinery"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-brand-blue/30 flex items-center justify-center pointer-events-none">
                  <div className="w-1 h-1 bg-brand-blue"></div>
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-brand-blue"></div>
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-brand-blue"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-brand-blue"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-brand-blue"></div>
              </div>
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-blue/5 border border-brand-blue/10 -z-10"></div>
          </motion.div>

          {/* 2. Headline - Top Right on desktop (lg:order-2), First on mobile (order-1) */}
          <motion.div
            className="lg:col-span-7 order-1 lg:order-2"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.1 }}
          >
            <div className="accent-line mb-8"></div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.95]">
              POST HOLE, FENCE & DECK. <br /> <span className="text-brand-blue">BUILT TO LAST.</span>
            </h1>
          </motion.div>

          {/* 3. Intro Text & Buttons - Bottom Right on desktop (lg:order-3), Third on mobile (order-3) */}
          <motion.div 
            className="lg:col-span-7 order-3 lg:order-3 mt-8 lg:mt-0"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="space-y-8 max-w-xl mb-12">
              <p className="text-lg md:text-xl text-zinc-400 font-medium leading-relaxed">
                McNic Holes provides Barrie and Simcoe County with professional-grade post hole digging, deck piers, and complete fence installations. 
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#footer"
                className="bg-brand-blue text-brand-slate px-10 py-5 font-black uppercase tracking-widest text-xs hover:bg-white transition-all flex items-center gap-3"
              >
                <Drill size={16} /> BOOK A SITE VISIT
              </a>
              <div className="embossed-tag px-8 py-5 flex items-center gap-4">
                 <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                 <span className="font-tech text-[10px] font-bold uppercase tracking-widest text-zinc-500">CREWS ACTIVE IN SIMCOE</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4. Compliance & Protection Row - Bottom of Hero, Side-by-Side on Mobile */}
        <motion.div 
          className="grid grid-cols-2 gap-3 md:gap-6 lg:gap-10 relative z-20"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="p-4 md:p-8 bg-zinc-900/40 border-2 border-zinc-800 hover:border-brand-blue transition-colors duration-500 rounded-sm backdrop-blur-sm group">
             <div className="font-tech text-[8px] md:text-[10px] font-bold text-brand-blue mb-1 md:mb-2 tracking-[0.1em] md:tracking-[0.2em]">OPERATIONAL COMPLIANCE</div>
             <div className="font-black text-sm md:text-2xl uppercase tracking-tighter text-zinc-200">WSIB CERTIFIED</div>
             <div className="mt-2 md:mt-4 text-zinc-500 text-[10px] md:text-sm leading-relaxed hidden sm:block">Valid standing for all active project sites in Simcoe County. Guaranteed workplace safety compliance.</div>
          </div>
          <div className="p-4 md:p-8 bg-zinc-900/40 border-2 border-zinc-800 hover:border-brand-blue transition-colors duration-500 rounded-sm backdrop-blur-sm group">
             <div className="font-tech text-[8px] md:text-[10px] font-bold text-brand-blue mb-1 md:mb-2 tracking-[0.1em] md:tracking-[0.2em]">PROPERTY PROTECTION</div>
             <div className="font-black text-sm md:text-2xl uppercase tracking-tighter text-zinc-200">FULLY INSURED</div>
             <div className="mt-2 md:mt-4 text-zinc-500 text-[10px] md:text-sm leading-relaxed hidden sm:block">Comprehensive liability coverage ($2M+) including subterranean excavation and property protection.</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
