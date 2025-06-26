// React import not needed with modern JSX transform
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Code, Cloud, Smartphone, BrainCircuit, CheckCircle2, ArrowLeft, ChevronRight } from 'lucide-react';

// Service data with extended details for the detail page
const servicesData = [
    {
        id: 1,
        slug: 'software-development',
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
        longDescription: `Our software development services provide end-to-end solutions for businesses looking to digitize operations, 
    streamline processes, or create innovative products. We combine technical expertise with industry knowledge to deliver 
    software that not only meets your current needs but scales with your business growth.
    
    Our team of experienced developers works closely with you to understand your requirements, challenges, and goals. 
    We follow agile methodologies to ensure transparent communication, regular updates, and flexibility throughout the development process.`,
        process: [
            {
                title: 'Discovery & Planning',
                description: 'We analyze your business requirements and develop a comprehensive roadmap.'
            },
            {
                title: 'Design & Architecture',
                description: 'Our architects design scalable, secure, and maintainable software architecture.'
            },
            {
                title: 'Development',
                description: 'We build your solution using modern technologies and best practices.'
            },
            {
                title: 'Testing & QA',
                description: 'Rigorous testing ensures your software is reliable and bug-free.'
            },
            {
                title: 'Deployment & Support',
                description: 'We handle deployment and provide ongoing maintenance and support.'
            }
        ],
        technologies: ['Java', 'Python', 'JavaScript', 'React', 'Node.js', 'AWS', 'Docker', 'Kubernetes'],
        caseStudies: [
            {
                title: 'Enterprise Resource Planning System',
                description: 'Developed a custom ERP solution for a manufacturing company, resulting in 35% improved operational efficiency.'
            },
            {
                title: 'Healthcare Management Platform',
                description: 'Built a HIPAA-compliant platform for healthcare providers to manage patient data and streamline workflows.'
            }
        ]
    },
    {
        id: 2,
        slug: 'cloud-solutions',
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
        longDescription: `Our cloud solutions help organizations leverage the power of cloud computing to achieve greater flexibility, 
    scalability, and cost-efficiency. Whether you're looking to migrate existing applications to the cloud, optimize your current 
    cloud infrastructure, or build cloud-native applications, our team of certified cloud experts can help.
    
    We work with leading cloud providers including AWS, Microsoft Azure, and Google Cloud Platform to design and implement 
    solutions that align with your business objectives while ensuring security, compliance, and performance.`,
        process: [
            {
                title: 'Assessment',
                description: 'We evaluate your current infrastructure and identify cloud migration opportunities.'
            },
            {
                title: 'Strategy Development',
                description: 'We create a tailored cloud strategy aligned with your business goals.'
            },
            {
                title: 'Migration Planning',
                description: 'Detailed planning to minimize disruption during the migration process.'
            },
            {
                title: 'Implementation',
                description: 'Secure and efficient migration of applications and data to the cloud.'
            },
            {
                title: 'Optimization & Management',
                description: 'Continuous monitoring and optimization of your cloud environment.'
            }
        ],
        technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker', 'CloudFormation', 'Ansible'],
        caseStudies: [
            {
                title: 'Financial Services Cloud Migration',
                description: 'Migrated a financial institution\'s core systems to AWS, reducing operational costs by 40%.'
            },
            {
                title: 'E-commerce Platform Scaling',
                description: 'Redesigned cloud architecture for an e-commerce platform to handle 300% traffic increase during peak seasons.'
            }
        ]
    },
    {
        id: 3,
        slug: 'web-mobile-development',
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
        longDescription: `Our web and mobile development services focus on creating engaging, user-friendly digital experiences 
    that drive results. We build responsive websites, progressive web apps, and native mobile applications that look great 
    and perform flawlessly across all devices.
    
    Our development approach combines technical excellence with creative design to deliver solutions that not only meet 
    functional requirements but also provide exceptional user experiences that keep your customers coming back.`,
        process: [
            {
                title: 'Discovery',
                description: 'We understand your users, business goals, and technical requirements.'
            },
            {
                title: 'UX/UI Design',
                description: 'Our designers create intuitive, engaging user interfaces and experiences.'
            },
            {
                title: 'Development',
                description: 'We build your application using modern frameworks and best practices.'
            },
            {
                title: 'Testing',
                description: 'Comprehensive testing across devices and platforms ensures quality.'
            },
            {
                title: 'Launch & Support',
                description: 'We handle deployment and provide ongoing maintenance and updates.'
            }
        ],
        technologies: ['React', 'Angular', 'Vue.js', 'React Native', 'Flutter', 'Swift', 'Kotlin', 'Node.js'],
        caseStudies: [
            {
                title: 'E-commerce Mobile App',
                description: 'Developed a cross-platform mobile app that increased customer engagement by 65% and boosted sales by 40%.'
            },
            {
                title: 'Corporate Website Redesign',
                description: 'Redesigned and rebuilt a corporate website, improving load times by 70% and increasing lead generation by 45%.'
            }
        ]
    },
    {
        id: 4,
        slug: 'ai-integration',
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
        longDescription: `Our AI integration services help businesses leverage artificial intelligence and machine learning 
    technologies to gain competitive advantages, automate processes, and unlock insights from their data. We work with 
    you to identify the right AI solutions for your specific business challenges and implement them effectively.
    
    From predictive analytics and natural language processing to computer vision and recommendation systems, our team 
    of data scientists and AI engineers can help you harness the transformative power of AI.`,
        process: [
            {
                title: 'Data Assessment',
                description: 'We evaluate your data assets and identify AI opportunities.'
            },
            {
                title: 'Solution Design',
                description: 'Our experts design AI solutions tailored to your business needs.'
            },
            {
                title: 'Model Development',
                description: 'We develop and train custom AI models using your data.'
            },
            {
                title: 'Integration',
                description: 'Seamless integration of AI capabilities into your existing systems.'
            },
            {
                title: 'Monitoring & Improvement',
                description: 'Continuous monitoring and refinement of AI models for optimal performance.'
            }
        ],
        technologies: ['TensorFlow', 'PyTorch', 'scikit-learn', 'OpenAI', 'Computer Vision', 'NLP', 'Reinforcement Learning', 'Big Data'],
        caseStudies: [
            {
                title: 'Customer Service Chatbot',
                description: 'Implemented an AI-powered chatbot that handles 70% of customer inquiries, reducing support costs by 35%.'
            },
            {
                title: 'Predictive Maintenance System',
                description: 'Developed a machine learning system for a manufacturing company that predicts equipment failures, reducing downtime by 45%.'
            }
        ]
    },
];

const ServiceDetail = () => {
    const { serviceSlug } = useParams<{ serviceSlug: string }>();
    const service = servicesData.find(s => s.slug === serviceSlug);

    if (!service) {
        return (
            <div className="pt-24 pb-20 container">
                <h1 className="text-3xl font-bold">Service not found</h1>
                <Link to="/services" className="text-primary-500 hover:text-primary-600 mt-4 inline-flex items-center">
                    <ArrowLeft size={20} className="mr-2" /> Back to Services
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
                        <Link to="/services" className="hover:text-primary-500">Services</Link>
                        <ChevronRight size={16} className="mx-2" />
                        <span className="text-secondary-700 truncate max-w-[200px] sm:max-w-none">{service.title}</span>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
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
                    <div className="inline-flex items-center justify-center p-4 bg-white bg-opacity-10 rounded-2xl mb-6">
                        {service.icon}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
                    <p className="text-xl text-primary-100 max-w-2xl">
                        {service.description}
                    </p>
                </div>
            </div>

            {/* Overview Section */}
            <section className="py-16 md:py-20">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="md:col-span-2">
                            <h2 className="text-3xl font-bold mb-6">Overview</h2>
                            <div className="prose prose-lg max-w-none">
                                <p className="text-secondary-600 whitespace-pre-line">{service.longDescription}</p>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl h-fit">
                            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                            <ul className="space-y-3">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-secondary-600">
                                        <CheckCircle2 size={20} className="text-primary-500 mr-2 shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16 md:py-20 bg-gray-50">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-12 text-center">Our Process</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {service.process.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-6 rounded-xl shadow-sm relative"
                            >
                                <div className="w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold mb-4">
                                    {index + 1}
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                                <p className="text-secondary-600">{step.description}</p>

                                {index < service.process.length - 1 && (
                                    <div className="hidden md:block absolute top-10 -right-3 w-6 h-0.5 bg-primary-300"></div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 md:py-20">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-12 text-center">Benefits</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {service.benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-primary-300 transition-colors"
                            >
                                <div className="w-2 h-2 bg-primary-500 rounded-full mb-4"></div>
                                <h3 className="text-xl font-semibold mb-3">{benefit}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="py-16 md:py-20 bg-gray-50">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-8">Technologies We Use</h2>
                    <div className="flex flex-wrap gap-3 sm:gap-4">
                        {service.technologies.map((tech, index) => (
                            <div
                                key={index}
                                className="bg-white px-4 py-2 rounded-full border border-gray-200 text-secondary-700"
                            >
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies Section */}
            <section className="py-16 md:py-20">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-12">Case Studies</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {service.caseStudies.map((caseStudy, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
                            >
                                <h3 className="text-xl font-semibold mb-4">{caseStudy.title}</h3>
                                <p className="text-secondary-600">{caseStudy.description}</p>
                                <a href="#" className="text-primary-500 font-medium mt-4 inline-block hover:text-primary-600">
                                    Read full case study
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-primary-500 text-white py-16 md:py-20">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
                    <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
                        Let's discuss how our {service.title.toLowerCase()} services can help you achieve your business goals.
                    </p>
                    <a href="#contact" className="btn btn-white">
                        Contact Us Today
                    </a>
                </div>
            </section>
        </motion.div>
    );
};

export default ServiceDetail;
