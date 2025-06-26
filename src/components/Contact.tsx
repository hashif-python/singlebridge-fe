import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset 
  } = useForm<FormData>();
  
  const onSubmit = async (data: FormData) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', data);
    alert('Thank you for your message! We will get back to you soon.');
    reset();
  };

  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container">
        <div className="section-title">
          <h2 className="mb-4">Get In Touch</h2>
          <p className="text-secondary-500 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can help you achieve your technology goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-2 bg-primary-50 rounded-full">
                    <MapPin size={20} className="text-primary-500" />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">Our Location</h4>
                    <p className="text-secondary-600">
                      123 Tech Plaza, Suite 400<br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-2 bg-primary-50 rounded-full">
                    <Phone size={20} className="text-primary-500" />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">Phone Number</h4>
                    <p className="text-secondary-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-2 bg-primary-50 rounded-full">
                    <Mail size={20} className="text-primary-500" />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">Email Address</h4>
                    <p className="text-secondary-600">info@singlebridge.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-primary-500 rounded-lg text-white">
                <h4 className="text-lg font-semibold mb-2">Working Hours</h4>
                <p className="opacity-90 mb-1">Monday - Friday: 9AM - 6PM</p>
                <p className="opacity-90">Weekend: By appointment</p>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="md:col-span-2"
          >
            <div className="card">
              <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input
                      id="name"
                      type="text"
                      className={`form-input ${errors.name ? 'border-error-500 focus:border-error-500 focus:ring-error-500' : ''}`}
                      placeholder="John Doe"
                      {...register('name', { 
                        required: 'Name is required',
                        minLength: {
                          value: 2,
                          message: 'Name must be at least 2 characters'
                        }
                      })}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-error-500">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      className={`form-input ${errors.email ? 'border-error-500 focus:border-error-500 focus:ring-error-500' : ''}`}
                      placeholder="john@example.com"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-error-500">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    className={`form-input ${errors.subject ? 'border-error-500 focus:border-error-500 focus:ring-error-500' : ''}`}
                    placeholder="Project Inquiry"
                    {...register('subject', { required: 'Subject is required' })}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-error-500">{errors.subject.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`form-input resize-none ${errors.message ? 'border-error-500 focus:border-error-500 focus:ring-error-500' : ''}`}
                    placeholder="Tell us about your project..."
                    {...register('message', { 
                      required: 'Message is required',
                      minLength: {
                        value: 10,
                        message: 'Message must be at least 10 characters'
                      }
                    })}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-error-500">{errors.message.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  className="btn btn-primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send size={16} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;