import { useState } from 'react';
import Chat from './Chat.js';
import Contact from './Contact.js';
import './ContactList.css';

export default function ContactList() {
  // Lista de contatos (dados)
  const contacts = [
    { name: 'Taylor', email: 'taylor@mail.com' },
    { name: 'Alice', email: 'alice@mail.com' },
    { name: 'Bob', email: 'bob@mail.com' }
  ];

  // Estado para o contato selecionado, inicializa com o primeiro contato da lista
  const [to, setTo] = useState(contacts[0]);

  return (
    <div className='contact-container'>
      {/* Componente que exibe a lista de contatos */}
      <Contact
        contacts={contacts} // Passa a lista completa de contatos
        selectedContact={to} // Passa o contato atualmente selecionado
        onSelect={contact => setTo(contact)} // Função para atualizar o contato selecionado
      />
      {/* Componente de chat, passando o contato selecionado */}
      <Chat contact={to} />
    </div>
  );
}