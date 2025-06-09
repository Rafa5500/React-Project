import { useState } from 'react';
import './FormQuiz.css';

export default function FormQuiz() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');

  if (status === 'success') {
    return (
      <div className="quiz-page-container">
        <h1 className="success-message">Correto!</h1>
      </div>
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <div className="quiz-page-container">
      <div className="quiz-card">
        <h2>Quiz de Cidade</h2>
        <p>
          Em qual cidade há um outdoor que transforma o ar em água potável?
        </p>
        <form onSubmit={handleSubmit}>
          <textarea
            value={answer}
            onChange={handleTextareaChange}
            disabled={status === 'submitting'}
          />
          <button
            disabled={
              answer.length === 0 ||
              status === 'submitting'
            }
          >
            Submit
          </button>
          {error !== null &&
            <p className="Error">
              {error.message}
            </p>
          }
        </form>
      </div>
    </div>
  );
}

function submitForm(answer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== 'lima';
      if (shouldError) {
        reject(new Error('Tente Novamente!'));
      } else {
        resolve();
      }
    }, 1500); // 1.5 segundos de "rede"
  });
}