import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cream-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-start">
          {/* Salon Name */}
          <div className="lg:col-span-1 text-center sm:text-left">
            <h3 className="font-playfair text-xl sm:text-2xl font-light mb-2">
              Prissy Salon
            </h3>
            <p className="font-poppins text-cream-200 text-xs sm:text-sm font-light">
              Redefining Beauty & Elegance
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-2 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-2">
              <span className="text-cream-300">📍</span>
              <p className="font-poppins text-cream-200 text-xs sm:text-sm">
                Kiki Plaza, Badagry Roundabout
              </p>
            </div>
            <div className="flex items-center justify-center sm:justify-start space-x-2">
              <span className="text-cream-300">📞</span>
              <p className="font-poppins text-cream-200 text-xs sm:text-sm">
                (555) 123-4567
              </p>
            </div>
            <div className="flex items-center justify-center sm:justify-start space-x-2">
              <span className="text-cream-300">✉️</span>
              <p className="font-poppins text-cream-200 text-xs sm:text-sm">
                info@prissysalon.com
              </p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-2 text-center sm:text-left">
            <h4 className="font-playfair text-xs sm:text-sm font-light text-cream-100 mb-2">Hours</h4>
            <div className="space-y-1 text-xs text-cream-200">
              <p>Mon-Fri: 9:00 AM - 7:00 PM</p>
              <p>Saturday: 8:00 AM - 6:00 PM</p>
              <p>Sunday: 10:00 AM - 4:00 PM</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4 text-center sm:text-left">
            <h4 className="font-playfair text-xs sm:text-sm font-light text-cream-100 mb-2">Follow Us</h4>
            <div className="flex justify-center sm:justify-start space-x-2 sm:space-x-3">
              <button 
                className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button 
                className="w-8 h-8 sm:w-10 sm:h-10 bg-pink-500 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.993h-1.17c-.432 0-.78-.348-.78-.78s.348-.78.78-.78h1.17c.432 0 .78.348.78.78s-.348.78-.78.78zm-5.83 9.993c-2.58 0-4.676-2.096-4.676-4.676s2.096-4.676 4.676-4.676 4.676 2.096 4.676 4.676-2.096 4.676-4.676 4.676zm0-7.83c-1.74 0-3.154 1.414-3.154 3.154s1.414 3.154 3.154 3.154 3.154-1.414 3.154-3.154-1.414-3.154-3.154-3.154z"/>
                </svg>
              </button>
              <button 
                className="w-8 h-8 sm:w-10 sm:h-10 bg-black hover:bg-gray-800 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </button>
              <button 
                className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-500 hover:bg-yellow-600 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Snapchat"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM17.25 15.5c-.5.3-1.1.4-1.7.4-.6 0-1.2-.1-1.7-.4-.1 0-.2-.1-.2-.2s.1-.2.2-.2c.5.3 1.1.4 1.7.4.6 0 1.2-.1 1.7-.4.1 0 .2.1.2.2s-.1.2-.2.2zm-5.3-1.1c-.1 0-.2-.1-.2-.2s.1-.2.2-.2c.3.2.6.3 1 .3.4 0 .7-.1 1-.3.1 0 .2.1.2.2s-.1.2-.2.2c-.3.2-.6.3-1 .3-.4 0-.7-.1-1-.3zm-2.4-1.1c-.1 0-.2-.1-.2-.2s.1-.2.2-.2c.3.2.6.3 1 .3.4 0 .7-.1 1-.3.1 0 .2.1.2.2s-.1.2-.2.2c-.3.2-.6.3-1 .3-.4 0-.7-.1-1-.3z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream-700 mt-4 sm:mt-6 pt-3 sm:pt-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="font-poppins text-cream-300 text-xs text-center sm:text-left">
              © {currentYear} Prissy Salon. All rights reserved.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <button 
                className="font-poppins text-cream-300 hover:text-blush-300 transition-colors duration-300 text-xs"
              >
                Privacy Policy
              </button>
              <button 
                className="font-poppins text-cream-300 hover:text-blush-300 transition-colors duration-300 text-xs"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
