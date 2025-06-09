import { useState } from 'react';
import './FormTicket.css'; // Importe o arquivo CSS aqui

export default function FormTicket() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const fullName = firstName + ' ' + lastName;

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    // Contêiner principal para centralizar o card na página
    <div className="ticket-page-container">
      {/* O card do formulário de ticket */}
      <div className="ticket-form-card">
        <h2>Vamos fazer seu check-in</h2>
        <label>
          Primeiro nome:{' '}
          <input
            type="text" // Adicione type="text" para boa prática
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </label>
        <label>
          Último nome:{' '}
          <input
            type="text" // Adicione type="text" para boa prática
            value={lastName}
            onChange={handleLastNameChange}
          />
        </label>
        <p>
          Seu ingresso será emitido para: <b>{fullName}</b>
        </p>
      </div>
    </div>
  );
}