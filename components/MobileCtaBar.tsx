
import React from 'react';
import { Phone } from 'lucide-react';

const MobileCtaBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[90] md:hidden border-t border-white/10 bg-[#121212]">
      <div className="grid grid-cols-2">
        <a
          href="tel:7057967789"
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-zinc-200 border-r border-white/10"
        >
          <Phone size={16} className="text-brand-blue" />
          Call
        </a>
        <a
          href="#footer"
          className="flex items-center justify-center py-3.5 text-sm font-semibold bg-brand-blue text-[#0f172a]"
        >
          Get a quote
        </a>
      </div>
    </div>
  );
};

export default MobileCtaBar;
