
import React from 'react';

const CTAFinal: React.FC = () => {
  return (
    <section id="checkout" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-amber-600 opacity-5 shadow-inner"></div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="font-cinzel text-4xl md:text-6xl font-bold leading-tight">
            Pronto para despertar o poder que sempre esteve <span className="text-amber-500">dentro de você?</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 font-light italic">
            "O segredo sempre esteve oculto à vista de todos. Agora, ele será revelado a você."
          </p>
          
          <div className="bg-slate-900 p-8 md:p-12 rounded-3xl border border-amber-500/30 shadow-2xl space-y-8">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="text-left space-y-2">
                <div className="text-slate-500 line-through text-xl">De R$ 197,00</div>
                <div className="text-5xl font-bold text-white">Por R$ 97,00</div>
                <p className="text-amber-500 text-sm font-bold uppercase tracking-widest">Oferta de lançamento por tempo limitado</p>
              </div>
              <a 
                href="https://wa.me/5561996774134?text=Olá!%20Vim%20pela%20landing%20page%20e%20tenho%20interesse%20no%20livro%20'O%20Segredo%20por%20trás%20dos%20Segredos'.%20Poderia%20me%20ajudar?"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto bg-green-600 hover:bg-green-500 text-white px-12 py-6 rounded-xl font-bold text-2xl transition-all shadow-xl shadow-green-600/30 transform hover:-translate-y-2 active:scale-95 flex items-center justify-center gap-3"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                🔥 QUERO MEU LIVRO AGORA
              </a>
            </div>
            <div className="pt-8 border-t border-slate-800 flex flex-wrap justify-center gap-6 opacity-60">
               <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-6" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Pix_logo.svg" alt="Pix" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAFinal;
