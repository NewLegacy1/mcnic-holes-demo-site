
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SiteClearance from './components/SiteClearance';
import Services from './components/Services';
import ValueProposition from './components/ValueProposition';
import LumberCalculator from './components/LumberCalculator';
import Footer from './components/Footer';
import MobileCtaBar from './components/MobileCtaBar';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-brand-slate selection:bg-brand-blue selection:text-[#0f172a]">
      <Header />

      <main>
        <Hero />
        <SiteClearance />
        <Services />
        <ValueProposition />
        <LumberCalculator />
      </main>

      <Footer />
      <MobileCtaBar />
      <div className="h-14 md:hidden" aria-hidden="true" />
    </div>
  );
};

export default App;
