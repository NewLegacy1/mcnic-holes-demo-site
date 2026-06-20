
import React, { useState, useEffect } from 'react';
import { animate } from 'framer-motion';
import SectionHeader from './SectionHeader';

const RollingNumber = ({ value }: { value: number }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 0.6,
      onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
    });
    return () => controls.stop();
  }, [value]);

  return <>{displayValue.toLocaleString()}</>;
};

const LumberCalculator: React.FC = () => {
  const [linearFeet, setLinearFeet] = useState(100);
  const estimatedSavings = Math.round(linearFeet * 28 * 0.15);

  return (
    <section id="pricing" className="py-16 md:py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          label="Pricing"
          title="Estimate your"
          highlight="lumber savings"
          description="Drag the slider to see what our 15% trade pricing could save on your project."
          align="center"
        />

        <div className="surface-card p-6 md:p-10 space-y-8">
          <div>
            <div className="flex justify-between text-sm mb-3">
              <span className="text-zinc-500">Linear feet of lumber</span>
              <span className="font-semibold text-white">{linearFeet} ft</span>
            </div>
            <div className="tape-measure">
              <input
                type="range"
                min="10"
                max="500"
                step="10"
                value={linearFeet}
                onChange={(e) => setLinearFeet(parseInt(e.target.value, 10))}
                aria-label="Linear feet of lumber"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              <div
                className="absolute inset-y-0 left-0 bg-brand-blue/20 rounded-l-md"
                style={{ width: `${(linearFeet / 500) * 100}%` }}
              />
            </div>
          </div>

          <div className="text-center py-8 border-t border-white/5">
            <p className="text-sm text-zinc-500 mb-2">Estimated savings this season</p>
            <p className="text-5xl md:text-6xl font-bold text-white">
              $<span className="text-brand-blue"><RollingNumber value={estimatedSavings} /></span>
            </p>
          </div>

          <div className="text-center">
            <a href="#footer" className="btn-primary">
              Get a quote with season pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LumberCalculator;
