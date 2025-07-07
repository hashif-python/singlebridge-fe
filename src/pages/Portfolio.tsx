import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface Project {
  breadcrumb_image: string | undefined;
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image_url: string;
  category: string;
}

function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/portfolio`);
        if (!res.ok) throw new Error("Failed to fetch projects");
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="pt-20 md:pt-24"
    >
      <div
        className="bg-primary-500 text-white py-16 md:py-24"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "soft-light",
          backgroundColor: "rgba(30, 64, 175, 0.65)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/60 to-indigo-700/50"></div>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
            Our Portfolio
          </h1>
          <p className="text-xl text-white max-w-2xl font-medium drop-shadow">
            Explore our latest projects and see how we've helped businesses transform through technology.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : projects.length === 0 ? (
          <p className="text-center text-gray-600">No projects found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden group"
              >
                <div className="relative h-80">
                  <img
                    src={project.breadcrumb_image}
                    alt={project.title}
                    className="w-auto h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 w-full">
                      <div className="flex items-center mb-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <p className="text-gray-300 text-sm mb-2">{project.subtitle}</p>
                      )}

                      <Link
                        to={`/portfolio/${project.id}`}
                        className="inline-flex items-center px-4 py-2 bg-primary-500 text-white rounded-md text-sm hover:bg-primary-600 transition-colors"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Portfolio;
