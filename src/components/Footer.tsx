import React from 'react';
import { Github, Twitter, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="inline-flex items-center mb-6 border-b-2 border-white pb-1">
              <img
                src="https://hashisbucket.s3.us-east-2.amazonaws.com/Single+Bridge/Logo2.png"
                alt="Single Bridge Logo"
                className="h-10 w-auto -mr-1"
              />
              <span className="text-xl font-bold text-white">
                Single Bridge
              </span>
            </div>



            <p className="text-gray-400 mb-6">
              Bridging the gap between innovative ideas and technological solutions. We help businesses transform through cutting-edge digital experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-secondary-800 rounded-full hover:bg-primary-500 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-secondary-800 rounded-full hover:bg-primary-500 transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="p-2 bg-secondary-800 rounded-full hover:bg-primary-500 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Software Development</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Cloud Solutions</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Web & Mobile Development</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">AI Integration</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Digital Transformation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">Stay updated with our latest news and offers.</p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-md w-full bg-secondary-800 border border-secondary-700 text-white focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
                <button
                  type="submit"
                  className="p-2 bg-primary-500 hover:bg-primary-600 rounded-r-md transition-colors"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </form>
            <p className="text-gray-500 text-sm">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>

        <hr className="border-secondary-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Single Bridge. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;