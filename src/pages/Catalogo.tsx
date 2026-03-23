import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, Star } from 'lucide-react';

const getWhatsAppLink = (productName: string) => {
  const message = `Hola, me gustaria cotizar ${productName} por favor`;
  return `https://wa.me/18494099160?text=${encodeURIComponent(message)}`;
};

export const Catalogo = () => {
  const products = [
    { name: "iPhone 15 Pro Titanium", tag: "Más Buscado", image: "https://images.unsplash.com/photo-1695048133142-1a20a5bf616f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", price: "Desde $999" },
    { name: "Galaxy Z Fold 5", tag: "Nuevo", image: "https://images.unsplash.com/photo-1691349090623-112353724c04?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", price: "Desde $1799" },
    { name: "Pixel 8 Pro", tag: "Premium", image: "https://images.unsplash.com/photo-1699507912440-272cb2505af9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", price: "Desde $899" },
    { name: "S24 Ultra", tag: "AI Powered", image: "https://images.unsplash.com/photo-1707297597148-5226f9593259?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", price: "Desde $1199" },
    { name: "iPhone 15 Plus", tag: "Gran Batería", image: "https://images.unsplash.com/photo-1695048132717-57edcd9922ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", price: "Desde $899" },
    { name: "Z Flip 5", tag: "Icono", image: "https://images.unsplash.com/photo-1691666492323-95c0ac474534?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", price: "Desde $999" },
  ];

  return (
    <div className="w-full flex flex-col gap-8 lg:gap-10 px-2 lg:px-0 mb-12">
      {/* Header Block */}
      <section className="w-full py-12 lg:py-16 px-6 glass rounded-[35px] lg:rounded-[40px] border border-white/10 text-center relative z-10 shadow-2xl">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#00e5ff] tracking-widest uppercase text-[9px] lg:text-xs font-black bg-[#00e5ff]/10 py-2.5 px-6 rounded-full border border-[#00e5ff]/20 mb-6 inline-block"
        >
          Colección Premium
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl lg:text-7xl font-black text-white mb-6 tracking-tighter flex flex-col sm:flex-row items-center justify-center gap-3 lg:gap-4 uppercase italic"
        >
          CATÁLOGO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-blue-500">2026</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto text-sm lg:text-lg font-light leading-relaxed"
        >
          Explora la selección más exclusiva de dispositivos móviles en el mercado. Tecnología de vanguardia combinada con diseño premium.
        </motion.p>
      </section>

      {/* Grid Block */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pb-10">
        {products.map((prod, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-[40px] p-6 lg:p-8 flex flex-col group hover:-translate-y-3 transition-all duration-500 overflow-hidden relative border border-white/5 hover:border-[#00e5ff]/30 shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#00e5ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            
            <div className="w-full h-[280px] sm:h-[320px] lg:h-[350px] bg-black/60 rounded-[30px] overflow-hidden relative mb-8 shadow-inner">
              <div className="absolute top-5 left-5 px-5 py-2 bg-[#090F1E]/90 rounded-full text-[9px] lg:text-[10px] font-black text-white z-20 border border-white/10 uppercase tracking-[0.2em] backdrop-blur-md">
                {prod.tag}
              </div>
              <img src={prod.image} alt={prod.name} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 ease-out" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
              
              <div className="absolute bottom-5 right-5 z-20">
                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white group-hover:bg-[#00e5ff] group-hover:text-black transition-colors shadow-xl">
                  <Star className="w-5 h-5" fill="currentColor" />
                </div>
              </div>
            </div>

            <div className="px-2 pb-2 lg:px-4 lg:pb-4 relative z-10 flex-1 flex flex-col">
              <div className="mb-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-2">
                  <h3 className="text-xl lg:text-2xl font-black text-white group-hover:text-[#00e5ff] transition-colors tracking-tighter leading-none uppercase italic">{prod.name}</h3>
                  <span className="text-[#00e5ff] font-black text-base lg:text-lg tracking-tighter shrink-0">{prod.price}</span>
                </div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Disponibilidad Inmediata</p>
              </div>
              
              <p className="text-xs lg:text-sm text-gray-400 mb-8 font-light leading-relaxed">Incluye garantía oficial de 2 años y soporte técnico especializado 24/7.</p>
              
              <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                <a 
                  href={getWhatsAppLink(prod.name)} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex-1 py-4 lg:py-5 rounded-full bg-white text-black font-black transition-all hover:bg-[#00e5ff] hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] flex justify-center gap-3 items-center text-[9px] uppercase tracking-[0.2em] shadow-xl"
                >
                  <MessageCircle className="w-4 h-4" />
                  Cotizar
                </a>
                <button className="w-full sm:w-16 h-14 sm:h-auto py-4 sm:py-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all shadow-xl">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};
