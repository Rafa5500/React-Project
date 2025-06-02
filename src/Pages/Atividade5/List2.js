// Atividade 5/src/Pages/List2.jsx
import React, { useState } from 'react';
import { initialArtists } from './data'; // Ajuste o caminho se necessário

export default function List2() {
  const [artists, setArtists] = useState(
    initialArtists
  ); // [cite: 415]

  return (
    <>
      <h1>Inspiring sculptors: </h1>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            {artist.name}{' '}
            <button onClick={() => {
              setArtists(
                artists.filter(a =>
                  a.id !== artist.id
                )
              ); // [cite: 416]
            }}>
              Delete
            </button>
          </li>
        ))} {/* [cite: 416] */}
      </ul>
    </>
  );
}