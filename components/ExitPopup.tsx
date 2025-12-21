
import React from 'react';

interface ExitPopupProps {
  onClose: () => void;
}

const ExitPopup: React.FC<ExitPopupProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-slate-900 rounded-3xl border-2 border-amber-500/30 p-10 text-center space-y-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
        >
          <span className="text-2xl">×</span>
        </button>

        <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto text-4xl">
          🎁
        </div>

        <h3 className="font-cinzel text-3xl font-bold gold-glow">Espere! Não vá agora...</h3>
        <p className="text-slate-300">
          Você está prestes a deixar passar a chance de descobrir o segredo que mudou a vida de milhares de pessoas.
        </p>

        <div className="bg-amber-500/10 p-4 rounded-xl border border-amber-500/20">
          <p className="text-amber-500 font-bold">GANHE 10% DE DESCONTO ADICIONAL</p>
          <p className="text-xs text-slate-400">Use o cupom: <span className="text-white font-mono">SEGREDO10</span></p>
        </div>

        <div className="pt-4 space-y-3">
          <a
            href="https://wa.me/5561996774134?text=Olá!%20Vim%20pela%20landing%20page%20e%20gostaria%20de%20usar%20o%20cupom%20SEGREDO10%20para%20adquirir%20o%20livro%20'O%20Segredo%20por%20trás%20dos%20Segredos'."
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-green-500/20 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            QUERO MEU DESCONTO E O LIVRO
          </a>
          <button
            onClick={onClose}
            className="text-slate-500 text-sm hover:underline"
          >
            Não, obrigado. Prefiro continuar sem o segredo.
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExitPopup;
