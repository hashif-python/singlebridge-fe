// React import not needed with modern JSX transform
import { motion } from 'framer-motion';
import { Code, Cloud, Smartphone, BrainCircuit, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    slug: 'software-development',
    title: 'Custom Software Development',
    description:
      'We build robust, scalable software tailored to your business processes, helping you improve efficiency, reduce costs, and stay ahead of the competition.',
    icon: <Code size={40} className="text-primary-500" />,
    benefits: [
      'Tailored to your workflows',
      'Future-ready architecture',
      'Seamless integration',
    ],
  },
  {
    id: 2,
    slug: 'cloud-solutions',
    title: 'Cloud Solutions & Infrastructure',
    description:
      'Migrate, optimize, and manage your infrastructure in the cloud with confidence. We design secure, scalable environments that grow with your business.',
    icon: <Cloud size={40} className="text-primary-500" />,
    benefits: [
      'Cost-effective operations',
      'High availability & security',
      'Flexible scalability',
    ],
  },
  {
    id: 3,
    slug: 'web-mobile-development',
    title: 'Web & Mobile Application Development',
    description:
      'Deliver exceptional user experiences with modern web platforms and mobile apps that engage customers across devices and channels.',
    icon: <Smartphone size={40} className="text-primary-500" />,
    benefits: [
      'Responsive, intuitive interfaces',
      'Cross-platform compatibility',
      'Performance optimized',
    ],
  },
  {
    id: 4,
    slug: 'ai-integration',
    title: 'AI & Machine Learning Integration',
    description:
      'Leverage AI to unlock actionable insights, automate processes, and personalize experiences that drive measurable business impact.',
    icon: <BrainCircuit size={40} className="text-primary-500" />,
    benefits: [
      'Predictive data analytics',
      'Process automation',
      'Enhanced decision-making',
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    }
  })
};

const Services = () => {
  return (
    <section id="services" className="section bg-gray-50">
      <div className="container">
        <div className="section-title">
          <h2 className="mb-4">Our Services</h2>
          <p className="text-secondary-500 text-lg max-w-2xl mx-auto">
            We deliver cutting-edge technology solutions to help businesses transform,
            innovate, and thrive in the digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="card group hover:border-primary-500 hover:border border border-transparent transition-all"
            >
              <div className="flex flex-col h-full">
                <div className="mb-6 p-4 rounded-full bg-primary-50 inline-flex">
                  {service.icon}
                </div>

                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-secondary-600 mb-6 flex-grow">{service.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold uppercase text-secondary-500 mb-2">Benefits</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-secondary-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center text-primary-500 font-medium group-hover:text-primary-600"
                  >
                    Learn more
                    <ExternalLink size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
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

export default Services;