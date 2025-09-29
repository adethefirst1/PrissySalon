import React from 'react';

const WigsSaleSection = () => {
  const wigs = [
    {
      id: 1,
      name: "Silky Straight Wig",
      price: "₦15,000",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Premium quality straight wig"
    },
    {
      id: 2,
      name: "Curly Bob Wig",
      price: "₦18,000",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Beautiful curly bob style"
    },
    {
      id: 3,
      name: "Long Wavy Wig",
      price: "₦22,000",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Elegant long wavy hair"
    },
    {
      id: 4,
      name: "Short Pixie Wig",
      price: "₦12,000",
      image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Chic short pixie cut"
    },
    {
      id: 5,
      name: "Blonde Highlights Wig",
      price: "₦20,000",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Stylish blonde highlights"
    }
  ];

  const handleWhatsAppClick = (wig) => {
    const message = `Hi! I'm interested in buying the ${wig.name} for ${wig.price}. Is it available?`;
    const whatsappUrl = `https://wa.me/2348123456789?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="wigs-sale" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-pink-50 via-rose-50/40 to-cream-100 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(252,165,165,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(251,191,143,0.08),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block mb-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-pink-300 to-transparent mx-auto"></div>
          </div>
          <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-light text-gray-800 mb-4 sm:mb-6 tracking-wide">
            Premium <span className="font-bold text-pink-600">Wigs</span>
          </h2>
          <p className="font-poppins text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto px-4 leading-relaxed">
            Luxury wigs for sale
          </p>
        </div>

        {/* Wigs Horizontal Scroll */}
        <div className="overflow-x-auto pb-6 scrollbar-hide">
          <div className="flex space-x-4 sm:space-x-6 lg:space-x-8 min-w-max px-2">
            {wigs.map((wig, index) => (
              <div 
                key={wig.id}
                className="group relative bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 sm:hover:-translate-y-3 flex-shrink-0 w-56 sm:w-64 lg:w-72 border border-white/30"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Wig Image */}
                <div className="relative h-36 sm:h-44 lg:h-52 overflow-hidden">
                  <img 
                    src={wig.image}
                    alt={wig.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                  
                  {/* Elegant Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Luxury Price Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm border border-white/20">
                    {wig.price}
                  </div>
                  
                  {/* Decorative Corner */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-2 border-white/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
                </div>

                {/* Wig Info */}
                <div className="p-5 sm:p-6 relative">
                  <div className="absolute top-0 left-6 w-12 h-0.5 bg-gradient-to-r from-pink-400 to-rose-400 transform -translate-y-1"></div>
                  <h3 className="font-playfair text-base sm:text-lg font-semibold text-gray-800 uppercase tracking-wider leading-tight mb-2">
                    {wig.name}
                  </h3>
                  <p className="font-poppins text-gray-600 text-sm mb-4 leading-relaxed">
                    {wig.description}
                  </p>
                  
                  {/* Elegant Underline */}
                  <div className="mt-2 w-8 h-0.5 bg-gradient-to-r from-pink-300 to-rose-300 transform group-hover:w-12 transition-all duration-500"></div>
                  
                  {/* Luxury Buy Button */}
                  <button
                    onClick={() => handleWhatsAppClick(wig)}
                    className="w-full mt-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-poppins font-semibold py-3 px-4 rounded-xl transition-all duration-500 transform hover:scale-105 flex items-center justify-center space-x-2 text-sm shadow-lg hover:shadow-xl border border-white/20"
                  >
                    <span>Purchase</span>
                    <span className="text-lg">💎</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Decorative Bottom Element */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-3 text-pink-400/60">
            <div className="w-2 h-2 rounded-full bg-pink-300 animate-pulse"></div>
            <div className="w-1 h-1 rounded-full bg-pink-400 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
            <div className="w-1 h-1 rounded-full bg-rose-400 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
            <div className="w-2 h-2 rounded-full bg-pink-300 animate-pulse" style={{ animationDelay: '0.9s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WigsSaleSection;
