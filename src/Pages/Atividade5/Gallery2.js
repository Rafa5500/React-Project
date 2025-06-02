import React, { useState } from 'react';

const images = [
  {
    name: 'Homenaje a la Neurocirugía',
    artist: 'Marta Colvin Andrade',
    url: 'https://i.imgur.com/Mx7dA2Y.jpg',
    alt: 'Estátua de duas mãos segurando um cérebro.',
  },
  {
    name: 'Floralis Genérica',
    artist: 'Eduardo Catalano',
    url: 'https://i.imgur.com/ZF6s192m.jpg',
    alt: 'Flor metálica gigante que abre e fecha as pétalas.',
  },
  {
    name: 'Eternal Presence',
    artist: 'John Woodrow Wilson',
    url: 'https://i.imgur.com/aTtVpES.jpg',
    alt: 'Cabeça humana imponente e serena.',
  }
];

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const sculpture = images[index];

  function handleClick() {
    setIndex((index + 1) % images.length);
  }

  return (
    <div style={{ textAlign: 'center', margin: '30px auto', maxWidth: 400 }}>
      <button onClick={handleClick}>Próxima</button>
      <h2>
        <i>{sculpture.name}</i> por {sculpture.artist}
      </h2>
      <img src={sculpture.url} alt={sculpture.alt} width="100%" />
    </div>
  );
}
