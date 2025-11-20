import React from 'react';
import { PropertyType } from '../types';

const PropertyTypes: React.FC = () => {
  const properties: PropertyType[] = [
    {
      title: "Single-Family Homes",
      description: "Ideal for BRRRR or rental strategies. Easy entry point.",
      priceRange: "$43K - $270K",
      imageUrl: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Multi-Family (2-4 Units)",
      description: "Strong cash flow from day one. Diversified tenant risk.",
      priceRange: "$90K - $450K",
      imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Apartment Buildings",
      description: "12-24+ units. Institutional-grade returns for serious investors.",
      priceRange: "$500K+",
      imageUrl: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Fix-and-Flip",
      description: "Renovation opportunities in appreciating neighborhoods.",
      priceRange: "Varies",
      imageUrl: "https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="properties" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Investment Opportunities
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded"></div>
          <p className="mt-4 text-slate-600">Examples of property types we frequently source for our clients.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((prop, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">
              {/* Image */}
              <div className="aspect-w-3 aspect-h-2 h-64 w-full">
                <img 
                  src={prop.imageUrl} 
                  alt={prop.title}
                  className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              </div>
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-2 py-1 bg-blue-600 text-white text-xs font-bold rounded mb-2">
                  {prop.priceRange}
                </span>
                <h3 className="text-xl font-bold text-white mb-1">{prop.title}</h3>
                <p className="text-slate-300 text-sm line-clamp-2">{prop.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyTypes;