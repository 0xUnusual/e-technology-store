import { useState, useEffect, useMemo } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

// Components & Pages
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Catalogo } from './pages/Catalogo';
import { Ofertas } from './pages/Ofertas';

const WHATSAPP_LINK = "https://wa.me/18494099160?text=Hola,%20me%20gustaría%20obtener%20más%20información.";

function App() {
  const [init, setInit] = useState(false);
  const location = useLocation();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Handle scrolling (top on page change, hash on anchor)
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  const particlesOptions = useMemo(() => ({
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    particles: {
      color: { value: "#00e5ff" },
      links: { enable: false },
      move: {
        direction: "none" as const,
        enable: true,
        outModes: { default: "out" as const },
        random: true,
        speed: 0.5,
        straight: false,
      },
      number: { density: { enable: true, area: 800 }, value: 30 },
      opacity: { value: 0.2 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 2 } },
    },
    detectRetina: true,
  }), []);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Catálogo', href: '/catalogo' },
    { name: 'Ofertas', href: '/ofertas' },
    { name: 'Nosotros', href: '/#nosotros' },
    { name: 'Contacto', href: '/#contacto' }
  ];

  return (
    <div className="relative min-h-screen font-sans selection:bg-primary selection:text-black">
      {/* Background Particles */}
      {init && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Particles id="tsparticles" options={particlesOptions} className="h-full w-full" />
        </div>
      )}

      {/* Decorative blurred blobs */}
      <div className="fixed top-0 left-0 w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(0,229,255,0.04)_0%,transparent_70%)] z-0 pointer-events-none"></div>
      <div className="fixed top-[40%] right-0 w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.04)_0%,transparent_70%)] z-0 pointer-events-none"></div>

      {/* Main Container - No global panel here to allow spaces */}
      <main className="relative z-10 p-4 md:p-8 lg:p-12 max-w-[1600px] mx-auto min-h-screen flex flex-col items-center gap-10">
        
        {/* Navbar Container */}
        <div className="w-full">
          <Navbar navLinks={navLinks} />
        </div>

        {/* Routes Container - Individual sections will manage their own look */}
        <div className="w-full flex flex-col gap-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/ofertas" element={<Ofertas />} />
          </Routes>
        </div>

        <Footer navLinks={navLinks} />
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
