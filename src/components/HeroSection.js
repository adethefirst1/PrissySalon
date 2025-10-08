import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: "linear",
    pauseOnHover: true,
  };

  const heroImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      alt: "Elegant hair styling"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1969&q=80",
      alt: "Professional makeup application"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Luxury nail care"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Relaxing facial treatment"
    },
    {
      id: 5,
      url: "/photo.jpg",
      alt: "Prissy Salon interior with styling stations"
    }
  ];

  return (
    <section className="relative h-screen overflow-hidden">
      <Slider {...settings}>
        {heroImages.map((image) => (
          <div key={image.id} className="relative h-screen">
            <div 
              className="h-full w-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${image.url})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blush-200/30 to-pearl-300/20"></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="text-center text-white px-4 max-w-4xl mx-auto"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <motion.h1 
                    className="font-playfair text-4xl md:text-6xl lg:text-7xl font-light mb-6 text-cream-50 drop-shadow-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  >
                    Prissy Salon
                  </motion.h1>
                  <motion.h2 
                    className="font-playfair text-xl md:text-2xl lg:text-3xl font-extralight mb-4 text-cream-100 drop-shadow-md"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  >
                    Hair & Beauty
                  </motion.h2>
                  <motion.p 
                    className="font-poppins text-base md:text-lg lg:text-xl font-thin text-cream-200 drop-shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                  >
                    Redefining Beauty & Elegance
                  </motion.p>
                  <motion.div 
                    className="mt-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.8 }}
                  >
                    <motion.button 
                      onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
                      className="btn-luxury group relative overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10 flex items-center space-x-2">
                        <span>Book Your Appointment</span>
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
                      <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      
      {/* Luxury Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <div className="w-6 h-10 border-2 border-rose-300/60 rounded-full flex justify-center group cursor-pointer">
          <motion.div 
            className="w-1 h-3 bg-rose-300 rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
        </div>
        <p className="text-rose-300/80 text-xs mt-2 font-poppins font-light tracking-wider">SCROLL</p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
