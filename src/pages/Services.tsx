import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cloud, Smartphone, BrainCircuit, CheckCircle2 } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Software Development',
    description: 'Custom software solutions tailored to your unique business needs, from enterprise systems to specialized tools.',
    icon: <Code size={48} className="text-primary-500" />,
    features: [
      'Custom Enterprise Solutions',
      'API Development & Integration',
      'Legacy System Modernization',
      'Quality Assurance & Testing',
      'Maintenance & Support',
    ],
    benefits: [
      'Increased Operational Efficiency',
      'Reduced Costs',
      'Improved Customer Experience',
      'Scalable Architecture',
      'Future-proof Technology',
    ],
  },
  {
    id: 2,
    title: 'Cloud Solutions',
    description: 'Secure, scalable cloud infrastructure with migration services, optimization, and ongoing maintenance.',
    icon: <Cloud size={48} className="text-primary-500" />,
    features: [
      'Cloud Migration Strategy',
      'Infrastructure as Code',
      'Cloud Security & Compliance',
      'Performance Optimization',
      'Disaster Recovery',
    ],
    benefits: [
      'Enhanced Scalability',
      'Cost Optimization',
      'Improved Security',
      'Business Continuity',
      'Global Accessibility',
    ],
  },
  {
    id: 3,
    title: 'Web & Mobile Development',
    description: 'Responsive websites and native mobile applications with intuitive UI/UX and cross-platform compatibility.',
    icon: <Smartphone size={48} className="text-primary-500" />,
    features: [
      'Progressive Web Apps',
      'Native Mobile Applications',
      'Cross-platform Development',
      'UI/UX Design',
      'Performance Optimization',
    ],
    benefits: [
      'Increased User Engagement',
      'Broader Market Reach',
      'Improved User Experience',
      'Faster Time-to-Market',
      'Cost-Effective Solutions',
    ],
  },
  {
    id: 4,
    title: 'AI Integration',
    description: 'Harness the power of artificial intelligence and machine learning to transform your data into actionable insights.',
    icon: <BrainCircuit size={48} className="text-primary-500" />,
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision Solutions',
      'Predictive Analytics',
      'AI-Powered Automation',
    ],
    benefits: [
      'Data-Driven Decisions',
      'Automated Processes',
      'Competitive Advantage',
      'Enhanced Productivity',
      'Innovative Solutions',
    ],
  },
];

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="pt-20 md:pt-24"
    >
      <div 
        className="bg-primary-500 text-white py-16 md:py-24 relative overflow-hidden"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-primary-900/80"></div>
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            Comprehensive technology solutions tailored to drive your business forward.
            We combine expertise with innovation to deliver exceptional results.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="container">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="inline-flex items-center justify-center p-4 bg-primary-50 rounded-2xl">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold">{service.title}</h2>
                  <p className="text-lg text-secondary-600">{service.description}</p>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Key Features</h3>
                    <ul className="grid gap-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-secondary-600">
                          <CheckCircle2 size={20} className="text-primary-500 mr-2 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className={`bg-gray-50 p-8 rounded-2xl ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h3 className="text-xl font-semibold mb-6">Benefits</h3>
                  <div className="space-y-4">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                        <span className="text-secondary-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-secondary-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your technology goals.
          </p>
          <a href="#contact" className="btn btn-primary">
            Get Started
          </a>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;