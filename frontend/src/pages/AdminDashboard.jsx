import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminDashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContacts = async () => {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        navigate('/admin');
        return;
      }

      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await axios.get(`${apiUrl}/contact`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setContacts(response.data);
        setLoading(false);
      } catch (err) {
        if (err.response?.status === 401) {
          localStorage.removeItem('adminToken');
          navigate('/admin');
        }
      }
    };

    fetchContacts();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin');
  };

  if (loading) return <div className="min-h-screen bg-brand-navy flex items-center justify-center font-cinzel text-brand-gold">Loading...</div>;

  return (
    <div className="min-h-screen bg-brand-navy pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12 border-b border-brand-gold/10 pb-8">
          <div>
            <h1 className="font-playfair text-4xl text-brand-gold mb-2">Inquiries</h1>
            <p className="text-brand-ivory/50 font-cinzel text-xs tracking-widest uppercase">Admin Dashboard</p>
          </div>
          <button 
            onClick={handleLogout}
            className="px-6 py-2 border border-red-500/30 text-red-500 hover:bg-red-500 hover:text-white transition-all text-[10px] font-cinzel tracking-widest uppercase"
          >
            Logout
          </button>
        </div>

        <div className="grid gap-6">
          {contacts.length === 0 ? (
            <div className="text-center py-20 border border-brand-gold/10 bg-brand-royalBlue/5">
              <p className="font-cinzel text-brand-ivory/40 uppercase tracking-widest">No inquiries found</p>
            </div>
          ) : (
            contacts.map((contact) => (
              <div key={contact._id} className="bg-brand-royalBlue/10 border border-brand-gold/10 p-8 hover:border-brand-gold/40 transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-cinzel text-xl text-brand-gold mb-1">{contact.name}</h3>
                    <p className="text-sm text-brand-ivory/60">{contact.email} | {contact.phone}</p>
                  </div>
                  <span className="text-[10px] text-brand-ivory/30 font-cinzel tracking-widest uppercase">
                    {new Date(contact.createdAt).toLocaleDateString('en-IN', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </div>
                <div className="mb-4">
                  <p className="text-[10px] text-brand-gold uppercase tracking-[0.2em] mb-2">Subject</p>
                  <p className="font-cinzel text-brand-ivory">{contact.subject}</p>
                </div>
                <div>
                  <p className="text-[10px] text-brand-gold uppercase tracking-[0.2em] mb-2">Message</p>
                  <p className="font-lora text-brand-ivory/80 leading-relaxed italic">"{contact.message}"</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
