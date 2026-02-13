
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-10 left-0 right-0 z-50 bg-brand-slate/90 backdrop-blur-md border-b-2 border-zinc-900 h-20 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img 
            src="https://static.wixstatic.com/media/2553e9_03c98aff8f384c50b3e8195286956762~mv2.png/v1/crop/x_21,y_0,w_1521,h_1563/fill/w_167,h_167,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/McNic-Holes-Logo-2025_edited.png" 
            alt="McNic Holes Logo" 
            className="h-10 md:h-12 w-auto"
          />
        </a>

        <nav className="hidden md:flex gap-10">
          <a href="#services" className="font-tech text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-brand-blue transition-colors">SERVICES</a>
          <a href="#safety" className="font-tech text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-brand-blue transition-colors">SITE CLEARANCE</a>
          <a href="#footer" className="font-tech text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-brand-blue transition-colors">GET A QUOTE</a>
        </nav>

        <div className="flex items-center gap-6">
          <div className="hidden lg:block h-8 w-[1px] bg-zinc-800"></div>
          <a 
            href="tel:7057967789"
            className="font-tech text-xs font-bold text-brand-blue tracking-tighter"
          >
            [705.796.7789]
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
