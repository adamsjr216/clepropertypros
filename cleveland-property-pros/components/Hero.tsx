import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden">
      {/* Background Image with Overlay - Cleveland Skyline Style */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1515536724965-4376b8272222?q=80&w=2070&auto=format&fit=crop"
          alt="Cleveland Skyline"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center pt-20">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm">
          <span className="text-blue-300 font-semibold text-sm tracking-wide uppercase">
            Boots on the Ground in Cleveland, Ohio
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6 max-w-5xl">
          Invest in Cleveland's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">High-Yield</span> Real Estate Market
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-3xl leading-relaxed">
          We are Cleveland-based advisors helping out-of-state investors build wealth through cash-flowing investment properties, including Section 8 opportunities.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="https://tally.so/r/811rEl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-xl shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:scale-105 transition-all duration-200 w-full sm:w-auto"
          >
            Get Our Property List
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a
            href="sms:9376841432"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-900 bg-white rounded-xl shadow-lg hover:bg-slate-50 hover:scale-105 transition-all duration-200 w-full sm:w-auto"
          >
            <MessageSquare className="mr-2 h-5 w-5 text-blue-600" />
            Text / Call: (937) 684-1432
          </a>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-8 sm:gap-16 text-center border-t border-white/10 pt-8 w-full max-w-4xl">
            <div>
                <p className="text-3xl sm:text-4xl font-bold text-white">7.6</p>
                <p className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider mt-1">Price-to-Rent Ratio</p>
            </div>
            <div>
                <p className="text-3xl sm:text-4xl font-bold text-white">15%+</p>
                <p className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider mt-1">Potential Cap Rates</p>
            </div>
            <div>
                <p className="text-3xl sm:text-4xl font-bold text-white">High</p>
                <p className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider mt-1">Rental Demand</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;