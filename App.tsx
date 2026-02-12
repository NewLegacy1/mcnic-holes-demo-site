
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
