import React, { useState } from 'react';
import { PhoneMockup } from './ui/PhoneMockup';
import { Check, Loader2, Sun, ArrowRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from './ui/FadeIn';
import { useForm } from '../context/FormContext';

export const Hero: React.FC = () => {
    const { status, submitForm } = useForm();
    const [email, setEmail] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await submitForm(email);
    };

  return (
    // Merged Section: Hero + Problem
    <section id="hero" className="relative pt-28 px-6 md:pt-36 pb-0 overflow-hidden">
        {/* 1. Creative Global Background: "Sunrise" Effect with Breathing Animation */}
        <div className="absolute top-0 left-0 w-full h-full -z-20 pointer-events-none">
            {/* Main top warm wash - Continuous organic breathing loop */}
            {/* Fix: changed h-[1600px] to min-h-[1600px] h-[140%] to ensure coverage on mobile */}
            <motion.div 
                animate={{
                    scale: [1.0, 1.1, 1.0], // Subtle expansion
                    opacity: [0.5, 0.65, 0.5], // Gentle pulsating opacity
                }}
                transition={{
                    duration: 12, // Slow 12s loop
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[160vw] min-h-[1600px] h-[140%] bg-[radial-gradient(ellipse_at_center,rgba(255,214,170,1)_0%,rgba(255,240,220,0.8)_40%,transparent_80%)] blur-[80px]" 
            />
            
            {/* Subtle vibrant streak - Secondary atmospheric layer */}
            <motion.div 
                animate={{
                    scale: [1, 1.15, 1],
                    rotate: [-5, 5, -5],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[80vw] h-[800px] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(255,255,255,0)_0deg,rgba(255,200,100,0.4)_180deg,rgba(255,255,255,0)_360deg)] blur-[100px] mix-blend-overlay" 
            />
        </div>

      {/* Hero Content - Z-Index bumped to 30 to stay above phone blooms */}
      <div className="max-w-5xl mx-auto text-center mb-0 relative z-30">
        <FadeIn delay={0}>
            <span className="inline-block py-1 px-3 rounded-full bg-orange-50/50 border border-orange-100/80 text-orange-700 text-xs font-bold tracking-wide uppercase mb-8 backdrop-blur-md shadow-sm">
            Resolution, not organization
            </span>
        </FadeIn>
        
        {/* 2. Headline Formatting: Strict 2 lines max */}
        <FadeIn delay={0.2}>
            {/* Mobile: clamp font size to ensure 2 lines. Desktop: large text. */}
            <h1 className="text-[clamp(2rem,9vw,3.5rem)] md:text-7xl lg:text-8xl font-semibold tracking-tight text-stone-950 leading-[1.1] md:leading-[1.05]">
            Your ideas don’t need <br />
            better organization.
            </h1>
        </FadeIn>

        {/* 3. Increased spacing before subheadline (The "Pause") - Staggered delay increased to 0.8s */}
        <FadeIn delay={0.8}>
            <div className="mt-10 md:mt-12 mb-10 text-3xl md:text-6xl lg:text-7xl px-2">
                <span className="text-stone-400 font-serif italic">
                    They need <span className="text-orange-600 relative inline-block">resolution<span className="absolute bottom-1 md:bottom-2 left-0 w-full h-[0.1em] bg-orange-200/40 -z-10 skew-x-12"></span></span>.
                </span>
            </div>
        </FadeIn>

        <FadeIn delay={1.0}>
            <p className="text-lg md:text-2xl text-stone-500 max-w-4xl mx-auto mb-12 leading-relaxed font-light px-4">
            Blurto helps you capture a thought, decide what to do with it, and move on.
            </p>
        </FadeIn>

        {/* Hero Email Capture */}
        <FadeIn delay={1.2}>
             <div className="max-w-md mx-auto relative z-30 min-h-[100px] flex flex-col justify-center"> 
                <AnimatePresence mode="wait">
                    {status === 'success' ? (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center w-full"
                        >
                             <p className="text-stone-700 font-serif italic text-lg md:text-xl leading-relaxed">
                                Thank you for joining the waitlist! <br />
                                We’ll notify you as soon as we release. If you know someone else who would be interested, please share this website with them.
                            </p>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="form"
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <form onSubmit={handleSubmit} className="flex p-1.5 bg-white border border-stone-200 rounded-full shadow-xl shadow-orange-900/5 group hover:border-orange-300 hover:shadow-orange-900/10 transition-all duration-300 focus-within:ring-2 focus-within:ring-orange-400/50 focus-within:border-transparent">
                                <input 
                                    type="email" 
                                    placeholder="your@email.com" 
                                    className="flex-1 bg-transparent px-5 py-3 text-stone-900 placeholder-stone-400 outline-none min-w-0 text-lg"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={status === 'loading'}
                                />
                                <button 
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="bg-stone-900 text-white px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 disabled:opacity-70 flex items-center gap-2 whitespace-nowrap hover:bg-orange-600 hover:text-white hover:shadow-[0_0_20px_-5px_rgba(249,115,22,0.5)] border border-transparent"
                                >
                                    {status === 'loading' ? <Loader2 className="animate-spin" size={16} /> : 'Join waitlist'}
                                </button>
                            </form>
                            <p className="mt-3 text-xs text-stone-400">Limited spots available for early access.</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </FadeIn>
      </div>

      {/* Phone Showcase - Z-Index 20 (Below text, above background) */}
      <div className="relative w-full max-w-6xl mx-auto z-20 mt-20 md:mt-24">
        
        {/* Background glow */}
        {/* Fixed: Height increased for mobile stacked view */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] md:w-[3000px] h-[2200px] md:h-[850px] -z-10 pointer-events-none">
             <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(251,146,60,1)_0%,rgba(249,115,22,1)_25%,rgba(253,186,116,0.8)_50%,transparent_80%)] blur-[120px]" />
        </div>

        {/* Phone Container */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-end gap-24 md:gap-8 relative">
            
            {/* Phone 1: CAPTURE */}
            <div className="relative group">
                <PhoneMockup delay={1.4} className="origin-center md:origin-bottom scale-100 md:scale-95">
                    <div className="h-full flex flex-col bg-stone-950 font-sans text-white relative">
                        <div className="h-14 w-full"></div>

                        <div className="flex-1 flex flex-col px-6 pt-12">
                             <div className="flex items-center gap-2 mb-8 opacity-50">
                                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                                <span className="text-xs font-medium tracking-widest uppercase text-stone-300">Recording</span>
                             </div>

                             <h2 className="text-3xl font-serif text-white leading-tight mb-2">
                                "Start a newsletter about sustainable..."
                             </h2>
                             
                             <div className="flex gap-1.5 items-center h-16 mt-8">
                                {[...Array(16)].map((_, i) => (
                                    <motion.div 
                                        key={i}
                                        animate={{ height: [12, 48, 12] }}
                                        transition={{ 
                                            repeat: Infinity, 
                                            duration: 1.2, 
                                            delay: i * 0.05,
                                            ease: "easeInOut" 
                                        }}
                                        className={`w-1.5 rounded-full ${i > 10 ? 'bg-stone-700' : 'bg-orange-500'}`}
                                    />
                                ))}
                             </div>
                        </div>

                        <div className="p-6 pb-20">
                            <div className="flex justify-center">
                                <div className="w-16 h-16 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center text-white shadow-lg">
                                    <div className="w-6 h-6 bg-white rounded-sm" />
                                </div>
                            </div>
                        </div>
                    </div>
                </PhoneMockup>
            </div>

            {/* Phone 2: RESOLVE (Animated Swipe) */}
            <div className="relative group z-20 md:-mb-12">
                <PhoneMockup delay={1.4} className="origin-center md:origin-bottom scale-100">
                    <div className="h-full flex flex-col bg-stone-950 font-sans relative text-white">
                        <div className="h-14 w-full"></div>

                        <div className="px-6 py-2 flex justify-between items-center mb-4">
                            <div className="text-white font-semibold">Decide</div>
                            <div className="text-stone-500 text-sm">2 left</div>
                        </div>

                        <div className="flex-1 px-4 flex flex-col justify-end pb-8 relative">
                             {/* Background Card */}
                             <div className="absolute top-8 left-6 right-6 bottom-16 bg-stone-800 rounded-[2rem] shadow-sm border border-stone-700/50 scale-95 opacity-50 -z-10 transform translate-y-4"></div>

                             {/* Foreground Card - Animated */}
                             <motion.div 
                                animate={{
                                    x: [0, 0, 320, 320, 0, 0], 
                                    opacity: [1, 1, 0, 0, 0, 1],
                                    rotate: [0, 0, 8, 8, 0, 0],
                                    scale: [1, 1, 1, 1, 0.95, 1]
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    times: [0, 0.4, 0.48, 0.55, 0.6, 0.68], // Swipe roughly at 2.4s - 2.9s
                                    ease: "easeInOut"
                                }}
                                className="bg-stone-900 rounded-[2rem] shadow-2xl shadow-black/50 border border-stone-800 flex flex-col overflow-hidden h-[440px] origin-bottom-left"
                             >
                                <div className="p-8 flex-1 flex flex-col">
                                    <div className="flex-1">
                                        <div className="inline-block px-3 py-1 bg-orange-500/10 text-orange-400 border border-orange-500/20 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                                            Idea
                                        </div>
                                        <h3 className="text-3xl font-serif text-white leading-tight mb-4">
                                            Architecture Newsletter
                                        </h3>
                                        <p className="text-stone-400 leading-relaxed">
                                            Weekly digest on sustainable materials. Focus on embodied carbon.
                                        </p>
                                    </div>
                                </div>

                                <div className="p-4 grid grid-cols-2 gap-3 bg-stone-900 border-t border-stone-800">
                                    <button className="h-16 rounded-2xl bg-stone-950 border border-stone-800 text-stone-500 flex items-center justify-center hover:bg-stone-800 hover:text-white transition-colors">
                                        <X size={28} />
                                    </button>
                                    <button className="h-16 rounded-2xl bg-white text-stone-950 flex items-center justify-center gap-2 shadow-lg shadow-white/5 hover:bg-stone-200">
                                        <span className="font-medium">Act</span>
                                        <ArrowRight size={20} />
                                    </button>
                                </div>
                             </motion.div>
                        </div>
                    </div>
                </PhoneMockup>
            </div>

            {/* Phone 3: CLARITY (Pulsing Glow) */}
            <div className="relative group z-10">
                <PhoneMockup delay={1.4} className="origin-center md:origin-bottom scale-100 md:scale-95">
                    <div className="h-full flex flex-col bg-stone-950 font-sans relative">
                         <div className="h-14 w-full"></div>

                        <div className="flex-1 flex flex-col items-center justify-center pb-20">
                            <motion.div 
                                // Base shadow: shadow-2xl shadow-orange-500/20 -> 0 25px 50px -12px rgba(249,115,22,0.2)
                                animate={{
                                    scale: [1, 1, 1.15, 1],
                                    boxShadow: [
                                        "0 25px 50px -12px rgba(249, 115, 22, 0.2)",
                                        "0 25px 50px -12px rgba(249, 115, 22, 0.2)",
                                        "0 25px 50px -12px rgba(249, 115, 22, 0.2), 0 0 50px 15px rgba(249, 115, 22, 0.5)", // Peak Glow
                                        "0 25px 50px -12px rgba(249, 115, 22, 0.2)"
                                    ]
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    times: [0, 0.45, 0.52, 0.65], // Peak roughly matches swipe completion (around 3.1s)
                                    ease: "easeInOut"
                                }}
                                className="w-24 h-24 rounded-full bg-gradient-to-tr from-orange-500 to-amber-600 flex items-center justify-center mb-8 shadow-2xl shadow-orange-500/20"
                            >
                                <Sun size={32} className="text-white" strokeWidth={3} />
                            </motion.div>
                            
                            <h2 className="text-2xl font-serif text-white mb-3">All Clear</h2>
                            <p className="text-stone-500 text-center max-w-[200px] leading-relaxed">
                                Zero pending thoughts.<br/>
                                Enjoy the quiet.
                            </p>
                        </div>

                         <div className="absolute bottom-10 left-0 right-0 flex justify-center">
                            <div className="w-12 h-1 rounded-full bg-stone-800" />
                        </div>
                    </div>
                </PhoneMockup>
            </div>
        </div>
      </div>

      {/* Merged Problem Section */}
      <div className="max-w-3xl mx-auto text-center relative z-10 pt-32 md:pt-48 pb-24 md:pb-32">
        <FadeIn>
            <h2 className="text-3xl md:text-5xl font-serif text-stone-900 mb-12 leading-tight px-4">
            You don't have a storage problem.<br />
            <span className="text-stone-400">You have a <span className="text-orange-600">decision</span> problem.</span>
            </h2>
            
            <div className="space-y-8 text-xl md:text-2xl text-stone-500 leading-relaxed max-w-2xl mx-auto font-light px-4">
            <p>
                We have good ideas all day long. But we blurt them out randomly, 
                bury them in notes apps, or let them loop in our heads until they create noise.
            </p>
            <p>
                Productivity tools ask you to organize that noise. 
                <br />
                <strong className="text-stone-900 font-medium relative inline-block mt-2">
                    Blurto asks you to resolve it.
                    <span className="absolute -bottom-1 left-0 w-full h-1 bg-orange-200/50 -z-10"></span>
                </strong>
            </p>
            </div>
        </FadeIn>
      </div>

    </section>
  );
};