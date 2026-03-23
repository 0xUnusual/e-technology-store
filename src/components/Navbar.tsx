import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const WHATSAPP_LINK = "https://wa.me/18494099160?text=Hola,%20me%20gustaría%20obtener%20más%20información.";

interface NavbarProps {
  navLinks: { name: string; href: string }[];
}

export const Navbar = ({ navLinks }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-50">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full flex items-center justify-between p-4 lg:px-12 py-4 lg:py-4 glass rounded-3xl lg:rounded-full border border-white/10 shadow-2xl backdrop-blur-md relative"
      >
        <Link to="/" className="flex items-center gap-3 lg:gap-4 cursor-pointer group">
          <div className="relative">
            <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-gradient-to-tr from-[#00e5ff]/80 via-blue-500/80 to-purple-600/80 flex items-center justify-center p-[1px] shadow-[0_0_20px_rgba(0,229,255,0.2)] group-hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] transition-all duration-500">
              <div className="w-full h-full bg-[#060B19] rounded-full flex items-center justify-center group-hover:bg-opacity-80 transition-all">
                <span className="font-extrabold text-lg lg:text-xl text-white tracking-tighter">E</span>
              </div>
            </div>
            <div className="absolute -inset-1 bg-[#00e5ff]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg lg:text-xl font-black tracking-[0.2em] text-white leading-none uppercase">E-TECHNOLOGY</span>
            <span className="text-[9px] lg:text-[10px] font-bold tracking-[0.4em] text-[#00e5ff]/80">PREMIUM STORE</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 bg-[#090F1E]/90 px-8 py-3 rounded-full border border-white/5 shadow-2xl backdrop-blur-md">
          {navLinks.map((item) => (
            <Link 
              key={item.name} 
              to={item.href.startsWith('#') ? (item.href === '#inicio' ? '/' : `/#${item.href.slice(1)}`) : item.href} 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group py-2"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00e5ff] rounded-full transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4 lg:gap-6">
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-[#00e5ff] transition-colors hidden sm:block hover:scale-110 transform">
            <MessageCircle className="w-5 h-5 shadow-[0_0_10px_rgba(0,229,255,0.3)]" />
          </a>
          <Link to="/catalogo" className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-extrabold text-[10px] uppercase tracking-widest hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:bg-[#00e5ff] transition-all duration-300 group">
            Explorar
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          {/* Burger Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white active:scale-95 transition-all shadow-xl"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 w-full glass border-b border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-8 gap-6 items-center">
              {navLinks.map((item, i) => (
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  key={item.name}
                >
                  <Link 
                    onClick={() => setIsOpen(false)}
                    to={item.href.startsWith('#') ? (item.href === '#inicio' ? '/' : `/#${item.href.slice(1)}`) : item.href} 
                    className="text-xl font-black text-white uppercase tracking-[0.2em] hover:text-[#00e5ff] transition-colors text-center"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="w-full h-[1px] bg-white/10 my-4"
              />
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-8"
              >
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-[#00e5ff]/10 flex items-center justify-center text-[#00e5ff] border border-[#00e5ff]/20">
                  <MessageCircle className="w-6 h-6" />
                </a>
                <Link 
                  onClick={() => setIsOpen(false)}
                  to="/catalogo" 
                  className="px-8 py-4 rounded-full bg-white text-black font-black uppercase text-xs tracking-[0.2em] flex items-center gap-3 shadow-2xl shadow-[#00e5ff]/20"
                >
                  Catálogo <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
