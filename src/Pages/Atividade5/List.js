// Atividade 5/src/Pages/List.jsx
import React, { useState } from 'react';

let nextId = 0;

export default function List() {
  const [name, setName] = useState(''); // [cite: 407]
  const [artists, setArtists] = useState([]); // [cite: 407]

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      /> {/* [cite: 408] */}
      <button onClick={() => {
        setArtists([
          ...artists,
          { id: nextId++, name: name }
        ]); // [cite: 410]
        setName(''); // Clear input after adding
      }}>Add</button> {/* [cite: 408, 411] */}
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))} {/* [cite: 408] */}
      </ul>
    </>
  );
}