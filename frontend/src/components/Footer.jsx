import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative bg-brand-navy pt-24 pb-12 overflow-hidden border-t border-brand-gold/10">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-8">
            <Link to="/" className="inline-block">
              <img 
                src="/footerlogo.png" 
                alt="Ambika Law Group Logo" 
                className="h-32 md:h-44 w-auto object-contain transform hover:scale-105 transition-transform duration-500" 
              />
            </Link>
            <p className="text-brand-ivory/50 font-lora text-sm leading-relaxed max-w-sm italic">
              "Dedicated to providing thoughtful legal consultation, research, and drafting support with integrity and modern professionalism."
            </p>
            <div className="flex space-x-6">
              <a href="#" className="w-10 h-10 rounded-full border border-brand-gold/20 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all duration-300">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-brand-gold/20 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all duration-300">
                <span className="sr-only">Instagram</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.78-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.78.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-brand-gold/20 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all duration-300">
                <span className="sr-only">Facebook</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-2.066c0-1.133.272-1.491 1.155-1.491h2.845v-4.443l-3.928-.014c-3.862 0-5.072 2.066-5.072 4.679v3.336z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-8">
            <h4 className="font-cinzel text-brand-gold text-xs tracking-[0.3em] uppercase border-l-2 border-brand-gold pl-4">Navigation</h4>
            <ul className="space-y-4 font-cinzel text-[10px] tracking-widest uppercase">
              <li><Link to="/" className="text-brand-ivory/60 hover:text-brand-gold transition-colors block">Home</Link></li>
              <li><Link to="/about" className="text-brand-ivory/60 hover:text-brand-gold transition-colors block">Our Story</Link></li>
              <li><Link to="/services" className="text-brand-ivory/60 hover:text-brand-gold transition-colors block">Services</Link></li>
              <li><Link to="/practice-areas" className="text-brand-ivory/60 hover:text-brand-gold transition-colors block">Practice Areas</Link></li>
              <li><Link to="/blog" className="text-brand-ivory/60 hover:text-brand-gold transition-colors block">Insights</Link></li>
              <li><Link to="/faq" className="text-brand-ivory/60 hover:text-brand-gold transition-colors block">F.A.Q</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-4 space-y-8">
            <h4 className="font-cinzel text-brand-gold text-xs tracking-[0.3em] uppercase border-l-2 border-brand-gold pl-4">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <svg className="w-5 h-5 text-brand-gold mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-brand-gold mb-1">Email</p>
                  <p className="text-sm font-cinzel text-brand-ivory">contact@ambikalawgroup.com</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <svg className="w-5 h-5 text-brand-gold mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-brand-gold mb-1">Call / WhatsApp</p>
                  <p className="text-sm font-cinzel text-brand-ivory">+91 98719 56232</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <svg className="w-5 h-5 text-brand-gold mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-brand-gold mb-1">Location</p>
                  <p className="text-sm font-cinzel text-brand-ivory">New Delhi, India</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-brand-gold/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-brand-ivory/30 tracking-[0.2em] uppercase text-center md:text-left">
            © 2026 AMBIKA LAW GROUP. Estd. 2026. All Rights Reserved.
          </p>
          <div className="flex space-x-8 text-[9px] font-cinzel tracking-widest uppercase">
            <Link to="/disclaimer" className="text-brand-ivory/40 hover:text-brand-gold transition-colors">Disclaimer</Link>
            <Link to="/privacy" className="text-brand-ivory/40 hover:text-brand-gold transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>

      {/* Decorative Grain Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"></div>
    </footer>
  );
};

export default Footer;
