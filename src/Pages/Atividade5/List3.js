import React, { useState } from 'react';

let nextId = 3;

export default function List3() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([
    { id: 0, name: 'Leonardo da Vinci' },
    { id: 1, name: 'Vincent van Gogh' },
    { id: 2, name: 'Frida Kahlo' },
  ]);

  function handleAddClick() {
    if (name.trim() === '') return;
    setArtists([...artists, { id: nextId++, name }]);
    setName('');
  }

  return (
    <div style={{ textAlign: 'center', margin: '30px auto' }}>
      <h3>Adicionar Artista</h3>
      <input
        type="text"
        placeholder="Digite um nome"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={handleAddClick} style={{ marginLeft: 10 }}>
        Adicionar
      </button>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </div>
  );
}
