import { Link } from 'react-router-dom';

const DisclaimerBar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-[90] bg-brand-royalBlue/90 backdrop-blur-md border-t border-brand-gold/20 py-2 px-4 text-[10px] text-center text-brand-ivory/70 tracking-wider">
      <span className="text-brand-gold font-bold uppercase mr-2">Disclaimer:</span> 
      This website is for informational purposes only. 
      <Link to="/disclaimer" className="underline hover:text-brand-gold ml-1">Read Full Disclaimer</Link>
    </div>
  );
};

export default DisclaimerBar;
