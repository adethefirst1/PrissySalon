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
    { id: 1, url: "/img/header/IMG_3054.jpg", alt: "PrissyLawson header 1" },
    { id: 2, url: "/img/header/IMG_3059.jpg", alt: "PrissyLawson header 2" },
    { id: 3, url: "/img/header/IMG_3073.jpg", alt: "PrissyLawson header 3" },
    { id: 4, url: "/img/header/IMG_3075.jpg", alt: "PrissyLawson header 4" },
    { id: 5, url: "/img/header/IMG_3082.jpg", alt: "PrissyLawson header 5" },
  ];

  return (
    <section className="relative h-screen overflow-hidden">
      <Slider {...settings}>
        {heroImages.map((image) => (
          <div key={image.id} className="relative h-screen">
            {/* Blurred background image layer */}
            <img 
              src={image.url}
              alt={image.alt}
              className="absolute inset-0 w-full h-full object-cover blur-sm md:blur scale-105"
            />
            <div 
              className="relative h-full w-full bg-cover bg-center bg-no-repeat z-10"
              style={{ backgroundImage: `url(${image.url})` }}
            >
              {/* Overlay: semi-transparent dark layer between image and text */}
              <div
                className="absolute inset-0 z-10"
                style={{ backgroundColor: 'rgba(0,0,0,0.45)' }}
              ></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center px-4 z-20">
                <motion.div 
                  className="text-center max-w-4xl mx-auto px-4"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <motion.h1 
                    className="font-playfair text-4xl md:text-6xl lg:text-7xl font-semibold mb-6 text-white"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    style={{ textShadow: '0 2px 6px rgba(0,0,0,0.6)' }}
                  >
                    PrissyLawson
                  </motion.h1>
                  <motion.h2 
                    className="font-playfair text-xl md:text-2xl lg:text-3xl font-medium mb-4 text-[#f5f0eb]"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    style={{ textShadow: '0 2px 6px rgba(0,0,0,0.6)' }}
                  >
                    Hair & Beauty
                  </motion.h2>
                  <motion.p 
                    className="font-poppins text-base md:text-lg lg:text-xl font-normal text-[#f5f0eb]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    style={{ textShadow: '0 2px 6px rgba(0,0,0,0.6)' }}
                  >
                    Be bold, Be beautiful, Be you!
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
