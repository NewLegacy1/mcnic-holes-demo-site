
import React, { useState, useEffect } from 'react';
import { motion, useSpring, useTransform, animate } from 'framer-motion';
import { Calculator, Ruler } from 'lucide-react';

const RollingNumber = ({ value }: { value: number }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(displayValue, value, {
      duration: 1,
      onUpdate: (latest) => setDisplayValue(Math.floor(latest))
    });
    return () => controls.stop();
  }, [value]);

  return <>{displayValue.toLocaleString()}</>;
};

const LumberCalculator: React.FC = () => {
  const [linearFeet, setLinearFeet] = useState(100);
  const estimatedSavings = Math.round(linearFeet * 28 * 0.15);
  
  // Calculate beam intensity based on savings percentage of a max theoretical value
  const beamIntensity = Math.min(estimatedSavings / 1500, 1);

  return (
    <section className="py-40 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="relative bg-black/40 border border-white/5 p-12 lg:p-24 backdrop-blur-xl rounded-lg overflow-hidden"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {/* Border Beam Logic */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
             <div 
              className="beam" 
              style={{ 
                filter: `blur(${1 + beamIntensity * 4}px)`,
                height: `${2 + beamIntensity * 2}px`,
                background: `linear-gradient(90deg, transparent, rgba(56, 182, 255, ${0.5 + beamIntensity * 0.5}), transparent)`
              }} 
            />
          </div>

          <div className="flex flex-col items-center text-center relative z-10">
            <span className="font-tech text-xs uppercase tracking-[0.5em] text-brand-blue mb-8 block font-bold">SAVINGS_ANALYZER_V1</span>
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter font-tight mb-10 leading-[0.85]">
              THE LUMBER <br /><span className="text-brand-blue italic">GAUGE.</span>
            </h2>
            
            <p className="text-white/50 text-xl mb-20 max-w-2xl font-medium">
              Industrial vertical integration means you stop paying retail markups. 
              Our 15% preferred pricing goes directly to your bottom line.
            </p>

            <div className="w-full max-w-3xl space-y-16">
              {/* Tape Measure UI */}
              <div className="space-y-6">
                <div className="flex justify-between font-tech text-[10px] font-bold uppercase tracking-widest text-white/30 px-2">
                  <span>INPUT_LINEAR_FT</span>
                  <span className="text-brand-blue">{linearFeet} FT_UNIT</span>
                </div>
                <div className="relative pt-6">
                   <div className="tape-measure rounded-sm shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                      <input 
                        type="range" 
                        min="10" 
                        max="500" 
                        step="10" 
                        value={linearFeet}
                        onChange={(e) => setLinearFeet(parseInt(e.target.value))}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                      />
                      <motion.div 
                        className="absolute inset-y-0 left-0 bg-brand-blue/20 border-r-2 border-brand-blue"
                        style={{ width: `${(linearFeet / 500) * 100}%` }}
                      >
                         <div className="absolute top-0 right-0 h-full w-[2px] bg-brand-blue shadow-[0_0_15px_#38b6ff]"></div>
                      </motion.div>
                   </div>
                </div>
              </div>

              {/* Result Terminal */}
              <div className="hole-depth py-16 px-10 border border-white/10 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-20"></div>
                
                <span className="font-tech text-[10px] uppercase text-white/30 tracking-[0.4em] mb-6 block font-bold">REAL_TIME_COST_REDUCTION</span>
                <div className="font-tech text-7xl md:text-9xl font-black text-white tracking-tighter">
                  $<span className="text-brand-blue"><RollingNumber value={estimatedSavings} /></span>
                </div>
                
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-10">
                  <div className="flex items-center gap-3">
                    <Ruler className="text-brand-blue w-5 h-5" />
                    <span className="font-tech text-[10px] font-bold uppercase tracking-widest text-white/40">Verified_Season_Rates</span>
                  </div>
                  <div className="h-px w-10 bg-white/10 hidden sm:block"></div>
                  <div className="flex items-center gap-3">
                    <Calculator className="text-brand-blue w-5 h-5" />
                    <span className="font-tech text-[10px] font-bold uppercase tracking-widest text-white/40">Simcoe_County_Market_Sync</span>
                  </div>
                </div>
              </div>

              <a 
                href="#footer" 
                className="group relative inline-flex items-center gap-6 py-6 px-16 bg-brand-slate text-white font-black uppercase tracking-[0.4em] text-xs hover:bg-brand-blue hover:text-brand-slate transition-all"
              >
                <div className="absolute inset-0 border border-white/20 scale-105 group-hover:scale-100 transition-transform"></div>
                LOCK IN SEASON PRICING
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                  →
                </motion.span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LumberCalculator;
