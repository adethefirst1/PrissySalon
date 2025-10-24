import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WigsSaleSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('Random');
  const [selectedWig, setSelectedWig] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [randomWigs, setRandomWigs] = useState([]);
  
  const wigs = [
    {
      id: 2,
      name: "Premium Burmese Curls",
      description: "Luxury Burmese curl wig with natural bounce and heat-resistant fibers",
      images: [
        "https://drive.google.com/thumbnail?id=1BHRhCRVHzmd_de1Tx08lRGTY-tEw22ai&sz=w1000",
        "https://drive.google.com/thumbnail?id=1LdXVsw73DNbbFfY5sNel31y1cyn6qv8n&sz=w1000",
        "https://drive.google.com/thumbnail?id=1f7vGr-AOE15luHEVMGvP8PWplca8qwv9&sz=w1000",
        "https://drive.google.com/thumbnail?id=1RJDORL2uvgQDWWu0Dv77vUz0A-6TgqaZ&sz=w1000"
      ],
      category: "Burmese Curls",
      inStock: true,
      isNew: true,
      isSale: false
    },
    {
      id: 4,
      name: "Long Waves",
      description: "Elegant long wavy hair with premium quality fibers",
      images: [
        "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=500&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=500&fit=crop&crop=face"
      ],
      category: "Pixie Curls",
      inStock: true,
      isNew: false,
      isSale: true
    },
    {
      id: 7,
      name: "Luxury Burmese Curls",
      description: "Premium Burmese curl wig with natural texture and elegant styling",
      images: [
        "https://drive.google.com/thumbnail?id=1PNdzD3j4JFNLGzLomDyXmhmG1QV7g3M4&sz=w1000",
        "https://drive.google.com/thumbnail?id=1VyakSE0aAbPvBlUKXmFgQwRRQHtVHaQ5&sz=w1000",
        "https://drive.google.com/thumbnail?id=1AGYMWsugot_e9n6hg1L2aWNGWXidLBHM&sz=w1000",
        "https://drive.google.com/thumbnail?id=1WUmLa0d_9ype8bzAx3o1wnsqJhEU-vbv&sz=w1000"
      ],
      category: "Burmese Curls",
      inStock: true,
      isNew: true,
      isSale: false
    },
    {
      id: 8,
      name: "Premium Bone Straight",
      description: "Luxury bone straight wig with silky smooth texture and natural shine",
      images: [
        "https://drive.google.com/thumbnail?id=1894PKgdJy7H7JvZTRqMRSfTa_IxexHIg&sz=w1000",
        "https://drive.google.com/thumbnail?id=1I994gBglcP-qxg6_JcnhzdD2IMBEIWv6&sz=w1000",
        "https://drive.google.com/thumbnail?id=1fRUQCyCrWlzOaITSnOpA_HaJiJv08JhP&sz=w1000",
        "https://drive.google.com/thumbnail?id=1SdLzEZFkxCBCx-z4Sb_hs3M6RK2WRV62&sz=w1000"
      ],
      category: "Bone Straight",
      inStock: true,
      isNew: true,
      isSale: false
    },
    {
      id: 9,
      name: "Classic Bone Straight",
      description: "Timeless bone straight wig with premium quality and elegant styling",
      images: [
        "https://drive.google.com/thumbnail?id=13HFBCpbDPTXK5ZyEz7mZfqoute6s4bd5&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Tbl4uID0vc6xXkOITujL6f_1asz3bilm&sz=w1000",
        "https://drive.google.com/thumbnail?id=1kHLIug02zNJnsdqbZl4dJq7xU70QXUAL&sz=w1000",
        "https://drive.google.com/thumbnail?id=1PlXc8VSZTMEiEJZQDOLrbgoyaSZpR9Od&sz=w1000"
      ],
      category: "Bone Straight",
      inStock: true,
      isNew: true,
      isSale: false
    },
    {
      id: 10,
      name: "Elegant Bone Straight",
      description: "Sophisticated bone straight wig with luxurious texture and perfect styling",
      images: [
        "https://drive.google.com/thumbnail?id=1iWd9VVJkPlUIxYyEMTYURGZ86K1Po9ie&sz=w1000",
        "https://drive.google.com/thumbnail?id=1EuWm__21CBZUD0VHpgo6EWy3AGhhlFhU&sz=w1000",
        "https://drive.google.com/thumbnail?id=1O9WMkZuio4GuDLTMMwpr2ttVZmx5-oDm&sz=w1000",
        "https://drive.google.com/thumbnail?id=1-TNHaTY4rWHAteCprrr-pG5ap8GiM11A&sz=w1000"
      ],
      category: "Bone Straight",
      inStock: true,
      isNew: true,
      isSale: false
    },
    {
      id: 11,
      name: "Deluxe Bone Straight",
      description: "Premium bone straight wig with exceptional quality and stunning appearance",
      images: [
        "https://drive.google.com/thumbnail?id=1FcE_cREJ3OJf8_dhgQ2U3G3u8LAXcI0M&sz=w1000",
        "https://drive.google.com/thumbnail?id=1C3LA4d-MlcWofnrB0yhLiLjXJSOkVSV1&sz=w1000",
        "https://drive.google.com/thumbnail?id=1t64sRIPF56AfilSraYYdmLgYBjs_nIuV&sz=w1000",
        "https://drive.google.com/thumbnail?id=1qUb_GhYjn58qs-dBvAFPyXa7mWr49KzN&sz=w1000"
      ],
      category: "Bone Straight",
      inStock: true,
      isNew: true,
      isSale: false
    },
    {
      id: 12,
      name: "Ultimate Bone Straight",
      description: "The finest bone straight wig with superior quality and flawless styling",
      images: [
        "https://drive.google.com/thumbnail?id=1Ag3M2wkAoWsPs2TN75HmdL0qGVlUJA38&sz=w1000",
        "https://drive.google.com/thumbnail?id=1jijfvOz-xbISCty3gUyqczxIcNmpSiwY&sz=w1000",
        "https://drive.google.com/thumbnail?id=1FBnHJcPyjXPyBP5lT48ame13Rcdtg1kW&sz=w1000",
        "https://drive.google.com/thumbnail?id=197SseFgYDbOkCefUOztENEh0MWkoyanj&sz=w1000"
      ],
      category: "Bone Straight",
      inStock: true,
      isNew: true,
      isSale: false
    },
    {
      id: 13,
      name: "Signature Bone Straight",
      description: "Exclusive bone straight wig with signature quality and elegant design",
      images: [
        "https://drive.google.com/thumbnail?id=1hbzxken2Ep_3APmiLPO55UE0Nw6TGK3i&sz=w1000",
        "https://drive.google.com/thumbnail?id=1jWatL1cx-8dAF2QYBbGfkSY9NmDPmuBI&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ZfrU828etLAWtpjVgLXXtAgdsCjTwQUD&sz=w1000",
        "https://drive.google.com/thumbnail?id=1WSDUf4CgdfTKRQvBvKuK2CbHMcS4zkyB&sz=w1000"
      ],
      category: "Bone Straight",
      inStock: true,
      isNew: true,
      isSale: false
    },
    {
      id: 14,
      name: "Royal Bone Straight",
      description: "Regal bone straight wig with premium craftsmanship and luxurious feel",
      images: [
        "https://drive.google.com/thumbnail?id=1Xpl12uv2KHA6KyMfvl47JRJs3NIKM_xL&sz=w1000",
        "https://drive.google.com/thumbnail?id=1JHd8JYbmAf6ZR0jc8OWlfpy8iqP6m0Hg&sz=w1000",
        "https://drive.google.com/thumbnail?id=1JZOo9B4caiVu8alHGcVtuOOdBt4I6Yyd&sz=w1000",
        "https://drive.google.com/thumbnail?id=1XzhFb-6f8D72wX9r7Tdk8DaMZze6VMm-&sz=w1000"
      ],
      category: "Bone Straight",
      inStock: true,
      isNew: true,
      isSale: false
    },
    {
      id: 15,
      name: "Premium Braided Wig",
      description: "Beautiful braided wig with intricate styling and authentic look",
      images: [
        "https://drive.google.com/thumbnail?id=1-OfI74jx5h7vQb2KC8LvqfjEuw8xt61E&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ksSzCkuVd43mbynPCvZuxZ5cEvv5-yjF&sz=w1000",
        "https://drive.google.com/thumbnail?id=1wVBl5SntLXMkYtwjKbfTRy0Q1s4ziJ9s&sz=w1000",
        "https://drive.google.com/thumbnail?id=1MR5TYbr37Wh3nDbKVVrna62NYhJ9eVug&sz=w1000"
      ],
      category: "Braided Wigs",
      inStock: true,
      isNew: true,
      isSale: false
    },
    {
      id: 16,
      name: "Luxury Braided Wig",
      description: "Elegant braided wig with sophisticated design and premium quality",
      images: [
        "https://drive.google.com/thumbnail?id=1Nh8E4KNPnuvDlgw1WID5XWXJ7yM1A278&sz=w1000",
        "https://drive.google.com/thumbnail?id=1vvgtgvkRZcr9TztS4Zm5tGMJKDv_tlSY&sz=w1000",
        "https://drive.google.com/thumbnail?id=17UJ4-m15rQUIdjLv3ucGMLMs-zjNQPwh&sz=w1000",
        "https://drive.google.com/thumbnail?id=1wtHlza3WOoCKSG351Suwj09uIarHTAJV&sz=w1000"
      ],
      category: "Braided Wigs",
      inStock: true,
      isNew: true,
      isSale: false
    },
    {
      id: 17,
      name: "Classic Braided Wig",
      description: "Timeless braided wig with traditional styling and exceptional craftsmanship",
      images: [
        "https://drive.google.com/thumbnail?id=1ei5e3VniYPq_hzBayLQqiK21iU8c38Wt&sz=w1000",
        "https://drive.google.com/thumbnail?id=1-ZmLoysNEbBvns843G0Jprq0VId4skCd&sz=w1000",
        "https://drive.google.com/thumbnail?id=1LT6CQOSIRiGFp3f5dOluvl2KHNrK7-lA&sz=w1000",
        "https://drive.google.com/thumbnail?id=190WVMujUb56obH7ZegOU_2ZcaLLZKUe5&sz=w1000"
      ],
      category: "Braided Wigs",
      inStock: true,
      isNew: true,
      isSale: false
    },
    {
      id: 18,
      name: "Deluxe Braided Wig",
      description: "Premium braided wig with exquisite detailing and superior quality",
      images: [
        "https://drive.google.com/thumbnail?id=1bqCw7KoGBhx0ttX64AzbDl9sjZ5CqTeP&sz=w1000",
        "https://drive.google.com/thumbnail?id=1kwEmsMYrKeIJ2Sro--NjgiE1uthJCPxN&sz=w1000",
        "https://drive.google.com/thumbnail?id=1kLBMryu7-DhAuYwh_eWD5v-X54cY2PW8&sz=w1000",
        "https://drive.google.com/thumbnail?id=1C0UdUyAMzNgkZksWxHDh5nxqRWJtfhBh&sz=w1000"
      ],
      category: "Braided Wigs",
      inStock: true,
      isNew: true,
      isSale: false
    }
  ];

  const categories = ['Random', 'Bone Straight', 'Burmese Curls', 'Body Wave', 'Pixie Curls', 'Braided Wigs'];

  // Function to get random wigs
  const getRandomWigs = useCallback((count = 6) => {
    const shuffled = [...wigs].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }, [wigs]);

  // Update random wigs when component mounts or when Random is selected
  useEffect(() => {
    if (selectedCategory === 'Random') {
      setRandomWigs(getRandomWigs(6));
    }
  }, [selectedCategory, getRandomWigs]);

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
          
          {/* Shuffle Button for Random Category */}
          {selectedCategory === 'Random' && (
            <motion.button
              onClick={() => setRandomWigs(getRandomWigs(6))}
              className="px-4 py-3 rounded-full font-poppins font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Shuffle
        </div>
            </motion.button>
          )}
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
                className="relative h-64 sm:h-72 overflow-hidden cursor-pointer"
                onClick={() => {
                  setSelectedWig(wig);
                  setCurrentImageIndex(0);
                }}
              >
                {/* Main Image */}
                <motion.img 
                  src={wig.images[0]}
                    alt={wig.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Gallery Indicator */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-white text-xs font-medium">{wig.images.length}</span>
                  </div>
                  
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
                  
                
                  
                  {/* Elegant Underline */}
                <motion.div 
                  className="w-12 h-0.5 bg-gradient-to-r from-pink-300 to-rose-300 mb-6"
                  whileHover={{ width: "48px" }}
                  transition={{ duration: 0.5 }}
                ></motion.div>
                
                {/* Buy Now Button */}
                <motion.button
                  onClick={() => {
                    const message = `Hi! I want to buy the ${wig.name} wig. Please send me pricing and availability.`;
                    window.open(`https://wa.me/2349090396515?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                  className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-poppins font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                  </svg>
                  Buy Now
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
              className="bg-white rounded-3xl max-w-md w-full max-h-[95vh] overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-gray-800">{selectedWig.name}</h3>
                  <p className="font-poppins text-gray-600 text-sm">{selectedWig.description}</p>
                </div>
                <button
                  onClick={() => setSelectedWig(null)}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Image Gallery */}
              <div className="relative">
                <motion.img
                  key={currentImageIndex}
                  src={selectedWig.images[currentImageIndex]}
                  alt={`${selectedWig.name} - Image ${currentImageIndex + 1}`}
                  className="w-full h-auto max-h-[60vh] object-contain"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                />

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