import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <span className="text-white font-extrabold text-xl tracking-tight block mb-4">
              CLE<span className="text-blue-500">PROPERTY</span>PROS
            </span>
            <p className="text-sm leading-relaxed max-w-xs">
              Cleveland-based investment advisory team helping out-of-state investors build wealth through Section 8 and cash-flowing properties.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#why-cleveland" className="hover:text-blue-400 transition-colors">Why Cleveland</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Our Services</a></li>
              <li><a href="#properties" className="hover:text-blue-400 transition-colors">Property Types</a></li>
              <li><a href="#get-list" className="hover:text-blue-400 transition-colors">Get Property List</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:9376841432" className="hover:text-white transition-colors">(937) 684-1432</a>
              </li>
              <li>
                <a href="mailto:adamsjr216@gmail.com" className="hover:text-white transition-colors">adamsjr216@gmail.com</a>
              </li>
              <li className="pt-2">
                <span className="block text-slate-500">Based in Cleveland, Ohio</span>
                <span className="block text-slate-500">Serving Investors Nationwide</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} Cleveland Property Pros. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;