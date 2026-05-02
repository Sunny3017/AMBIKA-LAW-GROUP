import useReveal from '../utils/useReveal';

const Blog = () => {
  useReveal();
  const articles = [
    {
      tag: "Rights Awareness",
      title: "Understanding Cyber Fraud: A Legal Perspective",
      desc: "Navigating the complexities of digital security and legal remedies in the modern era...",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
    },
    {
      tag: "Updates",
      title: "Startup Legal Basics: From Vision to Value",
      desc: "Essential legal frameworks every founder should know before launching their venture...",
      image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop"
    },
    {
      tag: "Judgments",
      title: "Consumer Protection in the Digital Age",
      desc: "A guide to your rights as a consumer and how to seek redressal for grievances...",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <>
      {/* Header Section */}
      <section className="pt-40 pb-20 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-playfair text-5xl md:text-8xl mb-6 reveal-up">Legal <span className="gold-gradient">Insights</span></h1>
          <p className="font-cinzel text-brand-gold tracking-[0.4em] uppercase text-sm mb-12 reveal-up">Knowledge. Awareness. Updates.</p>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="pb-12 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-4 reveal-up">
            <button className="px-6 py-2 border border-brand-gold bg-brand-gold text-brand-black text-[10px] font-cinzel tracking-widest uppercase">All</button>
            <button className="px-6 py-2 border border-brand-gold/20 hover:border-brand-gold text-brand-ivory text-[10px] font-cinzel tracking-widest uppercase transition-all">Updates</button>
            <button className="px-6 py-2 border border-brand-gold/20 hover:border-brand-gold text-brand-ivory text-[10px] font-cinzel tracking-widest uppercase transition-all">Judgments</button>
            <button className="px-6 py-2 border border-brand-gold/20 hover:border-brand-gold text-brand-ivory text-[10px] font-cinzel tracking-widest uppercase transition-all">Rights Awareness</button>
            <button className="px-6 py-2 border border-brand-gold/20 hover:border-brand-gold text-brand-ivory text-[10px] font-cinzel tracking-widest uppercase transition-all">Founder Journey</button>
          </div>
        </div>
      </section>

      {/* Blog Feed */}
      <section className="py-12 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {articles.map((article, index) => (
              <article key={index} className="blog-card reveal-up overflow-hidden group">
                <div className="aspect-video bg-brand-royalBlue/50 relative overflow-hidden">
                  <img src={article.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt={article.title} />
                </div>
                <div className="p-8">
                  <span className="text-[10px] text-brand-gold font-cinzel tracking-widest uppercase mb-4 block">{article.tag}</span>
                  <h3 className="font-cinzel text-xl mb-4 group-hover:text-brand-gold transition-colors">{article.title}</h3>
                  <p className="text-sm text-brand-ivory/50 mb-8 line-clamp-3">{article.desc}</p>
                  <button className="text-[10px] text-brand-gold font-cinzel tracking-widest uppercase border-b border-brand-gold/20 pb-1 hover:border-brand-gold transition-all">Read Article</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
