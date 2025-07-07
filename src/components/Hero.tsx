import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Smartphone, Cloud, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-secondary-800 overflow-hidden"
    >
      {/* Background overlay with image */}
      <div
        className="absolute inset-0 bg-hero-pattern bg-cover bg-center"
        style={{ opacity: 0.2 }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/90 to-secondary-800/80"></div>

      <div className="container relative z-10 px-4 py-32 md:py-0">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Bridging Technology <br className="hidden md:block" />
              <span className="text-primary-400">With Innovation</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-lg">
              We craft cutting-edge digital solutions that help startups and enterprises thrive with modern software, cloud-native systems, and AI-powered applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn btn-primary transition-colors duration-300 hover:bg-primary-600 hover:text-white">
                Get a Free Consultation
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#services" className="btn btn-secondary transition-colors duration-300 hover:bg-secondary-600 hover:text-white">
                Explore Our Services
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-500/20 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-accent-500/20 rounded-full filter blur-3xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/10">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { title: "Web Applications", icon: <Code2 size={32} className="mx-auto text-primary-400" /> },
                    { title: "Mobile Solutions", icon: <Smartphone size={32} className="mx-auto text-primary-400" /> },
                    { title: "Cloud Architecture", icon: <Cloud size={32} className="mx-auto text-primary-400" /> },
                    { title: "AI Integrations", icon: <Sparkles size={32} className="mx-auto text-primary-400" /> },
                  ].map((item, index) => (
                    <div key={index} className="text-center p-4 bg-white/5 rounded-xl">
                      <div className="mb-2">{item.icon}</div>
                      <p className="text-gray-300 text-sm">{item.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <a
            href="#about-preview"
            className="flex flex-col items-center text-white opacity-70 hover:opacity-100 transition-opacity"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowRight size={24} className="transform rotate-90" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
