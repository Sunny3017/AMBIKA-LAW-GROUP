import useReveal from '../utils/useReveal';

const PracticeAreas = () => {
  useReveal();
  return (
    <>
      {/* Header Section */}
      <section className="pt-40 pb-20 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-playfair text-5xl md:text-8xl mb-6 reveal-up">Practice <span className="gold-gradient">Areas</span></h1>
          <p className="font-cinzel text-brand-gold tracking-[0.4em] uppercase text-sm mb-12 reveal-up">Focused Legal Research & Advisory</p>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-24 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Criminal Law Research */}
            <div className="practice-card p-12 reveal-up">
              <h3 className="font-cinzel text-brand-gold text-2xl mb-6 tracking-widest uppercase">Criminal Law Research</h3>
              <p className="text-brand-ivory/60 leading-relaxed mb-6">
                Specialized research in criminal jurisprudence, including case analysis, procedural reviews, and constitutional safeguards in criminal matters.
              </p>
              <div className="flex gap-4">
                <span className="text-[9px] px-2 py-1 border border-brand-gold/20 text-brand-gold uppercase tracking-tighter">Bail Matters</span>
                <span className="text-[9px] px-2 py-1 border border-brand-gold/20 text-brand-gold uppercase tracking-tighter">Trial Strategy</span>
              </div>
            </div>

            {/* Civil Matters */}
            <div className="practice-card p-12 reveal-up">
              <h3 className="font-cinzel text-brand-gold text-2xl mb-6 tracking-widest uppercase">Civil Matters</h3>
              <p className="text-brand-ivory/60 leading-relaxed mb-6">
                Assistance in understanding civil rights, property disputes, and drafting related to recovery, injunctions, and declarations.
              </p>
              <div className="flex gap-4">
                <span className="text-[9px] px-2 py-1 border border-brand-gold/20 text-brand-gold uppercase tracking-tighter">Property</span>
                <span className="text-[9px] px-2 py-1 border border-brand-gold/20 text-brand-gold uppercase tracking-tighter">Contracts</span>
              </div>
            </div>

            {/* Family Law */}
            <div className="practice-card p-12 reveal-up">
              <h3 className="font-cinzel text-brand-gold text-2xl mb-6 tracking-widest uppercase">Family Law</h3>
              <p className="text-brand-ivory/60 leading-relaxed mb-6">
                Sensitive legal research and guidance regarding matrimonial disputes, maintenance, custody, and succession matters.
              </p>
              <div className="flex gap-4">
                <span className="text-[9px] px-2 py-1 border border-brand-gold/20 text-brand-gold uppercase tracking-tighter">Matrimonial</span>
                <span className="text-[9px] px-2 py-1 border border-brand-gold/20 text-brand-gold uppercase tracking-tighter">Succession</span>
              </div>
            </div>

            {/* Corporate Basics */}
            <div className="practice-card p-12 reveal-up">
              <h3 className="font-cinzel text-brand-gold text-2xl mb-6 tracking-widest uppercase">Corporate Basics</h3>
              <p className="text-brand-ivory/60 leading-relaxed mb-6">
                Advisory for startups and small businesses regarding incorporation, basic compliance, and understanding corporate structures.
              </p>
              <div className="flex gap-4">
                <span className="text-[9px] px-2 py-1 border border-brand-gold/20 text-brand-gold uppercase tracking-tighter">Startups</span>
                <span className="text-[9px] px-2 py-1 border border-brand-gold/20 text-brand-gold uppercase tracking-tighter">Compliance</span>
              </div>
            </div>

            {/* Consumer Disputes */}
            <div className="practice-card p-12 reveal-up">
              <h3 className="font-cinzel text-brand-gold text-2xl mb-6 tracking-widest uppercase">Consumer Disputes</h3>
              <p className="text-brand-ivory/60 leading-relaxed mb-6">
                Guidance for consumers regarding their rights under the Consumer Protection Act and assistance in drafting related notices.
              </p>
              <div className="flex gap-4">
                <span className="text-[9px] px-2 py-1 border border-brand-gold/20 text-brand-gold uppercase tracking-tighter">Consumer Rights</span>
                <span className="text-[9px] px-2 py-1 border border-brand-gold/20 text-brand-gold uppercase tracking-tighter">Redressal</span>
              </div>
            </div>

            {/* Constitutional Law */}
            <div className="practice-card p-12 reveal-up">
              <h3 className="font-cinzel text-brand-gold text-2xl mb-6 tracking-widest uppercase">Constitutional Law</h3>
              <p className="text-brand-ivory/60 leading-relaxed mb-6">
                Deep dive research into fundamental rights, writ jurisdictions, and public law matters of significant legal importance.
              </p>
              <div className="flex gap-4">
                <span className="text-[9px] px-2 py-1 border border-brand-gold/20 text-brand-gold uppercase tracking-tighter">Writs</span>
                <span className="text-[9px] px-2 py-1 border border-brand-gold/20 text-brand-gold uppercase tracking-tighter">Public Law</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PracticeAreas;
