import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await axios.post(`${apiUrl}/auth/login`, { email, password });
      localStorage.setItem('adminToken', response.data.token);
      navigate('/admin/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-brand-navy flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-brand-royalBlue/20 p-10 border border-brand-gold/10">
        <div className="text-center mb-10">
          <img src="/aglogo.png" alt="Logo" className="h-12 mx-auto mb-6" />
          <h2 className="font-playfair text-3xl text-brand-gold">Admin Portal</h2>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-brand-gold mb-2">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border border-brand-gold/20 p-4 focus:outline-none focus:border-brand-gold text-brand-ivory text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-brand-gold mb-2">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent border border-brand-gold/20 p-4 focus:outline-none focus:border-brand-gold text-brand-ivory text-sm"
              required
            />
          </div>
          
          {error && <p className="text-red-500 text-xs font-cinzel text-center">{error}</p>}
          
          <button 
            type="submit" 
            className="w-full py-4 bg-brand-gold text-brand-black font-cinzel font-bold tracking-[0.2em] hover:bg-brand-goldLight transition-all uppercase"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
