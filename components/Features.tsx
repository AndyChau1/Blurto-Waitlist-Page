import React from 'react';
import { Mic, Sparkles, Smartphone, CheckCircle2 } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

const steps = [
  {
    title: "Capture a thought",
    description: "You quickly speak or type a thought as it comes to you — no editing or organizing required.",
    icon: <Mic strokeWidth={1.5} className="w-8 h-8" />
  },
  {
    title: "Blurto cleans it up",
    description: "The app quietly uses AI to turn messy thoughts into clear, focused ideas in the background.",
    icon: <Sparkles strokeWidth={1.5} className="w-8 h-8" />
  },
  {
    title: "One idea comes back",
    description: "Later, Blurto resurfaces a single idea and asks you to decide what to do with it.",
    icon: <Smartphone strokeWidth={1.5} className="w-8 h-8" />
  },
  {
    title: "Decide and move on",
    description: "You choose to act, drop it, or revisit later. If you act, you commit to one small step.",
    icon: <CheckCircle2 strokeWidth={1.5} className="w-8 h-8" />
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="bg-stone-950 text-stone-200 py-20 md:py-24 px-6 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-stone-900/40 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-20">
            {/* Header */}
            <div className="mb-16 md:mb-20 text-center flex flex-col items-center">
                <FadeIn>
                    <div className="inline-flex items-center justify-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-stone-800 bg-stone-900/30 text-[11px] font-bold uppercase tracking-widest text-stone-500 transition-colors duration-300 hover:border-orange-500/30 hover:text-orange-500 cursor-default">
                        How it works
                    </div>
                </FadeIn>
                <FadeIn delay={0.1}>
                    <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight leading-tight max-w-[90%] md:max-w-full">
                        A quiet loop for <span className="text-orange-500 font-serif italic">noisy minds.</span>
                    </h2>
                </FadeIn>
            </div>

            {/* 4-Step Process Flow */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative">
                {/* Connecting Line (Desktop Only) */}
                <div className="hidden md:block absolute top-[28px] left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-800 to-transparent z-0" />

                {steps.map((step, idx) => (
                    <FadeIn 
                        key={idx} 
                        delay={idx * 0.15} 
                        className="relative z-10 flex flex-row md:flex-col items-stretch md:items-center gap-6 md:gap-0 group cursor-default"
                    >
                        {/* Icon Container (Mobile: Left Column, Desktop: Top Centered) */}
                        <div className="flex flex-col items-center flex-shrink-0 relative">
                             {/* Icon Circle */}
                            <div className="w-14 h-14 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-500 relative z-10 group-hover:text-orange-500 group-hover:border-orange-500/30 transition-all duration-500 shadow-lg shadow-black/20 group-hover:shadow-orange-900/10">
                                {step.icon}
                            </div>
                            
                            {/* Mobile Connector Line (Vertical) 
                                - Starts at top-0 (top of container, behind icon)
                                - Ends at -bottom-12 (bridges the gap-12 to the next item)
                                - bg-stone-800 for visibility
                            */}
                            {idx !== steps.length - 1 && (
                                <div className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 w-[1px] bg-stone-800 -bottom-12 -z-10" />
                            )}
                        </div>

                        {/* Content (Mobile: Right Column, Desktop: Centered Below) */}
                        <div className="flex-1 text-left md:text-center pt-1 md:pt-6 md:mt-0">
                            <h3 className="text-xl font-medium text-stone-100 mb-2 md:mb-4 group-hover:text-white transition-colors duration-300">{step.title}</h3>
                            <p className="text-stone-500 leading-relaxed font-light text-lg max-w-none md:max-w-xs mx-auto group-hover:text-stone-400 transition-colors duration-300">
                                {step.description}
                            </p>
                        </div>
                    </FadeIn>
                ))}
            </div>
            
            {/* Final reassuring note */}
            <FadeIn delay={0.6} className="mt-20 text-center">
                <p className="text-stone-600 italic font-serif text-lg hover:text-stone-500 transition-colors duration-300">The app stays quiet unless you need it.</p>
            </FadeIn>
        </div>
    </section>
  );
};