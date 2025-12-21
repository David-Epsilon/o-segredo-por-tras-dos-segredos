
import React from 'react';

const BonusItem = ({ icon, title, desc, tag }: { icon: string, title: string, desc: string, tag: string }) => (
  <div className="p-8 rounded-2xl bg-amber-500/5 border border-amber-500/20 flex items-center space-x-6 relative overflow-hidden group">
    <div className="text-5xl group-hover:scale-110 transition-transform">{icon}</div>
    <div>
      <div className="text-amber-500 text-[10px] font-bold uppercase tracking-widest mb-1">{tag}</div>
      <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
      <p className="text-slate-400 text-sm">{desc}</p>
    </div>
  </div>
);

const Bonuses: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-3xl md:text-4xl font-bold mb-4">Bônus <span className="text-amber-500">Exclusivos</span></h2>
          <p className="text-slate-500">Válidos apenas para a primeira edição ou enquanto durarem os estoques.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <BonusItem 
            icon="📘" 
            tag="Guia PDF" 
            title="Elevação Vibracional" 
            desc="Um guia prático com exercícios diários para manter seu campo energético em alta frequência." 
          />
          <BonusItem 
            icon="🎧" 
            tag="Áudio MP3" 
            title="Meditação Guiada" 
            desc="Ativando seu Campo Diamagnético: uma experiência imersiva para reprogramação profunda." 
          />
          <BonusItem 
            icon="📋" 
            tag="Checklist" 
            title="Alimentação Energética" 
            desc="Lista de alimentos baseada em tradições ancestrais para nutrir sua bioeletricidade." 
          />
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
