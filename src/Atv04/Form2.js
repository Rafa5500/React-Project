// Form2.js
import { useState } from 'react';
import './Form2.css'; // Importe o arquivo CSS aqui

export default function Form2() {
  const [hero, setHero] = useState({
    name: 'Peter Parker',
    alias: 'Homem-Aranha',
    power: 'teia orgânica'
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
        <h2>Cadastro de Herói</h2>

        <label>
          Nome real:
          <input
            type="text" // Adicione o type="text"
            value={hero.name}
            onChange={handleNameChange}
          />
        </label>
        {/* <br /> não é necessário quando usando display: block para labels/inputs */}

        <label>
          Codinome:
          <input
            type="text" // Adicione o type="text"
            value={hero.alias}
            onChange={handleAliasChange}
          />
        </label>
        {/* <br /> */}

        <label>
          Poder especial:
          <input
            type="text" // Adicione o type="text"
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