
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SiteClearance from './components/SiteClearance';
import Services from './components/Services';
import MaterialAdvantage from './components/MaterialAdvantage';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-brand-slate selection:bg-brand-blue selection:text-brand-slate">
      <div className="sticky top-0 left-0 right-0 z-[100] bg-amber-500/95 text-amber-950 text-center py-2 px-4 text-sm font-medium">
        This is a Production Staging Environment. Sensitive client data has been scrubbed and replaced with placeholder content for internal review.
      </div>
      <Header />
      
      <main className="relative">
        <Hero />
        <SiteClearance />
        <Services />
        <MaterialAdvantage />
      </main>

      <Footer />
    </div>
  );
};

export default App;
