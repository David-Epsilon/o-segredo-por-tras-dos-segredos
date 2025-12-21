
import React from 'react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 bg-slate-950 p-10 rounded-3xl border border-slate-800 shadow-2xl">
          <div className="shrink-0">
            <div className="w-40 h-40 border-8 border-amber-500/20 rounded-full flex items-center justify-center relative">
               <div className="w-32 h-32 bg-amber-500 rounded-full flex flex-col items-center justify-center text-slate-950 text-center p-2 shadow-xl shadow-amber-500/50">
                  <span className="text-4xl font-bold">7</span>
                  <span className="text-[10px] font-bold uppercase leading-tight">Dias de Garantia</span>
               </div>
            </div>
          </div>
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">Risco Zero para Você</h3>
            <p className="text-slate-400 leading-relaxed">
              Leia o livro por 7 dias. Se não sentir que sua compreensão sobre a vida foi expandida ou se o conteúdo não for o que você esperava, devolvemos 100% do seu investimento. Sem perguntas, sem complicações. Acreditamos tanto no poder desta revelação que assumimos todo o risco.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
