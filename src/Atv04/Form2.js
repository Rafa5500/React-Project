import { useState } from 'react';
import './Form2.css';

export default function Form2() {
  const [hero, setHero] = useState({
    name: 'Finn Mertens',
    alias: 'Finn',
    power: 'Espadas e coragem'
  });

  function handleNameChange(e) {
    setHero({
      ...hero,
      name: e.target.value
    });
  }

  function handleAliasChange(e) {
    setHero({
      ...hero,
      alias: e.target.value
    });
  }

  function handlePowerChange(e) {
    setHero({
      ...hero,
      power: e.target.value
    });
  }

  return (
    <div className="form-page-container">
      <div className="form-container">
        <h2>Cadastro de Aventureiro</h2>

        <label>
          Nome real:
          <input
            type="text"
            value={hero.name}
            onChange={handleNameChange}
          />
        </label>

        <label>
          Codinome:
          <input
            type="text"
            value={hero.alias}
            onChange={handleAliasChange}
          />
        </label>

        <label>
          Habilidade especial:
          <input
            type="text"
            value={hero.power}
            onChange={handlePowerChange}
          />
        </label>

        <p>
          {hero.alias} ({hero.name}) - {hero.power}
        </p>
      </div>
    </div>
  );
}
