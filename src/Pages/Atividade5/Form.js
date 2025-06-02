import React, { useState } from 'react';

export default function Form() {
  const [name, setName] = useState('');

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Bem-vindo, ${name}!`);
  }

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: 'center', margin: '30px auto' }}>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Digite seu nome"
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
