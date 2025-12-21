
import React from 'react';

const BenefitCard = ({ icon, title, desc }: { icon: string, title: string, desc: string }) => (
  <div className="p-8 rounded-2xl bg-slate-900/30 border border-slate-800 hover:border-amber-500/50 transition-all duration-500 group">
    <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">{icon}</div>
    <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-slate-400 font-light leading-relaxed">{desc}</p>
  </div>
);

const Benefits: React.FC = () => {
  const items = [
    { icon: "🌌", title: "Molda sua Realidade", desc: "Compreenda como sua vibração pessoal atua como um filtro da sua existência." },
    { icon: "⚡", title: "Campo Energético", desc: "Aprenda a elevar seu campo de forma prática e sem misticismos superficiais." },
    { icon: "🩸", title: "A Força Vital do Ser", desc: "Ative conscientemente o poder oculto no seu próprio corpo para a manifestação da sua realidade." },
    { icon: "🧘", title: "Técnicas Ancestrais", desc: "Domine práticas de Jesus, Buda e tradições milenares focadas na expansão da consciência." },
    { icon: "🔓", title: "Quebra de Padrões", desc: "Liberte-se de ciclos limitantes e autossabotagem através do autoconhecimento profundo." },
    { icon: "🧠", title: "Razão e Espírito", desc: "Una o espírito e a matéria em uma visão integrada e coerente da vida." },
    { icon: "💞", title: "Relacionamentos", desc: "Transforme sua vida afetiva através da compreensão das frequências de ressonância." },
    { icon: "✨", title: "Autonomia Sensorial", desc: "Saia da 'matrix' moderna e recupere seu poder de decisão e manifestação consciente." }
  ];

  return (
    <section id="beneficios" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-cinzel text-3xl md:text-5xl font-bold mb-6">O que você vai <span className="text-amber-500">Dominar</span></h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => <BenefitCard key={i} {...item} />)}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
