import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import PortfolioDetail from './pages/PortfolioDetail';
import Testimonials from './pages/Testimonials';
import Contact from './components/Contact';
import NotFound from './pages/NotFound';
import { ToastContainer } from 'react-toastify';

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceSlug" element={<ServiceDetail />} /> */}
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:projectId" element={<PortfolioDetail />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer position="top-right" autoClose={3000} />

          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;