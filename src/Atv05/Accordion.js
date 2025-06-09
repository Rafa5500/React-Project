import { useState } from 'react';
import './Accordion.css';

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="accordion-page-container">
      <div className="accordion-container">
        <Panel
          title="Sobre"
          isActive={activeIndex === 0}
          onShow={() => setActiveIndex(activeIndex === 0 ? null : 0)}
        >
          <h2>Almaty, Cazaquistão</h2>
          <p>
            Com uma população de cerca de 2 milhões, Almaty é a maior cidade do Cazaquistão. De 1929 a 1997,
            foi a capital do país.
          </p>
        </Panel>

        <Panel
          title="Etimologia"
          isActive={activeIndex === 1}
          onShow={() => setActiveIndex(activeIndex === 1 ? null : 1)}
        >
          <p>
            O nome vem do
            <span lang="kk-KZ"> алмa</span>, a palavra cazaque para "maçã", e é frequentemente traduzido como "cheio de maçãs". De fato, a região ao redor de
            Almaty é considerada o lar ancestral da maçã, e a
            <i lang="la"> Malus sieversii</i> selvagem
            é considerada uma provável candidata para o ancestral da maçã doméstica moderna.
          </p>
        </Panel>
      </div>
    </div>
  );
}

function Panel({ title, children, isActive, onShow }) {
  return (
    <section className="panel-section">
      <h3 onClick={onShow}>
        {title}
        <span className={`arrow ${isActive ? 'up' : 'down'}`}>&#9660;</span>
      </h3>
      <div className="panel-content" aria-hidden={!isActive}>
        {children}
      </div>
    </section>
  );
}