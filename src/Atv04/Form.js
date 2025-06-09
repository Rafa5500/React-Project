import { useState } from 'react';
import './Form.css';

export default function Form() {
  const [to, setTo] = useState('Thor');
  const [message, setMessage] = useState('Olá');

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      alert(`Você disse ${message} para ${to}`);
    }, 2000);
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label>
        Para:
        <select value={to} onChange={e => setTo(e.target.value)}>
          <option value="Thor">Thor</option>
          <option value="Pantera">Pantera</option>
        </select>
      </label>
      <label>
        Mensagem:
        <textarea
          placeholder="Escreva sua mensagem"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}