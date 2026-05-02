import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import useReveal from '../utils/useReveal';

const Home = () => {
  useReveal();

  useEffect(() => {
    // Hero Animations
    const heroTl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.5 } });
    
    heroTl.to('.hero-sub', { opacity: 1, y: 0, startAt: { y: 20 } })
          .to('.hero-title', { opacity: 1, y: 0, startAt: { y: 40 } }, "-=1.2")
          .to('.hero-desc', { opacity: 1, y: 0, startAt: { y: 20 } }, "-=1.2")
          .to('.hero-cta', { opacity: 1, y: 0, startAt: { y: 20 } }, "-=1.2");
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-navy opacity-80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-navy/50 to-brand-navy"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] opacity-20 rotate-12 pointer-events-none">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-brand-gold/30 fill-none stroke-[0.1]">
              <circle cx="50" cy="50" r="40" />
              <line x1="10" y1="50" x2="90" y2="50" />
              <line x1="50" y1="10" x2="50" y2="90" />
              <rect x="30" y="30" width="40" height="40" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <p className="hero-sub font-cinzel text-brand-gold tracking-[0.4em] uppercase mb-6 opacity-0">Legal Consultation, Research & Guidance</p>
          <h1 className="hero-title font-playfair text-4xl md:text-7xl lg:text-8xl mb-8 leading-tight opacity-0">
            Legal Guidance, Research & <span className="gold-gradient">Consultation</span>
          </h1>
          <p className="hero-desc font-lora text-lg md:text-xl text-brand-ivory/80 max-w-2xl mx-auto mb-12 opacity-0 italic">
            "Providing trusted legal consultation, research, and drafting support to help you understand your rights and options with clarity and confidence."
          </p>
          <div className="hero-cta flex flex-col md:flex-row gap-6 justify-center opacity-0">
            <Link to="/contact" className="px-10 py-4 bg-brand-gold text-brand-black font-cinzel font-bold tracking-widest hover:bg-brand-goldLight transition-all duration-300 transform hover:scale-105">
              BOOK CONSULTATION
            </Link>
            <Link to="/about" className="px-10 py-4 border border-brand-ivory/30 text-brand-ivory font-cinzel tracking-widest hover:border-brand-gold hover:text-brand-gold transition-all duration-300">
              LEARN MORE
            </Link>
          </div>
        </div>
      </section>

      {/* Modern Positioning Section */}
      <section id="about" className="py-24 bg-brand-navy border-t border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center mb-24">
            <div className="reveal-up">
              <h2 className="font-playfair text-4xl md:text-6xl mb-8">Modern <span className="gold-gradient">Legal</span> Positioning</h2>
              <p className="text-brand-ivory/70 leading-relaxed mb-8">
                Welcome to Ambika Law Group — a legal consultation and research initiative dedicated to making legal guidance more accessible and understandable. We currently provide consultation, legal research, drafting assistance, and legal awareness support to individuals, startups, and businesses.
              </p>
              <div className="flex gap-4">
                <div className="p-4 border border-brand-gold/20 bg-brand-royalBlue/20">
                  <span className="block text-brand-gold font-cinzel text-2xl mb-1">Modern</span>
                  <span className="text-[10px] uppercase tracking-widest text-brand-ivory/40">Approach</span>
                </div>
                <div className="p-4 border border-brand-gold/20 bg-brand-royalBlue/20">
                  <span className="block text-brand-gold font-cinzel text-2xl mb-1">Global</span>
                  <span className="text-[10px] uppercase tracking-widest text-brand-ivory/40">Standards</span>
                </div>
              </div>
            </div>
            <div className="relative reveal-up">
              <div className="aspect-square bg-brand-royalBlue/30 border border-brand-gold/10 flex items-center justify-center p-12">
                 <div className="text-center">
                  <p className="font-cinzel text-brand-gold tracking-[0.3em] uppercase text-xs mb-4">Core Philosophy</p>
                  <h3 className="font-playfair text-3xl italic">"Simplifying Legal Issues Through Research and Consultation"</h3>
                 </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-brand-gold/40"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-brand-gold/40"></div>
            </div>
          </div>

          {/* Founder Section */}
          <div className="grid md:grid-cols-2 gap-16 items-start pt-24 border-t border-brand-gold/10">
            <div className="reveal-up">
              <div className="inline-block px-4 py-1 border border-brand-gold/30 rounded-full mb-8">
                <span className="text-brand-gold text-xs font-cinzel tracking-widest uppercase">Founder Director</span>
              </div>
              <h2 className="font-playfair text-4xl md:text-6xl mb-8 leading-tight">Aditya Vatsa</h2>
              <p className="text-brand-ivory/80 text-lg leading-relaxed mb-6 italic">
                "Hi, I’m Aditya Vatsa — Director & Founder of Ambika Law Group, with a passion for making legal guidance simpler, clearer, and more accessible."
              </p>
              <p className="text-brand-ivory/60 leading-relaxed mb-6">
                I started Ambika Law Group because I realized that many people feel confused, intimidated, or unaware when it comes to legal issues. Even simple legal questions often seem overwhelming because legal information is not always easy to understand or access.
              </p>
              <Link to="/about" className="inline-block px-8 py-3 border border-brand-gold text-brand-gold font-cinzel tracking-widest hover:bg-brand-gold hover:text-brand-black transition-all duration-300">
                READ FULL STORY
              </Link>
            </div>
            <div className="reveal-up">
              <div className="aspect-[4/5] bg-brand-royalBlue relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent z-10"></div>
                <img src="/aboutadityaimage.jpeg" alt="Aditya Vatsa" className="absolute inset-0 w-full h-full object-cover grayscale-0 opacity-100 transition-all duration-700" />
                <div className="absolute bottom-8 left-8 z-20">
                  <h4 className="font-cinzel text-brand-gold text-xl tracking-widest uppercase">Aditya Vatsa</h4>
                  <p className="text-[10px] text-brand-ivory/80 tracking-[0.2em] uppercase">Director & Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-brand-navy border-t border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-playfair text-4xl md:text-6xl mb-6 reveal-up">Our <span className="gold-gradient">Services</span></h2>
            <p className="font-cinzel text-brand-gold tracking-[0.4em] uppercase text-xs reveal-up">Professional Consultation & Research Solutions</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Legal Consultation */}
            <div className="service-card p-10 reveal-up">
              <div className="w-12 h-12 mb-8 text-brand-gold">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
              </div>
              <h3 className="font-cinzel text-2xl mb-6 tracking-wider">Legal Consultation</h3>
              <p className="text-sm text-brand-ivory/60 leading-relaxed mb-6">
                Providing clear, reliable, and accessible legal guidance to help you understand your rights and options.
              </p>
              <Link to="/services" className="text-[10px] text-brand-gold font-cinzel tracking-widest uppercase hover:underline">View Details</Link>
            </div>

            {/* Drafting Notices */}
            <div className="service-card p-10 reveal-up">
              <div className="w-12 h-12 mb-8 text-brand-gold">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
              </div>
              <h3 className="font-cinzel text-2xl mb-6 tracking-wider">Drafting Assistance</h3>
              <p className="text-sm text-brand-ivory/60 leading-relaxed mb-6">
                Technical precision in drafting legal notices, applications, and basic documentation.
              </p>
              <Link to="/services" className="text-[10px] text-brand-gold font-cinzel tracking-widest uppercase hover:underline">View Details</Link>
            </div>

            {/* Legal Research */}
            <div className="service-card p-10 reveal-up">
              <div className="w-12 h-12 mb-8 text-brand-gold">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <h3 className="font-cinzel text-2xl mb-6 tracking-wider">Legal Research</h3>
              <p className="text-sm text-brand-ivory/60 leading-relaxed mb-6">
                In-depth research and analytical support to provide a strong foundation for case understanding.
              </p>
              <Link to="/services" className="text-[10px] text-brand-gold font-cinzel tracking-widest uppercase hover:underline">View Details</Link>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/services" className="px-10 py-4 border border-brand-gold text-brand-gold font-cinzel tracking-widest hover:bg-brand-gold hover:text-brand-black transition-all duration-500">
              EXPLORE ALL SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section id="blog" className="py-24 bg-brand-navy border-t border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="reveal-up">
              <h2 className="font-playfair text-4xl md:text-6xl mb-6">Legal <span className="gold-gradient">Insights</span></h2>
              <p className="font-cinzel text-brand-gold tracking-[0.4em] uppercase text-xs">Knowledge. Awareness. Updates.</p>
            </div>
            <Link to="/blog" className="reveal-up text-[10px] text-brand-gold font-cinzel tracking-widest uppercase border-b border-brand-gold/20 pb-1 hover:border-brand-gold transition-all">
              VIEW ALL ARTICLES
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Article 1 */}
            <article className="reveal-up group">
              <div className="aspect-video bg-brand-royalBlue/50 relative overflow-hidden mb-6">
                <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt="Cyber Fraud" />
              </div>
              <span className="text-[10px] text-brand-gold font-cinzel tracking-widest uppercase mb-4 block">Rights Awareness</span>
              <h3 className="font-cinzel text-xl mb-4 group-hover:text-brand-gold transition-colors">Understanding Cyber Fraud: A Legal Perspective</h3>
              <Link to="/blog" className="text-[10px] text-brand-ivory/40 font-cinzel tracking-widest uppercase hover:text-brand-gold transition-all">Read More</Link>
            </article>

            {/* Article 2 */}
            <article className="reveal-up group">
              <div className="aspect-video bg-brand-royalBlue/50 relative overflow-hidden mb-6">
                <img src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt="Startup Legal" />
              </div>
              <span className="text-[10px] text-brand-gold font-cinzel tracking-widest uppercase mb-4 block">Updates</span>
              <h3 className="font-cinzel text-xl mb-4 group-hover:text-brand-gold transition-colors">Startup Legal Basics: From Vision to Value</h3>
              <Link to="/blog" className="text-[10px] text-brand-ivory/40 font-cinzel tracking-widest uppercase hover:text-brand-gold transition-all">Read More</Link>
            </article>

            {/* Article 3 */}
            <article className="reveal-up group">
              <div className="aspect-video bg-brand-royalBlue/50 relative overflow-hidden mb-6">
                <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt="Consumer Protection" />
              </div>
              <span className="text-[10px] text-brand-gold font-cinzel tracking-widest uppercase mb-4 block">Judgments</span>
              <h3 className="font-cinzel text-xl mb-4 group-hover:text-brand-gold transition-colors">Consumer Protection in the Digital Age</h3>
              <Link to="/blog" className="text-[10px] text-brand-ivory/40 font-cinzel tracking-widest uppercase hover:text-brand-gold transition-all">Read More</Link>
            </article>
          </div>
        </div>
      </section>

      {/* Contact Section Preview */}
      <section id="contact" className="py-24 bg-brand-navy border-t border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-4xl md:text-6xl mb-8 leading-tight">Get in <span className="gold-gradient">Touch</span></h2>
          <p className="text-brand-ivory/60 mb-12 font-lora max-w-2xl mx-auto">Have a legal query? Contact Ambika Law Group for professional consultation, legal research, and drafting assistance.</p>
          <Link to="/contact" className="px-12 py-5 bg-brand-gold text-brand-black font-cinzel font-bold tracking-[0.2em] hover:bg-brand-goldLight transition-all duration-300 uppercase inline-block">
            Book Consultation
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
