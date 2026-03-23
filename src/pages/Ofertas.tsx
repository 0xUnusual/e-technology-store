import { motion } from 'framer-motion';
import { Star, Clock, Gift, ArrowRight, CheckCircle } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/18494099160?text=Hola,%20me%20gustaría%20obtener%20más%20información.";

export const Ofertas = () => {
  const deals = [
    { title: "Combo Pro Max", subtitle: "iPhone 15 Pro Max + AirPods Pro 2", tag: "-$200 Off", image: "https://images.unsplash.com/photo-1695048133142-1a20a5bf616f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", icon: Gift },
    { title: "S24 Ultra Tech Bundle", subtitle: "Galaxy S24 Ultra + Watch 6 + Buds 2 Pro", tag: "Hot Offer", image: "https://images.unsplash.com/photo-1707297597148-5226f9593259?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", icon: Clock },
    { title: "Eco-System Premium", subtitle: "iPad Pro M4 + Apple Pencil Pro + Magic Keyboard", tag: "Exclusive", image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", icon: Star },
  ];

  return (
    <div className="w-full flex flex-col gap-10 lg:gap-12 py-6 lg:py-10 mb-12">
      {/* Hero Offers Section */}
      <section className="w-full glass rounded-[35px] lg:rounded-[50px] border border-white/10 overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative z-10 scroll-mt-20">
        <div className="flex flex-col lg:flex-row items-stretch">
          {/* Left Content */}
          <div className="flex-1 p-8 sm:p-12 lg:p-20 flex flex-col justify-center relative bg-gradient-to-br from-[#060B19]/80 via-transparent to-transparent">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6 justify-center lg:justify-start"
            >
              <div className="h-[2px] w-12 bg-[#00e5ff]"></div>
              <span className="text-[#00e5ff] tracking-[0.4em] font-black uppercase text-[9px] lg:text-[10px]">Oportunidades Únicas</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-[1] lg:leading-[0.85] uppercase italic text-center lg:text-left"
            >
              OFERTAS <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-blue-500">RELÁMPAGO</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 text-sm sm:text-base lg:text-xl font-light leading-relaxed mb-10 text-center lg:text-left max-w-lg mx-auto lg:mx-0"
            >
              Hemos curado los paquetes más deseados para elevar tu experiencia tecnológica sin comprometer tu presupuesto. Solo por tiempo limitado.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center lg:justify-start"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="w-full sm:w-max px-10 py-5 rounded-full bg-white text-black font-black hover:bg-[#00e5ff] transition-all inline-flex items-center justify-center gap-4 text-[10px] uppercase tracking-[0.25em] shadow-2xl group">
                Hablar con un asesor
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right Image Content */}
          <div className="relative min-h-[350px] sm:h-[450px] lg:min-h-full lg:w-[45%] border-t lg:border-t-0 lg:border-l border-white/10 group overflow-hidden">
            <img 
              src="/ofertas_hero_image_tech_bundle_1774236462728.png" 
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-[6000ms] ease-out opacity-80" 
              alt="Ofertas Especiales" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none"></div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute bottom-6 right-6 left-6 sm:bottom-10 sm:right-10 sm:left-10 lg:left-0 lg:right-10 z-10 lg:max-w-[400px] lg:ml-auto"
            >
              <div className="glass p-6 sm:p-8 rounded-[35px] lg:rounded-[40px] border border-[#00e5ff]/30 backdrop-blur-3xl shadow-[0_0_50px_rgba(0,229,255,0.2)]">
                <span className="text-[#00e5ff] font-black text-4xl sm:text-5xl mb-2 block tracking-tighter">OFF -25%</span>
                <p className="text-white font-black text-[9px] sm:text-[10px] uppercase tracking-widest mb-6 opacity-80 group-hover:translate-x-3 transition-all duration-500">En Accesorios Seleccionados</p>
                <div className="flex gap-2">
                   {[1,2,3].map(i => <div key={i} className="flex-1 lg:w-10 h-1.5 bg-[#00e5ff]/20 rounded-full overflow-hidden relative">
                     <motion.div 
                       animate={{ x: ["-100%", "100%"] }}
                       transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                       className="absolute inset-0 bg-[#00e5ff]"
                     />
                   </div>)}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grid of Secondary Offers */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pb-10 px-2 lg:px-0">
        {deals.map((deal, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-[45px] p-8 lg:p-10 border border-white/5 relative overflow-hidden flex flex-col items-center text-center hover:bg-white/5 transition-all group shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#00e5ff]/5 to-transparent rounded-bl-[100px] pointer-events-none"></div>
            
            <div className={`w-20 h-20 lg:w-24 lg:h-24 rounded-[30px] lg:rounded-[35px] bg-black/40 flex items-center justify-center text-[#00e5ff] group-hover:scale-110 group-hover:rotate-6 transition-all border border-white/10 mb-8 lg:mb-10 shadow-lg relative`}>
              <div className="absolute inset-0 bg-[#00e5ff]/5 blur-xl group-hover:bg-[#00e5ff]/10 transition-colors"></div>
              <deal.icon className="w-10 h-10 lg:w-12 lg:h-12 relative drop-shadow-[0_0_15px_rgba(0,229,255,0.4)]" />
            </div>
            
            <h3 className="text-xl lg:text-2xl font-black text-white mb-2 leading-none uppercase tracking-tighter group-hover:text-[#00e5ff] transition-colors italic leading-none">{deal.title}</h3>
            <p className="text-gray-400 font-bold text-[9px] lg:text-[10px] mb-8 lg:mb-10 leading-relaxed max-w-[180px] uppercase tracking-[0.2em]">{deal.subtitle}</p>
            
            <div className="px-8 py-3 bg-[#00e5ff]/10 rounded-full border border-[#00e5ff]/30 text-[#00e5ff] font-black text-[9px] tracking-[0.3em] uppercase mb-10 shadow-[0_0_15px_rgba(0,229,255,0.1)] shadow-inner">
              {deal.tag}
            </div>
            
            <div className="w-full space-y-4 mb-10 flex-1">
               {["Envío local incluido", "Configuración premium gratis", "Garantía VIP 1 año"].map(t => (
                 <div key={t} className="flex items-center gap-3 justify-center text-gray-400 font-light text-[10px] lg:text-xs">
                    <CheckCircle className="w-4 h-4 text-[#00e5ff] shrink-0" />
                    {t}
                 </div>
               ))}
            </div>

            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="w-full py-5 rounded-full bg-white text-black font-black hover:bg-[#00e5ff] transition-all shadow-xl flex items-center justify-center gap-3 uppercase text-[9px] tracking-[0.25em] group">
              Reclamar Oferta
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>
        ))}
      </section>
    </div>
  );
};
