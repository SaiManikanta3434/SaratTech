import React from 'react';
import Chairman from '../assets/chairman.png';

export default function Example() {
    return (
        <div className="mt-20">
            
            <h1 className="text-3xl font-medium text-slate-800 text-center">Meet Our CEO</h1>
            <p className="text-slate-500 text-center">The Man behind the product, passionate about what they do.</p>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
                <div className="max-w-80 bg-black text-white rounded-2xl">
                    <div className="relative -mt-px overflow-hidden rounded-2xl">
                        <img src={Chairman} alt="" className="h-[370px] w-full rounded-2xl hover:scale-110 transition-all duration-300 object-cover object-top" />
                        <div className="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t pointer-events-none from-black to-transparent"></div>
                    </div>
                    <div className="px-4 pb-6 text-center">
                        <p className="mt-4 text-lg">Sarat Chandra Murthy</p>
                        <p className="text-sm font-medium bg-gradient-to-r from-[#8B5CF6] via-[#9938CA] to-[#E0724A] text-transparent bg-clip-text">CEO</p>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
};