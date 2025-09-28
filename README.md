# Prissy Salon - Landing Page

A beautiful, responsive landing page for Prissy Salon built with React and TailwindCSS.

## Features

✨ **Hero Section** - Full-width image carousel with elegant overlay text
🎨 **Services Section** - Grid layout showcasing salon services
📅 **Appointment Booking** - Google Calendar integration for easy booking
💬 **WhatsApp Contact** - Direct messaging integration
📱 **Fully Responsive** - Mobile-friendly design
🎨 **Cream Color Scheme** - Elegant cream, gold, and rose color palette

## Tech Stack

- **React 18** - Modern React with hooks
- **TailwindCSS** - Utility-first CSS framework
- **React Slick** - Image carousel component
- **Google Fonts** - Playfair Display & Poppins fonts

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm start
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Customization

### Replace Placeholder Content

1. **Images**: Replace Unsplash placeholder URLs in `src/components/HeroSection.js` with your actual salon photos
2. **Phone Number**: Update the WhatsApp phone number in `src/components/ContactSection.js`
3. **Calendar Link**: Replace the Google Calendar placeholder in `src/components/AppointmentSection.js`
4. **Contact Info**: Update address, phone, and email in `src/components/ContactSection.js` and `src/components/Footer.js`

### Color Scheme

The cream-based color scheme is defined in `tailwind.config.js`:
- **Cream**: Various shades from cream-50 to cream-900
- **Gold**: Accent colors for highlights
- **Rose**: Soft pink accents

## Project Structure

```
src/
├── components/
│   ├── HeroSection.js      # Hero carousel with overlay
│   ├── ServicesSection.js  # Services grid
│   ├── AppointmentSection.js # Booking section
│   ├── ContactSection.js   # Contact & WhatsApp
│   └── Footer.js           # Footer with links
├── App.js                  # Main app component
├── index.js               # React entry point
└── index.css              # Global styles & Tailwind
```

## Features Implemented

✅ **Hero Section** - Image carousel with smooth transitions
✅ **Services Grid** - 6 service cards with hover effects
✅ **Appointment Booking** - Google Calendar integration
✅ **WhatsApp Contact** - Click-to-chat functionality
✅ **Responsive Design** - Mobile-first approach
✅ **Elegant Typography** - Playfair Display + Poppins
✅ **Smooth Animations** - Fade-in and slide effects
✅ **Cream Color Scheme** - Professional salon aesthetic

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for Prissy Salon.
