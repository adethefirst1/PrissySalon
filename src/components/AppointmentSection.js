import React from 'react';
import { motion } from 'framer-motion';

const AppointmentSection = () => {
  return (
    <section id="appointment" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Section Header */}
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-light text-gray-700 mb-4 sm:mb-6">
            Follow Our Journey
          </h2>
          <p className="font-poppins text-sm sm:text-base text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 font-light px-4">
            Connect with us on social media for the latest updates, beauty tips, and behind-the-scenes content.
          </p>

          {/* Split Layout - Social Media Left, Map Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 w-full">
            {/* Left Side - Social Media Links */}
            <div className="flex items-center justify-center order-2 lg:order-1">
              <div className="text-center">
                {/* Subheading */}
                <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">
                  Go Online With Us
                </h3>
                
                {/* Social Media Links - Responsive Layout */}
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-8">
                  <motion.div 
                    className="group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button className="bg-white border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 font-poppins font-medium px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl group">
                      <span className="relative z-10 flex items-center space-x-3">
                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        <span>Facebook</span>
                        <motion.svg 
                          className="w-4 h-4" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          initial={{ x: 0 }}
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.3 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </motion.svg>
                      </span>
                    </button>
                  </motion.div>
                  
                  <motion.div 
                    className="group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button className="bg-white border-2 border-gray-300 hover:border-pink-500 text-gray-700 hover:text-pink-600 font-poppins font-medium px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl group">
                      <span className="relative z-10 flex items-center space-x-3">
                        <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                        <span>Instagram</span>
                        <motion.svg 
                          className="w-4 h-4" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          initial={{ x: 0 }}
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.3 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </motion.svg>
                      </span>
                    </button>
                  </motion.div>
                  
                  <motion.div 
                    className="group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button className="bg-white border-2 border-gray-300 hover:border-black text-gray-700 hover:text-black font-poppins font-medium px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl group">
                      <span className="relative z-10 flex items-center space-x-3">
                        <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                        </svg>
                        <span>TikTok</span>
                        <motion.svg 
                          className="w-4 h-4" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          initial={{ x: 0 }}
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.3 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </motion.svg>
                      </span>
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Right Side - Map Section */}
            <div className="flex flex-col order-1 lg:order-2">
              <div className="text-center mb-4 sm:mb-6">
                <h3 className="font-playfair text-xl sm:text-2xl font-light text-gray-700 mb-2">
                  Visit Our Salon
                </h3>
              </div>
              
              {/* Google Map */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden h-48 sm:h-56 lg:h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4!2d3.4!3d6.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8f8f8f8f8f8f%3A0x1234567890123456!2sBadagry%20Roundabout%2C%20Lagos%20State%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1631234567890!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kiki Plaza, Badagry Roundabout, Lagos State"
                />
              </div>
              
              {/* Address Info */}
              <div className="text-center mt-4 sm:mt-6">
                <p className="font-poppins text-gray-700 font-medium text-sm sm:text-base mb-1">
                  Kiki Plaza, Badagry Roundabout
                </p>
                <p className="font-poppins text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
                  Lagos State, Nigeria
                </p>
                <motion.a 
                  href="https://www.google.com/maps/search/Kiki+Plaza+Badagry+Roundabout+Lagos+State"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury inline-block group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Get Directions</span>
                    <motion.svg 
                      className="w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </motion.svg>
                  </span>
                </motion.a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;