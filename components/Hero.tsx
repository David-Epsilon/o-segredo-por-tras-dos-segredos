
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 mystic-gradient overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
          <div className="inline-block px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-bold tracking-widest uppercase mb-4">
            Revelação Ancestral e Científica
          </div>
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold leading-tight gold-glow">
            Descubra a verdade ancestral que une <span className="text-amber-500">Ciência e Espiritualidade</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-xl mx-auto lg:mx-0 font-light">
            O segredo científico que permaneceu oculto por milênios: o poder do diamagnetismo do seu sangue na manifestação da sua realidade.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href="https://wa.me/5561996774134?text=Olá!%20Vim%20pela%20landing%20page%20e%20tenho%20interesse%20no%20livro%20'O%20Segredo%20por%20trás%20dos%20Segredos'.%20Poderia%20me%20ajudar?"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-green-600 hover:bg-green-500 text-white px-10 py-5 rounded-lg font-bold text-lg transition-all shadow-xl shadow-green-500/20 text-center flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              QUERO DESPERTAR MEU PODER AGORA
            </a>
            <div className="flex items-center space-x-2 text-slate-400">
              <span className="text-amber-500">★★★★★</span>
              <span className="text-sm font-semibold">4.9/5 (2.400+ Leitores)</span>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end animate-fade-in">
          <div className="relative z-10 w-full max-w-md book-shadow">
            {/* Placeholder for Book Cover Image */}
            <img
              src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800"
              alt="Capa do Livro O Segredo por trás dos Segredos"
              className="rounded-lg shadow-2xl border border-slate-700/50"
            />
            {/* Gloss overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none rounded-lg"></div>
          </div>
          {/* Decorative geometry */}
          <div className="absolute -top-10 -right-10 w-64 h-64 border border-amber-500/20 rounded-full animate-spin-slow"></div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 border border-purple-500/20 rounded-full animate-reverse-spin"></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-amber-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
