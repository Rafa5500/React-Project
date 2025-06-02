import React, { useState } from 'react';

const initialList = [
  { id: 0, name: 'Leonardo da Vinci' },
  { id: 1, name: 'Vincent van Gogh' },
  { id: 2, name: 'Frida Kahlo' },
];

export default function List4() {
  const [artists, setArtists] = useState(initialList);

  function handleRemove(id) {
    setArtists(artists.filter(artist => artist.id !== id));
  }

  return (
    <div style={{ textAlign: 'center', margin: '30px auto' }}>
      <h3>Remover Artista</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {artists.map(artist => (
          <li key={artist.id}>
            {artist.name}
            <button
              onClick={() => handleRemove(artist.id)}
              style={{ marginLeft: 10 }}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
