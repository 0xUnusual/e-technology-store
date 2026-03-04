import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { User, ArrowRight, ShieldCheck, Truck, Smartphone, Star, Clock, HeartHandshake, CheckCircle, MessageCircle, Users, Cpu } from 'lucide-react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const WHATSAPP_LINK = "https://wa.me/18494099160?text=Hola,%20me%20gustaría%20obtener%20más%20información.";

  const particlesOptions = useMemo(() => ({
    background: {
      color: { value: "transparent" },
    },
    fpsLimit: 60, // Reduced for better performance
    particles: {
      color: { value: "#00e5ff" },
      links: {
        enable: false, // Disabling links massively improves performance
      },
      move: {
        direction: "none" as const,
        enable: true,
        outModes: { default: "out" as const },
        random: true,
        speed: 0.5,
        straight: false,
      },
      number: { density: { enable: true, area: 800 }, value: 30 }, // Reduced number
      opacity: { value: 0.2 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 2 } },
    },
    detectRetina: true,
  }), []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Catálogo', href: '#catalogo' },
    { name: 'Ofertas', href: '#ofertas' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' }
  ];

  return (
    <div className="relative min-h-screen font-sans selection:bg-primary selection:text-black">
      {/* Background Particles - Optimized */}
      {init && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Particles id="tsparticles" options={particlesOptions} className="h-full w-full" />
        </div>
      )}

      {/* Decorative blurred blobs - Optimized by removing FIXED position and heavy animations */}
      <div className="absolute top-0 left-0 w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(0,229,255,0.05)_0%,transparent_70%)] -z-10 pointer-events-none"></div>
      <div className="absolute top-[40%] right-0 w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.05)_0%,transparent_70%)] -z-10 pointer-events-none"></div>

      {/* Main Container */}
      <main className="relative z-10 p-4 md:p-8 lg:p-12 max-w-[1600px] mx-auto min-h-screen flex flex-col items-center">

        {/* Glassmorphic Panel Container */}
        <div className="w-full h-full min-h-[90vh] glass rounded-[40px] border border-white/10 overflow-hidden relative shadow-2xl flex flex-col">

          {/* Navbar */}
          <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full flex items-center justify-between p-6 lg:px-12 relative z-20"
          >
            <a href="#inicio" className="flex items-center gap-3 cursor-pointer group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center p-[2px]">
                <div className="w-full h-full bg-[#060B19]/80 rounded-lg flex items-center justify-center group-hover:bg-transparent transition-all">
                  <span className="font-bold text-xl text-white">E</span>
                </div>
              </div>
              <span className="text-xl font-bold tracking-wider text-white hidden sm:block">TECHNOLOGY</span>
            </a>

            <div className="hidden lg:flex items-center gap-8 bg-[#090F1E]/90 px-8 py-3 rounded-full border border-white/5">
              {navLinks.map((item, i) => (
                <a key={item.name} href={item.href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group py-2">
                  {item.name}
                  {i === 0 && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full shadow-[0_0_10px_#00e5ff]"></span>}
                  {i !== 0 && <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary rounded-full transition-all duration-300 group-hover:w-full"></span>}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <a href="#contacto" className="text-gray-300 hover:text-primary transition-colors hidden sm:block hover:scale-110 transform">
                <User className="w-5 h-5" />
              </a>
              <a href="#catalogo" className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:shadow-[0_0_20px_rgba(0,229,255,0.5)] hover:bg-primary transition-all duration-300">
                Explorar Ahora
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.nav>

          {/* Hero Section */}
          <section id="inicio" className="flex-1 w-full flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 py-12 relative z-10 scroll-mt-20">
            {/* Left Content */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex-1 text-center lg:text-left z-10 pt-10 lg:pt-0"
            >
              <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-50 to-gray-400">
                INNOVACIÓN QUE
                <br />VA MÁS ALLÁ DE
                <br />LA TECNOLOGÍA
              </h1>
              <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 font-light">
                Descubre los smartphones más avanzados del mercado con garantía oficial, soporte especializado y diseño vanguardista.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a href="#catalogo" className="px-8 py-4 rounded-full bg-primary/10 border border-primary text-primary font-semibold hover:bg-primary hover:text-black transition-all shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.6)] w-full sm:w-auto flex items-center justify-center gap-2">
                  <Smartphone className="w-5 h-5" />
                  Ver Catálogo
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white hover:text-black transition-all w-full sm:w-auto flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Contáctanos
                </a>
              </div>
            </motion.div>

            {/* Right Content - 3D Render / Image Placeholder - Optimized transforms */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex-1 relative w-full h-[500px] lg:h-[700px] mt-12 lg:mt-0 perspective-1000"
            >
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full flex items-center justify-center relative"
              >
                {/* Simulated 3D Element - removed costly blend modes */}
                <div className="relative w-72 h-[600px] rounded-[40px] bg-black border-[4px] border-zinc-800 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden glass transition-all duration-700 transform-style-3d rotate-y-[-15deg] rotate-x-[5deg]">
                  <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white/10 to-transparent"></div>
                  {/* Screen Content Graphic */}
                  <div className="absolute inset-[8px] rounded-[30px] overflow-hidden bg-gradient-to-br from-[#020512] to-[#040920] p-4 flex flex-col justify-between border border-white/5 relative">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
                    <div className="w-full h-6 flex justify-between items-center opacity-70 z-10">
                      <span className="text-[10px] text-white font-semibold">9:41</span>
                      <div className="flex gap-1">
                        <div className="w-3 h-3 rounded-full bg-primary/80"></div>
                        <div className="w-3 h-3 rounded-full bg-primary/50"></div>
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col items-center justify-center gap-4 z-10 relative">
                      <div className="w-24 h-24 rounded-full bg-[radial-gradient(circle,rgba(0,229,255,0.3)_0%,transparent_70%)] absolute" />
                      <Smartphone className="w-16 h-16 text-primary drop-shadow-[0_0_15px_rgba(0,229,255,0.8)]" />
                      <h3 className="text-white font-medium tracking-widest text-sm drop-shadow-md">E-PRO MAX</h3>
                    </div>

                    <div className="w-full h-16 glass rounded-2xl z-10 flex items-center justify-center gap-4 px-4 overflow-hidden relative">
                      <div className="w-8 h-8 rounded-full bg-white/10"></div>
                      <div className="w-8 h-8 rounded-full bg-white/10"></div>
                      <div className="w-8 h-8 rounded-full bg-white/10"></div>
                      <div className="w-8 h-8 rounded-full bg-white/10"></div>
                    </div>
                  </div>
                </div>

                {/* Floating tags */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  className="absolute right-[5%] lg:right-[15%] top-[30%] lg:top-[40%] glass px-4 py-2 rounded-2xl text-xs font-medium border border-white/10 text-white flex items-center gap-2 shadow-[0_0_20px_rgba(0,229,255,0.15)]"
                >
                  <Star className="w-3 h-3 text-primary" fill="currentColor" />
                  Premium Build
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  className="absolute left-[0%] lg:left-[10%] bottom-[25%] lg:bottom-[30%] glass px-4 py-2 rounded-2xl text-xs font-medium border border-white/10 text-white flex items-center gap-2 shadow-[0_0_20px_rgba(0,229,255,0.15)]"
                >
                  <Cpu className="w-3 h-3 text-primary" />
                  Bionic Chip
                </motion.div>
              </motion.div>
            </motion.div>
          </section>

        </div>

        {/* Features / Trust Section */}
        <section className="w-full mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6 px-4">
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
              className="glass p-6 md:p-8 rounded-[30px] flex flex-col md:flex-row items-center text-center md:text-left gap-5 hover:bg-white/5 transition-colors group cursor-default relative overflow-hidden"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center text-primary group-hover:scale-110 transition-transform border border-primary/20">
                <item.icon className="w-7 h-7 drop-shadow-[0_0_8px_rgba(0,229,255,0.5)]" />
              </div>
              <div className="relative z-10">
                <h4 className="text-xl md:text-2xl font-bold text-white tracking-tight">{item.tag}</h4>
                <p className="text-sm text-gray-400 font-medium">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Featured Products */}
        <section id="catalogo" className="w-full mt-32 px-4 relative z-10 scroll-mt-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 tracking-tight">NUESTRO CATÁLOGO</h2>
              <p className="text-gray-400 max-w-md text-lg">La tecnología más exclusiva al alcance de tus manos. Consulta disponibilidad ahora.</p>
            </div>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="text-primary font-medium hover:text-white transition-colors flex items-center gap-2 hover:gap-3 group">
              Contactar Asesor <ArrowRight className="w-4 h-4 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Galaxy Z Fold 5", tag: "Nuevo", image: "https://images.unsplash.com/photo-1691349090623-112353724c04?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
              { name: "iPhone 15 Pro Titanium", tag: "Más Buscado", image: "https://images.unsplash.com/photo-1695048133142-1a20a5bf616f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
              { name: "Pixel 8 Pro", tag: "Premium", image: "https://images.unsplash.com/photo-1699507912440-272cb2505af9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
            ].map((prod, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-[30px] p-5 flex flex-col group hover:-translate-y-2 transition-transform duration-500 overflow-hidden relative border border-white/5 hover:border-white/20"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                <div className="w-full h-[300px] bg-black/40 rounded-2xl overflow-hidden relative mb-6">
                  <div className="absolute top-4 left-4 px-4 py-1.5 bg-[#090F1E]/90 rounded-full text-xs font-semibold text-white z-10 border border-white/10 uppercase tracking-wider">
                    {prod.tag}
                  </div>
                  <img src={prod.image} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out" loading="lazy" />

                  {/* Overlay shadow for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                <div className="px-2 pb-2 z-10">
                  <h3 className="text-xl lg:text-2xl font-semibold text-white mb-1 group-hover:text-primary transition-colors">{prod.name}</h3>
                  <p className="text-sm text-gray-400 mb-6">Equipos 100% Originales • Garantía Exclusiva</p>
                  <div className="flex items-center justify-between border-t border-white/10 pt-4">
                    <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="w-full py-3 rounded-full bg-white/5 hover:bg-primary border border-white/10 hover:border-primary hover:text-black font-semibold transition-all text-white flex justify-center gap-2 items-center text-sm group-hover:shadow-[0_0_15px_rgba(0,229,255,0.4)]">
                      <MessageCircle className="w-4 h-4" />
                      Cotizar por WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Promo Section (Ofertas y Accesorios) */}
        <section id="ofertas" className="w-full mt-32 px-4 relative z-10 scroll-mt-20">
          <div className="glass rounded-[40px] p-8 lg:p-16 border border-white/10 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between shadow-2xl">
            <div className="absolute right-[-10%] top-[-20%] w-[50%] h-[150%] bg-[radial-gradient(circle,rgba(0,229,255,0.05)_0%,transparent_60%)] pointer-events-none"></div>

            <div className="lg:max-w-xl z-10 text-center lg:text-left mb-8 lg:mb-0">
              <span className="text-primary tracking-widest uppercase text-sm font-bold bg-primary/10 py-2 px-4 rounded-full inline-block border border-primary/20 mb-6" id="accesorios">
                Accesorios y Ofertas
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                Complementa tu experiencia.
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Desde estuches premium hasta auriculares de última tecnología. Descubre las ofertas especiales que preparamos para ti.
              </p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="px-10 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all inline-flex items-center gap-2">
                Ver Catálogo de Accesorios
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="relative z-10 w-full lg:w-auto flex justify-center">
              <div className="w-64 h-64 rounded-full border border-white/10 flex items-center justify-center relative bg-black/20">
                <div className="absolute inset-0 rounded-full border-t-2 border-primary/50 animate-[spin_10s_linear_infinite]"></div>
                <Smartphone className="w-16 h-16 text-white/20 absolute -ml-16 -mt-16" />
                <div className="w-32 h-32 glass rounded-full flex items-center justify-center z-10 border border-primary/20 shadow-[0_0_30px_rgba(0,229,255,0.2)]">
                  <Star className="w-12 h-12 text-primary" />
                </div>
                <Smartphone className="w-20 h-20 text-white/40 absolute ml-20 mt-20" />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Side Card Container */}
        <section id="nosotros" className="w-full mt-32 mb-20 relative px-4 z-10 scroll-mt-20">
          <div className="w-full min-h-[450px] glass rounded-[40px] border border-white/10 flex flex-col md:flex-row overflow-hidden shadow-2xl relative">
            {/* Ambient inner glow */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,rgba(0,229,255,0.05)_0%,transparent_60%)] pointer-events-none"></div>

            {/* Left Image / Pattern */}
            <div className="md:w-[45%] bg-gradient-to-br from-[#020512] to-[#04091a] relative p-12 flex items-center justify-center border-b md:border-b-0 md:border-r border-white/5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.05)_0%,transparent_60%)]"></div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="relative z-10 text-center"
              >
                <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center mb-8 border border-primary/30 shadow-[0_0_30px_rgba(0,229,255,0.2)]">
                  <HeartHandshake className="w-12 h-12 text-primary drop-shadow-[0_0_10px_rgba(0,229,255,0.5)]" />
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3">Tu Confianza</h3>
                <p className="text-primary tracking-[0.2em] uppercase text-sm font-bold bg-primary/10 py-2 px-6 rounded-full inline-block border border-primary/20">Nuestra Prioridad</p>
              </motion.div>
            </div>

            {/* Right Content */}
            <div className="md:w-[55%] p-10 lg:p-16 flex flex-col justify-center relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-10 tracking-tight leading-[1.1]"><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">¿Por qué elegir</span><br />E-Technology?</h2>

              <div className="space-y-8 mb-12">
                {[
                  { t: "Calidad Premium Garantizada", d: "Todos nuestros dispositivos pasan por estrictos controles de calidad." },
                  { t: "Soporte Técnico Especializado", d: "Asistencia 24/7 para cualquier inconveniente con respuesta inmediata." },
                  { t: "Experiencia de Compra Única", d: "Te asesoramos personalmente para encontrar el equipo ideal." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-5 group">
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors border border-white/5 group-hover:border-primary/30">
                        <CheckCircle className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-1 group-hover:text-primary transition-colors">{item.t}</h4>
                      <p className="text-sm text-gray-400 leading-relaxed font-light">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="px-10 py-4 rounded-full bg-white text-black font-semibold w-max hover:bg-gradient-to-r hover:from-white hover:to-gray-200 transition-all flex items-center gap-2 group hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Contactar Asesor
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contacto" className="w-full mt-10 rounded-[40px] glass border border-white/10 pt-16 pb-8 px-10 lg:px-16 relative overflow-hidden z-10 flex flex-col text-sm scroll-mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
                  <span className="font-bold text-base text-white">E</span>
                </div>
                <span className="text-lg font-bold text-white tracking-widest">TECHNOLOGY</span>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-sm font-light">
                Redefiniendo el estándar premium en tecnología. Elevamos tu estilo de vida digital con los mejores dispositivos del mercado.
              </p>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-white font-semibold mb-6 tracking-wide text-base">Navegación</h4>
              <ul className="space-y-4 text-gray-400">
                {navLinks.map(l => (
                  <li key={l.name}>
                    <a href={l.href} className="hover:text-primary transition-colors flex items-center gap-2">
                      <ArrowRight className="w-3 h-3" /> {l.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-white font-semibold mb-6 tracking-wide text-base">Soporte</h4>
              <ul className="space-y-4 text-gray-400">
                {['FAQ', 'Términos', 'Privacidad', 'Garantía'].map(l => (
                  <li key={l}><a href="#" className="hover:text-primary transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-white font-semibold mb-6 tracking-wide text-base">Contáctanos</h4>
              <ul className="space-y-4 text-gray-400 font-light">
                <li className="flex items-start gap-3">
                  <Smartphone className="w-5 h-5 text-gray-500" />
                  +1 (849) 409-9160
                </li>
                <li className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-gray-500" />
                  info@etechnology.com
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-10 h-5 text-gray-500" />
                  Av. Abraham Lincoln Esq. Lope de Vega, Plaza Castilla Suite 7B, Santo Domingo, República Dominicana.
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gray-500 mt-1" />
                  <div className="flex flex-col text-gray-400">
                    <span>Lunes a Viernes 09:30 AM a 8:00 PM</span>
                    <span>Sábados 09:30 AM a 6:00 PM</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-light">
            <p>© 2026 E-Technology. Todos los derechos reservados.</p>
            <div className="flex gap-6 mt-6 md:mt-0">
              {['Instagram', 'Twitter', 'LinkedIn'].map(social => (
                <a key={social} href="#" className="hover:text-white transition-colors uppercase tracking-widest">{social}</a>
              ))}
            </div>
          </div>
        </footer>

      </main>

      <motion.a
        href={WHATSAPP_LINK} target="_blank" rel="noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] hover:-translate-y-2 transition-all duration-300 group"
      >
        <MessageCircle className="w-8 h-8 relative z-10 group-hover:scale-110 transition-transform" />
      </motion.a>

    </div>
  );
}

export default App;
