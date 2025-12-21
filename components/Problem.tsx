
import React from 'react';

const Problem: React.FC = () => {
  const frustrations = [
    { title: "Técnicas que não funcionam", desc: "Você já tentou afirmações e visualizações sem ver mudança real na sua vida?" },
    { title: "Frustração constante", desc: "Sente que faz tudo certo, mas a abundância e a paz parecem sempre distantes?" },
    { title: "Vazio existencial", desc: "Mesmo com sucessos superficiais, há algo maior esperando para ser despertado." },
    { title: "Conexão perdida", desc: "Sente-se como uma vítima das circunstâncias, sem autonomia real sobre o seu destino." }
  ];

  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-cinzel text-3xl md:text-4xl font-bold mb-6">Por que a "Lei da Atração" tradicional falhou com você?</h2>
          <p className="text-slate-400 text-lg">
            Durante anos, fomos ensinados que "atraímos o que vibramos". Mas a física nos mostra algo diferente e muito mais poderoso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {frustrations.map((item, i) => (
            <div key={i} className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-amber-500/30 transition-all group">
              <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mb-6 text-amber-500 text-2xl font-bold group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                !
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
              <p className="text-slate-400 font-light">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 rounded-3xl bg-amber-950/20 border border-amber-900/30 text-center">
          <blockquote className="italic text-xl md:text-2xl text-amber-200">
            "A resposta não está em mais uma técnica superficial, mas em um segredo científico e espiritual que permaneceu oculto por milênios."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Problem;
