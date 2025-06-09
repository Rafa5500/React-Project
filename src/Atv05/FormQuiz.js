import { useState } from 'react';
import './FormQuiz.css';

export default function FormQuiz() {
  const [answer, setAnswer] = useState('');
  const [status, setStatus] = useState('typing');

  if (status === 'success') {
    return <h2>A resposta está correta! Você conhece Ooo!</h2>;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    await delay(1500);
    if (answer.toLowerCase() === 'reino doce') {
      setStatus('success');
    } else {
      setStatus('error');
    }
  }

  function handleChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <>
      <h2>Quiz: Onde vive a Princesa Jujuba?</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleChange}
          disabled={status === 'submitting'}
          placeholder="Digite sua resposta aqui"
        />
        <br />
        <button disabled={status === 'submitting'}>
          Enviar
        </button>
        {status === 'error' &&
          <p className="Error">Resposta incorreta! Tente novamente.</p>
        }
      </form>
    </>
  );
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
