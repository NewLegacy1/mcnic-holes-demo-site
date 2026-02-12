
import React from 'react';

interface BorderBeamButtonProps {
  text: string;
  href: string;
}

const BorderBeamButton: React.FC<BorderBeamButtonProps> = ({ text, href }) => {
  return (
    <a 
      href={href}
      className="relative group inline-flex items-center justify-center px-10 py-5 bg-brand-slate text-white font-black uppercase tracking-widest text-sm rounded-lg transition-all active:scale-95"
    >
      {/* Background fill animation */}
      <span className="absolute inset-0 bg-brand-blue scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-lg"></span>
      
      {/* The Text */}
      <span className="relative z-10 group-hover:text-brand-slate transition-colors duration-300">
        {text}
      </span>

      {/* Border Beam Effect */}
      <div className="absolute inset-0 pointer-events-none rounded-lg overflow-hidden border border-white/10 group-hover:border-brand-blue/30 transition-colors">
        <div className="beam"></div>
      </div>
    </a>
  );
};

export default BorderBeamButton;
