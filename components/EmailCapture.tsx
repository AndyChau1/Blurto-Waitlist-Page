import React, { useState } from 'react';
import { Check, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from './ui/FadeIn';
import { useForm } from '../context/FormContext';

export const EmailCapture: React.FC = () => {
  const { status, submitForm } = useForm();
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm(email);
  };

  return (
    <section className="bg-black py-20 md:py-24 px-6" id="join">
      <div className="max-w-2xl mx-auto text-center">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-10">
            Join the early list to shape the product.
            </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
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
                            <p className="text-stone-300 font-serif italic text-lg md:text-xl leading-relaxed">
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
                            <form onSubmit={handleSubmit} className="flex p-1.5 bg-stone-900 border border-stone-800 rounded-full shadow-xl shadow-orange-900/10 group hover:border-orange-500/30 hover:shadow-orange-900/20 transition-all duration-300 focus-within:ring-2 focus-within:ring-orange-500/50 focus-within:border-transparent">
                                <input 
                                    type="email" 
                                    placeholder="your@email.com" 
                                    className="flex-1 bg-transparent px-5 py-3 text-stone-200 placeholder-stone-600 outline-none min-w-0 text-lg"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={status === 'loading'}
                                />
                                <button 
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="bg-white text-stone-950 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 disabled:opacity-70 flex items-center gap-2 whitespace-nowrap hover:bg-orange-600 hover:text-white hover:shadow-[0_0_20px_-5px_rgba(249,115,22,0.5)] border border-transparent"
                                >
                                    {status === 'loading' ? <Loader2 className="animate-spin" size={16} /> : 'Join waitlist'}
                                </button>
                            </form>
                            <p className="mt-3 text-xs text-stone-600">Limited spots available for early access.</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </FadeIn>
      </div>
    </section>
  );
};