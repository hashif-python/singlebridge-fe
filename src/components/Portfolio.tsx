import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface PortfolioItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image_url: string;
  project_url: string;
  client_name: string;
  duration: string;
  completion_date: string;
  category: string;
  technology_used: string;
}

const Portfolio = () => {
  const [projects, setProjects] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/portfolio`);
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching portfolio:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="portfolio" className="section bg-gray-50">
      <div className="container">
        <div className="section-title">
          <h2 className="mb-4">Our Portfolio</h2>
          <p className="text-secondary-500 text-lg max-w-2xl mx-auto">
            Discover how we've helped businesses achieve their goals through modern technology solutions.
          </p>
        </div>

        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : projects.length === 0 ? (
          <p className="text-center text-gray-600">No projects available.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
              >
                <img
                  src={project.image_url}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  <p className="text-primary-500 mb-3">{project.subtitle}</p>
                  <p className="text-secondary-600 text-sm mb-4 flex-grow">{project.description}</p>
                  <div className="text-sm text-secondary-500 space-y-1 mb-4">
                    <p><span className="font-medium text-secondary-700">Client:</span> {project.client_name}</p>
                    <p><span className="font-medium text-secondary-700">Duration:</span> {project.duration}</p>
                    <p><span className="font-medium text-secondary-700">Completed:</span> {project.completion_date}</p>
                    <p><span className="font-medium text-secondary-700">Category:</span> {project.category}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technology_used.split(',').map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-secondary-700 text-xs px-2 py-1 rounded-full"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex flex-wrap gap-2">
                    <Link
                      to={`/portfolio/${project.id}`}
                      className="btn btn-primary"
                    >
                      View Details
                    </Link>
                    {project.project_url && (
                      <a
                        href={project.project_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                      >
                        Visit Project
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <a href="#contact" className="btn btn-secondary">
            Start Your Project With Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
