import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cloud, Smartphone, BrainCircuit } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Enterprise Management System',
    category: 'Software Development',
    description: 'A comprehensive system for managing business operations',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1600',
    icon: <Code className="text-primary-500" size={24} />,
  },
  {
    id: 2,
    title: 'Cloud Migration Solution',
    category: 'Cloud Solutions',
    description: 'Seamless transition to cloud infrastructure',
    image: 'https://images.pexels.com/photos/7108/notebook-computer-chill-relax.jpg?auto=compress&cs=tinysrgb&w=1600',
    icon: <Cloud className="text-primary-500\" size={24} />,
  },
  {
    id: 3,
    title: 'E-commerce Mobile App',
    category: 'Mobile Development',
    description: 'Feature-rich mobile shopping experience',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1600',
    icon: <Smartphone className="text-primary-500" size={24} />,
  },
  {
    id: 4,
    title: 'AI Analytics Platform',
    category: 'AI Integration',
    description: 'Advanced analytics powered by artificial intelligence',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1600',
    icon: <BrainCircuit className="text-primary-500\" size={24} />,
  },
];

function Portfolio() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="pt-20 md:pt-24"
    >
      <div className="bg-primary-500 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            Explore our latest projects and see how we've helped businesses transform through technology.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden group"
            >
              <div className="relative h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex items-center mb-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white">
                        {project.icon}
                        <span className="ml-2">{project.category}</span>
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-200">{project.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Portfolio;