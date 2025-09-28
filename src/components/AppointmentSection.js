import React from 'react';

const AppointmentSection = () => {
  return (
    <section id="appointment" className="py-20 bg-gradient-to-br from-pearl-50 to-cream-100">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Section Header */}
          <h2 className="font-playfair text-3xl md:text-4xl font-light text-cream-700 mb-6">
            Follow Our Journey
          </h2>
          <p className="font-poppins text-base text-cream-600 max-w-3xl mx-auto mb-12 font-light">
            Connect with us on social media for the latest updates, beauty tips, and behind-the-scenes content.
          </p>

          {/* Split Layout - Social Media Left, Map Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
            {/* Left Side - Social Media Links */}
            <div className="flex items-center justify-center">
              <div className="text-center">
                {/* Subheading */}
                <h3 className="font-playfair text-3xl font-bold text-cream-800 mb-8">
                  Go Online With Us
                </h3>
                
                {/* Social Media Links - Horizontal */}
                <div className="flex items-center justify-center space-x-8">
                  <div className="group">
                    <a 
                      href="#" 
                      className="flex items-center text-2xl font-poppins font-bold text-gray-700 hover:text-blue-600 transition-colors duration-300 transform hover:scale-105"
                    >
                      Facebook
                      <span className="ml-2 text-lg">→</span>
                    </a>
                  </div>
                  
                  <div className="group">
                    <a 
                      href="#" 
                      className="flex items-center text-2xl font-poppins font-bold text-gray-700 hover:text-pink-600 transition-colors duration-300 transform hover:scale-105"
                    >
                      Instagram
                      <span className="ml-2 text-lg">→</span>
                    </a>
                  </div>
                  
                  <div className="group">
                    <a 
                      href="#" 
                      className="flex items-center text-2xl font-poppins font-bold text-gray-700 hover:text-black transition-colors duration-300 transform hover:scale-105"
                    >
                      TikTok
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Map Section */}
            <div className="flex flex-col">
              <div className="text-center mb-6">
                <h3 className="font-playfair text-2xl font-light text-cream-700 mb-2">
                  Visit Our Salon
                </h3>
              </div>
              
              {/* Google Map */}
              <div className="relative rounded-2xl overflow-hidden h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4!2d3.4!3d6.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8f8f8f8f8f8f%3A0x1234567890123456!2sBadagry%20Roundabout%2C%20Lagos%20State%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1631234567890!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kiki Plaza, Badagry Roundabout, Lagos State"
                ></iframe>
              </div>
              
              {/* Address Info */}
              <div className="text-center mt-6">
                <p className="font-poppins text-cream-700 font-medium text-base mb-1">
                  Kiki Plaza, Badagry Roundabout
                </p>
                <p className="font-poppins text-cream-600 text-sm mb-4">
                  Lagos State, Nigeria
                </p>
                <a 
                  href="https://www.google.com/maps/search/Kiki+Plaza+Badagry+Roundabout+Lagos+State"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blush-300/80 hover:bg-blush-400/90 text-cream-50 font-poppins font-light py-2 px-6 rounded-full text-base transition-all duration-300 transform hover:scale-105 inline-block"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;