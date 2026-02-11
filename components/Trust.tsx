import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Flame, Droplets, Waves, ShieldCheck } from 'lucide-react';

const utilities = [
  { name: "HYDRO", icon: Zap, angle: 45, color: "text-yellow-400" },
  { name: "GAS", icon: Flame, angle: 135, color: "text-orange-500" },
  { name: "WATER", icon: Droplets, angle: 225, color: "text-blue-400" },
  { name: "COMM", icon: Waves, angle: 315, color: "text-purple-400" },
];

const SafetyRadar: React.FC = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let frameId: number;
    const animate = () => {
      setRotation((prev) => (prev + 1.2) % 360);
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  // Beam points right at rotation=0. Icons are placed at util.angle, so highlight when beam angle matches.
  const isHighlighted = (angle: number) => {
    let diff = Math.abs(rotation - angle);
    if (diff > 180) diff = 360 - diff;
    return diff <= 18;
  };

  return (
    <section id="safety" className="py-20 lg:py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="p-8 lg:p-16 relative overflow-hidden rounded-xl bg-zinc-900/90 border border-zinc-800">
          <div className="relative z-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="w-14 h-14 bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center mb-8">
                <ShieldCheck className="text-brand-blue w-7 h-7" />
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold uppercase tracking-tight mb-6">
                ZERO RISK <br /> <span className="text-brand-blue">RADAR SCAN.</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                Our subterranean protocol requires total line verification. We don't break ground without a digital signature on every utility clearance.
              </p>
              <div className="space-y-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-blue" />
                  <span>WSIB certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-blue" />
                  <span>Liability insured</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-blue" />
                  <span>Ontario One Call partner</span>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center aspect-square min-h-[280px]">
              <div className="absolute inset-0 border-2 border-zinc-700 rounded-full" />
              <div className="absolute inset-[15%] border border-zinc-700/80 rounded-full" />
              <div className="absolute inset-[35%] border border-zinc-700/60 rounded-full" />
              <div className="absolute inset-[55%] border border-zinc-700/50 rounded-full" />

              <motion.div
                className="absolute inset-0 z-10"
                style={{ rotate: rotation }}
              >
                <div
                  className="absolute top-1/2 left-1/2 w-1/2 h-[2px] bg-gradient-to-r from-brand-blue to-transparent origin-left blur-[1px]"
                />
                <div
                  className="absolute top-1/2 left-1/2 w-1/2 h-full origin-left bg-brand-blue/10"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}
                />
              </motion.div>

              {utilities.map((util, i) => {
                const active = isHighlighted(util.angle);
                const rad = ((util.angle - 90) * Math.PI) / 180;
                const radius = 42;
                const x = Math.cos(rad) * radius;
                const y = Math.sin(rad) * radius;
                return (
                  <div
                    key={i}
                    className="absolute z-20 flex flex-col items-center gap-1"
                    style={{
                      left: `calc(50% + ${x}%)`,
                      top: `calc(50% + ${y}%)`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <motion.div
                      className={`flex flex-col items-center gap-1 ${active ? util.color : 'text-zinc-500'}`}
                      animate={{
                        scale: active ? 1.35 : 1,
                        opacity: active ? 1 : 0.4,
                      }}
                      transition={{ duration: 0 }}
                    >
                      <util.icon size={28} />
                      <span className="text-[9px] font-bold tracking-widest">{util.name}</span>
                    </motion.div>
                  </div>
                );
              })}

              <div className="w-4 h-4 bg-brand-blue rounded-full shadow-[0_0_30px_#38b6ff] relative z-30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyRadar;