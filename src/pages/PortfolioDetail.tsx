import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowLeft, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image_url: string;
  breadcrumb_image: string;
  project_url: string;
  client_name: string;
  duration: string;
  completion_date: string;
  category: string;
  technology_used: string;
}

const PortfolioDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/portfolio/${projectId}`);
        if (!res.ok) throw new Error('Failed to fetch project');
        const data = await res.json();
        setProject(data);
      } catch (error) {
        console.error('Error fetching project:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [projectId]);

  if (loading) {
    return (
      <div className="pt-24 pb-20 container text-center">
        <p className="text-secondary-600">Loading...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="pt-24 pb-20 container text-center">
        <h1 className="text-3xl font-bold mb-4">Project not found</h1>
        <Link to="/portfolio" className="text-primary-500 hover:text-primary-600 inline-flex items-center">
          <ArrowLeft size={20} className="mr-2" />
          Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="pt-20 md:pt-24"
    >
      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-4 border-b border-gray-100">
        <div className="container">
          <div className="flex flex-wrap items-center text-sm text-secondary-500">
            <Link to="/" className="hover:text-primary-500">Home</Link>
            <ChevronRight size={16} className="mx-2" />
            <Link to="/portfolio" className="hover:text-primary-500">Portfolio</Link>
            <ChevronRight size={16} className="mx-2" />
            <span className="text-secondary-700 truncate max-w-[200px] sm:max-w-none">{project.title}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="relative h-64">
        <img
          src={project.breadcrumb_image}
          alt={project.title}
          className="w-full h-64 object-contain"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/90 to-secondary-900/50 flex items-end">
          <div className="container py-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white backdrop-blur-sm mb-2">
              {project.category}
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">{project.title}</h1>
            {project.subtitle && (
              <p className="text-lg text-white/80 max-w-2xl">{project.subtitle}</p>
            )}
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="py-16">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <div className="flex justify-left mb-6">
              <img
                src={project.image_url}
                alt={`${project.title} preview`}
                className="rounded-lg shadow-md max-h-[250px] align-items-left object-contain"
              />
            </div>

            <p className="text-secondary-600 text-lg">{project.description}</p>
          </div>



          <div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-secondary-500">Client</p>
                  <p className="font-medium">{project.client_name}</p>
                </div>
                <div>
                  <p className="text-sm text-secondary-500">Duration</p>
                  <p className="font-medium">{project.duration}</p>
                </div>
                <div>
                  <p className="text-sm text-secondary-500">Completed</p>
                  <p className="font-medium">{project.completion_date}</p>
                </div>
                <div>
                  <p className="text-sm text-secondary-500">Category</p>
                  <p className="font-medium">{project.category}</p>
                </div>
              </div>
              {project.project_url && (
                <a
                  href={project.project_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center text-primary-500 hover:text-primary-600 font-medium"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Visit Project
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Preview */}

      {/* Technologies */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Technologies Used</h2>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {project.technology_used.split(",").map((tech, index) => (
              <div
                key={index}
                className="bg-gray-50 px-4 py-2 rounded-full border border-gray-200 text-secondary-700"
              >
                {tech.trim()}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg text-secondary-600 mb-8 max-w-2xl mx-auto">
            Let’s discuss how we can help you achieve similar results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contact" className="btn btn-primary">Contact Us</a>
            <Link to="/portfolio" className="btn btn-secondary">View More Projects</Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default PortfolioDetail;
