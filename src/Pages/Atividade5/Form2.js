import React, { useState } from 'react';

export default function Form2() {
  const [firstName, setFirstName] = useState('Fulano');
  const [lastName, setLastName] = useState('Silva');

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    <form style={{ textAlign: 'center', margin: '30px auto' }}>
      <input
        type="text"
        value={firstName}
        onChange={handleFirstNameChange}
        placeholder="Nome"
      />
      <input
        type="text"
        value={lastName}
        onChange={handleLastNameChange}
        placeholder="Sobrenome"
        style={{ marginLeft: 10 }}
      />
      <p>Olá, {firstName} {lastName}!</p>
    </form>
  );
}
