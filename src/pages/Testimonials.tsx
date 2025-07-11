import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "Global Innovations Inc.",
    content: "Working with this team has been transformative for our business. Their attention to detail and creative solutions exceeded our expectations. The results have been nothing short of remarkable.",
    rating: 5,
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Tech Startup Founder",
    company: "NextGen Solutions",
    content: "The level of professionalism and technical expertise is outstanding. They delivered our project on time and with exceptional quality. Their innovative approach helped us stand out in a competitive market.",
    rating: 5,
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Creative Director",
    company: "Artisan Design Studio",
    content: "Their innovative approach and dedication to excellence make them stand out. A truly reliable partner for any business looking to make an impact in their industry.",
    rating: 5,
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Operations Manager",
    company: "Precision Manufacturing Co.",
    content: "The team's ability to understand our complex requirements and deliver solutions that perfectly match our needs is impressive. They've become an invaluable partner in our growth journey.",
    rating: 5,
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "E-commerce Director",
    company: "Urban Trends",
    content: "From concept to execution, their work has been exceptional. They brought fresh perspectives to our challenges and delivered solutions that exceeded our expectations.",
    rating: 5,
    image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

function Testimonials() {
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
          backgroundImage: "url('https://images.pexels.com/photos/7709020/pexels-photo-7709020.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'soft-light',
          backgroundColor: 'rgba(88, 43, 129, 0.65)', // Lighter purple for better readability
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/60 to-indigo-700/50"></div>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">Client Testimonials</h1>
          <p className="text-xl text-white max-w-2xl font-medium drop-shadow">
            Discover what our clients have to say about their experiences working with us.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <Quote className="w-12 h-12 text-primary-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These testimonials reflect our commitment to excellence and client satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star
                      key={index}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-gray-700 text-lg mb-6 italic">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.role}</p>
                    <p className="text-indigo-600">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Want to share your experience working with us?
            <a href="/contact" className="text-primary-600 hover:text-primary-500 ml-2">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Testimonials;