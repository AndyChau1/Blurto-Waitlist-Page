import React from 'react';

interface PhoneMockupProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ children, delay = 0, className = '' }) => {
  return (
    <div
      className={`relative mx-auto w-[310px] h-[620px] ${className}`}
    >
        {/* --- 3D Frame Construction --- */}
        
        {/* 1. Main Chassis with Metallic Gradient (Titanium Look) - Tightened Shadow */}
        <div className="absolute inset-0 rounded-[3.5rem] bg-gradient-to-tr from-[#3a3a3a] via-[#1a1a1a] to-[#3a3a3a] shadow-[0_0_0_1px_rgba(0,0,0,0.8),0_30px_60px_-12px_rgba(0,0,0,0.8)] z-0" />
        
        {/* 2. Metallic Lustre/Reflection (Simulates curved metal light hit) */}
        <div className="absolute inset-0 rounded-[3.5rem] bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-50 z-1 pointer-events-none mix-blend-overlay" />
        
        {/* 3. Outer Rim Highlight (The shiny edge) */}
        <div className="absolute -inset-[1px] rounded-[3.55rem] border border-white/15 opacity-80 z-20 pointer-events-none shadow-[inset_0_0_4px_rgba(255,255,255,0.05)]" />
        
        {/* 4. Deep Inner Bezel (Black border between frame and screen) */}
        <div className="absolute inset-[4px] bg-black rounded-[3.3rem] z-10 shadow-[inset_0_0_10px_rgba(0,0,0,0.8)]" />

        {/* 5. The Screen Content Container */}
        {/* Fixed: Removed 'relative' class that was overriding 'absolute' and breaking the inset layout */}
        <div className="absolute inset-[10px] bg-black rounded-[2.8rem] overflow-hidden flex flex-col z-20">
            
            {/* Status Bar (Time & Icons) - Positioning consistent with Dynamic Island */}
            <div className="absolute top-0 left-0 w-full h-14 z-40 flex justify-between items-start px-7 pt-5 pointer-events-none text-white mix-blend-difference">
                <span className="text-[14px] font-medium tracking-wide leading-none font-sans">9:41</span>
                <div className="flex items-center gap-1.5">
                   {/* Custom Signal Bars */}
                   <div className="flex gap-[1px] items-end h-3">
                      <div className="w-[3px] h-[4px] bg-current rounded-[1px]" />
                      <div className="w-[3px] h-[6px] bg-current rounded-[1px]" />
                      <div className="w-[3px] h-[8px] bg-current rounded-[1px]" />
                      <div className="w-[3px] h-[10px] bg-current rounded-[1px]" />
                   </div>
                   {/* Wifi */}
                   <div className="relative w-4 h-3 overflow-hidden">
                       <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-[20px] h-[20px] border-[2px] border-current rounded-full" />
                       <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-[14px] h-[14px] border-[2px] border-current rounded-full" />
                       <div className="absolute bottom-[-11px] left-1/2 -translate-x-1/2 w-[6px] h-[6px] bg-current rounded-full" />
                   </div>
                   {/* Battery */}
                   <div className="w-[22px] h-[10px] rounded-[3px] border border-current opacity-90 relative ml-0.5">
                        <div className="absolute inset-[1px] right-2 bg-current rounded-[1px]" />
                        <div className="absolute top-1/2 -right-[3px] -translate-y-1/2 w-[2px] h-[4px] bg-current rounded-r-[1px]" />
                   </div>
                </div>
            </div>

            {children}
            
            {/* Screen Gloss/Reflection (Subtle) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-10 pointer-events-none z-50 rounded-[2.8rem]" />
        </div>

        {/* 6. Dynamic Island / Notch Area */}
        <div className="absolute top-[20px] left-1/2 -translate-x-1/2 w-28 h-[28px] bg-black rounded-full z-30 flex items-center justify-center pointer-events-none">
             {/* Subtle border for the island */}
             <div className="absolute inset-0 rounded-full border border-white/10 opacity-20"></div>
             {/* Camera/Sensor Elements */}
             <div className="w-full h-full relative overflow-hidden rounded-full">
                <div className="absolute top-1/2 right-4 -translate-y-1/2 w-3 h-3 rounded-full bg-[#0a0a0a] shadow-[inset_0_0_3px_rgba(255,255,255,0.15)] ring-1 ring-white/5"></div>
             </div>
        </div>

        {/* --- Physical Buttons (3D detailed) --- */}
        {/* Mute Switch */}
        <div className="absolute top-28 -left-[5px] w-[5px] h-7 bg-[#252525] rounded-l-md z-0 shadow-[inset_-1px_0_2px_rgba(0,0,0,0.5),inset_1px_0_1px_rgba(255,255,255,0.15)]" />
        {/* Volume Up */}
        <div className="absolute top-44 -left-[5px] w-[5px] h-14 bg-[#252525] rounded-l-md z-0 shadow-[inset_-1px_0_2px_rgba(0,0,0,0.5),inset_1px_0_1px_rgba(255,255,255,0.15)]" />
        {/* Volume Down */}
        <div className="absolute top-60 -left-[5px] w-[5px] h-14 bg-[#252525] rounded-l-md z-0 shadow-[inset_-1px_0_2px_rgba(0,0,0,0.5),inset_1px_0_1px_rgba(255,255,255,0.15)]" />
        {/* Power Button */}
        <div className="absolute top-48 -right-[5px] w-[5px] h-20 bg-[#252525] rounded-r-md z-0 shadow-[inset_1px_0_2px_rgba(0,0,0,0.5),inset_-1px_0_1px_rgba(255,255,255,0.15)]" />

    </div>
  );
};