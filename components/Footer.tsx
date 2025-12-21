
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <div className="font-cinzel text-xl font-bold text-amber-500 tracking-tighter uppercase">
              O Segredo por trás dos Segredos
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Explorando as Medicinas Ancestrais e o Autoconhecimento sob a ótica de Pedro Javier Molina e o Instituto Samadhi.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Links Úteis</h4>
            <ul className="space-y-3 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Políticas de Privacidade</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Aviso Legal</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Suporte ao Cliente</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Acompanhe o Autor</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/en.busca.del.samadhi/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-slate-950 transition-all font-bold">IG</a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-slate-950 transition-all font-bold">YT</a>
            </div>
            <p className="mt-4 text-xs text-slate-600">@en.busca.del.samadhi</p>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-900 text-center">
          <p className="text-slate-600 text-xs">
            © 2025 Pedro Javier Molina - Todos os direitos reservados.
            <br className="md:hidden" /> Desenvolvido para despertar o potencial humano.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
