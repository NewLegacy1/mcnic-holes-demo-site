
import React from 'react';
import { motion } from 'framer-motion';
import { Drill, Hammer, ShieldCheck, Box } from 'lucide-react';

const services = [
  {
    title: "Post Holes",
    icon: Drill,
    spec: "DEPTH: 48 IN",
    desc: "Precision drilling for fences and deck supports. Our hydraulic augers handle rocky clay, frost, and dense fill to ensure your posts sit deep and stay straight.",
    image: "https://static.wixstatic.com/media/cd139d_94ac0ead191745a3a12661c9af51161e~mv2.jpg/v1/fill/w_295,h_360,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2022-08-30(1).jpg"
  },
  {
    title: "Deck Piers",
    icon: Box,
    spec: "LOAD: HEAVY DUTY",
    desc: "Engineered concrete piers for long-lasting deck support. We dig and set structural foundations that resist frost heave and seasonal ground shift.",
    image: "https://static.wixstatic.com/media/2553e9_1fbc454d137e4bb384138936bd403b66~mv2.jpeg/v1/crop/x_61,y_16,w_665,h_484/fill/w_295,h_360,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/In_ground_concrete_piers_webp-2.jpeg"
  },
  {
    title: "Fence Builds",
    icon: ShieldCheck,
    spec: "SCOPE: RESIDENTIAL",
    desc: "Complete fence installations from privacy wood to secure chain link. We build rugged, straight, and permanent boundary lines for your property.",
    image: "https://static.wixstatic.com/media/2553e9_ec4ed1521fea45d3bdc2df74c15347b6~mv2.jpg/v1/fill/w_295,h_360,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/7aac78d3bb59437b538087a16c2c3bfa.jpg"
  },
  {
    title: "Deck Decks",
    icon: Hammer,
    spec: "CODE: SIMCOE STANDARDS",
    desc: "Professional deck framing and finishing. We take your outdoor vision from the ground up, ensuring every beam and board is set to the highest trade standards.",
    image: "https://static.wixstatic.com/media/2553e9_9fbe75cf10ba4134a7f33df476289171~mv2.jpg/v1/fill/w_295,h_360,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/55a5b69689ca985e7518171a504f1daf.jpg"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-8 mb-20">
           <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter shrink-0">CORE SERVICES</h2>
           <div className="h-1 flex-1 bg-zinc-900"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="heavy-card group flex flex-col sm:flex-row overflow-hidden border-zinc-800"
            >
              <div className="sm:w-1/2 aspect-square sm:aspect-auto grayscale group-hover:grayscale-0 transition-all duration-500 overflow-hidden">
                 <img src={service.image} alt={service.title} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" />
              </div>
              <div className="sm:w-1/2 p-8 flex flex-col justify-between bolted-corner">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <service.icon className="text-brand-blue" size={24} />
                    <span className="font-tech text-[10px] font-bold bg-zinc-900 text-zinc-500 px-3 py-1 border border-zinc-800 uppercase tracking-widest">{service.spec}</span>
                  </div>
                  <h3 className="text-2xl font-black uppercase mb-4 tracking-tight group-hover:text-brand-blue transition-colors">{service.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
