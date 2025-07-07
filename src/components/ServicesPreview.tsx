import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cloud, Smartphone, BrainCircuit, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'Software Development',
    description: 'Custom software solutions tailored to your unique business needs.',
    icon: <Code size={40} className="text-primary-500" />,
  },
  {
    id: 2,
    title: 'Cloud Solutions',
    description: 'Secure, scalable cloud infrastructure and migration services.',
    icon: <Cloud size={40} className="text-primary-500" />,
  },
  {
    id: 3,
    title: 'Web & Mobile Development',
    description: 'Responsive websites and native mobile applications.',
    icon: <Smartphone size={40} className="text-primary-500" />,
  },
  {
    id: 4,
    title: 'AI Integration',
    description: 'Harness the power of artificial intelligence for your business.',
    icon: <BrainCircuit size={40} className="text-primary-500" />,
  },
];

const ServicesPreview = () => {
  return (
    <section id="services" className="section bg-gray-50">
      <div className="container">
        <div className="section-title">
          <h2 className="mb-4">Our Services</h2>
          <p className="text-secondary-500 text-lg max-w-2xl mx-auto">
            We deliver cutting-edge technology solutions to help businesses transform and innovate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card group hover:border-primary-500 hover:border border border-transparent transition-all"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-primary-50">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-secondary-600 mb-4">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#contact" className="btn btn-primary">
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;