import React from 'react';
import { TrendingUp, DollarSign, Building2, ShieldCheck } from 'lucide-react';

const WhyCleveland: React.FC = () => {
  const reasons = [
    {
      icon: DollarSign,
      title: "Unmatched Affordability",
      description: "What costs $130K-$300K for a down payment in coastal markets buys an entire cash-flowing property here."
    },
    {
      icon: TrendingUp,
      title: "High ROI Potential",
      description: "Institutional investors are quietly accumulating properties. 8-15% cap rates are standard, with some exceeding 20%."
    },
    {
      icon: ShieldCheck,
      title: "Multiple Exit Strategies",
      description: "Whether you prefer market rate tenants or government-backed Section 8 programs, our market supports both."
    },
    {
      icon: Building2,
      title: "Urban Revitalization",
      description: "Cleveland is experiencing significant development. Smart money is entering now before prices correct upwards."
    }
  ];

  return (
    <section id="why-cleveland" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">Market Analysis</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Why Smart Investors Are Choosing Cleveland
          </h3>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            One of America's most undervalued real estate markets is currently offering superior price-to-rent ratios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <reason.icon className="h-7 w-7 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{reason.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-2xl">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h4 className="text-2xl font-bold text-white mb-2">Ready to see the numbers?</h4>
            <p className="text-blue-200">Get access to our curated list of high-yield properties.</p>
          </div>
          <a 
            href="https://tally.so/r/811rEl" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors w-full md:w-auto text-center"
          >
            View Available Properties
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyCleveland;