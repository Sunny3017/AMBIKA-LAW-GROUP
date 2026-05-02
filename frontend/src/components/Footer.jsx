import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-12 bg-brand-navy border-t border-brand-gold/10 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <img src="/footerlogo.png" alt="Ambika Law Group Logo" className="h-12 md:h-16 w-auto mx-auto mb-8" />
        <div className="flex justify-center space-x-8 mb-8 text-[10px] font-cinzel tracking-widest uppercase">
          <Link to="/" className="text-brand-gold">Home</Link>
          <Link to="/about" className="hover:text-brand-gold transition-colors">About</Link>
          <Link to="/services" className="hover:text-brand-gold transition-colors">Services</Link>
          <Link to="/contact" className="hover:text-brand-gold transition-colors">Contact</Link>
        </div>
        <p className="text-[10px] text-brand-ivory/30 tracking-[0.2em] uppercase">
          © 2026 AMBIKA LAW GROUP. Estd. 2026. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
