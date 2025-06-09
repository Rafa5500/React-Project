import { useState } from 'react';
import './ContactList.css';

export default function Chat({ contact }) { // Recebe o contato selecionado via props
  const [text, setText] = useState(''); // Estado para o texto digitado na área de texto

  return (
    <section className="chat"> {/* Seção para estilização */}
      <textarea
        value={text} // Valor da área de texto é controlado pelo estado 'text'
        placeholder={'Conversar com ' + contact.name} // Texto de placeholder dinâmico
        onChange={e => setText(e.target.value)} // Atualiza o estado 'text' ao digitar
      />
      <br /> {/* Quebra de linha (pode ser substituída por CSS para espaçamento) */}
      <button>Enviar para {contact.email}</button> {/* Botão de envio com o email do contato */}
    </section>
  );
}