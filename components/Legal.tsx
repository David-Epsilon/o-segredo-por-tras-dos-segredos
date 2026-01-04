import React from 'react';

const Legal: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-6 max-w-4xl">
        <div id="termos" className="mb-16">
          <h2 className="font-cinzel text-3xl font-bold mb-6 text-amber-500">Termos de Uso</h2>
          <div className="text-slate-400 space-y-4">
            <p>Ao acessar este site e adquirir o livro "O Segredo por trás dos Segredos", você concorda com os seguintes termos:</p>
            <p><strong className="text-white">1. Uso do Conteúdo:</strong> Todo o conteúdo deste site e do livro é protegido por direitos autorais. A reprodução, distribuição ou modificação sem autorização prévia é proibida.</p>
            <p><strong className="text-white">2. Responsabilidade:</strong> As informações contidas no livro são de caráter educacional e espiritual. O autor não se responsabiliza por interpretações ou aplicações individuais do conteúdo.</p>
            <p><strong className="text-white">3. Compra e Entrega:</strong> Após a confirmação do pagamento, o acesso ao conteúdo digital será liberado em até 24 horas. Produtos físicos serão enviados conforme prazo informado.</p>
          </div>
        </div>

        <div id="privacidade" className="mb-16">
          <h2 className="font-cinzel text-3xl font-bold mb-6 text-amber-500">Políticas de Privacidade</h2>
          <div className="text-slate-400 space-y-4">
            <p><strong className="text-white">Coleta de Dados:</strong> Coletamos apenas informações necessárias para processar sua compra: nome, e-mail e dados de pagamento.</p>
            <p><strong className="text-white">Uso dos Dados:</strong> Seus dados são utilizados exclusivamente para processamento de pedidos, envio de atualizações sobre o produto e comunicações relevantes.</p>
            <p><strong className="text-white">Segurança:</strong> Utilizamos protocolos de segurança padrão da indústria para proteger suas informações pessoais.</p>
            <p><strong className="text-white">Compartilhamento:</strong> Não vendemos, alugamos ou compartilhamos seus dados com terceiros, exceto quando necessário para processamento de pagamentos.</p>
          </div>
        </div>

        <div id="aviso">
          <h2 className="font-cinzel text-3xl font-bold mb-6 text-amber-500">Aviso Legal</h2>
          <div className="text-slate-400 space-y-4">
            <p>O conteúdo apresentado neste livro reflete a experiência pessoal e os estudos do autor Pedro Javier Molina sobre medicinas ancestrais e práticas de autoconhecimento.</p>
            <p><strong className="text-white">Não substitui tratamento médico:</strong> As informações aqui contidas não substituem diagnóstico, tratamento ou acompanhamento médico profissional.</p>
            <p><strong className="text-white">Resultados individuais:</strong> Os resultados das práticas descritas podem variar de pessoa para pessoa. O autor não garante resultados específicos.</p>
            <p><strong className="text-white">Isenção de responsabilidade:</strong> O autor e editores se isentam de qualquer responsabilidade por danos diretos ou indiretos decorrentes do uso das informações contidas nesta obra.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legal;
