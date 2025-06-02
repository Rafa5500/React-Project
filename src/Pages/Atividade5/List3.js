// Atividade 5/src/Pages/List3.jsx
import React, { useState } from 'react';
import { initialArtists } from './data'; // Ajuste o caminho se necessário

let nextId = initialArtists.length; // Start nextId after existing items

export default function List3() {
  const [name, setName] = useState(''); // [cite: 435]
  const [artists, setArtists] = useState(
    initialArtists // [cite: 435]
  );

  function handleClick() {
    const insertAt = 1; // Or any other index [cite: 436]
    const nextArtists = [
      ...artists.slice(0, insertAt), // [cite: 436]
      { id: nextId++, name: name }, // [cite: 436]
      ...artists.slice(insertAt) // [cite: 436]
    ];
    setArtists(nextArtists); // [cite: 437]
    setName(''); // [cite: 437]
  }

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      /> {/* [cite: 437] */}
      <button onClick={handleClick}>
        Insert
      </button> {/* [cite: 437] */}
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))} {/* [cite: 437] */}
      </ul>
    </>
  );
}