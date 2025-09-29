import React from 'react';

const ServicesSection = () => {
  const services = [
    { 
      id: 1, 
      title: "Hair Styling", 
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    { 
      id: 2, 
      title: "Nail Care", 
      image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    { 
      id: 3, 
      title: "Makeup", 
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    { 
      id: 4, 
      title: "Facials", 
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    { 
      id: 5, 
      title: "Microblading", 
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    { 
      id: 6, 
      title: "Bridal", 
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-cream-50 via-rose-50/30 to-pearl-100 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,143,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(252,165,165,0.08),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block mb-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto"></div>
          </div>
          <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-light text-gray-800 mb-4 sm:mb-6 tracking-wide">
            Our <span className="font-bold text-rose-600">Services</span>
          </h2>
          <p className="font-poppins text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto px-4 leading-relaxed">
            Professional beauty services
          </p>
        </div>

        {/* Services Horizontal Scroll */}
        <div className="overflow-x-auto pb-6 scrollbar-hide">
          <div className="flex space-x-4 sm:space-x-6 lg:space-x-8 min-w-max px-2">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 sm:hover:-translate-y-3 flex-shrink-0 w-56 sm:w-64 lg:w-72 border border-white/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Service Image */}
                <div className="relative h-36 sm:h-44 lg:h-52 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                  
                  {/* Elegant Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Decorative Corner */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-2 border-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
                </div>

                {/* Service Title */}
                <div className="p-5 sm:p-6 relative">
                  <div className="absolute top-0 left-6 w-12 h-0.5 bg-gradient-to-r from-rose-400 to-pink-400 transform -translate-y-1"></div>
                  <h3 className="font-playfair text-base sm:text-lg font-semibold text-gray-800 uppercase tracking-wider leading-tight">
                    {service.title}
                  </h3>
                  
                  {/* Elegant Underline */}
                  <div className="mt-3 w-8 h-0.5 bg-gradient-to-r from-rose-300 to-pink-300 transform group-hover:w-12 transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Decorative Bottom Element */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-rose-400/60">
            <div className="w-2 h-2 rounded-full bg-rose-300 animate-pulse"></div>
            <div className="w-1 h-1 rounded-full bg-rose-400 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-2 h-2 rounded-full bg-rose-300 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;