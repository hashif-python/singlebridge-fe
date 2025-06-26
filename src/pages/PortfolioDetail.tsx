// Portfolio Detail Page
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Code, Cloud, Smartphone, BrainCircuit, ChevronRight, ArrowLeft } from 'lucide-react';

// Extended portfolio data with additional details for the detail page
const portfolioData = [
  {
    id: 1,
    slug: 'enterprise-management-system',
    title: 'Enterprise Management System',
    category: 'Software Development',
    description: 'A comprehensive system for managing business operations',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1600',
    icon: <Code className="text-primary-500" size={24} />,
    client: 'Global Manufacturing Corp',
    duration: '8 months',
    completionDate: 'March 2024',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    challenge: 'The client needed to replace multiple legacy systems with a single, integrated platform that could handle inventory management, order processing, HR, and financial reporting.',
    solution: 'We developed a modular enterprise system with role-based access control, real-time data synchronization, and comprehensive reporting capabilities.',
    results: [
      '35% increase in operational efficiency',
      'Reduced manual data entry by 80%',
      'Improved reporting accuracy by 45%',
      'Seamless integration with existing CRM'
    ],
    testimonial: {
      quote: "The new system has transformed how we operate. Tasks that used to take days now happen in minutes.",
      author: "Sarah Johnson",
      position: "Operations Director, Global Manufacturing Corp"
    }
  },
  {
    id: 2,
    slug: 'cloud-migration-solution',
    title: 'Cloud Migration Solution',
    category: 'Cloud Solutions',
    description: 'Seamless transition to cloud infrastructure',
    image: 'https://images.pexels.com/photos/7108/notebook-computer-chill-relax.jpg?auto=compress&cs=tinysrgb&w=1600',
    icon: <Cloud className="text-primary-500" size={24} />,
    client: 'FinTech Innovations Inc',
    duration: '6 months',
    completionDate: 'January 2024',
    technologies: ['AWS', 'Terraform', 'Kubernetes', 'Docker', 'CI/CD'],
    challenge: 'The client was facing scalability issues with their on-premises infrastructure, experiencing downtime during peak usage, and struggling with high maintenance costs.',
    solution: 'We designed and implemented a cloud migration strategy that included infrastructure as code, containerization of applications, and automated deployment pipelines.',
    results: [
      '99.99% uptime achieved post-migration',
      'Reduced infrastructure costs by 40%',
      'Improved disaster recovery capabilities',
      'Enabled auto-scaling during peak periods'
    ],
    testimonial: {
      quote: "The migration was smooth and the performance improvements exceeded our expectations. Our system now handles peak loads with ease.",
      author: "Michael Chen",
      position: "CTO, FinTech Innovations Inc"
    }
  },
  {
    id: 3,
    slug: 'ecommerce-mobile-app',
    title: 'E-commerce Mobile App',
    category: 'Mobile Development',
    description: 'Feature-rich mobile shopping experience',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1600',
    icon: <Smartphone className="text-primary-500" size={24} />,
    client: 'Urban Retail Group',
    duration: '5 months',
    completionDate: 'April 2024',
    technologies: ['React Native', 'Firebase', 'Node.js', 'Stripe', 'Redux'],
    challenge: 'The client needed a mobile app that would provide a seamless shopping experience, integrate with their existing inventory system, and support multiple payment methods.',
    solution: 'We developed a cross-platform mobile app with intuitive UI/UX, real-time inventory updates, personalized recommendations, and secure payment processing.',
    results: [
      '120% increase in mobile sales within 3 months',
      '45% higher customer engagement',
      '30% increase in repeat purchases',
      'Reduced cart abandonment by 25%'
    ],
    testimonial: {
      quote: "The app has revolutionized how our customers shop with us. The personalized recommendations feature has been particularly successful.",
      author: "Emma Rodriguez",
      position: "Digital Marketing Director, Urban Retail Group"
    }
  },
  {
    id: 4,
    slug: 'ai-analytics-platform',
    title: 'AI Analytics Platform',
    category: 'AI Integration',
    description: 'Advanced analytics powered by artificial intelligence',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1600',
    icon: <BrainCircuit className="text-primary-500" size={24} />,
    client: 'DataInsight Solutions',
    duration: '7 months',
    completionDate: 'February 2024',
    technologies: ['Python', 'TensorFlow', 'React', 'D3.js', 'AWS SageMaker'],
    challenge: 'The client wanted to leverage their vast data assets to gain predictive insights and automate decision-making processes across their organization.',
    solution: 'We built a custom AI analytics platform with machine learning models for predictive analysis, natural language processing for unstructured data, and interactive dashboards.',
    results: [
      'Predicted market trends with 85% accuracy',
      'Automated 60% of routine decision processes',
      'Reduced data analysis time by 75%',
      'Identified new business opportunities worth $2M'
    ],
    testimonial: {
      quote: "The AI platform has given us insights we never thought possible. We're now making data-driven decisions with confidence.",
      author: "David Park",
      position: "CEO, DataInsight Solutions"
    }
  },
];

const PortfolioDetail = () => {
  const { projectSlug } = useParams<{ projectSlug: string }>();
  const project = portfolioData.find(p => p.slug === projectSlug);

  if (!project) {
    return (
      <div className="pt-24 pb-20 container">
        <h1 className="text-3xl font-bold">Project not found</h1>
        <Link to="/portfolio" className="text-primary-500 hover:text-primary-600 mt-4 inline-flex items-center">
          <ArrowLeft size={20} className="mr-2" /> Back to Portfolio
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

      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px]">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/90 to-secondary-900/50 flex items-end">
          <div className="container py-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white backdrop-blur-sm mb-4">
              {project.icon}
              <span className="ml-2">{project.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>
            <p className="text-xl text-white/80 max-w-2xl">{project.description}</p>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-secondary-600">{project.challenge}</p>
                <h3 className="text-2xl font-semibold mt-8 mb-4">Our Solution</h3>
                <p className="text-secondary-600">{project.solution}</p>
              </div>
            </div>
            <div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-secondary-500">Client</p>
                    <p className="font-medium">{project.client}</p>
                  </div>
                  <div>
                    <p className="text-sm text-secondary-500">Duration</p>
                    <p className="font-medium">{project.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-secondary-500">Completed</p>
                    <p className="font-medium">{project.completionDate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-secondary-500">Category</p>
                    <p className="font-medium">{project.category}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Results & Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold mb-4">
                  {index + 1}
                </div>
                <p className="text-secondary-700">{result}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Technologies Used</h2>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {project.technologies.map((tech, index) => (
              <div 
                key={index}
                className="bg-gray-50 px-4 py-2 rounded-full border border-gray-200 text-secondary-700"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <svg className="w-12 h-12 text-white/30 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl md:text-2xl font-medium mb-6">"{project.testimonial.quote}"</p>
            <div>
              <p className="font-semibold">{project.testimonial.author}</p>
              <p className="text-primary-100">{project.testimonial.position}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg text-secondary-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contact" className="btn btn-primary">
              Contact Us
            </a>
            <Link to="/portfolio" className="btn btn-secondary">
              View More Projects
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default PortfolioDetail;
