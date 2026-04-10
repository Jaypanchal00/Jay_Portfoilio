import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Github, Linkedin, CheckCircle2, AlertCircle } from 'lucide-react';
import SectionHeading from './SectionHeading';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<null | { type: 'success' | 'error'; message: string }>(null);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3500);
    return () => clearTimeout(t);
  }, [toast]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      const response = await fetch('https://contactapi-jay.vercel.app/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setToast({ type: 'success', message: (data && (data.message || data.msg)) || 'Message sent successfully' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setToast({ type: 'error', message: (data && (data.message || data.error)) || 'Failed to send message' });
      }
    } catch (err) {
      setToast({ type: 'error', message: 'Network error. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={22} />,
      title: 'Email',
      value: 'jkpanchal3491@gmail.com',
      href: 'mailto:jkpanchal3491@gmail.com'
    },
    {
      icon: <Phone size={22} />,
      title: 'Phone',
      value: '+91 9974836827',
      href: 'tel:+919974836827'
    },
    {
      icon: <MapPin size={22} />,
      title: 'Location',
      value: 'Ahmedabad, Gujarat',
      href: '#'
    },
  ];

  return (
    <section id="contact" className="py-24 px-8 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] pointer-events-none opacity-40" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-start">
          
          <motion.div 
            initial={{ opacity: 1 }}
            className="space-y-12"
          >
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1]">
                Let's Start a <br />
                <span className="text-blue-600 font-extrabold">Conversation.</span>
              </h2>
              <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-md mx-auto lg:mx-0 opacity-80">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-5 p-4 md:p-6 bg-white border border-slate-100 rounded-2xl hover:border-blue-100 hover:shadow-xl transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-all">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{info.title}</p>
                    <p className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 pt-4 border-t border-slate-100">
               <a href="https://github.com/Jaypanchal00" target="_blank" className="text-slate-300 hover:text-blue-600 transition-all"><Github size={24} /></a>
               <a href="https://www.linkedin.com/in/jay-panchal-470582281/" target="_blank" className="text-slate-300 hover:text-blue-600 transition-all"><Linkedin size={24} /></a>
            </div>
          </motion.div>

          <div className="p-8 md:p-12 rounded-[2.5rem] bg-white border border-slate-100 shadow-2xl relative overflow-hidden group hover:shadow-blue-50 transition-all">
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2.5">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 text-slate-950 font-bold focus:outline-none focus:bg-white focus:border-blue-600 focus:shadow-md transition-all placeholder:text-slate-300"
                  />
                </div>
                <div className="space-y-2.5">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-1">Work Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 text-slate-950 font-bold focus:outline-none focus:bg-white focus:border-blue-600 focus:shadow-md transition-all placeholder:text-slate-300"
                  />
                </div>
              </div>
              
              <div className="space-y-2.5">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-1">Project Details</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we collaborate?"
                  required
                  rows={5}
                  className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 text-slate-950 font-bold focus:outline-none focus:bg-white focus:border-blue-600 focus:shadow-md transition-all resize-none placeholder:text-slate-300"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className={`w-full py-5 rounded-2xl font-bold uppercase tracking-[0.15em] transition-all flex items-center justify-center gap-4 text-xs shadow-xl active:scale-95 ${
                  submitting 
                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed uppercase' 
                  : 'bg-slate-950 text-white hover:bg-blue-600'
                }`}
              >
                <span>{submitting ? 'Sending Message...' : 'Send Inquiry'}</span>
                <Send size={18} className={submitting ? '' : 'group-hover:translate-x-1 transition-transform'} />
              </button>
            </form>
          </div>
        </div>

        {/* Floating Toast Notification */}
        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed bottom-8 right-8 z-[150]"
            >
              <div
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl border ${
                  toast.type === 'success'
                    ? 'bg-emerald-50 border-emerald-100 text-emerald-700'
                    : 'bg-rose-50 border-rose-100 text-rose-700'
                }`}
              >
                {toast.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                <p className="text-sm font-bold tracking-tight">{toast.message}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Contact;
