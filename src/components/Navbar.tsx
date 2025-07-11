import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#top' },
    { name: 'About', href: '/#about-preview' },
    { name: 'Services', href: '/#services' },
    { name: 'Portfolio', href: '/#portfolio' },
  ];

  const isActive = (path: string) => location.hash === path.replace('/#', '#');
  const isHomePage = location.pathname === '/';
  const isPortfolioPage = location.pathname === '/portfolio';

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled || !isHomePage
        ? 'bg-white shadow-md py-3'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <HashLink
              to="/#top"
              smooth
              className={`flex items-center border-b-2 transition-transform duration-300 transform hover:scale-105 ${scrolled || !isHomePage
                ? 'border-blue-600'
                : 'border-white'
                }`}
            >
              <img
                src="https://hashisbucket.s3.us-east-2.amazonaws.com/Single+Bridge/Logo2.png"
                alt="Single Bridge Logo"
                className="h-10 w-auto -mr-1"
              />
              <span
                className={`text-xl font-bold ${scrolled || !isHomePage
                  ? 'text-blue-600'
                  : 'text-white'
                  }`}
              >
                Single Bridge
              </span>
            </HashLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              const isPortfolioLink = link.name === 'Portfolio';

              if (isPortfolioLink && isPortfolioPage) {
                return (
                  <span
                    key={link.name}
                    className={`font-medium cursor-default ${scrolled || !isHomePage
                      ? 'text-primary-500'
                      : 'text-white'
                      }`}
                  >
                    {link.name}
                  </span>
                );
              }

              return (
                <HashLink
                  key={link.name}
                  smooth
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium transition-colors duration-200 ${isActive(link.href)
                    ? 'text-primary-500'
                    : scrolled || !isHomePage
                      ? 'text-secondary-800 hover:text-primary-500'
                      : 'text-white hover:text-primary-100'
                    }`}
                >
                  {link.name}
                </HashLink>
              );
            })}
            <HashLink
              smooth
              to="/#contact"
              className="btn btn-primary py-2 px-4 text-white font-medium transition-colors duration-200 hover:bg-primary-600 hover:text-white"
            >
              Connect Us
            </HashLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? (
              <X
                className={
                  scrolled || !isHomePage
                    ? 'text-secondary-800'
                    : 'text-white'
                }
                size={24}
              />
            ) : (
              <Menu
                className={
                  scrolled || !isHomePage
                    ? 'text-secondary-800'
                    : 'text-white'
                }
                size={24}
              />
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
              {navLinks.map((link) => {
                const isPortfolioLink = link.name === 'Portfolio';

                if (isPortfolioLink && isPortfolioPage) {
                  return (
                    <span
                      key={link.name}
                      className="text-primary-500 font-medium py-2 cursor-default"
                    >
                      {link.name}
                    </span>
                  );
                }

                return (
                  <HashLink
                    key={link.name}
                    smooth
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-secondary-700 hover:text-primary-500 font-medium transition-colors duration-200 py-2 ${isActive(link.href) ? 'text-primary-500' : ''
                      }`}
                  >
                    {link.name}
                  </HashLink>
                );
              })}
              <HashLink
                smooth
                to="/#contact"
                onClick={() => setIsOpen(false)}
                className="btn btn-primary w-full"
              >
                Connect Us
              </HashLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
