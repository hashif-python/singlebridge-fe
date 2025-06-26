import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CTO, Fintech Solutions',
    content: 'Single Bridge transformed our outdated systems into a modern, scalable platform. Their expertise in both software development and cloud solutions provided us with a competitive edge in our industry.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder, E-commerce Startup',
    content: 'The mobile app that Single Bridge developed for us exceeded all expectations. Not only was it delivered ahead of schedule, but the intuitive design and seamless functionality has significantly increased our customer engagement.',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Director of Innovation, Healthcare Provider',
    content: 'Implementing AI solutions seemed daunting until we partnered with Single Bridge. They guided us through the entire process, from data preparation to deployment, resulting in improved patient care and operational efficiency.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rating: 5,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="section-title">
          <h2 className="mb-4">What Our Clients Say</h2>
          <p className="text-secondary-500 text-lg max-w-2xl mx-auto">
            Discover how we've helped businesses achieve their technology goals.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="card p-8 md:p-10"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
              <div className="shrink-0">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name} 
                  className="w-20 h-20 rounded-full object-cover"
                />
              </div>
              
              <div>
                <div className="flex mb-4">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-warning-500 text-warning-500" />
                  ))}
                </div>
                
                <blockquote className="mb-6 text-lg italic text-secondary-600">
                  "{testimonials[activeIndex].content}"
                </blockquote>
                
                <div>
                  <p className="font-semibold text-secondary-800">{testimonials[activeIndex].name}</p>
                  <p className="text-secondary-500">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-100 hover:bg-primary-500 hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    activeIndex === index ? 'bg-primary-500 w-8' : 'bg-gray-300 hover:bg-primary-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-100 hover:bg-primary-500 hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;