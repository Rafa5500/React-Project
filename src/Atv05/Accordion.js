import { useState } from 'react';
import './Accordion.css';

export default function Accordion() {
  return (
    <>
      <h2>Curiosidades do Reino de Ooo</h2>
      <Panel title="Quem é o Finn?">
        Finn é o último humano da Terra de Ooo. Ele luta contra o mal ao lado de seu melhor amigo, Jake.
      </Panel>
      <Panel title="Por que o Jake é especial?">
        Jake é um cão mágico com a habilidade de esticar e moldar seu corpo de formas incríveis!
      </Panel>
    </>
  );
}

function Panel({ title, children }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="accordion-panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={() => setIsActive(true)}>
          Mostrar
        </button>
      )}
    </section>
  );
}
