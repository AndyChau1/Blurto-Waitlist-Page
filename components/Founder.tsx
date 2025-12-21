import React from 'react';
import { FadeIn } from './ui/FadeIn';

export const Founder: React.FC = () => {
  return (
    <section id="founder" className="py-20 md:py-24 px-6 bg-stone-50">
      <div className="max-w-2xl mx-auto">
        <div className="prose prose-stone prose-lg">
            <FadeIn>
                <div className="flex items-center gap-4 mb-8">
                     <div className="h-px w-8 bg-orange-300"></div>
                     <h3 className="text-xs font-bold uppercase tracking-widest text-orange-600 m-0">Why we built this</h3>
                </div>
                
                <p className="font-serif text-3xl md:text-5xl text-stone-900 leading-tight mb-12">
                    "I realized I didn't need a better way to store my ideas. I needed <span className="text-orange-600">permission</span> to let them go."
                </p>
            </FadeIn>
            
            <FadeIn delay={0.2}>
                <div className="text-stone-600 space-y-8 leading-relaxed text-xl font-light">
                    <p>
                        I'm allergic to heavy productivity systems. I've tried Notion, GTD, and complex dashboards. 
                        They always felt like homework.
                    </p>
                    <p>
                        I built Blurto for people who are idea-rich but action-poor. 
                        It's for the founders, creators, and dreamers who just want to clear the mental buffer 
                        and get back to doing the work that matters.
                    </p>
                    <p className="text-stone-900 font-medium">
                        If you want a second brain, use Notion. <br/>
                        If you want a clear mind, use Blurto.
                    </p>
                </div>
            </FadeIn>
            
            <FadeIn delay={0.4}>
                <div className="mt-12 flex items-center gap-4 border-t border-stone-200 pt-8">
                    <div className="w-12 h-12 bg-stone-200 rounded-full overflow-hidden grayscale contrast-125">
                        <img src="https://picsum.photos/id/64/200/200" alt="Andy" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <div className="font-medium text-stone-900">Andy</div>
                        <div className="text-sm text-stone-400">Founder of Blurto</div>
                    </div>
                </div>
            </FadeIn>
        </div>
      </div>
    </section>
  );
};