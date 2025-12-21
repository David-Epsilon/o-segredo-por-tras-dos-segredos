
import React from 'react';

const TestimonialCard = ({ name, location, text, rating }: { name: string, location: string, text: string, rating: number }) => (
  <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 relative">
    <div className="flex text-amber-500 mb-4">
      {Array.from({ length: rating }).map((_, i) => <span key={i}>★</span>)}
    </div>
    <p className="text-slate-300 italic mb-6 leading-relaxed">"{text}"</p>
    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center font-bold text-amber-500">
        {name[0]}
      </div>
      <div>
        <div className="font-bold text-white">{name}</div>
        <div className="text-xs text-slate-500 uppercase tracking-widest">{location}</div>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const list = [
    { name: "Leandro Costa", location: "Brasília, DF", rating: 5, text: "Este livro mudou completamente minha forma de ver a realidade. Finalmente entendi por que minha vida não mudava, mesmo meditando. Pedro une espiritualidade e ciência de forma brilhante." },
    { name: "Ana Beatriz", location: "São Paulo, SP", rating: 5, text: "Profundo, transformador e cientificamente embasado. Nunca li nada assim. É como se todas as peças do quebra-cabeça finalmente se encaixassem." },
    { name: "Carlos Mendes", location: "Rio de Janeiro, RJ", rating: 5, text: "Depois de ler este livro, minha saúde melhorou e minha vida financeira decolou. Não é magia — é compreensão real do nosso campo vibracional." }
  ];

  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <h2 className="font-cinzel text-3xl md:text-4xl text-center font-bold mb-16">O que os <span className="text-amber-500">Leitores</span> estão dizendo</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {list.map((item, i) => <TestimonialCard key={i} {...item} />)}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
