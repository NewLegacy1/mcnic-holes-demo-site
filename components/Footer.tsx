
import React, { useState } from 'react';
import { MapPin, Phone } from 'lucide-react';

const serviceOptions = [
  'Post Holes Only',
  'Deck Piers',
  'Full Fence Installation',
  'Deck Build',
];

const Footer: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <footer id="footer" className="py-16 md:py-24 px-6 border-t border-white/5 bg-[#0e0e0e]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <span className="section-label">Contact</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Get a free quote
            </h2>
            <p className="mt-4 text-base text-zinc-400 leading-relaxed max-w-md">
              Tell us about your project and we will get back to you within one business day.
            </p>

            <div className="mt-8 space-y-6">
              <a href="tel:7057967789" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-md bg-white/5 flex items-center justify-center">
                  <Phone size={20} className="text-brand-blue" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Call or text</p>
                  <p className="text-xl font-semibold group-hover:text-brand-blue transition-colors">
                    (705) 796-7789
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-3 text-sm text-zinc-500">
                <MapPin size={16} className="text-brand-blue shrink-0" />
                11 Vine Cres, Barrie, Ontario
              </div>
            </div>
          </div>

          <div className="surface-card p-6 md:p-8">
            {submitted ? (
              <div className="py-12 text-center">
                <h3 className="text-xl font-bold text-white mb-2">Thanks — we got your request</h3>
                <p className="text-sm text-zinc-500">We will be in touch within one business day.</p>
              </div>
            ) : (
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-1.5">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full bg-[#121212] border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-brand-blue transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact" className="block text-sm font-medium text-zinc-400 mb-1.5">
                      Phone or email
                    </label>
                    <input
                      id="contact"
                      name="contact"
                      type="text"
                      required
                      placeholder="How to reach you"
                      className="w-full bg-[#121212] border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-brand-blue transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-zinc-400 mb-1.5">
                      Work needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full bg-[#121212] border border-white/10 rounded-md px-4 py-3 text-sm text-white outline-none focus:border-brand-blue transition-colors"
                    >
                      {serviceOptions.map((option) => (
                        <option key={option} value={option} className="bg-[#121212]">
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="details" className="block text-sm font-medium text-zinc-400 mb-1.5">
                    Project details
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    placeholder="Number of holes, fence length, deck size..."
                    className="w-full bg-[#121212] border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-brand-blue transition-colors resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send request
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <img
              src="https://static.wixstatic.com/media/2553e9_03c98aff8f384c50b3e8195286956762~mv2.png/v1/crop/x_21,y_0,w_1521,h_1563/fill/w_167,h_167,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/McNic-Holes-Logo-2025_edited.png"
              alt="McNic Holes"
              className="h-8 w-auto opacity-40"
            />
            <span className="text-sm text-zinc-600">
              &copy; 2026 McNic Holes · Barrie, ON
            </span>
          </div>
          <div className="flex gap-6 text-sm text-zinc-500">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Instagram
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
