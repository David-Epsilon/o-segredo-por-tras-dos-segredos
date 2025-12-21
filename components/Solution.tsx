
import React from 'react';

const Solution: React.FC = () => {
  return (
    <section id="solucao" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
              <img
                src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1200"
                alt="Science and spirituality blending"
                className="w-full h-auto opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
            </div>
            {/* Floating stats box */}
            <div className="absolute -bottom-6 -right-6 md:right-10 bg-slate-900 border border-amber-500/40 p-6 rounded-2xl shadow-2xl max-w-xs z-50">
              <div className="text-amber-500 text-3xl font-bold mb-1">317 Páginas</div>
              <p className="text-slate-400 text-sm">De puro conhecimento transformador unindo medicinas ancestrais e o despertar da consciência.</p>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="font-cinzel text-3xl md:text-5xl font-bold leading-tight">
              A Chave Oculta: <span className="text-amber-500">A Sabedoria Ancestral</span>
            </h2>
            <div className="space-y-6 text-slate-300 text-lg font-light">
              <p>
                A física nos mostra algo revolucionário: <span className="font-bold text-white">Campos semelhantes se repelem, não se atraem.</span>
              </p>
              <p>
                O que realmente acontece é ainda mais poderoso: Você não atrai abundância — você <span className="text-amber-500 font-bold underline">repele a escassez</span>. Você não atrai amor — você afasta o que não ressoa com sua frequência.
              </p>
              <div className="flex items-start space-x-4 bg-slate-900/50 p-6 rounded-xl border-l-4 border-amber-500">
                <div className="text-3xl">🌿</div>
                <div>
                  <h4 className="font-bold text-white mb-2">Despertar do Ser</h4>
                  <p className="text-sm">Por que a conexão com a natureza e o autoconhecimento profundo são as verdadeiras chaves para a transformação da realidade.</p>
                </div>
              </div>
              <p>
                Este não é apenas mais um livro. É um guia para você compreender o seu poder interior através das plantas mestras e da sabedoria milenar do Instituto Samadhi.
              </p>
            </div>
            <a
              href="#checkout"
              className="inline-block bg-white text-slate-950 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-500 hover:text-white transition-all transform hover:-translate-y-1"
            >
              Quero Iniciar Minha Jornada
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
