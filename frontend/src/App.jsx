import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import DisclaimerBar from './components/DisclaimerBar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import PracticeAreas from './pages/PracticeAreas';
import FAQ from './pages/FAQ';
import Disclaimer from './pages/Disclaimer';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <HashRouter>
      <div className="custom-scrollbar selection:bg-brand-gold selection:text-brand-black">
        <div className="grain-overlay"></div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/practice-areas" element={<PracticeAreas />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </main>
        <DisclaimerBar />
        <WhatsAppButton />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
