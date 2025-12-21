
import React, { useState } from 'react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-amber-500 transition-colors"
      >
        <span className="text-lg font-semibold pr-8">{question}</span>
        <span className={`text-2xl transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-slate-400 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    { question: "Este livro é baseado em qual religião?", answer: "Nenhuma. Ele integra sabedoria universal de múltiplas tradições com o conhecimento profundo do Ser. É um estudo sobre consciência e energia." },
    { question: "Preciso ter conhecimento prévio em terapias ou espiritualidade?", answer: "Não. O livro é escrito de forma acessível, explicando cada conceito passo a passo, do básico ao avançado." },
    { question: "É um e-book ou livro físico?", answer: "Está disponível em ambos os formatos. Após a compra, você receberá o acesso imediato à versão digital e, se optar pela física, ela será enviada para o seu endereço." },
    { question: "Quanto tempo leva para ler?", answer: "O livro tem 317 páginas. Uma leitura média leva de 5 a 8 horas, mas recomendamos fazê-la com calma para absorver os exercícios práticos." },
    { question: "As práticas descritas são seguras?", answer: "Sim. Todas as práticas são baseadas em tradições milenares e princípios naturais seguros. O autor orienta sobre os cuidados necessários em cada técnica." },
    { question: "Como recebo os bônus exclusivos?", answer: "Assim que sua compra for confirmada, os bônus digitais estarão disponíveis para download imediato na sua área de membros." }
  ];

  return (
    <section id="faq" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="font-cinzel text-3xl md:text-4xl font-bold mb-12 text-center">Perguntas <span className="text-amber-500">Frequentes</span></h2>
        <div className="space-y-2">
          {faqs.map((faq, i) => <FAQItem key={i} {...faq} />)}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
