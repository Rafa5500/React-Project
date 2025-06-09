import './ContactList.css';

export default function Contact({
  selectedContact, // Contato atualmente selecionado (recebido via props)
  contacts,        // Lista completa de contatos (recebida via props)
  onSelect         // Função para selecionar um contato (recebida via props)
}) {
  return (
    <section className="contact-list"> {/* Seção para estilização */}
      <ul>
        {contacts.map(contact => ( // Itera sobre cada contato para criar um item da lista
          <li key={contact.email}> {/* Cada item da lista tem uma chave única (email) */}
            <button
              onClick={() => {
                onSelect(contact); // Ao clicar no botão, chama a função onSelect com o contato clicado
              }}
              // Adiciona uma classe 'selected' se o contato atual for o selecionado
              className={contact.email === selectedContact.email ? 'selected' : ''}
            >
              {contact.name} {/* Exibe o nome do contato no botão */}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}