import React from 'react';
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
                <div className="text-center text-white px-4 max-w-4xl mx-auto">
                  <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-light mb-6 animate-fade-in text-cream-50 drop-shadow-lg">
                    Prissy Salon
                  </h1>
                  <h2 className="font-playfair text-xl md:text-2xl lg:text-3xl font-extralight mb-4 animate-fade-in text-cream-100 drop-shadow-md" style={{ animationDelay: '0.3s' }}>
                    Hair & Beauty
                  </h2>
                  <p className="font-poppins text-base md:text-lg lg:text-xl font-thin animate-fade-in text-cream-200 drop-shadow-sm" style={{ animationDelay: '0.6s' }}>
                    Redefining Beauty & Elegance
                  </p>
                  <div className="mt-8 animate-slide-up" style={{ animationDelay: '0.9s' }}>
                    <button 
                      onClick={() => document.getElementById('appointment').scrollIntoView({ behavior: 'smooth' })}
                      className="bg-blush-400/80 hover:bg-blush-500/90 text-cream-50 font-poppins font-light px-8 py-3 rounded-full text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm"
                    >
                      Book Your Appointment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border-2 border-cream-200 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-cream-200 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
