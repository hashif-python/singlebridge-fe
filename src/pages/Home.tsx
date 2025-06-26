import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ServicesPreview from '../components/ServicesPreview';
import AboutPreview from '../components/AboutPreview';
import PortfolioPreview from '../components/PortfolioPreview';
import TestimonialsPreview from '../components/TestimonialsPreview';
import ScrollReveal from '../components/ScrollReveal';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Hero />
      <ScrollReveal>
        <ServicesPreview />
      </ScrollReveal>
      <ScrollReveal>
        <AboutPreview />
      </ScrollReveal>
      <ScrollReveal>
        <PortfolioPreview />
      </ScrollReveal>
      <ScrollReveal>
        <TestimonialsPreview />
      </ScrollReveal>
    </motion.div>
  );
}

export default Home;