
import React from 'react';
import { Terminal, Phone, MapPin, Mail, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-brand-slate text-white pt-40 pb-16 px-6 relative border-t-4 border-zinc-900 overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 mb-32">
          
          <div>
            <div className="flex items-center gap-4 mb-10">
              <Terminal size={24} className="text-brand-blue" />
              <span className="font-tech text-xs font-bold text-brand-blue uppercase tracking-[0.5em]">PROJECT REQUEST</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] mb-12">
              REQUEST <br /> YOUR <br /> <span className="text-brand-blue italic">QUOTE.</span>
            </h2>
            
            <div className="space-y-12">
              <a href="tel:7057967789" className="group flex items-center gap-8">
                <div className="w-20 h-20 embossed-tag flex items-center justify-center rounded-sm transition-all group-hover:border-brand-blue">
                   <Phone size={28} className="text-brand-blue" />
                </div>
                <div className="flex flex-col">
                  <span className="font-tech text-[10px] text-zinc-600 font-bold uppercase tracking-[0.4em]">CALL OR TEXT</span>
                  <span className="text-3xl md:text-4xl font-black tracking-tighter group-hover:text-brand-blue transition-colors font-tech">(705) 796-7789</span>
                </div>
              </a>
              
              <div className="flex items-center gap-6 text-zinc-500 font-tech text-xs font-bold uppercase tracking-widest">
                <MapPin size={16} /> 11 VINE CRES, BARRIE, ONTARIO
              </div>
            </div>
          </div>

          <div className="heavy-card p-12 bg-[#121212] border-zinc-800">
             <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
               <div className="space-y-4">
                 <label className="block font-tech text-[10px] text-zinc-600 uppercase font-bold tracking-widest">Name</label>
                 <input 
                  type="text" 
                  placeholder="Your Full Name" 
                  className="w-full bg-brand-slate border-2 border-zinc-800 p-6 font-tech text-xs text-white placeholder:text-zinc-800 outline-none focus:border-brand-blue transition-colors"
                 />
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                 <div className="space-y-4">
                    <label className="block font-tech text-[10px] text-zinc-600 uppercase font-bold tracking-widest">Phone or Email</label>
                    <input 
                      type="text" 
                      placeholder="How to reach you" 
                      className="w-full bg-brand-slate border-2 border-zinc-800 p-6 font-tech text-xs text-white placeholder:text-zinc-800 outline-none focus:border-brand-blue transition-colors"
                    />
                 </div>
                 <div className="space-y-4">
                    <label className="block font-tech text-[10px] text-zinc-600 uppercase font-bold tracking-widest">Work Needed</label>
                    <div className="relative">
                      <select className="w-full bg-brand-slate border-2 border-zinc-800 p-6 font-tech text-xs text-white outline-none focus:border-brand-blue transition-colors appearance-none cursor-pointer">
                        <option className="bg-brand-slate">Post Holes Only</option>
                        <option className="bg-brand-slate">Deck Piers</option>
                        <option className="bg-brand-slate">Full Fence Installation</option>
                        <option className="bg-brand-slate">Deck Build</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                        <ArrowRight size={14} className="rotate-90 text-zinc-600" />
                      </div>
                    </div>
                 </div>
               </div>

               <div className="space-y-4">
                 <label className="block font-tech text-[10px] text-zinc-600 uppercase font-bold tracking-widest">Tell us about your project</label>
                 <textarea 
                  rows={4}
                  placeholder="Number of holes, length of fence, deck size, etc." 
                  className="w-full bg-brand-slate border-2 border-zinc-800 p-6 font-tech text-xs text-white placeholder:text-zinc-800 outline-none focus:border-brand-blue transition-colors"
                 ></textarea>
               </div>

               <button className="w-full bg-brand-blue text-brand-slate py-8 font-black uppercase tracking-[0.5em] text-xs flex items-center justify-center gap-4 hover:bg-white transition-all">
                  SUBMIT QUOTE REQUEST <ArrowRight size={18} />
               </button>
             </form>
          </div>

        </div>

        <div className="pt-20 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-8">
             <img 
               src="https://static.wixstatic.com/media/2553e9_03c98aff8f384c50b3e8195286956762~mv2.png/v1/crop/x_21,y_0,w_1521,h_1563/fill/w_167,h_167,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/McNic-Holes-Logo-2025_edited.png" 
               alt="Footer Logo" 
               className="h-10 w-auto grayscale opacity-20"
             />
             <div className="font-tech text-[9px] text-zinc-700 font-bold uppercase tracking-[0.4em]">
                &copy; 2025 MCNIC HOLES PRECISION OPERATIONS. BARRIE ON.
             </div>
          </div>
          
          <div className="flex gap-12 font-tech text-[10px] text-zinc-600 font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-brand-blue transition-colors">INSTAGRAM</a>
            <a href="#" className="hover:text-brand-blue transition-colors">FACEBOOK</a>
          </div>
        </div>
      </div>

      {/* Background Stamped Text */}
      <div className="absolute top-1/2 left-0 w-full overflow-hidden pointer-events-none opacity-[0.02] -translate-y-1/2 select-none">
        <span className="text-[30vw] font-black uppercase whitespace-nowrap tracking-tighter leading-none">
          SECURE GROUND
        </span>
      </div>
    </footer>
  );
};

export default Footer;
