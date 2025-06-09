import { useState } from 'react';
import './Form2.css';

export default function Form3() {
  const [hero, setHero] = useState({
    name: 'Peter Parker',
    profile: {
      alias: 'Homem-Aranha',
      city: 'Nova York',
      image: 'haranha.jpg'
    }
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
      profile: {
        ...hero.profile,
        alias: e.target.value
      }
    });
  }

  function handleCityChange(e) {
    setHero({
      ...hero,
      profile: {
        ...hero.profile,
        city: e.target.value
      }
    });
  }

  function handleImageChange(e) {
    setHero({
      ...hero,
      profile: {
        ...hero.profile,
        image: e.target.value
      }
    });
  }

  return (
    <div className="form-page-container">
      <div className="form-container">
        <h2>Ficha do Herói</h2>

        <label>
          Nome verdadeiro:
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
            value={hero.profile.alias}
            onChange={handleAliasChange}
          />
        </label>

        <label>
          Base de operações:
          <input
            type="text"
            value={hero.profile.city}
            onChange={handleCityChange}
          />
        </label>

        <label>
          URL da Imagem:
          <input
            type="text"
            value={hero.profile.image}
            onChange={handleImageChange}
          />
        </label>

        <p>
          <i>{hero.profile.alias}</i> {' (by '}
          {hero.name}
          {') '}
          <br />
          <small>(base: {hero.profile.city})</small>
        </p>


        <img
          src={hero.profile.image}
          alt={hero.profile.alias}
          width={200}
        />
      </div>
    </div>
  );
}