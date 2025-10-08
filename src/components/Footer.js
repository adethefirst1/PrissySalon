import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
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
              <a 
                href="tel:+2349090396515"
                className="font-poppins text-cream-200 hover:text-rose-300 text-xs sm:text-sm transition-colors duration-300 cursor-pointer"
              >
                +2349090396515
              </a>
            </div>
            <div className="flex items-center justify-center sm:justify-start space-x-2">
              <span className="text-cream-300">✉️</span>
        <a
          href="mailto:pri_lawbeauty@outlook.com"
          className="font-poppins text-cream-200 hover:text-rose-300 text-xs sm:text-sm transition-colors duration-300 cursor-pointer"
        >
          pri_lawbeauty@outlook.com
        </a>
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
              <motion.button 
                className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Facebook"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white icon-line" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </motion.button>
              <motion.a 
                href="https://www.instagram.com/prissylawson_hairandbeauty?igsh=MXZpYmptenBxMGFuMg=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-pink-500 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Instagram"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </motion.a>
              <motion.button 
                className="w-8 h-8 sm:w-10 sm:h-10 bg-black hover:bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="TikTok"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white icon-line" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </motion.button>
              <motion.button 
                className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-500 hover:bg-yellow-600 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Snapchat"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.134 4.259.989.299 1.445.66 1.445 1.184 0 .09-.014.195-.045.299-.09.43-.645.824-1.409.914-.195.03-.315.06-.375.089-.225.075-.345.269-.42.464-.09.239-.09.569-.016.868.135.449.375.973.51 1.259.06.136.086.256.086.362 0 .244-.129.524-.524.584-.465.074-1.064.135-1.679.135-1.949 0-3.818-.374-4.737-.809-.105-.045-.211-.104-.316-.149-.331-.149-.65-.299-.975-.299-.329 0-.648.15-.979.299-.105.045-.21.104-.315.149-.915.435-2.784.809-4.732.809-.615 0-1.214-.061-1.68-.135-.389-.06-.524-.34-.524-.584 0-.106.03-.226.09-.362.134-.286.374-.81.509-1.259.075-.299.075-.629-.015-.868-.075-.195-.195-.389-.42-.464-.061-.029-.181-.059-.376-.089-.764-.09-1.319-.484-1.409-.914a1.065 1.065 0 01-.045-.299c0-.524.455-.885 1.445-1.184 2.609-.784 4.074-4.123 4.135-4.259l.014-.015c.181-.344.21-.644.121-.868-.195-.45-.884-.675-1.334-.81-.135-.044-.254-.09-.344-.119-.823-.329-1.228-.719-1.213-1.168 0-.359.284-.689.734-.838.15-.061.327-.09.51-.09.119 0 .298.016.464.104.374.181.733.285 1.033.301.198 0 .326-.045.401-.09-.009-.165-.019-.33-.031-.51l-.002-.06c-.105-1.628-.23-3.654.298-4.847C7.86 1.069 11.216.793 12.206.793z"/>
                </svg>
              </motion.button>
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
              <motion.button 
                className="font-poppins text-cream-300 hover:text-rose-300 transition-colors duration-300 text-xs"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Privacy Policy
              </motion.button>
              <motion.button 
                className="font-poppins text-cream-300 hover:text-rose-300 transition-colors duration-300 text-xs"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Terms of Service
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
