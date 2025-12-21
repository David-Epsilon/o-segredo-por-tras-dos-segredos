
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
              Idealizador do Instituto Samadhi, Pedro Javier Molina dedica sua vida ao estudo e prática das Medicinas Ancestrais e Terapias Integrativas. Através de sua jornada, busca unir sabedoria milenar e o autoconhecimento profundo do ser.
            </p>
            <p className="text-slate-400 font-light">
              Este livro é uma partilha de experiências transformadoras sobre os segredos ocultos na nossa biologia e espiritualidade, fruto de anos de imersão em tradições ancestrais e na busca pelo Samadhi.
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
