import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { 
      id: 1, 
      title: "Hair Styling", 
      description: "Complete hair services including styling, coloring, and treatments for beautiful, healthy hair",
      duration: "1-3 hours",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      features: ["Hair Cutting & Styling", "Hair Coloring", "Hair Treatment", "Blow Dry", "Hair Consultation"],
      color: "from-blue-500 to-cyan-500"
    },
    { 
      id: 2, 
      title: "Makeup", 
      description: "Professional makeup application for all occasions and events",
      duration: "1-2 hours",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      features: ["Bridal Makeup", "Event Makeup", "Makeup Lessons", "Special Occasion"],
      color: "from-rose-500 to-pink-500"
    },
    { 
      id: 3, 
      title: "Nail Art", 
      description: "Creative nail designs and professional manicure services",
      duration: "1 hour",
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      features: ["Manicure", "Pedicure", "Nail Art", "Gel Polish"],
      color: "from-orange-500 to-red-500"
    },
    { 
      id: 4, 
      title: "Facial Care", 
      description: "Rejuvenating facial treatments and advanced skincare",
      duration: "1-1.5 hours",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      features: ["Deep Cleansing", "Anti-Aging", "Hydrating", "Skin Consultation"],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const handleServiceClick = (service) => {
    setSelectedService(selectedService?.id === service.id ? null : service);
  };

  const handleWhatsAppClick = (service) => {
    const message = `Hi! I'm interested in booking the ${service.title} service at PrissyLawson. Can you provide more information about pricing and availability?`;
    const whatsappUrl = `https://wa.me/2349090396515?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,143,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(252,165,165,0.08),transparent_50%)]"></div>
      
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
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto"></div>
          </motion.div>
          <motion.h2 
            className="font-playfair text-4xl sm:text-5xl md:text-6xl font-light text-gray-800 mb-6 tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Our <span className="font-bold text-rose-600">Services</span>
          </motion.h2>
          <motion.p 
            className="font-poppins text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto px-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Professional beauty services crafted with luxury and precision
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
            {services.map((service, index) => (
            <motion.div 
                key={service.id}
              className="luxury-card group cursor-pointer relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => handleServiceClick(service)}
              >
                {/* Service Image */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <motion.img 
                    src={service.image}
                    alt={service.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                
                {/* Duration Badge */}
                <motion.div 
                  className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ⏱️ {service.duration}
                </motion.div>
                
                {/* Quick View Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <button className="bg-white text-gray-800 px-6 py-3 rounded-full font-poppins font-medium shadow-lg">
                    View Details
                  </button>
                </motion.div>
              </div>

              {/* Service Content */}
              <div className="p-6 sm:p-8 relative">
                <div className="absolute top-0 left-8 w-16 h-0.5 bg-gradient-to-r from-rose-400 to-pink-400 transform -translate-y-1"></div>
                
                <motion.h3 
                  className="font-playfair text-xl font-semibold text-gray-800 mb-3"
                  whileHover={{ color: "#f472b6" }}
                  transition={{ duration: 0.3 }}
                >
                  {service.title}
                </motion.h3>
                
                <p className="font-poppins text-gray-600 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features List */}
                <div className="mb-6">
                  <h4 className="font-poppins text-sm font-semibold text-gray-700 mb-2">What's Included:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <motion.span
                        key={idx}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                        whileHover={{ scale: 1.05, backgroundColor: "#fef3f2" }}
                        transition={{ duration: 0.2 }}
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                {/* Elegant Underline */}
                <motion.div 
                  className="w-12 h-0.5 bg-gradient-to-r from-rose-300 to-pink-300 mb-6"
                  whileHover={{ width: "48px" }}
                  transition={{ duration: 0.5 }}
                ></motion.div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWhatsAppClick(service);
                    }}
                    className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-poppins font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 text-sm shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Book Now</span>
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
                  </motion.button>
                  
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleServiceClick(service);
                    }}
                    className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Service Details Modal */}
        {selectedService && (
          <motion.div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div 
              className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-2">
                    {selectedService.title}
                  </h3>
                  <p className="text-gray-600">{selectedService.description}</p>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-1">Duration</h4>
                  <p className="text-lg text-gray-600">{selectedService.duration}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">What's Included:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedService.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        
                <motion.button
                  onClick={() => handleWhatsAppClick(selectedService)}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-poppins font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book This Service
                </motion.button>
          </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;