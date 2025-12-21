
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-md py-3 shadow-lg border-b border-amber-500/10' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="font-cinzel text-xl font-bold text-amber-500 tracking-tighter uppercase">
          O SEGREDO <span className="text-white">POR TRÁS DOS SEGREDOS</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-semibold text-slate-300 uppercase tracking-widest">
          <a href="#solucao" className="hover:text-amber-500 transition-colors">O Livro</a>
          <a href="#beneficios" className="hover:text-amber-500 transition-colors">Benefícios</a>
          <a href="#autor" className="hover:text-amber-500 transition-colors">Autor</a>
          <a href="#faq" className="hover:text-amber-500 transition-colors">FAQ</a>
        </div>
        <a
          href="https://wa.me/5561996774134?text=Olá!%20Vim%20pela%20landing%20page%20e%20tenho%20interesse%20no%20livro%20'O%20Segredo%20por%20trás%20dos%20Segredos'.%20Poderia%20me%20ajudar?"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-400 text-white px-6 py-2 rounded-full font-bold text-sm uppercase tracking-tighter transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-green-500/20 flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          Falar no WhatsApp
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
