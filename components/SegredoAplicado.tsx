import React from 'react';
import { Sparkles, Cpu, ArrowRight } from 'lucide-react';

const SegredoAplicado: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center gap-4 mb-8">
            <Sparkles className="w-8 h-8 text-amber-500" />
            <ArrowRight className="w-6 h-6 text-slate-600" />
            <Cpu className="w-8 h-8 text-amber-500" />
          </div>
          
          <h2 className="font-cinzel text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">O Segredo</span>{' '}
            <span className="text-amber-500">Aplicado</span>
          </h2>
          
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            Os princípios de <span className="text-amber-500">coerência</span> e <span className="text-amber-500">harmonia</span> apresentados 
            no livro transcendem a filosofia — eles fundamentam uma nova forma de organização sistêmica.
          </p>
          
          <p className="text-slate-500 leading-relaxed mb-12">
            O protocolo <span className="text-white font-semibold">DAVID-ε</span> nasceu desta visão: 
            substituir a competição energética do Proof-of-Work pela <span className="text-amber-500">validação coerente</span>, 
            onde consenso emerge naturalmente da harmonia entre participantes — 
            exatamente como descrito nos ensinamentos ancestrais.
          </p>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-slate-400 text-sm">Simulação interativa abaixo</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SegredoAplicado;
