import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

const faqs = [
  {
    question: "What happens after I join the waitlist?",
    answer: (
      <span>
        You’ll get early access as soon as Blurto is ready. Early users will:
        <ul className="list-disc list-outside ml-5 mt-2 space-y-1 text-stone-500">
            <li>Get access before the public launch</li>
            <li>Help shape the product through feedback</li>
            <li>Receive updates as the app evolves</li>
        </ul>
      </span>
    )
  },
  {
    question: "How often will you email me?",
    answer: "Rarely. Only for major product updates or when your access is ready. We respect your inbox."
  },
  {
    question: "Can I leave the waitlist anytime?",
    answer: "Yes. Every email has a one-click unsubscribe link. No hard feelings."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); 

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-stone-50 pt-20 pb-20 md:pt-24 md:pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <FadeIn>
              <div className="bg-white border border-stone-200 px-4 py-1.5 rounded-full shadow-sm mb-6 inline-block">
                <span className="text-xs font-bold uppercase tracking-widest text-stone-900">FAQs</span>
              </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-stone-500 text-lg font-light">
                Everything You Need to Know!
              </p>
          </FadeIn>
        </div>

        {/* Card-based Layout */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <FadeIn key={index} delay={index * 0.1}>
                <div 
                    className={`group bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                        isOpen 
                        ? 'border-stone-300 shadow-lg shadow-stone-200/50' 
                        : 'border-stone-200 hover:border-orange-300 hover:shadow-md hover:shadow-orange-900/5'
                    }`}
                >
                    <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center p-6 md:p-8 text-left focus:outline-none"
                    >
                    <span className={`text-xl font-medium transition-colors duration-300 pr-8 ${
                        isOpen ? 'text-stone-900' : 'text-stone-700 group-hover:text-orange-900'
                    }`}>
                        {faq.question}
                    </span>
                    
                    <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-300 ${
                        isOpen 
                        ? 'bg-stone-900 text-white' 
                        : 'bg-stone-100 text-stone-500 group-hover:bg-orange-100 group-hover:text-orange-600'
                    }`}>
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                    </button>
                    
                    <AnimatePresence>
                    {isOpen && (
                        <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                        <div className="px-6 md:px-8 pb-8 pt-0">
                            <div className="h-px w-full bg-stone-100 mb-6" />
                            <div className="text-stone-500 leading-relaxed font-light text-lg md:text-xl">
                            {faq.answer}
                            </div>
                        </div>
                        </motion.div>
                    )}
                    </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
};