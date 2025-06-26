import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <div className="section-title">
          <h2 className="mb-4">About Single Bridge</h2>
          <p className="text-secondary-500 text-lg max-w-2xl mx-auto">
            Bridging the gap between innovative ideas and technological solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-2">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-lg overflow-hidden shadow-xl"
              >
                <img 
                  src="https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Team collaboration" 
                  className="w-full h-auto"
                />
              </motion.div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-500/20 rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent-500/20 rounded-full -z-10"></div>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
              <p className="text-secondary-600 mb-6">
                Founded in 2025, Single Bridge was born from a vision to create a technology partner that truly understands the unique challenges businesses face in the digital age. Our founders brought together decades of combined experience from leading tech companies, united by a shared commitment to excellence and innovation.
              </p>
              <p className="text-secondary-600 mb-6">
                We believe technology should empower, not complicate. That's why we focus on creating solutions that are not only technologically advanced, but also intuitive, scalable, and aligned with your business objectives.
              </p>
              
              <div className="grid sm:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 rounded-lg border border-gray-100 shadow-sm">
                  <div className="inline-flex items-center justify-center p-3 bg-primary-50 rounded-full mb-3">
                    <Target size={24} className="text-primary-500" />
                  </div>
                  <h4 className="text-lg font-semibold mb-1">Mission</h4>
                  <p className="text-secondary-600 text-sm">To deliver innovative technology solutions that drive real business results</p>
                </div>
                
                <div className="text-center p-4 rounded-lg border border-gray-100 shadow-sm">
                  <div className="inline-flex items-center justify-center p-3 bg-primary-50 rounded-full mb-3">
                    <TrendingUp size={24} className="text-primary-500" />
                  </div>
                  <h4 className="text-lg font-semibold mb-1">Vision</h4>
                  <p className="text-secondary-600 text-sm">To be the most trusted technology partner for forward-thinking organizations</p>
                </div>
                
                <div className="text-center p-4 rounded-lg border border-gray-100 shadow-sm">
                  <div className="inline-flex items-center justify-center p-3 bg-primary-50 rounded-full mb-3">
                    <Users size={24} className="text-primary-500" />
                  </div>
                  <h4 className="text-lg font-semibold mb-1">Values</h4>
                  <p className="text-secondary-600 text-sm">Innovation, Integrity, Excellence, and Client Success</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;