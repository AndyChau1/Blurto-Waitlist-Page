import React from 'react';
import { motion } from 'framer-motion';

export const Problem: React.FC = () => {
  return (
    // Changed: py-20 md:py-24 -> pt-4 md:pt-16 pb-20 md:pb-24
    // Significantly reduced top padding to remove "buffer zone" between phones and this text.
    <section className="pt-4 md:pt-16 pb-20 md:pb-24 px-6 relative overflow-hidden">
      {/* Subtle atmospheric wash to continue from Hero */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-stone-100/50 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-3xl md:text-5xl font-serif text-stone-900 mb-12 leading-tight">
            You don't have a storage problem.<br />
            <span className="text-stone-400">You have a <span className="text-orange-600">decision</span> problem.</span>
            </h2>
            
            {/* Changed: text-lg md:text-xl -> text-xl md:text-2xl for better readability */}
            <div className="space-y-8 text-xl md:text-2xl text-stone-500 leading-relaxed max-w-2xl mx-auto font-light">
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
        </motion.div>
      </div>
    </section>
  );
};