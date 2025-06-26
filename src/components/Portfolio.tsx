import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code, Cloud, Smartphone, BrainCircuit } from 'lucide-react';

// Projects with slugs for routing to detail pages
const projects = [
  {
    id: 1,
    slug: 'enterprise-management-system',
    title: 'Enterprise Management System',
    category: 'Software Development',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1600',
    icon: <Code size={20} />,
  },
  {
    id: 2,
    slug: 'cloud-migration-optimization',
    title: 'Cloud Migration & Optimization',
    category: 'Cloud Solutions',
    image: 'https://images.pexels.com/photos/7108/notebook-computer-chill-relax.jpg?auto=compress&cs=tinysrgb&w=1600',
    icon: <Cloud size={20} />,
  },
  {
    id: 3,
    slug: 'ecommerce-mobile-app',
    title: 'E-commerce Mobile App',
    category: 'Mobile Development',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1600',
    icon: <Smartphone size={20} />,
  },
  {
    id: 4,
    slug: 'predictive-analytics-dashboard',
    title: 'Predictive Analytics Dashboard',
    category: 'AI Integration',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1600',
    icon: <BrainCircuit size={20} />,
  },
  {
    id: 5,
    slug: 'healthcare-management-platform',
    title: 'Healthcare Management Platform',
    category: 'Software Development',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600',
    icon: <Code size={20} />,
  },
  {
    id: 6,
    slug: 'financial-services-web-portal',
    title: 'Financial Services Web Portal',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1600',
    icon: <Smartphone size={20} />,
  },
];

const categories = [
  'All',
  'Software Development',
  'Cloud Solutions',
  'Web Development',
  'Mobile Development',
  'AI Integration',
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  return (
    <section id="portfolio" className="section bg-gray-50">
      <div className="container">
        <div className="section-title">
          <h2 className="mb-4">Our Portfolio</h2>
          <p className="text-secondary-500 text-lg max-w-2xl mx-auto">
            Explore our recent projects and discover how we've helped businesses achieve their goals through innovative technology solutions.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-primary-500 text-white shadow-md'
                  : 'bg-white text-secondary-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg shadow-md h-64">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/80 to-transparent group-hover:from-primary-900/80 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-sm mb-2">
                    <span className="mr-1">{project.icon}</span>
                    {project.category}
                  </div>
                  <h3 className="text-white text-lg font-semibold">{project.title}</h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link to={`/portfolio/${project.slug}`} className="btn btn-primary">View Details</Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#contact" className="btn btn-secondary">
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;