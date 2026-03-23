import { Smartphone, MessageCircle, Star, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FooterProps {
  navLinks: { name: string; href: string }[];
}

export const Footer = ({ navLinks }: FooterProps) => {
  return (
    <footer id="contacto" className="w-full mt-10 rounded-[40px] glass border border-white/10 pt-16 pb-8 px-10 lg:px-16 relative overflow-hidden z-10 flex flex-col text-sm scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#00e5ff]/80 via-blue-500/80 to-purple-600/80 flex items-center justify-center p-[1px] shadow-[0_0_15px_rgba(0,229,255,0.1)]">
              <div className="w-full h-full bg-[#060B19] rounded-full flex items-center justify-center">
                <span className="font-extrabold text-lg text-white tracking-tighter">E</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-[0.2em] text-white leading-none uppercase">E-TECHNOLOGY</span>
              <span className="text-[9px] font-bold tracking-[0.4em] text-[#00e5ff]/60">PREMIUM STORE</span>
            </div>
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
                <Link to={l.href.startsWith('#') ? (l.href === '#inicio' ? '/' : `/#${l.href.slice(1)}`) : l.href} className="hover:text-[#00e5ff] transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" /> {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-white font-semibold mb-6 tracking-wide text-base">Soporte</h4>
          <ul className="space-y-4 text-gray-400">
            {['FAQ', 'Términos', 'Privacidad', 'Garantía'].map(l => (
              <li key={l}><a href="#" className="hover:text-[#00e5ff] transition-colors">{l}</a></li>
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
          <a 
            href="https://www.instagram.com/e__technologystore?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-[#00e5ff] transition-colors uppercase tracking-[0.3em] font-bold text-[10px] flex items-center gap-2"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};
