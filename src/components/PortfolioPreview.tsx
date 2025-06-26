import React from 'react';
import { Link } from 'react-router-dom';

function PortfolioPreview() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="aspect-video bg-gray-200 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Featured Project</h3>
            <p className="text-gray-600 mb-4">Preview of our latest work</p>
          </div>
        </div>
        <div className="text-center">
          <Link 
            to="/portfolio" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PortfolioPreview;