// Atividade 5/src/Pages/Gallery.jsx
import React, { useState } from 'react';
import { sculptureList } from './data'; // Ajuste o caminho se o data.js estiver em outro local

export default function Gallery() {
  const [index, setIndex] = useState(0); // [cite: 170]
  const [showMore, setShowMore] = useState(false); // [cite: 170]

  function handleNextClick() {
    if (index < sculptureList.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0); // Volta para o início
    }
  } // [cite: 171]

  function handleMoreClick() {
    setShowMore(!showMore); // [cite: 171]
  }

  let sculpture = sculptureList[index]; // [cite: 171]
  return (
    <>
      <button onClick={handleNextClick}>
        Next
      </button> {/* [cite: 172] */}
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2> {/* [cite: 172] */}
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3> {/* [cite: 172] */}
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button> {/* [cite: 172] */}
      {showMore && <p>{sculpture.description}</p>} {/* [cite: 172] */}
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      /> {/* [cite: 172] */}
    </>
  ); // [cite: 171, 172]
}