import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="pt-24 pb-20 container text-center"
    >
      <div className="max-w-lg mx-auto">
        <h1 className="text-6xl font-bold text-primary-500 mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
        <p className="text-lg text-secondary-600 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors"
        >
          <Home size={20} className="mr-2" />
          Back to Home
        </Link>
      </div>
    </motion.div>
  );
};

export default NotFound;
