import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image?: string;       // optional image
  image_url?: string;   // optional image_url
}

const PortfolioPreview = () => {
  const [projects, setProjects] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/portfolio`);
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setProjects(data);

      } catch (error) {
        console.error('Error fetching portfolio:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="portfolio" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Work</h2>

        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : projects.length === 0 ? (
          <p className="text-center text-gray-600">No projects available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {projects.slice(0, 3).map((project) => {
              const imageUrl = project.image || project.logo;

              return (
                <div
                  key={project.id}
                  className="bg-white rounded-lg shadow-lg p-6 flex flex-col"
                >
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={project.title}
                      className="rounded-lg mb-4 w-full h-60 object-cover"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-500">
                      No Image
                    </div>
                  )}

                  <h3 className="text-xl text-center font-semibold mb-2">
                    <Link
                      to={`/portfolio/${project.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      {project.title}
                    </Link>
                  </h3>




                </div>
              );
            })}
          </div>
        )}

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
};

export default PortfolioPreview;
