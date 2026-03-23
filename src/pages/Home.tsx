import { motion } from 'framer-motion';
import { Smartphone, MessageCircle, Star, ArrowRight, Users, Clock, ShieldCheck, Truck, HeartHandshake, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const WHATSAPP_LINK = "https://wa.me/18494099160?text=Hola,%20me%20gustaría%20obtener%20más%20información.";

export const Home = () => {
  return (
    <div className="flex flex-col gap-12 lg:gap-20 w-full px-1 lg:px-0 overflow-x-hidden">
      {/* Hero Section - Wrapped in glass */}
      <section id="inicio" className="w-full glass rounded-[35px] lg:rounded-[40px] border border-white/10 overflow-hidden relative shadow-2xl flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 py-16 lg:py-20 min-h-[70vh] lg:min-h-[80vh] scroll-mt-20">
        <div className="absolute right-[-10%] top-[-20%] w-[50%] h-[150%] bg-[radial-gradient(circle,rgba(0,229,255,0.03)_0%,transparent_60%)] pointer-events-none"></div>
        
        {/* Left Content */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex-1 text-center lg:text-left z-10 flex flex-col w-full"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1] mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-100 to-gray-500 uppercase">
            INNOVACIÓN QUE
            <br />VA MÁS ALLÁ DE
            <br />LA TECNOLOGÍA
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
            Descubre los smartphones más avanzados del mercado con garantía oficial, soporte especializado y diseño vanguardista.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full">
            <Link to="/catalogo" className="px-8 py-4 lg:py-5 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff] text-[#00e5ff] font-black hover:bg-[#00e5ff] hover:text-black transition-all shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.6)] w-full sm:w-auto flex items-center justify-center gap-3 text-center group text-[10px] uppercase tracking-[0.2em]">
              <Smartphone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              Ver Catálogo
            </Link>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="px-8 py-4 lg:py-5 rounded-full bg-white/5 border border-white/10 text-white font-black hover:bg-white hover:text-black transition-all w-full sm:w-auto flex items-center justify-center gap-3 text-center group text-[10px] uppercase tracking-[0.2em]">
              <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Contáctanos
            </a>
          </div>
        </motion.div>

        {/* Right Content - Smartphone */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative w-full h-[400px] sm:h-[500px] lg:h-[600px] mt-16 lg:mt-0 perspective-1000 flex items-center justify-center"
        >
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full flex items-center justify-center relative scale-[0.85] sm:scale-100 lg:scale-110"
          >
            <div className="relative w-64 lg:w-72 h-[520px] lg:h-[580px] rounded-[55px] bg-[#0f0f0f] border-[8px] border-[#1a1a1a] shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] overflow-hidden transition-all duration-700 transform-style-3d lg:rotate-y-[-15deg] lg:rotate-x-[5deg] hover:rotate-y-[-5deg] hover:rotate-x-[0deg]">
              <div className="absolute inset-0 border border-white/5 rounded-[47px] pointer-events-none z-50"></div>
              
              <div className="absolute left-[-8px] top-[100px] w-2 h-10 bg-[#222] rounded-r-sm border border-white/5"></div>
              <div className="absolute left-[-8px] top-[148px] w-2 h-16 bg-[#222] rounded-r-sm border border-white/5"></div>
              <div className="absolute left-[-8px] top-[218px] w-2 h-16 bg-[#222] rounded-r-sm border border-white/5"></div>
              <div className="absolute right-[-8px] top-[180px] w-2 h-24 bg-[#222] rounded-l-sm border border-white/5"></div>

              <div className="absolute inset-0 rounded-[47px] overflow-hidden bg-black p-0 border border-black z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-[#060B19] via-[#0A1128] to-[#040815]">
                  <div className="absolute top-[-20%] left-[-20%] w-[100%] h-[100%] bg-[radial-gradient(circle,rgba(0,229,255,0.15)_0%,transparent_70%)] blur-3xl"></div>
                </div>

                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-8 bg-black rounded-full z-[100] flex items-center shadow-2xl border border-white/5">
                  <div className="flex-1"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-900/40 mr-12 blur-[1px]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#111] absolute right-8 border border-white/10"></div>
                </div>

                <div className="relative h-full w-full flex flex-col items-center justify-center p-6 lg:p-8 z-20 pt-16">
                  <div className="w-full text-center mb-auto pt-10">
                     <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 3, repeat: Infinity }} className="text-[#00e5ff] text-[9px] lg:text-[10px] font-black tracking-[0.4em] mb-4">ULTIMATE SERIES</motion.div>
                     <h3 className="text-white font-black text-2xl lg:text-3xl tracking-tighter leading-tight mb-2 uppercase italic">E-TECHNOLOGY</h3>
                     <div className="w-10 h-1 bg-[#00e5ff]/40 mx-auto rounded-full"></div>
                  </div>

                  <div className="w-full flex-1 flex items-center justify-center -mt-10">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-tr from-[#00e5ff] to-blue-600 flex items-center justify-center p-1 relative">
                       <div className="w-full h-full bg-black/40 rounded-full backdrop-blur-md flex items-center justify-center border border-white/10 shadow-inner">
                          <Smartphone className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features / Trust Section */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 px-4">
        {[
          { tag: "+5000", title: "Clientes Satisfechos", icon: Users },
          { tag: "+3 Años", title: "En el Mercado", icon: Clock },
          { tag: "Oficial", title: "Garantía Oficial", icon: ShieldCheck },
          { tag: "24h", title: "Envíos Rápidos", icon: Truck },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.05 }}
            className="glass p-6 lg:p-8 rounded-[30px] flex items-center gap-5 hover:bg-white/5 transition-colors group cursor-default border border-white/10 shadow-xl"
          >
            <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-[#00e5ff]/10 flex items-center justify-center text-[#00e5ff] border border-[#00e5ff]/20 shrink-0 shadow-[0_0_15px_rgba(0,229,255,0.1)]">
              <item.icon className="w-6 h-6 lg:w-7 lg:h-7" />
            </div>
            <div className="flex flex-col">
              <h4 className="text-lg lg:text-2xl font-black text-white tracking-widest uppercase">{item.tag}</h4>
              <p className="text-[9px] uppercase font-bold text-gray-400 tracking-[0.2em]">{item.title}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Featured Products PREVIEW */}
      <section id="catalogo" className="w-full relative z-10 scroll-mt-20">
        <div className="glass rounded-[35px] lg:rounded-[40px] border border-white/10 p-8 lg:p-16 mb-8 shadow-2xl flex flex-col md:flex-row justify-between items-center md:items-end gap-8 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <span className="text-primary tracking-[0.4em] font-black uppercase text-[9px] mb-2 block">Selección Pro</span>
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-2 tracking-tighter uppercase leading-none">Catálogo Destacado</h2>
            <p className="text-gray-400 max-w-md text-sm lg:text-lg font-light leading-relaxed">Explora una selección de nuestros equipos más exclusivos del año.</p>
          </div>
          <Link to="/catalogo" className="w-full sm:w-auto text-[#00e5ff] font-black hover:text-white transition-all flex items-center justify-center gap-4 group bg-[#00e5ff]/10 px-8 py-5 rounded-full border border-[#00e5ff]/20 shadow-xl text-[10px] uppercase tracking-[0.2em]">
            Ver Catálogo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-2 lg:px-0">
          {[
            { name: "iPhone 15 Pro Titanium", tag: "Más Buscado", image: "https://images.unsplash.com/photo-1695048133142-1a20a5bf616f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
            { name: "Galaxy Z Fold 5", tag: "Nuevo", image: "https://images.unsplash.com/photo-1691349090623-112353724c04?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
            { name: "Pixel 8 Pro", tag: "Premium", image: "https://images.unsplash.com/photo-1699507912440-272cb2505af9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
          ].map((prod, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="glass rounded-[40px] p-6 lg:p-8 border border-white/5 hover:border-[#00e5ff]/30 transition-all duration-500 overflow-hidden relative group shadow-2xl flex flex-col"
            >
              <div className="w-full h-[250px] sm:h-[280px] lg:h-[320px] bg-black/40 rounded-[30px] overflow-hidden relative mb-8 shadow-inner">
                <img src={prod.image} alt={prod.name} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000" />
                <div className="absolute top-5 left-5 px-5 py-2 bg-black/80 rounded-full text-[9px] font-black text-white z-10 border border-white/10 uppercase tracking-widest backdrop-blur-md">{prod.tag}</div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              <h3 className="text-xl lg:text-2xl font-black text-white mb-10 group-hover:text-[#00e5ff] transition-colors tracking-tighter uppercase italic leading-none">{prod.name}</h3>
              <Link to="/catalogo" className="w-full py-5 rounded-full bg-white/5 hover:bg-[#00e5ff] border border-white/10 hover:border-[#00e5ff] hover:text-black font-black transition-all text-white flex justify-center gap-3 items-center text-[9px] uppercase tracking-[0.25em] shadow-xl mt-auto">
                Ir al Catálogo
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section - NOSOTROS */}
      <section id="nosotros" className="w-full glass rounded-[35px] lg:rounded-[40px] border border-white/10 flex flex-col md:flex-row overflow-hidden shadow-2xl relative scroll-mt-20">
        <div className="md:w-[45%] bg-gradient-to-br from-[#020512] to-[#04091a] relative p-12 py-16 flex items-center justify-center border-b md:border-b-0 md:border-r border-white/5 bg-black/40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.05)_0%,transparent_60%)]"></div>
          <div className="relative z-10 text-center flex flex-col items-center">
            <div className="w-24 h-24 lg:w-28 lg:h-28 mx-auto rounded-full bg-[#00e5ff]/10 flex items-center justify-center mb-8 border border-[#00e5ff]/20 shadow-[0_0_30px_rgba(0,229,255,0.2)]">
              <HeartHandshake className="w-10 h-10 lg:w-12 lg:h-12 text-[#00e5ff]" />
            </div>
            <h3 className="text-3xl lg:text-4xl font-black text-white mb-3 uppercase italic tracking-tighter leading-none">Tu Confianza</h3>
            <p className="text-[#00e5ff] tracking-[0.3em] uppercase text-[9px] font-black bg-[#00e5ff]/10 py-2.5 px-6 rounded-full inline-block border border-[#00e5ff]/20">Nuestra Prioridad</p>
          </div>
        </div>
        <div className="md:w-[55%] p-8 lg:p-16 flex flex-col justify-center bg-black/10">
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-10 tracking-tighter leading-[1] uppercase">¿POR QUÉ ELEGIRNOS?</h2>
          <div className="space-y-8 mb-12">
            {[
              { t: "Calidad Premium Garantizada", d: "Todos nuestros dispositivos pasan por estrictos controles de calidad." },
              { t: "Soporte Técnico Especializado", d: "Asistencia 24/7 para cualquier inconveniente con respuesta inmediata." },
              { t: "Experiencia de Compra Única", d: "Te asesoramos personalmente para encontrar el equipo ideal." }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-5 group">
                <CheckCircle className="w-6 h-6 text-[#00e5ff] mt-1 shrink-0" />
                <div className="flex flex-col">
                  <h4 className="text-lg lg:text-xl font-black text-white mb-2 uppercase tracking-tighter italic leading-none">{item.t}</h4>
                  <p className="text-xs lg:text-sm text-gray-400 font-light leading-relaxed">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="w-full sm:w-max px-10 py-5 rounded-full bg-white text-black font-black hover:bg-[#00e5ff] transition-all flex items-center justify-center gap-4 uppercase text-[9px] tracking-[0.2em] shadow-xl group">
            Hablar con un asesor
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Promo Section - Wrapped in glass */}
      <section id="ofertas" className="w-full glass rounded-[35px] lg:rounded-[40px] border border-white/10 p-10 lg:p-16 shadow-2xl relative z-10 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 scroll-mt-20 mb-10 text-center lg:text-left">
        <div className="lg:max-w-xl z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
          <span className="text-[#00e5ff] tracking-[0.3em] uppercase text-[9px] font-black bg-[#00e5ff]/10 py-2.5 px-6 rounded-full inline-block border border-[#00e5ff]/20 mb-8 shadow-inner">Ofertas Exclusivas</span>
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-8 tracking-tighter leading-[1] uppercase">AHORRA EN TU PRÓXIMO SMARTPHONE</h2>
          <p className="text-sm lg:text-lg text-gray-400 mb-10 font-light leading-relaxed">Descubre promociones exclusivas y paquetes de accesorios que solo encontrarás en nuestra tienda.</p>
          <Link to="/ofertas" className="w-full sm:w-max px-12 py-5 rounded-full bg-white text-black font-black hover:bg-[#00e5ff] transition-all inline-flex items-center justify-center gap-4 uppercase text-[10px] tracking-[0.25em] shadow-2xl group">
            Ver Todas las Ofertas
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="relative z-10 mt-8 lg:mt-0 flex items-center justify-center w-full lg:w-auto">
          <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full border border-white/10 flex items-center justify-center relative bg-black/20 shadow-inner">
            <div className="absolute inset-0 rounded-full border-t-2 border-[#00e5ff]/50 animate-[spin_10s_linear_infinite]"></div>
            <div className="w-24 h-24 lg:w-32 lg:h-32 glass rounded-full flex items-center justify-center z-10 border border-[#00e5ff]/20 shadow-[0_0_40px_rgba(0,229,255,0.25)]">
              <Star className="w-10 h-10 lg:w-12 lg:h-12 text-[#00e5ff] drop-shadow-[0_0_10px_rgba(0,229,255,0.5)]" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
