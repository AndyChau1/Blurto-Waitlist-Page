import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Founder } from './components/Founder';
import { EmailCapture } from './components/EmailCapture';
import { FAQ } from './components/FAQ';
import Lenis from 'lenis';
import { FormProvider } from './context/FormContext';

// Simple sticky header component
const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-stone-100 py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-6xl mx-auto px-6 flex justify-center items-center">
                {/* Changed: text-2xl -> text-3xl for larger logo size */}
                <a href="#" className="font-serif font-semibold text-3xl tracking-tight text-stone-900 hover:text-orange-600 transition-colors duration-300">
                    Blurto
                </a>
            </div>
        </nav>
    );
};

const App: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <FormProvider>
        <div className="min-h-screen bg-stone-50 selection:bg-orange-100 selection:text-orange-900 font-sans">
        <Header />
        <main>
            {/* Hero now includes the Problem section content */}
            <Hero />
            <Features />
            <Founder />
            <FAQ />
            <EmailCapture />
        </main>
        
        <footer className="bg-black py-12 text-center text-stone-600 text-sm border-t border-stone-900">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-4">
                <div>© {new Date().getFullYear()} Blurto. All rights reserved.</div>
            </div>
        </footer>
        </div>
    </FormProvider>
  );
};

export default App;