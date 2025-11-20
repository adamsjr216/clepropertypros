import React, { useEffect } from 'react';
import { MessageSquare, Mail } from 'lucide-react';

const ContactSection: React.FC = () => {
  
  useEffect(() => {
    // Check if Tally script is already loaded
    if (!document.querySelector('script[src="https://tally.so/widgets/embed.js"]')) {
      const script = document.createElement('script');
      script.src = "https://tally.so/widgets/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="get-list" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="bg-blue-600 px-8 py-10 text-center">
            <h2 className="text-3xl font-extrabold text-white mb-2">
              Get Our Current Property List
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Fill out the form below and we'll immediately email you our available properties with full financial breakdowns.
            </p>
          </div>

          <div className="p-8 md:p-12">
            <div className="flex flex-col items-center justify-center mb-8">
              <span className="bg-green-100 text-green-800 text-sm font-bold px-4 py-1 rounded-full flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Properties sent instantly. No obligation.
              </span>
            </div>

            {/* Tally Form Embed Container */}
            <div className="w-full">
              <iframe 
                data-tally-src="https://tally.so/embed/811rEl?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                loading="lazy" 
                width="100%" 
                height="292" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0} 
                title="Investment Criteria"
                className="w-full"
              ></iframe>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100 text-center">
              <p className="text-slate-600 mb-4">Prefer to text or call me?</p>
              <a 
                href="sms:9376841432" 
                className="inline-flex items-center gap-2 text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors"
              >
                <MessageSquare className="h-6 w-6 text-blue-600" />
                (937) 684-1432
              </a>
              <div className="mt-2">
                <a href="mailto:adamsjr216@gmail.com" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600">
                  <Mail className="h-4 w-4" />
                  adamsjr216@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-white p-8 rounded-xl shadow-sm border border-slate-200">
           <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-xs">i</span>
            Important Information
           </h3>
           <ul className="space-y-3 text-sm text-slate-600">
             <li className="flex items-start gap-2">
               <span className="mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
               Most properties require cash or traditional financing (NOT seller-financed).
             </li>
             <li className="flex items-start gap-2">
               <span className="mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
               We work with qualified investors who have proof of funds or financing approval.
             </li>
             <li className="flex items-start gap-2">
               <span className="mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
               All financial projections are realistic and conservative.
             </li>
           </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;