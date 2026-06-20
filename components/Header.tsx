
import React, { useEffect, useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#safety', label: 'Site clearance' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#footer', label: 'Contact' },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
          scrolled ? 'bg-[#121212]/95 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          <a href="/" className="flex items-center shrink-0">
            <img
              src="https://static.wixstatic.com/media/2553e9_03c98aff8f384c50b3e8195286956762~mv2.png/v1/crop/x_21,y_0,w_1521,h_1563/fill/w_167,h_167,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/McNic-Holes-Logo-2025_edited.png"
              alt="McNic Holes"
              className="h-10 w-auto"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:7057967789"
              className="hidden sm:flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-white transition-colors"
            >
              <Phone size={16} />
              (705) 796-7789
            </a>
            <a href="#footer" className="hidden md:inline-flex btn-primary !py-2.5 !px-4 !text-sm">
              Get a quote
            </a>
            <button
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((open) => !open)}
              className="lg:hidden p-2 text-zinc-400 hover:text-white"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-black/70"
            onClick={() => setMenuOpen(false)}
          />
          <nav className="absolute top-16 left-0 right-0 bg-[#1a1a1a] border-b border-white/5 p-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-base font-medium text-zinc-300 hover:text-white rounded-md hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:7057967789"
              className="mt-2 btn-primary justify-center"
              onClick={() => setMenuOpen(false)}
            >
              <Phone size={16} />
              Call (705) 796-7789
            </a>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
