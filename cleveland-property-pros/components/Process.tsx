import React from 'react';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-blue-400 font-bold tracking-wide uppercase text-sm mb-2">How It Works</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-6">
              Simple Process, Serious Results
            </h3>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
              We've streamlined the remote investment process to be as hands-off as possible while keeping you fully informed.
            </p>
        </div>
            
        <div className="space-y-6 max-w-3xl mx-auto">
            {[
            { title: "Submit Your Criteria", desc: "Fill out our form to tell us your budget and goals." },
            { title: "Review Opportunities", desc: "Receive detailed financial breakdowns and photos." },
            { title: "Consultation & Due Diligence", desc: "We discuss strategy and provide full transparency." },
            { title: "Close & Collect", desc: "We coordinate closing and property management setup." }
            ].map((step, idx) => (
            <div key={idx} className="flex bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:bg-slate-800 transition-colors">
                <div className="flex-shrink-0 mr-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl border-2 border-blue-500/30 shadow-lg shadow-blue-900/20">
                    {idx + 1}
                </div>
                </div>
                <div className="text-left">
                <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                <p className="text-slate-400">{step.desc}</p>
                </div>
            </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Process;