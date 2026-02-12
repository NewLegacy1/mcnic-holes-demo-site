
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Flame, Droplets, Waves, ShieldCheck } from 'lucide-react';

const utilities = [
  { name: "HYDRO", icon: Zap, angle: 45, color: "#facc15", sub: "ELECTRICAL LINES" },
  { name: "GAS", icon: Flame, angle: 135, color: "#f97316", sub: "NATURAL GAS" },
  { name: "WATER", icon: Droplets, angle: 225, color: "#60a5fa", sub: "WATER & SEWER" },
  { name: "COMM", icon: Waves, angle: 315, color: "#c084fc", sub: "TELECOM & FIBER" },
];

const SiteClearance: React.FC = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let frameId: number;
    const animate = () => {
      // 0.5 degrees per frame provides a steady, readable scan speed
      setRotation(prev => (prev + 0.5) % 360);
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const getProximity = (targetAngle: number) => {
    // Both sweep and icons use 0° = Top
    let diff = Math.abs(rotation - targetAngle);
    if (diff > 180) diff = 360 - diff;
    // Decays quickly to highlight only when the beam is close
    return Math.max(0, 1 - diff / 25); 
  };

  return (
    <section id="safety" className="py-40 px-6 border-y-2 border-zinc-900 bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto">
        <div className="heavy-card p-12 lg:p-24 relative overflow-hidden bg-black/60 border-zinc-800">
          <div className="relative z-20 grid lg:grid-cols-2 gap-24 items-center">
            
            <div>
              <div className="flex items-center gap-4 mb-8">
                <ShieldCheck className="text-brand-blue w-8 h-8" />
                <span className="font-tech text-xs font-bold text-brand-blue uppercase tracking-[0.4em]">SAFETY FIRST</span>
              </div>
              <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter mb-8 leading-tight">
                ZERO RISK <br /> <span className="text-brand-blue">RADAR SCAN.</span>
              </h2>
              <p className="text-zinc-400 text-xl leading-relaxed mb-12 font-medium">
                We take safety seriously. Before we ever unload a drill, we map out every underground utility to ensure a clean, safe, and professional job site.
              </p>
            </div>

            <div className="relative flex items-center justify-center aspect-square max-w-[500px] mx-auto w-full">
               {/* Radar Visual Rings */}
               <div className="absolute inset-0 border border-zinc-800 rounded-full"></div>
               <div className="absolute inset-[20%] border border-zinc-800/50 rounded-full"></div>
               <div className="absolute inset-[40%] border border-zinc-800/50 rounded-full"></div>
               <div className="absolute inset-[60%] border border-zinc-800/50 rounded-full"></div>
               
               {/* Refined Radar Sweep Component: Just the Leading Beam */}
               <div 
                 className="absolute inset-0 z-10 rounded-full overflow-hidden"
                 style={{ 
                   transform: `rotate(${rotation}deg)`,
                 }}
               >
                 {/* Leading Edge Beam */}
                 <div className="absolute top-0 left-1/2 w-[2px] h-1/2 bg-brand-blue -translate-x-1/2 shadow-[0_0_20px_rgba(56,182,255,1)] blur-[0.5px]"></div>
               </div>

               {/* Center Hub */}
               <div className="w-4 h-4 bg-brand-blue rounded-full shadow-[0_0_30px_#38b6ff] relative z-30"></div>

               {/* Utility Icons placed with 0° = Top */}
               {utilities.map((util, i) => {
                 const proximity = getProximity(util.angle);
                 const radius = 180; // Distance from center for placement
                 
                 // Standard conversion: 0° is Right in math, so subtract 90 to make 0° = Top
                 const rad = (util.angle - 90) * (Math.PI / 180);
                 const x = Math.cos(rad) * radius;
                 const y = Math.sin(rad) * radius;

                 return (
                   <div
                     key={i}
                     className="absolute z-20 flex flex-col items-center gap-2"
                     style={{
                       left: `calc(50% + ${x}px)`,
                       top: `calc(50% + ${y}px)`,
                       transform: 'translate(-50%, -50%)'
                     }}
                   >
                     <motion.div
                        // Near-instant transitions (50ms) to feel synchronized with the rotation
                        animate={{ 
                          scale: 1 + (proximity * 0.4),
                          color: proximity > 0.4 ? util.color : '#3f3f46',
                          filter: proximity > 0.7 ? `drop-shadow(0 0 8px ${util.color})` : 'none',
                          opacity: 0.2 + (proximity * 0.8)
                        }}
                        transition={{ duration: 0.05 }}
                        className="flex flex-col items-center gap-1"
                     >
                        <util.icon className="w-8 h-8 md:w-10 md:h-10" />
                        <span className="font-tech text-[10px] font-bold tracking-widest whitespace-nowrap">
                          {util.name}
                        </span>
                        <motion.span 
                          animate={{ 
                            opacity: proximity > 0.6 ? 1 : 0,
                            y: proximity > 0.6 ? 0 : 4
                          }}
                          transition={{ duration: 0.05 }}
                          className="font-tech text-[8px] text-zinc-500 font-bold tracking-widest hidden md:block"
                        >
                          {util.sub}
                        </motion.span>
                     </motion.div>
                   </div>
                 );
               })}
            </div>
          </div>
          
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/p6.png')]"></div>
        </div>
      </div>
    </section>
  );
};

export default SiteClearance;
