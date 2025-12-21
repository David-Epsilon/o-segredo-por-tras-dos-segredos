
import React from 'react';

const ContentPreview: React.FC = () => {
  const chapters = [
    { num: "01", title: "O Chamado ao Segredo", desc: "A jornada de Pedro Molina e o despertar para o invisível." },
    { num: "06", title: "O Princípio da Criação é Energia", desc: "A coerência entre mente, emoção e corpo como fonte de manifestação." },
    { num: "09", title: "A Lei da Vibração não Atrai, Repele", desc: "O mecanismo real por trás da manifestação da realidade." },
    { num: "11", title: "Conexão Oculta: Espiritualidade e o Despertar do Ser", desc: "A revelação profunda sobre o corpo humano e a ação divina." },
    { num: "18", title: "A Lei Espiritual da Manifestação", desc: "Práticas aplicáveis para transformar sua existência agora." }
  ];

  return (
    <section className="py-24 bg-slate-900/50 border-y border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/3 text-center lg:text-left">
            <h2 className="font-cinzel text-3xl md:text-5xl font-bold mb-6">Uma Prévia do <span className="text-amber-500">Conteúdo</span></h2>
            <p className="text-slate-400 text-lg mb-8">São 18 capítulos desenhados para reprogramar sua percepção e ativar seu mestre interior.</p>
            <div className="p-6 bg-slate-900 border border-slate-700 rounded-2xl inline-block">
              <div className="text-4xl font-bold text-white mb-2">317</div>
              <div className="text-slate-500 uppercase text-xs tracking-widest">Páginas de Sabedoria</div>
            </div>
          </div>

          <div className="lg:w-2/3 grid gap-6">
            {chapters.map((ch, i) => (
              <div key={i} className="flex items-center space-x-6 p-6 rounded-2xl hover:bg-slate-800 transition-colors border border-transparent hover:border-amber-500/20 group">
                <div className="text-2xl font-bold text-amber-500 opacity-50 group-hover:opacity-100 transition-opacity">{ch.num}</div>
                <div>
                  <h4 className="font-bold text-lg text-white mb-1">{ch.title}</h4>
                  <p className="text-slate-400 text-sm">{ch.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentPreview;
