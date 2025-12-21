
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Benefits from './components/Benefits';
import AboutAuthor from './components/AboutAuthor';
import Testimonials from './components/Testimonials';
import ContentPreview from './components/ContentPreview';
import Bonuses from './components/Bonuses';
import Guarantee from './components/Guarantee';
import CTAFinal from './components/CTAFinal';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ExitPopup from './components/ExitPopup';

const App: React.FC = () => {
  const [showExitPopup, setShowExitPopup] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 0 && !sessionStorage.getItem('exit-popup-shown')) {
        setShowExitPopup(true);
        sessionStorage.setItem('exit-popup-shown', 'true');
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  return (
    <div className="relative overflow-hidden selection:bg-amber-500/30">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Benefits />
        <Testimonials />
        <ContentPreview />
        <AboutAuthor />
        <Bonuses />
        <Guarantee />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      {showExitPopup && <ExitPopup onClose={() => setShowExitPopup(false)} />}
    </div>
  );
};

export default App;
