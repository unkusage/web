'use client';
import React, { useState } from 'react';
import { DropletIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    React.useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
      <nav
        className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-md ${
          isScrolled ? 'bg-black/90 shadow-xl' : 'bg-black/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <DropletIcon className="h-8 w-8 text-blue-500 animate-pulse" />
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'Courses', 'About', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-300 hover:text-blue-500 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <Navbar />
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 bg-black/95 z-40 pt-20"
        >
          <div className="flex flex-col items-center space-y-8 p-8">
            {['Home', 'Courses', 'About', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xl text-white hover:text-blue-400"
              >
                {link}
              </a>
            ))}
          </div>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(64,87,255,0.2)_0%,_transparent_60%)]" />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Revolutionize <span className="text-blue-500">Dropshipping</span>
          </h1>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all"
          >
            Get Started
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default App;
