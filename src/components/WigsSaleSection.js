import React, { useState } from 'react';
import { motion } from 'framer-motion';

const WigsSaleSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const wigs = [
    {
      id: 1,
      name: "Silky Straight",
      description: "Premium synthetic wig with natural look and comfortable fit",
      price: "₦15,000",
      originalPrice: "₦20,000",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=500&fit=crop&crop=face",
      category: "Straight",
      rating: 4.8,
      reviews: 124,
      inStock: true,
      isNew: true,
      isSale: true
    },
    {
      id: 2,
      name: "Curly Waves",
      description: "Luxury curly wig for special occasions with heat-resistant fibers",
      price: "₦18,000",
      originalPrice: "₦25,000",
      image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=500&fit=crop&crop=face",
      category: "Curly",
      rating: 4.9,
      reviews: 89,
      inStock: true,
      isNew: false,
      isSale: true
    },
    {
      id: 3,
      name: "Blonde Bob",
      description: "Trendy bob cut in golden blonde with natural shine",
      price: "₦20,000",
      originalPrice: "₦28,000",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=500&fit=crop&crop=face",
      category: "Bob",
      rating: 4.7,
      reviews: 156,
      inStock: true,
      isNew: true,
      isSale: true
    },
    {
      id: 4,
      name: "Long Waves",
      description: "Elegant long wavy hair with premium quality fibers",
      price: "₦25,000",
      originalPrice: "₦35,000",
      image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=500&fit=crop&crop=face",
      category: "Long",
      rating: 4.9,
      reviews: 203,
      inStock: true,
      isNew: false,
      isSale: true
    },
    {
      id: 5,
      name: "Pixie Cut",
      description: "Modern short pixie style with easy maintenance",
      price: "₦12,000",
      originalPrice: "₦16,000",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=500&fit=crop&crop=face",
      category: "Short",
      rating: 4.6,
      reviews: 78,
      inStock: false,
      isNew: false,
      isSale: true
    },
    {
      id: 6,
      name: "Ombre Blonde",
      description: "Stylish ombre effect with natural color transition",
      price: "₦22,000",
      originalPrice: "₦30,000",
      image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=500&fit=crop&crop=face",
      category: "Ombre",
      rating: 4.8,
      reviews: 167,
      inStock: true,
      isNew: true,
      isSale: true
    }
  ];

  const categories = ['All', 'Straight', 'Curly', 'Bob', 'Long', 'Short', 'Ombre'];

  const filteredWigs = selectedCategory === 'All' 
    ? wigs 
    : wigs.filter(wig => wig.category === selectedCategory);

  const handleWhatsAppClick = (wig) => {
    const message = `Hi! I'm interested in buying the ${wig.name} for ${wig.price}. Is it available?`;
    const whatsappUrl = `https://wa.me/2348123456789?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="wigs-sale" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-pink-50 via-rose-50/40 to-cream-100 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(252,165,165,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(251,191,143,0.08),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-block mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent mx-auto"></div>
          </motion.div>
          <motion.h2 
            className="font-playfair text-4xl sm:text-5xl md:text-6xl font-light text-gray-800 mb-6 tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Premium <span className="font-bold text-pink-600">Wigs</span>
          </motion.h2>
          <motion.p 
            className="font-poppins text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto px-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Discover our collection of luxury wigs crafted with premium materials
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-poppins font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/25'
                  : 'bg-white/80 text-gray-600 hover:bg-pink-100 hover:text-pink-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Wigs Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          {filteredWigs.map((wig, index) => (
            <motion.div 
              key={wig.id}
              className="luxury-card group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Wig Image */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <motion.img 
                  src={wig.image}
                  alt={wig.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {wig.isNew && (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      NEW
                    </span>
                  )}
                  {wig.isSale && (
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      SALE
                    </span>
                  )}
                </div>
                
                {/* Stock Status */}
                <div className="absolute top-4 right-4">
                  {wig.inStock ? (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      In Stock
                    </span>
                  ) : (
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Out of Stock
                    </span>
                  )}
                </div>
                
                {/* Quick View Button */}
                <motion.div 
                  className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <button className="bg-white text-gray-800 px-6 py-3 rounded-full font-poppins font-medium">
                    Quick View
                  </button>
                </motion.div>
              </div>

              {/* Wig Content */}
              <div className="p-6 sm:p-8 relative">
                <div className="absolute top-0 left-8 w-16 h-0.5 bg-gradient-to-r from-pink-400 to-rose-400 transform -translate-y-1"></div>
                
                {/* Category */}
                <span className="text-pink-500 text-sm font-poppins font-medium uppercase tracking-wider">
                  {wig.category}
                </span>
                
                <motion.h3 
                  className="font-playfair text-xl font-semibold text-gray-800 mb-3 mt-2"
                  whileHover={{ color: "#f472b6" }}
                  transition={{ duration: 0.3 }}
                >
                  {wig.name}
                </motion.h3>
                
                <p className="font-poppins text-gray-600 text-sm mb-4 leading-relaxed">
                  {wig.description}
                </p>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(wig.rating) ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({wig.reviews} reviews)</span>
                </div>
                
                {/* Price */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-playfair text-2xl font-bold text-gray-800">
                    {wig.price}
                  </span>
                  {wig.originalPrice && (
                    <span className="text-lg text-gray-400 line-through">
                      {wig.originalPrice}
                    </span>
                  )}
                </div>
                
                {/* Elegant Underline */}
                <motion.div 
                  className="w-12 h-0.5 bg-gradient-to-r from-pink-300 to-rose-300 mb-6"
                  whileHover={{ width: "48px" }}
                  transition={{ duration: 0.5 }}
                ></motion.div>
                
                {/* Purchase Button */}
                <motion.button
                  onClick={() => handleWhatsAppClick(wig)}
                  disabled={!wig.inStock}
                  className={`w-full py-4 px-6 rounded-xl font-poppins font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    wig.inStock
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                  whileHover={wig.inStock ? { scale: 1.02 } : {}}
                  whileTap={wig.inStock ? { scale: 0.98 } : {}}
                >
                  <span>{wig.inStock ? 'Purchase Now' : 'Out of Stock'}</span>
                  {wig.inStock && (
                    <motion.svg 
                      className="w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </motion.svg>
                  )}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WigsSaleSection;