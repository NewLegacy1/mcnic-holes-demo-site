
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Droplets, Flame, Waves, Zap } from 'lucide-react';
import SectionHeader from './SectionHeader';

const utilities = [
  { name: 'Hydro', icon: Zap, angle: 45, color: '#facc15' },
  { name: 'Gas', icon: Flame, angle: 135, color: '#f97316' },
  { name: 'Water', icon: Droplets, angle: 225, color: '#60a5fa' },
  { name: 'Telecom', icon: Waves, angle: 315, color: '#c084fc' },
];

const checklist = [
  'Ontario One Call clearance before every dig',
  'Hydro, gas, water and telecom lines mapped',
  'WSIB certified crews on site',
  'Full liability coverage on your property',
];

const SiteClearance: React.FC = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    let frameId: number;
    const animate = () => {
      setRotation((prev) => (prev + 0.35) % 360);
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const getProximity = (targetAngle: number) => {
    let diff = Math.abs(rotation - targetAngle);
    if (diff > 180) diff = 360 - diff;
    return Math.max(0, 1 - diff / 30);
  };

  return (
    <section id="safety" className="py-16 md:py-24 px-6 bg-[#0e0e0e]">
      <div className="max-w-7xl mx-auto">
        <div className="surface-card p-6 md:p-10 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <SectionHeader
                label="Site clearance"
                title="We locate utilities"
                highlight="before we dig."
                description="Every project starts with a utility scan. No surprises, no damage to lines under your property."
              />

              <ul className="space-y-3">
                {checklist.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-zinc-400">
                    <CheckCircle2 size={18} className="text-brand-blue shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative flex items-center justify-center aspect-square max-w-[340px] mx-auto w-full">
              <div className="absolute inset-0 rounded-full border border-white/10" />
              <div className="absolute inset-[20%] rounded-full border border-white/[0.06]" />
              <div className="absolute inset-[40%] rounded-full border border-white/[0.06]" />
              <div className="absolute inset-[60%] rounded-full border border-white/[0.06]" />

              <div
                className="absolute inset-0 rounded-full overflow-hidden"
                style={{ transform: `rotate(${rotation}deg)` }}
              >
                <div className="absolute top-0 left-1/2 w-px h-1/2 bg-brand-blue/80 -translate-x-1/2" />
              </div>

              <div className="w-2.5 h-2.5 bg-brand-blue rounded-full relative z-10" />

              {utilities.map((util) => {
                const proximity = getProximity(util.angle);
                const radius = 120;
                const rad = (util.angle - 90) * (Math.PI / 180);
                const x = Math.cos(rad) * radius;
                const y = Math.sin(rad) * radius;

                return (
                  <div
                    key={util.name}
                    className="absolute z-20 flex flex-col items-center"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <motion.div
                      animate={{
                        scale: 1 + proximity * 0.2,
                        color: proximity > 0.3 ? util.color : '#71717a',
                        opacity: 0.35 + proximity * 0.65,
                      }}
                      transition={{ duration: 0.05 }}
                      className="flex flex-col items-center gap-1"
                    >
                      <util.icon className="w-6 h-6" />
                      <span className="text-xs font-medium">{util.name}</span>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiteClearance;
