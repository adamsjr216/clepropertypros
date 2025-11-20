import React from 'react';
import { Search, Landmark, Key, Shield, FileBarChart, HardHat } from 'lucide-react';
import { ServiceItem } from '../types';

const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: "Property Sourcing",
      description: "Access to off-market deals and exclusive inventory you won't find on Zillow.",
      icon: Search
    },
    {
      title: "Section 8 Expertise",
      description: "We know which properties meet agency requirements, giving you the option for guaranteed income.",
      icon: Landmark
    },
    {
      title: "Financing Support",
      description: "Direct connections to experienced lenders who understand the Cleveland market.",
      icon: FileBarChart
    },
    {
      title: "Property Management",
      description: "Hand-off your investment to our trusted local management partners.",
      icon: Key
    },
    {
      title: "Insurance Coordination",
      description: "Ensuring your assets are properly protected with the right coverage.",
      icon: Shield
    },
    {
      title: "Market Strategy",
      description: "Data-driven analysis to maximize your portfolio's long-term growth.",
      icon: HardHat
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">Comprehensive Support</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            More Than Just Deal Finders
          </h3>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
            We provide a seamless, end-to-end experience for out-of-state investors. From acquisition to management, we handle the heavy lifting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:border-blue-300 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-600 transition-colors duration-300">
                  <service.icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="ml-4 text-xl font-bold text-slate-900">{service.title}</h4>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;