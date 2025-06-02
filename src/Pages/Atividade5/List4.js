// Atividade 5/src/Pages/List4.jsx
import React, { useState } from 'react';
import { initialList as artworksInitialList } from './data'; // Renomeando para evitar conflito se 'initialList' for usado para artistas. Ajuste o caminho.

export default function List4() {
  const [list, setList] = useState(artworksInitialList); // [cite: 443]

  function handleClick() {
    const nextList = [...list]; // [cite: 443]
    nextList.reverse(); // [cite: 443]
    setList(nextList); // [cite: 443]
  }

  return (
    <>
      <button onClick={handleClick}>
        Reverse
      </button> {/* [cite: 444] */}
      <ul>
        {list.map(artwork => (
          <li key={artwork.id}>{artwork.title}</li>
        ))} {/* [cite: 444] */}
      </ul>
    </>
  );
}