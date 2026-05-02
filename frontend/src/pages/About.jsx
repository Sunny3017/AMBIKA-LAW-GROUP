import useReveal from '../utils/useReveal';

const About = () => {
  useReveal();
  return (
    <>
      {/* Header Section */}
      <section className="pt-40 pb-20 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-playfair text-5xl md:text-8xl mb-6 reveal-up">Our <span className="gold-gradient">Story</span></h1>
          <p className="font-cinzel text-brand-gold tracking-[0.4em] uppercase text-sm mb-12 reveal-up">The Journey of Ambika Law Group</p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
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
              <p className="text-brand-ivory/60 leading-relaxed">
                I wanted to create a modern platform that makes legal guidance more approachable, clear, and reliable. This firm allows me to help people through consultation, research, and drafting support, while also building the foundation of the legal practice I hope to create in the future.
              </p>
            </div>
            <div className="reveal-up md:sticky md:top-40">
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

      {/* Mission & Vision */}
      <section className="py-24 bg-brand-royalBlue/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-12 border border-brand-gold/10 reveal-up">
              <h3 className="font-cinzel text-brand-gold text-2xl mb-6 tracking-widest uppercase">Mission</h3>
              <p className="text-brand-ivory/70 leading-relaxed">
                "To make legal guidance more accessible, understandable, and reliable by providing thoughtful consultation, legal research, and drafting support with integrity and professionalism."
              </p>
            </div>
            <div className="p-12 border border-brand-gold/10 reveal-up">
              <h3 className="font-cinzel text-brand-gold text-2xl mb-6 tracking-widest uppercase">Vision</h3>
              <p className="text-brand-ivory/70 leading-relaxed">
                "To build Ambika Law Group into a trusted and modern legal institution that empowers people through knowledge today and grows into a full-service law practice in the future."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Stage */}
      <section className="py-24 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-4xl md:text-6xl mb-12 reveal-up">Current <span className="gold-gradient">Focus</span></h2>
          <div className="grid md:grid-cols-3 gap-8 reveal-up">
            <div className="p-8 border border-brand-gold/10">
              <h4 className="font-cinzel text-brand-gold mb-4 tracking-widest uppercase">Research</h4>
              <p className="text-sm text-brand-ivory/40 leading-relaxed">In-depth analytical support across varied legal domains.</p>
            </div>
            <div className="p-8 border border-brand-gold/10">
              <h4 className="font-cinzel text-brand-gold mb-4 tracking-widest uppercase">Advisory</h4>
              <p className="text-sm text-brand-ivory/40 leading-relaxed">Clear, accessible guidance for individuals and startups.</p>
            </div>
            <div className="p-8 border border-brand-gold/10">
              <h4 className="font-cinzel text-brand-gold mb-4 tracking-widest uppercase">Drafting</h4>
              <p className="text-sm text-brand-ivory/40 leading-relaxed">Technical precision in legal documentation and review.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
