import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WigsSaleSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('Random');
  const [selectedWig, setSelectedWig] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState({});
  
  // Products data using local images from public/img folder
  const wigs = [
    // Burmese Curls - Product 1
    {
      id: 1,
      name: "Premium Burmese Curls",
      description: "Luxury Burmese curl wig with natural bounce and heat-resistant fibers",
      images: [
        "/img/Burmese Curls/1/IMG_6675.jpg",
        "/img/Burmese Curls/1/IMG_6676.jpg",
        "/img/Burmese Curls/1/IMG_6677.jpg",
        "/img/Burmese Curls/1/IMG_6678.jpg"
      ],
      category: "Burmese Curls",
      inStock: true,
      isNew: true,
      isSale: false
    },
    // Burmese Curls - Product 2
    {
      id: 2,
      name: "Luxury Burmese Curls",
      description: "Premium Burmese curl wig with natural texture and elegant styling",
      images: [
        "/img/Burmese Curls/2/IMG_6644.jpg",
        "/img/Burmese Curls/2/IMG_6645.jpg",
        "/img/Burmese Curls/2/IMG_6646.jpg",
        "/img/Burmese Curls/2/IMG_6647.jpg"
      ],
      category: "Burmese Curls",
      inStock: true,
      isNew: true,
      isSale: false
    },
    // Bone Straight - Product 1
    {
      id: 3,
      name: "Premium Bone Straight",
      description: "Luxury bone straight wig with silky smooth texture and natural shine",
      images: [
        "/img/Bone Straight/1/IMG_6648.jpg",
        "/img/Bone Straight/1/IMG_6649.jpg",
        "/img/Bone Straight/1/IMG_6650.jpg",
        "/img/Bone Straight/1/IMG_6651.jpg"
      ],
      category: "Bone Straight",
      inStock: true,
      isNew: true,
      isSale: false
    },
    // Bone Straight - Product 2
    {
      id: 4,
      name: "Classic Bone Straight",
      description: "Timeless bone straight wig with premium quality and elegant styling",
      images: [
        "/img/Bone Straight/2/IMG_6667.jpg",
        "/img/Bone Straight/2/IMG_6668.jpg",
        "/img/Bone Straight/2/IMG_6669.jpg",
        "/img/Bone Straight/2/IMG_6670.jpg"
      ],
      category: "Bone Straight",
      inStock: true,
      isNew: true,
      isSale: false
    },
    // Bone Straight - Product 3
    {
      id: 5,
      name: "Elegant Bone Straight",
      description: "Sophisticated bone straight wig with luxurious texture and perfect styling",
      images: [
        "/img/Bone Straight/3/IMG_6671.jpg",
        "/img/Bone Straight/3/IMG_6672.jpg",
        "/img/Bone Straight/3/IMG_6673.jpg",
        "/img/Bone Straight/3/IMG_6674.jpg"
      ],
      category: "Bone Straight",
      inStock: true,
      isNew: true,
      isSale: false
    },
    // Bone Straight - Product 4
    {
      id: 6,
      name: "Deluxe Bone Straight",
      description: "Premium bone straight wig with exceptional quality and stunning appearance",
      images: [
        "/img/Bone Straight/4/IMG_6658.jpg",
        "/img/Bone Straight/4/IMG_6659.jpg",
        "/img/Bone Straight/4/IMG_6660.jpg",
        "/img/Bone Straight/4/IMG_6661.jpg"
      ],
      category: "Bone Straight",
      inStock: true,
      isNew: true,
      isSale: false
    },
    // Bone Straight - Product 5
    {
      id: 7,
      name: "Ultimate Bone Straight",
      description: "The finest bone straight wig with superior quality and flawless styling",
      images: [
        "/img/Bone Straight/5/IMG_6683.jpg",
        "/img/Bone Straight/5/IMG_6684.jpg"
      ],
      category: "Bone Straight",
      inStock: true,
      isNew: true,
      isSale: false
    },
    // Bone Straight - Product 6
    {
      id: 8,
      name: "Signature Bone Straight",
      description: "Exclusive bone straight wig with signature quality and elegant design",
      images: [
        "/img/Bone Straight/6/IMG_6662.jpg",
        "/img/Bone Straight/6/IMG_6663.jpg",
        "/img/Bone Straight/6/IMG_6664.jpg",
        "/img/Bone Straight/6/IMG_6665.jpg",
        "/img/Bone Straight/6/IMG_6666.jpg"
      ],
      category: "Bone Straight",
      inStock: true,
      isNew: true,
      isSale: false
    },
    // Bone Straight - Product 7
    {
      id: 9,
      name: "Royal Bone Straight",
      description: "Regal bone straight wig with premium craftsmanship and luxurious feel",
      images: [
        "/img/Bone Straight/7/IMG_6652.jpg",
        "/img/Bone Straight/7/IMG_6653.jpg",
        "/img/Bone Straight/7/IMG_6654.jpg",
        "/img/Bone Straight/7/IMG_6655.jpg",
        "/img/Bone Straight/7/IMG_6656.jpg",
        "/img/Bone Straight/7/IMG_6657.jpg"
      ],
      category: "Bone Straight",
      inStock: true,
      isNew: true,
      isSale: false
    },
    // Braided Wigs - Product 1
    {
      id: 10,
      name: "Premium Braided Wig",
      description: "Beautiful braided wig with intricate styling and authentic look",
      images: [
        "/img/Braided Wigs/1/IMG_6679.jpg",
        "/img/Braided Wigs/1/IMG_6680.jpg",
        "/img/Braided Wigs/1/IMG_6681.jpg",
        "/img/Braided Wigs/1/IMG_6682.jpg"
      ],
      category: "Braided Wigs",
      inStock: true,
      isNew: true,
      isSale: false
    },
    // Braided Wigs - Product 2
    {
      id: 11,
      name: "Luxury Braided Wig",
      description: "Elegant braided wig with sophisticated design and premium quality",
      images: [
        "/img/Braided Wigs/2/IMG_6695.jpg",
        "/img/Braided Wigs/2/IMG_6696.jpg",
        "/img/Braided Wigs/2/IMG_6697.jpg",
        "/img/Braided Wigs/2/IMG_6698.jpg"
      ],
      category: "Braided Wigs",
      inStock: true,
      isNew: true,
      isSale: false
    },
    // Braided Wigs - Product 3
    {
      id: 12,
      name: "Classic Braided Wig",
      description: "Timeless braided wig with traditional styling and exceptional craftsmanship",
      images: [
        "/img/Braided Wigs/3/IMG_6691.jpg",
        "/img/Braided Wigs/3/IMG_6692.jpg",
        "/img/Braided Wigs/3/IMG_6693.jpg",
        "/img/Braided Wigs/3/IMG_6694.jpg"
      ],
      category: "Braided Wigs",
      inStock: true,
      isNew: true,
      isSale: false
    },
    // Braided Wigs - Product 4
    {
      id: 13,
      name: "Deluxe Braided Wig",
      description: "Premium braided wig with exquisite detailing and superior quality",
      images: [
        "/img/Braided Wigs/4/IMG_6687.jpg",
        "/img/Braided Wigs/4/IMG_6688.jpg",
        "/img/Braided Wigs/4/IMG_6689.jpg",
        "/img/Braided Wigs/4/IMG_6690.jpg"
      ],
      category: "Braided Wigs",
      inStock: true,
      isNew: true,
      isSale: false
    }
  ];

  const categories = ['Random', 'Bone Straight', 'Burmese Curls', 'Body Wave', 'Pixie Curls', 'Braided Wigs'];

  // Memoize random wigs so they don't change on every render
  const randomWigs = useMemo(() => {
    const shuffled = [...wigs].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 6);
  }, []); // Empty dependency array means this only runs once on mount

  const filteredWigs = selectedCategory === 'Random' 
    ? randomWigs 
    : wigs.filter(wig => wig.category === selectedCategory);


  return (
    <section id="wigs-sale" className="py-16 sm:py-20 lg:py-24 bg-gray-50 relative overflow-hidden">
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
          {categories.map((category) => {
            const count = category === 'Random' ? 6 : wigs.filter(wig => wig.category === category).length;
            return (
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
                <div className="flex items-center gap-2">
                  {category}
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    selectedCategory === category 
                      ? 'bg-white/20 text-white' 
                      : 'bg-pink-100 text-pink-600'
                  }`}>
                    {count}
                  </span>
        </div>
              </motion.button>
            );
          })}
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
              className="luxury-card group cursor-pointer relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Wig Image Container */}
              <div 
                className="relative h-80 sm:h-96 overflow-hidden cursor-pointer rounded-t-2xl bg-gray-100"
                onClick={() => {
                  setSelectedWig(wig);
                  setCurrentImageIndex(0);
                }}
              >
                {/* Main Image with Loading State */}
                <motion.img 
                  src={wig.images[0]}
                    alt={wig.name}
                  className="w-full h-full object-cover bg-gray-200"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to a placeholder if image fails to load
                    e.target.src = 'https://via.placeholder.com/400x500/f3f4f6/ec4899?text=PrissyLawson';
                  }}
                  style={{
                    minHeight: '100%',
                    backgroundColor: '#f3f4f6'
                  }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Gallery Indicator */}
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md rounded-full px-3 py-2 flex items-center gap-2 border border-white/20">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-white text-xs font-semibold">{wig.images.length} photos</span>
                  </div>
                  
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                  {wig.isNew && (
                    <motion.span 
                      className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      NEW
                    </motion.span>
                  )}
                  {wig.isSale && (
                    <motion.span 
                      className="bg-gradient-to-r from-red-500 to-rose-500 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      SALE
                    </motion.span>
                  )}
                </div>

                
                {/* Quick View Button */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.button 
                    className="bg-white text-gray-800 px-8 py-3.5 rounded-full font-poppins font-semibold shadow-2xl hover:shadow-pink-500/50 hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 hover:text-white transition-all duration-300 border-2 border-white/20"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                  </motion.button>
                </motion.div>
              </div>

              {/* Wig Content */}
              <div className="p-6 sm:p-8 relative bg-white">
                <div className="absolute top-0 left-8 w-20 h-1 bg-gradient-to-r from-pink-500 via-rose-400 to-pink-300 transform -translate-y-1 rounded-full"></div>
                
                {/* Category */}
                <span className="inline-block bg-pink-50 text-pink-600 text-xs font-poppins font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-3">
                  {wig.category}
                </span>
                
                <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-3 leading-tight">
                    {wig.name}
                  </h3>
                
                <p className="font-poppins text-gray-600 text-sm mb-6 leading-relaxed line-clamp-2">
                    {wig.description}
                  </p>
                  
                {/* Stock Status */}
                <div className="flex items-center gap-2 mb-6">
                  <div className={`w-2 h-2 rounded-full ${wig.inStock ? 'bg-green-500' : 'bg-red-500'} animate-pulse`}></div>
                  <span className={`text-xs font-medium ${wig.inStock ? 'text-green-600' : 'text-red-600'}`}>
                    {wig.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
                
                {/* Buy Now Button */}
                <motion.button
                  onClick={() => {
                    const message = `Hi! I want to buy the ${wig.name} wig. Please send me pricing and availability.`;
                    window.open(`https://wa.me/2349090396515?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                  className="w-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-poppins font-bold py-4 px-6 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 flex items-center justify-center gap-3 group overflow-hidden relative"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={!wig.inStock}
                >
                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  
                  <svg className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span className="relative z-10 text-base tracking-wide">
                    {wig.inStock ? 'Buy Now' : 'Out of Stock'}
                  </span>
                  <motion.svg 
                    className="w-4 h-4 relative z-10" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </motion.button>
                
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Gallery Modal */}
      <AnimatePresence>
        {selectedWig && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedWig(null)}
          >
            <motion.div
              className="bg-white rounded-3xl max-w-md w-full max-h-[95vh] overflow-hidden shadow-2xl"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gradient-to-r from-pink-50 to-rose-50">
                <div className="flex-1 pr-4">
                  <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-1">{selectedWig.name}</h3>
                  <p className="font-poppins text-gray-600 text-sm line-clamp-2">{selectedWig.description}</p>
                </div>
                <motion.button
                  onClick={() => setSelectedWig(null)}
                  className="w-12 h-12 bg-white hover:bg-gray-50 rounded-full flex items-center justify-center transition-all shadow-lg hover:shadow-xl flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              {/* Image Gallery */}
              <div className="relative bg-gray-50 min-h-[60vh] flex items-center justify-center">
                {/* Loading Spinner */}
                {imageLoading[`modal-${currentImageIndex}`] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                    <div className="w-12 h-12 border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin"></div>
                  </div>
                )}
                
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={selectedWig.images[currentImageIndex]}
                    alt={`${selectedWig.name} - Image ${currentImageIndex + 1}`}
                    className="w-full h-auto max-h-[60vh] object-contain"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    onLoadStart={() => setImageLoading(prev => ({ ...prev, [`modal-${currentImageIndex}`]: true }))}
                    onLoad={() => setImageLoading(prev => ({ ...prev, [`modal-${currentImageIndex}`]: false }))}
                    onError={(e) => {
                      setImageLoading(prev => ({ ...prev, [`modal-${currentImageIndex}`]: false }));
                      e.target.src = 'https://via.placeholder.com/400x500/f3f4f6/ec4899?text=Image+Not+Available';
                    }}
                  />
                </AnimatePresence>

                {/* Navigation Arrows */}
                {selectedWig.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentImageIndex((prev) => 
                        prev === 0 ? selectedWig.images.length - 1 : prev - 1
                      )}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
                    >
                      <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                  <button
                      onClick={() => setCurrentImageIndex((prev) => 
                        prev === selectedWig.images.length - 1 ? 0 : prev + 1
                      )}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
                    >
                      <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                  </button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                  {currentImageIndex + 1} of {selectedWig.images.length}
                </div>
              </div>

              {/* Thumbnail Navigation */}
              {selectedWig.images.length > 1 && (
                <div className="p-4 border-t border-gray-200">
                  <div className="flex gap-2 justify-center overflow-x-auto">
                    {selectedWig.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                          index === currentImageIndex 
                            ? 'border-pink-500 scale-110' 
                            : 'border-gray-200 hover:border-pink-300'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
            ))}
          </div>
        </div>
              )}

              {/* Modal Footer */}
              <div className="p-4 bg-gray-50">
                <motion.button
                  onClick={() => {
                    const message = `Hi! I want to buy the ${selectedWig.name} wig. Please send me pricing and availability.`;
                    window.open(`https://wa.me/2349090396515?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                  className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-poppins font-semibold py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                  </svg>
                  Buy Now
                </motion.button>
          </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WigsSaleSection;