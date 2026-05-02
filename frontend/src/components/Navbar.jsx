import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    if (!isOpen) {
      setIsOpen(true);
      gsap.fromTo("#mobile-menu", { opacity: 0 }, { opacity: 1, duration: 0.5 });
      gsap.from(".mobile-link", { 
        y: 20, 
        opacity: 0, 
        stagger: 0.1, 
        duration: 0.5, 
        delay: 0.2 
      });
    } else {
      gsap.to("#mobile-menu", { 
        opacity: 0, 
        duration: 0.5, 
        onComplete: () => setIsOpen(false) 
      });
    }
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <nav className="fixed top-0 w-full z-[100] glass-nav">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20 md:h-24">
          <Link to="/" className="h-full flex items-center py-0">
            <img src="/AMBIKALOGO.png" alt="Ambika Law Group Logo" className="h-[150%] md:h-[180%] w-auto object-contain transform translate-y-1" />
          </Link>
          
            <div className="hidden lg:flex space-x-6 items-center text-[10px] tracking-[0.2em] uppercase font-cinzel">
              <Link to="/" className={`nav-link ${location.pathname === '/' ? 'text-brand-gold' : ''}`}>Home</Link>
              <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'text-brand-gold' : ''}`}>About</Link>
              <Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'text-brand-gold' : ''}`}>Services</Link>
              <Link to="/practice-areas" className={`nav-link ${location.pathname === '/practice-areas' ? 'text-brand-gold' : ''}`}>Practice Areas</Link>
              <Link to="/blog" className={`nav-link ${location.pathname === '/blog' ? 'text-brand-gold' : ''}`}>Insights</Link>
              <Link to="/faq" className={`nav-link ${location.pathname === '/faq' ? 'text-brand-gold' : ''}`}>FAQ</Link>
              <Link to="/disclaimer" className={`nav-link ${location.pathname === '/disclaimer' ? 'text-brand-gold' : ''}`}>Disclaimer</Link>
              <Link to="/contact" className="px-5 py-2 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all duration-500">Contact</Link>
            </div>
          
          <button onClick={toggleMenu} className="lg:hidden text-brand-gold">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div id="mobile-menu" className="fixed inset-0 z-[150] bg-brand-black/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 font-cinzel text-xl tracking-[0.2em] uppercase">
          <button onClick={toggleMenu} className="absolute top-8 right-8 text-brand-gold">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <Link to="/" className="mobile-link text-brand-gold">Home</Link>
          <Link to="/about" className="mobile-link">About</Link>
          <Link to="/services" className="mobile-link">Services</Link>
          <Link to="/practice-areas" className="mobile-link">Practice Areas</Link>
          <Link to="/blog" className="mobile-link">Insights</Link>
          <Link to="/faq" className="mobile-link">FAQ</Link>
          <Link to="/disclaimer" className="mobile-link text-sm">Disclaimer</Link>
          <Link to="/contact" className="px-8 py-3 border border-brand-gold text-brand-gold uppercase text-sm">Contact</Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
