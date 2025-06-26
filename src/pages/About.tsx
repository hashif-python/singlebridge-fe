import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="pt-20 md:pt-24"
    >
      <div className="bg-primary-500 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            Bridging the gap between innovative ideas and technological solutions.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg"
          >
            <p className="text-lg text-gray-700">
              At Single Bridge, we're passionate about bridging the gap between innovative ideas and technological solutions. Our team of dedicated professionals brings together decades of experience to deliver exceptional results for our clients.
            </p>
            <p className="text-lg text-gray-700">
              Founded in 2025, we've established ourselves as a trusted partner for businesses seeking to navigate the complexities of the digital landscape. Our commitment to excellence and innovation drives everything we do.
            </p>
            <p className="text-lg text-gray-700">
              We believe in creating lasting partnerships with our clients, understanding their unique challenges, and delivering solutions that drive real business value.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
              <p className="text-gray-600">To deliver innovative technology solutions that empower businesses to thrive in the digital age.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
              <p className="text-gray-600">To be the leading technology partner for forward-thinking organizations worldwide.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-3">Our Values</h3>
              <p className="text-gray-600">Innovation, integrity, excellence, and unwavering commitment to client success.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;