import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, BellRing } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Testimonials', href: '/testimonials' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isHomePage = location.pathname === '/';

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled || !isHomePage ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <BellRing size={32} className={`${scrolled || !isHomePage ? 'text-primary-500' : 'text-white'} mr-2`} />
              <span className={`text-xl font-bold ${scrolled || !isHomePage ? 'text-primary-500' : 'text-white'}`}>
                Single Bridge
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href}
                className={`font-medium transition-colors duration-200 ${
                  isActive(link.href) ? 'text-primary-500' :
                  scrolled || !isHomePage ? 'text-secondary-700 hover:text-primary-500' : 'text-white hover:text-primary-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="#contact" 
              className="btn btn-primary py-2"
            >
              Get Started
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className={scrolled || !isHomePage ? 'text-secondary-800' : 'text-white'} size={24} />
            ) : (
              <Menu className={scrolled || !isHomePage ? 'text-secondary-800' : 'text-white'} size={24} />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-secondary-700 hover:text-primary-500 font-medium transition-colors duration-200 py-2 ${
                    isActive(link.href) ? 'text-primary-500' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="btn btn-primary w-full"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;