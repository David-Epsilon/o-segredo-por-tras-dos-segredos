
import React from 'react';

const AboutAuthor: React.FC = () => {
  return (
    <section id="autor" className="py-24 mystic-gradient relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 bg-slate-950/40 backdrop-blur-sm p-10 rounded-3xl border border-slate-700/50">
          <div className="md:w-1/3 shrink-0">
            <div className="relative">
              <img 
                src="https://picsum.photos/400/500?grayscale" 
                alt="Pedro Javier Molina" 
                className="rounded-2xl shadow-2xl border-4 border-slate-900 grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute -bottom-4 -right-4 bg-amber-500 text-slate-950 px-4 py-2 rounded-lg font-bold">Autor & Pesquisador</div>
            </div>
          </div>
          <div className="md:w-2/3 space-y-6">
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold">Sobre o Autor: <span className="text-amber-500">Pedro Javier Molina</span></h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Terapeuta holístico, pesquisador espiritual e cientista por formação. Durante 17 anos, viajou pelo mundo estudando medicinas ancestrais com povos indígenas da Amazônia, mestres espirituais e tradições milenares.
            </p>
            <p className="text-slate-400 font-light">
              Sua busca incansável pela verdade o levou a unir ciência, filosofia e espiritualidade de uma forma nunca antes explorada. Este livro é o resultado de décadas de estudo e experiências profundas sobre a chave oculta para a manifestação consciente.
            </p>
            <div className="flex space-x-4 pt-4">
              <div className="flex flex-col items-center p-4 bg-slate-900/80 rounded-xl min-w-[100px]">
                <span className="text-2xl font-bold text-amber-500">17+</span>
                <span className="text-[10px] uppercase text-slate-500">Anos de Estudo</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-900/80 rounded-xl min-w-[100px]">
                <span className="text-2xl font-bold text-amber-500">15+</span>
                <span className="text-[10px] uppercase text-slate-500">Países Visitados</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-900/80 rounded-xl min-w-[100px]">
                <span className="text-2xl font-bold text-amber-500">2k+</span>
                <span className="text-[10px] uppercase text-slate-500">Vidas Transformadas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;
