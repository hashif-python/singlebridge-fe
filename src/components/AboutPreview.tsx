import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Users, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPreview = () => {
  return (
    <section id="about-preview" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About Single Bridge</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Bridging the gap between innovative ideas and technological solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
            <p className="text-gray-600 mb-6">
              Founded in 2025, Single Bridge was born from a vision to create a technology partner that truly understands the unique challenges businesses face in the digital age. Our founders brought together decades of combined experience from leading tech companies, united by a shared commitment to excellence and innovation.
            </p>
            <p className="text-gray-600 mb-6">
              We believe technology should empower, not complicate. That's why we focus on creating solutions that are not only technologically advanced, but also intuitive, scalable, and aligned with your business objectives.
            </p>
            <Link to="/about" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Learn More
            </Link>
          </motion.div>

          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
                <Lightbulb className="text-blue-600 w-6 h-6 mr-3" />
                <div>
                  <h4 className="text-lg font-semibold">Innovation</h4>
                  <p className="text-gray-600 text-sm">We embrace new ideas and cutting-edge technologies.</p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
                <Users className="text-blue-600 w-6 h-6 mr-3" />
                <div>
                  <h4 className="text-lg font-semibold">Collaboration</h4>
                  <p className="text-gray-600 text-sm">We work closely with our clients to achieve shared success.</p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
                <Rocket className="text-blue-600 w-6 h-6 mr-3" />
                <div>
                  <h4 className="text-lg font-semibold">Results</h4>
                  <p className="text-gray-600 text-sm">We are committed to delivering measurable and impactful outcomes.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;