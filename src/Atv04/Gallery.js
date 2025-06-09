import { useState } from 'react';
import { heroes } from './Data';
import './Gallery.css';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const hero = heroes[index];

  function handleNextClick() {
    setIndex((index + 1) % heroes.length);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  return (
    <div className="atv04-gallery-container">
        <div className="atv04-gallery-header">
        <h2 className="atv04-gallery-h2">
            <i>{hero.name}</i> é {hero.artist}
        </h2>
        <h3 className="atv04-gallery-h3">
            ({index + 1} de {heroes.length})
        </h3>
        </div>

        <div className="atv04-gallery-buttons">
        <button className="atv04-gallery-button" onClick={handleNextClick}>
            Próximo
        </button>

        <button className="atv04-gallery-button" onClick={handleMoreClick}>
            {showMore ? 'Esconder' : 'Mostrar'} detalhes
        </button>
        </div>

        <img className="atv04-gallery-image" src={hero.url} alt={hero.alt} />

        {showMore && <p className="atv04-gallery-description">{hero.description}</p>}
    </div>
    );
}